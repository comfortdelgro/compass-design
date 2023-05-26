"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3926],{88213:function(e,t,r){function n(e,t,r){!function(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,r)}r.d(t,{CN:function(){return er},iT:function(){return y},QD:function(){return M},sG:function(){return J},Lg:function(){return c}});var a=r(37705);function o(e,t){return e-t*Math.floor(e/t)}function i(e,t,r,n){let a=(t=s(e,t))-1,o=-2;return r<=2?o=0:l(t)&&(o=-1),1721425+365*a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+Math.floor((367*r-362)/12+o+n)}function l(e){return e%4==0&&(e%100!=0||e%400==0)}function s(e,t){return"BC"===e?1-t:t}let u={standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]};class h{fromJulianDay(e){var t;let r=e-1721426,n=o(r,146097),a=Math.floor(n/36524),s=o(n,36524),u=Math.floor(o(s,1461)/365),h,[c,d]=(h="AD",(t=400*Math.floor(r/146097)+100*a+4*Math.floor(s/1461)+u+(4!==a&&4!==u?1:0))<=0&&(h="BC",t=1-t),[h,t]),f=e-i(c,d,1,1),m=2;e<i(c,d,3,1)?m=0:l(d)&&(m=1);let y=Math.floor(((f+m)*12+373)/367),g=e-i(c,d,y,1)+1;return new G(c,d,y,g)}toJulianDay(e){return i(e.era,e.year,e.month,e.day)}getDaysInMonth(e){return u[l(e.year)?"leapyear":"standard"][e.month-1]}getMonthsInYear(e){return 12}getDaysInYear(e){return l(e.year)?366:365}getYearsInEra(e){return 9999}getEras(){return["BC","AD"]}isInverseEra(e){return"BC"===e.era}balanceDate(e){e.year<=0&&(e.era="BC"===e.era?"AD":"BC",e.year=1-e.year)}constructor(){(0,a.Z)(this,"identifier","gregory")}}function c(e){var t;return function e(t){return new G(t.calendar,t.era,t.year,t.month,t.day)}(C(Date.now(),e))}function d(e,t){return e.calendar.toJulianDay(e)-t.calendar.toJulianDay(t)}function f(e){return 36e5*e.hour+6e4*e.minute+1e3*e.second+e.millisecond}let m=null;function y(){return null==m&&(m=new Intl.DateTimeFormat().resolvedOptions().timeZone),m}let g=new Map,p={AF:[4,5],AE:[5,6],BH:[5,6],DZ:[5,6],EG:[5,6],IL:[5,6],IQ:[5,6],IR:[5,5],JO:[5,6],KW:[5,6],LY:[5,6],OM:[5,6],QA:[5,6],SA:[5,6],SD:[5,6],SY:[5,6],YE:[5,6]};function M(e,t){let r=Math.ceil(e.calendar.toJulianDay(e)+1)%7;r<0&&(r+=7);let[n,a]=p[function(e){if(Intl.Locale){let t=g.get(e);return t||(t=new Intl.Locale(e).maximize().region,g.set(e,t)),t}let r=e.split("-")[1];return"u"===r?null:r}(t)]||[6,0];return r===n||r===a}function v(e){return e=Z(e,new h),w(s(e.era,e.year),e.month,e.day,e.hour,e.minute,e.second,e.millisecond)}function w(e,t,r,n,a,o,i){let l=new Date;return l.setUTCHours(n,a,o,i),l.setUTCFullYear(e,t-1,r),l.getTime()}function b(e,t){if("UTC"===t)return 0;if(e>0&&t===y())return -6e4*new Date(e).getTimezoneOffset();let{year:r,month:n,day:a,hour:o,minute:i,second:l}=I(e,t);return w(r,n,a,o,i,l,0)-1e3*Math.floor(e/1e3)}let D=new Map;function I(e,t){let r=D.get(t);r||(r=new Intl.DateTimeFormat("en-US",{timeZone:t,hour12:!1,era:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),D.set(t,r));let n=r.formatToParts(new Date(e)),a={};for(let o of n)"literal"!==o.type&&(a[o.type]=o.value);return{year:"BC"===a.era||"B"===a.era?-a.year+1:+a.year,month:+a.month,day:+a.day,hour:"24"===a.hour?0:+a.hour,minute:+a.minute,second:+a.second}}function S(e,t,r="compatible"){var n,a,o,i;let l=E(e);if("UTC"===t)return v(l);if(t===y()&&"compatible"===r){l=Z(l,new h);let u=new Date,c=s(l.era,l.year);return u.setFullYear(c,l.month-1,l.day),u.setHours(l.hour,l.minute,l.second,l.millisecond),u.getTime()}let d=v(l),f=b(d-864e5,t),m=b(d+864e5,t),g=(n=l,o=d-f,(o===(i=d-m)?[o]:[o,i]).filter(e=>{var r,a,o;let i;return r=n,a=t,o=e,i=I(o,a),r.year===i.year&&r.month===i.month&&r.day===i.day&&r.hour===i.hour&&r.minute===i.minute&&r.second===i.second}));if(1===g.length)return g[0];if(g.length>1)switch(r){case"compatible":case"earlier":return g[0];case"later":return g[g.length-1];case"reject":throw RangeError("Multiple possible absolute times found")}switch(r){case"earlier":return Math.min(d-f,d-m);case"compatible":case"later":return Math.max(d-f,d-m);case"reject":throw RangeError("No such absolute time found")}}function T(e,t,r="compatible"){return new Date(S(e,t,r))}function C(e,t){let r=b(e,t),n=new Date(e+r),a=n.getUTCFullYear(),o=n.getUTCMonth()+1,i=n.getUTCDate(),l=n.getUTCHours(),s=n.getUTCMinutes(),u=n.getUTCSeconds(),h=n.getUTCMilliseconds();return new ee(a,o,i,t,r,l,s,u,h)}function E(e,t){let r=0,n=0,a=0,o=0;if("timeZone"in e)({hour:r,minute:n,second:a,millisecond:o}=e);else if("hour"in e&&!t)return e;return t&&({hour:r,minute:n,second:a,millisecond:o}=t),new V(e.calendar,e.era,e.year,e.month,e.day,r,n,a,o)}function Z(e,t){if(e.calendar.identifier===t.identifier)return e;let r=t.fromJulianDay(e.calendar.toJulianDay(e)),n=e.copy();return n.calendar=t,n.era=r.era,n.year=r.year,n.month=r.month,n.day=r.day,A(n),n}function k(e,t){var r,n,a,o,i;let l,s=e.copy(),u="hour"in s?(r=s,n=t,r.hour+=n.hours||0,r.minute+=n.minutes||0,r.second+=n.seconds||0,r.millisecond+=n.milliseconds||0,a=r,a.second+=Math.floor(a.millisecond/1e3),a.millisecond=L(a.millisecond,1e3),a.minute+=Math.floor(a.second/60),a.second=L(a.second,60),a.hour+=Math.floor(a.minute/60),a.minute=L(a.minute,60),l=Math.floor(a.hour/24),a.hour=L(a.hour,24),l):0;U(s,t.years||0),s.calendar.balanceYearMonth&&s.calendar.balanceYearMonth(s,e),s.month+=t.months||0,Y(s),$(s),s.day+=7*(t.weeks||0),s.day+=t.days||0,s.day+=u,function(e){for(;e.day<1;)e.month--,Y(e),e.day+=e.calendar.getDaysInMonth(e);for(;e.day>e.calendar.getDaysInMonth(e);)e.day-=e.calendar.getDaysInMonth(e),e.month++,Y(e)}(s),s.calendar.balanceDate&&s.calendar.balanceDate(s),s.year<1&&(s.year=1,s.month=1,s.day=1);let h=s.calendar.getYearsInEra(s);if(s.year>h){let c=null===(i=(o=s.calendar).isInverseEra)||void 0===i?void 0:i.call(o,s);s.year=h,s.month=c?1:s.calendar.getMonthsInYear(s),s.day=c?1:s.calendar.getDaysInMonth(s)}s.month<1&&(s.month=1,s.day=1);let d=s.calendar.getMonthsInYear(s);return s.month>d&&(s.month=d,s.day=s.calendar.getDaysInMonth(s)),s.day=Math.max(1,Math.min(s.calendar.getDaysInMonth(s),s.day)),s}function U(e,t){var r,n;(null===(n=(r=e.calendar).isInverseEra)||void 0===n?void 0:n.call(r,e))&&(t=-t),e.year+=t}function Y(e){for(;e.month<1;)U(e,-1),e.month+=e.calendar.getMonthsInYear(e);let t=0;for(;e.month>(t=e.calendar.getMonthsInYear(e));)e.month-=t,U(e,1)}function $(e){e.month=Math.max(1,Math.min(e.calendar.getMonthsInYear(e),e.month)),e.day=Math.max(1,Math.min(e.calendar.getDaysInMonth(e),e.day))}function A(e){e.calendar.constrainDate&&e.calendar.constrainDate(e),e.year=Math.max(1,Math.min(e.calendar.getYearsInEra(e),e.year)),$(e)}function O(e){let t={};for(let r in e)"number"==typeof e[r]&&(t[r]=-e[r]);return t}function R(e,t){return k(e,O(t))}function x(e,t){let r=e.copy();return null!=t.era&&(r.era=t.era),null!=t.year&&(r.year=t.year),null!=t.month&&(r.month=t.month),null!=t.day&&(r.day=t.day),A(r),r}function j(e,t){var r;let n=e.copy();return null!=t.hour&&(n.hour=t.hour),null!=t.minute&&(n.minute=t.minute),null!=t.second&&(n.second=t.second),null!=t.millisecond&&(n.millisecond=t.millisecond),(r=n).millisecond=Math.max(0,Math.min(r.millisecond,1e3)),r.second=Math.max(0,Math.min(r.second,59)),r.minute=Math.max(0,Math.min(r.minute,59)),r.hour=Math.max(0,Math.min(r.hour,23)),n}function L(e,t){let r=e%t;return r<0&&(r+=t),r}function F(e,t,r,n){let a=e.copy();switch(t){case"era":{let o=e.calendar.getEras(),i=o.indexOf(e.era);if(i<0)throw Error("Invalid era: "+e.era);i=P(i,r,0,o.length-1,null==n?void 0:n.round),a.era=o[i],A(a);break}case"year":var l,s;(null===(s=(l=a.calendar).isInverseEra)||void 0===s?void 0:s.call(l,a))&&(r=-r),a.year=P(e.year,r,-1/0,9999,null==n?void 0:n.round),a.year===-1/0&&(a.year=1),a.calendar.balanceYearMonth&&a.calendar.balanceYearMonth(a,e);break;case"month":a.month=P(e.month,r,1,e.calendar.getMonthsInYear(e),null==n?void 0:n.round);break;case"day":a.day=P(e.day,r,1,e.calendar.getDaysInMonth(e),null==n?void 0:n.round);break;default:throw Error("Unsupported field "+t)}return e.calendar.balanceDate&&e.calendar.balanceDate(a),A(a),a}function H(e,t,r,n){let a=e.copy();switch(t){case"hour":{let o=e.hour,i=0,l=23;if((null==n?void 0:n.hourCycle)===12){let s=o>=12;i=s?12:0,l=s?23:11}a.hour=P(o,r,i,l,null==n?void 0:n.round);break}case"minute":a.minute=P(e.minute,r,0,59,null==n?void 0:n.round);break;case"second":a.second=P(e.second,r,0,59,null==n?void 0:n.round);break;case"millisecond":a.millisecond=P(e.millisecond,r,0,999,null==n?void 0:n.round);break;default:throw Error("Unsupported field "+t)}return a}function P(e,t,r,n,a=!1){if(a){(e+=Math.sign(t))<r&&(e=n);let o=Math.abs(t);(e=t>0?Math.ceil(e/o)*o:Math.floor(e/o)*o)>n&&(e=r)}else(e+=t)<r?e=n-(r-e-1):e>n&&(e=r+(e-n-1));return e}function B(e,t){let r;if(null!=t.years&&0!==t.years||null!=t.months&&0!==t.months||null!=t.days&&0!==t.days){let n=k(E(e),{years:t.years,months:t.months,days:t.days});r=S(n,e.timeZone)}else r=v(e)-e.offset;r+=t.milliseconds||0,r+=1e3*(t.seconds||0),r+=6e4*(t.minutes||0);let a=C(r+=36e5*(t.hours||0),e.timeZone);return Z(a,e.calendar)}let z=/^(\d{4})-(\d{2})-(\d{2})$/;function J(e){let t=e.match(z);if(!t)throw Error("Invalid ISO 8601 date string: "+e);let r=new G(N(t[1],0,9999),N(t[2],1,12),1);return r.day=N(t[3],0,r.calendar.getDaysInMonth(r)),r}function N(e,t,r){let n=Number(e);if(n<t||n>r)throw RangeError(`Value out of range: ${t} <= ${n} <= ${r}`);return n}function W(e){let t=Z(e,new h);return`${String(t.year).padStart(4,"0")}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`}function Q(e){var t;return`${W(e)}T${String(e.hour).padStart(2,"0")}:${String(e.minute).padStart(2,"0")}:${String(e.second).padStart(2,"0")}${e.millisecond?String(e.millisecond/1e3).slice(1):""}`}function _(e){let t="object"==typeof e[0]?e.shift():new h,r;if("string"==typeof e[0])r=e.shift();else{let n=t.getEras();r=n[n.length-1]}let a=e.shift(),o;return[t,r,a,e.shift(),e.shift()]}var q=new WeakMap;class G{copy(){return this.era?new G(this.calendar,this.era,this.year,this.month,this.day):new G(this.calendar,this.year,this.month,this.day)}add(e){return k(this,e)}subtract(e){return R(this,e)}set(e){return x(this,e)}cycle(e,t,r){return F(this,e,t,r)}toDate(e){return T(this,e)}toString(){return W(this)}compare(e){return d(this,e)}constructor(...e){n(this,q,{writable:!0,value:void 0});let[t,r,a,o,i]=_(e);this.calendar=t,this.era=r,this.year=a,this.month=o,this.day=i,A(this)}}var K=new WeakMap;class V{copy(){return this.era?new V(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond):new V(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)}add(e){return k(this,e)}subtract(e){return R(this,e)}set(e){return x(j(this,e),e)}cycle(e,t,r){switch(e){case"era":case"year":case"month":case"day":return F(this,e,t,r);default:return H(this,e,t,r)}}toDate(e,t){return T(this,e,t)}toString(){return Q(this)}compare(e){var t,r;let n=d(this,e);return 0===n?(t=this,r=E(e),f(t)-f(r)):n}constructor(...e){n(this,K,{writable:!0,value:void 0});let[t,r,a,o,i]=_(e);this.calendar=t,this.era=r,this.year=a,this.month=o,this.day=i,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,A(this)}}var X=new WeakMap;class ee{copy(){return this.era?new ee(this.calendar,this.era,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond):new ee(this.calendar,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond)}add(e){return B(this,e)}subtract(e){var t,r;return t=this,r=e,B(t,O(r))}set(e,t){return function e(t,r,n){let a=E(t),o=j(x(a,r),r);if(0===o.compare(a))return t;let i=S(o,t.timeZone,n);return Z(C(i,t.timeZone),t.calendar)}(this,e,t)}cycle(e,t,r){return function e(t,r,n,a){switch(r){case"hour":{let o=0,i=23;if((null==a?void 0:a.hourCycle)===12){let l=t.hour>=12;o=l?12:0,i=l?23:11}let s=E(t),u=Z(j(s,{hour:o}),new h),c=[S(u,t.timeZone,"earlier"),S(u,t.timeZone,"later")].filter(e=>C(e,t.timeZone).day===u.day)[0],d=Z(j(s,{hour:i}),new h),f=[S(d,t.timeZone,"earlier"),S(d,t.timeZone,"later")].filter(e=>C(e,t.timeZone).day===d.day).pop(),m=v(t)-t.offset,y=Math.floor(m/36e5),g=m%36e5;return m=36e5*P(y,n,Math.floor(c/36e5),Math.floor(f/36e5),null==a?void 0:a.round)+g,Z(C(m,t.timeZone),t.calendar)}case"minute":case"second":case"millisecond":return H(t,r,n,a);case"era":case"year":case"month":case"day":{let p=F(E(t),r,n,a),M=S(p,t.timeZone);return Z(C(M,t.timeZone),t.calendar)}default:throw Error("Unsupported field "+r)}}(this,e,t,r)}toDate(){var e;let t;return e=this,t=v(e)-e.offset,new Date(t)}toString(){var e,t;let r,n;return e=this,`${Q(e)}${r=0>Math.sign(t=e.offset)?"-":"+",`${r}${String(n=Math.floor((t=Math.abs(t))/36e5)).padStart(2,"0")}:${String(t%36e5/6e4).padStart(2,"0")}`}[${e.timeZone}]`}toAbsoluteString(){return this.toDate().toISOString()}compare(e){return this.toDate().getTime()-(function e(t,r,n){if(t instanceof ee){var a,o;let i;return t.timeZone===r?t:(a=t,o=r,i=v(a)-a.offset,Z(C(i,o),a.calendar))}let l=S(t,r,void 0);return C(l,r)})(e,this.timeZone).toDate().getTime()}constructor(...e){n(this,X,{writable:!0,value:void 0});let[t,r,a,o,i]=_(e),l=e.shift(),s=e.shift();this.calendar=t,this.era=r,this.year=a,this.month=o,this.day=i,this.timeZone=l,this.offset=s,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,A(this)}}let et=new Map;class er{format(e){return this.formatter.format(e)}formatToParts(e){return this.formatter.formatToParts(e)}formatRange(e,t){if("function"==typeof this.formatter.formatRange)return this.formatter.formatRange(e,t);if(t<e)throw RangeError("End date must be >= start date");return`${this.formatter.format(e)} – ${this.formatter.format(t)}`}formatRangeToParts(e,t){if("function"==typeof this.formatter.formatRangeToParts)return this.formatter.formatRangeToParts(e,t);if(t<e)throw RangeError("End date must be >= start date");let r=this.formatter.formatToParts(e),n=this.formatter.formatToParts(t);return[...r.map(e=>({...e,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...n.map(e=>({...e,source:"endRange"}))]}resolvedOptions(){let e=this.formatter.resolvedOptions();return null==ei&&(ei="h12"===new Intl.DateTimeFormat("fr",{hour:"numeric",hour12:!1}).resolvedOptions().hourCycle),ei&&(this.resolvedHourCycle||(this.resolvedHourCycle=function(e,t){if(!t.timeStyle&&!t.hour)return;e=e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/,"");let r=ea(e+=(e.includes("-u-")?"":"-u")+"-nu-latn",{...t,timeZone:void 0}),n=parseInt(r.formatToParts(new Date(2020,2,3,0)).find(e=>"hour"===e.type).value,10),a=parseInt(r.formatToParts(new Date(2020,2,3,23)).find(e=>"hour"===e.type).value,10);if(0===n&&23===a)return"h23";if(24===n&&23===a)return"h24";if(0===n&&11===a)return"h11";if(12===n&&11===a)return"h12";throw Error("Unexpected hour cycle result")}(e.locale,this.options)),e.hourCycle=this.resolvedHourCycle,e.hour12="h11"===this.resolvedHourCycle||"h12"===this.resolvedHourCycle),"ethiopic-amete-alem"===e.calendar&&(e.calendar="ethioaa"),e}constructor(e,t={}){this.formatter=ea(e,t),this.options=t}}let en={true:{ja:"h11"},false:{}};function ea(e,t={}){if("boolean"==typeof t.hour12&&(null==eo&&(eo="24"===new Intl.DateTimeFormat("en-US",{hour:"numeric",hour12:!1}).format(new Date(2020,2,3,0))),eo)){let r=en[String((t={...t}).hour12)][e.split("-")[0]],n=t.hour12?"h12":"h23";t.hourCycle=null!=r?r:n,delete t.hour12}let a=e+(t?Object.entries(t).sort((e,t)=>e[0]<t[0]?-1:1).join():"");if(et.has(a))return et.get(a);let o=new Intl.DateTimeFormat(e,t);return et.set(a,o),o}let eo=null,ei=null},93633:function(e,t,r){r.d(t,{aQ:function(){return m},bU:function(){return f}});var n=r(52983),a=r(69504),o=r(88213);let i=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),l=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function s(){let e="undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:!function e(t){if(Intl.Locale){let r=new Intl.Locale(t).maximize().script;return i.has(r)}let n=t.split("-")[0];return l.has(n)}(e)?"ltr":"rtl"}}let u=s(),h=new Set;function c(){for(let e of(u=s(),h))e(u)}let d=n.createContext(null);function f(){let e=function e(){let t=(0,a.Av)(),[r,o]=(0,n.useState)(u);return((0,n.useEffect)(()=>(0===h.size&&window.addEventListener("languagechange",c),h.add(o),()=>{h.delete(o),0===h.size&&window.removeEventListener("languagechange",c)}),[]),t)?{locale:"en-US",direction:"ltr"}:r}();return(0,n.useContext)(d)||e}function m(e){let t=(0,n.useRef)(null);e&&t.current&&function(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let a of r)if(t[a]!==e[a])return!1;return!0}(e,t.current)&&(e=t.current),t.current=e;let{locale:r}=f();return(0,n.useMemo)(()=>new o.CN(r,e),[r,e])}new WeakMap},30191:function(e,t,r){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return a}})}}]);