import{a as hi,h as gn}from"./chunk-S3PSVZYP.js";import{$a as ve,$b as De,Aa as re,Ba as M,Ca as _e,Cb as se,Fa as f,Fb as dn,Ha as I,Ia as a,Ja as yt,Jb as un,Ka as ut,Kb as v,La as Ke,Lb as ue,M as li,Ma as j,Mb as we,N as V,Na as vt,Nb as hn,O as ie,Ob as Je,Q as on,Ra as b,Rb as st,S as sn,Sa as y,T as L,Ta as A,Ua as R,Va as P,W as B,Wa as z,X as ne,Xa as Z,Y as Se,Ya as N,Yb as Fe,Z as rn,Za as c,Zb as Ct,_a as ye,_b as ke,a as D,aa as Ye,ab as U,ac as Ve,b as dt,ba as w,bb as ee,ca as x,cb as S,da as Ee,db as C,dc as le,eb as me,ec as Ne,fa as T,fb as de,fc as fn,gb as Ce,h as it,ha as ln,hb as St,ic as mn,ja as $,jb as pi,ka as Le,kb as di,la as nt,lb as ui,ma as ai,mb as Y,na as bt,nb as q,ob as Ue,pb as W,qb as Pe,rb as ot,sa as p,ta as pe,va as ci,xa as an,xb as pn,ya as cn}from"./chunk-HHIJ2ADB.js";function ht(t,o){return t?t.classList?t.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(t.className):!1}function rt(t,o){if(t&&o){let e=i=>{ht(t,i)||(t.classList?t.classList.add(i):t.className+=" "+i)};[o].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(e))}}function Mo(){return window.innerWidth-document.documentElement.offsetWidth}function wt(t){for(let o of document?.styleSheets)try{for(let e of o?.cssRules)for(let i of e?.style)if(t.test(i))return{name:i,value:e.style.getPropertyValue(i).trim()}}catch{}return null}function Wc(t="p-overflow-hidden"){let o=wt(/-scrollbar-width$/);o?.name&&document.body.style.setProperty(o.name,Mo()+"px"),rt(document.body,t)}function Xe(t,o){if(t&&o){let e=i=>{t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(e))}}function fi(t="p-overflow-hidden"){let o=wt(/-scrollbar-width$/);o?.name&&document.body.style.removeProperty(o.name),Xe(document.body,t)}function _n(t){let o={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",o.width=t.offsetWidth,o.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),o}function mi(){let t=window,o=document,e=o.documentElement,i=o.getElementsByTagName("body")[0],n=t.innerWidth||e.clientWidth||i.clientWidth,s=t.innerHeight||e.clientHeight||i.clientHeight;return{width:n,height:s}}function ki(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function Di(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function Kc(t,o,e=!0){var i,n,s,r;if(t){let l=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:_n(t),d=l.height,u=l.width,h=o.offsetHeight,g=o.offsetWidth,m=o.getBoundingClientRect(),_=Di(),O=ki(),H=mi(),E,F,k="top";m.top+h+d>H.height?(E=m.top+_-d,k="bottom",E<0&&(E=_)):E=h+m.top+_,m.left+u>H.width?F=Math.max(0,m.left+O+g-u):F=m.left+O,t.style.top=E+"px",t.style.left=F+"px",t.style.transformOrigin=k,e&&(t.style.marginTop=k==="bottom"?`calc(${(n=(i=wt(/-anchor-gutter$/))==null?void 0:i.value)!=null?n:"2px"} * -1)`:(r=(s=wt(/-anchor-gutter$/))==null?void 0:s.value)!=null?r:"")}}function Uc(t,o){t&&(typeof o=="string"?t.style.cssText=o:Object.entries(o||{}).forEach(([e,i])=>t.style[e]=i))}function je(t,o){if(t instanceof HTMLElement){let e=t.offsetWidth;if(o){let i=getComputedStyle(t);e+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return e}return 0}function jc(t,o,e=!0){var i,n,s,r;if(t){let l=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:_n(t),d=o.offsetHeight,u=o.getBoundingClientRect(),h=mi(),g,m,_="top";u.top+d+l.height>h.height?(g=-1*l.height,_="bottom",u.top+g<0&&(g=-1*u.top)):g=d,l.width>h.width?m=u.left*-1:u.left+l.width>h.width?m=(u.left+l.width-h.width)*-1:m=0,t.style.top=g+"px",t.style.left=m+"px",t.style.transformOrigin=_,e&&(t.style.marginTop=_==="bottom"?`calc(${(n=(i=wt(/-anchor-gutter$/))==null?void 0:i.value)!=null?n:"2px"} * -1)`:(r=(s=wt(/-anchor-gutter$/))==null?void 0:s.value)!=null?r:"")}}function At(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function Vi(t){let o=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?o=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?o=t.el.nativeElement:o=t.el)),At(o)?o:void 0}function $i(t,o){let e=Vi(t);if(e)e.appendChild(o);else throw new Error("Cannot append "+o+" to "+t)}function gi(t,o={}){if(At(t)){let e=(i,n)=>{var s,r;let l=(s=t?.$attrs)!=null&&s[i]?[(r=t?.$attrs)==null?void 0:r[i]]:[];return[n].flat().reduce((d,u)=>{if(u!=null){let h=typeof u;if(h==="string"||h==="number")d.push(u);else if(h==="object"){let g=Array.isArray(u)?e(i,u):Object.entries(u).map(([m,_])=>i==="style"&&(_||_===0)?`${m.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${_}`:_?m:void 0);d=g.length?d.concat(g.filter(m=>!!m)):d}}return d},l)};Object.entries(o).forEach(([i,n])=>{if(n!=null){let s=i.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),n):i==="p-bind"||i==="pBind"?gi(t,n):(n=i==="class"?[...new Set(e("class",n))].join(" ").trim():i==="style"?e("style",n).join(";").trim():n,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=n),t.setAttribute(i,n))}})}}function Gc(t,o={},...e){if(t){let i=document.createElement(t);return gi(i,o),i.append(...e),i}}function bn(t,o){if(t){t.style.opacity="0";let e=+new Date,i="0",n=function(){i=`${+t.style.opacity+(new Date().getTime()-e)/o}`,t.style.opacity=i,e=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(n)||setTimeout(n,16))};n()}}function Ao(t,o){return At(t)?Array.from(t.querySelectorAll(o)):[]}function he(t,o){return At(t)?t.matches(o)?t:t.querySelector(o):null}function ce(t,o){t&&document.activeElement!==t&&t.focus(o)}function xt(t,o=""){let e=Ao(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`),i=[];for(let n of e)getComputedStyle(n).display!="none"&&getComputedStyle(n).visibility!="hidden"&&i.push(n);return i}function _i(t,o){let e=xt(t,o);return e.length>0?e[0]:null}function Ge(t){if(t){let o=t.offsetHeight,e=getComputedStyle(t);return o-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),o}return 0}function yn(t){if(t){let o=t.parentNode;return o&&o instanceof ShadowRoot&&o.host&&(o=o.host),o}return null}function qc(t){var o;if(t){let e=(o=yn(t))==null?void 0:o.childNodes,i=0;if(e)for(let n=0;n<e.length;n++){if(e[n]===t)return i;e[n].nodeType===1&&i++}}return-1}function bi(t,o){let e=xt(t,o);return e.length>0?e[e.length-1]:null}function vn(t){if(t){let o=t.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function ze(t,o){if(t){let e=t.offsetHeight;if(o){let i=getComputedStyle(t);e+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return e}return 0}function Qc(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function Ro(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&yn(t))}function Sn(t,o){var e;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@parent":return o?.parentElement;case"@grandparent":return(e=o?.parentElement)==null?void 0:e.parentElement;default:if(typeof t=="string")return document.querySelector(t);let n=Vi((s=>!!(s&&s.constructor&&s.call&&s.apply))(t)?t():t);return n?.nodeType===9||Ro(n)?n:void 0}}function qe(t){if(t){let o=t.offsetWidth,e=getComputedStyle(t);return o-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),o}return 0}function Mi(t){return!!(t&&t.offsetParent!=null)}function ft(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Cn(t){var o;t&&("remove"in Element.prototype?t.remove():(o=t.parentNode)==null||o.removeChild(t))}function wn(t,o){let e=Vi(t);if(e)e.removeChild(o);else throw new Error("Cannot remove "+o+" from "+t)}function yi(t,o){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=e?parseFloat(e):0,n=getComputedStyle(t).getPropertyValue("paddingTop"),s=n?parseFloat(n):0,r=t.getBoundingClientRect(),d=o.getBoundingClientRect().top+document.body.scrollTop-(r.top+document.body.scrollTop)-i-s,u=t.scrollTop,h=t.clientHeight,g=ze(o);d<0?t.scrollTop=u+d:d+g>h&&(t.scrollTop=u+d-h+g)}function xn(t,o="",e){At(t)&&e!==null&&e!==void 0&&t.setAttribute(o,e)}function In(){let t=new Map;return{on(o,e){let i=t.get(o);return i?i.push(e):i=[e],t.set(o,i),this},off(o,e){let i=t.get(o);return i&&i.splice(i.indexOf(e)>>>0,1),this},emit(o,e){let i=t.get(o);i&&i.slice().map(n=>{n(e)})},clear(){t.clear()}}}function fe(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Ai(t,o,e=new WeakSet){if(t===o)return!0;if(!t||!o||typeof t!="object"||typeof o!="object"||e.has(t)||e.has(o))return!1;e.add(t).add(o);let i=Array.isArray(t),n=Array.isArray(o),s,r,l;if(i&&n){if(r=t.length,r!=o.length)return!1;for(s=r;s--!==0;)if(!Ai(t[s],o[s],e))return!1;return!0}if(i!=n)return!1;let d=t instanceof Date,u=o instanceof Date;if(d!=u)return!1;if(d&&u)return t.getTime()==o.getTime();let h=t instanceof RegExp,g=o instanceof RegExp;if(h!=g)return!1;if(h&&g)return t.toString()==o.toString();let m=Object.keys(t);if(r=m.length,r!==Object.keys(o).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(o,m[s]))return!1;for(s=r;s--!==0;)if(l=m[s],!Ai(t[l],o[l],e))return!1;return!0}function Rt(t,o){return Ai(t,o)}function On(t){return!!(t&&t.constructor&&t.call&&t.apply)}function K(t){return!fe(t)}function be(t,o){if(!t||!o)return null;try{let e=t[o];if(K(e))return e}catch{}if(Object.keys(t).length){if(On(o))return o(t);if(o.indexOf(".")===-1)return t[o];{let e=o.split("."),i=t;for(let n=0,s=e.length;n<s;++n){if(i==null)return null;i=i[e[n]]}return i}}return null}function mt(t,o,e){return e?be(t,e)===be(o,e):Rt(t,o)}function Xc(t,o){if(t!=null&&o&&o.length){for(let e of o)if(mt(t,e))return!0}return!1}function It(t,o){let e=-1;if(K(t))try{e=t.findLastIndex(o)}catch{e=t.lastIndexOf([...t].reverse().find(o))}return e}function et(t,o=!0){return t instanceof Object&&t.constructor===Object&&(o||Object.keys(t).length!==0)}function $e(t,...o){return On(t)?t(...o):t}function lt(t,o=!0){return typeof t=="string"&&(o||t!=="")}function Tn(t){return lt(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function vi(t,o="",e={}){let i=Tn(o).split("."),n=i.shift();return n?et(t)?vi($e(t[Object.keys(t).find(s=>Tn(s)===n)||""],e),i.join("."),e):void 0:$e(t,e)}function Si(t,o=!0){return Array.isArray(t)&&(o||t.length!==0)}function ep(t){return t instanceof Date&&t.constructor===Date}function En(t){return K(t)&&!isNaN(t)}function Ci(t=""){return K(t)&&t.length===1&&!!t.match(/\S| /)}function xe(t,o){if(o){let e=o.test(t);return o.lastIndex=0,e}return!1}function gt(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function Ie(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let i in e)t=t.replace(e[i],i)}return t}function wi(t){return lt(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(o,e)=>e===0?o:"-"+o.toLowerCase()).toLowerCase():t}function Ri(t){return lt(t)?t.replace(/[A-Z]/g,(o,e)=>e===0?o:"."+o.toLowerCase()).toLowerCase():t}var xi={};function Te(t="pui_id_"){return xi.hasOwnProperty(t)||(xi[t]=0),xi[t]++,`${t}${xi[t]}`}function Po(){let t=[],o=(r,l,d=999)=>{let u=n(r,l,d),h=u.value+(u.key===r?0:d)+1;return t.push({key:r,value:h}),h},e=r=>{t=t.filter(l=>l.value!==r)},i=(r,l)=>n(r,l).value,n=(r,l,d=0)=>[...t].reverse().find(u=>l?!0:u.key===r)||{key:r,value:d},s=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:s,set:(r,l,d)=>{l&&(l.style.zIndex=String(o(r,!0,d)))},clear:r=>{r&&(e(s(r)),r.style.zIndex="")},getCurrent:r=>i(r,!0)}}var np=Po();var No=function(t){return t[t.ACCEPT=0]="ACCEPT",t[t.REJECT=1]="REJECT",t[t.CANCEL=2]="CANCEL",t}(No||{}),gp=(()=>{class t{requireConfirmationSource=new it;acceptConfirmationSource=new it;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(e){return this.requireConfirmationSource.next(e),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var ge=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),_p=(()=>{class t{static AND="and";static OR="or"}return t})(),Ii=(()=>{class t{filter(e,i,n,s,r){let l=[];if(e)for(let d of e)for(let u of i){let h=be(d,u);if(this.filters[s](h,n,r)){l.push(d);break}}return l}filters={startsWith:(e,i,n)=>{if(i==null||i.trim()==="")return!0;if(e==null)return!1;let s=Ie(i.toString()).toLocaleLowerCase(n);return Ie(e.toString()).toLocaleLowerCase(n).slice(0,s.length)===s},contains:(e,i,n)=>{if(i==null||typeof i=="string"&&i.trim()==="")return!0;if(e==null)return!1;let s=Ie(i.toString()).toLocaleLowerCase(n);return Ie(e.toString()).toLocaleLowerCase(n).indexOf(s)!==-1},notContains:(e,i,n)=>{if(i==null||typeof i=="string"&&i.trim()==="")return!0;if(e==null)return!1;let s=Ie(i.toString()).toLocaleLowerCase(n);return Ie(e.toString()).toLocaleLowerCase(n).indexOf(s)===-1},endsWith:(e,i,n)=>{if(i==null||i.trim()==="")return!0;if(e==null)return!1;let s=Ie(i.toString()).toLocaleLowerCase(n),r=Ie(e.toString()).toLocaleLowerCase(n);return r.indexOf(s,r.length-s.length)!==-1},equals:(e,i,n)=>i==null||typeof i=="string"&&i.trim()===""?!0:e==null?!1:e.getTime&&i.getTime?e.getTime()===i.getTime():e==i?!0:Ie(e.toString()).toLocaleLowerCase(n)==Ie(i.toString()).toLocaleLowerCase(n),notEquals:(e,i,n)=>i==null||typeof i=="string"&&i.trim()===""?!1:e==null?!0:e.getTime&&i.getTime?e.getTime()!==i.getTime():e==i?!1:Ie(e.toString()).toLocaleLowerCase(n)!=Ie(i.toString()).toLocaleLowerCase(n),in:(e,i)=>{if(i==null||i.length===0)return!0;for(let n=0;n<i.length;n++)if(mt(e,i[n]))return!0;return!1},between:(e,i)=>i==null||i[0]==null||i[1]==null?!0:e==null?!1:e.getTime?i[0].getTime()<=e.getTime()&&e.getTime()<=i[1].getTime():i[0]<=e&&e<=i[1],lt:(e,i,n)=>i==null?!0:e==null?!1:e.getTime&&i.getTime?e.getTime()<i.getTime():e<i,lte:(e,i,n)=>i==null?!0:e==null?!1:e.getTime&&i.getTime?e.getTime()<=i.getTime():e<=i,gt:(e,i,n)=>i==null?!0:e==null?!1:e.getTime&&i.getTime?e.getTime()>i.getTime():e>i,gte:(e,i,n)=>i==null?!0:e==null?!1:e.getTime&&i.getTime?e.getTime()>=i.getTime():e>=i,is:(e,i,n)=>this.filters.equals(e,i,n),isNot:(e,i,n)=>this.filters.notEquals(e,i,n),before:(e,i,n)=>this.filters.lt(e,i,n),after:(e,i,n)=>this.filters.gt(e,i,n),dateIs:(e,i)=>i==null?!0:e==null?!1:e.toDateString()===i.toDateString(),dateIsNot:(e,i)=>i==null?!0:e==null?!1:e.toDateString()!==i.toDateString(),dateBefore:(e,i)=>i==null?!0:e==null?!1:e.getTime()<i.getTime(),dateAfter:(e,i)=>i==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>i.getTime())};register(e,i){this.filters[e]=i}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bp=(()=>{class t{messageSource=new it;clearSource=new it;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),Ln=(()=>{class t{clickSource=new it;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Fn=["*"],yp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=B({type:t,selectors:[["p-header"]],ngContentSelectors:Fn,decls:1,vars:0,template:function(i,n){i&1&&(ye(),ve(0))},encapsulation:2})}return t})(),vp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=B({type:t,selectors:[["p-footer"]],ngContentSelectors:Fn,decls:1,vars:0,template:function(i,n){i&1&&(ye(),ve(0))},encapsulation:2})}return t})(),Qe=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(i){return new(i||t)(pe(ci))};static \u0275dir=Se({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]},standalone:!0})}return t})(),J=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[le]})}return t})(),at=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var zo=Object.defineProperty,Ho=Object.defineProperties,Bo=Object.getOwnPropertyDescriptors,Ti=Object.getOwnPropertySymbols,Vn=Object.prototype.hasOwnProperty,$n=Object.prototype.propertyIsEnumerable,kn=(t,o,e)=>o in t?zo(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,Be=(t,o)=>{for(var e in o||(o={}))Vn.call(o,e)&&kn(t,e,o[e]);if(Ti)for(var e of Ti(o))$n.call(o,e)&&kn(t,e,o[e]);return t},Ni=(t,o)=>Ho(t,Bo(o)),tt=(t,o)=>{var e={};for(var i in t)Vn.call(t,i)&&o.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&Ti)for(var i of Ti(t))o.indexOf(i)<0&&$n.call(t,i)&&(e[i]=t[i]);return e};var Wo=In(),Ae=Wo;function Dn(t,o){Si(t)?t.push(...o||[]):et(t)&&Object.assign(t,o)}function Ko(t){return et(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Uo(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function zi(t="",o=""){return Uo(`${lt(t,!1)&&lt(o,!1)?`${t}-`:t}${o}`)}function Mn(t="",o=""){return`--${zi(t,o)}`}function jo(t=""){let o=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(o+e)%2!==0}function An(t,o="",e="",i=[],n){if(lt(t)){let s=/{([^}]*)}/g,r=t.trim();if(jo(r))return;if(xe(r,s)){let l=r.replaceAll(s,h=>{let m=h.replace(/{|}/g,"").split(".").filter(_=>!i.some(O=>xe(_,O)));return`var(${Mn(e,wi(m.join("-")))}${K(n)?`, ${n}`:""})`}),d=/(\d+\s+[\+\-\*\/]\s+\d+)/g,u=/var\([^)]+\)/g;return xe(l.replace(u,"0"),d)?`calc(${l})`:l}return r}else if(En(t))return t}function Go(t,o,e){lt(o,!1)&&t.push(`${o}:${e};`)}function Tt(t,o){return t?`${t}{${o}}`:""}var Ot=(...t)=>qo(X.getTheme(),...t),qo=(t={},o,e,i)=>{if(o){let{variable:n,options:s}=X.defaults||{},{prefix:r,transform:l}=t?.options||s||{},u=xe(o,/{([^}]*)}/g)?o:`{${o}}`;return i==="value"||fe(i)&&l==="strict"?X.getTokenValue(o):An(u,void 0,r,[n.excludedKeyRegex],e)}return""};function Qo(t,o={}){let e=X.defaults.variable,{prefix:i=e.prefix,selector:n=e.selector,excludedKeyRegex:s=e.excludedKeyRegex}=o,r=(u,h="")=>Object.entries(u).reduce((g,[m,_])=>{let O=xe(m,s)?zi(h):zi(h,wi(m)),H=Ko(_);if(et(H)){let{variables:E,tokens:F}=r(H,O);Dn(g.tokens,F),Dn(g.variables,E)}else g.tokens.push((i?O.replace(`${i}-`,""):O).replaceAll("-",".")),Go(g.variables,Mn(O),An(H,O,i,[s]));return g},{variables:[],tokens:[]}),{variables:l,tokens:d}=r(t,i);return{value:l,tokens:d,declarations:l.join(""),css:Tt(n,l.join(""))}}var He={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let o=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var i;return(i=o.map(n=>n.resolve(e)).find(n=>n.matched))!=null?i:this.rules.custom.resolve(e)})}},_toVariables(t,o){return Qo(t,{prefix:o?.prefix})},getCommon({name:t="",theme:o={},params:e,set:i,defaults:n}){var s,r,l,d,u,h,g;let{preset:m,options:_}=o,O,H,E,F,k,ae,oe;if(K(m)&&_.transform!=="strict"){let{primitive:Oe,semantic:Ze,extend:qt}=m,Vt=Ze||{},{colorScheme:Qt}=Vt,Zt=tt(Vt,["colorScheme"]),Yt=qt||{},{colorScheme:Jt}=Yt,$t=tt(Yt,["colorScheme"]),Mt=Qt||{},{dark:Xt}=Mt,ei=tt(Mt,["dark"]),ti=Jt||{},{dark:ii}=ti,ni=tt(ti,["dark"]),oi=K(Oe)?this._toVariables({primitive:Oe},_):{},si=K(Zt)?this._toVariables({semantic:Zt},_):{},ri=K(ei)?this._toVariables({light:ei},_):{},Xi=K(Xt)?this._toVariables({dark:Xt},_):{},en=K($t)?this._toVariables({semantic:$t},_):{},tn=K(ni)?this._toVariables({light:ni},_):{},nn=K(ii)?this._toVariables({dark:ii},_):{},[_o,bo]=[(s=oi.declarations)!=null?s:"",oi.tokens],[yo,vo]=[(r=si.declarations)!=null?r:"",si.tokens||[]],[So,Co]=[(l=ri.declarations)!=null?l:"",ri.tokens||[]],[wo,xo]=[(d=Xi.declarations)!=null?d:"",Xi.tokens||[]],[Io,To]=[(u=en.declarations)!=null?u:"",en.tokens||[]],[Oo,Eo]=[(h=tn.declarations)!=null?h:"",tn.tokens||[]],[Lo,Fo]=[(g=nn.declarations)!=null?g:"",nn.tokens||[]];O=this.transformCSS(t,_o,"light","variable",_,i,n),H=bo;let ko=this.transformCSS(t,`${yo}${So}`,"light","variable",_,i,n),Do=this.transformCSS(t,`${wo}`,"dark","variable",_,i,n);E=`${ko}${Do}`,F=[...new Set([...vo,...Co,...xo])];let Vo=this.transformCSS(t,`${Io}${Oo}color-scheme:light`,"light","variable",_,i,n),$o=this.transformCSS(t,`${Lo}color-scheme:dark`,"dark","variable",_,i,n);k=`${Vo}${$o}`,ae=[...new Set([...To,...Eo,...Fo])],oe=$e(m.css,{dt:Ot})}return{primitive:{css:O,tokens:H},semantic:{css:E,tokens:F},global:{css:k,tokens:ae},style:oe}},getPreset({name:t="",preset:o={},options:e,params:i,set:n,defaults:s,selector:r}){var l,d,u;let h,g,m;if(K(o)&&e.transform!=="strict"){let _=t.replace("-directive",""),O=o,{colorScheme:H,extend:E,css:F}=O,k=tt(O,["colorScheme","extend","css"]),ae=E||{},{colorScheme:oe}=ae,Oe=tt(ae,["colorScheme"]),Ze=H||{},{dark:qt}=Ze,Vt=tt(Ze,["dark"]),Qt=oe||{},{dark:Zt}=Qt,Yt=tt(Qt,["dark"]),Jt=K(k)?this._toVariables({[_]:Be(Be({},k),Oe)},e):{},$t=K(Vt)?this._toVariables({[_]:Be(Be({},Vt),Yt)},e):{},Mt=K(qt)?this._toVariables({[_]:Be(Be({},qt),Zt)},e):{},[Xt,ei]=[(l=Jt.declarations)!=null?l:"",Jt.tokens||[]],[ti,ii]=[(d=$t.declarations)!=null?d:"",$t.tokens||[]],[ni,oi]=[(u=Mt.declarations)!=null?u:"",Mt.tokens||[]],si=this.transformCSS(_,`${Xt}${ti}`,"light","variable",e,n,s,r),ri=this.transformCSS(_,ni,"dark","variable",e,n,s,r);h=`${si}${ri}`,g=[...new Set([...ei,...ii,...oi])],m=$e(F,{dt:Ot})}return{css:h,tokens:g,style:m}},getPresetC({name:t="",theme:o={},params:e,set:i,defaults:n}){var s;let{preset:r,options:l}=o,d=(s=r?.components)==null?void 0:s[t];return this.getPreset({name:t,preset:d,options:l,params:e,set:i,defaults:n})},getPresetD({name:t="",theme:o={},params:e,set:i,defaults:n}){var s;let r=t.replace("-directive",""),{preset:l,options:d}=o,u=(s=l?.directives)==null?void 0:s[r];return this.getPreset({name:r,preset:u,options:d,params:e,set:i,defaults:n})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,o){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?o.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:o.options.darkModeSelector):[]},getLayerOrder(t,o={},e,i){let{cssLayer:n}=o;return n?`@layer ${$e(n.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:o={},params:e,props:i={},set:n,defaults:s}){let r=this.getCommon({name:t,theme:o,params:e,set:n,defaults:s}),l=Object.entries(i).reduce((d,[u,h])=>d.push(`${u}="${h}"`)&&d,[]).join(" ");return Object.entries(r||{}).reduce((d,[u,h])=>{if(h?.css){let g=gt(h?.css),m=`${u}-variables`;d.push(`<style type="text/css" data-primevue-style-id="${m}" ${l}>${g}</style>`)}return d},[]).join("")},getStyleSheet({name:t="",theme:o={},params:e,props:i={},set:n,defaults:s}){var r;let l={name:t,theme:o,params:e,set:n,defaults:s},d=(r=t.includes("-directive")?this.getPresetD(l):this.getPresetC(l))==null?void 0:r.css,u=Object.entries(i).reduce((h,[g,m])=>h.push(`${g}="${m}"`)&&h,[]).join(" ");return d?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${gt(d)}</style>`:""},createTokens(t={},o,e="",i="",n={}){return Object.entries(t).forEach(([s,r])=>{let l=xe(s,o.variable.excludedKeyRegex)?e:e?`${e}.${Ri(s)}`:Ri(s),d=i?`${i}.${s}`:s;et(r)?this.createTokens(r,o,l,d,n):(n[l]||(n[l]={paths:[],computed(u,h={}){var g,m;return this.paths.length===1?(g=this.paths[0])==null?void 0:g.computed(this.paths[0].scheme,h.binding):u&&u!=="none"?(m=this.paths.find(_=>_.scheme===u))==null?void 0:m.computed(u,h.binding):this.paths.map(_=>_.computed(_.scheme,h[_.scheme]))}}),n[l].paths.push({path:d,value:r,scheme:d.includes("colorScheme.light")?"light":d.includes("colorScheme.dark")?"dark":"none",computed(u,h={}){let g=/{([^}]*)}/g,m=r;if(h.name=this.path,h.binding||(h.binding={}),xe(r,g)){let O=r.trim().replaceAll(g,F=>{var k;let ae=F.replace(/{|}/g,""),oe=(k=n[ae])==null?void 0:k.computed(u,h);return Si(oe)&&oe.length===2?`light-dark(${oe[0].value},${oe[1].value})`:oe?.value}),H=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,E=/var\([^)]+\)/g;m=xe(O.replace(E,"0"),H)?`calc(${O})`:O}return fe(h.binding)&&delete h.binding,{colorScheme:u,path:this.path,paths:h,value:m.includes("undefined")?void 0:m}}}))}),n},getTokenValue(t,o,e){var i;let s=(d=>d.split(".").filter(h=>!xe(h.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(o),r=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,l=[(i=t[s])==null?void 0:i.computed(r)].flat().filter(d=>d);return l.length===1?l[0].value:l.reduce((d={},u)=>{let h=u,{colorScheme:g}=h,m=tt(h,["colorScheme"]);return d[g]=m,d},void 0)},getSelectorRule(t,o,e,i){return e==="class"||e==="attr"?Tt(K(o)?`${t}${o},${t} ${o}`:t,i):Tt(t,K(o)?Tt(o,i):i)},transformCSS(t,o,e,i,n={},s,r,l){if(K(o)){let{cssLayer:d}=n;if(i!=="style"){let u=this.getColorSchemeOption(n,r);o=e==="dark"?u.reduce((h,{type:g,selector:m})=>(K(m)&&(h+=m.includes("[CSS]")?m.replace("[CSS]",o):this.getSelectorRule(m,l,g,o)),h),""):Tt(l??":root",o)}if(d){let u={name:"primeui",order:"primeui"};et(d)&&(u.name=$e(d.name,{name:t,type:i})),K(u.name)&&(o=Tt(`@layer ${u.name}`,o),s?.layerNames(u.name))}return o}return""}},X={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:o}=t;o&&(this._theme=Ni(Be({},o),{options:Be(Be({},this.defaults.options),o.options)}),this._tokens=He.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),Ae.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Ni(Be({},this.theme),{preset:t}),this._tokens=He.createTokens(t,this.defaults),this.clearLoadedStyleNames(),Ae.emit("preset:change",t),Ae.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Ni(Be({},this.theme),{options:t}),this.clearLoadedStyleNames(),Ae.emit("options:change",t),Ae.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return He.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",o){return He.getCommon({name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return He.getPresetC(e)},getDirective(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return He.getPresetD(e)},getCustomPreset(t="",o,e,i){let n={name:t,preset:o,options:this.options,selector:e,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return He.getPreset(n)},getLayerOrderCSS(t=""){return He.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",o,e="style",i){return He.transformCSS(t,o,i,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",o,e={}){return He.getCommonStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,o,e={}){return He.getStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),Ae.emit(`theme:${o}:load`,t),!this._loadingStyles.size&&Ae.emit("theme:load"))}};var Zo=0,Rn=(()=>{class t{document=L(st);use(e,i={}){let n=!1,s=e,r=null,{immediate:l=!0,manual:d=!1,name:u=`style_${++Zo}`,id:h=void 0,media:g=void 0,nonce:m=void 0,first:_=!1,props:O={}}=i;if(this.document){if(r=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||h&&this.document.getElementById(h)||this.document.createElement("style"),!r.isConnected){s=e,gi(r,{type:"text/css",media:g,nonce:m});let H=this.document.head;_&&H.firstChild?H.insertBefore(r,H.firstChild):H.appendChild(r),xn(r,"data-primeng-style-id",u)}return r.textContent!==s&&(r.textContent=s),{id:h,name:u,el:r,css:s}}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Et={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Yo=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Jo=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,G=(()=>{class t{name="base";useStyle=L(Rn);theme=Yo;css=Jo;classes={};inlineStyles={};load=(e,i={},n=s=>s)=>{let s=n($e(e,{dt:Ot}));return s?this.useStyle.use(gt(s),D({name:this.name},i)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},i="")=>this.load(this.theme,e,(n="")=>X.transformCSS(e.name||this.name,`${n}${i}`));getCommonTheme=e=>X.getCommon(this.name,e);getComponentTheme=e=>X.getComponent(this.name,e);getDirectiveTheme=e=>X.getDirective(this.name,e);getPresetTheme=(e,i,n)=>X.getCustomPreset(this.name,e,i,n);getLayerOrderThemeCSS=()=>X.getLayerOrderCSS(this.name);getStyleSheet=(e="",i={})=>{if(this.css){let n=$e(this.css,{dt:Ot}),s=gt(`${n}${e}`),r=Object.entries(i).reduce((l,[d,u])=>l.push(`${d}="${u}"`)&&l,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${r}>${s}</style>`}return""};getCommonThemeStyleSheet=(e,i={})=>X.getCommonStyleSheet(this.name,e,i);getThemeStyleSheet=(e,i={})=>{let n=[X.getStyleSheet(this.name,e,i)];if(this.theme){let s=this.name==="base"?"global-style":`${this.name}-style`,r=$e(this.theme,{dt:Ot}),l=gt(X.transformCSS(s,r)),d=Object.entries(i).reduce((u,[h,g])=>u.push(`${h}="${g}"`)&&u,[]).join(" ");n.push(`<style type="text/css" data-primeng-style-id="${s}" ${d}>${l}</style>`)}return n.join("")};static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xo=(()=>{class t{theme=re(void 0);isThemeChanged=!1;document=L(st);baseStyle=L(G);constructor(){Je(()=>{Ae.on("theme:change",e=>{hn(()=>{this.isThemeChanged=!0,this.theme.set(e)})})},{allowSignalWrites:!0}),Je(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){X.clearLoadedStyleNames(),Ae.clear()}onThemeChange(e){X.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!X.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:n,style:s}=this.baseStyle.getCommonTheme?.()||{},r={nonce:void 0};this.baseStyle.load(e?.css,D({name:"primitive-variables"},r)),this.baseStyle.load(i?.css,D({name:"semantic-variables"},r)),this.baseStyle.load(n?.css,D({name:"global-variables"},r)),this.baseStyle.loadTheme(D({name:"global-style"},r),s),X.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:i}=e||{};i&&this.theme.set(i)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Bi=(()=>{class t extends Xo{ripple=re(!1);platformId=L(bt);inputStyle=re("outlined");inputVariant=re("outlined");overlayOptions={};csp=re({nonce:void 0});filterMatchModeOptions={text:[ge.STARTS_WITH,ge.CONTAINS,ge.NOT_CONTAINS,ge.ENDS_WITH,ge.EQUALS,ge.NOT_EQUALS],numeric:[ge.EQUALS,ge.NOT_EQUALS,ge.LESS_THAN,ge.LESS_THAN_OR_EQUAL_TO,ge.GREATER_THAN,ge.GREATER_THAN_OR_EQUAL_TO],date:[ge.DATE_IS,ge.DATE_IS_NOT,ge.DATE_BEFORE,ge.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new it;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=D(D({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:i,ripple:n,inputStyle:s,theme:r,overlayOptions:l,translation:d}=e||{};i&&this.csp.set(i),n&&this.ripple.set(n),s&&this.inputStyle.set(s),l&&(this.overlayOptions=l),d&&this.setTranslation(d),r&&this.setThemeConfig({theme:r})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),es=new on("PRIME_NG_CONFIG");function Yp(...t){let o=t?.map(i=>({provide:es,useValue:i,multi:!1})),e={provide:dn,useFactory:i=>()=>t?.forEach(n=>i.setConfig(n)),deps:[Bi],multi:!0};return rn([...o,e])}var Pn=(()=>{class t extends G{name="common";static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Q=(()=>{class t{document=L(st);platformId=L(bt);el=L(ai);injector=L(ln);cd=L(un);renderer=L(an);config=L(Bi);baseComponentStyle=L(Pn);baseStyle=L(G);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Te("pc");_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,i="",n={}){return vi(e,i,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!fn(this.platformId)){let{dt:i}=e;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let e=()=>{Et.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),Et.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Et.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Et.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!X.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:n,style:s}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,D({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,D({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,D({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(D({name:"global-style"},this.styleOptions),s),X.setLoadedStyleName("common")}if(!X.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,D({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(D({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),X.setLoadedStyleName(this.componentStyle?.name)}if(!X.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,D({name:"layer-order",first:!0},this.styleOptions)),X.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:i}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(i,D({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Et.clearLoadedStyleNames(),Ae.on("theme:change",e)}cx(e,i){let n=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:e}sx(e){let i=this.componentStyle?.inlineStyles?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:D({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||t)};static \u0275dir=Se({type:t,inputs:{dt:"dt"},standalone:!0,features:[Y([Pn,G]),Ye]})}return t})();var ct=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,i){e&&i&&(e.classList?e.classList.add(i):e.className+=" "+i)}static addMultipleClasses(e,i){if(e&&i)if(e.classList){let n=i.trim().split(" ");for(let s=0;s<n.length;s++)e.classList.add(n[s])}else{let n=i.split(" ");for(let s=0;s<n.length;s++)e.className+=" "+n[s]}}static removeClass(e,i){e&&i&&(e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,i){e&&i&&[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(s=>this.removeClass(e,s)))}static hasClass(e,i){return e&&i?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(i){return i!==e})}static find(e,i){return Array.from(e.querySelectorAll(i))}static findSingle(e,i){return this.isElement(e)?e.querySelector(i):null}static index(e){let i=e.parentNode.childNodes,n=0;for(var s=0;s<i.length;s++){if(i[s]==e)return n;i[s].nodeType==1&&n++}return-1}static indexWithinGroup(e,i){let n=e.parentNode?e.parentNode.childNodes:[],s=0;for(var r=0;r<n.length;r++){if(n[r]==e)return s;n[r].attributes&&n[r].attributes[i]&&n[r].nodeType==1&&s++}return-1}static appendOverlay(e,i,n="self"){n!=="self"&&e&&i&&this.appendChild(e,i)}static alignOverlay(e,i,n="self",s=!0){e&&i&&(s&&(e.style.minWidth=`${t.getOuterWidth(i)}px`),n==="self"?this.relativePosition(e,i):this.absolutePosition(e,i))}static relativePosition(e,i,n=!0){let s=k=>{if(k)return getComputedStyle(k).getPropertyValue("position")==="relative"?k:s(k.parentElement)},r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=i.offsetHeight,d=i.getBoundingClientRect(),u=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),g=this.getViewport(),_=s(e)?.getBoundingClientRect()||{top:-1*u,left:-1*h},O,H;d.top+l+r.height>g.height?(O=d.top-_.top-r.height,e.style.transformOrigin="bottom",d.top+O<0&&(O=-1*d.top)):(O=l+d.top-_.top,e.style.transformOrigin="top");let E=d.left+r.width-g.width,F=d.left-_.left;r.width>g.width?H=(d.left-_.left)*-1:E>0?H=F-E:H=d.left-_.left,e.style.top=O+"px",e.style.left=H+"px",n&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,i,n=!0){let s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=s.height,l=s.width,d=i.offsetHeight,u=i.offsetWidth,h=i.getBoundingClientRect(),g=this.getWindowScrollTop(),m=this.getWindowScrollLeft(),_=this.getViewport(),O,H;h.top+d+r>_.height?(O=h.top+g-r,e.style.transformOrigin="bottom",O<0&&(O=g)):(O=d+h.top+g,e.style.transformOrigin="top"),h.left+l>_.width?H=Math.max(0,h.left+m+u-l):H=h.left+m,e.style.top=O+"px",e.style.left=H+"px",n&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,i=[]){return e.parentNode===null?i:this.getParents(e.parentNode,i.concat([e.parentNode]))}static getScrollableParents(e){let i=[];if(e){let n=this.getParents(e),s=/(auto|scroll)/,r=l=>{let d=window.getComputedStyle(l,null);return s.test(d.getPropertyValue("overflow"))||s.test(d.getPropertyValue("overflowX"))||s.test(d.getPropertyValue("overflowY"))};for(let l of n){let d=l.nodeType===1&&l.dataset.scrollselectors;if(d){let u=d.split(",");for(let h of u){let g=this.findSingle(l,h);g&&r(g)&&i.push(g)}}l.nodeType!==9&&r(l)&&i.push(l)}}return i}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementDimensions(e){let i={};return e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",i}static scrollInView(e,i){let n=getComputedStyle(e).getPropertyValue("borderTopWidth"),s=n?parseFloat(n):0,r=getComputedStyle(e).getPropertyValue("paddingTop"),l=r?parseFloat(r):0,d=e.getBoundingClientRect(),h=i.getBoundingClientRect().top+document.body.scrollTop-(d.top+document.body.scrollTop)-s-l,g=e.scrollTop,m=e.clientHeight,_=this.getOuterHeight(i);h<0?e.scrollTop=g+h:h+_>m&&(e.scrollTop=g+h-m+_)}static fadeIn(e,i){e.style.opacity=0;let n=+new Date,s=0,r=function(){s=+e.style.opacity.replace(",",".")+(new Date().getTime()-n)/i,e.style.opacity=s,n=+new Date,+s<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}static fadeOut(e,i){var n=1,s=50,r=i,l=s/r;let d=setInterval(()=>{n=n-l,n<=0&&(n=0,clearInterval(d)),e.style.opacity=n},s)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,i){var n=Element.prototype,s=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return s.call(e,i)}static getOuterWidth(e,i){let n=e.offsetWidth;if(i){let s=getComputedStyle(e);n+=parseFloat(s.marginLeft)+parseFloat(s.marginRight)}return n}static getHorizontalPadding(e){let i=getComputedStyle(e);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(e){let i=getComputedStyle(e);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(e){let i=e.offsetWidth,n=getComputedStyle(e);return i+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static width(e){let i=e.offsetWidth,n=getComputedStyle(e);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static getInnerHeight(e){let i=e.offsetHeight,n=getComputedStyle(e);return i+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),i}static getOuterHeight(e,i){let n=e.offsetHeight;if(i){let s=getComputedStyle(e);n+=parseFloat(s.marginTop)+parseFloat(s.marginBottom)}return n}static getHeight(e){let i=e.offsetHeight,n=getComputedStyle(e);return i-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),i}static getWidth(e){let i=e.offsetWidth,n=getComputedStyle(e);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),i}static getViewport(){let e=window,i=document,n=i.documentElement,s=i.getElementsByTagName("body")[0],r=e.innerWidth||n.clientWidth||s.clientWidth,l=e.innerHeight||n.clientHeight||s.clientHeight;return{width:r,height:l}}static getOffset(e){var i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,i){let n=e.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(i,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return!0;var n=e.indexOf("Trident/");if(n>0){var s=e.indexOf("rv:");return!0}var r=e.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,i){if(this.isElement(i))i.appendChild(e);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(e);else throw"Cannot append "+i+" to "+e}static removeChild(e,i){if(this.isElement(i))i.removeChild(e);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+i}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let i=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let n=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(e,i,n){e[i].apply(e,n)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,i){e&&document.activeElement!==e&&e.focus(i)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,i=""){let n=this.find(e,this.getFocusableSelectorString(i)),s=[];for(let r of n){let l=getComputedStyle(r);this.isVisible(r)&&l.display!="none"&&l.visibility!="hidden"&&s.push(r)}return s}static getFocusableElement(e,i=""){let n=this.findSingle(e,this.getFocusableSelectorString(i));if(n){let s=getComputedStyle(n);if(this.isVisible(n)&&s.display!="none"&&s.visibility!="hidden")return n}return null}static getFirstFocusableElement(e,i=""){let n=this.getFocusableElements(e,i);return n.length>0?n[0]:null}static getLastFocusableElement(e,i){let n=this.getFocusableElements(e,i);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(e,i=!1){let n=t.getFocusableElements(e),s=0;if(n&&n.length>0){let r=n.indexOf(n[0].ownerDocument.activeElement);i?r==-1||r===0?s=n.length-1:s=r-1:r!=-1&&r!==n.length-1&&(s=r+1)}return n[s]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,i){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let n=typeof e;if(n==="string")return document.querySelector(e);if(n==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let r=(l=>!!(l&&l.constructor&&l.call&&l.apply))(e)?e():e;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,i){if(e){let n=e.getAttribute(i);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,i={},...n){if(e){let s=document.createElement(e);return this.setAttributes(s,i),s.append(...n),s}}static setAttribute(e,i="",n){this.isElement(e)&&n!==null&&n!==void 0&&e.setAttribute(i,n)}static setAttributes(e,i={}){if(this.isElement(e)){let n=(s,r)=>{let l=e?.$attrs?.[s]?[e?.$attrs?.[s]]:[];return[r].flat().reduce((d,u)=>{if(u!=null){let h=typeof u;if(h==="string"||h==="number")d.push(u);else if(h==="object"){let g=Array.isArray(u)?n(s,u):Object.entries(u).map(([m,_])=>s==="style"&&(_||_===0)?`${m.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${_}`:_?m:void 0);d=g.length?d.concat(g.filter(m=>!!m)):d}}return d},l)};Object.entries(i).forEach(([s,r])=>{if(r!=null){let l=s.match(/^on(.+)/);l?e.addEventListener(l[1].toLowerCase(),r):s==="pBind"?this.setAttributes(e,r):(r=s==="class"?[...new Set(n("class",r))].join(" ").trim():s==="style"?n("style",r).join(";").trim():r,(e.$attrs=e.$attrs||{})&&(e.$attrs[s]=r),e.setAttribute(s,r))}})}}static isFocusableElement(e,i=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return t})(),Lt=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=ct.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Ft=(()=>{class t extends Q{autofocus=!1;_autofocus=!1;focused=!1;platformId=L(bt);document=L(st);host=L(ai);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Ne(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=ct.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275dir=Se({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",v],_autofocus:[0,"pAutoFocus","_autofocus"]},standalone:!0,features:[_e,M]})}return t})(),Nn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({})}return t})();var is=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,ns={root:({props:t,instance:o})=>["p-badge p-component",{"p-badge-circle":K(t.value)&&String(t.value).length===1,"p-badge-dot":fe(t.value)&&!o.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},zn=(()=>{class t extends G{name="badge";theme=is;classes=ns;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var Wi=(()=>{class t extends Q{styleClass=nt();style=nt();badgeSize=nt();size=nt();severity=nt();value=nt();badgeDisabled=nt(!1,{transform:v});_componentStyle=L(zn);containerClass=we(()=>{let e="p-badge p-component";return K(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),fe(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=B({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(i,n){i&2&&(Ke(n.style()),j(n.containerClass()),yt("display",n.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},standalone:!0,features:[Y([zn]),M,q],decls:1,vars:1,template:function(i,n){i&1&&de(0),i&2&&Ce(n.value())},dependencies:[le,J],encapsulation:2,changeDetection:0})}return t})(),Hn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[Wi,J,J]})}return t})();var ss=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,rs=(()=>{class t extends G{name="baseicon";inlineStyles=ss;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var ls=["*"],Re=(()=>{class t extends Q{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=fe(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=B({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",v],styleClass:"styleClass"},standalone:!0,features:[Y([rs]),_e,M,q],ngContentSelectors:ls,decls:1,vars:0,template:function(i,n){i&1&&(ye(),ve(0))},encapsulation:2,changeDetection:0})}return t})();var Pt=(()=>{class t extends Re{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=B({type:t,selectors:[["BlankIcon"]],standalone:!0,features:[M,q],decls:2,vars:0,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["width","1","height","1","fill","currentColor","fill-opacity","0"]],template:function(i,n){i&1&&(Ee(),b(0,"svg",0),A(1,"rect",1),y())},encapsulation:2})}return t})();var Nt=(()=>{class t extends Re{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=B({type:t,selectors:[["CheckIcon"]],standalone:!0,features:[M,q],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(i,n){i&1&&(Ee(),b(0,"svg",0),A(1,"path",1),y()),i&2&&(j(n.getClassNames()),I("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var zt=(()=>{class t extends Re{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=B({type:t,selectors:[["ChevronDownIcon"]],standalone:!0,features:[M,q],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(i,n){i&1&&(Ee(),b(0,"svg",0),A(1,"path",1),y()),i&2&&(j(n.getClassNames()),I("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var Ht=(()=>{class t extends Re{pathId;ngOnInit(){this.pathId="url(#"+Te()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=B({type:t,selectors:[["SearchIcon"]],standalone:!0,features:[M,q],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(Ee(),b(0,"svg",0)(1,"g"),A(2,"path",1),y(),b(3,"defs")(4,"clipPath",2),A(5,"rect",3),y()()()),i&2&&(j(n.getClassNames()),I("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),p(),I("clip-path",n.pathId),p(3),a("id",n.pathId))},encapsulation:2})}return t})();var Oi=(()=>{class t extends Re{pathId;ngOnInit(){this.pathId="url(#"+Te()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=B({type:t,selectors:[["SpinnerIcon"]],standalone:!0,features:[M,q],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(Ee(),b(0,"svg",0)(1,"g"),A(2,"path",1),y(),b(3,"defs")(4,"clipPath",2),A(5,"rect",3),y()()()),i&2&&(j(n.getClassNames()),I("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),p(),I("clip-path",n.pathId),p(3),a("id",n.pathId))},encapsulation:2})}return t})();var Bt=(()=>{class t extends Re{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=B({type:t,selectors:[["TimesIcon"]],standalone:!0,features:[M,q],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,n){i&1&&(Ee(),b(0,"svg",0),A(1,"path",1),y()),i&2&&(j(n.getClassNames()),I("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var as=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,cs={root:"p-ink"},Bn=(()=>{class t extends G{name="ripple";theme=as;classes=cs;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var kt=(()=>{class t extends Q{zone=L(Le);_componentStyle=L(Bn);animationListener;mouseDownListener;timeout;constructor(){super(),Je(()=>{Ne(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(Xe(i,"p-ink-active"),!Ge(i)&&!qe(i)){let l=Math.max(je(this.el.nativeElement),ze(this.el.nativeElement));i.style.height=l+"px",i.style.width=l+"px"}let n=vn(this.el.nativeElement),s=e.pageX-n.left+this.document.body.scrollTop-qe(i)/2,r=e.pageY-n.top+this.document.body.scrollLeft-Ge(i)/2;this.renderer.setStyle(i,"top",r+"px"),this.renderer.setStyle(i,"left",s+"px"),rt(i,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&Xe(l,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let i=0;i<e.length;i++)if(typeof e[i].className=="string"&&e[i].className.indexOf("p-ink")!==-1)return e[i];return null}resetInk(){let e=this.getInk();e&&Xe(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Xe(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Cn(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=Se({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],standalone:!0,features:[Y([Bn]),M]})}return t})();var ps=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,ds={root:({instance:t,props:o})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Wn=(()=>{class t extends G{name="button";theme=ps;classes=ds;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var us=["content"],hs=["loading"],fs=["icon"],ms=["*"],Kn=t=>({class:t});function gs(t,o){t&1&&z(0)}function _s(t,o){if(t&1&&A(0,"span",8),t&2){let e=c(3);a("ngClass",e.iconClass()),I("aria-hidden",!0)("data-pc-section","loadingicon")}}function bs(t,o){if(t&1&&A(0,"SpinnerIcon",9),t&2){let e=c(3);a("styleClass",e.spinnerIconClass())("spin",!0),I("aria-hidden",!0)("data-pc-section","loadingicon")}}function ys(t,o){if(t&1&&(R(0),f(1,_s,1,3,"span",6)(2,bs,1,4,"SpinnerIcon",7),P()),t&2){let e=c(2);p(),a("ngIf",e.loadingIcon),p(),a("ngIf",!e.loadingIcon)}}function vs(t,o){}function Ss(t,o){if(t&1&&f(0,vs,0,0,"ng-template",10),t&2){let e=c(2);a("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Cs(t,o){if(t&1&&(R(0),f(1,ys,3,2,"ng-container",2)(2,Ss,1,1,null,5),P()),t&2){let e=c();p(),a("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),p(),a("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",W(3,Kn,e.iconClass()))}}function ws(t,o){if(t&1&&A(0,"span",8),t&2){let e=c(2);j(e.icon),a("ngClass",e.iconClass()),I("data-pc-section","icon")}}function xs(t,o){}function Is(t,o){if(t&1&&f(0,xs,0,0,"ng-template",10),t&2){let e=c(2);a("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Ts(t,o){if(t&1&&(R(0),f(1,ws,1,4,"span",11)(2,Is,1,1,null,5),P()),t&2){let e=c();p(),a("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),p(),a("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",W(3,Kn,e.iconClass()))}}function Os(t,o){if(t&1&&(b(0,"span",12),de(1),y()),t&2){let e=c();I("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),p(),Ce(e.label)}}function Es(t,o){if(t&1&&A(0,"p-badge",13),t&2){let e=c();a("value",e.badge)("severity",e.badgeSeverity)}}var Ls=(()=>{class t extends Q{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new $;onFocus=new $;onBlur=new $;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return fe(this.fluid)?!!i:this.fluid}_componentStyle=L(Wn);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"icon":this.iconTemplate=e.template;break;case"loadingicon":this.loadingIconTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:i}=e;if(i){let n=i.currentValue;for(let s in n)this[s]=n[s]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[i])=>e+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=B({type:t,selectors:[["p-button"]],contentQueries:function(i,n,s){if(i&1&&(U(s,us,5),U(s,hs,5),U(s,fs,5),U(s,Qe,4)),i&2){let r;S(r=C())&&(n.contentTemplate=r.first),S(r=C())&&(n.loadingIconTemplate=r.first),S(r=C())&&(n.iconTemplate=r.first),S(r=C())&&(n.templates=r)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",v],loading:[2,"loading","loading",v],loadingIcon:"loadingIcon",raised:[2,"raised","raised",v],rounded:[2,"rounded","rounded",v],text:[2,"text","text",v],plain:[2,"plain","plain",v],severity:"severity",outlined:[2,"outlined","outlined",v],link:[2,"link","link",v],tabindex:[2,"tabindex","tabindex",ue],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",v],fluid:[2,"fluid","fluid",v],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[Y([Wn]),_e,M,Ye,q],ngContentSelectors:ms,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,n){i&1&&(ye(),b(0,"button",0),N("click",function(r){return n.onClick.emit(r)})("focus",function(r){return n.onFocus.emit(r)})("blur",function(r){return n.onBlur.emit(r)}),ve(1),f(2,gs,1,0,"ng-container",1)(3,Cs,3,5,"ng-container",2)(4,Ts,3,5,"ng-container",2)(5,Os,2,3,"span",3)(6,Es,1,2,"p-badge",4),y()),i&2&&(a("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),I("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),p(2),a("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),p(),a("ngIf",n.loading),p(),a("ngIf",!n.loading),p(),a("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),p(),a("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[le,Fe,ke,Ve,De,kt,Ft,Oi,Hn,Wi,J],encapsulation:2,changeDetection:0})}return t})(),$u=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[le,Ls,J,J]})}return t})();var Fs=({dt:t})=>`
.p-iconfield {
    position: relative;
    display: block;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${t("icon.size")} / 2));
    color: ${t("iconfield.icon.color")};
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${t("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${t("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((${t("form.field.padding.x")} * 2) + ${t("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${t("form.field.padding.x")} * 2) + ${t("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${t("form.field.sm.font.size")};
    width: ${t("form.field.sm.font.size")};
    height: ${t("form.field.sm.font.size")};
    margin-top: calc(-1 * (${t("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${t("form.field.lg.font.size")};
    width: ${t("form.field.lg.font.size")};
    height: ${t("form.field.lg.font.size")};
    margin-top: calc(-1 * (${t("form.field.lg.font.size")} / 2));
}
`,ks={root:"p-iconfield"},Un=(()=>{class t extends G{name="iconfield";theme=Fs;classes=ks;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var Ds=["*"],Wt=(()=>{class t extends Q{iconPosition="left";get _styleClass(){return this.styleClass}styleClass;_componentStyle=L(Un);static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=B({type:t,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostAttrs:[1,"p-iconfield"],hostVars:6,hostBindings:function(i,n){i&2&&(j(n._styleClass),ut("p-iconfield-left",n.iconPosition==="left")("p-iconfield-right",n.iconPosition==="right"))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},standalone:!0,features:[Y([Un]),M,q],ngContentSelectors:Ds,decls:1,vars:0,template:function(i,n){i&1&&(ye(),ve(0))},dependencies:[le],encapsulation:2,changeDetection:0})}return t})();var Vs={root:"p-inputicon"},jn=(()=>{class t extends G{name="inputicon";classes=Vs;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),$s=["*"],Kt=(()=>{class t extends Q{styleClass;get hostClasses(){return this.styleClass}_componentStyle=L(jn);static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=B({type:t,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:4,hostBindings:function(i,n){i&2&&(j(n.hostClasses),ut("p-inputicon",!0))},inputs:{styleClass:"styleClass"},standalone:!0,features:[Y([jn]),M,q],ngContentSelectors:$s,decls:1,vars:0,template:function(i,n){i&1&&(ye(),ve(0))},dependencies:[le,J],encapsulation:2,changeDetection:0})}return t})();var Ms=({dt:t})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("inputtext.color")};
    background: ${t("inputtext.background")};
    padding-block: ${t("inputtext.padding.y")};
    padding-inline: ${t("inputtext.padding.x")};
    border: 1px solid ${t("inputtext.border.color")};
    transition: background ${t("inputtext.transition.duration")}, color ${t("inputtext.transition.duration")}, border-color ${t("inputtext.transition.duration")}, outline-color ${t("inputtext.transition.duration")}, box-shadow ${t("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${t("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${t("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
    box-shadow: ${t("inputtext.focus.ring.shadow")};
    outline: ${t("inputtext.focus.ring.width")} ${t("inputtext.focus.ring.style")} ${t("inputtext.focus.ring.color")};
    outline-offset: ${t("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${t("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${t("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${t("inputtext.disabled.background")};
    color: ${t("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${t("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${t("inputtext.sm.font.size")};
    padding-block: ${t("inputtext.sm.padding.y")};
    padding-inline: ${t("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${t("inputtext.lg.font.size")};
    padding-block: ${t("inputtext.lg.padding.y")};
    padding-inline: ${t("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,As={root:({instance:t,props:o})=>["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":o.size==="small","p-inputtext-lg":o.size==="large","p-invalid":o.invalid,"p-variant-filled":o.variant==="filled","p-inputtext-fluid":o.fluid}]},Gn=(()=>{class t extends G{name="inputtext";theme=Ms;classes=As;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var Li=(()=>{class t extends Q{ngModel;variant="outlined";fluid;pSize;filled;_componentStyle=L(Gn);get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return fe(this.fluid)?!!i:this.fluid}constructor(e){super(),this.ngModel=e}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(i){return new(i||t)(pe(gn,8))};static \u0275dir=Se({type:t,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(i,n){i&1&&N("input",function(r){return n.onInput(r)}),i&2&&ut("p-filled",n.filled)("p-variant-filled",n.variant==="filled"||n.config.inputStyle()==="filled"||n.config.inputVariant()==="filled")("p-inputtext-fluid",n.hasFluid)("p-inputtext-sm",n.pSize==="small")("p-inputfield-sm",n.pSize==="small")("p-inputtext-lg",n.pSize==="large")("p-inputfield-lg",n.pSize==="large")},inputs:{variant:"variant",fluid:[2,"fluid","fluid",v],pSize:"pSize"},standalone:!0,features:[Y([Gn]),_e,M]})}return t})(),qn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({})}return t})();var We=function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t}(We||{}),bh="*";function Yn(t,o){return{type:We.Trigger,name:t,definitions:o,options:{}}}function Ki(t,o=null){return{type:We.Animate,styles:o,timings:t}}function yh(t,o=null){return{type:We.Sequence,steps:t,options:o}}function Ui(t){return{type:We.Style,styles:t,offset:null}}function vh(t,o,e){return{type:We.State,name:t,styles:o,options:e}}function ji(t,o,e=null){return{type:We.Transition,expr:t,animation:o,options:e}}function Gi(t,o=null){return{type:We.Reference,animation:t,options:o}}function Sh(t=null){return{type:We.AnimateChild,options:t}}function qi(t,o=null){return{type:We.AnimateRef,animation:t,options:o}}function Ch(t,o,e=null){return{type:We.Query,selector:t,animation:o,options:e}}var Qn=class{constructor(o=0,e=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=o+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(o=>o()),this._onDoneFns=[])}onStart(o){this._originalOnStartFns.push(o),this._onStartFns.push(o)}onDone(o){this._originalOnDoneFns.push(o),this._onDoneFns.push(o)}onDestroy(o){this._onDestroyFns.push(o)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(o=>o()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(o=>o()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(o){this._position=this.totalTime?o*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(o){let e=o=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Zn=class{constructor(o){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=o;let e=0,i=0,n=0,s=this.players.length;s==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(r=>{r.onDone(()=>{++e==s&&this._onFinish()}),r.onDestroy(()=>{++i==s&&this._onDestroy()}),r.onStart(()=>{++n==s&&this._onStart()})}),this.totalTime=this.players.reduce((r,l)=>Math.max(r,l.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(o=>o()),this._onDoneFns=[])}init(){this.players.forEach(o=>o.init())}onStart(o){this._onStartFns.push(o)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(o=>o()),this._onStartFns=[])}onDone(o){this._onDoneFns.push(o)}onDestroy(o){this._onDestroyFns.push(o)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(o=>o.play())}pause(){this.players.forEach(o=>o.pause())}restart(){this.players.forEach(o=>o.restart())}finish(){this._onFinish(),this.players.forEach(o=>o.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(o=>o.destroy()),this._onDestroyFns.forEach(o=>o()),this._onDestroyFns=[])}reset(){this.players.forEach(o=>o.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(o){let e=o*this.totalTime;this.players.forEach(i=>{let n=i.totalTime?Math.min(1,e/i.totalTime):1;i.setPosition(n)})}getPosition(){let o=this.players.reduce((e,i)=>e===null||i.totalTime>e.totalTime?i:e,null);return o!=null?o.getPosition():0}beforeDestroy(){this.players.forEach(o=>{o.beforeDestroy&&o.beforeDestroy()})}triggerCallback(o){let e=o=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},wh="!";var _t=class t{static isArray(o,e=!0){return Array.isArray(o)&&(e||o.length!==0)}static isObject(o,e=!0){return typeof o=="object"&&!Array.isArray(o)&&o!=null&&(e||Object.keys(o).length!==0)}static equals(o,e,i){return i?this.resolveFieldData(o,i)===this.resolveFieldData(e,i):this.equalsByValue(o,e)}static equalsByValue(o,e){if(o===e)return!0;if(o&&e&&typeof o=="object"&&typeof e=="object"){var i=Array.isArray(o),n=Array.isArray(e),s,r,l;if(i&&n){if(r=o.length,r!=e.length)return!1;for(s=r;s--!==0;)if(!this.equalsByValue(o[s],e[s]))return!1;return!0}if(i!=n)return!1;var d=this.isDate(o),u=this.isDate(e);if(d!=u)return!1;if(d&&u)return o.getTime()==e.getTime();var h=o instanceof RegExp,g=e instanceof RegExp;if(h!=g)return!1;if(h&&g)return o.toString()==e.toString();var m=Object.keys(o);if(r=m.length,r!==Object.keys(e).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,m[s]))return!1;for(s=r;s--!==0;)if(l=m[s],!this.equalsByValue(o[l],e[l]))return!1;return!0}return o!==o&&e!==e}static resolveFieldData(o,e){if(o&&e){if(this.isFunction(e))return e(o);if(e.indexOf(".")==-1)return o[e];{let i=e.split("."),n=o;for(let s=0,r=i.length;s<r;++s){if(n==null)return null;n=n[i[s]]}return n}}else return null}static isFunction(o){return!!(o&&o.constructor&&o.call&&o.apply)}static reorderArray(o,e,i){let n;o&&e!==i&&(i>=o.length&&(i%=o.length,e%=o.length),o.splice(i,0,o.splice(e,1)[0]))}static insertIntoOrderedArray(o,e,i,n){if(i.length>0){let s=!1;for(let r=0;r<i.length;r++)if(this.findIndexInList(i[r],n)>e){i.splice(r,0,o),s=!0;break}s||i.push(o)}else i.push(o)}static findIndexInList(o,e){let i=-1;if(e){for(let n=0;n<e.length;n++)if(e[n]==o){i=n;break}}return i}static contains(o,e){if(o!=null&&e&&e.length){for(let i of e)if(this.equals(o,i))return!0}return!1}static removeAccents(o){return o&&(o=o.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),o}static isDate(o){return Object.prototype.toString.call(o)==="[object Date]"}static isEmpty(o){return o==null||o===""||Array.isArray(o)&&o.length===0||!this.isDate(o)&&typeof o=="object"&&Object.keys(o).length===0}static isNotEmpty(o){return!this.isEmpty(o)}static compare(o,e,i,n=1){let s=-1,r=this.isEmpty(o),l=this.isEmpty(e);return r&&l?s=0:r?s=n:l?s=-n:typeof o=="string"&&typeof e=="string"?s=o.localeCompare(e,i,{numeric:!0}):s=o<e?-1:o>e?1:0,s}static sort(o,e,i=1,n,s=1){let r=t.compare(o,e,n,i),l=i;return(t.isEmpty(o)||t.isEmpty(e))&&(l=s===1?i:s),l*r}static merge(o,e){if(!(o==null&&e==null)){{if((o==null||typeof o=="object")&&(e==null||typeof e=="object"))return D(D({},o||{}),e||{});if((o==null||typeof o=="string")&&(e==null||typeof e=="string"))return[o||"",e||""].join(" ")}return e||o}}static isPrintableCharacter(o=""){return this.isNotEmpty(o)&&o.length===1&&o.match(/\S| /)}static getItemValue(o,...e){return this.isFunction(o)?o(...e):o}static findLastIndex(o,e){let i=-1;if(this.isNotEmpty(o))try{i=o.findLastIndex(e)}catch{i=o.lastIndexOf([...o].reverse().find(e))}return i}static findLast(o,e){let i;if(this.isNotEmpty(o))try{i=o.findLast(e)}catch{i=[...o].reverse().find(e)}return i}static deepEquals(o,e){if(o===e)return!0;if(o&&e&&typeof o=="object"&&typeof e=="object"){var i=Array.isArray(o),n=Array.isArray(e),s,r,l;if(i&&n){if(r=o.length,r!=e.length)return!1;for(s=r;s--!==0;)if(!this.deepEquals(o[s],e[s]))return!1;return!0}if(i!=n)return!1;var d=o instanceof Date,u=e instanceof Date;if(d!=u)return!1;if(d&&u)return o.getTime()==e.getTime();var h=o instanceof RegExp,g=e instanceof RegExp;if(h!=g)return!1;if(h&&g)return o.toString()==e.toString();var m=Object.keys(o);if(r=m.length,r!==Object.keys(e).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,m[s]))return!1;for(s=r;s--!==0;)if(l=m[s],!this.deepEquals(o[l],e[l]))return!1;return!0}return o!==o&&e!==e}static minifyCSS(o){return o&&o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(o){return this.isString(o)?o.replace(/(-|_)/g,"").toLowerCase():o}static isString(o,e=!0){return typeof o=="string"&&(e||o!=="")}},Jn=0;function Ih(t="pn_id_"){return Jn++,`${t}${Jn}`}function Ps(){let t=[],o=(s,r)=>{let l=t.length>0?t[t.length-1]:{key:s,value:r},d=l.value+(l.key===s?0:r)+2;return t.push({key:s,value:d}),d},e=s=>{t=t.filter(r=>r.value!==s)},i=()=>t.length>0?t[t.length-1].value:0,n=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:n,set:(s,r,l)=>{r&&(r.style.zIndex=String(o(s,l)))},clear:s=>{s&&(e(n(s)),s.style.zIndex="")},getCurrent:()=>i()}}var pt=Ps();var Ns=({dt:t})=>`
.p-overlay {
    position: absolute;
    top: 0;
    inset-inline-start: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}
`,Xn=(()=>{class t extends G{name="overlay";theme=Ns;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),eo=["content"],zs=["overlay"],Hs=["*"],Bs=(t,o,e,i,n,s,r,l,d,u,h,g,m,_)=>({"p-overlay p-component":!0,"p-overlay-modal p-overlay-mask p-overlay-mask-enter":t,"p-overlay-center":o,"p-overlay-top":e,"p-overlay-top-start":i,"p-overlay-top-end":n,"p-overlay-bottom":s,"p-overlay-bottom-start":r,"p-overlay-bottom-end":l,"p-overlay-left":d,"p-overlay-left-start":u,"p-overlay-left-end":h,"p-overlay-right":g,"p-overlay-right-start":m,"p-overlay-right-end":_}),Ws=(t,o,e)=>({showTransitionParams:t,hideTransitionParams:o,transform:e}),Ks=t=>({value:"visible",params:t}),Us=t=>({mode:t}),js=t=>({$implicit:t});function Gs(t,o){t&1&&z(0)}function qs(t,o){if(t&1){let e=Z();b(0,"div",3,1),N("click",function(n){w(e);let s=c(2);return x(s.onOverlayContentClick(n))})("@overlayContentAnimation.start",function(n){w(e);let s=c(2);return x(s.onOverlayContentAnimationStart(n))})("@overlayContentAnimation.done",function(n){w(e);let s=c(2);return x(s.onOverlayContentAnimationDone(n))}),ve(2),f(3,Gs,1,0,"ng-container",4),y()}if(t&2){let e=c(2);j(e.contentStyleClass),a("ngStyle",e.contentStyle)("ngClass","p-overlay-content")("@overlayContentAnimation",W(11,Ks,ot(7,Ws,e.showTransitionOptions,e.hideTransitionOptions,e.transformOptions[e.modal?e.overlayResponsiveDirection:"default"]))),p(3),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",W(15,js,W(13,Us,e.overlayMode)))}}function Qs(t,o){if(t&1){let e=Z();b(0,"div",3,0),N("click",function(){w(e);let n=c();return x(n.onOverlayClick())}),f(2,qs,4,17,"div",2),y()}if(t&2){let e=c();j(e.styleClass),a("ngStyle",e.style)("ngClass",pn(5,Bs,[e.modal,e.modal&&e.overlayResponsiveDirection==="center",e.modal&&e.overlayResponsiveDirection==="top",e.modal&&e.overlayResponsiveDirection==="top-start",e.modal&&e.overlayResponsiveDirection==="top-end",e.modal&&e.overlayResponsiveDirection==="bottom",e.modal&&e.overlayResponsiveDirection==="bottom-start",e.modal&&e.overlayResponsiveDirection==="bottom-end",e.modal&&e.overlayResponsiveDirection==="left",e.modal&&e.overlayResponsiveDirection==="left-start",e.modal&&e.overlayResponsiveDirection==="left-end",e.modal&&e.overlayResponsiveDirection==="right",e.modal&&e.overlayResponsiveDirection==="right-start",e.modal&&e.overlayResponsiveDirection==="right-end"])),p(2),a("ngIf",e.visible)}}var Zs=Gi([Ui({transform:"{{transform}}",opacity:0}),Ki("{{showTransitionParams}}")]),Ys=Gi([Ki("{{hideTransitionParams}}",Ui({transform:"{{transform}}",opacity:0}))]),Ut=(()=>{class t extends Q{overlayService;zone;get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return _t.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return _t.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return _t.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return _t.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get appendTo(){return this._appendTo||this.overlayOptions?.appendTo}set appendTo(e){this._appendTo=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}visibleChange=new $;onBeforeShow=new $;onShow=new $;onBeforeHide=new $;onHide=new $;onAnimationStart=new $;onAnimationDone=new $;overlayViewChild;contentViewChild;contentTemplate;templates;_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_appendTo;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=L(Xn);documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(Ne(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return D(D({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return D(D({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return Sn(this.target,this.el?.nativeElement)}constructor(e,i){super(),this.overlayService=e,this.zone=i}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}show(e,i=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&ce(this.targetEl),this.modal&&rt(this.document?.body,"p-overflow-hidden")}hide(e,i=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&ce(this.targetEl),this.modal&&Xe(this.document?.body,"p-overflow-hidden");else return}alignOverlay(){!this.modal&&ct.alignOverlay(this.overlayEl,this.targetEl,this.appendTo)}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}onOverlayContentAnimationStart(e){switch(e.toState){case"visible":this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.autoZIndex&&pt.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode]),ct.appendOverlay(this.overlayEl,this.appendTo==="body"?this.document.body:this.appendTo,this.appendTo),this.alignOverlay();break;case"void":this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.modal&&rt(this.overlayEl,"p-overlay-mask-leave");break}this.handleEvents("onAnimationStart",e)}onOverlayContentAnimationDone(e){let i=this.overlayEl||e.element.parentElement;switch(e.toState){case"visible":this.show(i,!0),this.bindListeners();break;case"void":this.hide(i,!0),this.unbindListeners(),ct.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),pt.clear(i),this.modalVisible=!1,this.cd.markForCheck();break}this.handleEvents("onAnimationDone",e)}handleEvents(e,i){this[e].emit(i),this.options&&this.options[e]&&this.options[e](i),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](i)}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Lt(this.targetEl,e=>{(this.listener?this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}):!0)&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let n=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&n}):n)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!ft()}):!ft())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!ft()}):!ft())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}ngOnDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&(ct.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),pt.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(pe(Ln),pe(Le))};static \u0275cmp=B({type:t,selectors:[["p-overlay"]],contentQueries:function(i,n,s){if(i&1&&(U(s,eo,4),U(s,Qe,4)),i&2){let r;S(r=C())&&(n.contentTemplate=r.first),S(r=C())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&(ee(zs,5),ee(eo,5)),i&2){let s;S(s=C())&&(n.overlayViewChild=s.first),S(s=C())&&(n.contentViewChild=s.first)}},inputs:{visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",appendTo:"appendTo",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options"},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone"},standalone:!0,features:[Y([Xn]),M,q],ngContentSelectors:Hs,decls:1,vars:1,consts:[["overlay",""],["content",""],[3,"ngStyle","class","ngClass","click",4,"ngIf"],[3,"click","ngStyle","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(ye(),f(0,Qs,3,20,"div",2)),i&2&&a("ngIf",n.modalVisible)},dependencies:[le,Fe,ke,Ve,De,J],encapsulation:2,data:{animation:[Yn("overlayContentAnimation",[ji(":enter",[qi(Zs)]),ji(":leave",[qi(Ys)])])]},changeDetection:0})}return t})(),Qi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[Ut,J,J]})}return t})();var Xs=({dt:t})=>`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${t("virtualscroller.loader.mask.background")};
    color: ${t("virtualscroller.loader.mask.color")};
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: ${t("virtualscroller.loader.icon.size")};
    width: ${t("virtualscroller.loader.icon.size")};
    height: ${t("virtualscroller.loader.icon.size")};
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,to=(()=>{class t extends G{name="virtualscroller";theme=Xs;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var io=["content"],er=["item"],tr=["loader"],ir=["loadericon"],nr=["element"],or=["*"],sr=(t,o,e)=>({"p-virtualscroller":!0,"p-virtualscroller-inline":t,"p-virtualscroller-both p-both-scroll":o,"p-virtualscroller-horizontal p-horizontal-scroll":e}),Zi=(t,o)=>({$implicit:t,options:o}),rr=t=>({"p-virtualscroller-loading ":t}),lr=t=>({"p-virtualscroller-loader-mask":t}),ar=t=>({numCols:t}),no=t=>({options:t}),cr=()=>({styleClass:"p-virtualscroller-loading-icon"}),pr=(t,o)=>({rows:t,columns:o});function dr(t,o){t&1&&z(0)}function ur(t,o){if(t&1&&(R(0),f(1,dr,1,0,"ng-container",10),P()),t&2){let e=c(2);p(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Pe(2,Zi,e.loadedItems,e.getContentOptions()))}}function hr(t,o){t&1&&z(0)}function fr(t,o){if(t&1&&(R(0),f(1,hr,1,0,"ng-container",10),P()),t&2){let e=o.$implicit,i=o.index,n=c(3);p(),a("ngTemplateOutlet",n.itemTemplate||n._itemTemplate)("ngTemplateOutletContext",Pe(2,Zi,e,n.getOptions(i)))}}function mr(t,o){if(t&1&&(b(0,"div",11,3),f(2,fr,2,5,"ng-container",12),y()),t&2){let e=c(2);a("ngClass",W(5,rr,e.d_loading))("ngStyle",e.contentStyle),I("data-pc-section","content"),p(2),a("ngForOf",e.loadedItems)("ngForTrackBy",e._trackBy)}}function gr(t,o){if(t&1&&A(0,"div",13),t&2){let e=c(2);a("ngStyle",e.spacerStyle),I("data-pc-section","spacer")}}function _r(t,o){t&1&&z(0)}function br(t,o){if(t&1&&(R(0),f(1,_r,1,0,"ng-container",10),P()),t&2){let e=o.index,i=c(4);p(),a("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",W(4,no,i.getLoaderOptions(e,i.both&&W(2,ar,i.numItemsInViewport.cols))))}}function yr(t,o){if(t&1&&(R(0),f(1,br,2,6,"ng-container",15),P()),t&2){let e=c(3);p(),a("ngForOf",e.loaderArr)}}function vr(t,o){t&1&&z(0)}function Sr(t,o){if(t&1&&(R(0),f(1,vr,1,0,"ng-container",10),P()),t&2){let e=c(4);p(),a("ngTemplateOutlet",e.loaderIconTemplate||e._loaderIconTemplate)("ngTemplateOutletContext",W(3,no,Ue(2,cr)))}}function Cr(t,o){t&1&&A(0,"SpinnerIcon",16),t&2&&(a("styleClass","p-virtualscroller-loading-icon pi-spin"),I("data-pc-section","loadingIcon"))}function wr(t,o){if(t&1&&f(0,Sr,2,5,"ng-container",6)(1,Cr,1,2,"ng-template",null,5,se),t&2){let e=me(2),i=c(3);a("ngIf",i.loaderIconTemplate||i._loaderIconTemplate)("ngIfElse",e)}}function xr(t,o){if(t&1&&(b(0,"div",14),f(1,yr,2,1,"ng-container",6)(2,wr,3,2,"ng-template",null,4,se),y()),t&2){let e=me(3),i=c(2);a("ngClass",W(4,lr,!i.loaderTemplate)),I("data-pc-section","loader"),p(),a("ngIf",i.loaderTemplate||i._loaderTemplate)("ngIfElse",e)}}function Ir(t,o){if(t&1){let e=Z();R(0),b(1,"div",7,1),N("scroll",function(n){w(e);let s=c();return x(s.onContainerScroll(n))}),f(3,ur,2,5,"ng-container",6)(4,mr,3,7,"ng-template",null,2,se)(6,gr,1,2,"div",8)(7,xr,4,6,"div",9),y(),P()}if(t&2){let e=me(5),i=c();p(),j(i._styleClass),a("ngStyle",i._style)("ngClass",ot(12,sr,i.inline,i.both,i.horizontal)),I("id",i._id)("tabindex",i.tabindex)("data-pc-name","scroller")("data-pc-section","root"),p(2),a("ngIf",i.contentTemplate||i._contentTemplate)("ngIfElse",e),p(3),a("ngIf",i._showSpacer),p(),a("ngIf",!i.loaderDisabled&&i._showLoader&&i.d_loading)}}function Tr(t,o){t&1&&z(0)}function Or(t,o){if(t&1&&(R(0),f(1,Tr,1,0,"ng-container",10),P()),t&2){let e=c(2);p(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Pe(5,Zi,e.items,Pe(2,pr,e._items,e.loadedColumns)))}}function Er(t,o){if(t&1&&(ve(0),f(1,Or,2,8,"ng-container",17)),t&2){let e=c();p(),a("ngIf",e.contentTemplate||e._contentTemplate)}}var Dt=(()=>{class t extends Q{zone;get id(){return this._id}set id(e){this._id=e}get style(){return this._style}set style(e){this._style=e}get styleClass(){return this._styleClass}set styleClass(e){this._styleClass=e}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=e}get items(){return this._items}set items(e){this._items=e}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e}get scrollHeight(){return this._scrollHeight}set scrollHeight(e){this._scrollHeight=e}get scrollWidth(){return this._scrollWidth}set scrollWidth(e){this._scrollWidth=e}get orientation(){return this._orientation}set orientation(e){this._orientation=e}get step(){return this._step}set step(e){this._step=e}get delay(){return this._delay}set delay(e){this._delay=e}get resizeDelay(){return this._resizeDelay}set resizeDelay(e){this._resizeDelay=e}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=e}get inline(){return this._inline}set inline(e){this._inline=e}get lazy(){return this._lazy}set lazy(e){this._lazy=e}get disabled(){return this._disabled}set disabled(e){this._disabled=e}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(e){this._loaderDisabled=e}get columns(){return this._columns}set columns(e){this._columns=e}get showSpacer(){return this._showSpacer}set showSpacer(e){this._showSpacer=e}get showLoader(){return this._showLoader}set showLoader(e){this._showLoader=e}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(e){this._numToleratedItems=e}get loading(){return this._loading}set loading(e){this._loading=e}get autoSize(){return this._autoSize}set autoSize(e){this._autoSize=e}get trackBy(){return this._trackBy}set trackBy(e){this._trackBy=e}get options(){return this._options}set options(e){this._options=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}onLazyLoad=new $;onScroll=new $;onScrollIndexChange=new $;elementViewChild;contentViewChild;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(e=>this._columns?e:e.slice(this._appendOnly?0:this.first.cols,this.last.cols)):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=L(to);constructor(e){super(),this.zone=e}ngOnInit(){super.ngOnInit(),this.setInitialState()}ngOnChanges(e){super.ngOnChanges(e);let i=!1;if(e.loading){let{previousValue:n,currentValue:s}=e.loading;this.lazy&&n!==s&&s!==this.d_loading&&(this.d_loading=s,i=!0)}if(e.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),e.numToleratedItems){let{previousValue:n,currentValue:s}=e.numToleratedItems;n!==s&&s!==this.d_numToleratedItems&&(this.d_numToleratedItems=s)}if(e.options){let{previousValue:n,currentValue:s}=e.options;this.lazy&&n?.loading!==s?.loading&&s?.loading!==this.d_loading&&(this.d_loading=s.loading,i=!0),n?.numToleratedItems!==s?.numToleratedItems&&s?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=s.numToleratedItems)}this.initialized&&!i&&(e.items?.previousValue?.length!==e.items?.currentValue?.length||e.itemSize||e.scrollHeight||e.scrollWidth)&&(this.init(),this.calculateAutoSize())}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"loadericon":this._loaderIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),Promise.resolve().then(()=>{this.viewInit()})}ngAfterViewChecked(){this.initialized||this.viewInit()}ngOnDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1,super.ngOnDestroy()}viewInit(){Ne(this.platformId)&&!this.initialized&&Mi(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=qe(this.elementViewChild?.nativeElement),this.defaultHeight=Ge(this.elementViewChild?.nativeElement),this.defaultContentWidth=qe(this.contentEl),this.defaultContentHeight=Ge(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize(),this.bindResizeListener(),this.cd.detectChanges())}setContentEl(e){this.contentEl=e||this.contentViewChild?.nativeElement||he(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,this.d_loading=this._loading||!1,this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=[],this.spacerStyle={},this.contentStyle={}}getElementRef(){return this.elementViewChild}getPageByFirst(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(e){return this._step?this.page!==this.getPageByFirst(e??this.first):!0}scrollTo(e){this.elementViewChild?.nativeElement?.scrollTo(e)}scrollToIndex(e,i="auto"){if(this.both?e.every(s=>s>-1):e>-1){let s=this.first,{scrollTop:r=0,scrollLeft:l=0}=this.elementViewChild?.nativeElement,{numToleratedItems:d}=this.calculateNumItems(),u=this.getContentPosition(),h=this.itemSize,g=(F=0,k)=>F<=k?0:F,m=(F,k,ae)=>F*k+ae,_=(F=0,k=0)=>this.scrollTo({left:F,top:k,behavior:i}),O=this.both?{rows:0,cols:0}:0,H=!1,E=!1;this.both?(O={rows:g(e[0],d[0]),cols:g(e[1],d[1])},_(m(O.cols,h[1],u.left),m(O.rows,h[0],u.top)),E=this.lastScrollPos.top!==r||this.lastScrollPos.left!==l,H=O.rows!==s.rows||O.cols!==s.cols):(O=g(e,d),this.horizontal?_(m(O,h,u.left),r):_(l,m(O,h,u.top)),E=this.lastScrollPos!==(this.horizontal?l:r),H=O!==s),this.isRangeChanged=H,E&&(this.first=O)}}scrollInView(e,i,n="auto"){if(i){let{first:s,viewport:r}=this.getRenderedRange(),l=(h=0,g=0)=>this.scrollTo({left:h,top:g,behavior:n}),d=i==="to-start",u=i==="to-end";if(d){if(this.both)r.first.rows-s.rows>e[0]?l(r.first.cols*this._itemSize[1],(r.first.rows-1)*this._itemSize[0]):r.first.cols-s.cols>e[1]&&l((r.first.cols-1)*this._itemSize[1],r.first.rows*this._itemSize[0]);else if(r.first-s>e){let h=(r.first-1)*this._itemSize;this.horizontal?l(h,0):l(0,h)}}else if(u){if(this.both)r.last.rows-s.rows<=e[0]+1?l(r.first.cols*this._itemSize[1],(r.first.rows+1)*this._itemSize[0]):r.last.cols-s.cols<=e[1]+1&&l((r.first.cols+1)*this._itemSize[1],r.first.rows*this._itemSize[0]);else if(r.last-s<=e+1){let h=(r.first+1)*this._itemSize;this.horizontal?l(h,0):l(0,h)}}}else this.scrollToIndex(e,n)}getRenderedRange(){let e=(s,r)=>r||s?Math.floor(s/(r||s)):0,i=this.first,n=0;if(this.elementViewChild?.nativeElement){let{scrollTop:s,scrollLeft:r}=this.elementViewChild.nativeElement;if(this.both)i={rows:e(s,this._itemSize[0]),cols:e(r,this._itemSize[1])},n={rows:i.rows+this.numItemsInViewport.rows,cols:i.cols+this.numItemsInViewport.cols};else{let l=this.horizontal?r:s;i=e(l,this._itemSize),n=i+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:i,last:n}}}calculateNumItems(){let e=this.getContentPosition(),i=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-e.left:0)||0,n=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-e.top:0)||0,s=(u,h)=>h||u?Math.ceil(u/(h||u)):0,r=u=>Math.ceil(u/2),l=this.both?{rows:s(n,this._itemSize[0]),cols:s(i,this._itemSize[1])}:s(this.horizontal?i:n,this._itemSize),d=this.d_numToleratedItems||(this.both?[r(l.rows),r(l.cols)]:r(l));return{numItemsInViewport:l,numToleratedItems:d}}calculateOptions(){let{numItemsInViewport:e,numToleratedItems:i}=this.calculateNumItems(),n=(l,d,u,h=!1)=>this.getLast(l+d+(l<u?2:3)*u,h),s=this.first,r=this.both?{rows:n(this.first.rows,e.rows,i[0]),cols:n(this.first.cols,e.cols,i[1],!0)}:n(this.first,e,i);this.last=r,this.numItemsInViewport=e,this.d_numToleratedItems=i,this.showLoader&&(this.loaderArr=this.both?Array.from({length:e.rows}).map(()=>Array.from({length:e.cols})):Array.from({length:e})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:s.cols}:0:s,last:Math.min(this._step?this._step:this.last,this.items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[e,i]=[qe(this.contentEl),Ge(this.contentEl)];e!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),i!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[n,s]=[qe(this.elementViewChild.nativeElement),Ge(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=n<this.defaultWidth?n+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=s<this.defaultHeight?s+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(e=0,i=!1){return this._items?Math.min(i?(this._columns||this._items[0]).length:this._items.length,e):0}getContentPosition(){if(this.contentEl){let e=getComputedStyle(this.contentEl),i=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),n=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),s=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),r=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:i,right:n,top:s,bottom:r,x:i+n,y:s+r}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let e=this.elementViewChild.nativeElement.parentElement.parentElement,i=this._scrollWidth||`${this.elementViewChild.nativeElement.offsetWidth||e.offsetWidth}px`,n=this._scrollHeight||`${this.elementViewChild.nativeElement.offsetHeight||e.offsetHeight}px`,s=(r,l)=>this.elementViewChild.nativeElement.style[r]=l;this.both||this.horizontal?(s("height",n),s("width",i)):s("height",n)}}setSpacerSize(){if(this._items){let e=this.getContentPosition(),i=(n,s,r,l=0)=>this.spacerStyle=dt(D({},this.spacerStyle),{[`${n}`]:(s||[]).length*r+l+"px"});this.both?(i("height",this._items,this._itemSize[0],e.y),i("width",this._columns||this._items[1],this._itemSize[1],e.x)):this.horizontal?i("width",this._columns||this._items,this._itemSize,e.x):i("height",this._items,this._itemSize,e.y)}}setContentPosition(e){if(this.contentEl&&!this._appendOnly){let i=e?e.first:this.first,n=(r,l)=>r*l,s=(r=0,l=0)=>this.contentStyle=dt(D({},this.contentStyle),{transform:`translate3d(${r}px, ${l}px, 0)`});if(this.both)s(n(i.cols,this._itemSize[1]),n(i.rows,this._itemSize[0]));else{let r=n(i,this._itemSize);this.horizontal?s(r,0):s(0,r)}}}onScrollPositionChange(e){let i=e.target,n=this.getContentPosition(),s=(E,F)=>E?E>F?E-F:E:0,r=(E,F)=>F||E?Math.floor(E/(F||E)):0,l=(E,F,k,ae,oe,Oe)=>E<=oe?oe:Oe?k-ae-oe:F+oe-1,d=(E,F,k,ae,oe,Oe,Ze)=>E<=Oe?0:Math.max(0,Ze?E<F?k:E-Oe:E>F?k:E-2*Oe),u=(E,F,k,ae,oe,Oe=!1)=>{let Ze=F+ae+2*oe;return E>=oe&&(Ze+=oe+1),this.getLast(Ze,Oe)},h=s(i.scrollTop,n.top),g=s(i.scrollLeft,n.left),m=this.both?{rows:0,cols:0}:0,_=this.last,O=!1,H=this.lastScrollPos;if(this.both){let E=this.lastScrollPos.top<=h,F=this.lastScrollPos.left<=g;if(!this._appendOnly||this._appendOnly&&(E||F)){let k={rows:r(h,this._itemSize[0]),cols:r(g,this._itemSize[1])},ae={rows:l(k.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],E),cols:l(k.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],F)};m={rows:d(k.rows,ae.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],E),cols:d(k.cols,ae.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],F)},_={rows:u(k.rows,m.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:u(k.cols,m.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},O=m.rows!==this.first.rows||_.rows!==this.last.rows||m.cols!==this.first.cols||_.cols!==this.last.cols||this.isRangeChanged,H={top:h,left:g}}}else{let E=this.horizontal?g:h,F=this.lastScrollPos<=E;if(!this._appendOnly||this._appendOnly&&F){let k=r(E,this._itemSize),ae=l(k,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,F);m=d(k,ae,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,F),_=u(k,m,this.last,this.numItemsInViewport,this.d_numToleratedItems),O=m!==this.first||_!==this.last||this.isRangeChanged,H=E}}return{first:m,last:_,isRangeChanged:O,scrollPos:H}}onScrollChange(e){let{first:i,last:n,isRangeChanged:s,scrollPos:r}=this.onScrollPositionChange(e);if(s){let l={first:i,last:n};if(this.setContentPosition(l),this.first=i,this.last=n,this.lastScrollPos=r,this.handleEvents("onScrollIndexChange",l),this._lazy&&this.isPageChanged(i)){let d={first:this._step?Math.min(this.getPageByFirst(i)*this._step,this.items.length-this._step):i,last:Math.min(this._step?(this.getPageByFirst(i)+1)*this._step:n,this.items.length)};(this.lazyLoadState.first!==d.first||this.lazyLoadState.last!==d.last)&&this.handleEvents("onLazyLoad",d),this.lazyLoadState=d}}}onContainerScroll(e){if(this.handleEvents("onScroll",{originalEvent:e}),this._delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){let{isRangeChanged:i}=this.onScrollPositionChange(e);(i||(this._step?this.isPageChanged():!1))&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this.showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(e)}bindResizeListener(){Ne(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let e=this.document.defaultView,i=ft()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(e,i,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(Mi(this.elementViewChild?.nativeElement)){let[e,i]=[qe(this.elementViewChild?.nativeElement),Ge(this.elementViewChild?.nativeElement)],[n,s]=[e!==this.defaultWidth,i!==this.defaultHeight];(this.both?n||s:this.horizontal?n:this.vertical?s:!1)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=e,this.defaultHeight=i,this.defaultContentWidth=qe(this.contentEl),this.defaultContentHeight=Ge(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(e,i){return this.options&&this.options[e]?this.options[e](i):this[e].emit(i)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:e=>this.getOptions(e),loading:this.d_loading,getLoaderOptions:(e,i)=>this.getLoaderOptions(e,i),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both}}getOptions(e){let i=(this._items||[]).length,n=this.both?this.first.rows+e:this.first+e;return{index:n,count:i,first:n===0,last:n===i-1,even:n%2===0,odd:n%2!==0}}getLoaderOptions(e,i){let n=this.loaderArr.length;return D({index:e,count:n,first:e===0,last:e===n-1,even:e%2===0,odd:e%2!==0},i)}static \u0275fac=function(i){return new(i||t)(pe(Le))};static \u0275cmp=B({type:t,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(i,n,s){if(i&1&&(U(s,io,4),U(s,er,4),U(s,tr,4),U(s,ir,4),U(s,Qe,4)),i&2){let r;S(r=C())&&(n.contentTemplate=r.first),S(r=C())&&(n.itemTemplate=r.first),S(r=C())&&(n.loaderTemplate=r.first),S(r=C())&&(n.loaderIconTemplate=r.first),S(r=C())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&(ee(nr,5),ee(io,5)),i&2){let s;S(s=C())&&(n.elementViewChild=s.first),S(s=C())&&(n.contentViewChild=s.first)}},inputs:{id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},standalone:!0,features:[Y([to]),M,Ye,q],ngContentSelectors:or,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle","ngClass"],["class","p-virtualscroller-spacer",3,"ngStyle",4,"ngIf"],["class","p-virtualscroller-loader",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-virtualscroller-content",3,"ngClass","ngStyle"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-virtualscroller-spacer",3,"ngStyle"],[1,"p-virtualscroller-loader",3,"ngClass"],[4,"ngFor","ngForOf"],[3,"styleClass"],[4,"ngIf"]],template:function(i,n){if(i&1&&(ye(),f(0,Ir,8,16,"ng-container",6)(1,Er,2,1,"ng-template",null,0,se)),i&2){let s=me(2);a("ngIf",!n._disabled)("ngIfElse",s)}},dependencies:[le,Fe,Ct,ke,Ve,De,Oi,J],encapsulation:2})}return t})(),uf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[Dt,J,J]})}return t})();var Lr=({dt:t})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${t("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${t("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${t("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${t("tooltip.background")};
    color: ${t("tooltip.color")};
    padding: ${t("tooltip.padding")};
    box-shadow: ${t("tooltip.shadow")};
    border-radius: ${t("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0;
    border-right-color: ${t("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-left-color: ${t("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}
`,Fr={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},oo=(()=>{class t extends G{name="tooltip";theme=Lr;classes=Fr;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var Fi=(()=>{class t extends Q{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:Te("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=L(oo);interactionInProgress=!1;constructor(e,i){super(),this.zone=e,this.viewContainer=i}ngAfterViewInit(){super.ngAfterViewInit(),Ne(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=D(D({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(ht(e.relatedTarget,"p-tooltip")||ht(e.relatedTarget,"p-tooltip-text")||ht(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?$i(this.container,this.el.nativeElement):$i(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),bn(this.container,250),this.getOption("tooltipZIndex")==="auto"?pt.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&pt.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof ci){let i=this.viewContainer.createEmbeddedView(e);i.detectChanges(),i.rootNodes.forEach(n=>this.tooltipText.appendChild(n))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[n,s]of i[e].entries())if(n===0)s.call(this);else if(this.isOutOfBounds())s.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),i=e.left+ki(),n=e.top+Di();return{left:i,top:n}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?he(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,i=je(e),n=(ze(e)-ze(this.container))/2;this.alignTooltip(i,n)}alignLeft(){this.preAlign("left");let e=je(this.container),i=(ze(this.el.nativeElement)-ze(this.container))/2;this.alignTooltip(-e,i)}alignTop(){this.preAlign("top");let e=(je(this.el.nativeElement)-je(this.container))/2,i=ze(this.container);this.alignTooltip(e,-i)}alignBottom(){this.preAlign("bottom");let e=(je(this.el.nativeElement)-je(this.container))/2,i=ze(this.el.nativeElement);this.alignTooltip(e,i)}alignTooltip(e,i){let n=this.getHostOffset(),s=n.left+e,r=n.top+i;this.container.style.left=s+this.getOption("positionLeft")+"px",this.container.style.top=r+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=D(D({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return ht(e,"p-inputwrapper")?he(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let e=this.container.getBoundingClientRect(),i=e.top,n=e.left,s=je(this.container),r=ze(this.container),l=mi();return n+s>l.width||n<0||i<0||i+r>l.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Lt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):wn(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&pt.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||t)(pe(Le),pe(cn))};static \u0275dir=Se({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",v],showDelay:[2,"showDelay","showDelay",ue],hideDelay:[2,"hideDelay","hideDelay",ue],life:[2,"life","life",ue],positionTop:[2,"positionTop","positionTop",ue],positionLeft:[2,"positionLeft","positionLeft",ue],autoHide:[2,"autoHide","autoHide",v],fitContent:[2,"fitContent","fitContent",v],hideOnEscape:[2,"hideOnEscape","hideOnEscape",v],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},standalone:!0,features:[Y([oo]),_e,M,Ye]})}return t})(),so=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({})}return t})();var Dr=({dt:t})=>`
.p-select {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${t("select.background")};
    border: 1px solid ${t("select.border.color")};
    transition: background ${t("select.transition.duration")}, color ${t("select.transition.duration")}, border-color ${t("select.transition.duration")},
        outline-color ${t("select.transition.duration")}, box-shadow ${t("select.transition.duration")};
    border-radius: ${t("select.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("select.shadow")};
}

.p-select:not(.p-disabled):hover {
    border-color: ${t("select.hover.border.color")};
}

.p-select:not(.p-disabled).p-focus {
    border-color: ${t("select.focus.border.color")};
    box-shadow: ${t("select.focus.ring.shadow")};
    outline: ${t("select.focus.ring.width")} ${t("select.focus.ring.style")} ${t("select.focus.ring.color")};
    outline-offset: ${t("select.focus.ring.offset")};
}

.p-select.p-variant-filled {
    background: ${t("select.filled.background")};
}

.p-select.p-variant-filled.p-focus {
    background: ${t("select.filled.focus.background")};
}

.p-select.p-disabled {
    opacity: 1;
    background: ${t("select.disabled.background")};
}

.p-select-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: ${t("select.clear.icon.color")};
    right: ${t("select.dropdown.width")};
}

.p-select-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${t("select.dropdown.color")};
    width: ${t("select.dropdown.width")};
    border-start-end-radius: ${t("select.border.radius")};
    border-end-end-radius: ${t("select.border.radius")};
}

.p-select-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: ${t("select.padding.y")} ${t("select.padding.x")};
    text-overflow: ellipsis;
    cursor: pointer;
    color: ${t("select.color")};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-select-label.p-placeholder {
    color: ${t("select.placeholder.color")};
}

.p-select:has(.p-select-clear-icon) .p-select-label {
    padding-right: calc(1rem + ${t("select.padding.x")});
}

.p-select.p-disabled .p-select-label {
    color: ${t("select.disabled.color")};
}

.p-select-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-select-label {
    cursor: default;
}

.p-select .p-select-overlay {
    min-width: 100%;
}

.p-select-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: ${t("select.overlay.background")};
    color: ${t("select.overlay.color")};
    border: 1px solid ${t("select.overlay.border.color")};
    border-radius: ${t("select.overlay.border.radius")};
    box-shadow: ${t("select.overlay.shadow")};
}

.p-select-header {
    padding: ${t("select.list.header.padding")};
}

.p-select-filter {
    width: 100%;
}

.p-select-list-container {
    overflow: auto;
}

.p-select-option-group {
    cursor: auto;
    margin: 0;
    padding: ${t("select.option.group.padding")};
    background: ${t("select.option.group.background")};
    color: ${t("select.option.group.color")};
    font-weight: ${t("select.option.group.font.weight")};
}

.p-select-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${t("select.list.padding")};
    gap: ${t("select.list.gap")};
    display: flex;
    flex-direction: column;
}

.p-select-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${t("select.option.padding")};
    border: 0 none;
    color: ${t("select.option.color")};
    background: transparent;
    transition: background ${t("select.transition.duration")}, color ${t("select.transition.duration")}, border-color ${t("select.transition.duration")},
    box-shadow ${t("select.transition.duration")}, outline-color ${t("select.transition.duration")};
    border-radius: ${t("select.option.border.radius")};
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
    background: ${t("select.option.focus.background")};
    color: ${t("select.option.focus.color")};
}

.p-select-option.p-select-option-selected {
    background: ${t("select.option.selected.background")};
    color: ${t("select.option.selected.color")};
}

.p-select-option.p-select-option-selected.p-focus {
    background: ${t("select.option.selected.focus.background")};
    color: ${t("select.option.selected.focus.color")};
}

.p-select-option-check-icon {
    position: relative;
    margin-inline-start: ${t("select.checkmark.gutter.start")};
    margin-inline-end: ${t("select.checkmark.gutter.end")};
    color: ${t("select.checkmark.color")};
}

.p-select-empty-message {
    padding: ${t("select.empty.message.padding")};
}

.p-select-fluid {
    display: flex;
}

/*For PrimeNG*/

.p-dropdown.ng-invalid.ng-dirty,
.p-select.ng-invalid.ng-dirty {
    outline: 1px solid ${t("select.invalid.border.color")};
    outline-offset: 0;
}

.p-dropdown.ng-invalid.ng-dirty .p-dropdown-label.p-placeholder,
.p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
    color: ${t("select.invalid.placeholder.color")};
}
`,Vr={root:({instance:t})=>["p-dropdown p-select p-component p-inputwrapper",{"p-disabled":t.disabled,"p-variant-filled":t.variant?t.variant==="filled":t.config.inputStyle()==="filled","p-focus":t.focused,"p-inputwrapper-filled":t.modelValue()!==void 0&&t.modelValue()!==null&&!t.modelValue().length,"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-select-open":t.overlayVisible,"p-select-fluid":t.fluid,"p-select-sm p-inputfield-sm":t.size==="small","p-select-lg p-inputfield-lg":t.size==="large"}],label:({instance:t,props:o})=>["p-select-label",{"p-placeholder":!o.editable&&t.label===o.placeholder,"p-select-label-empty":!o.editable&&!t.$slots.value&&(t.label==="p-emptylabel"||t.label.length===0)}],clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingicon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:({instance:t,props:o,state:e,option:i,focusedOption:n})=>["p-select-option",{"p-select-option-selected":t.isSelected(i)&&o.highlightOnSelect,"p-focus":e.focusedOptionIndex===n,"p-disabled":t.isOptionDisabled(i)}],optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},ro=(()=>{class t extends G{name="select";theme=Dr;classes=Vr;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),lo;lo||(lo={});var jt=t=>({height:t}),$r=(t,o,e)=>({"p-select-option":!0,"p-select-option-selected":t,"p-disabled":o,"p-focus":e}),Yi=t=>({$implicit:t});function Mr(t,o){t&1&&A(0,"CheckIcon",4),t&2&&a("styleClass","p-select-option-check-icon")}function Ar(t,o){t&1&&A(0,"BlankIcon",4),t&2&&a("styleClass","p-select-option-blank-icon")}function Rr(t,o){if(t&1&&(R(0),f(1,Mr,1,1,"CheckIcon",3)(2,Ar,1,1,"BlankIcon",3),P()),t&2){let e=c();p(),a("ngIf",e.selected),p(),a("ngIf",!e.selected)}}function Pr(t,o){if(t&1&&(b(0,"span"),de(1),y()),t&2){let e,i=c();p(),Ce((e=i.label)!==null&&e!==void 0?e:"empty")}}function Nr(t,o){t&1&&z(0)}var zr=["container"],Hr=["filter"],Br=["focusInput"],Wr=["editableInput"],Kr=["items"],Ur=["scroller"],jr=["overlay"],Gr=["firstHiddenFocusableEl"],qr=["lastHiddenFocusableEl"],Qr=()=>({class:"p-select-clear-icon"}),Zr=()=>({class:"p-select-dropdown-icon"}),ao=t=>({options:t}),co=(t,o)=>({$implicit:t,options:o}),Yr=()=>({});function Jr(t,o){if(t&1&&(R(0),de(1),P()),t&2){let e=c(2);p(),Ce(e.label()==="p-emptylabel"?"\xA0":e.label())}}function Xr(t,o){if(t&1&&z(0,23),t&2){let e=c(2);a("ngTemplateOutlet",e.selectedItemTemplate)("ngTemplateOutletContext",W(2,Yi,e.selectedOption))}}function el(t,o){if(t&1&&(b(0,"span"),de(1),y()),t&2){let e=c(3);p(),Ce(e.label()==="p-emptylabel"?"\xA0":e.label())}}function tl(t,o){if(t&1&&f(0,el,2,1,"span",17),t&2){let e=c(2);a("ngIf",!e.selectedOption)}}function il(t,o){if(t&1){let e=Z();b(0,"span",21,3),N("focus",function(n){w(e);let s=c();return x(s.onInputFocus(n))})("blur",function(n){w(e);let s=c();return x(s.onInputBlur(n))})("keydown",function(n){w(e);let s=c();return x(s.onKeyDown(n))}),f(2,Jr,2,1,"ng-container",19)(3,Xr,1,4,"ng-container",22)(4,tl,1,1,"ng-template",null,4,se),y()}if(t&2){let e,i=me(5),n=c();a("ngClass",n.inputClass)("pTooltip",n.tooltip)("tooltipPosition",n.tooltipPosition)("positionStyle",n.tooltipPositionStyle)("tooltipStyleClass",n.tooltipStyleClass)("pAutoFocus",n.autofocus),I("aria-disabled",n.disabled)("id",n.inputId)("aria-label",n.ariaLabel||(n.label()==="p-emptylabel"?void 0:n.label()))("aria-labelledby",n.ariaLabelledBy)("aria-haspopup","listbox")("aria-expanded",(e=n.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",n.overlayVisible?n.id+"_list":null)("tabindex",n.disabled?-1:n.tabindex)("aria-activedescendant",n.focused?n.focusedOptionId:void 0)("aria-required",n.required)("required",n.required),p(2),a("ngIf",!n.selectedItemTemplate)("ngIfElse",i),p(),a("ngIf",n.selectedItemTemplate&&n.selectedOption)}}function nl(t,o){if(t&1){let e=Z();b(0,"input",24,5),N("input",function(n){w(e);let s=c();return x(s.onEditableInput(n))})("keydown",function(n){w(e);let s=c();return x(s.onKeyDown(n))})("focus",function(n){w(e);let s=c();return x(s.onInputFocus(n))})("blur",function(n){w(e);let s=c();return x(s.onInputBlur(n))}),y()}if(t&2){let e=c();a("ngClass",e.inputClass)("disabled",e.disabled)("pAutoFocus",e.autofocus),I("id",e.inputId)("maxlength",e.maxlength)("placeholder",e.modelValue()===void 0||e.modelValue()===null?e.placeholder():void 0)("aria-label",e.ariaLabel||(e.label()==="p-emptylabel"?void 0:e.label()))("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function ol(t,o){if(t&1){let e=Z();b(0,"TimesIcon",26),N("click",function(n){w(e);let s=c(2);return x(s.clear(n))}),y()}t&2&&I("data-pc-section","clearicon")}function sl(t,o){}function rl(t,o){t&1&&f(0,sl,0,0,"ng-template")}function ll(t,o){if(t&1){let e=Z();b(0,"span",26),N("click",function(n){w(e);let s=c(2);return x(s.clear(n))}),f(1,rl,1,0,null,27),y()}if(t&2){let e=c(2);I("data-pc-section","clearicon"),p(),a("ngTemplateOutlet",e.clearIconTemplate)("ngTemplateOutletContext",Ue(3,Qr))}}function al(t,o){if(t&1&&(R(0),f(1,ol,1,1,"TimesIcon",25)(2,ll,2,4,"span",25),P()),t&2){let e=c();p(),a("ngIf",!e.clearIconTemplate),p(),a("ngIf",e.clearIconTemplate)}}function cl(t,o){t&1&&z(0)}function pl(t,o){if(t&1&&(R(0),f(1,cl,1,0,"ng-container",28),P()),t&2){let e=c(2);p(),a("ngTemplateOutlet",e.loadingIconTemplate)}}function dl(t,o){if(t&1&&A(0,"span",31),t&2){let e=c(3);a("ngClass","p-select-loading-icon pi-spin "+e.loadingIcon)}}function ul(t,o){t&1&&A(0,"span",32),t&2&&j("p-select-loading-icon pi pi-spinner pi-spin")}function hl(t,o){if(t&1&&(R(0),f(1,dl,1,1,"span",29)(2,ul,1,2,"span",30),P()),t&2){let e=c(2);p(),a("ngIf",e.loadingIcon),p(),a("ngIf",!e.loadingIcon)}}function fl(t,o){if(t&1&&(R(0),f(1,pl,2,1,"ng-container",17)(2,hl,3,2,"ng-container",17),P()),t&2){let e=c();p(),a("ngIf",e.loadingIconTemplate),p(),a("ngIf",!e.loadingIconTemplate)}}function ml(t,o){if(t&1&&A(0,"span",36),t&2){let e=c(3);a("ngClass",e.dropdownIcon)}}function gl(t,o){t&1&&A(0,"ChevronDownIcon",37),t&2&&a("styleClass","p-select-dropdown-icon")}function _l(t,o){if(t&1&&(R(0),f(1,ml,1,1,"span",34)(2,gl,1,1,"ChevronDownIcon",35),P()),t&2){let e=c(2);p(),a("ngIf",e.dropdownIcon),p(),a("ngIf",!e.dropdownIcon)}}function bl(t,o){}function yl(t,o){t&1&&f(0,bl,0,0,"ng-template")}function vl(t,o){if(t&1&&(b(0,"span",38),f(1,yl,1,0,null,27),y()),t&2){let e=c(2);p(),a("ngTemplateOutlet",e.dropdownIconTemplate)("ngTemplateOutletContext",Ue(2,Zr))}}function Sl(t,o){if(t&1&&f(0,_l,3,2,"ng-container",17)(1,vl,2,3,"span",33),t&2){let e=c();a("ngIf",!e.dropdownIconTemplate),p(),a("ngIf",e.dropdownIconTemplate)}}function Cl(t,o){t&1&&z(0)}function wl(t,o){t&1&&z(0)}function xl(t,o){if(t&1&&(R(0),f(1,wl,1,0,"ng-container",27),P()),t&2){let e=c(3);p(),a("ngTemplateOutlet",e.filterTemplate)("ngTemplateOutletContext",W(2,ao,e.filterOptions))}}function Il(t,o){t&1&&A(0,"SearchIcon")}function Tl(t,o){}function Ol(t,o){t&1&&f(0,Tl,0,0,"ng-template")}function El(t,o){if(t&1&&(b(0,"span"),f(1,Ol,1,0,null,28),y()),t&2){let e=c(4);p(),a("ngTemplateOutlet",e.filterIconTemplate)}}function Ll(t,o){if(t&1){let e=Z();b(0,"p-iconfield")(1,"input",45,10),N("input",function(n){w(e);let s=c(3);return x(s.onFilterInputChange(n))})("keydown",function(n){w(e);let s=c(3);return x(s.onFilterKeyDown(n))})("blur",function(n){w(e);let s=c(3);return x(s.onFilterBlur(n))}),y(),b(3,"p-inputicon"),f(4,Il,1,0,"SearchIcon",17)(5,El,2,1,"span",17),y()()}if(t&2){let e=c(3);p(),a("value",e._filterValue()||"")("variant",e.variant),I("placeholder",e.filterPlaceholder)("aria-owns",e.id+"_list")("aria-label",e.ariaFilterLabel)("aria-activedescendant",e.focusedOptionId),p(3),a("ngIf",!e.filterIconTemplate),p(),a("ngIf",e.filterIconTemplate)}}function Fl(t,o){if(t&1){let e=Z();b(0,"div",44),N("click",function(n){return w(e),x(n.stopPropagation())}),f(1,xl,2,4,"ng-container",19)(2,Ll,6,8,"ng-template",null,9,se),y()}if(t&2){let e=me(3),i=c(2);p(),a("ngIf",i.filterTemplate)("ngIfElse",e)}}function kl(t,o){t&1&&z(0)}function Dl(t,o){if(t&1&&f(0,kl,1,0,"ng-container",27),t&2){let e=o.$implicit,i=o.options;c(2);let n=me(9);a("ngTemplateOutlet",n)("ngTemplateOutletContext",Pe(2,co,e,i))}}function Vl(t,o){t&1&&z(0)}function $l(t,o){if(t&1&&f(0,Vl,1,0,"ng-container",27),t&2){let e=o.options,i=c(4);a("ngTemplateOutlet",i.loaderTemplate)("ngTemplateOutletContext",W(2,ao,e))}}function Ml(t,o){t&1&&(R(0),f(1,$l,1,4,"ng-template",null,12,se),P())}function Al(t,o){if(t&1){let e=Z();b(0,"p-scroller",46,11),N("onLazyLoad",function(n){w(e);let s=c(2);return x(s.onLazyLoad.emit(n))}),f(2,Dl,1,5,"ng-template",null,2,se)(4,Ml,3,0,"ng-container",17),y()}if(t&2){let e=c(2);Ke(W(8,jt,e.scrollHeight)),a("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize||e._itemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),p(4),a("ngIf",e.loaderTemplate)}}function Rl(t,o){t&1&&z(0)}function Pl(t,o){if(t&1&&(R(0),f(1,Rl,1,0,"ng-container",27),P()),t&2){c();let e=me(9),i=c();p(),a("ngTemplateOutlet",e)("ngTemplateOutletContext",Pe(3,co,i.visibleOptions(),Ue(2,Yr)))}}function Nl(t,o){if(t&1&&(b(0,"span"),de(1),y()),t&2){let e=c(2).$implicit,i=c(3);p(),Ce(i.getOptionGroupLabel(e.optionGroup))}}function zl(t,o){t&1&&z(0)}function Hl(t,o){if(t&1&&(R(0),b(1,"li",50),f(2,Nl,2,1,"span",17)(3,zl,1,0,"ng-container",27),y(),P()),t&2){let e=c(),i=e.$implicit,n=e.index,s=c().options,r=c(2);p(),a("ngStyle",W(5,jt,s.itemSize+"px")),I("id",r.id+"_"+r.getOptionIndex(n,s)),p(),a("ngIf",!r.groupTemplate),p(),a("ngTemplateOutlet",r.groupTemplate)("ngTemplateOutletContext",W(7,Yi,i.optionGroup))}}function Bl(t,o){if(t&1){let e=Z();R(0),b(1,"p-dropdownItem",51),N("onClick",function(n){w(e);let s=c().$implicit,r=c(3);return x(r.onOptionSelect(n,s))})("onMouseEnter",function(n){w(e);let s=c().index,r=c().options,l=c(2);return x(l.onOptionMouseEnter(n,l.getOptionIndex(s,r)))}),y(),P()}if(t&2){let e=c(),i=e.$implicit,n=e.index,s=c().options,r=c(2);p(),a("id",r.id+"_"+r.getOptionIndex(n,s))("option",i)("checkmark",r.checkmark)("selected",r.isSelected(i))("label",r.getOptionLabel(i))("disabled",r.isOptionDisabled(i))("template",r.itemTemplate)("focused",r.focusedOptionIndex()===r.getOptionIndex(n,s))("ariaPosInset",r.getAriaPosInset(r.getOptionIndex(n,s)))("ariaSetSize",r.ariaSetSize)}}function Wl(t,o){if(t&1&&f(0,Hl,4,9,"ng-container",17)(1,Bl,2,10,"ng-container",17),t&2){let e=o.$implicit,i=c(3);a("ngIf",i.isOptionGroup(e)),p(),a("ngIf",!i.isOptionGroup(e))}}function Kl(t,o){if(t&1&&de(0),t&2){let e=c(4);St(" ",e.emptyFilterMessageLabel," ")}}function Ul(t,o){t&1&&z(0,null,14)}function jl(t,o){if(t&1&&f(0,Ul,2,0,"ng-container",28),t&2){let e=c(4);a("ngTemplateOutlet",e.emptyFilterTemplate||e.emptyTemplate)}}function Gl(t,o){if(t&1&&(b(0,"li",52),f(1,Kl,1,1)(2,jl,1,1,"ng-container"),y()),t&2){let e=c().options,i=c(2);a("ngStyle",W(2,jt,e.itemSize+"px")),p(),vt(!i.emptyFilterTemplate&&!i.emptyTemplate?1:2)}}function ql(t,o){if(t&1&&de(0),t&2){let e=c(4);St(" ",e.emptyMessageLabel," ")}}function Ql(t,o){t&1&&z(0)}function Zl(t,o){if(t&1&&f(0,Ql,1,0,"ng-container",28),t&2){let e=c(4);a("ngTemplateOutlet",e.emptyTemplate)}}function Yl(t,o){if(t&1&&(b(0,"li",52),f(1,ql,1,1)(2,Zl,1,1,"ng-container"),y()),t&2){let e=c().options,i=c(2);a("ngStyle",W(2,jt,e.itemSize+"px")),p(),vt(i.emptyTemplate?2:1)}}function Jl(t,o){if(t&1&&(b(0,"ul",47,13),f(2,Wl,2,2,"ng-template",48)(3,Gl,3,4,"li",49)(4,Yl,3,4,"li",49),y()),t&2){let e=o.$implicit,i=o.options,n=c(2);Ke(i.contentStyle),a("ngClass",i.contentStyleClass),I("id",n.id+"_list")("aria-label",n.listLabel),p(2),a("ngForOf",e),p(),a("ngIf",n.filterValue&&n.isEmpty()),p(),a("ngIf",!n.filterValue&&n.isEmpty())}}function Xl(t,o){t&1&&z(0)}function ea(t,o){if(t&1){let e=Z();b(0,"div",39)(1,"span",40,6),N("focus",function(n){w(e);let s=c();return x(s.onFirstHiddenFocus(n))}),y(),f(3,Cl,1,0,"ng-container",28)(4,Fl,4,2,"div",41),b(5,"div",42),f(6,Al,5,10,"p-scroller",43)(7,Pl,2,6,"ng-container",17)(8,Jl,5,8,"ng-template",null,7,se),y(),f(10,Xl,1,0,"ng-container",28),b(11,"span",40,8),N("focus",function(n){w(e);let s=c();return x(s.onLastHiddenFocus(n))}),y()()}if(t&2){let e=c();j(e.panelStyleClass),a("ngClass","p-select-overlay p-component")("ngStyle",e.panelStyle),p(),I("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),p(2),a("ngTemplateOutlet",e.headerTemplate),p(),a("ngIf",e.filter),p(),yt("max-height",e.virtualScroll?"auto":e.scrollHeight||"auto"),p(),a("ngIf",e.virtualScroll),p(),a("ngIf",!e.virtualScroll),p(3),a("ngTemplateOutlet",e.footerTemplate),p(),I("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var ta={provide:hi,useExisting:li(()=>na),multi:!0},ia=(()=>{class t extends Q{id;option;selected;focused;label;disabled;visible;itemSize;ariaPosInset;ariaSetSize;template;checkmark;onClick=new $;onMouseEnter=new $;onOptionClick(e){this.onClick.emit(e)}onOptionMouseEnter(e){this.onMouseEnter.emit(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=B({type:t,selectors:[["p-dropdownItem"]],inputs:{id:"id",option:"option",selected:[2,"selected","selected",v],focused:[2,"focused","focused",v],label:"label",disabled:[2,"disabled","disabled",v],visible:[2,"visible","visible",v],itemSize:[2,"itemSize","itemSize",ue],ariaPosInset:"ariaPosInset",ariaSetSize:"ariaSetSize",template:"template",checkmark:[2,"checkmark","checkmark",v]},outputs:{onClick:"onClick",onMouseEnter:"onMouseEnter"},features:[_e,M],decls:4,vars:22,consts:[["role","option","pRipple","",3,"click","mouseenter","id","ngStyle","ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],[3,"styleClass"]],template:function(i,n){i&1&&(b(0,"li",0),N("click",function(r){return n.onOptionClick(r)})("mouseenter",function(r){return n.onOptionMouseEnter(r)}),f(1,Rr,3,2,"ng-container",1)(2,Pr,2,1,"span",1)(3,Nr,1,0,"ng-container",2),y()),i&2&&(a("id",n.id)("ngStyle",W(14,jt,n.itemSize+"px"))("ngClass",ot(16,$r,n.selected,n.disabled,n.focused)),I("aria-label",n.label)("aria-setsize",n.ariaSetSize)("aria-posinset",n.ariaPosInset)("aria-selected",n.selected)("data-p-focused",n.focused)("data-p-highlight",n.selected)("data-p-disabled",n.disabled),p(),a("ngIf",n.checkmark),p(),a("ngIf",!n.template),p(),a("ngTemplateOutlet",n.template)("ngTemplateOutletContext",W(20,Yi,n.option)))},dependencies:()=>[Fe,ke,Ve,De,kt,Pt,Nt],encapsulation:2})}return t})(),na=(()=>{class t extends Q{zone;filterService;id;scrollHeight="200px";filter;name;style;panelStyle;styleClass;panelStyleClass;readonly;required;editable;appendTo;tabindex=0;set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}loadingIcon;filterPlaceholder;filterLocale;variant="outlined";inputId;dataKey;filterBy;filterFields;autofocus;resetFilterOnHide=!1;checkmark=!1;dropdownIcon;loading=!1;optionLabel;optionValue;optionDisabled;optionGroupLabel="label";optionGroupChildren="items";autoDisplayFirst=!0;group;showClear;emptyFilterMessage="";emptyMessage="";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;overlayOptions;ariaFilterLabel;ariaLabel;ariaLabelledBy;filterMatchMode="contains";maxlength;tooltip="";tooltipPosition="right";tooltipPositionStyle="absolute";tooltipStyleClass;focusOnHover=!1;selectOnFocus=!1;autoOptionFocus=!0;autofocusFilter=!0;fluid;get disabled(){return this._disabled}set disabled(e){e&&(this.focused=!1,this.overlayVisible&&this.hide()),this._disabled=e,this.cd.destroyed||this.cd.detectChanges()}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e,console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.")}_itemSize;get autoZIndex(){return this._autoZIndex}set autoZIndex(e){this._autoZIndex=e,console.log("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}_autoZIndex;get baseZIndex(){return this._baseZIndex}set baseZIndex(e){this._baseZIndex=e,console.log("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}_baseZIndex;get showTransitionOptions(){return this._showTransitionOptions}set showTransitionOptions(e){this._showTransitionOptions=e,console.log("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}_showTransitionOptions;get hideTransitionOptions(){return this._hideTransitionOptions}set hideTransitionOptions(e){this._hideTransitionOptions=e,console.log("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}_hideTransitionOptions;get filterValue(){return this._filterValue()}set filterValue(e){setTimeout(()=>{this._filterValue.set(e)})}get options(){return this._options()}set options(e){Rt(e,this._options())||this._options.set(e)}onChange=new $;onFilter=new $;onFocus=new $;onBlur=new $;onClick=new $;onShow=new $;onHide=new $;onClear=new $;onLazyLoad=new $;_componentStyle=L(ro);containerViewChild;filterViewChild;focusInputViewChild;editableInputViewChild;itemsViewChild;scroller;overlayViewChild;firstHiddenFocusableElementOnOverlay;lastHiddenFocusableElementOnOverlay;get hostClass(){return this._componentStyle.classes.root({instance:this}).map(i=>typeof i=="string"?i:Object.keys(i).filter(n=>i[n]).join(" ")).join(" ")+" "+this.styleClass}get hostStyle(){return this.style}_disabled;itemsWrapper;itemTemplate;groupTemplate;loaderTemplate;selectedItemTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;dropdownIconTemplate;loadingIconTemplate;clearIconTemplate;filterIconTemplate;filterOptions;_options=re(null);_placeholder=re(void 0);modelValue=re(null);value;onModelChange=()=>{};onModelTouched=()=>{};hover;focused;overlayVisible;optionsChanged;panel;selectedOptionUpdated;_filterValue=re(null);searchValue;searchTimeout;preventModelTouched;focusedOptionIndex=re(-1);clicked=re(!1);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(at.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(at.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.hasSelectedOption()&&this.showClear&&!this.disabled}get listLabel(){return this.config.getTranslation(at.ARIA).listLabel}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}get inputClass(){let e=this.label();return{"p-select-label":!0,"p-placeholder":this.placeholder()&&e===this.placeholder(),"p-select-label-empty":!this.editable&&!this.selectedItemTemplate&&(e==null||e==="p-emptylabel"||e.length===0)}}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}visibleOptions=we(()=>{let e=this.getAllVisibleAndNonVisibleOptions();if(this._filterValue()){let n=!(this.filterBy||this.optionLabel)&&!this.filterFields&&!this.optionValue?this.options.filter(s=>s.label?s.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1:s.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1):this.filterService.filter(e,this.searchFields(),this._filterValue().trim(),this.filterMatchMode,this.filterLocale);if(this.group){let s=this.options||[],r=[];return s.forEach(l=>{let u=this.getOptionGroupChildren(l).filter(h=>n.includes(h));u.length>0&&r.push(dt(D({},l),{[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...u]}))}),this.flatOptions(r)}return n}return e});label=we(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),i=e.findIndex(n=>this.isOptionValueEqualsModelValue(n));return i!==-1?this.getOptionLabel(e[i]):this.placeholder()||"p-emptylabel"});filled=we(()=>typeof this.modelValue()=="string"?!!this.modelValue():this.label()!=="p-emptylabel"&&this.modelValue()!==void 0&&this.modelValue()!==null);selectedOption;editableInputValue=we(()=>this.getOptionLabel(this.selectedOption)||this.modelValue()||"");constructor(e,i){super(),this.zone=e,this.filterService=i,Je(()=>{let n=this.modelValue(),s=this.visibleOptions();if(s&&K(s)){let r=this.findSelectedOptionIndex();(r!==-1||n===void 0||typeof n=="string"&&n.length===0||this.isModelValueNotSet()||this.editable)&&(this.selectedOption=s[r])}fe(s)&&(n===void 0||this.isModelValueNotSet())&&K(this.selectedOption)&&(this.selectedOption=null),n!==void 0&&this.editable&&this.updateEditableLabel(),this.cd.markForCheck()})}isModelValueNotSet(){return this.modelValue()===null&&!this.isOptionValueEqualsModelValue(this.selectedOption)}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}ngOnInit(){super.ngOnInit(),console.log("Dropdown component is deprecated as of v18, use Select component instead."),this.id=this.id||Te("pn_id_"),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}ngAfterViewChecked(){if(this.optionsChanged&&this.overlayVisible&&(this.optionsChanged=!1,this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1)})),this.selectedOptionUpdated&&this.itemsWrapper){let e=he(this.overlayViewChild?.overlayViewChild?.nativeElement,"li.p-highlight");e&&yi(this.itemsWrapper,e),this.selectedOptionUpdated=!1}}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this.itemTemplate=e.template;break;case"selectedItem":this.selectedItemTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"filter":this.filterTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;case"emptyfilter":this.emptyFilterTemplate=e.template;break;case"empty":this.emptyTemplate=e.template;break;case"group":this.groupTemplate=e.template;break;case"loader":this.loaderTemplate=e.template;break;case"dropdownicon":this.dropdownIconTemplate=e.template;break;case"loadingicon":this.loadingIconTemplate=e.template;break;case"clearicon":this.clearIconTemplate=e.template;break;case"filtericon":this.filterIconTemplate=e.template;break;default:this.itemTemplate=e.template;break}})}flatOptions(e){return(e||[]).reduce((i,n,s)=>{i.push({optionGroup:n,group:!0,index:s});let r=this.getOptionGroupChildren(n);return r&&r.forEach(l=>i.push(l)),i},[])}autoUpdateModel(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()&&(this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex()),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)),this.autoDisplayFirst&&(this.modelValue()===null||this.modelValue()===void 0)&&!this.placeholder()){let e=this.findFirstOptionIndex();this.onOptionSelect(null,this.visibleOptions()[e],!1,!0)}}onOptionSelect(e,i,n=!0,s=!1){if(!this.isSelected(i)){let r=this.getOptionValue(i);this.updateModel(r,e),this.focusedOptionIndex.set(this.findSelectedOptionIndex()),s===!1&&this.onChange.emit({originalEvent:e,value:r})}n&&this.hide(!0)}onOptionMouseEnter(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)}updateModel(e,i){this.value=e,this.onModelChange(e),this.modelValue.set(e),this.selectedOptionUpdated=!0}writeValue(e){this.filter&&this.resetFilter(),this.value=e,this.allowModelChange()&&this.onModelChange(e),this.modelValue.set(this.value),this.updateEditableLabel(),this.cd.markForCheck()}allowModelChange(){return this.autoDisplayFirst&&!this.placeholder()&&(this.modelValue()===void 0||this.modelValue()===null)&&!this.editable&&this.options&&this.options.length}isSelected(e){return this.isValidOption(e)&&this.isOptionValueEqualsModelValue(e)}isOptionValueEqualsModelValue(e){return mt(this.modelValue(),this.getOptionValue(e),this.equalityKey())}ngAfterViewInit(){this.editable&&this.updateEditableLabel(),this.updatePlaceHolderForFloatingLabel()}updatePlaceHolderForFloatingLabel(){let e=this.el.nativeElement.parentElement,i=e?.classList.contains("p-float-label");if(e&&i&&!this.selectedOption){let n=e.querySelector("label");n&&this._placeholder.set(n.textContent)}}updateEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value=this.getOptionLabel(this.selectedOption)||this.modelValue()||"")}clearEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value="")}getOptionIndex(e,i){return this.virtualScrollerDisabled?e:i&&i.getItemOptions(e).index}getOptionLabel(e){return this.optionLabel!==void 0&&this.optionLabel!==null?be(e,this.optionLabel):e&&e.label!==void 0?e.label:e}getOptionValue(e){return this.optionValue&&this.optionValue!==null?be(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}isOptionDisabled(e){return this.getOptionValue(this.modelValue())===this.getOptionValue(e)||this.getOptionLabel(this.modelValue()===this.getOptionLabel(e))&&e.disabled===!1?!1:this.optionDisabled?be(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}getOptionGroupLabel(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null?be(e,this.optionGroupLabel):e&&e.label!==void 0?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren!==void 0&&this.optionGroupChildren!==null?be(e,this.optionGroupChildren):e.items}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(i=>this.isOptionGroup(i)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}resetFilter(){this._filterValue.set(null),this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value="")}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onContainerClick(e){this.disabled||this.readonly||this.loading||(this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),!(e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]'))&&((!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.onClick.emit(e),this.clicked.set(!0),this.cd.detectChanges()))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}onEditableInput(e){let i=e.target.value;this.searchValue="",!this.searchOptions(e,i)&&this.focusedOptionIndex.set(-1),this.onModelChange(i),this.updateModel(i,e),setTimeout(()=>{this.onChange.emit({originalEvent:e,value:i})},1),!this.overlayVisible&&K(i)&&this.show()}show(e){this.overlayVisible=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex();this.focusedOptionIndex.set(i),e&&ce(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"){if(this.itemsWrapper=he(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-dropdown-items-wrapper"),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller?.scrollToIndex(i)}else{let i=he(this.itemsWrapper,".p-dropdown-item.p-highlight");i&&i.scrollIntoView({block:"nearest",inline:"nearest"})}this.filterViewChild&&this.filterViewChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&!this.editable&&this.filterViewChild.nativeElement.focus()),this.onShow.emit(e)}e.toState==="void"&&(this.itemsWrapper=null,this.onModelTouched(),this.onHide.emit(e))}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.clicked.set(!1),this.searchValue="",this.overlayOptions?.mode==="modal"&&fi(),this.filter&&this.resetFilterOnHide&&this.resetFilter(),e&&(this.focusInputViewChild&&ce(this.focusInputViewChild?.nativeElement),this.editable&&this.editableInputViewChild&&ce(this.editableInputViewChild?.nativeElement)),this.cd.markForCheck()}onInputFocus(e){if(this.disabled)return;this.focused=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onKeyDown(e,i){if(!(this.disabled||this.readonly||this.loading)){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Delete":this.onDeleteKey(e);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,i);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!e.metaKey&&Ci(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked.set(!1)}}onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e,!0);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break;default:break}}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onArrowDownKey(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{let i=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i)}e.preventDefault(),e.stopPropagation()}changeFocusedOptionIndex(e,i){if(this.focusedOptionIndex()!==i&&(this.focusedOptionIndex.set(i),this.scrollInView(),this.selectOnFocus)){let n=this.visibleOptions()[i];this.onOptionSelect(e,n,!1)}}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let n=he(this.itemsViewChild.nativeElement,`li[id="${i}"]`);n?n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}hasSelectedOption(){return this.modelValue()!==void 0}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}equalityKey(){return this.optionValue?null:this.dataKey}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let i=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(n=>this.isValidOption(n)):-1;return i>-1?i+e+1:e}findPrevOptionIndex(e){let i=e>0?It(this.visibleOptions().slice(0,e),n=>this.isValidOption(n)):-1;return i>-1?i:e}findLastOptionIndex(){return It(this.visibleOptions(),e=>this.isValidOption(e))}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}isValidOption(e){return e!=null&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionGroup(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null&&e.optionGroup!==void 0&&e.optionGroup!==null&&e.group}onArrowUpKey(e,i=!1){if(e.altKey&&!i){if(this.focusedOptionIndex()!==-1){let n=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,n)}this.overlayVisible&&this.hide()}else{let n=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show()}e.preventDefault(),e.stopPropagation()}onArrowLeftKey(e,i=!1){i&&this.focusedOptionIndex.set(-1)}onDeleteKey(e){this.showClear&&(this.clear(e),e.preventDefault())}onHomeKey(e,i=!1){if(i){let n=e.currentTarget;e.shiftKey?n.setSelectionRange(0,n.value.length):(n.setSelectionRange(0,0),this.focusedOptionIndex.set(-1))}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onEndKey(e,i=!1){if(i){let n=e.currentTarget;if(e.shiftKey)n.setSelectionRange(0,n.value.length);else{let s=n.value.length;n.setSelectionRange(s,s),this.focusedOptionIndex.set(-1)}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onSpaceKey(e,i=!1){!this.editable&&!i&&this.onEnterKey(e)}onEnterKey(e,i=!1){if(!this.overlayVisible)this.focusedOptionIndex.set(-1),this.onArrowDownKey(e);else{if(this.focusedOptionIndex()!==-1){let n=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,n)}!i&&this.hide()}e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e,i=!1){if(!i)if(this.overlayVisible&&this.hasFocusableElements())ce(e.shiftKey?this.lastHiddenFocusableElementOnOverlay.nativeElement:this.firstHiddenFocusableElementOnOverlay.nativeElement),e.preventDefault();else{if(this.focusedOptionIndex()!==-1&&this.overlayVisible){let n=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,n)}this.overlayVisible&&this.hide(this.filter)}e.stopPropagation()}onFirstHiddenFocus(e){let i=e.relatedTarget===this.focusInputViewChild?.nativeElement?_i(this.overlayViewChild.el?.nativeElement,":not(.p-hidden-focusable)"):this.focusInputViewChild?.nativeElement;ce(i)}onLastHiddenFocus(e){let i=e.relatedTarget===this.focusInputViewChild?.nativeElement?bi(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;ce(i)}hasFocusableElements(){return xt(this.overlayViewChild.overlayViewChild.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}onBackspaceKey(e,i=!1){i&&!this.overlayVisible&&this.show()}searchFields(){return this.filterBy?.split(",")||this.filterFields||[this.optionLabel]}searchOptions(e,i){this.searchValue=(this.searchValue||"")+i;let n=-1,s=!1;return this.focusedOptionIndex()!==-1?(n=this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(r=>this.isOptionMatched(r)),n=n===-1?this.visibleOptions().slice(0,this.focusedOptionIndex()).findIndex(r=>this.isOptionMatched(r)):n+this.focusedOptionIndex()):n=this.visibleOptions().findIndex(r=>this.isOptionMatched(r)),n!==-1&&(s=!0),n===-1&&this.focusedOptionIndex()===-1&&(n=this.findFirstFocusedOptionIndex()),n!==-1&&this.changeFocusedOptionIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),s}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))}onFilterInputChange(e){let i=e.target.value;this._filterValue.set(i),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild.alignOverlay()}),this.cd.markForCheck()}applyFocus(){this.editable?he(this.el.nativeElement,".p-dropdown-label.p-inputtext").focus():ce(this.focusInputViewChild?.nativeElement)}focus(){this.applyFocus()}clear(e){this.updateModel(null,e),this.clearEditableLabel(),this.onModelTouched(),this.onChange.emit({originalEvent:e,value:this.value}),this.onClear.emit(e),this.resetFilter()}static \u0275fac=function(i){return new(i||t)(pe(Le),pe(Ii))};static \u0275cmp=B({type:t,selectors:[["p-dropdown"]],contentQueries:function(i,n,s){if(i&1&&U(s,Qe,4),i&2){let r;S(r=C())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&(ee(zr,5),ee(Hr,5),ee(Br,5),ee(Wr,5),ee(Kr,5),ee(Ur,5),ee(jr,5),ee(Gr,5),ee(qr,5)),i&2){let s;S(s=C())&&(n.containerViewChild=s.first),S(s=C())&&(n.filterViewChild=s.first),S(s=C())&&(n.focusInputViewChild=s.first),S(s=C())&&(n.editableInputViewChild=s.first),S(s=C())&&(n.itemsViewChild=s.first),S(s=C())&&(n.scroller=s.first),S(s=C())&&(n.overlayViewChild=s.first),S(s=C())&&(n.firstHiddenFocusableElementOnOverlay=s.first),S(s=C())&&(n.lastHiddenFocusableElementOnOverlay=s.first)}},hostVars:5,hostBindings:function(i,n){i&1&&N("click",function(r){return n.onContainerClick(r)}),i&2&&(I("id",n.id),Ke(n.hostStyle),j(n.hostClass))},inputs:{id:"id",scrollHeight:"scrollHeight",filter:[2,"filter","filter",v],name:"name",style:"style",panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",readonly:[2,"readonly","readonly",v],required:[2,"required","required",v],editable:[2,"editable","editable",v],appendTo:"appendTo",tabindex:[2,"tabindex","tabindex",ue],placeholder:"placeholder",loadingIcon:"loadingIcon",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",variant:"variant",inputId:"inputId",dataKey:"dataKey",filterBy:"filterBy",filterFields:"filterFields",autofocus:[2,"autofocus","autofocus",v],resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",v],checkmark:[2,"checkmark","checkmark",v],dropdownIcon:"dropdownIcon",loading:[2,"loading","loading",v],optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",autoDisplayFirst:[2,"autoDisplayFirst","autoDisplayFirst",v],group:[2,"group","group",v],showClear:[2,"showClear","showClear",v],emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",lazy:[2,"lazy","lazy",v],virtualScroll:[2,"virtualScroll","virtualScroll",v],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",ue],virtualScrollOptions:"virtualScrollOptions",overlayOptions:"overlayOptions",ariaFilterLabel:"ariaFilterLabel",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",filterMatchMode:"filterMatchMode",maxlength:[2,"maxlength","maxlength",ue],tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",focusOnHover:[2,"focusOnHover","focusOnHover",v],selectOnFocus:[2,"selectOnFocus","selectOnFocus",v],autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",v],autofocusFilter:[2,"autofocusFilter","autofocusFilter",v],fluid:[2,"fluid","fluid",v],disabled:"disabled",itemSize:"itemSize",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",filterValue:"filterValue",options:"options"},outputs:{onChange:"onChange",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onShow:"onShow",onHide:"onHide",onClear:"onClear",onLazyLoad:"onLazyLoad"},features:[Y([ta,ro]),_e,M],decls:11,vars:15,consts:[["elseBlock",""],["overlay",""],["content",""],["focusInput",""],["defaultPlaceholder",""],["editableInput",""],["firstHiddenFocusableEl",""],["buildInItems",""],["lastHiddenFocusableEl",""],["builtInFilterElement",""],["filter",""],["scroller",""],["loader",""],["items",""],["emptyFilter",""],["role","combobox",3,"ngClass","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus","focus","blur","keydown",4,"ngIf"],["type","text","aria-haspopup","listbox",3,"ngClass","disabled","pAutoFocus","input","keydown","focus","blur",4,"ngIf"],[4,"ngIf"],["role","button","aria-label","dropdown trigger","aria-haspopup","listbox",1,"p-select-dropdown"],[4,"ngIf","ngIfElse"],[3,"visibleChange","onAnimationStart","onHide","visible","options","target","appendTo","autoZIndex","baseZIndex","showTransitionOptions","hideTransitionOptions"],["role","combobox",3,"focus","blur","keydown","ngClass","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","text","aria-haspopup","listbox",3,"input","keydown","focus","blur","ngClass","disabled","pAutoFocus"],["class","p-select-clear-icon",3,"click",4,"ngIf"],[1,"p-select-clear-icon",3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],["aria-hidden","true",3,"ngClass",4,"ngIf"],["aria-hidden","true",3,"class",4,"ngIf"],["aria-hidden","true",3,"ngClass"],["aria-hidden","true"],["class","p-select-dropdown-icon",4,"ngIf"],["class","p-select-dropdown-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-select-dropdown-icon",3,"ngClass"],[3,"styleClass"],[1,"p-select-dropdown-icon"],[3,"ngClass","ngStyle"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus"],["class","p-select-header",3,"click",4,"ngIf"],[1,"p-select-list-container"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],[1,"p-select-header",3,"click"],["pInputText","","type","text","role","searchbox","autocomplete","off",1,"p-select-filter",3,"input","keydown","blur","value","variant"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox",1,"p-select-list",3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-select-empty-message","role","option",3,"ngStyle",4,"ngIf"],["role","option",1,"p-select-option-group",3,"ngStyle"],[3,"onClick","onMouseEnter","id","option","checkmark","selected","label","disabled","template","focused","ariaPosInset","ariaSetSize"],["role","option",1,"p-select-empty-message",3,"ngStyle"]],template:function(i,n){if(i&1){let s=Z();f(0,il,6,20,"span",15)(1,nl,2,8,"input",16)(2,al,3,2,"ng-container",17),b(3,"div",18),f(4,fl,3,2,"ng-container",19)(5,Sl,2,2,"ng-template",null,0,se),y(),b(7,"p-overlay",20,1),ui("visibleChange",function(l){return w(s),di(n.overlayVisible,l)||(n.overlayVisible=l),x(l)}),N("onAnimationStart",function(l){return w(s),x(n.onOverlayAnimationStart(l))})("onHide",function(){return w(s),x(n.hide())}),f(9,ea,13,17,"ng-template",null,2,se),y()}if(i&2){let s,r=me(6);a("ngIf",!n.editable),p(),a("ngIf",n.editable),p(),a("ngIf",n.isVisibleClearIcon),p(),I("aria-expanded",(s=n.overlayVisible)!==null&&s!==void 0?s:!1)("data-pc-section","trigger"),p(),a("ngIf",n.loading)("ngIfElse",r),p(3),pi("visible",n.overlayVisible),a("options",n.overlayOptions)("target","@parent")("appendTo",n.appendTo)("autoZIndex",n.autoZIndex)("baseZIndex",n.baseZIndex)("showTransitionOptions",n.showTransitionOptions)("hideTransitionOptions",n.hideTransitionOptions)}},dependencies:()=>[Fe,Ct,ke,Ve,De,Ut,Fi,Dt,Ft,Bt,zt,Ht,Li,Wt,Kt,ia],encapsulation:2,changeDetection:0})}return t})(),Xf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[le,Qi,J,so,Dt,Nn,Bt,zt,Ht,Pt,Nt,qn,Wt,Kt,Qi,J]})}return t})();var oa=({dt:t})=>`
.p-select {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${t("select.background")};
    border: 1px solid ${t("select.border.color")};
    transition: background ${t("select.transition.duration")}, color ${t("select.transition.duration")}, border-color ${t("select.transition.duration")},
        outline-color ${t("select.transition.duration")}, box-shadow ${t("select.transition.duration")};
    border-radius: ${t("select.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("select.shadow")};
}

.p-select.ng-invalid.ng-dirty {
    border-color: ${t("select.invalid.border.color")};
}

.p-select:not(.p-disabled):hover {
    border-color: ${t("select.hover.border.color")};
}

.p-select:not(.p-disabled).p-focus {
    border-color: ${t("select.focus.border.color")};
    box-shadow: ${t("select.focus.ring.shadow")};
    outline: ${t("select.focus.ring.width")} ${t("select.focus.ring.style")} ${t("select.focus.ring.color")};
    outline-offset: ${t("select.focus.ring.offset")};
}

.p-select.p-variant-filled {
    background: ${t("select.filled.background")};
}

.p-select.p-variant-filled:not(.p-disabled):hover {
    background: ${t("select.filled.hover.background")};
}

.p-select.p-variant-filled.p-focus {
    background: ${t("select.filled.focus.background")};
}

.p-select.p-disabled {
    opacity: 1;
    background: ${t("select.disabled.background")};
}

.p-select-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: ${t("select.clear.icon.color")};
    inset-inline-end: ${t("select.dropdown.width")};
}

.p-select-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${t("select.dropdown.color")};
    width: ${t("select.dropdown.width")};
    border-start-end-radius: ${t("select.border.radius")};
    border-end-end-radius: ${t("select.border.radius")};
}

.p-select-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: ${t("select.padding.y")} ${t("select.padding.x")};
    text-overflow: ellipsis;
    cursor: pointer;
    color: ${t("select.color")};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-select-label.p-placeholder {
    color: ${t("select.placeholder.color")};
}

.p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
    color: ${t("select.invalid.placeholder.color")};
}

.p-select:has(.p-select-clear-icon) .p-select-label {
    padding-inline-end: calc(1rem + ${t("select.padding.x")});
}

.p-select.p-disabled .p-select-label {
    color: ${t("select.disabled.color")};
}

.p-select-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-select-label {
    cursor: default;
}

.p-select .p-select-overlay {
    min-width: 100%;
}

.p-select-overlay {
    background: ${t("select.overlay.background")};
    color: ${t("select.overlay.color")};
    border: 1px solid ${t("select.overlay.border.color")};
    border-radius: ${t("select.overlay.border.radius")};
    box-shadow: ${t("select.overlay.shadow")};
}

.p-select-header {
    padding: ${t("select.list.header.padding")};
}

.p-select-filter {
    width: 100%;
}

.p-select-list-container {
    overflow: auto;
}

.p-select-option-group {
    cursor: auto;
    margin: 0;
    padding: ${t("select.option.group.padding")};
    background: ${t("select.option.group.background")};
    color: ${t("select.option.group.color")};
    font-weight: ${t("select.option.group.font.weight")};
}

.p-select-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${t("select.list.padding")};
    gap: ${t("select.list.gap")};
    display: flex;
    flex-direction: column;
}

.p-select-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${t("select.option.padding")};
    border: 0 none;
    color: ${t("select.option.color")};
    background: transparent;
    transition: background ${t("select.transition.duration")}, color ${t("select.transition.duration")}, border-color ${t("select.transition.duration")},
            box-shadow ${t("select.transition.duration")}, outline-color ${t("select.transition.duration")};
    border-radius: ${t("select.option.border.radius")};
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
    background: ${t("select.option.focus.background")};
    color: ${t("select.option.focus.color")};
}

.p-select-option.p-select-option-selected {
    background: ${t("select.option.selected.background")};
    color: ${t("select.option.selected.color")};
}

.p-select-option.p-select-option-selected.p-focus {
    background: ${t("select.option.selected.focus.background")};
    color: ${t("select.option.selected.focus.color")};
}

.p-select-option-check-icon {
    position: relative;
    margin-inline-start: ${t("select.checkmark.gutter.start")};
    margin-inline-end: ${t("select.checkmark.gutter.end")};
    color: ${t("select.checkmark.color")};
}

.p-select-empty-message {
    padding: ${t("select.empty.message.padding")};
}

.p-select-fluid {
    display: flex;
}

.p-select-sm .p-select-label {
    font-size: ${t("select.sm.font.size")};
    padding-block: ${t("select.sm.padding.y")};
    padding-inline: ${t("select.sm.padding.x")};
}

.p-select-sm .p-select-dropdown .p-icon {
    font-size: ${t("select.sm.font.size")};
    width: ${t("select.sm.font.size")};
    height: ${t("select.sm.font.size")};
}

.p-select-lg .p-select-label {
    font-size: ${t("select.lg.font.size")};
    padding-block: ${t("select.lg.padding.y")};
    padding-inline: ${t("select.lg.padding.x")};
}

.p-select-lg .p-select-dropdown .p-icon {
    font-size: ${t("select.lg.font.size")};
    width: ${t("select.lg.font.size")};
    height: ${t("select.lg.font.size")};
}
`,sa={root:({instance:t})=>["p-select p-component p-inputwrapper",{"p-disabled":t.disabled,"p-variant-filled":t.variant?t.variant==="filled":t.config.inputStyle()==="filled","p-focus":t.focused,"p-inputwrapper-filled":t.modelValue()!==void 0&&t.modelValue()!==null,"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-select-open":t.overlayVisible,"p-select-fluid":t.fluid,"p-select-sm p-inputfield-sm":t.size==="small","p-select-lg p-inputfield-lg":t.size==="large"}],label:({instance:t,props:o})=>["p-select-label",{"p-placeholder":!o.editable&&t.label===o.placeholder,"p-select-label-empty":!o.editable&&!t.$slots.value&&(t.label==="p-emptylabel"||t.label.length===0)}],clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingicon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:({instance:t,props:o,state:e,option:i,focusedOption:n})=>["p-select-option",{"p-select-option-selected":t.isSelected(i)&&o.highlightOnSelect,"p-focus":e.focusedOptionIndex===n,"p-disabled":t.isOptionDisabled(i)}],optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},po=(()=>{class t extends G{name="select";theme=oa;classes=sa;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var Gt=t=>({height:t}),ra=(t,o,e)=>({"p-select-option":!0,"p-select-option-selected":t,"p-disabled":o,"p-focus":e}),Ji=t=>({$implicit:t});function la(t,o){t&1&&A(0,"CheckIcon",5)}function aa(t,o){t&1&&A(0,"BlankIcon",6)}function ca(t,o){if(t&1&&(R(0),f(1,la,1,0,"CheckIcon",3)(2,aa,1,0,"BlankIcon",4),P()),t&2){let e=c();p(),a("ngIf",e.selected),p(),a("ngIf",!e.selected)}}function pa(t,o){if(t&1&&(b(0,"span"),de(1),y()),t&2){let e,i=c();p(),Ce((e=i.label)!==null&&e!==void 0?e:"empty")}}function da(t,o){t&1&&z(0)}var ua=["item"],ha=["group"],fa=["loader"],ma=["selectedItem"],ga=["header"],uo=["filter"],_a=["footer"],ba=["emptyfilter"],ya=["empty"],va=["dropdownicon"],Sa=["loadingicon"],Ca=["clearicon"],wa=["filtericon"],xa=["onicon"],Ia=["officon"],Ta=["cancelicon"],Oa=["focusInput"],Ea=["editableInput"],La=["items"],Fa=["scroller"],ka=["overlay"],Da=["firstHiddenFocusableEl"],Va=["lastHiddenFocusableEl"],$a=()=>({class:"p-select-clear-icon"}),Ma=()=>({class:"p-select-dropdown-icon"}),ho=t=>({options:t}),fo=(t,o)=>({$implicit:t,options:o}),Aa=()=>({});function Ra(t,o){if(t&1&&(R(0),de(1),P()),t&2){let e=c(2);p(),Ce(e.label()==="p-emptylabel"?"\xA0":e.label())}}function Pa(t,o){if(t&1&&z(0,24),t&2){let e=c(2);a("ngTemplateOutlet",e.selectedItemTemplate||e._selectedItemTemplate)("ngTemplateOutletContext",W(2,Ji,e.selectedOption))}}function Na(t,o){if(t&1&&(b(0,"span"),de(1),y()),t&2){let e=c(3);p(),Ce(e.label()==="p-emptylabel"?"\xA0":e.label())}}function za(t,o){if(t&1&&f(0,Na,2,1,"span",18),t&2){let e=c(2);a("ngIf",!e.selectedOption)}}function Ha(t,o){if(t&1){let e=Z();b(0,"span",22,3),N("focus",function(n){w(e);let s=c();return x(s.onInputFocus(n))})("blur",function(n){w(e);let s=c();return x(s.onInputBlur(n))})("keydown",function(n){w(e);let s=c();return x(s.onKeyDown(n))}),f(2,Ra,2,1,"ng-container",20)(3,Pa,1,4,"ng-container",23)(4,za,1,1,"ng-template",null,4,se),y()}if(t&2){let e,i=me(5),n=c();a("ngClass",n.inputClass)("pTooltip",n.tooltip)("tooltipPosition",n.tooltipPosition)("positionStyle",n.tooltipPositionStyle)("tooltipStyleClass",n.tooltipStyleClass)("pAutoFocus",n.autofocus),I("aria-disabled",n.disabled)("id",n.inputId)("aria-label",n.ariaLabel||(n.label()==="p-emptylabel"?void 0:n.label()))("aria-labelledby",n.ariaLabelledBy)("aria-haspopup","listbox")("aria-expanded",(e=n.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",n.overlayVisible?n.id+"_list":null)("tabindex",n.disabled?-1:n.tabindex)("aria-activedescendant",n.focused?n.focusedOptionId:void 0)("aria-required",n.required)("required",n.required),p(2),a("ngIf",!n.selectedItemTemplate&&!n._selectedItemTemplate)("ngIfElse",i),p(),a("ngIf",(n.selectedItemTemplate||n._selectedItemTemplate)&&n.selectedOption)}}function Ba(t,o){if(t&1){let e=Z();b(0,"input",25,5),N("input",function(n){w(e);let s=c();return x(s.onEditableInput(n))})("keydown",function(n){w(e);let s=c();return x(s.onKeyDown(n))})("focus",function(n){w(e);let s=c();return x(s.onInputFocus(n))})("blur",function(n){w(e);let s=c();return x(s.onInputBlur(n))}),y()}if(t&2){let e=c();a("ngClass",e.inputClass)("disabled",e.disabled)("pAutoFocus",e.autofocus),I("id",e.inputId)("maxlength",e.maxlength)("placeholder",e.modelValue()===void 0||e.modelValue()===null?e.placeholder():void 0)("aria-label",e.ariaLabel||(e.label()==="p-emptylabel"?void 0:e.label()))("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Wa(t,o){if(t&1){let e=Z();b(0,"TimesIcon",27),N("click",function(n){w(e);let s=c(2);return x(s.clear(n))}),y()}t&2&&I("data-pc-section","clearicon")}function Ka(t,o){}function Ua(t,o){t&1&&f(0,Ka,0,0,"ng-template")}function ja(t,o){if(t&1){let e=Z();b(0,"span",27),N("click",function(n){w(e);let s=c(2);return x(s.clear(n))}),f(1,Ua,1,0,null,28),y()}if(t&2){let e=c(2);I("data-pc-section","clearicon"),p(),a("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)("ngTemplateOutletContext",Ue(3,$a))}}function Ga(t,o){if(t&1&&(R(0),f(1,Wa,1,1,"TimesIcon",26)(2,ja,2,4,"span",26),P()),t&2){let e=c();p(),a("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),p(),a("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function qa(t,o){t&1&&z(0)}function Qa(t,o){if(t&1&&(R(0),f(1,qa,1,0,"ng-container",29),P()),t&2){let e=c(2);p(),a("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function Za(t,o){if(t&1&&A(0,"span",32),t&2){let e=c(3);a("ngClass","p-select-loading-icon pi-spin "+e.loadingIcon)}}function Ya(t,o){t&1&&A(0,"span",33),t&2&&j("p-select-loading-icon pi pi-spinner pi-spin")}function Ja(t,o){if(t&1&&(R(0),f(1,Za,1,1,"span",30)(2,Ya,1,2,"span",31),P()),t&2){let e=c(2);p(),a("ngIf",e.loadingIcon),p(),a("ngIf",!e.loadingIcon)}}function Xa(t,o){if(t&1&&(R(0),f(1,Qa,2,1,"ng-container",18)(2,Ja,3,2,"ng-container",18),P()),t&2){let e=c();p(),a("ngIf",e.loadingIconTemplate||e._loadingIconTemplate),p(),a("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate)}}function ec(t,o){if(t&1&&A(0,"span",37),t&2){let e=c(3);a("ngClass",e.dropdownIcon)}}function tc(t,o){t&1&&A(0,"ChevronDownIcon",38),t&2&&a("styleClass","p-select-dropdown-icon")}function ic(t,o){if(t&1&&(R(0),f(1,ec,1,1,"span",35)(2,tc,1,1,"ChevronDownIcon",36),P()),t&2){let e=c(2);p(),a("ngIf",e.dropdownIcon),p(),a("ngIf",!e.dropdownIcon)}}function nc(t,o){}function oc(t,o){t&1&&f(0,nc,0,0,"ng-template")}function sc(t,o){if(t&1&&(b(0,"span",39),f(1,oc,1,0,null,28),y()),t&2){let e=c(2);p(),a("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)("ngTemplateOutletContext",Ue(2,Ma))}}function rc(t,o){if(t&1&&f(0,ic,3,2,"ng-container",18)(1,sc,2,3,"span",34),t&2){let e=c();a("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),p(),a("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function lc(t,o){t&1&&z(0)}function ac(t,o){t&1&&z(0)}function cc(t,o){if(t&1&&(R(0),f(1,ac,1,0,"ng-container",28),P()),t&2){let e=c(3);p(),a("ngTemplateOutlet",e.filterTemplate||e._filterTemplate)("ngTemplateOutletContext",W(2,ho,e.filterOptions))}}function pc(t,o){t&1&&A(0,"SearchIcon")}function dc(t,o){}function uc(t,o){t&1&&f(0,dc,0,0,"ng-template")}function hc(t,o){if(t&1&&(b(0,"span"),f(1,uc,1,0,null,29),y()),t&2){let e=c(4);p(),a("ngTemplateOutlet",e.filterIconTemplate||e._filterIconTemplate)}}function fc(t,o){if(t&1){let e=Z();b(0,"p-iconfield")(1,"input",46,10),N("input",function(n){w(e);let s=c(3);return x(s.onFilterInputChange(n))})("keydown",function(n){w(e);let s=c(3);return x(s.onFilterKeyDown(n))})("blur",function(n){w(e);let s=c(3);return x(s.onFilterBlur(n))}),y(),b(3,"p-inputicon"),f(4,pc,1,0,"SearchIcon",18)(5,hc,2,1,"span",18),y()()}if(t&2){let e=c(3);p(),a("pSize",e.size)("value",e._filterValue()||"")("variant",e.variant),I("placeholder",e.filterPlaceholder)("aria-owns",e.id+"_list")("aria-label",e.ariaFilterLabel)("aria-activedescendant",e.focusedOptionId),p(3),a("ngIf",!e.filterIconTemplate&&!e._filterIconTemplate),p(),a("ngIf",e.filterIconTemplate||e._filterIconTemplate)}}function mc(t,o){if(t&1){let e=Z();b(0,"div",45),N("click",function(n){return w(e),x(n.stopPropagation())}),f(1,cc,2,4,"ng-container",20)(2,fc,6,9,"ng-template",null,9,se),y()}if(t&2){let e=me(3),i=c(2);p(),a("ngIf",i.filterTemplate||i._filterTemplate)("ngIfElse",e)}}function gc(t,o){t&1&&z(0)}function _c(t,o){if(t&1&&f(0,gc,1,0,"ng-container",28),t&2){let e=o.$implicit,i=o.options;c(2);let n=me(9);a("ngTemplateOutlet",n)("ngTemplateOutletContext",Pe(2,fo,e,i))}}function bc(t,o){t&1&&z(0)}function yc(t,o){if(t&1&&f(0,bc,1,0,"ng-container",28),t&2){let e=o.options,i=c(4);a("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",W(2,ho,e))}}function vc(t,o){t&1&&(R(0),f(1,yc,1,4,"ng-template",null,12,se),P())}function Sc(t,o){if(t&1){let e=Z();b(0,"p-scroller",47,11),N("onLazyLoad",function(n){w(e);let s=c(2);return x(s.onLazyLoad.emit(n))}),f(2,_c,1,5,"ng-template",null,2,se)(4,vc,3,0,"ng-container",18),y()}if(t&2){let e=c(2);Ke(W(8,Gt,e.scrollHeight)),a("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize||e._itemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),p(4),a("ngIf",e.loaderTemplate||e._loaderTemplate)}}function Cc(t,o){t&1&&z(0)}function wc(t,o){if(t&1&&(R(0),f(1,Cc,1,0,"ng-container",28),P()),t&2){c();let e=me(9),i=c();p(),a("ngTemplateOutlet",e)("ngTemplateOutletContext",Pe(3,fo,i.visibleOptions(),Ue(2,Aa)))}}function xc(t,o){if(t&1&&(b(0,"span"),de(1),y()),t&2){let e=c(2).$implicit,i=c(3);p(),Ce(i.getOptionGroupLabel(e.optionGroup))}}function Ic(t,o){t&1&&z(0)}function Tc(t,o){if(t&1&&(R(0),b(1,"li",51),f(2,xc,2,1,"span",18)(3,Ic,1,0,"ng-container",28),y(),P()),t&2){let e=c(),i=e.$implicit,n=e.index,s=c().options,r=c(2);p(),a("ngStyle",W(5,Gt,s.itemSize+"px")),I("id",r.id+"_"+r.getOptionIndex(n,s)),p(),a("ngIf",!r.groupTemplate&&!r._groupTemplate),p(),a("ngTemplateOutlet",r.groupTemplate||r._groupTemplate)("ngTemplateOutletContext",W(7,Ji,i.optionGroup))}}function Oc(t,o){if(t&1){let e=Z();R(0),b(1,"p-selectItem",52),N("onClick",function(n){w(e);let s=c().$implicit,r=c(3);return x(r.onOptionSelect(n,s))})("onMouseEnter",function(n){w(e);let s=c().index,r=c().options,l=c(2);return x(l.onOptionMouseEnter(n,l.getOptionIndex(s,r)))}),y(),P()}if(t&2){let e=c(),i=e.$implicit,n=e.index,s=c().options,r=c(2);p(),a("id",r.id+"_"+r.getOptionIndex(n,s))("option",i)("checkmark",r.checkmark)("selected",r.isSelected(i))("label",r.getOptionLabel(i))("disabled",r.isOptionDisabled(i))("template",r.itemTemplate||r._itemTemplate)("focused",r.focusedOptionIndex()===r.getOptionIndex(n,s))("ariaPosInset",r.getAriaPosInset(r.getOptionIndex(n,s)))("ariaSetSize",r.ariaSetSize)}}function Ec(t,o){if(t&1&&f(0,Tc,4,9,"ng-container",18)(1,Oc,2,10,"ng-container",18),t&2){let e=o.$implicit,i=c(3);a("ngIf",i.isOptionGroup(e)),p(),a("ngIf",!i.isOptionGroup(e))}}function Lc(t,o){if(t&1&&de(0),t&2){let e=c(4);St(" ",e.emptyFilterMessageLabel," ")}}function Fc(t,o){t&1&&z(0,null,14)}function kc(t,o){if(t&1&&f(0,Fc,2,0,"ng-container",29),t&2){let e=c(4);a("ngTemplateOutlet",e.emptyFilterTemplate||e._emptyFilterTemplate||e.emptyTemplate||e._emptyTemplate)}}function Dc(t,o){if(t&1&&(b(0,"li",53),f(1,Lc,1,1)(2,kc,1,1,"ng-container"),y()),t&2){let e=c().options,i=c(2);a("ngStyle",W(2,Gt,e.itemSize+"px")),p(),vt(!i.emptyFilterTemplate&&!i._emptyFilterTemplate&&!i.emptyTemplate?1:2)}}function Vc(t,o){if(t&1&&de(0),t&2){let e=c(4);St(" ",e.emptyMessageLabel," ")}}function $c(t,o){t&1&&z(0,null,15)}function Mc(t,o){if(t&1&&f(0,$c,2,0,"ng-container",29),t&2){let e=c(4);a("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function Ac(t,o){if(t&1&&(b(0,"li",53),f(1,Vc,1,1)(2,Mc,1,1,"ng-container"),y()),t&2){let e=c().options,i=c(2);a("ngStyle",W(2,Gt,e.itemSize+"px")),p(),vt(!i.emptyTemplate&&!i._emptyTemplate?1:2)}}function Rc(t,o){if(t&1&&(b(0,"ul",48,13),f(2,Ec,2,2,"ng-template",49)(3,Dc,3,4,"li",50)(4,Ac,3,4,"li",50),y()),t&2){let e=o.$implicit,i=o.options,n=c(2);Ke(i.contentStyle),a("ngClass",i.contentStyleClass),I("id",n.id+"_list")("aria-label",n.listLabel),p(2),a("ngForOf",e),p(),a("ngIf",n.filterValue&&n.isEmpty()),p(),a("ngIf",!n.filterValue&&n.isEmpty())}}function Pc(t,o){t&1&&z(0)}function Nc(t,o){if(t&1){let e=Z();b(0,"div",40)(1,"span",41,6),N("focus",function(n){w(e);let s=c();return x(s.onFirstHiddenFocus(n))}),y(),f(3,lc,1,0,"ng-container",29)(4,mc,4,2,"div",42),b(5,"div",43),f(6,Sc,5,10,"p-scroller",44)(7,wc,2,6,"ng-container",18)(8,Rc,5,8,"ng-template",null,7,se),y(),f(10,Pc,1,0,"ng-container",29),b(11,"span",41,8),N("focus",function(n){w(e);let s=c();return x(s.onLastHiddenFocus(n))}),y()()}if(t&2){let e=c();j(e.panelStyleClass),a("ngClass","p-select-overlay p-component")("ngStyle",e.panelStyle),p(),I("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),p(2),a("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),p(),a("ngIf",e.filter),p(),yt("max-height",e.virtualScroll?"auto":e.scrollHeight||"auto"),p(),a("ngIf",e.virtualScroll),p(),a("ngIf",!e.virtualScroll),p(3),a("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),p(),I("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var zc={provide:hi,useExisting:li(()=>mo),multi:!0},Hc=(()=>{class t extends Q{id;option;selected;focused;label;disabled;visible;itemSize;ariaPosInset;ariaSetSize;template;checkmark;onClick=new $;onMouseEnter=new $;onOptionClick(e){this.onClick.emit(e)}onOptionMouseEnter(e){this.onMouseEnter.emit(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=B({type:t,selectors:[["p-selectItem"]],inputs:{id:"id",option:"option",selected:[2,"selected","selected",v],focused:[2,"focused","focused",v],label:"label",disabled:[2,"disabled","disabled",v],visible:[2,"visible","visible",v],itemSize:[2,"itemSize","itemSize",ue],ariaPosInset:"ariaPosInset",ariaSetSize:"ariaSetSize",template:"template",checkmark:[2,"checkmark","checkmark",v]},outputs:{onClick:"onClick",onMouseEnter:"onMouseEnter"},standalone:!0,features:[_e,M,q],decls:4,vars:22,consts:[["role","option","pRipple","",3,"click","mouseenter","id","ngStyle","ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["styleClass","p-select-option-check-icon",4,"ngIf"],["styleClass","p-select-option-blank-icon",4,"ngIf"],["styleClass","p-select-option-check-icon"],["styleClass","p-select-option-blank-icon"]],template:function(i,n){i&1&&(b(0,"li",0),N("click",function(r){return n.onOptionClick(r)})("mouseenter",function(r){return n.onOptionMouseEnter(r)}),f(1,ca,3,2,"ng-container",1)(2,pa,2,1,"span",1)(3,da,1,0,"ng-container",2),y()),i&2&&(a("id",n.id)("ngStyle",W(14,Gt,n.itemSize+"px"))("ngClass",ot(16,ra,n.selected&&!n.checkmark,n.disabled,n.focused)),I("aria-label",n.label)("aria-setsize",n.ariaSetSize)("aria-posinset",n.ariaPosInset)("aria-selected",n.selected)("data-p-focused",n.focused)("data-p-highlight",n.selected)("data-p-disabled",n.disabled),p(),a("ngIf",n.checkmark),p(),a("ngIf",!n.template),p(),a("ngTemplateOutlet",n.template)("ngTemplateOutletContext",W(20,Ji,n.option)))},dependencies:[le,Fe,ke,Ve,De,J,kt,Nt,Pt],encapsulation:2})}return t})(),mo=(()=>{class t extends Q{zone;filterService;id;scrollHeight="200px";filter;name;style;panelStyle;styleClass;panelStyleClass;readonly;required;editable;appendTo;tabindex=0;set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}loadingIcon;filterPlaceholder;filterLocale;variant="outlined";inputId;dataKey;filterBy;filterFields;autofocus;resetFilterOnHide=!1;checkmark=!1;dropdownIcon;loading=!1;optionLabel;optionValue;optionDisabled;optionGroupLabel="label";optionGroupChildren="items";autoDisplayFirst=!0;group;showClear;emptyFilterMessage="";emptyMessage="";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;size;overlayOptions;ariaFilterLabel;ariaLabel;ariaLabelledBy;filterMatchMode="contains";maxlength;tooltip="";tooltipPosition="right";tooltipPositionStyle="absolute";tooltipStyleClass;focusOnHover=!0;selectOnFocus=!1;autoOptionFocus=!1;autofocusFilter=!0;fluid;get disabled(){return this._disabled}set disabled(e){e&&(this.focused=!1,this.overlayVisible&&this.hide()),this._disabled=e,this.cd.destroyed||this.cd.detectChanges()}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e,console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.")}_itemSize;get autoZIndex(){return this._autoZIndex}set autoZIndex(e){this._autoZIndex=e,console.log("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}_autoZIndex;get baseZIndex(){return this._baseZIndex}set baseZIndex(e){this._baseZIndex=e,console.log("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}_baseZIndex;get showTransitionOptions(){return this._showTransitionOptions}set showTransitionOptions(e){this._showTransitionOptions=e,console.log("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}_showTransitionOptions;get hideTransitionOptions(){return this._hideTransitionOptions}set hideTransitionOptions(e){this._hideTransitionOptions=e,console.log("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}_hideTransitionOptions;get filterValue(){return this._filterValue()}set filterValue(e){setTimeout(()=>{this._filterValue.set(e)})}get options(){return this._options()}set options(e){Rt(e,this._options())||this._options.set(e)}onChange=new $;onFilter=new $;onFocus=new $;onBlur=new $;onClick=new $;onShow=new $;onHide=new $;onClear=new $;onLazyLoad=new $;_componentStyle=L(po);filterViewChild;focusInputViewChild;editableInputViewChild;itemsViewChild;scroller;overlayViewChild;firstHiddenFocusableElementOnOverlay;lastHiddenFocusableElementOnOverlay;get hostClass(){return this._componentStyle.classes.root({instance:this}).map(i=>typeof i=="string"?i:Object.keys(i).filter(n=>i[n]).join(" ")).join(" ")+" "+this.styleClass}get hostStyle(){return this.style}_disabled;itemsWrapper;itemTemplate;groupTemplate;loaderTemplate;selectedItemTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;dropdownIconTemplate;loadingIconTemplate;clearIconTemplate;filterIconTemplate;onIconTemplate;offIconTemplate;cancelIconTemplate;templates;_itemTemplate;_selectedItemTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_groupTemplate;_loaderTemplate;_dropdownIconTemplate;_loadingIconTemplate;_clearIconTemplate;_filterIconTemplate;_cancelIconTemplate;_onIconTemplate;_offIconTemplate;filterOptions;_options=re(null);_placeholder=re(void 0);modelValue=re(null);value;onModelChange=()=>{};onModelTouched=()=>{};hover;focused;overlayVisible;optionsChanged;panel;dimensionsUpdated;hoveredItem;selectedOptionUpdated;_filterValue=re(null);searchValue;searchIndex;searchTimeout;previousSearchChar;currentSearchChar;preventModelTouched;focusedOptionIndex=re(-1);labelId;listId;clicked=re(!1);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(at.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(at.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.hasSelectedOption()&&this.showClear&&!this.disabled}get listLabel(){return this.config.getTranslation(at.ARIA).listLabel}get rootClass(){return this._componentStyle.classes.root({instance:this})}get inputClass(){let e=this.label();return{"p-select-label":!0,"p-placeholder":this.placeholder()&&e===this.placeholder(),"p-select-label-empty":!this.editable&&!this.selectedItemTemplate&&(e==null||e==="p-emptylabel"||e.length===0)}}get panelClass(){return{"p-dropdown-panel p-component":!0,"p-input-filled":this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-ripple-disabled":this.config.ripple()===!1}}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}visibleOptions=we(()=>{let e=this.getAllVisibleAndNonVisibleOptions();if(this._filterValue()){let n=!(this.filterBy||this.optionLabel)&&!this.filterFields&&!this.optionValue?this.options.filter(s=>s.label?s.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1:s.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1):this.filterService.filter(e,this.searchFields(),this._filterValue().trim(),this.filterMatchMode,this.filterLocale);if(this.group){let s=this.options||[],r=[];return s.forEach(l=>{let u=this.getOptionGroupChildren(l).filter(h=>n.includes(h));u.length>0&&r.push(dt(D({},l),{[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...u]}))}),this.flatOptions(r)}return n}return e});label=we(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),i=e.findIndex(n=>this.isOptionValueEqualsModelValue(n));return i!==-1?this.getOptionLabel(e[i]):this.placeholder()||"p-emptylabel"});filled=we(()=>typeof this.modelValue()=="string"?!!this.modelValue():this.label()!=="p-emptylabel"&&this.modelValue()!==void 0&&this.modelValue()!==null);selectedOption;editableInputValue=we(()=>this.getOptionLabel(this.selectedOption)||this.modelValue()||"");constructor(e,i){super(),this.zone=e,this.filterService=i,Je(()=>{let n=this.modelValue(),s=this.visibleOptions();if(s&&K(s)){let r=this.findSelectedOptionIndex();(r!==-1||n===void 0||typeof n=="string"&&n.length===0||this.isModelValueNotSet()||this.editable)&&(this.selectedOption=s[r])}fe(s)&&(n===void 0||this.isModelValueNotSet())&&K(this.selectedOption)&&(this.selectedOption=null),n!==void 0&&this.editable&&this.updateEditableLabel(),this.cd.markForCheck()})}isModelValueNotSet(){return this.modelValue()===null&&!this.isOptionValueEqualsModelValue(this.selectedOption)}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}ngOnInit(){super.ngOnInit(),this.id=this.id||Te("pn_id_"),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"filter":this._filterTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"emptyfilter":this._emptyFilterTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"onicon":this._onIconTemplate=e.template;break;case"officon":this._offIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){if(this.optionsChanged&&this.overlayVisible&&(this.optionsChanged=!1,this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1)})),this.selectedOptionUpdated&&this.itemsWrapper){let e=he(this.overlayViewChild?.overlayViewChild?.nativeElement,"li.p-highlight");e&&yi(this.itemsWrapper,e),this.selectedOptionUpdated=!1}}flatOptions(e){return(e||[]).reduce((i,n,s)=>{i.push({optionGroup:n,group:!0,index:s});let r=this.getOptionGroupChildren(n);return r&&r.forEach(l=>i.push(l)),i},[])}autoUpdateModel(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()&&(this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex()),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)),this.autoDisplayFirst&&(this.modelValue()===null||this.modelValue()===void 0)&&!this.placeholder()){let e=this.findFirstOptionIndex();this.onOptionSelect(null,this.visibleOptions()[e],!1,!0)}}onOptionSelect(e,i,n=!0,s=!1){if(!this.isSelected(i)){let r=this.getOptionValue(i);this.updateModel(r,e),this.focusedOptionIndex.set(this.findSelectedOptionIndex()),s===!1&&this.onChange.emit({originalEvent:e,value:r})}n&&this.hide(!0)}onOptionMouseEnter(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)}updateModel(e,i){this.value=e,this.onModelChange(e),this.modelValue.set(e),this.selectedOptionUpdated=!0}writeValue(e){this.filter&&this.resetFilter(),this.value=e,this.allowModelChange()&&this.onModelChange(e),this.modelValue.set(this.value),this.updateEditableLabel(),this.cd.markForCheck()}allowModelChange(){return this.autoDisplayFirst&&!this.placeholder()&&(this.modelValue()===void 0||this.modelValue()===null)&&!this.editable&&this.options&&this.options.length}isSelected(e){return this.isValidOption(e)&&this.isOptionValueEqualsModelValue(e)}isOptionValueEqualsModelValue(e){return mt(this.modelValue(),this.getOptionValue(e),this.equalityKey())}ngAfterViewInit(){this.editable&&this.updateEditableLabel(),this.updatePlaceHolderForFloatingLabel()}updatePlaceHolderForFloatingLabel(){let e=this.el.nativeElement.parentElement,i=e?.classList.contains("p-float-label");if(e&&i&&!this.selectedOption){let n=e.querySelector("label");n&&this._placeholder.set(n.textContent)}}updateEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value=this.getOptionLabel(this.selectedOption)||this.modelValue()||"")}clearEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value="")}getOptionIndex(e,i){return this.virtualScrollerDisabled?e:i&&i.getItemOptions(e).index}getOptionLabel(e){return this.optionLabel!==void 0&&this.optionLabel!==null?be(e,this.optionLabel):e&&e.label!==void 0?e.label:e}getOptionValue(e){return this.optionValue&&this.optionValue!==null?be(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}isOptionDisabled(e){return this.getOptionValue(this.modelValue())===this.getOptionValue(e)||this.getOptionLabel(this.modelValue()===this.getOptionLabel(e))&&e.disabled===!1?!1:this.optionDisabled?be(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}getOptionGroupLabel(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null?be(e,this.optionGroupLabel):e&&e.label!==void 0?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren!==void 0&&this.optionGroupChildren!==null?be(e,this.optionGroupChildren):e.items}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(i=>this.isOptionGroup(i)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}resetFilter(){this._filterValue.set(null),this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value="")}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onContainerClick(e){this.disabled||this.readonly||this.loading||(this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),!(e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]'))&&((!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.onClick.emit(e),this.clicked.set(!0),this.cd.detectChanges()))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}onEditableInput(e){let i=e.target.value;this.searchValue="",!this.searchOptions(e,i)&&this.focusedOptionIndex.set(-1),this.onModelChange(i),this.updateModel(i,e),setTimeout(()=>{this.onChange.emit({originalEvent:e,value:i})},1),!this.overlayVisible&&K(i)&&this.show()}show(e){this.overlayVisible=!0,this.focusedOptionIndex.set(this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex()),e&&ce(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"){if(this.itemsWrapper=he(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-dropdown-items-wrapper"),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller?.scrollToIndex(i)}else{let i=he(this.itemsWrapper,".p-dropdown-item.p-highlight");i&&i.scrollIntoView({block:"nearest",inline:"nearest"})}this.filterViewChild&&this.filterViewChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&!this.editable&&this.filterViewChild.nativeElement.focus()),this.onShow.emit(e)}e.toState==="void"&&(this.itemsWrapper=null,this.onModelTouched(),this.onHide.emit(e))}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.clicked.set(!1),this.searchValue="",this.overlayOptions?.mode==="modal"&&fi(),this.filter&&this.resetFilterOnHide&&this.resetFilter(),e&&(this.focusInputViewChild&&ce(this.focusInputViewChild?.nativeElement),this.editable&&this.editableInputViewChild&&ce(this.editableInputViewChild?.nativeElement)),this.cd.markForCheck()}onInputFocus(e){if(this.disabled)return;this.focused=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onKeyDown(e,i=!1){if(!(this.disabled||this.readonly||this.loading)){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Delete":this.onDeleteKey(e);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,i);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!e.metaKey&&Ci(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked.set(!1)}}onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e,!0);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break;default:break}}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onArrowDownKey(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{let i=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i)}e.preventDefault(),e.stopPropagation()}changeFocusedOptionIndex(e,i){if(this.focusedOptionIndex()!==i&&(this.focusedOptionIndex.set(i),this.scrollInView(),this.selectOnFocus)){let n=this.visibleOptions()[i];this.onOptionSelect(e,n,!1)}}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let n=he(this.itemsViewChild.nativeElement,`li[id="${i}"]`);n?n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}hasSelectedOption(){return this.modelValue()!==void 0}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}equalityKey(){return this.optionValue?null:this.dataKey}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let i=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(n=>this.isValidOption(n)):-1;return i>-1?i+e+1:e}findPrevOptionIndex(e){let i=e>0?It(this.visibleOptions().slice(0,e),n=>this.isValidOption(n)):-1;return i>-1?i:e}findLastOptionIndex(){return It(this.visibleOptions(),e=>this.isValidOption(e))}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}isValidOption(e){return e!=null&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionGroup(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null&&e.optionGroup!==void 0&&e.optionGroup!==null&&e.group}onArrowUpKey(e,i=!1){if(e.altKey&&!i){if(this.focusedOptionIndex()!==-1){let n=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,n)}this.overlayVisible&&this.hide()}else{let n=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show()}e.preventDefault(),e.stopPropagation()}onArrowLeftKey(e,i=!1){i&&this.focusedOptionIndex.set(-1)}onDeleteKey(e){this.showClear&&(this.clear(e),e.preventDefault())}onHomeKey(e,i=!1){if(i){let n=e.currentTarget;e.shiftKey?n.setSelectionRange(0,n.value.length):(n.setSelectionRange(0,0),this.focusedOptionIndex.set(-1))}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onEndKey(e,i=!1){if(i){let n=e.currentTarget;if(e.shiftKey)n.setSelectionRange(0,n.value.length);else{let s=n.value.length;n.setSelectionRange(s,s),this.focusedOptionIndex.set(-1)}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onSpaceKey(e,i=!1){!this.editable&&!i&&this.onEnterKey(e)}onEnterKey(e,i=!1){if(!this.overlayVisible)this.focusedOptionIndex.set(-1),this.onArrowDownKey(e);else{if(this.focusedOptionIndex()!==-1){let n=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,n)}!i&&this.hide()}e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e,i=!1){if(!i)if(this.overlayVisible&&this.hasFocusableElements())ce(e.shiftKey?this.lastHiddenFocusableElementOnOverlay.nativeElement:this.firstHiddenFocusableElementOnOverlay.nativeElement),e.preventDefault();else{if(this.focusedOptionIndex()!==-1&&this.overlayVisible){let n=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,n)}this.overlayVisible&&this.hide(this.filter)}e.stopPropagation()}onFirstHiddenFocus(e){let i=e.relatedTarget===this.focusInputViewChild?.nativeElement?_i(this.overlayViewChild.el?.nativeElement,":not(.p-hidden-focusable)"):this.focusInputViewChild?.nativeElement;ce(i)}onLastHiddenFocus(e){let i=e.relatedTarget===this.focusInputViewChild?.nativeElement?bi(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;ce(i)}hasFocusableElements(){return xt(this.overlayViewChild.overlayViewChild.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}onBackspaceKey(e,i=!1){i&&!this.overlayVisible&&this.show()}searchFields(){return this.filterBy?.split(",")||this.filterFields||[this.optionLabel]}searchOptions(e,i){this.searchValue=(this.searchValue||"")+i;let n=-1,s=!1;return this.focusedOptionIndex()!==-1?(n=this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(r=>this.isOptionMatched(r)),n=n===-1?this.visibleOptions().slice(0,this.focusedOptionIndex()).findIndex(r=>this.isOptionMatched(r)):n+this.focusedOptionIndex()):n=this.visibleOptions().findIndex(r=>this.isOptionMatched(r)),n!==-1&&(s=!0),n===-1&&this.focusedOptionIndex()===-1&&(n=this.findFirstFocusedOptionIndex()),n!==-1&&this.changeFocusedOptionIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),s}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))}onFilterInputChange(e){let i=e.target.value;this._filterValue.set(i),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild.alignOverlay()}),this.cd.markForCheck()}applyFocus(){this.editable?he(this.el.nativeElement,".p-dropdown-label.p-inputtext").focus():ce(this.focusInputViewChild?.nativeElement)}focus(){this.applyFocus()}clear(e){this.updateModel(null,e),this.clearEditableLabel(),this.onModelTouched(),this.onChange.emit({originalEvent:e,value:this.value}),this.onClear.emit(e),this.resetFilter()}static \u0275fac=function(i){return new(i||t)(pe(Le),pe(Ii))};static \u0275cmp=B({type:t,selectors:[["p-select"]],contentQueries:function(i,n,s){if(i&1&&(U(s,ua,4),U(s,ha,4),U(s,fa,4),U(s,ma,4),U(s,ga,4),U(s,uo,4),U(s,_a,4),U(s,ba,4),U(s,ya,4),U(s,va,4),U(s,Sa,4),U(s,Ca,4),U(s,wa,4),U(s,xa,4),U(s,Ia,4),U(s,Ta,4),U(s,Qe,4)),i&2){let r;S(r=C())&&(n.itemTemplate=r.first),S(r=C())&&(n.groupTemplate=r.first),S(r=C())&&(n.loaderTemplate=r.first),S(r=C())&&(n.selectedItemTemplate=r.first),S(r=C())&&(n.headerTemplate=r.first),S(r=C())&&(n.filterTemplate=r.first),S(r=C())&&(n.footerTemplate=r.first),S(r=C())&&(n.emptyFilterTemplate=r.first),S(r=C())&&(n.emptyTemplate=r.first),S(r=C())&&(n.dropdownIconTemplate=r.first),S(r=C())&&(n.loadingIconTemplate=r.first),S(r=C())&&(n.clearIconTemplate=r.first),S(r=C())&&(n.filterIconTemplate=r.first),S(r=C())&&(n.onIconTemplate=r.first),S(r=C())&&(n.offIconTemplate=r.first),S(r=C())&&(n.cancelIconTemplate=r.first),S(r=C())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&(ee(uo,5),ee(Oa,5),ee(Ea,5),ee(La,5),ee(Fa,5),ee(ka,5),ee(Da,5),ee(Va,5)),i&2){let s;S(s=C())&&(n.filterViewChild=s.first),S(s=C())&&(n.focusInputViewChild=s.first),S(s=C())&&(n.editableInputViewChild=s.first),S(s=C())&&(n.itemsViewChild=s.first),S(s=C())&&(n.scroller=s.first),S(s=C())&&(n.overlayViewChild=s.first),S(s=C())&&(n.firstHiddenFocusableElementOnOverlay=s.first),S(s=C())&&(n.lastHiddenFocusableElementOnOverlay=s.first)}},hostVars:5,hostBindings:function(i,n){i&1&&N("click",function(r){return n.onContainerClick(r)}),i&2&&(I("id",n.id),Ke(n.hostStyle),j(n.hostClass))},inputs:{id:"id",scrollHeight:"scrollHeight",filter:[2,"filter","filter",v],name:"name",style:"style",panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",readonly:[2,"readonly","readonly",v],required:[2,"required","required",v],editable:[2,"editable","editable",v],appendTo:"appendTo",tabindex:[2,"tabindex","tabindex",ue],placeholder:"placeholder",loadingIcon:"loadingIcon",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",variant:"variant",inputId:"inputId",dataKey:"dataKey",filterBy:"filterBy",filterFields:"filterFields",autofocus:[2,"autofocus","autofocus",v],resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",v],checkmark:[2,"checkmark","checkmark",v],dropdownIcon:"dropdownIcon",loading:[2,"loading","loading",v],optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",autoDisplayFirst:[2,"autoDisplayFirst","autoDisplayFirst",v],group:[2,"group","group",v],showClear:[2,"showClear","showClear",v],emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",lazy:[2,"lazy","lazy",v],virtualScroll:[2,"virtualScroll","virtualScroll",v],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",ue],virtualScrollOptions:"virtualScrollOptions",size:"size",overlayOptions:"overlayOptions",ariaFilterLabel:"ariaFilterLabel",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",filterMatchMode:"filterMatchMode",maxlength:[2,"maxlength","maxlength",ue],tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",focusOnHover:[2,"focusOnHover","focusOnHover",v],selectOnFocus:[2,"selectOnFocus","selectOnFocus",v],autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",v],autofocusFilter:[2,"autofocusFilter","autofocusFilter",v],fluid:[2,"fluid","fluid",v],disabled:"disabled",itemSize:"itemSize",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",filterValue:"filterValue",options:"options"},outputs:{onChange:"onChange",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onShow:"onShow",onHide:"onHide",onClear:"onClear",onLazyLoad:"onLazyLoad"},standalone:!0,features:[Y([zc,po]),_e,M,q],decls:11,vars:15,consts:[["elseBlock",""],["overlay",""],["content",""],["focusInput",""],["defaultPlaceholder",""],["editableInput",""],["firstHiddenFocusableEl",""],["buildInItems",""],["lastHiddenFocusableEl",""],["builtInFilterElement",""],["filter",""],["scroller",""],["loader",""],["items",""],["emptyFilter",""],["empty",""],["role","combobox",3,"ngClass","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus","focus","blur","keydown",4,"ngIf"],["type","text","aria-haspopup","listbox",3,"ngClass","disabled","pAutoFocus","input","keydown","focus","blur",4,"ngIf"],[4,"ngIf"],["role","button","aria-label","dropdown trigger","aria-haspopup","listbox",1,"p-select-dropdown"],[4,"ngIf","ngIfElse"],[3,"visibleChange","onAnimationStart","onHide","visible","options","target","appendTo","autoZIndex","baseZIndex","showTransitionOptions","hideTransitionOptions"],["role","combobox",3,"focus","blur","keydown","ngClass","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","text","aria-haspopup","listbox",3,"input","keydown","focus","blur","ngClass","disabled","pAutoFocus"],["class","p-select-clear-icon",3,"click",4,"ngIf"],[1,"p-select-clear-icon",3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],["aria-hidden","true",3,"ngClass",4,"ngIf"],["aria-hidden","true",3,"class",4,"ngIf"],["aria-hidden","true",3,"ngClass"],["aria-hidden","true"],["class","p-select-dropdown-icon",4,"ngIf"],["class","p-select-dropdown-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-select-dropdown-icon",3,"ngClass"],[3,"styleClass"],[1,"p-select-dropdown-icon"],[3,"ngClass","ngStyle"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus"],["class","p-select-header",3,"click",4,"ngIf"],[1,"p-select-list-container"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],[1,"p-select-header",3,"click"],["pInputText","","type","text","role","searchbox","autocomplete","off",1,"p-select-filter",3,"input","keydown","blur","pSize","value","variant"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox",1,"p-select-list",3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-select-empty-message","role","option",3,"ngStyle",4,"ngIf"],["role","option",1,"p-select-option-group",3,"ngStyle"],[3,"onClick","onMouseEnter","id","option","checkmark","selected","label","disabled","template","focused","ariaPosInset","ariaSetSize"],["role","option",1,"p-select-empty-message",3,"ngStyle"]],template:function(i,n){if(i&1){let s=Z();f(0,Ha,6,20,"span",16)(1,Ba,2,8,"input",17)(2,Ga,3,2,"ng-container",18),b(3,"div",19),f(4,Xa,3,2,"ng-container",20)(5,rc,2,2,"ng-template",null,0,se),y(),b(7,"p-overlay",21,1),ui("visibleChange",function(l){return w(s),di(n.overlayVisible,l)||(n.overlayVisible=l),x(l)}),N("onAnimationStart",function(l){return w(s),x(n.onOverlayAnimationStart(l))})("onHide",function(){return w(s),x(n.hide())}),f(9,Nc,13,17,"ng-template",null,2,se),y()}if(i&2){let s,r=me(6);a("ngIf",!n.editable),p(),a("ngIf",n.editable),p(),a("ngIf",n.isVisibleClearIcon),p(),I("aria-expanded",(s=n.overlayVisible)!==null&&s!==void 0?s:!1)("data-pc-section","trigger"),p(),a("ngIf",n.loading)("ngIfElse",r),p(3),pi("visible",n.overlayVisible),a("options",n.overlayOptions)("target","@parent")("appendTo",n.appendTo)("autoZIndex",n.autoZIndex)("baseZIndex",n.baseZIndex)("showTransitionOptions",n.showTransitionOptions)("hideTransitionOptions",n.hideTransitionOptions)}},dependencies:[le,Fe,Ct,ke,Ve,De,Hc,Ut,Fi,Ft,Bt,zt,Ht,Li,Wt,Kt,Dt,J],encapsulation:2,changeDetection:0})}return t})(),Lm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[mo,J,J]})}return t})();var go=class t{constructor(o){this.http=o}products=[];getProducts(){return this.http.get("assets/data/listProducts.json")}filtrarProducts(o,e){return o.filter(i=>{let n=e.category?i.category===e.category:!0,s=e.minPrice!=null?i.price>=e.minPrice:!0,r=e.maxPrice!=null?i.price<=e.maxPrice:!0;return n&&s&&r})}filterName(o,e){let i=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();return o.filter(s=>i(s?.name??"").includes(i(e)))}static \u0275fac=function(e){return new(e||t)(sn(mn))};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})};export{ht as a,rt as b,Wc as c,Xe as d,fi as e,mi as f,Kc as g,Uc as h,je as i,jc as j,$i as k,Gc as l,Ao as m,he as n,ce as o,xt as p,_i as q,qc as r,bi as s,ze as t,Qc as u,ft as v,xn as w,fe as x,K as y,be as z,mt as A,Xc as B,ep as C,Te as D,No as E,gp as F,ge as G,_p as H,Ii as I,bp as J,Ln as K,yp as L,vp as M,Qe as N,J as O,at as P,G as Q,Yp as R,Q as S,ct as T,Lt as U,Ft as V,Re as W,Nt as X,zt as Y,Oi as Z,Bt as _,kt as $,Ls as aa,$u as ba,Li as ca,qn as da,We as ea,bh as fa,Yn as ga,Ki as ha,yh as ia,Ui as ja,vh as ka,ji as la,Gi as ma,Sh as na,qi as oa,Ch as pa,Qn as qa,Zn as ra,wh as sa,_t as ta,Ih as ua,pt as va,Dt as wa,uf as xa,Xf as ya,mo as za,Lm as Aa,go as Ba};
