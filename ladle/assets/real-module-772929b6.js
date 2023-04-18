import{r as p,R as tt}from"./index-057be2bb.js";import{l as nt}from"./module-5f7c7942.js";import{_ as m}from"./_define_property-1764bf98.js";class at{getStringForLocale(e,t){let n=this.strings[t];n||(n=ot(t,this.strings,this.defaultLocale),this.strings[t]=n);let a=n[e];if(!a)throw new Error(`Could not find intl message ${e} in ${t} locale`);return a}constructor(e,t="en-US"){this.strings={...e},this.defaultLocale=t}}function ot(r,e,t="en-US"){if(e[r])return e[r];let n=it(r);if(e[n])return e[n];for(let a in e)if(a.startsWith(n+"-"))return e[a];return e[t]}function it(r){return Intl.Locale?new Intl.Locale(r).language:r.split("-")[0]}const Ne=new Map,Pe=new Map;class ct{format(e,t){let n=this.strings.getStringForLocale(e,this.locale);return typeof n=="function"?n(t,this):n}plural(e,t,n="cardinal"){let a=t["="+e];if(a)return typeof a=="function"?a():a;let o=this.locale+":"+n,i=Ne.get(o);i||(i=new Intl.PluralRules(this.locale,{type:n}),Ne.set(o,i));let c=i.select(e);return a=t[c]||t.other,typeof a=="function"?a():a}number(e){let t=Pe.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),Pe.set(this.locale,t)),t.format(e)}select(e,t){let n=e[t]||e.other;return typeof n=="function"?n():n}constructor(e,t){this.locale=e,this.strings=t}}function st(r,e){if(e.has(r))throw new TypeError("Cannot initialize the same private elements twice on an object")}function ue(r,e,t){st(r,e),e.set(r,t)}function x(r,e){return r-e*Math.floor(r/e)}const ir=1721426;function U(r,e,t,n){e=V(r,e);let a=e-1,o=-2;return t<=2?o=0:R(e)&&(o=-1),ir-1+365*a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+Math.floor((367*t-362)/12+o+n)}function R(r){return r%4===0&&(r%100!==0||r%400===0)}function V(r,e){return r==="BC"?1-e:e}function de(r){let e="AD";return r<=0&&(e="BC",r=1-r),[e,r]}const ft={standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]};class D{fromJulianDay(e){let t=e,n=t-ir,a=Math.floor(n/146097),o=x(n,146097),i=Math.floor(o/36524),c=x(o,36524),s=Math.floor(c/1461),l=x(c,1461),d=Math.floor(l/365),h=a*400+i*100+s*4+d+(i!==4&&d!==4?1:0),[$,A]=de(h),v=t-U($,A,1,1),w=2;t<U($,A,3,1)?w=0:R(A)&&(w=1);let S=Math.floor(((v+w)*12+373)/367),I=t-U($,A,S,1)+1;return new u($,A,S,I)}toJulianDay(e){return U(e.era,e.year,e.month,e.day)}getDaysInMonth(e){return ft[R(e.year)?"leapyear":"standard"][e.month-1]}getMonthsInYear(e){return 12}getDaysInYear(e){return R(e.year)?366:365}getYearsInEra(e){return 9999}getEras(){return["BC","AD"]}isInverseEra(e){return e.era==="BC"}balanceDate(e){e.year<=0&&(e.era=e.era==="BC"?"AD":"BC",e.year=1-e.year)}constructor(){m(this,"identifier","gregory")}}const lt={"001":1,AD:1,AE:6,AF:6,AI:1,AL:1,AM:1,AN:1,AT:1,AX:1,AZ:1,BA:1,BE:1,BG:1,BH:6,BM:1,BN:1,BY:1,CH:1,CL:1,CM:1,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DZ:6,EC:1,EE:1,EG:6,ES:1,FI:1,FJ:1,FO:1,FR:1,GB:1,GE:1,GF:1,GP:1,GR:1,HR:1,HU:1,IE:1,IQ:6,IR:6,IS:1,IT:1,JO:6,KG:1,KW:6,KZ:1,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MK:1,MN:1,MQ:1,MV:5,MY:1,NL:1,NO:1,NZ:1,OM:6,PL:1,QA:6,RE:1,RO:1,RS:1,RU:1,SD:6,SE:1,SI:1,SK:1,SM:1,SY:6,TJ:1,TM:1,TR:1,UA:1,UY:1,UZ:1,VA:1,VN:1,XK:1};function cr(r,e){return e=y(e,r.calendar),r.era===e.era&&r.year===e.year&&r.month===e.month&&r.day===e.day}function ut(r,e){return e=y(e,r.calendar),r=F(r),e=F(e),r.era===e.era&&r.year===e.year&&r.month===e.month}function dt(r,e){return e=y(e,r.calendar),r=H(r),e=H(e),r.era===e.era&&r.year===e.year}function ht(r,e){return r.calendar.identifier===e.calendar.identifier&&r.era===e.era&&r.year===e.year&&r.month===e.month&&r.day===e.day}function $t(r,e){return r=F(r),e=F(e),r.calendar.identifier===e.calendar.identifier&&r.era===e.era&&r.year===e.year&&r.month===e.month}function yt(r,e){return r=H(r),e=H(e),r.calendar.identifier===e.calendar.identifier&&r.era===e.era&&r.year===e.year}function mt(r,e){return cr(r,fr(e))}function Oe(r,e){let t=r.calendar.toJulianDay(r),n=Math.ceil(t+1-Mt(e))%7;return n<0&&(n+=7),n}function sr(r){return M(Date.now(),r)}function fr(r){return Dr(sr(r))}function lr(r,e){return r.calendar.toJulianDay(r)-e.calendar.toJulianDay(e)}function ur(r,e){return Qe(r)-Qe(e)}function Qe(r){return r.hour*36e5+r.minute*6e4+r.second*1e3+r.millisecond}function bt(r,e){let t=g(r,e),n=r.add({days:1});return(g(n,e)-t)/36e5}let ge=null;function j(){return ge==null&&(ge=new Intl.DateTimeFormat().resolvedOptions().timeZone),ge}function F(r){return r.subtract({days:r.day-1})}function dr(r){return r.add({days:r.calendar.getDaysInMonth(r)-r.day})}function H(r){return F(r.subtract({months:r.month-1}))}function gt(r){return dr(r.add({months:r.calendar.getMonthsInYear(r)-r.month}))}function pt(r){return r.calendar.getMinimumMonthInYear?r.calendar.getMinimumMonthInYear(r):1}function Dt(r){return r.calendar.getMinimumDayInMonth?r.calendar.getMinimumDayInMonth(r):1}function hr(r,e){let t=Oe(r,e);return r.subtract({days:t})}function wt(r,e){return hr(r,e).add({days:6})}const qe=new Map;function $r(r){if(Intl.Locale){let t=qe.get(r);return t||(t=new Intl.Locale(r).maximize().region,qe.set(r,t)),t}let e=r.split("-")[1];return e==="u"?null:e}function Mt(r){let e=$r(r);return lt[e]||0}function vt(r,e){let t=r.calendar.getDaysInMonth(r);return Math.ceil((Oe(F(r),e)+t)/7)}function It(r,e){return r&&e?r.compare(e)<=0?r:e:r||e}function Et(r,e){return r&&e?r.compare(e)>=0?r:e:r||e}const xt={AF:[4,5],AE:[5,6],BH:[5,6],DZ:[5,6],EG:[5,6],IL:[5,6],IQ:[5,6],IR:[5,5],JO:[5,6],KW:[5,6],LY:[5,6],OM:[5,6],QA:[5,6],SA:[5,6],SD:[5,6],SY:[5,6],YE:[5,6]};function yr(r,e){let t=r.calendar.toJulianDay(r),n=Math.ceil(t+1)%7;n<0&&(n+=7);let a=$r(e),[o,i]=xt[a]||[6,0];return n===o||n===i}function Ct(r,e){return!yr(r,e)}function Y(r){r=y(r,new D);let e=V(r.era,r.year);return mr(e,r.month,r.day,r.hour,r.minute,r.second,r.millisecond)}function mr(r,e,t,n,a,o,i){let c=new Date;return c.setUTCHours(n,a,o,i),c.setUTCFullYear(r,e-1,t),c.getTime()}function G(r,e){if(e==="UTC")return 0;if(r>0&&e===j())return new Date(r).getTimezoneOffset()*-6e4;let{year:t,month:n,day:a,hour:o,minute:i,second:c}=br(r,e);return mr(t,n,a,o,i,c,0)-Math.floor(r/1e3)*1e3}const We=new Map;function br(r,e){let t=We.get(e);t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,hour12:!1,era:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),We.set(e,t));let n=t.formatToParts(new Date(r)),a={};for(let o of n)o.type!=="literal"&&(a[o.type]=o.value);return{year:a.era==="BC"||a.era==="B"?-a.year+1:+a.year,month:+a.month,day:+a.day,hour:a.hour==="24"?0:+a.hour,minute:+a.minute,second:+a.second}}const oe=864e5;function At(r,e){let t=Y(r),n=t-G(t-oe,e),a=t-G(t+oe,e);return gr(r,e,n,a)}function gr(r,e,t,n){return(t===n?[t]:[t,n]).filter(o=>St(r,e,o))}function St(r,e,t){let n=br(t,e);return r.year===n.year&&r.month===n.month&&r.day===n.day&&r.hour===n.hour&&r.minute===n.minute&&r.second===n.second}function g(r,e,t="compatible"){let n=C(r);if(e==="UTC")return Y(n);if(e===j()&&t==="compatible"){n=y(n,new D);let s=new Date,l=V(n.era,n.year);return s.setFullYear(l,n.month-1,n.day),s.setHours(n.hour,n.minute,n.second,n.millisecond),s.getTime()}let a=Y(n),o=G(a-oe,e),i=G(a+oe,e),c=gr(n,e,a-o,a-i);if(c.length===1)return c[0];if(c.length>1)switch(t){case"compatible":case"earlier":return c[0];case"later":return c[c.length-1];case"reject":throw new RangeError("Multiple possible absolute times found")}switch(t){case"earlier":return Math.min(a-o,a-i);case"compatible":case"later":return Math.max(a-o,a-i);case"reject":throw new RangeError("No such absolute time found")}}function pr(r,e,t="compatible"){return new Date(g(r,e,t))}function M(r,e){let t=G(r,e),n=new Date(r+t),a=n.getUTCFullYear(),o=n.getUTCMonth()+1,i=n.getUTCDate(),c=n.getUTCHours(),s=n.getUTCMinutes(),l=n.getUTCSeconds(),d=n.getUTCMilliseconds();return new O(a,o,i,e,t,c,s,l,d)}function Dr(r){return new u(r.calendar,r.era,r.year,r.month,r.day)}function C(r,e){let t=0,n=0,a=0,o=0;if("timeZone"in r)({hour:t,minute:n,second:a,millisecond:o}=r);else if("hour"in r&&!e)return r;return e&&({hour:t,minute:n,second:a,millisecond:o}=e),new N(r.calendar,r.era,r.year,r.month,r.day,t,n,a,o)}function Tt(r){return new z(r.hour,r.minute,r.second,r.millisecond)}function y(r,e){if(r.calendar.identifier===e.identifier)return r;let t=e.fromJulianDay(r.calendar.toJulianDay(r)),n=r.copy();return n.calendar=e,n.era=t.era,n.year=t.year,n.month=t.month,n.day=t.day,B(n),n}function wr(r,e,t){if(r instanceof O)return r.timeZone===e?r:he(r,e);let n=g(r,e,t);return M(n,e)}function Rt(r){let e=Y(r)-r.offset;return new Date(e)}function he(r,e){let t=Y(r)-r.offset;return y(M(t,e),r.calendar)}function Yt(r){return he(r,j())}const Q=36e5;function $e(r,e){let t=r.copy(),n="hour"in t?Er(t,e):0;xe(t,e.years||0),t.calendar.balanceYearMonth&&t.calendar.balanceYearMonth(t,r),t.month+=e.months||0,Ce(t),Mr(t),t.day+=(e.weeks||0)*7,t.day+=e.days||0,t.day+=n,Ot(t),t.calendar.balanceDate&&t.calendar.balanceDate(t),t.year<1&&(t.year=1,t.month=1,t.day=1);let a=t.calendar.getYearsInEra(t);if(t.year>a){var o,i;let s=(i=(o=t.calendar).isInverseEra)===null||i===void 0?void 0:i.call(o,t);t.year=a,t.month=s?1:t.calendar.getMonthsInYear(t),t.day=s?1:t.calendar.getDaysInMonth(t)}t.month<1&&(t.month=1,t.day=1);let c=t.calendar.getMonthsInYear(t);return t.month>c&&(t.month=c,t.day=t.calendar.getDaysInMonth(t)),t.day=Math.max(1,Math.min(t.calendar.getDaysInMonth(t),t.day)),t}function xe(r,e){var t,n;!((n=(t=r.calendar).isInverseEra)===null||n===void 0)&&n.call(t,r)&&(e=-e),r.year+=e}function Ce(r){for(;r.month<1;)xe(r,-1),r.month+=r.calendar.getMonthsInYear(r);let e=0;for(;r.month>(e=r.calendar.getMonthsInYear(r));)r.month-=e,xe(r,1)}function Ot(r){for(;r.day<1;)r.month--,Ce(r),r.day+=r.calendar.getDaysInMonth(r);for(;r.day>r.calendar.getDaysInMonth(r);)r.day-=r.calendar.getDaysInMonth(r),r.month++,Ce(r)}function Mr(r){r.month=Math.max(1,Math.min(r.calendar.getMonthsInYear(r),r.month)),r.day=Math.max(1,Math.min(r.calendar.getDaysInMonth(r),r.day))}function B(r){r.calendar.constrainDate&&r.calendar.constrainDate(r),r.year=Math.max(1,Math.min(r.calendar.getYearsInEra(r),r.year)),Mr(r)}function Le(r){let e={};for(let t in r)typeof r[t]=="number"&&(e[t]=-r[t]);return e}function vr(r,e){return $e(r,Le(e))}function Ue(r,e){let t=r.copy();return e.era!=null&&(t.era=e.era),e.year!=null&&(t.year=e.year),e.month!=null&&(t.month=e.month),e.day!=null&&(t.day=e.day),B(t),t}function K(r,e){let t=r.copy();return e.hour!=null&&(t.hour=e.hour),e.minute!=null&&(t.minute=e.minute),e.second!=null&&(t.second=e.second),e.millisecond!=null&&(t.millisecond=e.millisecond),Ir(t),t}function Lt(r){r.second+=Math.floor(r.millisecond/1e3),r.millisecond=X(r.millisecond,1e3),r.minute+=Math.floor(r.second/60),r.second=X(r.second,60),r.hour+=Math.floor(r.minute/60),r.minute=X(r.minute,60);let e=Math.floor(r.hour/24);return r.hour=X(r.hour,24),e}function Ir(r){r.millisecond=Math.max(0,Math.min(r.millisecond,1e3)),r.second=Math.max(0,Math.min(r.second,59)),r.minute=Math.max(0,Math.min(r.minute,59)),r.hour=Math.max(0,Math.min(r.hour,23))}function X(r,e){let t=r%e;return t<0&&(t+=e),t}function Er(r,e){return r.hour+=e.hours||0,r.minute+=e.minutes||0,r.second+=e.seconds||0,r.millisecond+=e.milliseconds||0,Lt(r)}function xr(r,e){let t=r.copy();return Er(t,e),t}function Ut(r,e){return xr(r,Le(e))}function Fe(r,e,t,n){let a=r.copy();switch(e){case"era":{let c=r.calendar.getEras(),s=c.indexOf(r.era);if(s<0)throw new Error("Invalid era: "+r.era);s=E(s,t,0,c.length-1,n==null?void 0:n.round),a.era=c[s],B(a);break}case"year":var o,i;!((i=(o=a.calendar).isInverseEra)===null||i===void 0)&&i.call(o,a)&&(t=-t),a.year=E(r.year,t,-1/0,9999,n==null?void 0:n.round),a.year===-1/0&&(a.year=1),a.calendar.balanceYearMonth&&a.calendar.balanceYearMonth(a,r);break;case"month":a.month=E(r.month,t,1,r.calendar.getMonthsInYear(r),n==null?void 0:n.round);break;case"day":a.day=E(r.day,t,1,r.calendar.getDaysInMonth(r),n==null?void 0:n.round);break;default:throw new Error("Unsupported field "+e)}return r.calendar.balanceDate&&r.calendar.balanceDate(a),B(a),a}function Be(r,e,t,n){let a=r.copy();switch(e){case"hour":{let o=r.hour,i=0,c=23;if((n==null?void 0:n.hourCycle)===12){let s=o>=12;i=s?12:0,c=s?23:11}a.hour=E(o,t,i,c,n==null?void 0:n.round);break}case"minute":a.minute=E(r.minute,t,0,59,n==null?void 0:n.round);break;case"second":a.second=E(r.second,t,0,59,n==null?void 0:n.round);break;case"millisecond":a.millisecond=E(r.millisecond,t,0,999,n==null?void 0:n.round);break;default:throw new Error("Unsupported field "+e)}return a}function E(r,e,t,n,a=!1){if(a){r+=Math.sign(e),r<t&&(r=n);let o=Math.abs(e);e>0?r=Math.ceil(r/o)*o:r=Math.floor(r/o)*o,r>n&&(r=t)}else r+=e,r<t?r=n-(t-r-1):r>n&&(r=t+(r-n-1));return r}function Cr(r,e){let t;if(e.years!=null&&e.years!==0||e.months!=null&&e.months!==0||e.days!=null&&e.days!==0){let a=$e(C(r),{years:e.years,months:e.months,days:e.days});t=g(a,r.timeZone)}else t=Y(r)-r.offset;t+=e.milliseconds||0,t+=(e.seconds||0)*1e3,t+=(e.minutes||0)*6e4,t+=(e.hours||0)*36e5;let n=M(t,r.timeZone);return y(n,r.calendar)}function Ft(r,e){return Cr(r,Le(e))}function Bt(r,e,t,n){switch(e){case"hour":{let a=0,o=23;if((n==null?void 0:n.hourCycle)===12){let v=r.hour>=12;a=v?12:0,o=v?23:11}let i=C(r),c=y(K(i,{hour:a}),new D),s=[g(c,r.timeZone,"earlier"),g(c,r.timeZone,"later")].filter(v=>M(v,r.timeZone).day===c.day)[0],l=y(K(i,{hour:o}),new D),d=[g(l,r.timeZone,"earlier"),g(l,r.timeZone,"later")].filter(v=>M(v,r.timeZone).day===l.day).pop(),h=Y(r)-r.offset,$=Math.floor(h/Q),A=h%Q;return h=E($,t,Math.floor(s/Q),Math.floor(d/Q),n==null?void 0:n.round)*Q+A,y(M(h,r.timeZone),r.calendar)}case"minute":case"second":case"millisecond":return Be(r,e,t,n);case"era":case"year":case"month":case"day":{let a=Fe(C(r),e,t,n),o=g(a,r.timeZone);return y(M(o,r.timeZone),r.calendar)}default:throw new Error("Unsupported field "+e)}}function Jt(r,e,t){let n=C(r),a=K(Ue(n,e),e);if(a.compare(n)===0)return r;let o=g(a,r.timeZone,t);return y(M(o,r.timeZone),r.calendar)}const kt=/^(\d{2})(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,_t=/^(\d{4})-(\d{2})-(\d{2})$/,Nt=/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,Pt=/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:([+-]\d{2})(?::(\d{2}))?)?\[(.*?)\]$/,Qt=/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::(\d{2}))?)|Z)$/,qt=/^((?<negative>-)|\+)?P((?<years>\d*)Y)?((?<months>\d*)M)?((?<weeks>\d*)W)?((?<days>\d*)D)?((?<time>T)((?<hours>\d*[.,]?\d{1,9})H)?((?<minutes>\d*[.,]?\d{1,9})M)?((?<seconds>\d*[.,]?\d{1,9})S)?)?$/,Ar=["hours","minutes","seconds"],Wt=["years","months","weeks","days",...Ar];function Zt(r){let e=r.match(kt);if(!e)throw new Error("Invalid ISO 8601 time string: "+r);return new z(f(e[1],0,23),e[2]?f(e[2],0,59):0,e[3]?f(e[3],0,59):0,e[4]?f(e[4],0,1/0)*1e3:0)}function Ht(r){let e=r.match(_t);if(!e)throw new Error("Invalid ISO 8601 date string: "+r);let t=new u(f(e[1],0,9999),f(e[2],1,12),1);return t.day=f(e[3],0,t.calendar.getDaysInMonth(t)),t}function Gt(r){let e=r.match(Nt);if(!e)throw new Error("Invalid ISO 8601 date time string: "+r);let t=new N(f(e[1],1,9999),f(e[2],1,12),1,e[4]?f(e[4],0,23):0,e[5]?f(e[5],0,59):0,e[6]?f(e[6],0,59):0,e[7]?f(e[7],0,1/0)*1e3:0);return t.day=f(e[3],0,t.calendar.getDaysInMonth(t)),t}function Kt(r,e){let t=r.match(Pt);if(!t)throw new Error("Invalid ISO 8601 date time string: "+r);let n=new O(f(t[1],1,9999),f(t[2],1,12),1,t[10],0,t[4]?f(t[4],0,23):0,t[5]?f(t[5],0,59):0,t[6]?f(t[6],0,59):0,t[7]?f(t[7],0,1/0)*1e3:0);n.day=f(t[3],0,n.calendar.getDaysInMonth(n));let a=C(n),o;if(t[8]){var i;if(n.offset=f(t[8],-23,23)*36e5+f((i=t[9])!==null&&i!==void 0?i:"0",0,59)*6e4,o=Y(n)-n.offset,!At(a,n.timeZone).includes(o))throw new Error(`Offset ${Yr(n.offset)} is invalid for ${Je(n)} in ${n.timeZone}`)}else o=g(C(a),n.timeZone,e);return M(o,n.timeZone)}function Sr(r,e){let t=r.match(Qt);if(!t)throw new Error("Invalid ISO 8601 date time string: "+r);let n=new O(f(t[1],1,9999),f(t[2],1,12),1,e,0,t[4]?f(t[4],0,23):0,t[5]?f(t[5],0,59):0,t[6]?f(t[6],0,59):0,t[7]?f(t[7],0,1/0)*1e3:0);n.day=f(t[3],0,n.calendar.getDaysInMonth(n));var a;return t[8]&&(n.offset=f(t[8],-23,23)*36e5+f((a=t[9])!==null&&a!==void 0?a:"0",0,59)*6e4),he(n,e)}function Vt(r){return Sr(r,j())}function f(r,e,t){let n=Number(r);if(n<e||n>t)throw new RangeError(`Value out of range: ${e} <= ${n} <= ${t}`);return n}function Tr(r){return`${String(r.hour).padStart(2,"0")}:${String(r.minute).padStart(2,"0")}:${String(r.second).padStart(2,"0")}${r.millisecond?String(r.millisecond/1e3).slice(1):""}`}function Rr(r){let e=y(r,new D);return`${String(e.year).padStart(4,"0")}-${String(e.month).padStart(2,"0")}-${String(e.day).padStart(2,"0")}`}function Je(r){return`${Rr(r)}T${Tr(r)}`}function Yr(r){let e=Math.sign(r)<0?"-":"+";r=Math.abs(r);let t=Math.floor(r/36e5),n=r%36e5/6e4;return`${e}${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function jt(r){return`${Je(r)}${Yr(r.offset)}[${r.timeZone}]`}function zt(r){var e,t,n,a,o,i,c,s,l;const d=r.match(qt);if(!d)throw new Error(`Invalid ISO 8601 Duration string: ${r}`);const h=(S,I,P,rt)=>{if(!S)return 0;try{return(I?-1:1)*f(S.replace(",","."),P,rt)}catch{throw new Error(`Invalid ISO 8601 Duration string: ${r}`)}},$=!!(!((e=d.groups)===null||e===void 0)&&e.negative);if(!Wt.some(S=>{var I;return(I=d.groups)===null||I===void 0?void 0:I[S]}))throw new Error(`Invalid ISO 8601 Duration string: ${r}`);if(((t=d.groups)===null||t===void 0?void 0:t.time)&&!Ar.some(I=>{var P;return(P=d.groups)===null||P===void 0?void 0:P[I]}))throw new Error(`Invalid ISO 8601 Duration string: ${r}`);const w={years:h((n=d.groups)===null||n===void 0?void 0:n.years,$,0,9999),months:h((a=d.groups)===null||a===void 0?void 0:a.months,$,0,12),weeks:h((o=d.groups)===null||o===void 0?void 0:o.weeks,$,0,1/0),days:h((i=d.groups)===null||i===void 0?void 0:i.days,$,0,31),hours:h((c=d.groups)===null||c===void 0?void 0:c.hours,$,0,23),minutes:h((s=d.groups)===null||s===void 0?void 0:s.minutes,$,0,59),seconds:h((l=d.groups)===null||l===void 0?void 0:l.seconds,$,0,59)};if(w.hours%1!==0&&(w.minutes||w.seconds))throw new Error(`Invalid ISO 8601 Duration string: ${r} - only the smallest unit can be fractional`);if(w.minutes%1!==0&&w.seconds)throw new Error(`Invalid ISO 8601 Duration string: ${r} - only the smallest unit can be fractional`);return w}function ke(r){let e=typeof r[0]=="object"?r.shift():new D,t;if(typeof r[0]=="string")t=r.shift();else{let i=e.getEras();t=i[i.length-1]}let n=r.shift(),a=r.shift(),o=r.shift();return[e,t,n,a,o]}var Xt=new WeakMap;class u{copy(){return this.era?new u(this.calendar,this.era,this.year,this.month,this.day):new u(this.calendar,this.year,this.month,this.day)}add(e){return $e(this,e)}subtract(e){return vr(this,e)}set(e){return Ue(this,e)}cycle(e,t,n){return Fe(this,e,t,n)}toDate(e){return pr(this,e)}toString(){return Rr(this)}compare(e){return lr(this,e)}constructor(...e){ue(this,Xt,{writable:!0,value:void 0});let[t,n,a,o,i]=ke(e);this.calendar=t,this.era=n,this.year=a,this.month=o,this.day=i,B(this)}}var en=new WeakMap;class z{copy(){return new z(this.hour,this.minute,this.second,this.millisecond)}add(e){return xr(this,e)}subtract(e){return Ut(this,e)}set(e){return K(this,e)}cycle(e,t,n){return Be(this,e,t,n)}toString(){return Tr(this)}compare(e){return ur(this,e)}constructor(e=0,t=0,n=0,a=0){ue(this,en,{writable:!0,value:void 0}),this.hour=e,this.minute=t,this.second=n,this.millisecond=a,Ir(this)}}var rn=new WeakMap;class N{copy(){return this.era?new N(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond):new N(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)}add(e){return $e(this,e)}subtract(e){return vr(this,e)}set(e){return Ue(K(this,e),e)}cycle(e,t,n){switch(e){case"era":case"year":case"month":case"day":return Fe(this,e,t,n);default:return Be(this,e,t,n)}}toDate(e,t){return pr(this,e,t)}toString(){return Je(this)}compare(e){let t=lr(this,e);return t===0?ur(this,C(e)):t}constructor(...e){ue(this,rn,{writable:!0,value:void 0});let[t,n,a,o,i]=ke(e);this.calendar=t,this.era=n,this.year=a,this.month=o,this.day=i,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,B(this)}}var tn=new WeakMap;class O{copy(){return this.era?new O(this.calendar,this.era,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond):new O(this.calendar,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond)}add(e){return Cr(this,e)}subtract(e){return Ft(this,e)}set(e,t){return Jt(this,e,t)}cycle(e,t,n){return Bt(this,e,t,n)}toDate(){return Rt(this)}toString(){return jt(this)}toAbsoluteString(){return this.toDate().toISOString()}compare(e){return this.toDate().getTime()-wr(e,this.timeZone).toDate().getTime()}constructor(...e){ue(this,tn,{writable:!0,value:void 0});let[t,n,a,o,i]=ke(e),c=e.shift(),s=e.shift();this.calendar=t,this.era=n,this.year=a,this.month=o,this.day=i,this.timeZone=c,this.offset=s,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,B(this)}}const k=[[1868,9,8],[1912,7,30],[1926,12,25],[1989,1,8],[2019,5,1]],nn=[[1912,7,29],[1926,12,24],[1989,1,7],[2019,4,30]],te=[1867,1911,1925,1988,2018],T=["meiji","taisho","showa","heisei","reiwa"];function Ze(r){const e=k.findIndex(([t,n,a])=>r.year<t||r.year===t&&r.month<n||r.year===t&&r.month===n&&r.day<a);return e===-1?k.length-1:e===0?0:e-1}function pe(r){let e=te[T.indexOf(r.era)];if(!e)throw new Error("Unknown era: "+r.era);return new u(r.year+e,r.month,r.day)}class Or extends D{fromJulianDay(e){let t=super.fromJulianDay(e),n=Ze(t);return new u(this,T[n],t.year-te[n],t.month,t.day)}toJulianDay(e){return super.toJulianDay(pe(e))}balanceDate(e){let t=pe(e),n=Ze(t);T[n]!==e.era&&(e.era=T[n],e.year=t.year-te[n]),this.constrainDate(e)}constrainDate(e){let t=T.indexOf(e.era),n=nn[t];if(n!=null){let[a,o,i]=n,c=a-te[t];e.year=Math.max(1,Math.min(c,e.year)),e.year===c&&(e.month=Math.min(o,e.month),e.month===o&&(e.day=Math.min(i,e.day)))}if(e.year===1&&t>=0){let[,a,o]=k[t];e.month=Math.max(a,e.month),e.month===a&&(e.day=Math.max(o,e.day))}}getEras(){return T}getYearsInEra(e){let t=T.indexOf(e.era),n=k[t],a=k[t+1];if(a==null)return 9999-n[0]+1;let o=a[0]-n[0];return(e.month<a[1]||e.month===a[1]&&e.day<a[2])&&o++,o}getDaysInMonth(e){return super.getDaysInMonth(pe(e))}getMinimumMonthInYear(e){let t=He(e);return t?t[1]:1}getMinimumDayInMonth(e){let t=He(e);return t&&e.month===t[1]?t[2]:1}constructor(...e){super(...e),m(this,"identifier","japanese")}}function He(r){if(r.year===1){let e=T.indexOf(r.era);return k[e]}}const Lr=-543;class Ur extends D{fromJulianDay(e){let t=super.fromJulianDay(e),n=V(t.era,t.year);return new u(this,n-Lr,t.month,t.day)}toJulianDay(e){return super.toJulianDay(Ge(e))}getEras(){return["BE"]}getDaysInMonth(e){return super.getDaysInMonth(Ge(e))}balanceDate(){}constructor(...e){super(...e),m(this,"identifier","buddhist")}}function Ge(r){let[e,t]=de(r.year+Lr);return new u(e,t,r.month,r.day)}const ie=1911;function Fr(r){return r.era==="minguo"?r.year+ie:1-r.year+ie}function Ke(r){let e=r-ie;return e>0?["minguo",e]:["before_minguo",1-e]}class Br extends D{fromJulianDay(e){let t=super.fromJulianDay(e),n=V(t.era,t.year),[a,o]=Ke(n);return new u(this,a,o,t.month,t.day)}toJulianDay(e){return super.toJulianDay(Ve(e))}getEras(){return["before_minguo","minguo"]}balanceDate(e){let[t,n]=Ke(Fr(e));e.era=t,e.year=n}isInverseEra(e){return e.era==="before_minguo"}getDaysInMonth(e){return super.getDaysInMonth(Ve(e))}getYearsInEra(e){return e.era==="before_minguo"?9999:9999-ie}constructor(...e){super(...e),m(this,"identifier","roc")}}function Ve(r){let[e,t]=de(Fr(r));return new u(e,t,r.month,r.day)}const an=1948321;function on(r){let e=r>0?r-474:r-473,t=x(e,2820)+474;return x((t+38)*31,128)<31}function ee(r,e,t){let n=r>0?r-474:r-473,a=x(n,2820)+474,o=e<=7?31*(e-1):30*(e-1)+6;return an-1+1029983*Math.floor(n/2820)+365*(a-1)+Math.floor((31*a-5)/128)+o+t}class Jr{fromJulianDay(e){let t=e-ee(475,1,1),n=Math.floor(t/1029983),a=x(t,1029983),o=a===1029982?2820:Math.floor((128*a+46878)/46751),i=474+2820*n+o;i<=0&&i--;let c=e-ee(i,1,1)+1,s=c<=186?Math.ceil(c/31):Math.ceil((c-6)/31),l=e-ee(i,s,1)+1;return new u(this,i,s,l)}toJulianDay(e){return ee(e.year,e.month,e.day)}getMonthsInYear(){return 12}getDaysInMonth(e){return e.month<=6?31:e.month<=11||on(e.year)?30:29}getEras(){return["AP"]}getYearsInEra(){return 9377}constructor(){m(this,"identifier","persian")}}const De=78,je=80;class kr extends D{fromJulianDay(e){let t=super.fromJulianDay(e),n=t.year-De,a=e-U(t.era,t.year,1,1),o;a<je?(n--,o=R(t.year-1)?31:30,a+=o+155+90+10):(o=R(t.year)?31:30,a-=je);let i,c;if(a<o)i=1,c=a+1;else{let s=a-o;s<155?(i=Math.floor(s/31)+2,c=s%31+1):(s-=155,i=Math.floor(s/30)+7,c=s%30+1)}return new u(this,n,i,c)}toJulianDay(e){let t=e.year+De,[n,a]=de(t),o,i;return R(a)?(o=31,i=U(n,a,3,21)):(o=30,i=U(n,a,3,22)),e.month===1?i+e.day-1:(i+=o+Math.min(e.month-2,5)*31,e.month>=8&&(i+=(e.month-7)*30),i+=e.day-1,i)}getDaysInMonth(e){return e.month===1&&R(e.year+De)||e.month>=2&&e.month<=6?31:30}getYearsInEra(){return 9919}getEras(){return["saka"]}balanceDate(){}constructor(...e){super(...e),m(this,"identifier","indian")}}const ce=1948440,ze=1948439,b=1300,J=1600,cn=460322;function se(r,e,t,n){return n+Math.ceil(29.5*(t-1))+(e-1)*354+Math.floor((3+11*e)/30)+r-1}function _r(r,e,t){let n=Math.floor((30*(t-e)+10646)/10631),a=Math.min(12,Math.ceil((t-(29+se(e,n,1,1)))/29.5)+1),o=t-se(e,n,a,1)+1;return new u(r,n,a,o)}function Xe(r){return(14+11*r)%30<11}class ye{fromJulianDay(e){return _r(this,ce,e)}toJulianDay(e){return se(ce,e.year,e.month,e.day)}getDaysInMonth(e){let t=29+e.month%2;return e.month===12&&Xe(e.year)&&t++,t}getMonthsInYear(){return 12}getDaysInYear(e){return Xe(e.year)?355:354}getYearsInEra(){return 9665}getEras(){return["AH"]}constructor(){m(this,"identifier","islamic-civil")}}class Nr extends ye{fromJulianDay(e){return _r(this,ze,e)}toJulianDay(e){return se(ze,e.year,e.month,e.day)}constructor(...e){super(...e),m(this,"identifier","islamic-tbla")}}const sn="qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";let Ae,_;function ne(r){return cn+_[r-b]}function q(r,e){let t=r-b,n=1<<11-(e-1);return Ae[t]&n?30:29}function er(r,e){let t=ne(r);for(let n=1;n<e;n++)t+=q(r,n);return t}function rr(r){return _[r+1-b]-_[r-b]}class Pr extends ye{fromJulianDay(e){let t=e-ce,n=ne(b),a=ne(J);if(t<n||t>a)return super.fromJulianDay(e);{let o=b-1,i=1,c=1;for(;c>0;){o++,c=t-ne(o)+1;let s=rr(o);if(c===s){i=12;break}else if(c<s){let l=q(o,i);for(i=1;c>l;)c-=l,i++,l=q(o,i);break}}return new u(this,o,i,t-er(o,i)+1)}}toJulianDay(e){return e.year<b||e.year>J?super.toJulianDay(e):ce+er(e.year,e.month)+(e.day-1)}getDaysInMonth(e){return e.year<b||e.year>J?super.getDaysInMonth(e):q(e.year,e.month)}getDaysInYear(e){return e.year<b||e.year>J?super.getDaysInYear(e):rr(e.year)}constructor(){if(super(),m(this,"identifier","islamic-umalqura"),Ae||(Ae=new Uint16Array(Uint8Array.from(atob(sn),e=>e.charCodeAt(0)).buffer)),!_){_=new Uint32Array(J-b+1);let e=0;for(let t=b;t<=J;t++){_[t-b]=e;for(let n=1;n<=12;n++)e+=q(t,n)}}}}const tr=347997,Qr=1080,qr=24*Qr,fn=29,ln=12*Qr+793,un=fn*qr+ln;function L(r){return x(r*7+1,19)<7}function ae(r){let e=Math.floor((235*r-234)/19),t=12084+13753*e,n=e*29+Math.floor(t/25920);return x(3*(n+1),7)<3&&(n+=1),n}function dn(r){let e=ae(r-1),t=ae(r);return ae(r+1)-t===356?2:t-e===382?1:0}function Z(r){return ae(r)+dn(r)}function Wr(r){return Z(r+1)-Z(r)}function hn(r){let e=Wr(r);switch(e>380&&(e-=30),e){case 353:return 0;case 354:return 1;case 355:return 2}}function re(r,e){if(e>=6&&!L(r)&&e++,e===4||e===7||e===9||e===11||e===13)return 29;let t=hn(r);return e===2?t===2?30:29:e===3?t===0?29:30:e===6?L(r)?30:0:30}class Zr{fromJulianDay(e){let t=e-tr,n=t*qr/un,a=Math.floor((19*n+234)/235)+1,o=Z(a),i=Math.floor(t-o);for(;i<1;)a--,o=Z(a),i=Math.floor(t-o);let c=1,s=0;for(;s<i;)s+=re(a,c),c++;c--,s-=re(a,c);let l=i-s;return new u(this,a,c,l)}toJulianDay(e){let t=Z(e.year);for(let n=1;n<e.month;n++)t+=re(e.year,n);return t+e.day+tr}getDaysInMonth(e){return re(e.year,e.month)}getMonthsInYear(e){return L(e.year)?13:12}getDaysInYear(e){return Wr(e.year)}getYearsInEra(){return 9999}getEras(){return["AM"]}balanceYearMonth(e,t){t.year!==e.year&&(L(t.year)&&!L(e.year)&&t.month>6?e.month--:!L(t.year)&&L(e.year)&&t.month>6&&e.month++)}constructor(){m(this,"identifier","hebrew")}}const Se=1723856,nr=1824665,Te=5500;function fe(r,e,t,n){return r+365*e+Math.floor(e/4)+30*(t-1)+n-1}function _e(r,e){let t=Math.floor(4*(e-r)/1461),n=1+Math.floor((e-fe(r,t,1,1))/30),a=e+1-fe(r,t,n,1);return[t,n,a]}function Hr(r){return Math.floor(r%4/3)}function Gr(r,e){return e%13!==0?30:Hr(r)+5}class me{fromJulianDay(e){let[t,n,a]=_e(Se,e),o="AM";return t<=0&&(o="AA",t+=Te),new u(this,o,t,n,a)}toJulianDay(e){let t=e.year;return e.era==="AA"&&(t-=Te),fe(Se,t,e.month,e.day)}getDaysInMonth(e){return Gr(e.year,e.month)}getMonthsInYear(){return 13}getDaysInYear(e){return 365+Hr(e.year)}getYearsInEra(e){return e.era==="AA"?9999:9991}getEras(){return["AA","AM"]}constructor(){m(this,"identifier","ethiopic")}}class Kr extends me{fromJulianDay(e){let[t,n,a]=_e(Se,e);return t+=Te,new u(this,"AA",t,n,a)}getEras(){return["AA"]}getYearsInEra(){return 9999}constructor(...e){super(...e),m(this,"identifier","ethioaa")}}class Vr extends me{fromJulianDay(e){let[t,n,a]=_e(nr,e),o="CE";return t<=0&&(o="BCE",t=1-t),new u(this,o,t,n,a)}toJulianDay(e){let t=e.year;return e.era==="BCE"&&(t=1-t),fe(nr,t,e.month,e.day)}getDaysInMonth(e){let t=e.year;return e.era==="BCE"&&(t=1-t),Gr(t,e.month)}isInverseEra(e){return e.era==="BCE"}balanceDate(e){e.year<=0&&(e.era=e.era==="BCE"?"CE":"BCE",e.year=1-e.year)}getEras(){return["BCE","CE"]}getYearsInEra(e){return e.era==="BCE"?9999:9715}constructor(...e){super(...e),m(this,"identifier","coptic")}}function $n(r){switch(r){case"buddhist":return new Ur;case"ethiopic":return new me;case"ethioaa":return new Kr;case"coptic":return new Vr;case"hebrew":return new Zr;case"indian":return new kr;case"islamic-civil":return new ye;case"islamic-tbla":return new Nr;case"islamic-umalqura":return new Pr;case"japanese":return new Or;case"persian":return new Jr;case"roc":return new Br;case"gregory":default:return new D}}let we=new Map;class jr{format(e){return this.formatter.format(e)}formatToParts(e){return this.formatter.formatToParts(e)}formatRange(e,t){if(typeof this.formatter.formatRange=="function")return this.formatter.formatRange(e,t);if(t<e)throw new RangeError("End date must be >= start date");return`${this.formatter.format(e)} – ${this.formatter.format(t)}`}formatRangeToParts(e,t){if(typeof this.formatter.formatRangeToParts=="function")return this.formatter.formatRangeToParts(e,t);if(t<e)throw new RangeError("End date must be >= start date");let n=this.formatter.formatToParts(e),a=this.formatter.formatToParts(t);return[...n.map(o=>({...o,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...a.map(o=>({...o,source:"endRange"}))]}resolvedOptions(){let e=this.formatter.resolvedOptions();return bn()&&(this.resolvedHourCycle||(this.resolvedHourCycle=gn(e.locale,this.options)),e.hourCycle=this.resolvedHourCycle,e.hour12=this.resolvedHourCycle==="h11"||this.resolvedHourCycle==="h12"),e.calendar==="ethiopic-amete-alem"&&(e.calendar="ethioaa"),e}constructor(e,t={}){this.formatter=zr(e,t),this.options=t}}const yn={true:{ja:"h11"},false:{}};function zr(r,e={}){if(typeof e.hour12=="boolean"&&mn()){e={...e};let a=yn[String(e.hour12)][r.split("-")[0]],o=e.hour12?"h12":"h23";e.hourCycle=a??o,delete e.hour12}let t=r+(e?Object.entries(e).sort((a,o)=>a[0]<o[0]?-1:1).join():"");if(we.has(t))return we.get(t);let n=new Intl.DateTimeFormat(r,e);return we.set(t,n),n}let Me=null;function mn(){return Me==null&&(Me=new Intl.DateTimeFormat("en-US",{hour:"numeric",hour12:!1}).format(new Date(2020,2,3,0))==="24"),Me}let ve=null;function bn(){return ve==null&&(ve=new Intl.DateTimeFormat("fr",{hour:"numeric",hour12:!1}).resolvedOptions().hourCycle==="h12"),ve}function gn(r,e){if(!e.timeStyle&&!e.hour)return;r=r.replace(/(-u-)?-nu-[a-zA-Z0-9]+/,""),r+=(r.includes("-u-")?"":"-u")+"-nu-latn";let t=zr(r,{...e,timeZone:void 0}),n=parseInt(t.formatToParts(new Date(2020,2,3,0)).find(o=>o.type==="hour").value,10),a=parseInt(t.formatToParts(new Date(2020,2,3,23)).find(o=>o.type==="hour").value,10);if(n===0&&a===23)return"h23";if(n===24&&a===23)return"h24";if(n===0&&a===11)return"h11";if(n===12&&a===11)return"h12";throw new Error("Unexpected hour cycle result")}const Ln=Object.freeze(Object.defineProperty({__proto__:null,BuddhistCalendar:Ur,CalendarDate:u,CalendarDateTime:N,CopticCalendar:Vr,DateFormatter:jr,EthiopicAmeteAlemCalendar:Kr,EthiopicCalendar:me,GregorianCalendar:D,HebrewCalendar:Zr,IndianCalendar:kr,IslamicCivilCalendar:ye,IslamicTabularCalendar:Nr,IslamicUmalquraCalendar:Pr,JapaneseCalendar:Or,PersianCalendar:Jr,TaiwanCalendar:Br,Time:z,ZonedDateTime:O,createCalendar:$n,endOfMonth:dr,endOfWeek:wt,endOfYear:gt,getDayOfWeek:Oe,getHoursInDay:bt,getLocalTimeZone:j,getMinimumDayInMonth:Dt,getMinimumMonthInYear:pt,getWeeksInMonth:vt,isEqualDay:ht,isEqualMonth:$t,isEqualYear:yt,isSameDay:cr,isSameMonth:ut,isSameYear:dt,isToday:mt,isWeekday:Ct,isWeekend:yr,maxDate:Et,minDate:It,now:sr,parseAbsolute:Sr,parseAbsoluteToLocal:Vt,parseDate:Ht,parseDateTime:Gt,parseDuration:zt,parseTime:Zt,parseZonedDateTime:Kt,startOfMonth:F,startOfWeek:hr,startOfYear:H,toCalendar:y,toCalendarDate:Dr,toCalendarDateTime:C,toLocalTimeZone:Yt,toTime:Tt,toTimeZone:he,toZoned:wr,today:fr},Symbol.toStringTag,{value:"Module"}));let Ie=new Map,Re=!1;try{Re=new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay==="exceptZero"}catch{}let le=!1;try{le=new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style==="unit"}catch{}const Xr={degree:{narrow:{default:"°","ja-JP":" 度","zh-TW":"度","sl-SI":" °"}}};class pn{format(e){let t="";if(!Re&&this.options.signDisplay!=null?t=wn(this.numberFormatter,this.options.signDisplay,e):t=this.numberFormatter.format(e),this.options.style==="unit"&&!le){var n;let{unit:a,unitDisplay:o="short",locale:i}=this.resolvedOptions(),c=(n=Xr[a])===null||n===void 0?void 0:n[o];t+=c[i]||c.default}return t}formatToParts(e){return this.numberFormatter.formatToParts(e)}formatRange(e,t){if(typeof this.numberFormatter.formatRange=="function")return this.numberFormatter.formatRange(e,t);if(t<e)throw new RangeError("End date must be >= start date");return`${this.format(e)} – ${this.format(t)}`}formatRangeToParts(e,t){if(typeof this.numberFormatter.formatRangeToParts=="function")return this.numberFormatter.formatRangeToParts(e,t);if(t<e)throw new RangeError("End date must be >= start date");let n=this.numberFormatter.formatToParts(e),a=this.numberFormatter.formatToParts(t);return[...n.map(o=>({...o,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...a.map(o=>({...o,source:"endRange"}))]}resolvedOptions(){let e=this.numberFormatter.resolvedOptions();return!Re&&this.options.signDisplay!=null&&(e={...e,signDisplay:this.options.signDisplay}),!le&&this.options.style==="unit"&&(e={...e,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),e}constructor(e,t={}){this.numberFormatter=Dn(e,t),this.options=t}}function Dn(r,e={}){let{numberingSystem:t}=e;if(t&&r.indexOf("-u-nu-")===-1&&(r=`${r}-u-nu-${t}`),e.style==="unit"&&!le){var n;let{unit:i,unitDisplay:c="short"}=e;if(!i)throw new Error('unit option must be provided with style: "unit"');if(!(!((n=Xr[i])===null||n===void 0)&&n[c]))throw new Error(`Unsupported unit ${i} with unitDisplay = ${c}`);e={...e,style:"decimal"}}let a=r+(e?Object.entries(e).sort((i,c)=>i[0]<c[0]?-1:1).join():"");if(Ie.has(a))return Ie.get(a);let o=new Intl.NumberFormat(r,e);return Ie.set(a,o),o}function wn(r,e,t){if(e==="auto")return r.format(t);if(e==="never")return r.format(Math.abs(t));{let n=!1;if(e==="always"?n=t>0||Object.is(t,0):e==="exceptZero"&&(Object.is(t,-0)||Object.is(t,0)?t=Math.abs(t):n=t>0),n){let a=r.format(-t),o=r.format(t),i=a.replace(o,"").replace(/\u200e|\u061C/,"");return[...i].length!==1&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),a.replace(o,"!!!").replace(i,"+").replace("!!!",o)}else return r.format(t)}}const Mn=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),vn=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function In(r){if(Intl.Locale){let t=new Intl.Locale(r).maximize().script;return Mn.has(t)}let e=r.split("-")[0];return vn.has(e)}function et(){let r=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([r])}catch{r="en-US"}return{locale:r,direction:In(r)?"rtl":"ltr"}}let Ye=et(),W=new Set;function ar(){Ye=et();for(let r of W)r(Ye)}function En(){let r=nt(),[e,t]=p.useState(Ye);return p.useEffect(()=>(W.size===0&&window.addEventListener("languagechange",ar),W.add(t),()=>{W.delete(t),W.size===0&&window.removeEventListener("languagechange",ar)}),[]),r?{locale:"en-US",direction:"ltr"}:e}const xn=tt.createContext(null);function be(){let r=En();return p.useContext(xn)||r}const or=new WeakMap;function Cn(r){let e=or.get(r);return e||(e=new at(r),or.set(r,e)),e}function Un(r){let{locale:e}=be(),t=p.useMemo(()=>Cn(r),[r]);return p.useMemo(()=>new ct(e,t),[e,t])}function Fn(r){let e=p.useRef(null);r&&e.current&&An(r,e.current)&&(r=e.current),e.current=r;let{locale:t}=be();return p.useMemo(()=>new jr(t,r),[t,r])}function An(r,e){if(r===e)return!0;let t=Object.keys(r),n=Object.keys(e);if(t.length!==n.length)return!1;for(let a of t)if(e[a]!==r[a])return!1;return!0}function Bn(r={}){let{locale:e}=be();return p.useMemo(()=>new pn(e,r),[e,r])}let Ee=new Map;function Sn(r){let{locale:e}=be(),t=e+(r?Object.entries(r).sort((a,o)=>a[0]<o[0]?-1:1).join():"");if(Ee.has(t))return Ee.get(t);let n=new Intl.Collator(e,r);return Ee.set(t,n),n}function Jn(r){let e=Sn({usage:"search",...r}),t=p.useCallback((o,i)=>i.length===0?!0:(o=o.normalize("NFC"),i=i.normalize("NFC"),e.compare(o.slice(0,i.length),i)===0),[e]),n=p.useCallback((o,i)=>i.length===0?!0:(o=o.normalize("NFC"),i=i.normalize("NFC"),e.compare(o.slice(-i.length),i)===0),[e]),a=p.useCallback((o,i)=>{if(i.length===0)return!0;o=o.normalize("NFC"),i=i.normalize("NFC");let c=0,s=i.length;for(;c+s<=o.length;c++){let l=o.slice(c,c+s);if(e.compare(i,l)===0)return!0}return!1},[e]);return p.useMemo(()=>({startsWith:t,endsWith:n,contains:a}),[t,n,a])}export{Un as $,z as A,C as B,Dt as C,pt as D,sr as E,Jn as F,u as G,Sn as H,Ln as I,Bn as J,Ht as a,$n as b,be as c,Fn as d,hr as e,fr as f,cr as g,F as h,dr as i,ht as j,mt as k,jr as l,y as m,Dr as n,wt as o,Oe as p,Et as q,It as r,H as s,D as t,ut as u,j as v,vt as w,ct as x,pn as y,at as z};
