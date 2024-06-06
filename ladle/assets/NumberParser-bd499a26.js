var V=Object.defineProperty;var U=(s,t,e)=>t in s?V(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var u=(s,t,e)=>(U(s,typeof t!="symbol"?t+"":t,e),e);const f=new Map;let y=!1;try{y=new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay==="exceptZero"}catch{}let p=!1;try{p=new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style==="unit"}catch{}const E={degree:{narrow:{default:"°","ja-JP":" 度","zh-TW":"度","sl-SI":" °"}}};class K{constructor(t,e={}){u(this,"numberFormatter");u(this,"options");this.numberFormatter=W(t,e),this.options=e}format(t){var r;let e="";if(!y&&this.options.signDisplay!=null?e=z(this.numberFormatter,this.options.signDisplay,t):e=this.numberFormatter.format(t),this.options.style==="unit"&&!p){const o=this.resolvedOptions(),n=o.unit,a=o.unitDisplay??"short",l=o.locale,m=(r=E[n])==null?void 0:r[a];e+=m[l]||m.default}return e}formatToParts(t){return this.numberFormatter.formatToParts(t)}formatRange(t,e){if(typeof this.numberFormatter.formatRange=="function")return this.numberFormatter.formatRange(t,e);if(e<t)throw new RangeError("End date must be >= start date");return`${this.format(t)} – ${this.format(e)}`}formatRangeToParts(t,e){if(typeof this.numberFormatter.formatRangeToParts=="function")return this.numberFormatter.formatRangeToParts(t,e);if(e<t)throw new RangeError("End date must be >= start date");const r=this.numberFormatter.formatToParts(t),o=this.numberFormatter.formatToParts(e);return[...r.map(n=>({...n,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...o.map(n=>({...n,source:"endRange"}))]}resolvedOptions(){let t=this.numberFormatter.resolvedOptions();return!y&&this.options.signDisplay!=null&&(t={...t,signDisplay:this.options.signDisplay}),!p&&this.options.style==="unit"&&(t={...t,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),t}}function W(s,t={}){var n;const{numberingSystem:e}=t;if(e&&s.indexOf("-u-nu-")===-1&&(s=`${s}-u-nu-${e}`),t.style==="unit"&&!p){const a=t.unit,l=t.unitDisplay??"short";if(!a)throw new Error('unit option must be provided with style: "unit"');if(!((n=E[a])!=null&&n[l]))throw new Error(`Unsupported unit ${a} with unitDisplay = ${l}`);t={...t,style:"decimal"}}const r=s+(t?Object.entries(t).sort((a,l)=>a[0]<l[0]?-1:1).join():"");if(f.has(r))return f.get(r);const o=new Intl.NumberFormat(s,t);return f.set(r,o),o}function z(s,t,e){if(t==="auto")return s.format(e);if(t==="never")return s.format(Math.abs(e));{let r=!1;if(t==="always"?r=e>0||Object.is(e,0):t==="exceptZero"&&(Object.is(e,-0)||Object.is(e,0)?e=Math.abs(e):r=e>0),r){const o=s.format(-e),n=s.format(e),a=o.replace(n,"").replace(/\u200e|\u061C/,"");return[...a].length!==1&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),o.replace(n,"!!!").replace(a,"+").replace("!!!",n)}else return s.format(e)}}const _=new RegExp("^.*\\(.*\\).*$"),A=["latn","arab","hanidec"];class Y{constructor(t,e={}){u(this,"locale");u(this,"options");this.locale=t,this.options=e}parse(t){return g(this.locale,this.options,t).parse(t)}isValidPartialNumber(t,e,r){return g(this.locale,this.options,t).isValidPartialNumber(t,e,r)}getNumberingSystem(t){return g(this.locale,this.options,t).options.numberingSystem}}const F=new Map;function g(s,t,e){const r=R(s,t);if(!s.includes("-nu-")&&!r.isValidPartialNumber(e)){for(const o of A)if(o!==r.options.numberingSystem){const n=R(s+(s.includes("-u-")?"-nu-":"-u-nu-")+o,t);if(n.isValidPartialNumber(e))return n}}return r}function R(s,t){const e=s+(t?Object.entries(t).sort((o,n)=>o[0]<n[0]?-1:1).join():"");let r=F.get(e);return r||(r=new G(s,t),F.set(e,r)),r}class G{constructor(t,e={}){u(this,"formatter");u(this,"options");u(this,"symbols");this.formatter=new Intl.NumberFormat(t,e),this.options=this.formatter.resolvedOptions(),this.symbols=L(this.formatter,this.options,e)}parse(t){let e=this.sanitize(t);e=c(e,this.symbols.group,"").replace(this.symbols.decimal,".").replace(this.symbols.minusSign,"-").replace(this.symbols.numeral,this.symbols.index);let r=e?+e:NaN;return isNaN(r)?NaN:(this.options.currencySign==="accounting"&&_.test(t)&&(r=-1*r),this.options.style==="percent"&&(r/=100,r=+r.toFixed((this.options.maximumFractionDigits??0)+2)),r)}sanitize(t){return t=t.replace(this.symbols.literals,""),t=t.replace("-",this.symbols.minusSign),this.options.numberingSystem==="arab"&&(t=t.replace(",",this.symbols.decimal),t=t.replace(String.fromCharCode(1548),this.symbols.decimal),t=c(t,".",this.symbols.group)),this.options.locale==="fr-FR"&&(t=c(t,".",String.fromCharCode(8239))),t}isValidPartialNumber(t,e=-1/0,r=1/0){return t=this.sanitize(t),t.startsWith(this.symbols.minusSign)&&e<0?t=t.slice(this.symbols.minusSign.length):this.symbols.plusSign&&t.startsWith(this.symbols.plusSign)&&r>0&&(t=t.slice(this.symbols.plusSign.length)),t.startsWith(this.symbols.group)?!1:(t=c(t,this.symbols.group,"").replace(this.symbols.numeral,"").replace(this.symbols.decimal,""),t.length===0)}}const D=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]);function L(s,t,e){var S,w,N,P;const r=s.formatToParts(-10000.111),o=s.formatToParts(10000.111),n=s.formatToParts(1),a=((S=r.find(i=>i.type==="minusSign"))==null?void 0:S.value)??"-";let l=(w=o.find(i=>i.type==="plusSign"))==null?void 0:w.value;!l&&((e==null?void 0:e.signDisplay)==="exceptZero"||(e==null?void 0:e.signDisplay)==="always")&&(l="+");const m=(N=r.find(i=>i.type==="decimal"))==null?void 0:N.value,I=(P=r.find(i=>i.type==="group"))==null?void 0:P.value,T=r.filter(i=>!D.has(i.type)).map(i=>x(i.value)),j=n.filter(i=>!D.has(i.type)).map(i=>x(i.value)),b=[...new Set([...j,...T])].sort((i,h)=>h.length-i.length),C=b.length===0?new RegExp("[\\p{White_Space}]","gu"):new RegExp(`${b.join("|")}|[\\p{White_Space}]`,"gu"),d=[...new Intl.NumberFormat(t.locale,{useGrouping:!1}).format(9876543210)].reverse(),$=new Map(d.map((i,h)=>[i,h])),M=new RegExp(`[${d.join("")}]`,"g");return{minusSign:a,plusSign:l,decimal:m,group:I,literals:C,numeral:M,index:i=>String($.get(i))}}function c(s,t,e){return s.replaceAll?s.replaceAll(t,e):s.split(t).join(e)}function x(s){return s.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}export{K as N,Y as a};