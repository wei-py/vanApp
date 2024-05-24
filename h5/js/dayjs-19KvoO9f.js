var R=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function K(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}function tt(l){if(l.__esModule)return l;var Y=l.default;if(typeof Y=="function"){var g=function m(){return this instanceof m?Reflect.construct(Y,arguments,this.constructor):Y.apply(this,arguments)};g.prototype=Y.prototype}else g={};return Object.defineProperty(g,"__esModule",{value:!0}),Object.keys(l).forEach(function(m){var H=Object.getOwnPropertyDescriptor(l,m);Object.defineProperty(g,m,H.get?H:{enumerable:!0,get:function(){return l[m]}})}),g}var V={exports:{}};(function(l,Y){(function(g,m){l.exports=m()})(R,function(){var g=1e3,m=6e4,H=36e5,F="millisecond",O="second",_="minute",j="hour",M="day",W="week",p="month",E="quarter",v="year",k="date",J="Invalid Date",q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,B=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,G={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},P=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},Q={s:P,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+P(r,2,"0")+":"+P(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,p),i=t-e<0,u=n.clone().add(r+(i?-1:1),p);return+(-(r+(t-e)/(i?e-u:u-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:p,y:v,w:W,d:M,D:k,h:j,m:_,s:O,ms:F,Q:E}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},x="en",w={};w[x]=G;var Z="$isDayjsObject",U=function(s){return s instanceof I||!(!s||!s[Z])},A=function s(n,t,r){var e;if(!n)return x;if(typeof n=="string"){var i=n.toLowerCase();w[i]&&(e=i),t&&(w[i]=t,e=i);var u=n.split("-");if(!e&&u.length>1)return s(u[0])}else{var o=n.name;w[o]=n,e=o}return!r&&e&&(x=e),e||!r&&x},f=function(s,n){if(U(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new I(t)},a=Q;a.l=A,a.i=U,a.w=function(s,n){return f(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var I=function(){function s(t){this.$L=A(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[Z]=!0}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,i=r.utc;if(e===null)return new Date(NaN);if(a.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var u=e.match(q);if(u){var o=u[2]-1||0,c=(u[7]||"0").substring(0,3);return i?new Date(Date.UTC(u[1],o,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)):new Date(u[1],o,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return a},n.isValid=function(){return this.$d.toString()!==J},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return a.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,i=!!a.u(r)||r,u=a.p(t),o=function(b,$){var D=a.w(e.$u?Date.UTC(e.$y,$,b):new Date(e.$y,$,b),e);return i?D:D.endOf(M)},c=function(b,$){return a.w(e.toDate()[b].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice($)),e)},h=this.$W,d=this.$M,y=this.$D,T="set"+(this.$u?"UTC":"");switch(u){case v:return i?o(1,0):o(31,11);case p:return i?o(1,d):o(0,d+1);case W:var S=this.$locale().weekStart||0,C=(h<S?h+7:h)-S;return o(i?y-C:y+(6-C),d);case M:case k:return c(T+"Hours",0);case j:return c(T+"Minutes",1);case _:return c(T+"Seconds",2);case O:return c(T+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,i=a.p(t),u="set"+(this.$u?"UTC":""),o=(e={},e[M]=u+"Date",e[k]=u+"Date",e[p]=u+"Month",e[v]=u+"FullYear",e[j]=u+"Hours",e[_]=u+"Minutes",e[O]=u+"Seconds",e[F]=u+"Milliseconds",e)[i],c=i===M?this.$D+(r-this.$W):r;if(i===p||i===v){var h=this.clone().set(k,1);h.$d[o](c),h.init(),this.$d=h.set(k,Math.min(this.$D,h.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[a.p(t)]()},n.add=function(t,r){var e,i=this;t=Number(t);var u=a.p(r),o=function(d){var y=f(i);return a.w(y.date(y.date()+Math.round(d*t)),i)};if(u===p)return this.set(p,this.$M+t);if(u===v)return this.set(v,this.$y+t);if(u===M)return o(1);if(u===W)return o(7);var c=(e={},e[_]=m,e[j]=H,e[O]=g,e)[u]||1,h=this.$d.getTime()+t*c;return a.w(h,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||J;var i=t||"YYYY-MM-DDTHH:mm:ssZ",u=a.z(this),o=this.$H,c=this.$m,h=this.$M,d=e.weekdays,y=e.months,T=e.meridiem,S=function($,D,L,N){return $&&($[D]||$(r,i))||L[D].slice(0,N)},C=function($){return a.s(o%12||12,$,"0")},b=T||function($,D,L){var N=$<12?"AM":"PM";return L?N.toLowerCase():N};return i.replace(B,function($,D){return D||function(L){switch(L){case"YY":return String(r.$y).slice(-2);case"YYYY":return a.s(r.$y,4,"0");case"M":return h+1;case"MM":return a.s(h+1,2,"0");case"MMM":return S(e.monthsShort,h,y,3);case"MMMM":return S(y,h);case"D":return r.$D;case"DD":return a.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return S(e.weekdaysMin,r.$W,d,2);case"ddd":return S(e.weekdaysShort,r.$W,d,3);case"dddd":return d[r.$W];case"H":return String(o);case"HH":return a.s(o,2,"0");case"h":return C(1);case"hh":return C(2);case"a":return b(o,c,!0);case"A":return b(o,c,!1);case"m":return String(c);case"mm":return a.s(c,2,"0");case"s":return String(r.$s);case"ss":return a.s(r.$s,2,"0");case"SSS":return a.s(r.$ms,3,"0");case"Z":return u}return null}($)||u.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var i,u=this,o=a.p(r),c=f(t),h=(c.utcOffset()-this.utcOffset())*m,d=this-c,y=function(){return a.m(u,c)};switch(o){case v:i=y()/12;break;case p:i=y();break;case E:i=y()/3;break;case W:i=(d-h)/6048e5;break;case M:i=(d-h)/864e5;break;case j:i=d/H;break;case _:i=d/m;break;case O:i=d/g;break;default:i=d}return e?i:a.a(i)},n.daysInMonth=function(){return this.endOf(p).$D},n.$locale=function(){return w[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),i=A(t,r,!0);return i&&(e.$L=i),e},n.clone=function(){return a.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),z=I.prototype;return f.prototype=z,[["$ms",F],["$s",O],["$m",_],["$H",j],["$W",M],["$M",p],["$y",v],["$D",k]].forEach(function(s){z[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),f.extend=function(s,n){return s.$i||(s(n,I,f),s.$i=!0),f},f.locale=A,f.isDayjs=U,f.unix=function(s){return f(1e3*s)},f.en=w[x],f.Ls=w,f.p={},f})})(V);var X=V.exports;const et=K(X);export{tt as a,R as c,et as d,K as g};
