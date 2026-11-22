import{i as Pm,S as Dm,s as Lm,c as Im}from"./easter-eggs-xKo0Qe1U.js";function Wi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function bd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Na={duration:.5,overwrite:!1,delay:0},Yu,cn,Rt,ci=1e8,yt=1/ci,Rc=Math.PI*2,Um=Rc/4,Fm=0,Td=Math.sqrt,Nm=Math.cos,Om=Math.sin,nn=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},Qi=function(e){return typeof e=="number"},qu=function(e){return typeof e>"u"},Ni=function(e){return typeof e=="object"},Un=function(e){return e!==!1},Zu=function(){return typeof window<"u"},no=function(e){return Ut(e)||nn(e)},wd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xn=Array.isArray,Bm=/random\([^)]+\)/g,zm=/,\s*/g,Lh=/(?:-?\.?\d|\.)+/gi,Ad=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Us=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ul=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Rd=/[+-]=-?[.\d]+/,km=/[^,'"\[\]\s]+/gi,Hm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,Ti,Cc,$u,ei={},al={},Cd,Pd=function(e){return(al=Xs(e,ei))&&kn},ju=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Oa=function(e,t){return!t&&console.warn(e)},Dd=function(e,t){return e&&(ei[e]=t)&&al&&(al[e]=t)||ei},Ba=function(){return 0},Vm={suppressEvents:!0,isStart:!0,kill:!1},Wo={suppressEvents:!0,kill:!1},Gm={suppressEvents:!0},Ku={},br=[],Pc={},Ld,Yn={},Fl={},Ih=30,Xo=[],Ju="",Qu=function(e){var t=e[0],n,i;if(Ni(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Xo.length;i--&&!Xo[i].targetTest(t););n=Xo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ep(e[i],n)))||e.splice(i,1);return e},Jr=function(e){return e._gsap||Qu(ui(e))[0]._gsap},Id=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():qu(n)&&e.getAttribute&&e.getAttribute(t)||n},Fn=function(e,t){return(e=e.split(",")).forEach(t)||e},zt=function(e){return Math.round(e*1e5)/1e5||0},Ct=function(e){return Math.round(e*1e7)/1e7||0},Os=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Wm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ol=function(){var e=br.length,t=br.slice(0),n,i;for(Pc={},br.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},eh=function(e){return!!(e._initted||e._startAt||e.add)},Ud=function(e,t,n,i){br.length&&!cn&&ol(),e.render(t,n,!!(cn&&t<0&&eh(e))),br.length&&!cn&&ol()},Fd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(km).length<2?t:nn(e)?e.trim():e},Nd=function(e){return e},ti=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Xm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Xs=function(e,t){for(var n in t)e[n]=t[n];return e},Uh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ni(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ll=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ta=function(e){var t=e.parent||Pt,n=e.keyframes?Xm(xn(e.keyframes)):ti;if(Un(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ym=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Od=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},wl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Cr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},qm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Dc=function(e,t,n,i){return e._startAt&&(cn?e._startAt.revert(Wo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Zm=function r(e){return!e||e._ts&&r(e.parent)},Fh=function(e){return e._repeat?Ys(e._tTime,e=e.duration()+e._rDelay)*e:0},Ys=function(e,t){var n=Math.floor(e=Ct(e/t));return e&&n===e?n-1:n},cl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Al=function(e){return e._end=Ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||yt)||0))},Rl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Al(e),n._dirty||Qr(n,e)),e},Bd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=cl(e.rawTime(),t),(!t._dur||ja(0,t.totalDuration(),n)-t._tTime>yt)&&t.render(n,!0)),Qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-yt}},Ri=function(e,t,n,i){return t.parent&&Cr(t),t._start=Ct((Qi(n)?n:!n&&ul(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Pt?ri(e,n,t):e._time)+t._delay),t._end=Ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Od(e,t,"_first","_last",e._sort?"_start":0),ul(t)||(e._recent=t),i||Bd(e,t),e._ts<0&&Rl(e,e._tTime),e},zd=function(e,t){return(ei.ScrollTrigger||ju("scrollTrigger",t))&&ei.ScrollTrigger.create(t,e)},kd=function(e,t,n,i,s){if(nh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ld!==$n.frame)return br.push(e),e._lazy=[s,i],1},$m=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ul=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},jm=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&$m(e)&&!(!e._initted&&ul(e))||(e._ts<0||e._dp._ts<0)&&!ul(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=ja(0,e._tDur,t),u=Ys(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ys(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||cn||i||e._zTime===yt||!t&&e._zTime){if(!e._initted&&kd(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?yt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Dc(e,t,n,!0),e._onUpdate&&!n&&jn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&jn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Cr(e,1),!n&&!cn&&(jn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Km=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},qs=function(e,t,n,i){var s=e._repeat,a=Ct(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ct(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Rl(e,e._tTime=e._tDur*o),e.parent&&Al(e),n||Qr(e.parent,e),e},Nh=function(e){return e instanceof Dn?Qr(e):qs(e,e._dur)},Jm={_start:0,endTime:Ba,totalDuration:Ba},ri=function r(e,t,n){var i=e.labels,s=e._recent||Jm,a=e.duration()>=ci?s.endTime(!1):e._dur,o,l,c;return nn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(xn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},wa=function(e,t,n){var i=Qi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Un(l.vars.inherit)&&l.parent;a.immediateRender=Un(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Gt(t[0],a,t[s+1])},Ur=function(e,t){return e||e===0?t(e):t},ja=function(e,t,n){return n<e?e:n>t?t:n},gn=function(e,t){return!nn(e)||!(t=Hm.exec(e))?"":t[1]},Qm=function(e,t,n){return Ur(n,function(i){return ja(e,t,i)})},Lc=[].slice,Hd=function(e,t){return e&&Ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ni(e[0]))&&!e.nodeType&&e!==Ti},e_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return nn(i)&&!t||Hd(i,1)?(s=n).push.apply(s,ui(i)):n.push(i)})||n},ui=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):nn(e)&&!n&&(Cc||!Zs())?Lc.call((t||$u).querySelectorAll(e),0):xn(e)?e_(e,n):Hd(e)?Lc.call(e,0):e?[e]:[]},Ic=function(e){return e=ui(e)[0]||Oa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ui(t,n.querySelectorAll?n:n===e?Oa("Invalid scope")||$u.createElement("div"):e)}},Vd=function(e){return e.sort(function(){return .5-Math.random()})},Gd=function(e){if(Ut(e))return e;var t=Ni(e)?e:{each:e},n=es(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return nn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(f,h,p){var g=(p||t).length,_=a[g],m,x,E,S,A,b,w,v,y;if(!_){if(y=t.grid==="auto"?0:(t.grid||[1,ci])[1],!y){for(w=-ci;w<(w=p[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(_=a[g]=[],m=l?Math.min(y,g)*u-.5:i%y,x=y===ci?0:l?g*d/y-.5:i/y|0,w=0,v=ci,b=0;b<g;b++)E=b%y-m,S=x-(b/y|0),_[b]=A=c?Math.abs(c==="y"?S:E):Td(E*E+S*S),A>w&&(w=A),A<v&&(v=A);i==="random"&&Vd(_),_.max=w-v,_.min=v,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),_.b=g<0?s-g:s,_.u=gn(t.amount||t.each)||0,n=n&&g<0?d_(n):n}return g=(_[f]-_.min)/_.max||0,Ct(_.b+(n?n(g):g)*_.v)+_.u}},Uc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Qi(n)?0:gn(n))}},Wd=function(e,t){var n=xn(e),i,s;return!n&&Ni(e)&&(i=n=e.radius||ci,e.values?(e=ui(e.values),(s=!Qi(e[0]))&&(i*=i)):e=Uc(e.increment)),Ur(t,n?Ut(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ci,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-o,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-o),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:a,s||u===a||Qi(a)?u:u+gn(a)}:Uc(e))},Xd=function(e,t,n,i){return Ur(xn(e)?!t:n===!0?!!(n=0):!i,function(){return xn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},t_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},n_=function(e,t){return function(n){return e(parseFloat(n))+(t||gn(n))}},i_=function(e,t,n){return qd(e,t,0,1,n)},Yd=function(e,t,n){return Ur(n,function(i){return e[~~t(i)]})},r_=function r(e,t,n){var i=t-e;return xn(e)?Yd(e,r(0,e.length),t):Ur(n,function(s){return(i+(s-e)%i)%i+e})},s_=function r(e,t,n){var i=t-e,s=i*2;return xn(e)?Yd(e,r(0,e.length-1),t):Ur(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},za=function(e){return e.replace(Bm,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(zm);return Xd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},qd=function(e,t,n,i,s){var a=t-e,o=i-n;return Ur(s,function(l){return n+((l-e)/a*o||0)})},a_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=nn(e),o={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(xn(e)&&!xn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(p){p*=d;var g=Math.min(f,~~p);return u[g](p-g)},n=t}else i||(e=Xs(xn(e)?[]:{},e));if(!u){for(l in t)th.call(o,e,l,"get",t[l]);s=function(p){return sh(p,o)||(a?e.p:e)}}}return Ur(n,s)},Oh=function(e,t,n){var i=e.labels,s=ci,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},jn=function(e,t,n){var i=e.vars,s=i[t],a=Rt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&br.length&&ol(),o&&(Rt=o),u=l?s.apply(c,l):s.call(c),Rt=a,u},pa=function(e){return Cr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!cn),e.progress()<1&&jn(e,"onInterrupt"),e},Fs,Zd=[],$d=function(e){if(e)if(e=!e.name&&e.default||e,Zu()||e.headless){var t=e.name,n=Ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ba,render:sh,add:th,kill:E_,modifier:y_,rawVars:0},a={targetTest:0,get:0,getSetter:rh,aliases:{},register:0};if(Zs(),e!==i){if(Yn[t])return;ti(i,ti(ll(e,s),a)),Xs(i.prototype,Xs(s,ll(e,a))),Yn[i.prop=t]=i,e.targetTest&&(Xo.push(i),Ku[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Dd(t,i),e.register&&e.register(kn,i,Nn)}else Zd.push(e)},bt=255,ma={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},Nl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},jd=function(e,t,n){var i=e?Qi(e)?[e>>16,e>>8&bt,e&bt]:0:ma.black,s,a,o,l,c,u,d,f,h,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ma[e])i=ma[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&bt,i&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Lh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Nl(l+1/3,s,a),i[1]=Nl(l,s,a),i[2]=Nl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Ad),n&&i.length<4&&(i[3]=1),i}else i=e.match(Lh)||ma.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/bt,a=i[1]/bt,o=i[2]/bt,d=Math.max(s,a,o),f=Math.min(s,a,o),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Kd=function(e){var t=[],n=[],i=-1;return e.split(Tr).forEach(function(s){var a=s.match(Us)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Bh=function(e,t,n){var i="",s=(e+i).match(Tr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=jd(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Kd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Tr,"1").split(Us),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Tr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},Tr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ma)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),o_=/hsl[a]?\(/,Jd=function(e){var t=e.join(" "),n;if(Tr.lastIndex=0,Tr.test(t))return n=o_.test(t),e[1]=Bh(e[1],n),e[0]=Bh(e[0],n,Kd(e[1])),!0},ka,$n=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,f,h,p=function g(_){var m=r()-i,x=_===!0,E,S,A,b;if((m>e||m<0)&&(n+=m-t),i+=m,A=i-n,E=A-a,(E>0||x)&&(b=++d.frame,f=A-d.time*1e3,d.time=A=A/1e3,a+=E+(E>=s?0:s-E),S=1),x||(l=c(g)),S)for(h=0;h<o.length;h++)o[h](A,f,b,_)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){Cd&&(!Cc&&Zu()&&(Ti=Cc=window,$u=Ti.document||{},ei.gsap=kn,(Ti.gsapVersions||(Ti.gsapVersions=[])).push(kn.version),Pd(al||Ti.GreenSockGlobals||!Ti.gsap&&Ti||{}),Zd.forEach($d)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,a-d.time*1e3+1|0)},ka=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ka=0,c=Ba},lagSmoothing:function(_,m){e=_||1/0,t=Math.min(m||33,e)},fps:function(_){s=1e3/(_||240),a=d.time*1e3+s},add:function(_,m,x){var E=m?function(S,A,b,w){_(S,A,b,w),d.remove(E)}:_;return d.remove(_),o[x?"unshift":"push"](E),Zs(),E},remove:function(_,m){~(m=o.indexOf(_))&&o.splice(m,1)&&h>=m&&h--},_listeners:o},d})(),Zs=function(){return!ka&&$n.wake()},lt={},l_=/^[\d.\-M][\d.\-,\s]/,c_=/["']/g,u_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(c_,"").trim():+c,i=l.substr(o+1).trim();return t},h_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},f_=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[u_(t[1])]:h_(e).split(",").map(Fd)):lt._CE&&l_.test(e)?lt._CE("",e):n},d_=function(e){return function(t){return 1-e(1-t)}},es=function(e,t){return e&&(Ut(e)?e:lt[e]||f_(e))||t},us=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Fn(e,function(o){lt[o]=ei[o]=s,lt[a=o.toLowerCase()]=n;for(var l in s)lt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[o+"."+l]=s[l]}),s},Qd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ol=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Rc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Om((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Qd(o);return s=Rc/s,l.config=function(c,u){return r(e,c,u)},l},Bl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Qd(n);return i.config=function(s){return r(e,s)},i};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;us(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;us("Elastic",Ol("in"),Ol("out"),Ol());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};us("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);us("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});us("Circ",function(r){return-(Td(1-r*r)-1)});us("Sine",function(r){return r===1?1:-Nm(r*Um)+1});us("Back",Bl("in"),Bl("out"),Bl());lt.SteppedEase=lt.steps=ei.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-yt;return function(o){return((i*ja(0,a,o)|0)+s)*n}}};Na.ease=lt["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ju+=r+","+r+"Params,"});var ep=function(e,t){this.id=Fm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Id,this.set=t?t.getSetter:rh},Ha=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,qs(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),ka||$n.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Zs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Rl(this,n),!s._dp||s.parent||Bd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===yt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ud(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ys(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-yt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?cl(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-yt?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(ja(-Math.abs(this._delay),o,s),i!==!1),Al(this),qm(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Zs(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==yt,a;if(s)for(this._tTime-=yt,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+yt){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=Ct(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ri(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Un(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?cl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Gm);var i=cn;return cn=n,eh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ri(this,n),Un(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Un(i)),this._dur||(this._zTime=-yt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-yt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-yt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-yt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ut(n)?n:Nd,l=function(){var u=i.then;i.then=null,s&&s(),Ut(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){pa(this)},r})();ti(Ha.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-yt,_prom:0,_ps:!1,_rts:1});var Dn=(function(r){bd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Un(n.sortChildren),Pt&&Ri(n.parent||Pt,Wi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&zd(Wi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return wa(0,arguments,this),this},t.from=function(i,s,a){return wa(1,arguments,this),this},t.fromTo=function(i,s,a,o){return wa(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Ta(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Gt(i,s,ri(this,a),1),this},t.call=function(i,s,a){return Ri(this,Gt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Gt(i,a,ri(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Ta(a).immediateRender=Un(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,Ta(o).immediateRender=Un(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ct(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,p,g,_,m,x,E,S,A,b,w;if(this!==Pt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,S=this._start,E=this._ts,m=!E,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,a);if(f=Ct(u%_),u===l?(g=this._repeat,f=c):(A=Ct(u/_),g=~~A,g&&g===A&&(f=c,g--),f>c&&(f=c)),A=Ys(this._tTime,_),!o&&this._tTime&&A!==g&&this._tTime-A*_-this._dur<=0&&(A=g),b&&g&1&&(f=c-f,w=1),g!==A&&!this._lock){var v=b&&A&1,y=v===(b&&g&1);if(g<A&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(w?0:Ct(g*_)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&jn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,A=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Km(this,Ct(o),Ct(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!A&&(jn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(h=this._first;h;){if(p=h._next,(h._act||f>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,a),f!==this._time||!this._ts&&!m){x=0,p&&(u+=this._zTime=-yt);break}}h=p}else{h=this._last;for(var L=i<0?i:f;h;){if(p=h._prev,(h._act||L<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(L-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(L-h._start)*h._ts,s,a||cn&&eh(h)),f!==this._time||!this._ts&&!m){x=0,p&&(u+=this._zTime=L?-yt:yt);break}}h=p}}if(x&&!s&&(this.pause(),x.render(f>=o?0:-yt)._zTime=f>=o?1:-1,this._ts))return this._start=S,Al(this),this.render(i,s,a);this._onUpdate&&!s&&jn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Cr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(jn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Qi(s)||(s=ri(this,s,i)),!(i instanceof Ha)){if(xn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(nn(i))return this.addLabel(i,s);if(Ut(i))i=Gt.delayedCall(0,i);else return this}return this!==i?Ri(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ci);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Gt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return nn(i)?this.removeLabel(i):Ut(i)?this.killTweensOf(i):(i.parent===this&&wl(this,i),i===this._recent&&(this._recent=this._last),Qr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ri(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Gt.delayedCall(0,s||Ba,a);return o.data="isPause",this._hasPause=1,Ri(this,o,ri(this,i))},t.removePause=function(i){var s=this._first;for(i=ri(this,i);s;)s._start===i&&s.data==="isPause"&&Cr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)_r!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ui(i),l=this._first,c=Qi(s),u;l;)l instanceof Gt?Wm(l._targets,o)&&(c?(!_r||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ri(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,p=Gt.to(a,ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||yt,onStart:function(){if(a.pause(),!h){var _=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==_&&qs(p,_,0,1).render(p._time,!0,!0),h=1}u&&u.apply(p,d||[])}},s));return f?p.render(0):p},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ti({startAt:{time:ri(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Oh(this,ri(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Oh(this,ri(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+yt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ct(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Qr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=ci,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ri(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ct(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;qs(a,a===Pt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Pt._ts&&(Ud(Pt,cl(i,Pt)),Ld=$n.frame),$n.frame>=Ih){Ih+=Qn.autoSleep||120;var s=Pt._first;if((!s||!s._ts)&&Qn.autoSleep&&$n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$n.sleep()}}},e})(Ha);ti(Dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var p_=function(e,t,n,i,s,a,o){var l=new Nn(this._pt,e,t,0,1,sp,null,s),c=0,u=0,d,f,h,p,g,_,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=za(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),f=n.match(Ul)||[];d=Ul.exec(i);)p=d[0],g=i.substring(c,d.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),p!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:p.charAt(1)==="="?Os(_,p)-_:parseFloat(p)-_,m:h&&h<4?Math.round:0},c=Ul.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Rd.test(i)||m)&&(l.e=0),this._pt=l,l},th=function(e,t,n,i,s,a,o,l,c,u){Ut(i)&&(i=i(s||0,e,a));var d=e[t],f=n!=="get"?n:Ut(d)?c?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Ut(d)?c?x_:ip:ih,p;if(nn(i)&&(~i.indexOf("random(")&&(i=za(i)),i.charAt(1)==="="&&(p=Os(f,i)+(gn(f)||0),(p||p===0)&&(i=p))),!u||f!==i||Fc)return!isNaN(f*i)&&i!==""?(p=new Nn(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?S_:rp,0,h),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!d&&!(t in e)&&ju(t,i),p_.call(this,e,t,f,i,h,l||Qn.stringFilter,c))},m_=function(e,t,n,i,s){if(Ut(e)&&(e=Aa(e,s,t,n,i)),!Ni(e)||e.style&&e.nodeType||xn(e)||wd(e))return nn(e)?Aa(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Aa(e[o],s,t,n,i);return a},tp=function(e,t,n,i,s,a){var o,l,c,u;if(Yn[e]&&(o=new Yn[e]).init(s,o.rawVars?t[e]:m_(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Nn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Fs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},_r,Fc,nh=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,h=i.autoRevert,p=e._dur,g=e._startAt,_=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:_,E=e._overwrite==="auto"&&!Yu,S=e.timeline,A=i.easeReverse||d,b,w,v,y,L,D,N,O,V,X,z,U,F;if(S&&(!f||!s)&&(s="none"),e._ease=es(s,Na.ease),e._rEase=A&&(es(A)||e._ease),e._from=!S&&!!i.runBackwards,e._from&&(e.ratio=1),!S||f&&!i.stagger){if(O=_[0]?Jr(_[0]).harness:0,U=O&&i[O.prop],b=ll(i,Ku),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!h?g.render(-1,!0):g.revert(u&&p?Wo:Vm),g._lazy=0),a){if(Cr(e._startAt=Gt.set(_,ti({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Un(l),startAt:null,delay:0,onUpdate:c&&function(){return jn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn||!o&&!h)&&e._startAt.revert(Wo),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!g){if(t&&(o=!1),v=ti({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Un(l),immediateRender:o,stagger:0,parent:m},b),U&&(v[O.prop]=U),Cr(e._startAt=Gt.set(_,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn?e._startAt.revert(Wo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,yt,yt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Un(l)||l&&!p,w=0;w<_.length;w++){if(L=_[w],N=L._gsap||Qu(_)[w]._gsap,e._ptLookup[w]=X={},Pc[N.id]&&br.length&&ol(),z=x===_?w:x.indexOf(L),O&&(V=new O).init(L,U||b,e,z,x)!==!1&&(e._pt=y=new Nn(e._pt,L,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(k){X[k]=y}),V.priority&&(D=1)),!O||U)for(v in b)Yn[v]&&(V=tp(v,b,e,z,L,x))?V.priority&&(D=1):X[v]=y=th.call(e,L,v,"get",b[v],z,x,0,i.stringFilter);e._op&&e._op[w]&&e.kill(L,e._op[w]),E&&e._pt&&(_r=e,Pt.killTweensOf(L,X,e.globalTime(t)),F=!e.parent,_r=0),e._pt&&l&&(Pc[N.id]=1)}D&&ap(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!F,f&&t<=0&&S.render(ci,!0,!0)},__=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Fc=1,e.vars[t]="+=0",nh(e,o),Fc=0,l?Oa(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=zt(n)+gn(d.e)),d.b&&(d.b=u.s+gn(d.b))},g_=function(e,t){var n=e[0]?Jr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Xs({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},v_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(xn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Aa=function(e,t,n,i,s){return Ut(e)?e.call(t,n,i,s):nn(e)&&~e.indexOf("random(")?za(e):e},hl=Ju+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",np={};Fn(hl+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return np[r]=1});hl=hl.split(",");var Gt=(function(r){bd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ta(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,p=l.keyframes,g=l.defaults,_=l.scrollTrigger,m=i.parent||Pt,x=(xn(n)||wd(n)?Qi(n[0]):"length"in i)?[n]:ui(n),E,S,A,b,w,v,y,L;if(o._targets=x.length?Qu(x):Oa("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,p||f||no(c)||no(u)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(E=o.timeline=new Dn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:x}),E.kill(),E.parent=E._dp=Wi(o),E._start=0,f||no(c)||no(u)){if(b=x.length,y=f&&Gd(f),Ni(f))for(w in f)~hl.indexOf(w)&&(L||(L={}),L[w]=f[w]);for(S=0;S<b;S++)A=ll(i,np),A.stagger=0,D&&(A.easeReverse=D),L&&Xs(A,L),v=x[S],A.duration=+Aa(c,Wi(o),S,v,x),A.delay=(+Aa(u,Wi(o),S,v,x)||0)-o._delay,!f&&b===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),E.to(v,A,y?y(S,v,x):0),E._ease=lt.none;E.duration()?c=u=0:o.timeline=0}else if(p){Ta(ti(E.vars.defaults,{ease:"none"})),E._ease=es(p.ease||i.ease||"none");var N=0,O,V,X;if(xn(p))p.forEach(function(z){return E.to(x,z,">")}),E.duration();else{A={};for(w in p)w==="ease"||w==="easeEach"||v_(w,p[w],A,p.easeEach);for(w in A)for(O=A[w].sort(function(z,U){return z.t-U.t}),N=0,S=0;S<O.length;S++)V=O[S],X={ease:V.e,duration:(V.t-(S?O[S-1].t:0))/100*c},X[w]=V.v,E.to(x,X,N),N+=X.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return h===!0&&!Yu&&(_r=Wi(o),Pt.killTweensOf(x),_r=0),Ri(m,Wi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!p&&o._start===Ct(m._time)&&Un(d)&&Zm(Wi(o))&&m.data!=="nested")&&(o._tTime=-yt,o.render(Math.max(0,-u)||0)),_&&zd(Wi(o),_),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-yt&&!u?l:i<yt?0:i,f,h,p,g,_,m,x,E;if(!c)jm(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(f=Ct(d%g),d===l?(p=this._repeat,f=c):(_=Ct(d/g),p=~~_,p&&p===_?(f=c,p--):f>c&&(f=c)),m=this._yoyo&&p&1,m&&(f=c-f),_=Ys(this._tTime,g),f===o&&!a&&this._initted&&p===_)return this._tTime=d,this;p!==_&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(Ct(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(kd(this,u?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==_))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var S=f<o;if(S!==this._inv){var A=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(S?-1:1)/A:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(f/c);if(this._from&&(this.ratio=x=1-x),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!_&&(jn(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;E&&E.render(i<0?i:E._dur*E._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Dc(this,i,s,a),jn(this,"onUpdate")),this._repeat&&p!==_&&this.vars.onRepeat&&!s&&this.parent&&jn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Dc(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Cr(this,1),!s&&!(u&&!o)&&(d||o||m)&&(jn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){ka||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||nh(this,c),u=this._ease(c/this._dur),__(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Rl(this,0),this.parent||Od(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?pa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!cn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,_r&&_r.vars.overwrite!==!0)._first||pa(this),this.parent&&a!==this.timeline.totalDuration()&&qs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ui(i):o,c=this._ptLookup,u=this._pt,d,f,h,p,g,_,m;if((!s||s==="all")&&Ym(o,l))return s==="all"&&(this._pt=0),pa(this);for(d=this._op=this._op||[],s!=="all"&&(nn(s)&&(g={},Fn(s,function(x){return g[x]=1}),s=g),s=g_(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(d[m]=s,p=f,h={}):(h=d[m]=d[m]||{},p=s);for(g in p)_=f&&f[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&wl(this,_,"_pt"),delete f[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&u&&pa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return wa(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return wa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Pt.killTweensOf(i,s,a)},e})(Ha);ti(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(r){Gt[r]=function(){var e=new Dn,t=Lc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ih=function(e,t,n){return e[t]=n},ip=function(e,t,n){return e[t](n)},x_=function(e,t,n,i){return e[t](i.fp,n)},M_=function(e,t,n){return e.setAttribute(t,n)},rh=function(e,t){return Ut(e[t])?ip:qu(e[t])&&e.setAttribute?M_:ih},rp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},S_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},sp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},sh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},y_=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},E_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?wl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},b_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ap=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Nn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||rp,this.d=l||this,this.set=c||ih,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=b_,this.m=n,this.mt=s,this.tween=i},r})();Fn(Ju+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Ku[r]=1});ei.TweenMax=ei.TweenLite=Gt;ei.TimelineLite=ei.TimelineMax=Dn;Pt=new Dn({sortChildren:!1,defaults:Na,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=Jd;var ts=[],Yo={},T_=[],zh=0,w_=0,zl=function(e){return(Yo[e]||T_).map(function(t){return t()})},Va=function(){var e=Date.now(),t=[];e-zh>2&&(zl("matchMediaInit"),ts.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Ti.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),zl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zh=e,zl("matchMedia"))},op=(function(){function r(t,n){this.selector=n&&Ic(n),this.data=[],this._r=[],this.isReverted=!1,this.id=w_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ut(n)&&(s=i,i=n,n=Ut);var a=this,o=function(){var c=Rt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ic(s)),Rt=a,d=i.apply(a,arguments),Ut(d)&&a._r.push(d),Rt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Ut?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Rt;Rt=null,n(this),Rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Gt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Gt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=ts.length;a--;)ts[a].id===this.id&&ts.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Va):o.removeEventListener("change",Va)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),A_=(function(){function r(t){this.contexts=[],this.scope=t,Rt&&Rt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ni(n)||(n={matches:n});var a=new op(0,s||this.scope),o=a.conditions={},l,c,u;Rt&&!a.selector&&(a.selector=Rt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Ti.matchMedia(n[c]),l&&(ts.indexOf(a)<0&&ts.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Va):l.addEventListener("change",Va),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),fl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return $d(i)})},timeline:function(e){return new Dn(e)},getTweensOf:function(e,t){return Pt.getTweensOf(e,t)},getProperty:function(e,t,n,i){nn(e)&&(e=ui(e)[0]);var s=Jr(e||{}).get,a=n?Nd:Fd;return n==="native"&&(n=""),e&&(t?a((Yn[t]&&Yn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Yn[o]&&Yn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ui(e),e.length>1){var i=e.map(function(u){return kn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=Yn[t],o=Jr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Fs._pt=0,d.init(e,n?u+n:u,Fs,0,[e]),d.render(1,d),Fs._pt&&sh(1,Fs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=kn.to(e,ti((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=es(e.ease,Na.ease)),Uh(Na,e||{})},config:function(e){return Uh(Qn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Yn[o]&&!ei[o]&&Oa(t+" effect requires "+o+" plugin.")}),Fl[t]=function(o,l,c){return n(ui(o),ti(l||{},s),c)},a&&(Dn.prototype[t]=function(o,l,c){return this.add(Fl[t](o,Ni(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=es(t)},parseEase:function(e,t){return arguments.length?es(e,t):lt},getById:function(e){return Pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Dn(e),i,s;for(n.smoothChildTiming=Un(e.smoothChildTiming),Pt.remove(n),n._dp=0,n._time=n._tTime=Pt._time,i=Pt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Gt&&i.vars.onComplete===i._targets[0]))&&Ri(n,i,i._start-i._delay),i=s;return Ri(Pt,n,0),n},context:function(e,t){return e?new op(e,t):Rt},matchMedia:function(e){return new A_(e)},matchMediaRefresh:function(){return ts.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Va()},addEventListener:function(e,t){var n=Yo[e]||(Yo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Yo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:r_,wrapYoyo:s_,distribute:Gd,random:Xd,snap:Wd,normalize:i_,getUnit:gn,clamp:Qm,splitColor:jd,toArray:ui,selector:Ic,mapRange:qd,pipe:t_,unitize:n_,interpolate:a_,shuffle:Vd},install:Pd,effects:Fl,ticker:$n,updateRoot:Dn.updateRoot,plugins:Yn,globalTimeline:Pt,core:{PropTween:Nn,globals:Dd,Tween:Gt,Timeline:Dn,Animation:Ha,getCache:Jr,_removeLinkedListItem:wl,reverting:function(){return cn},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return Yu=e}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return fl[r]=Gt[r]});$n.add(Dn.updateRoot);Fs=fl.to({},{duration:0});var R_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},C_=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=R_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},kl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(nn(s)&&(l={},Fn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}C_(o,s)}}}},kn=fl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},kl("roundProps",Uc),kl("modifiers"),kl("snap",Wd))||fl;Gt.version=Dn.version=kn.version="3.15.1";Cd=1;Zu()&&Zs();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;var kh,gr,Bs,ah,$r,Hh,oh,P_=function(){return typeof window<"u"},er={},Wr=180/Math.PI,zs=Math.PI/180,ps=Math.atan2,Vh=1e8,lh=/([A-Z])/g,D_=/(left|right|width|margin|padding|x)/i,L_=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},I_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},U_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},F_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},N_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},lp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},cp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},O_=function(e,t,n){return e.style[t]=n},B_=function(e,t,n){return e.style.setProperty(t,n)},z_=function(e,t,n){return e._gsap[t]=n},k_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},H_=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},V_=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Dt="transform",On=Dt+"Origin",G_=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in er&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ci[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Xi(i,o)}):this.tfm[e]=a.x?a[e]:Xi(i,e),e===On&&(this.tfm.zOrigin=a.zOrigin);else return Ci.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Dt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(On,t,"")),e=Dt}(s||t)&&this.props.push(e,t,s[e])},up=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},W_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(lh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=oh(),(!s||!s.isStart)&&!n[Dt]&&(up(n),i.zOrigin&&n[On]&&(n[On]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},hp=function(e,t){var n={target:e,props:[],revert:W_,save:G_};return e._gsap||kn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},fp,Oc=function(e,t){var n=gr.createElementNS?gr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gr.createElement(e);return n&&n.style?n:gr.createElement(e)},Kn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(lh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,$s(t)||t,1)||""},Gh="O,Moz,ms,Ms,Webkit".split(","),$s=function(e,t,n){var i=t||$r,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Gh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Gh[a]:"")+e},Bc=function(){P_()&&window.document&&(kh=window,gr=kh.document,Bs=gr.documentElement,$r=Oc("div")||{style:{}},Oc("div"),Dt=$s(Dt),On=Dt+"Origin",$r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fp=!!$s("perspective"),oh=kn.core.reverting,ah=1)},Wh=function(e){var t=e.ownerSVGElement,n=Oc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Bs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Bs.removeChild(n),s},Xh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},dp=function(e){var t,n;try{t=e.getBBox()}catch{t=Wh(e),n=1}return t&&(t.width||t.height)||n||(t=Wh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Xh(e,["x","cx","x1"])||0,y:+Xh(e,["y","cy","y1"])||0,width:0,height:0}:t},pp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&dp(e))},Pr=function(e,t){if(t){var n=e.style,i;t in er&&t!==On&&(t=Dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(lh,"-$1").toLowerCase())):n.removeAttribute(t)}},vr=function(e,t,n,i,s,a){var o=new Nn(e._pt,t,n,0,1,a?cp:lp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Yh={deg:1,rad:1,turn:1},X_={grid:1,flex:1},Dr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=$r.style,l=D_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",p,g,_,m;if(i===a||!s||Yh[i]||Yh[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&pp(e),(h||a==="%")&&(er[t]||~t.indexOf("adius")))return p=m?e.getBBox()[l?"width":"height"]:e[u],zt(h?s/p*d:s/100*p);if(o[l?"width":"height"]=d+(f?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===gr||!g.appendChild)&&(g=gr.body),_=g._gsap,_&&h&&_.width&&l&&_.time===$n.time&&!_.uncache)return zt(s/_.width*d);if(h&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=d+i,p=e[u],x?e.style[t]=x:Pr(e,t)}else(h||a==="%")&&!X_[Kn(g,"display")]&&(o.position=Kn(e,"position")),g===e&&(o.position="static"),g.appendChild($r),p=$r[u],g.removeChild($r),o.position="absolute";return l&&h&&(_=Jr(g),_.time=$n.time,_.width=g[u]),zt(f?p*s/d:p&&s?d/p*s:0)},Xi=function(e,t,n,i){var s;return ah||Bc(),t in Ci&&t!=="transform"&&(t=Ci[t],~t.indexOf(",")&&(t=t.split(",")[0])),er[t]&&t!=="transform"?(s=Wa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:pl(Kn(e,On))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=dl[t]&&dl[t](e,t,n)||Kn(e,t)||Id(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Dr(e,t,s,n)+n:s},Y_=function(e,t,n,i){if(!n||n==="none"){var s=$s(t,e,1),a=s&&Kn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Kn(e,"borderTopColor"))}var o=new Nn(this._pt,e.style,t,0,1,sp),l=0,c=0,u,d,f,h,p,g,_,m,x,E,S,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Kn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Kn(e,t)||i,g?e.style[t]=g:Pr(e,t)),u=[n,i],Jd(u),n=u[0],i=u[1],f=n.match(Us)||[],A=i.match(Us)||[],A.length){for(;d=Us.exec(i);)_=d[0],x=i.substring(l,d.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),_!==(g=f[c++]||"")&&(h=parseFloat(g)||0,S=g.substr((h+"").length),_.charAt(1)==="="&&(_=Os(h,_)+S),m=parseFloat(_),E=_.substr((m+"").length),l=Us.lastIndex-E.length,E||(E=E||Qn.units[t]||S,l===i.length&&(i+=E,o.e+=E)),S!==E&&(h=Dr(e,t,g,E)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:h,c:m-h,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?cp:lp;return Rd.test(i)&&(o.e=0),this._pt=o,o},qh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},q_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=qh[n]||n,t[1]=qh[i]||i,t.join(" ")},Z_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],er[o]&&(l=1,o=o==="transformOrigin"?On:Dt),Pr(n,o);l&&(Pr(n,Dt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wa(n,1),a.uncache=1,up(i)))}},dl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Nn(e._pt,t,n,0,0,Z_);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ga=[1,0,0,1,0,0],mp={},_p=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Zh=function(e){var t=Kn(e,Dt);return _p(t)?Ga:t.substr(7).match(Ad).map(zt)},ch=function(e,t){var n=e._gsap||Jr(e),i=e.style,s=Zh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ga:s):(s===Ga&&!e.offsetParent&&e!==Bs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Bs.appendChild(e)),s=Zh(e),l?i.display=l:Pr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Bs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},zc=function(e,t,n,i,s,a){var o=e._gsap,l=s||ch(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],p=l[1],g=l[2],_=l[3],m=l[4],x=l[5],E=t.split(" "),S=parseFloat(E[0])||0,A=parseFloat(E[1])||0,b,w,v,y;n?l!==Ga&&(w=h*_-p*g)&&(v=S*(_/w)+A*(-g/w)+(g*x-_*m)/w,y=S*(-p/w)+A*(h/w)-(h*x-p*m)/w,S=v,A=y):(b=dp(e),S=b.x+(~E[0].indexOf("%")?S/100*b.width:S),A=b.y+(~(E[1]||E[0]).indexOf("%")?A/100*b.height:A)),i||i!==!1&&o.smooth?(m=S-c,x=A-u,o.xOffset=d+(m*h+x*g)-m,o.yOffset=f+(m*p+x*_)-x):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=A,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[On]="0px 0px",a&&(vr(a,o,"xOrigin",c,S),vr(a,o,"yOrigin",u,A),vr(a,o,"xOffset",d,o.xOffset),vr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+A)},Wa=function(e,t){var n=e._gsap||new ep(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Kn(e,On)||"0",u,d,f,h,p,g,_,m,x,E,S,A,b,w,v,y,L,D,N,O,V,X,z,U,F,k,P,ne,ie,me,Re,Ce;return u=d=f=g=_=m=x=E=S=0,h=p=1,n.svg=!!(e.getCTM&&pp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Dt]!=="none"?l[Dt]:"")),i.scale=i.rotate=i.translate="none"),w=ch(e,n.svg),n.svg&&(n.uncache?(F=e.getBBox(),c=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),zc(e,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,b=n.yOrigin||0,w!==Ga&&(D=w[0],N=w[1],O=w[2],V=w[3],u=X=w[4],d=z=w[5],w.length===6?(h=Math.sqrt(D*D+N*N),p=Math.sqrt(V*V+O*O),g=D||N?ps(N,D)*Wr:0,x=O||V?ps(O,V)*Wr+g:0,x&&(p*=Math.abs(Math.cos(x*zs))),n.svg&&(u-=A-(A*D+b*O),d-=b-(A*N+b*V))):(Ce=w[6],me=w[7],P=w[8],ne=w[9],ie=w[10],Re=w[11],u=w[12],d=w[13],f=w[14],v=ps(Ce,ie),_=v*Wr,v&&(y=Math.cos(-v),L=Math.sin(-v),U=X*y+P*L,F=z*y+ne*L,k=Ce*y+ie*L,P=X*-L+P*y,ne=z*-L+ne*y,ie=Ce*-L+ie*y,Re=me*-L+Re*y,X=U,z=F,Ce=k),v=ps(-O,ie),m=v*Wr,v&&(y=Math.cos(-v),L=Math.sin(-v),U=D*y-P*L,F=N*y-ne*L,k=O*y-ie*L,Re=V*L+Re*y,D=U,N=F,O=k),v=ps(N,D),g=v*Wr,v&&(y=Math.cos(v),L=Math.sin(v),U=D*y+N*L,F=X*y+z*L,N=N*y-D*L,z=z*y-X*L,D=U,X=F),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,m=180-m),h=zt(Math.sqrt(D*D+N*N+O*O)),p=zt(Math.sqrt(z*z+Ce*Ce)),v=ps(X,z),x=Math.abs(v)>2e-4?v*Wr:0,S=Re?1/(Re<0?-Re:Re):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!_p(Kn(e,Dt)),U&&e.setAttribute("transform",U))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(h*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=zt(h),n.scaleY=zt(p),n.rotation=zt(g)+o,n.rotationX=zt(_)+o,n.rotationY=zt(m)+o,n.skewX=x+o,n.skewY=E+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[On]=pl(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?j_:fp?gp:$_,n.uncache=0,n},pl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Hl=function(e,t,n){var i=gn(t);return zt(parseFloat(t)+parseFloat(Dr(e,"x",n+"px",i)))+i},$_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,gp(e,t)},Nr="0deg",ra="0px",Or=") ",gp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,p=n.scaleX,g=n.scaleY,_=n.transformPerspective,m=n.force3D,x=n.target,E=n.zOrigin,S="",A=m==="auto"&&e&&e!==1||m===!0;if(E&&(d!==Nr||u!==Nr)){var b=parseFloat(u)*zs,w=Math.sin(b),v=Math.cos(b),y;b=parseFloat(d)*zs,y=Math.cos(b),a=Hl(x,a,w*y*-E),o=Hl(x,o,-Math.sin(b)*-E),l=Hl(x,l,v*y*-E+E)}_!==ra&&(S+="perspective("+_+Or),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(A||a!==ra||o!==ra||l!==ra)&&(S+=l!==ra||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Or),c!==Nr&&(S+="rotate("+c+Or),u!==Nr&&(S+="rotateY("+u+Or),d!==Nr&&(S+="rotateX("+d+Or),(f!==Nr||h!==Nr)&&(S+="skew("+f+", "+h+Or),(p!==1||g!==1)&&(S+="scale("+p+", "+g+Or),x.style[Dt]=S||"translate(0, 0)"},j_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,p=n.xOrigin,g=n.yOrigin,_=n.xOffset,m=n.yOffset,x=n.forceCSS,E=parseFloat(a),S=parseFloat(o),A,b,w,v,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=zs,c*=zs,A=Math.cos(l)*d,b=Math.sin(l)*d,w=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=zs,y=Math.tan(c-u),y=Math.sqrt(1+y*y),w*=y,v*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),A*=y,b*=y)),A=zt(A),b=zt(b),w=zt(w),v=zt(v)):(A=d,v=f,b=w=0),(E&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(E=Dr(h,"x",a,"px"),S=Dr(h,"y",o,"px")),(p||g||_||m)&&(E=zt(E+p-(p*A+g*w)+_),S=zt(S+g-(p*b+g*v)+m)),(i||s)&&(y=h.getBBox(),E=zt(E+i/100*y.width),S=zt(S+s/100*y.height)),y="matrix("+A+","+b+","+w+","+v+","+E+","+S+")",h.setAttribute("transform",y),x&&(h.style[Dt]=y)},K_=function(e,t,n,i,s){var a=360,o=nn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Wr:1),c=l-i,u=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Vh)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Vh)%a-~~(c/a)*a)),e._pt=f=new Nn(e._pt,t,n,i,c,I_),f.e=u,f.u="deg",e._props.push(n),f},$h=function(e,t){for(var n in t)e[n]=t[n];return e},J_=function(e,t,n){var i=$h({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,f,h,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Dt]=t,o=Wa(n,1),Pr(n,Dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Dt],a[Dt]=t,o=Wa(n,1),a[Dt]=c);for(l in er)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=gn(c),p=gn(u),d=h!==p?Dr(n,l,c,p):parseFloat(c),f=parseFloat(u),e._pt=new Nn(e._pt,o,l,d,f-d,Nc),e._pt.u=p||0,e._props.push(l));$h(o,i)};Fn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});dl[e>1?"border"+r:r]=function(o,l,c,u,d){var f,h;if(arguments.length<4)return f=a.map(function(p){return Xi(o,p,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},a.forEach(function(p,g){return h[p]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,h,d)}});var vp={name:"css",register:Bc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,f,h,p,g,_,m,x,E,S,A,b,w,v,y;ah||Bc(),this.styles=this.styles||hp(e),v=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Yn[g]&&tp(g,t,n,i,e,s)))){if(h=typeof u,p=dl[g],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=za(u)),p)p(this,e,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Tr.lastIndex=0,Tr.test(c)||(_=gn(c),m=gn(u),m?_!==m&&(c=Dr(e,g,c,m)+m):_&&(u+=_)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),v.push(g,0,o[g]);else if(h!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],nn(c)&&~c.indexOf("random(")&&(c=za(c)),gn(c+"")||c==="auto"||(c+=Qn.units[g]||gn(Xi(e,g))||""),(c+"").charAt(1)==="="&&(c=Xi(e,g))):c=Xi(e,g),f=parseFloat(c),x=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),d=parseFloat(u),g in Ci&&(g==="autoAlpha"&&(f===1&&Xi(e,"visibility")==="hidden"&&d&&(f=0),v.push("visibility",0,o.visibility),vr(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Ci[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in er,E){if(this.styles.save(g),y=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Kn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var L=e.style.perspective;e.style.perspective=u,u=Kn(e,"perspective"),L?e.style.perspective=L:Pr(e,"perspective")}d=parseFloat(u)}if(S||(A=e._gsap,A.renderTransform&&!t.parseTransform||Wa(e,t.parseTransform),b=t.smoothOrigin!==!1&&A.smooth,S=this._pt=new Nn(this._pt,o,Dt,0,1,A.renderTransform,A,0,-1),S.dep=1),g==="scale")this._pt=new Nn(this._pt,A,"scaleY",A.scaleY,(x?Os(A.scaleY,x+d):d)-A.scaleY||0,Nc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){v.push(On,0,o[On]),u=q_(u),A.svg?zc(e,u,0,b,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&vr(this,A,"zOrigin",A.zOrigin,m),vr(this,o,g,pl(c),pl(u)));continue}else if(g==="svgOrigin"){zc(e,u,1,b,0,this);continue}else if(g in mp){K_(this,A,g,f,x?Os(f,x+u):u);continue}else if(g==="smoothOrigin"){vr(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){J_(this,u,e);continue}}else g in o||(g=$s(g)||g);if(E||(d||d===0)&&(f||f===0)&&!L_.test(u)&&g in o)_=(c+"").substr((f+"").length),d||(d=0),m=gn(u)||(g in Qn.units?Qn.units[g]:_),_!==m&&(f=Dr(e,g,c,m)),this._pt=new Nn(this._pt,E?A:o,g,f,(x?Os(f,x+d):d)-f,!E&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?N_:Nc),this._pt.u=m||0,E&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=F_):_!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=U_);else if(g in o)Y_.call(this,e,g,c,x?x+u:u);else if(g in e)this.add(e,g,c||e[g],x?x+u:u,i,s);else if(g!=="parseTransform"){ju(g,u);continue}E||(g in o?v.push(g,0,o[g]):typeof e[g]=="function"?v.push(g,2,e[g]()):v.push(g,1,c||e[g])),a.push(g)}}w&&ap(this)},render:function(e,t){if(t.tween._time||!oh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xi,aliases:Ci,getSetter:function(e,t,n){var i=Ci[t];return i&&i.indexOf(",")<0&&(t=i),t in er&&t!==On&&(e._gsap.x||Xi(e,"x"))?n&&Hh===n?t==="scale"?k_:z_:(Hh=n||{})&&(t==="scale"?H_:V_):e.style&&!qu(e.style[t])?O_:~t.indexOf("-")?B_:rh(e,t)},core:{_removeProperty:Pr,_getMatrix:ch}};kn.utils.checkPrefix=$s;kn.core.getStyleSaver=hp;(function(r,e,t,n){var i=Fn(r+","+e+","+t,function(s){er[s]=1});Fn(e,function(s){Qn.units[s]="deg",mp[s]=1}),Ci[i[13]]=r+","+e,Fn(n,function(s){var a=s.split(":");Ci[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qn.units[r]="px"});kn.registerPlugin(vp);var xr=kn.registerPlugin(vp)||kn;xr.core.Tween;function Q_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function eg(r,e,t){return e&&Q_(r.prototype,e),r}var an,qo,Ln,Mr,Sr,ks,xp,Xr,Hs,Mp,Zi,vi,Sp,yp=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},Ep=1,Ns=[],at=[],Ui=[],Ra=Date.now,kc=function(e,t){return t},tg=function(){var e=Hs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,at),i.push.apply(i,Ui),at=n,Ui=i,kc=function(a,o){return t[a](o)}},wr=function(e,t){return~Ui.indexOf(e)&&Ui[Ui.indexOf(e)+1][t]},Ca=function(e){return!!~Mp.indexOf(e)},yn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},io="scrollLeft",ro="scrollTop",Hc=function(){return Zi&&Zi.isPressed||at.cache++},ml=function(e,t){var n=function i(s){if(s||s===0){Ep&&Ln.history.scrollRestoration!=="manual"&&(Ln.history.scrollRestoration="manual");var a=Zi&&Zi.isPressed;s=i.v=Math.round(s)||(Zi&&Zi.iOS?1:0),e(s),i.cacheID=at.cache,a&&kc("ss",s)}else(t||at.cache!==i.cacheID||kc("ref"))&&(i.cacheID=at.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},An={s:io,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ml(function(r){return arguments.length?Ln.scrollTo(r,Zt.sc()):Ln.pageXOffset||Mr[io]||Sr[io]||ks[io]||0})},Zt={s:ro,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:ml(function(r){return arguments.length?Ln.scrollTo(An.sc(),r):Ln.pageYOffset||Mr[ro]||Sr[ro]||ks[ro]||0})},Pn=function(e,t){return(t&&t._ctx&&t._ctx.selector||an.utils.toArray)(e)[0]||(typeof e=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ng=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Lr=function(e,t){var n=t.s,i=t.sc;Ca(e)&&(e=Mr.scrollingElement||Sr);var s=at.indexOf(e),a=i===Zt.sc?1:2;!~s&&(s=at.push(e)-1),at[s+a]||yn(e,"scroll",Hc);var o=at[s+a],l=o||(at[s+a]=ml(wr(e,n),!0)||(Ca(e)?i:ml(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=an.getProperty(e,"scrollBehavior")==="smooth"),l},Vc=function(e,t,n){var i=e,s=e,a=Ra(),o=a,l=t||50,c=Math.max(500,l*3),u=function(p,g){var _=Ra();g||_-a>l?(s=i,i=p,o=a,a=_):n?i+=p:i=s+(p-s)/(_-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(p){var g=o,_=s,m=Ra();return(p||p===0)&&p!==i&&u(p),a===o||m-o>c?0:(i+(n?_:-_))/((n?m:a)-g)*1e3};return{update:u,reset:d,getVelocity:f}},sa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},jh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},bp=function(){Hs=an.core.globals().ScrollTrigger,Hs&&Hs.core&&tg()},Tp=function(e){return an=e||yp(),!qo&&an&&typeof document<"u"&&document.body&&(Ln=window,Mr=document,Sr=Mr.documentElement,ks=Mr.body,Mp=[Ln,Mr,Sr,ks],an.utils.clamp,Sp=an.core.context||function(){},Xr="onpointerenter"in ks?"pointer":"mouse",xp=kt.isTouch=Ln.matchMedia&&Ln.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ln||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,vi=kt.eventTypes=("ontouchstart"in Sr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Sr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ep=0},500),qo=1),Hs||bp(),qo};An.op=Zt;at.cache=0;var kt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){qo||Tp(an)||console.warn("Please gsap.registerPlugin(Observer)"),Hs||bp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,f=n.onStopDelay,h=n.ignore,p=n.wheelSpeed,g=n.event,_=n.onDragStart,m=n.onDragEnd,x=n.onDrag,E=n.onPress,S=n.onRelease,A=n.onRight,b=n.onLeft,w=n.onUp,v=n.onDown,y=n.onChangeX,L=n.onChangeY,D=n.onChange,N=n.onToggleX,O=n.onToggleY,V=n.onHover,X=n.onHoverEnd,z=n.onMove,U=n.ignoreCheck,F=n.isNormalizer,k=n.onGestureStart,P=n.onGestureEnd,ne=n.onWheel,ie=n.onEnable,me=n.onDisable,Re=n.onClick,Ce=n.scrollSpeed,Z=n.capture,ee=n.allowClicks,re=n.lockAxis,Ue=n.onLockAxis;this.target=o=Pn(o)||Sr,this.vars=n,h&&(h=an.utils.toArray(h)),i=i||1e-9,s=s||0,p=p||1,Ce=Ce||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ln.getComputedStyle(ks).lineHeight)||22);var Le,Pe,Ke,ye,He,Ye,Ve,H=this,C=0,W=0,ve=n.passive||!u&&n.passive!==!1,he=Lr(o,An),oe=Lr(o,Zt),R=he(),M=oe(),B=~a.indexOf("touch")&&!~a.indexOf("pointer")&&vi[0]==="pointerdown",Q=Ca(o),j=o.ownerDocument||Mr,K=[0,0,0],pe=[0,0,0],se=0,Fe=function(){return se=Ra()},be=function(ze,et){return(H.event=ze)&&h&&ng(ze.target,h)||et&&B&&ze.pointerType!=="touch"||U&&U(ze,et)},fe=function(){H._vx.reset(),H._vy.reset(),Pe.pause(),d&&d(H)},de=function(){var ze=H.deltaX=jh(K),et=H.deltaY=jh(pe),Ee=Math.abs(ze)>=i,qe=Math.abs(et)>=i;D&&(Ee||qe)&&D(H,ze,et,K,pe),Ee&&(A&&H.deltaX>0&&A(H),b&&H.deltaX<0&&b(H),y&&y(H),N&&H.deltaX<0!=C<0&&N(H),C=H.deltaX,K[0]=K[1]=K[2]=0),qe&&(v&&H.deltaY>0&&v(H),w&&H.deltaY<0&&w(H),L&&L(H),O&&H.deltaY<0!=W<0&&O(H),W=H.deltaY,pe[0]=pe[1]=pe[2]=0),(ye||Ke)&&(z&&z(H),Ke&&(_&&Ke===1&&_(H),x&&x(H),Ke=0),ye=!1),Ye&&!(Ye=!1)&&Ue&&Ue(H),He&&(ne(H),He=!1),Le=0},De=function(ze,et,Ee){K[Ee]+=ze,pe[Ee]+=et,H._vx.update(ze),H._vy.update(et),c?Le||(Le=requestAnimationFrame(de)):de()},we=function(ze,et){re&&!Ve&&(H.axis=Ve=Math.abs(ze)>Math.abs(et)?"x":"y",Ye=!0),Ve!=="y"&&(K[2]+=ze,H._vx.update(ze,!0)),Ve!=="x"&&(pe[2]+=et,H._vy.update(et,!0)),c?Le||(Le=requestAnimationFrame(de)):de()},ae=function(ze){if(!be(ze,1)){ze=sa(ze,u);var et=ze.clientX,Ee=ze.clientY,qe=et-H.x,Xe=Ee-H.y,$e=H.isDragging;H.x=et,H.y=Ee,($e||(qe||Xe)&&(Math.abs(H.startX-et)>=s||Math.abs(H.startY-Ee)>=s))&&(Ke||(Ke=$e?2:1),$e||(H.isDragging=!0),we(qe,Xe))}},ge=H.onPress=function(Ae){be(Ae,1)||Ae&&Ae.button||(H.axis=Ve=null,Pe.pause(),H.isPressed=!0,Ae=sa(Ae),C=W=0,H.startX=H.x=Ae.clientX,H.startY=H.y=Ae.clientY,H._vx.reset(),H._vy.reset(),yn(F?o:j,vi[1],ae,ve,!0),H.deltaX=H.deltaY=0,E&&E(H))},I=H.onRelease=function(Ae){if(!be(Ae,1)){Sn(F?o:j,vi[1],ae,!0);var ze=!isNaN(H.y-H.startY),et=H.isDragging,Ee=et&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),qe=sa(Ae);!Ee&&ze&&(H._vx.reset(),H._vy.reset(),u&&ee&&an.delayedCall(.08,function(){if(Ra()-se>300&&!Ae.defaultPrevented){if(Ae.target.click)Ae.target.click();else if(j.createEvent){var Xe=j.createEvent("MouseEvents");Xe.initMouseEvent("click",!0,!0,Ln,1,qe.screenX,qe.screenY,qe.clientX,qe.clientY,!1,!1,!1,!1,0,null),Ae.target.dispatchEvent(Xe)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,d&&et&&!F&&Pe.restart(!0),Ke&&de(),m&&et&&m(H),S&&S(H,Ee)}},ce=function(ze){return ze.touches&&ze.touches.length>1&&(H.isGesturing=!0)&&k(ze,H.isDragging)},le=function(){return(H.isGesturing=!1)||P(H)},_e=function(ze){if(!be(ze)){var et=he(),Ee=oe();De((et-R)*Ce,(Ee-M)*Ce,1),R=et,M=Ee,d&&Pe.restart(!0)}},ue=function(ze){if(!be(ze)){ze=sa(ze,u),ne&&(He=!0);var et=(ze.deltaMode===1?l:ze.deltaMode===2?Ln.innerHeight:1)*p;De(ze.deltaX*et,ze.deltaY*et,0),d&&!F&&Pe.restart(!0)}},te=function(ze){if(!be(ze)){var et=ze.clientX,Ee=ze.clientY,qe=et-H.x,Xe=Ee-H.y;H.x=et,H.y=Ee,ye=!0,d&&Pe.restart(!0),(qe||Xe)&&we(qe,Xe)}},Ie=function(ze){H.event=ze,V(H)},We=function(ze){H.event=ze,X(H)},ft=function(ze){return be(ze)||sa(ze,u)&&Re(H)};Pe=H._dc=an.delayedCall(f||.25,fe).pause(),H.deltaX=H.deltaY=0,H._vx=Vc(0,50,!0),H._vy=Vc(0,50,!0),H.scrollX=he,H.scrollY=oe,H.isDragging=H.isGesturing=H.isPressed=!1,Sp(this),H.enable=function(Ae){return H.isEnabled||(yn(Q?j:o,"scroll",Hc),a.indexOf("scroll")>=0&&yn(Q?j:o,"scroll",_e,ve,Z),a.indexOf("wheel")>=0&&yn(o,"wheel",ue,ve,Z),(a.indexOf("touch")>=0&&xp||a.indexOf("pointer")>=0)&&(yn(o,vi[0],ge,ve,Z),yn(j,vi[2],I),yn(j,vi[3],I),ee&&yn(o,"click",Fe,!0,!0),Re&&yn(o,"click",ft),k&&yn(j,"gesturestart",ce),P&&yn(j,"gestureend",le),V&&yn(o,Xr+"enter",Ie),X&&yn(o,Xr+"leave",We),z&&yn(o,Xr+"move",te)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=ye=Ke=!1,H._vx.reset(),H._vy.reset(),R=he(),M=oe(),Ae&&Ae.type&&ge(Ae),ie&&ie(H)),H},H.disable=function(){H.isEnabled&&(Ns.filter(function(Ae){return Ae!==H&&Ca(Ae.target)}).length||Sn(Q?j:o,"scroll",Hc),H.isPressed&&(H._vx.reset(),H._vy.reset(),Sn(F?o:j,vi[1],ae,!0)),Sn(Q?j:o,"scroll",_e,Z),Sn(o,"wheel",ue,Z),Sn(o,vi[0],ge,Z),Sn(j,vi[2],I),Sn(j,vi[3],I),Sn(o,"click",Fe,!0),Sn(o,"click",ft),Sn(j,"gesturestart",ce),Sn(j,"gestureend",le),Sn(o,Xr+"enter",Ie),Sn(o,Xr+"leave",We),Sn(o,Xr+"move",te),H.isEnabled=H.isPressed=H.isDragging=!1,me&&me(H))},H.kill=H.revert=function(){H.disable();var Ae=Ns.indexOf(H);Ae>=0&&Ns.splice(Ae,1),Zi===H&&(Zi=0)},Ns.push(H),F&&Ca(o)&&(Zi=H),H.enable(g)},eg(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();kt.version="3.15.1";kt.create=function(r){return new kt(r)};kt.register=Tp;kt.getAll=function(){return Ns.slice()};kt.getById=function(r){return Ns.filter(function(e){return e.vars.id===r})[0]};yp()&&an.registerPlugin(kt);var Be,Ls,st,vt,Zn,_t,uh,_l,Xa,Pa,_a,so,mn,Cl,Gc,Tn,Kh,Jh,Is,wp,Vl,Ap,bn,Wc,Rp,Cp,fr,Xc,hh,Vs,fh,Ar,Yc,Gl,ao=1,_n=Date.now,Wl=_n(),hi=0,ga=0,Qh=function(e,t,n){var i=Xn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},ef=function(e,t){return t&&(!Xn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ig=function r(){return ga&&requestAnimationFrame(r)},tf=function(){return Cl=1},nf=function(){return Cl=0},wi=function(e){return e},va=function(e){return Math.round(e*1e5)/1e5||0},Pp=function(){return typeof window<"u"},Dp=function(){return Be||Pp()&&(Be=window.gsap)&&Be.registerPlugin&&Be},ss=function(e){return!!~uh.indexOf(e)},Lp=function(e){return(e==="Height"?fh:st["inner"+e])||Zn["client"+e]||_t["client"+e]},Ip=function(e){return wr(e,"getBoundingClientRect")||(ss(e)?function(){return Jo.width=st.innerWidth,Jo.height=fh,Jo}:function(){return Yi(e)})},rg=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=wr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Lp(s):e["client"+s])||0}},sg=function(e,t){return!t||~Ui.indexOf(e)?Ip(e):function(){return Jo}},Pi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=wr(e,n))?a()-Ip(e)()[s]:ss(e)?(Zn[n]||_t[n])-Lp(i):e[n]-e["offset"+i])},oo=function(e,t){for(var n=0;n<Is.length;n+=3)(!t||~t.indexOf(Is[n+1]))&&e(Is[n],Is[n+1],Is[n+2])},Xn=function(e){return typeof e=="string"},vn=function(e){return typeof e=="function"},xa=function(e){return typeof e=="number"},Yr=function(e){return typeof e=="object"},aa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ms=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},_s=Math.abs,Up="left",Fp="top",dh="right",ph="bottom",ns="width",is="height",Da="Right",La="Left",Ia="Top",Ua="Bottom",Vt="padding",si="margin",js="Width",mh="Height",qt="px",ai=function(e){return st.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},ag=function(e){var t=ai(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},rf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Yi=function(e,t){var n=t&&ai(e)[Gc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},gl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Np=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},og=function(e){return function(t){return Be.utils.snap(Np(e),t)}},_h=function(e){var t=Be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},lg=function(e){return function(t,n){return _h(Np(e))(t,n.direction)}},lo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},tn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},co=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},sf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},uo={toggleActions:"play",anticipatePin:0},vl={top:0,left:0,center:.5,bottom:1,right:1},Zo=function(e,t){if(Xn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in vl?vl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ho=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,p=vt.createElement("div"),g=ss(n)||wr(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,m=g?_t:n.tagName==="IFRAME"?n.contentDocument.body:n,x=e.indexOf("start")!==-1,E=x?c:u,S="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((_||l)&&g?"fixed;":"absolute;"),(_||l||!g)&&(S+=(i===Zt?dh:ph)+":"+(a+parseFloat(f))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=x,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=S,p.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+i.op.d2],$o(p,0,i,x),p},$o=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+js]=1,s["border"+o+js]=0,s[n.p]=t+"px",Be.set(e,s)},rt=[],qc={},Ya,af=function(){return _n()-hi>34&&(Ya||(Ya=requestAnimationFrame($i)))},gs=function(){(!bn||!bn.isPressed||bn.startX>_t.clientWidth)&&(at.cache++,bn?Ya||(Ya=requestAnimationFrame($i)):$i(),hi||os("scrollStart"),hi=_n())},Xl=function(){Cp=st.innerWidth,Rp=st.innerHeight},Ma=function(e){at.cache++,(e===!0||!mn&&!Ap&&!vt.fullscreenElement&&!vt.webkitFullscreenElement&&(!Wc||Cp!==st.innerWidth||Math.abs(st.innerHeight-Rp)>st.innerHeight*.25))&&_l.restart(!0)},as={},cg=[],Op=function r(){return en(Ze,"scrollEnd",r)||jr(!0)},os=function(e){return as[e]&&as[e].map(function(t){return t()})||cg},Wn=[],Bp=function(e){for(var t=0;t<Wn.length;t+=5)(!e||Wn[t+4]&&Wn[t+4].query===e)&&(Wn[t].style.cssText=Wn[t+1],Wn[t].getBBox&&Wn[t].setAttribute("transform",Wn[t+2]||""),Wn[t+3].uncache=1)},zp=function(){at.cache++,at.forEach(function(e){return vn(e)&&(e.rec=e())})},gh=function(e,t){var n;for(Tn=0;Tn<rt.length;Tn++)n=rt[Tn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ar=!0,t&&Bp(t),t||os("revert")},kp=function(e,t){at.cache++,(t||!wn)&&at.forEach(function(n){return vn(n)&&n.cacheID++&&(n.rec=0)}),Xn(e)&&(hh=e,st.history.scrollRestoration!==e&&(st.history.scrollRestoration=e))},wn,rs=0,of,ug=function(){if(of!==rs){var e=of=rs;requestAnimationFrame(function(){return e===rs&&jr(!0)})}},Hp=function(){_t.appendChild(Vs),fh=!bn&&Vs.offsetHeight||st.innerHeight,_t.removeChild(Vs)},lf=function(e){return Xa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},jr=function(e,t){if(Zn=vt.documentElement,_t=vt.body,uh=[st,vt,Zn,_t],hi&&!e&&!Ar){tn(Ze,"scrollEnd",Op);return}Hp(),wn=Ze.isRefreshing=!0,Ar||zp();var n=os("refreshInit");wp&&Ze.sort(),t||gh(),at.forEach(function(i){vn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),Ar=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Yc=1,lf(!0),rt.forEach(function(i){var s=Pi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),lf(!1),Yc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),at.forEach(function(i){vn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),kp(hh,1),_l.pause(),rs++,wn=2,$i(2),rt.forEach(function(i){return vn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),wn=Ze.isRefreshing=!1,os("refresh")},Zc=0,jo=1,Fa,$i=function(e){if(e===2||!wn&&!Ar){Ze.isUpdating=!0,Fa&&Fa.update(0);var t=rt.length,n=_n(),i=n-Wl>=50,s=t&&rt[0].scroll();if(jo=Zc>s?-1:1,wn||(Zc=s),i&&(hi&&!Cl&&n-hi>200&&(hi=0,os("scrollEnd")),_a=Wl,Wl=n),jo<0){for(Tn=t;Tn-- >0;)rt[Tn]&&rt[Tn].update(0,i);jo=1}else for(Tn=0;Tn<t;Tn++)rt[Tn]&&rt[Tn].update(0,i);Ze.isUpdating=!1}Ya=0},$c=[Up,Fp,ph,dh,si+Ua,si+Da,si+Ia,si+La,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ko=$c.concat([ns,is,"boxSizing","max"+js,"max"+mh,"position",si,Vt,Vt+Ia,Vt+Da,Vt+Ua,Vt+La]),hg=function(e,t,n){Gs(n);var i=e._gsap;if(i.spacerIsNative)Gs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Yl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=$c.length,a=t.style,o=e.style,l;s--;)l=$c[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[ph]=o[dh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ns]=gl(e,An)+qt,a[is]=gl(e,Zt)+qt,a[Vt]=o[si]=o[Fp]=o[Up]="0",Gs(i),o[ns]=o["max"+js]=n[ns],o[is]=o["max"+mh]=n[is],o[Vt]=n[Vt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},fg=/([A-Z])/g,Gs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Be.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(fg,"-$1").toLowerCase())}},fo=function(e){for(var t=Ko.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ko[s],n[Ko[s]]);return i.t=e,i},dg=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Jo={left:0,top:0},cf=function(e,t,n,i,s,a,o,l,c,u,d,f,h,p){vn(e)&&(e=e(l)),Xn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Zo("0"+e.substr(3),n):0));var g=h?h.time():0,_,m,x;if(h&&h.seek(0),isNaN(e)||(e=+e),xa(e))h&&(e=Be.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),o&&$o(o,n,i,!0);else{vn(t)&&(t=t(l));var E=(e||"0").split(" "),S,A,b,w;x=Pn(t,l)||_t,S=Yi(x)||{},(!S||!S.left&&!S.top)&&ai(x).display==="none"&&(w=x.style.display,x.style.display="block",S=Yi(x),w?x.style.display=w:x.style.removeProperty("display")),A=Zo(E[0],S[i.d]),b=Zo(E[1]||"0",n),e=S[i.p]-c[i.p]-u+A+s-b,o&&$o(o,b,i,n-b<20||o._isStart&&b>20),n-=n-b}if(p&&(l[p]=e||-.001,e<0&&(e=0)),a){var v=e+n,y=a._isStart;_="scroll"+i.d2,$o(a,v,i,y&&v>20||!y&&(d?Math.max(_t[_],Zn[_]):a.parentNode[_])<=v+1),d&&(c=Yi(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+qt))}return h&&x&&(_=Yi(x),h.seek(f),m=Yi(x),h._caScrollDist=_[i.p]-m[i.p],e=e/h._caScrollDist*f),h&&h.seek(g),h?e:Math.round(e)},pg=/(webkit|moz|length|cssText|inset)/i,uf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===_t){e._stOrig=s.cssText,o=ai(e);for(a in o)!+a&&!pg.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Be.core.getCache(e).uncache=1,t.appendChild(e)}},Vp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},po=function(e,t,n){var i={};i[t.p]="+="+n,Be.set(e,i)},hf=function(e,t){var n=Lr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var f=a.tween,h=l.onComplete,p={};c=c||n();var g=Vp(n,c,function(){f.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=p,p[i]=function(){return g(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){at.cache++,a.tween&&$i()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=Be.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},tn(e,"wheel",n.wheelHandler),Ze.isTouch&&tn(e,"touchmove",n.wheelHandler),s},Ze=(function(){function r(t,n){Ls||r.register(Be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Xc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ga){this.update=this.refresh=this.kill=wi;return}n=rf(Xn(n)||xa(n)||n.nodeType?{trigger:n}:n,uo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,p=s.pinSpacing,g=s.invalidateOnRefresh,_=s.anticipatePin,m=s.onScrubComplete,x=s.onSnapComplete,E=s.once,S=s.snap,A=s.pinReparent,b=s.pinSpacer,w=s.containerAnimation,v=s.fastScrollEnd,y=s.preventOverlaps,L=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:Zt,D=!d&&d!==0,N=Pn(n.scroller||st),O=Be.core.getCache(N),V=ss(N),X=("pinType"in n?n.pinType:wr(N,"pinType")||V&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=D&&n.toggleActions.split(" "),F="markers"in n?n.markers:uo.markers,k=V?0:parseFloat(ai(N)["border"+L.p2+js])||0,P=this,ne=n.onRefreshInit&&function(){return n.onRefreshInit(P)},ie=rg(N,V,L),me=sg(N,V),Re=0,Ce=0,Z=0,ee=Lr(N,L),re,Ue,Le,Pe,Ke,ye,He,Ye,Ve,H,C,W,ve,he,oe,R,M,B,Q,j,K,pe,se,Fe,be,fe,de,De,we,ae,ge,I,ce,le,_e,ue,te,Ie,We;if(P._startClamp=P._endClamp=!1,P._dir=L,_*=45,P.scroller=N,P.scroll=w?w.time.bind(w):ee,Pe=ee(),Ar&&ee.rec==null&&(ee.rec=Pe),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(wp=1,n.refreshPriority===-9999&&(Fa=P)),O.tweenScroll=O.tweenScroll||{top:hf(N,Zt),left:hf(N,An)},P.tweenTo=re=O.tweenScroll[L.p],P.scrubDuration=function(Ee){ce=xa(Ee)&&Ee,ce?I?I.duration(Ee):I=Be.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ce,paused:!0,onComplete:function(){return m&&m(P)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(d),ae=0,l||(l=i.vars.id)),S&&((!Yr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in _t.style&&Be.set(V?[_t,Zn]:N,{scrollBehavior:"auto"}),at.forEach(function(Ee){return vn(Ee)&&Ee.target===(V?vt.scrollingElement||Zn:N)&&(Ee.smooth=!1)}),Le=vn(S.snapTo)?S.snapTo:S.snapTo==="labels"?og(i):S.snapTo==="labelsDirectional"?lg(i):S.directional!==!1?function(Ee,qe){return _h(S.snapTo)(Ee,_n()-Ce<500?0:qe.direction)}:Be.utils.snap(S.snapTo),le=S.duration||{min:.1,max:2},le=Yr(le)?Pa(le.min,le.max):Pa(le,le),_e=Be.delayedCall(S.delay||ce/2||.1,function(){var Ee=ee(),qe=_n()-Ce<500,Xe=re.tween;if((qe||Math.abs(P.getVelocity())<10)&&!Xe&&!Cl&&Re!==Ee){var $e=(Ee-ye)/he,Nt=i&&!D?i.totalProgress():$e,Je=qe?0:(Nt-ge)/(_n()-_a)*1e3||0,wt=Be.utils.clamp(-$e,1-$e,_s(Je/2)*Je/.185),Wt=$e+(S.inertia===!1?0:wt),At,gt,mt=S,un=mt.onStart,Tt=mt.onInterrupt,hn=mt.onComplete;if(At=Le(Wt,P),xa(At)||(At=Wt),gt=Math.max(0,Math.round(ye+At*he)),Ee<=He&&Ee>=ye&&gt!==Ee){if(Xe&&!Xe._initted&&Xe.data<=_s(gt-Ee))return;S.inertia===!1&&(wt=At-$e),re(gt,{duration:le(_s(Math.max(_s(Wt-Nt),_s(At-Nt))*.185/Je/.05||0)),ease:S.ease||"power3",data:_s(gt-Ee),onInterrupt:function(){return _e.restart(!0)&&Tt&&ms(P,Tt)},onComplete:function(){P.update(),Re=ee(),i&&!D&&(I?I.resetTo("totalProgress",At,i._tTime/i._tDur):i.progress(At)),ae=ge=i&&!D?i.totalProgress():P.progress,x&&x(P),hn&&ms(P,hn)}},Ee,wt*he,gt-Ee-wt*he),un&&ms(P,un,re.tween)}}else P.isActive&&Re!==Ee&&_e.restart(!0)}).pause()),l&&(qc[l]=P),f=P.trigger=Pn(f||h!==!0&&h),We=f&&f._gsap&&f._gsap.stRevert,We&&(We=We(P)),h=h===!0?f:Pn(h),Xn(o)&&(o={targets:f,className:o}),h&&(p===!1||p===si||(p=!p&&h.parentNode&&h.parentNode.style&&ai(h.parentNode).display==="flex"?!1:Vt),P.pin=h,Ue=Be.core.getCache(h),Ue.spacer?oe=Ue.pinState:(b&&(b=Pn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Ue.spacerIsNative=!!b,b&&(Ue.spacerState=fo(b))),Ue.spacer=B=b||vt.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),Ue.pinState=oe=fo(h)),n.force3D!==!1&&Be.set(h,{force3D:!0}),P.spacer=B=Ue.spacer,we=ai(h),Fe=we[p+L.os2],j=Be.getProperty(h),K=Be.quickSetter(h,L.a,qt),Yl(h,B,we),M=fo(h)),F){W=Yr(F)?rf(F,sf):sf,H=ho("scroller-start",l,N,L,W,0),C=ho("scroller-end",l,N,L,W,0,H),Q=H["offset"+L.op.d2];var ft=Pn(wr(N,"content")||N);Ye=this.markerStart=ho("start",l,ft,L,W,Q,0,w),Ve=this.markerEnd=ho("end",l,ft,L,W,Q,0,w),w&&(Ie=Be.quickSetter([Ye,Ve],L.a,qt)),!X&&!(Ui.length&&wr(N,"fixedMarkers")===!0)&&(ag(V?_t:N),Be.set([H,C],{force3D:!0}),fe=Be.quickSetter(H,L.a,qt),De=Be.quickSetter(C,L.a,qt))}if(w){var Ae=w.vars.onUpdate,ze=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),Ae&&Ae.apply(w,ze||[])})}if(P.previous=function(){return rt[rt.indexOf(P)-1]},P.next=function(){return rt[rt.indexOf(P)+1]},P.revert=function(Ee,qe){if(!qe)return P.kill(!0);var Xe=Ee!==!1||!P.enabled,$e=mn;Xe!==P.isReverted&&(Xe&&(ue=Math.max(ee(),P.scroll.rec||0),Z=P.progress,te=i&&i.progress()),Ye&&[Ye,Ve,H,C].forEach(function(Nt){return Nt.style.display=Xe?"none":"block"}),Xe&&(mn=P,P.update(Xe)),h&&(!A||!P.isActive)&&(Xe?hg(h,B,oe):Yl(h,B,ai(h),be)),Xe||P.update(Xe),mn=$e,P.isReverted=Xe)},P.refresh=function(Ee,qe,Xe,$e){if(!((mn||!P.enabled)&&!qe)){if(h&&Ee&&hi){tn(r,"scrollEnd",Op);return}!wn&&ne&&ne(P),mn=P,re.tween&&!Xe&&(re.tween.kill(),re.tween=0),I&&I.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ne){return Ne.vars.immediateRender&&Ne.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Nt=ie(),Je=me(),wt=w?w.duration():Pi(N,L),Wt=he<=.01||!he,At=0,gt=$e||0,mt=Yr(Xe)?Xe.end:n.end,un=n.endTrigger||f,Tt=Yr(Xe)?Xe.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),hn=P.pinnedContainer=n.pinnedContainer&&Pn(n.pinnedContainer,P),ni=f&&Math.max(0,rt.indexOf(P))||0,Xt=ni,Yt,Kt,Bi,hs,T,G,$,q,Y,xe,Se,Me,Oe;for(F&&Yr(Xe)&&(Me=Be.getProperty(H,L.p),Oe=Be.getProperty(C,L.p));Xt-- >0;)G=rt[Xt],G.end||G.refresh(0,1)||(mn=P),$=G.pin,$&&($===f||$===h||$===hn)&&!G.isReverted&&(xe||(xe=[]),xe.unshift(G),G.revert(!0,!0)),G!==rt[Xt]&&(ni--,Xt--);for(vn(Tt)&&(Tt=Tt(P)),Tt=Qh(Tt,"start",P),ye=cf(Tt,f,Nt,L,ee(),Ye,H,P,Je,k,X,wt,w,P._startClamp&&"_startClamp")||(h?-.001:0),vn(mt)&&(mt=mt(P)),Xn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Xn(Tt)?Tt.split(" ")[0]:"")+mt:(At=Zo(mt.substr(2),Nt),mt=Xn(Tt)?Tt:(w?Be.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,ye):ye)+At,un=f)),mt=Qh(mt,"end",P),He=Math.max(ye,cf(mt||(un?"100% 0":wt),un,Nt,L,ee()+At,Ve,C,P,Je,k,X,wt,w,P._endClamp&&"_endClamp"))||-.001,At=0,Xt=ni;Xt--;)G=rt[Xt]||{},$=G.pin,$&&G.start-G._pinPush<=ye&&!w&&G.end>0&&(Yt=G.end-(P._startClamp?Math.max(0,G.start):G.start),($===f&&G.start-G._pinPush<ye||$===hn)&&isNaN(Tt)&&(At+=Yt*(1-G.progress)),$===h&&(gt+=Yt));if(ye+=At,He+=At,P._startClamp&&(P._startClamp+=At),P._endClamp&&!wn&&(P._endClamp=He||-.001,He=Math.min(He,Pi(N,L))),he=He-ye||(ye-=.01)&&.001,Wt&&(Z=Be.utils.clamp(0,1,Be.utils.normalize(ye,He,ue))),P._pinPush=gt,Ye&&At&&(Yt={},Yt[L.a]="+="+At,hn&&(Yt[L.p]="-="+ee()),Be.set([Ye,Ve],Yt)),h&&!(Yc&&P.end>=Pi(N,L)))Yt=ai(h),hs=L===Zt,Bi=ee(),pe=parseFloat(j(L.a))+gt,!wt&&He>1&&(Se=(V?vt.scrollingElement||Zn:N).style,Se={style:Se,value:Se["overflow"+L.a.toUpperCase()]},V&&ai(_t)["overflow"+L.a.toUpperCase()]!=="scroll"&&(Se.style["overflow"+L.a.toUpperCase()]="scroll")),Yl(h,B,Yt),M=fo(h),Kt=Yi(h,!0),q=X&&Lr(N,hs?An:Zt)(),p?(be=[p+L.os2,he+gt+qt],be.t=B,Xt=p===Vt?gl(h,L)+he+gt:0,Xt&&(be.push(L.d,Xt+qt),B.style.flexBasis!=="auto"&&(B.style.flexBasis=Xt+qt)),Gs(be),hn&&rt.forEach(function(Ne){Ne.pin===hn&&Ne.vars.pinSpacing!==!1&&(Ne._subPinOffset=!0)}),X&&ee(ue)):(Xt=gl(h,L),Xt&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=Xt+qt)),X&&(T={top:Kt.top+(hs?Bi-ye:q)+qt,left:Kt.left+(hs?q:Bi-ye)+qt,boxSizing:"border-box",position:"fixed"},T[ns]=T["max"+js]=Math.ceil(Kt.width)+qt,T[is]=T["max"+mh]=Math.ceil(Kt.height)+qt,T[si]=T[si+Ia]=T[si+Da]=T[si+Ua]=T[si+La]="0",T[Vt]=Yt[Vt],T[Vt+Ia]=Yt[Vt+Ia],T[Vt+Da]=Yt[Vt+Da],T[Vt+Ua]=Yt[Vt+Ua],T[Vt+La]=Yt[Vt+La],R=dg(oe,T,A),wn&&ee(0)),i?(Y=i._initted,Vl(1),i.render(i.duration(),!0,!0),se=j(L.a)-pe+he+gt,de=Math.abs(he-se)>1,X&&de&&R.splice(R.length-2,2),i.render(0,!0,!0),Y||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Vl(0)):se=he,Se&&(Se.value?Se.style["overflow"+L.a.toUpperCase()]=Se.value:Se.style.removeProperty("overflow-"+L.a));else if(f&&ee()&&!w)for(Kt=f.parentNode;Kt&&Kt!==_t;)Kt._pinOffset&&(ye-=Kt._pinOffset,He-=Kt._pinOffset),Kt=Kt.parentNode;xe&&xe.forEach(function(Ne){return Ne.revert(!1,!0)}),P.start=ye,P.end=He,Pe=Ke=wn?ue:ee(),!w&&!wn&&!Ar&&(Pe<ue&&ee(ue),P.scroll.rec=0),P.revert(!1,!0),Ce=_n(),_e&&(Re=-1,_e.restart(!0)),mn=0,i&&D&&(i._initted||te)&&i.progress()!==te&&i.progress(te||0,!0).render(i.time(),!0,!0),(Wt||Z!==P.progress||w||g||i&&!i._initted)&&(i&&!D&&(i._initted||Z||i.vars.immediateRender!==!1)&&i.totalProgress(w&&ye<-.001&&!Z?Be.utils.normalize(ye,He,0):Z,!0),P.progress=Wt||(Pe-ye)/he===Z?0:Z),h&&p&&(B._pinOffset=Math.round(P.progress*se)),I&&I.invalidate(),isNaN(Me)||(Me-=Be.getProperty(H,L.p),Oe-=Be.getProperty(C,L.p),po(H,L,Me),po(Ye,L,Me-($e||0)),po(C,L,Oe),po(Ve,L,Oe-($e||0))),Wt&&!wn&&P.update(),u&&!wn&&!ve&&(ve=!0,u(P),ve=!1)}},P.getVelocity=function(){return(ee()-Ke)/(_n()-_a)*1e3||0},P.endAnimation=function(){aa(P.callbackAnimation),i&&(I?I.progress(1):i.paused()?D||aa(i,P.direction<0,1):aa(i,i.reversed()))},P.labelToScroll=function(Ee){return i&&i.labels&&(ye||P.refresh()||ye)+i.labels[Ee]/i.duration()*he||0},P.getTrailing=function(Ee){var qe=rt.indexOf(P),Xe=P.direction>0?rt.slice(0,qe).reverse():rt.slice(qe+1);return(Xn(Ee)?Xe.filter(function($e){return $e.vars.preventOverlaps===Ee}):Xe).filter(function($e){return P.direction>0?$e.end<=ye:$e.start>=He})},P.update=function(Ee,qe,Xe){if(!(w&&!Xe&&!Ee)){var $e=wn===!0?ue:P.scroll(),Nt=Ee?0:($e-ye)/he,Je=Nt<0?0:Nt>1?1:Nt||0,wt=P.progress,Wt,At,gt,mt,un,Tt,hn,ni;if(qe&&(Ke=Pe,Pe=w?ee():$e,S&&(ge=ae,ae=i&&!D?i.totalProgress():Je)),_&&h&&!mn&&!ao&&hi&&(!Je&&ye<$e+($e-Ke)/(_n()-_a)*_?Je=1e-4:Je===1&&He>$e+($e-Ke)/(_n()-_a)*_&&(Je=.9999)),Je!==wt&&P.enabled){if(Wt=P.isActive=!!Je&&Je<1,At=!!wt&&wt<1,Tt=Wt!==At,un=Tt||!!Je!=!!wt,P.direction=Je>wt?1:-1,P.progress=Je,un&&!mn&&(gt=Je&&!wt?0:Je===1?1:wt===1?2:3,D&&(mt=!Tt&&U[gt+1]!=="none"&&U[gt+1]||U[gt],ni=i&&(mt==="complete"||mt==="reset"||mt in i))),y&&(Tt||ni)&&(ni||d||!i)&&(vn(y)?y(P):P.getTrailing(y).forEach(function(Bi){return Bi.endAnimation()})),D||(I&&!mn&&!ao?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",Je,i._tTime/i._tDur):(I.vars.totalProgress=Je,I.invalidate().restart())):i&&i.totalProgress(Je,!!(mn&&(Ce||Ee)))),h){if(Ee&&p&&(B.style[p+L.os2]=Fe),!X)K(va(pe+se*Je));else if(un){if(hn=!Ee&&Je>wt&&He+1>$e&&$e+1>=Pi(N,L),A)if(!Ee&&(Wt||hn)){var Xt=Yi(h,!0),Yt=$e-ye;uf(h,_t,Xt.top+(L===Zt?Yt:0)+qt,Xt.left+(L===Zt?0:Yt)+qt)}else uf(h,B);Gs(Wt||hn?R:M),de&&Je<1&&Wt||K(pe+(Je===1&&!hn?se:0))}}S&&!re.tween&&!mn&&!ao&&_e.restart(!0),o&&(Tt||E&&Je&&(Je<1||!Gl))&&Xa(o.targets).forEach(function(Bi){return Bi.classList[Wt||E?"add":"remove"](o.className)}),a&&!D&&!Ee&&a(P),un&&!mn?(D&&(ni&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),a&&a(P)),(Tt||!Gl)&&(c&&Tt&&ms(P,c),z[gt]&&ms(P,z[gt]),E&&(Je===1?P.kill(!1,1):z[gt]=0),Tt||(gt=Je===1?1:3,z[gt]&&ms(P,z[gt]))),v&&!Wt&&Math.abs(P.getVelocity())>(xa(v)?v:2500)&&(aa(P.callbackAnimation),I?I.progress(1):aa(i,mt==="reverse"?1:!Je,1))):D&&a&&!mn&&a(P)}if(De){var Kt=w?$e/w.duration()*(w._caScrollDist||0):$e;fe(Kt+(H._isFlipped?1:0)),De(Kt)}Ie&&Ie(-$e/w.duration()*(w._caScrollDist||0))}},P.enable=function(Ee,qe){P.enabled||(P.enabled=!0,tn(N,"resize",Ma),V||tn(N,"scroll",gs),ne&&tn(r,"refreshInit",ne),Ee!==!1&&(P.progress=Z=0,Pe=Ke=Re=ee()),qe!==!1&&P.refresh())},P.getTween=function(Ee){return Ee&&re?re.tween:I},P.setPositions=function(Ee,qe,Xe,$e){if(w){var Nt=w.scrollTrigger,Je=w.duration(),wt=Nt.end-Nt.start;Ee=Nt.start+wt*Ee/Je,qe=Nt.start+wt*qe/Je}P.refresh(!1,!1,{start:ef(Ee,Xe&&!!P._startClamp),end:ef(qe,Xe&&!!P._endClamp)},$e),P.update()},P.adjustPinSpacing=function(Ee){if(be&&Ee){var qe=be.indexOf(L.d)+1;be[qe]=parseFloat(be[qe])+Ee+qt,be[1]=parseFloat(be[1])+Ee+qt,Gs(be)}},P.disable=function(Ee,qe){if(Ee!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,qe||I&&I.pause(),ue=0,Ue&&(Ue.uncache=1),ne&&en(r,"refreshInit",ne),_e&&(_e.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!V)){for(var Xe=rt.length;Xe--;)if(rt[Xe].scroller===N&&rt[Xe]!==P)return;en(N,"resize",Ma),V||en(N,"scroll",gs)}},P.kill=function(Ee,qe){P.disable(Ee,qe),I&&!qe&&I.kill(),l&&delete qc[l];var Xe=rt.indexOf(P);Xe>=0&&rt.splice(Xe,1),Xe===Tn&&jo>0&&Tn--,Xe=0,rt.forEach(function($e){return $e.scroller===P.scroller&&(Xe=1)}),Xe||wn||Ar||(P.scroll.rec=0),i&&(i.scrollTrigger=null,Ee&&i.revert({kill:!1}),qe||i.kill()),Ye&&[Ye,Ve,H,C].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),Fa===P&&(Fa=0),h&&(Ue&&(Ue.uncache=1),Xe=0,rt.forEach(function($e){return $e.pin===h&&Xe++}),Xe||(Ue.spacer=0)),n.onKill&&n.onKill(P)},rt.push(P),P.enable(!1,!1),We&&We(P),i&&i.add&&!he){var et=P.update;P.update=function(){P.update=et,at.cache++,ye||He||P.refresh()},Be.delayedCall(.01,P.update),he=.01,ye=He=0}else P.refresh();h&&ug()},r.register=function(n){return Ls||(Be=n||Dp(),Pp()&&window.document&&r.enable(),Ls=ga),Ls},r.defaults=function(n){if(n)for(var i in n)uo[i]=n[i];return uo},r.disable=function(n,i){ga=0,rt.forEach(function(a){return a[i?"kill":"disable"](n)}),en(st,"wheel",gs),en(vt,"scroll",gs),clearInterval(so),en(vt,"touchcancel",wi),en(_t,"touchstart",wi),lo(en,vt,"pointerdown,touchstart,mousedown",tf),lo(en,vt,"pointerup,touchend,mouseup",nf),_l.kill(),oo(en);for(var s=0;s<at.length;s+=3)co(en,at[s],at[s+1]),co(en,at[s],at[s+2])},r.enable=function(){if(st=window,vt=document,Zn=vt.documentElement,_t=vt.body,Be){if(Xa=Be.utils.toArray,Pa=Be.utils.clamp,Xc=Be.core.context||wi,Vl=Be.core.suppressOverwrites||wi,hh=st.history.scrollRestoration||"auto",Zc=st.pageYOffset||0,Be.core.globals("ScrollTrigger",r),_t){ga=1,Vs=document.createElement("div"),Vs.style.height="100vh",Vs.style.position="absolute",Hp(),ig(),kt.register(Be),r.isTouch=kt.isTouch,fr=kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Wc=kt.isTouch===1,tn(st,"wheel",gs),uh=[st,vt,Zn,_t],Be.matchMedia?(r.matchMedia=function(u){var d=Be.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},Be.addEventListener("matchMediaInit",function(){zp(),gh()}),Be.addEventListener("matchMediaRevert",function(){return Bp()}),Be.addEventListener("matchMedia",function(){jr(0,1),os("matchMedia")}),Be.matchMedia().add("(orientation: portrait)",function(){return Xl(),Xl})):console.warn("Requires GSAP 3.11.0 or later"),Xl(),tn(vt,"scroll",gs);var n=_t.hasAttribute("style"),i=_t.style,s=i.borderTopStyle,a=Be.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Yi(_t),Zt.m=Math.round(o.top+Zt.sc())||0,An.m=Math.round(o.left+An.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_t.setAttribute("style",""),_t.removeAttribute("style")),so=setInterval(af,250),Be.delayedCall(.5,function(){return ao=0}),tn(vt,"touchcancel",wi),tn(_t,"touchstart",wi),lo(tn,vt,"pointerdown,touchstart,mousedown",tf),lo(tn,vt,"pointerup,touchend,mouseup",nf),Gc=Be.utils.checkPrefix("transform"),Ko.push(Gc),Ls=_n(),_l=Be.delayedCall(.2,jr).pause(),Is=[vt,"visibilitychange",function(){var u=st.innerWidth,d=st.innerHeight;vt.hidden?(Kh=u,Jh=d):(Kh!==u||Jh!==d)&&Ma()},vt,"DOMContentLoaded",jr,st,"load",jr,st,"resize",Ma],oo(tn),rt.forEach(function(u){return u.enable(0,1)}),l=0;l<at.length;l+=3)co(en,at[l],at[l+1]),co(en,at[l],at[l+2])}else if(vt){var c=function u(){r.enable(),vt.removeEventListener("DOMContentLoaded",u)};vt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Gl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(so)||(so=i)&&setInterval(af,i),"ignoreMobileResize"in n&&(Wc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(oo(en)||oo(tn,n.autoRefreshEvents||"none"),Ap=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Pn(n),a=at.indexOf(s),o=ss(s);~a&&at.splice(a,o?6:2),i&&(o?Ui.unshift(st,i,_t,i,Zn,i):Ui.unshift(s,i))},r.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Xn(n)?Pn(n):n).getBoundingClientRect(),o=a[s?ns:is]*i||0;return s?a.right-o>0&&a.left+o<st.innerWidth:a.bottom-o>0&&a.top+o<st.innerHeight},r.positionInViewport=function(n,i,s){Xn(n)&&(n=Pn(n));var a=n.getBoundingClientRect(),o=a[s?ns:is],l=i==null?o/2:i in vl?vl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/st.innerWidth:(a.top+l)/st.innerHeight},r.killAll=function(n){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=as.killAll||[];as={},i.forEach(function(s){return s()})}},r})();Ze.version="3.15.1";Ze.saveStyles=function(r){return r?Xa(r).forEach(function(e){if(e&&e.style){var t=Wn.indexOf(e);t>=0&&Wn.splice(t,5),Wn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Be.core.getCache(e),Xc())}}):Wn};Ze.revert=function(r,e){return gh(!r,e)};Ze.create=function(r,e){return new Ze(r,e)};Ze.refresh=function(r){return r?Ma(!0):(Ls||Ze.register())&&jr(!0)};Ze.update=function(r){return++at.cache&&$i(r===!0?2:0)};Ze.clearScrollMemory=kp;Ze.maxScroll=function(r,e){return Pi(r,e?An:Zt)};Ze.getScrollFunc=function(r,e){return Lr(Pn(r),e?An:Zt)};Ze.getById=function(r){return qc[r]};Ze.getAll=function(){return rt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ze.isScrolling=function(){return!!hi};Ze.snapDirectional=_h;Ze.addEventListener=function(r,e){var t=as[r]||(as[r]=[]);~t.indexOf(e)||t.push(e)};Ze.removeEventListener=function(r,e){var t=as[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ze.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],f=[],h=Be.delayedCall(i,function(){u(d,f),d=[],f=[]}).pause();return function(p){d.length||h.restart(!0),d.push(p.trigger),f.push(p),s<=d.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&vn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return vn(s)&&(s=s(),tn(Ze,"refresh",function(){return s=e.batchMax()})),Xa(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ze.create(c))}),t};var ff=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},ql=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(kt.isTouch?" pinch-zoom":""):"none",e===Zn&&r(_t,t)},mo={auto:1,scroll:1},mg=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Be.core.getCache(s),o=_n(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(mo[(l=ai(s)).overflowY]||mo[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ss(s)&&(mo[(l=ai(s)).overflowY]||mo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Gp=function(e,t,n,i){return kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&mg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&tn(vt,kt.eventTypes[0],pf,!1,!0)},onDisable:function(){return en(vt,kt.eventTypes[0],pf,!0)}})},_g=/(input|label|select|textarea)/i,df,pf=function(e){var t=_g.test(e.target.tagName);(t||df)&&(e._gsapAllow=!0,df=t)},gg=function(e){Yr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Pn(e.target)||Zn,u=Be.core.globals().ScrollSmoother,d=u&&u.get(),f=fr&&(e.content&&Pn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Lr(c,Zt),p=Lr(c,An),g=1,_=(kt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,m=0,x=vn(i)?function(){return i(o)}:function(){return i||2.8},E,S,A=Gp(c,e.type,!0,s),b=function(){return S=!1},w=wi,v=wi,y=function(){l=Pi(c,Zt),v=Pa(fr?1:0,l),n&&(w=Pa(0,Pi(c,An))),E=rs},L=function(){f._gsap.y=va(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},D=function(){if(S){requestAnimationFrame(b);var F=va(o.deltaY/2),k=v(h.v-F);if(f&&k!==h.v+h.offset){h.offset=k-h.v;var P=va((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",h.cacheID=at.cache,$i()}return!0}h.offset&&L(),S=!0},N,O,V,X,z=function(){y(),N.isActive()&&N.vars.scrollY>l&&(h()>l?N.progress(1)&&h(l):N.resetTo("scrollY",l))};return f&&Be.set(f,{y:"+=0"}),e.ignoreCheck=function(U){return fr&&U.type==="touchmove"&&D()||g>1.05&&U.type!=="touchstart"||o.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){S=!1;var U=g;g=va((st.visualViewport&&st.visualViewport.scale||1)/_),N.pause(),U!==g&&ql(c,g>1.01?!0:n?!1:"x"),O=p(),V=h(),y(),E=rs},e.onRelease=e.onGestureStart=function(U,F){if(h.offset&&L(),!F)X.restart(!0);else{at.cache++;var k=x(),P,ne;n&&(P=p(),ne=P+k*.05*-U.velocityX/.227,k*=ff(p,P,ne,Pi(c,An)),N.vars.scrollX=w(ne)),P=h(),ne=P+k*.05*-U.velocityY/.227,k*=ff(h,P,ne,Pi(c,Zt)),N.vars.scrollY=v(ne),N.invalidate().duration(k).play(.01),(fr&&N.vars.scrollY>=l||P>=l-1)&&Be.to({},{onUpdate:z,duration:k})}a&&a(U)},e.onWheel=function(){N._ts&&N.pause(),_n()-m>1e3&&(E=0,m=_n())},e.onChange=function(U,F,k,P,ne){if(rs!==E&&y(),F&&n&&p(w(P[2]===F?O+(U.startX-U.x):p()+F-P[1])),k){h.offset&&L();var ie=ne[2]===k,me=ie?V+U.startY-U.y:h()+k-ne[1],Re=v(me);ie&&me!==Re&&(V+=Re-me),h(Re)}(k||F)&&$i()},e.onEnable=function(){ql(c,n?!1:"x"),Ze.addEventListener("refresh",z),tn(st,"resize",z),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=p.smooth=!1),A.enable()},e.onDisable=function(){ql(c,!0),en(st,"resize",z),Ze.removeEventListener("refresh",z),A.kill()},e.lockAxis=e.lockAxis!==!1,o=new kt(e),o.iOS=fr,fr&&!h()&&h(1),fr&&Be.ticker.add(wi),X=o._dc,N=Be.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Vp(h,h(),function(){return N.pause()})},onUpdate:$i,onComplete:X.vars.onComplete}),o};Ze.sort=function(r){if(vn(r))return rt.sort(r);var e=st.pageYOffset||0;return Ze.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),rt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ze.observe=function(r){return new kt(r)};Ze.normalizeScroll=function(r){if(typeof r>"u")return bn;if(r===!0&&bn)return bn.enable();if(r===!1){bn&&bn.kill(),bn=r;return}var e=r instanceof kt?r:gg(r);return bn&&bn.target===e.target&&bn.kill(),ss(e.target)&&(bn=e),e};Ze.core={_getVelocityProp:Vc,_inputObserver:Gp,_scrollers:at,_proxies:Ui,bridge:{ss:function(){hi||os("scrollStart"),hi=_n()},ref:function(){return mn}}};Dp()&&Be.registerPlugin(Ze);var mf="1.3.27";function Wp(r,e,t){return Math.max(r,Math.min(e,t))}function vg(r,e,t){return(1-t)*r+t*e}function xg(r,e,t,n){return vg(r,e,1-Math.exp(-t*n))}function Mg(r,e){return(r%e+e)%e}var Sg=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=Wp(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=xg(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function yg(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var Eg=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=yg(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Xp=class{events={};emit(r,...e){const t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}};const bg=100/6,sr={passive:!1};function _f(r,e){return r===1?bg:r===2?e:1}var Tg=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Xp;constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,sr),this.element.addEventListener("touchstart",this.onTouchStart,sr),this.element.addEventListener("touchmove",this.onTouchMove,sr),this.element.addEventListener("touchend",this.onTouchEnd,sr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,sr),this.element.removeEventListener("touchstart",this.onTouchStart,sr),this.element.removeEventListener("touchmove",this.onTouchMove,sr),this.element.removeEventListener("touchend",this.onTouchEnd,sr)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=_f(n,this.window.width),s=_f(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const gf=r=>Math.min(1,1.001-2**(-10*r));var wg=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Sg;emitter=new Xp;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:p=1,autoResize:g=!0,prevent:_,virtualScroll:m,overscroll:x=!0,autoRaf:E=!1,anchors:S=!1,autoToggle:A=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:v=w,stopInertiaOnNavigate:y=!1,respectReducedMotion:L=!0}={}){window.lenisVersion=mf,window.lenis||(window.lenis={}),window.lenis.version=mf,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=gf:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:h,wheelMultiplier:p,autoResize:g,prevent:_,virtualScroll:m,overscroll:x,autoRaf:E,anchors:S,autoToggle:A,allowNestedScroll:b,naiveDimensions:v,stopInertiaOnNavigate:y,respectReducedMotion:L},this.dimensions=new Eg(r,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Tg(t,{touchMultiplier:h,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}};onPointerDown=r=>{r.button===1&&this.reset()};isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],a=40,o=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=a,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=a;return o||l}onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,h=i&&n.type==="touchend";h&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:h?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?t=!0:(s=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=r,h=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let p=null;if(typeof f=="string"?(p=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),p||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(p=f),p){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();h-=this.isHorizontal?S.left:S.top}const g=p.getBoundingClientRect(),_=getComputedStyle(p),m=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),x=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);f=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(E)?0:E)}}if(typeof f=="number"){if(f+=h,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const p=f-this.animatedScroll;p>this.limit/2?f-=this.limit:p<-this.limit/2&&(f+=this.limit)}}else f=Wp(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof a=="number"&&typeof o!="function"?o=gf:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,f,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),g||this.emit(),g&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,a,o,l,c,u,d,f,h,p;if(n-(i.time??0)>2e3){i.time=Date.now();const b=window.getComputedStyle(r);if(i.computedStyle=b,s=["auto","overlay","scroll"].includes(b.overflowX),a=["auto","overlay","scroll"].includes(b.overflowY),c=["auto"].includes(b.overscrollBehaviorX),u=["auto"].includes(b.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=a,!(s||a))return!1;d=r.scrollWidth,f=r.scrollHeight,h=r.clientWidth,p=r.clientHeight,o=d>h,l=f>p,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=h,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,h=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,m,x,E,S,A;if(g==="horizontal")_=Math.round(r.scrollLeft),m=d-h,x=e,E=s,S=o,A=c;else if(g==="vertical")_=Math.round(r.scrollTop),m=f-p,x=t,E=a,S=l,A=u;else return!1;return!A&&(_>=m||_<=0)?!0:(x>0?_<m:_>0)&&E&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Mg(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};const vf={site:{title:"averybeuth.xyz",name:"averybeuth.xyz",nameHref:"./",contactText:"@avery.beuth",contactHref:"https://instagram.com/avery.beuth",zoomText:"zoom",allPhotosText:"all photos"},photos:{order:["bee-rose-rain.jpg","bee-rose-bokeh.jpg","bee-rose-closeup.jpg","sunflowers.jpg","offerings.jpg","temple-worker.jpg","statue-wires.jpg","seaweed-boat.jpg","taxi.jpg","boat-wake.jpg","corn-snake.jpg","puzzle.jpg","escalator-one.jpg","escalator-crowd.jpg","plane-window.jpg","supertrees-plane.jpg","bougainvillea-sea.jpg","moon-bird.jpg","speed-sign.jpg","sunset-wires.jpg","skyline-night.jpg","durian-market.jpg","satay.jpg","red-light.jpg","garden-projection.jpg","bougainvillea-night.jpg","cigarettes.jpg","butterfly.jpg","bonfire.jpg","fountain-firework.jpg","sparkler.jpg","fireworks.jpg","moon-rain.jpg"],features:["bee-rose-closeup.jpg","seaweed-boat.jpg","plane-window.jpg","sunset-wires.jpg","satay.jpg","bonfire.jpg","moon-rain.jpg"],zoomThrough:"sunset-wires.jpg",alt:{"bee-rose-rain.jpg":"A honeybee and an ant on a rain-wet white rose bud","bee-rose-bokeh.jpg":"A honeybee climbing a rose bud among soft white roses","bee-rose-closeup.jpg":"Close-up of a honeybee on a white rose bud in sunlight","sunflowers.jpg":"An older man photographing a field of sunflowers","offerings.jpg":"Women in sarongs preparing offerings beside the water","temple-worker.jpg":"A worker carrying sacks on a bamboo pole past a Balinese temple gate","statue-wires.jpg":"A statue of two archers framed by tangled power lines","seaweed-boat.jpg":"A seaweed farmer standing in a wooden boat on still water","taxi.jpg":"A man resting in the open boot of a blue taxi","boat-wake.jpg":"A speedboat drawing a white wake across a teal sea","corn-snake.jpg":"Close-up of a corn snake against a warm background","puzzle.jpg":"Scattered jigsaw pieces in inverted colours","escalator-one.jpg":"Two people on escalators seen from directly above","escalator-crowd.jpg":"A crowd riding escalators seen from above","plane-window.jpg":"A plane over the sea seen through a narrow gap in a wall","supertrees-plane.jpg":"A plane passing over the Supertrees in a pink dusk sky","bougainvillea-sea.jpg":"Out-of-focus bougainvillea in front of a hazy sea with a lone boat","moon-bird.jpg":"A bird crossing the rising moon above dark trees","speed-sign.jpg":"A temporary 30 sign glowing against a sunset","sunset-wires.jpg":"A bird silhouetted on power lines against a red sun","skyline-night.jpg":"A city skyline at night over dark water","durian-market.jpg":"A durian seller under bright bulbs at a night market","satay.jpg":"Smoke rising from a satay stall at night","red-light.jpg":"A red pedestrian signal against a textured wall","garden-projection.jpg":"A child in a dark room of projected flowers","bougainvillea-night.jpg":"Bougainvillea lit from below around a streetlight","cigarettes.jpg":"An overflowing pile of cigarette butts","butterfly.jpg":"A butterfly resting on a leaf at night","bonfire.jpg":"A large bonfire against a dusk sky","fountain-firework.jpg":"A fountain firework sparking on the grass in smoke","sparkler.jpg":"Sparkler light drawings in the dark","fireworks.jpg":"Golden fireworks streaking across the night","moon-rain.jpg":"The full moon behind streaks of falling rain"}},scroll:{perPhoto:1,maxTunnelScreens:65,finale:3.4,scrub:.38,lerp:.068,wheelMultiplier:.9,touchMultiplier:1.25,spaceSpeed:1.15},camera:{fov:38,speed:1,fill:.76,hold:.95,zoomHold:.7,pace:[.72,.85,1,1.12,1.2,1.3,.78],shots:["push","sweep","tilt","pullback","zoom","roll","climax"],sweep:2.2,roll:3.2,tilt:4.5,mouseLean:1.6,mouseDamping:1.6,breathing:.22,shake:1},layout:{seed:11,size:2.75,depthSpacing:3.7,spreadX:4.3,spreadY:2.15,jitter:.36,rotation:2.4,yaw:8,zoomGap:12,fogFar:115},look:{background:"#0b0c0f",backgroundLift:"#14161b",tint:.78,tintMax:.17,blur:.42,fogNear:34,fogFar:108,fog:.84,distanceDim:.34,distanceDesat:.32,grain:.018,vignette:.32,halation:.16,halationThreshold:.72,chromatic:55e-5,glow:.042,shadow:.48,radius:.024,dust:64,leaks:.015},ease:{glide:"sine.inOut",travel:"power2.inOut",settle:"power3.inOut",breathe:"sine.inOut",reveal:"expo.inOut",fade:"power1.inOut"},mobile:{camera:{fill:.9,sweep:.9,roll:2,tilt:3,shake:.7,fov:46},layout:{spreadX:1.35,spreadY:1.9,size:2.9,yaw:5},look:{dust:32,chromatic:4e-4,grain:.015},scroll:{scrub:.85}},perf:{maxPixelRatio:2,minPixelRatio:.85,targetFps:58,anisotropy:8}};function xf(r){const e=structuredClone(vf);if(!r)return e;for(const[t,n]of Object.entries(vf.mobile))Object.assign(e[t],n);return e}const Sa=r=>{const e=r.replace("#",""),t=parseInt(e.length===3?e.split("").map(n=>n+n).join(""):e,16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]},Yp=r=>r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4),Ag=r=>r<=.0031308?r*12.92:1.055*Math.pow(r,1/2.4)-.055,qp=r=>r.map(Yp),Rg=r=>r.map(Ag),xl=r=>qp(Sa(r)),Cg=(r,e=1)=>`rgba(${r.map(t=>Math.round(Math.min(1,Math.max(0,t))*255)).join(",")},${e})`,Ml=(r,e,t)=>[r[0]+(e[0]-r[0])*t,r[1]+(e[1]-r[1])*t,r[2]+(e[2]-r[2])*t],Sl=(r,e)=>[r[0]*e,r[1]*e,r[2]*e],Zp=r=>.2126*r[0]+.7152*r[1]+.0722*r[2];function _o(r){const[e,t,n]=qp(r),i=Math.cbrt(.4122214708*e+.5363325363*t+.0514459929*n),s=Math.cbrt(.2119034982*e+.6806995451*t+.1073969566*n),a=Math.cbrt(.0883024619*e+.2817188376*t+.6299787005*n);return[.2104542553*i+.793617785*s-.0040720468*a,1.9779984951*i-2.428592205*s+.4505937099*a,.0259040371*i+.7827717662*s-.808675766*a]}function go(r,e){const t=_o(Sa(r.dominant)),n=_o(Sa(e.dominant)),i=_o(Sa(r.avg)),s=_o(Sa(e.avg)),a=Math.hypot(t[0]-n[0],(t[1]-n[1])*1.6,(t[2]-n[2])*1.6),o=Math.hypot(i[0]-s[0],(i[1]-s[1])*1.6,(i[2]-s[2])*1.6);return a*.55+o*.45+Math.abs(r.luminance-e.luminance)*.8}function Pg(r,e){const t=xl(r.dominant),n=xl(r.avg),i=Ml(n,t,.72),s=Math.max(Zp(i),1e-4),a=Sl(i,1/s),o=Yp(e)*(.58+.42*Math.min(1,r.luminance*2));return Sl(Ml([1,1,1],a,.88),o)}function Mf(r,e,t,n){const i=1-Math.exp(-2.5*n);return r[0]+=(e[0]-r[0])*i,r[1]+=(e[1]-r[1])*i,r[2]+=(e[2]-r[2])*i,r}function Dg(r){let e=r>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Qo=Math.PI/180;function Lg(r,e){const t=new Map(r.map(s=>[s.file,s]));let n=e.photos.order.map(s=>t.get(s)).filter(Boolean);const i=r.filter(s=>!n.includes(s));if(n.length<2){const s=[...r].sort((a,o)=>o.luminance-a.luminance);for(n=[s.shift()];s.length;){const a=n[n.length-1];let o=0,l=1/0;s.forEach((c,u)=>{const d=go(a,c)+Math.max(0,c.luminance-a.luminance)*1.2;d<l&&(l=d,o=u)}),n.push(s.splice(o,1)[0])}return n}for(const s of i){let a=n.length,o=1/0;for(let l=0;l<=n.length;l++){const c=n[l-1],u=n[l],d=(c?go(c,s):0)+(u?go(s,u):0)-(c&&u?go(c,u):0);d<o&&(o=d,a=l)}n.splice(a,0,s)}return n}function Ig(r,e){const t=r.length,n=[0];r.forEach(u=>n.push(n[n.length-1]+u));const i=n[t]/e,s=(u,d)=>(n[d]-n[u]-i)**2,a=Array.from({length:e+1},()=>new Array(t+1).fill(1/0)),o=Array.from({length:e+1},()=>new Array(t+1).fill(0));a[0][0]=0;for(let u=1;u<=e;u++)for(let d=u;d<=t;d++)for(let f=u-1;f<d;f++){const h=a[u-1][f]+s(f,d);h<a[u][d]&&(a[u][d]=h,o[u][d]=f)}const l=[];let c=t;for(let u=e;u>=1;u--){const d=o[u][c];l.unshift([d,c]),c=d}return l}function Ug(r,e,t){const n=r.map(_=>_.photo.aspect),i=r.length,s=i>80?.052:.075,a=Math.max(1,Math.round(Math.sqrt(i/Math.max(.4,e)))),o=Math.max(1,a-5),l=Math.min(i,a+6);let c=null;for(let _=o;_<=l;_++){const m=Ig(n,_),x=m.map(([v,y])=>n.slice(v,y).reduce((L,D)=>L+D,0)+s*(y-v-1)),E=Math.max(...x),S=m.map(([v,y],L)=>(E-s*(y-v-1))/(x[L]-s*(y-v-1))),A=S.reduce((v,y)=>v+y,0)+s*(_-1),b=Math.max(...S)/Math.min(...S),w=Math.abs(Math.log(E/A/e))+(b-1)*.55;(!c||w<c.score)&&(c={score:w,rows:m,rh:S,W:E,H:A})}const{rows:u,rh:d,W:f,H:h}=c,p=[];let g=h/2;return u.forEach(([_,m],x)=>{const E=d[x];let S=-f/2;for(let A=_;A<m;A++){const b=n[A]*E;p[A]={x:S+b/2,y:g-E/2,w:b,h:E,rotZ:(t()-.5)*.5*Qo,dz:(t()-.5)*.16},S+=b+s}g-=E+s}),{slots:p,W:f,H:h}}function Fg(r,e,t){const n=e.layout,i=e.camera,s=Dg(n.seed),a=t.aspect,o=Math.tan(i.fov*Qo/2),l=a<.9,c=r.length;let u=e.photos.features.map(F=>r.findIndex(k=>k.file===F)).filter(F=>F>=0);const d=c>60?Math.min(14,Math.max(8,Math.round(c/22))):Math.max(3,Math.min(8,Math.round(c/5)));if(u.length<d){const F=Math.max(4,Math.floor(c/(d*1.6)));for(let k=0;k<d;k++){const P=Math.min(c-1,Math.round((k+.5)/d*(c-1)));u.every(ne=>Math.abs(ne-P)>=F)&&u.push(P)}}u=[...new Set(u)].sort((F,k)=>F-k);const f=new Set(u);let h=r.findIndex(F=>F.file===e.photos.zoomThrough);(!f.has(h)||h===u[u.length-1])&&(h=u[Math.min(u.length-2,Math.round(u.length*.55))]);const p=(F,k,P)=>Math.max(k/(2*o*P),F/(2*o*a*P)),g=(F,k)=>Math.min(k/(2*o),F/(2*o*a))*.93,_=c>100?n.depthSpacing*.85:n.depthSpacing,m=[];let x=0,E=s()>.5?1:-1;r.forEach((F,k)=>{const P=F.aspect,ne=n.size*Math.sqrt(P),ie=n.size/Math.sqrt(P),me=f.has(k),Re=k>0&&f.has(k-1);k>0&&(x-=_*(me?1.2:Re?1.38:1)*(1+(s()-.5)*n.jitter*.8),k-1===h&&(x-=n.zoomGap)),E=-E;let Ce,Z;if(me)Ce=E*n.spreadX*.1,Z=(s()-.5)*n.spreadY*.22;else if(Re&&!l){const ee=m[k-1],re=p(ee.w,ee.h,i.fill),Ue=ee.z-x,Le=re+Ue;if(ee.photo.aspect>=1.1&&ne<=ee.w*1.15)Ce=ee.x+E*Math.min(n.spreadX*.28,.85),Z=ee.y+(s()-.5)*n.spreadY*.35;else{const Ke=(ee.w*.5/re+.045)*Le+ne*.5,ye=Le*o*a*.86-ne*.25;Ke<ye?(Ce=ee.x+E*Ke,Z=(s()-.5)*1.15*n.spreadY):(Ce=ee.x+E*.45,Z=ee.y+(s()-.5)*.35)}}else{const ee=k*2.39996+(s()-.5)*.45,re=.65+.55*s();Ce=Math.cos(ee)*(n.spreadX*re+ne*(l?.04:.14)),Z=Math.sin(ee)*(n.spreadY*re+ie*.08),E=Ce>=0?1:-1}m.push({photo:F,i:k,w:ne,h:ie,x:Ce,y:Z,z:x,side:E,feature:me,rotZ:(s()-.5)*2*n.rotation*Qo*(me?.25:1),rotY:me?0:-E*n.yaw*Qo*(.6+.4*s()),layer:s(),seed:s()*100,zoom:k===h,fitD:p(ne,ie,i.fill),fadeNear:k===h?[.08,g(ne,ie)*.7]:l?[1.5,4.2]:[1.35,3.8]})});const S=u.map(F=>{const k=m[F],P=k.fitD;return{i:F,plane:k,d:P,cover:g(k.w,k.h),cam:{camX:k.x,camY:k.y,camZ:k.z+P,roll:k.rotZ}}}),A=m[c-1],b=l?a*1.04:a*.96,w=Ug(m,b,s),y=(l?22:13.5)/w.H,L=w.W*y,D=w.H*y,N=Math.max(D/(2*o*(l?.78:.82)),L/(2*o*a*(l?.92:.86))),O=m[0].z-4,V=A.z-10,z=S[S.length-1].cam.camZ,U=Math.hypot(L,D)/2;return m.forEach((F,k)=>{const P=w.slots[k],ne=P.w*y,ie=P.h*y;F.slot={x:P.x*y,y:P.y*y,dz:P.dz,w:ne,h:ie,rotZ:P.rotZ,scale:ne/F.w};const me=F.z<z-.5;F.deep=!me,F.start=me?{x:F.x,y:F.y,z:F.z}:{x:F.slot.x*1.45+(s()-.5)*7,y:F.slot.y*1.35+(s()-.5)*4,z:V-20-s()*18},F.delay=me?0:.08+.58*(Math.hypot(F.slot.x,F.slot.y)/U)+s()*.16,F.openDelay=Math.min(.65,.08+.45*(Math.hypot(F.slot.x,F.slot.y)/U)+k/c*.15)}),{planes:m,features:S,zoomIdx:h,N:c,tanH:o,aspect:a,portrait:l,start:{camX:0,camY:0,camZ:O+N,roll:0},mosaicOpen:{z:O,W:L,H:D,camZ:O+N,dist:N},mosaic:{z:V,W:L,H:D,camZ:V+N,dist:N}}}const vo=Math.PI/180;function Ng(r){return{camX:0,camY:0,camZ:10,yaw:0,pitch:0,roll:0,fov:r.camera.fov,openAssemble:1,assemble:0,dim:.72,text:1}}const Og=(r,e)=>{const t=Math.min(.9999,Math.max(0,e))*(r.length-1),n=Math.floor(t),i=t-n;return r[n]+(r[n+1]-r[n])*i};function Bg(r,e,t){const n=e.ease,i=e.camera,s=e.scroll,a=i.fov,o=xr.timeline({paused:!0}),l=[],c=r.features,u=c.length,d=c.findIndex(z=>z.i===r.zoomIdx),f=r.start;o.set(t,{...f,yaw:0,pitch:0,fov:a,openAssemble:1,assemble:0,dim:.72,text:1},0);const h=(z,U,F,k=n.glide)=>o.to(t,{...z,duration:Math.max(.01,F),ease:k},U),p=1.9;h({text:0},0,.55,n.fade),h({dim:0},0,.85,n.fade),h({openAssemble:0},0,p,n.glide);const g=r.N*s.perPhoto,_=s.maxTunnelScreens?Math.min(g,s.maxTunnelScreens):g,m=u*i.hold+i.zoomHold,x=Math.max(u*1.4,_-m),E=c.map((z,U)=>{const F=U===0?f.camZ:c[U-1].cam.camZ,k=Math.abs(F-z.cam.camZ),P=Og(i.pace,U/Math.max(1,u-1))*i.speed;return(Math.pow(k,.8)+4)/P}),S=E.reduce((z,U)=>z+U,0),A=E.map(z=>x*z/S);let b=0,w={...f};c.forEach((z,U)=>{const F=U===0?Math.max(A[U],p+.5):A[U],k=z.cam,P=w;let ne=i.shots[U%i.shots.length];if(U===0&&(ne="push"),ne==="zoom"&&U-1!==d&&(ne="push"),U-1===d&&(ne="zoom"),ne==="push")h({camZ:k.camZ},b,F,U===0?n.glide:n.travel),h({camX:k.camX,camY:k.camY},b+F*(U===0?.35:.06),F*(U===0?.58:.84)),h({roll:k.roll},b+F*.25,F*.7),h({fov:a+1.6},b,F*.45),h({fov:a},b+F*.45,F*.55);else if(ne==="sweep"||ne==="climax"){const me=ne==="climax"?1.35:1,Re=Math.sign(k.camX-P.camX)||1;h({camZ:k.camZ},b,F,ne==="climax"?n.settle:n.travel),h({camX:k.camX+Re*i.sweep*me},b,F*.44),h({camX:k.camX},b+F*.44,F*.44,n.settle),h({yaw:-Re*2.4*me*vo},b,F*.42),h({yaw:0},b+F*.42,F*.42,n.settle),h({camY:k.camY},b+F*.08,F*.78),h({roll:Re*(ne==="climax"?1.4:.6)*vo},b,F*.44),h({roll:k.roll},b+F*.44,F*.44)}else if(ne==="tilt")h({camZ:k.camZ},b,F,n.travel),h({camY:P.camY-1.15},b,F*.42),h({camY:k.camY},b+F*.42,F*.46,n.settle),h({pitch:i.tilt*vo},b+F*.08,F*.4),h({pitch:0},b+F*.48,F*.4,n.settle),h({camX:k.camX},b+F*.05,F*.82),h({roll:k.roll},b+F*.25,F*.6);else if(ne==="pullback")h({camZ:P.camZ+3.4},b,F*.3,n.glide),h({fov:a+5},b,F*.32),h({camZ:k.camZ},b+F*.3,F*.7,n.travel),h({fov:a},b+F*.32,F*.62),h({camX:k.camX,camY:k.camY},b+F*.28,F*.58,n.settle),h({roll:k.roll},b+F*.36,F*.52);else if(ne==="zoom"){const me=c[d],Re=me.plane.z+me.cover,Ce=F*.42;h({camZ:Re},b,Ce,n.glide),h({fov:a-3},b,Ce),h({camZ:Re-.25},b+Ce,i.zoomHold,n.breathe);const Z=b+Ce+i.zoomHold,ee=F-Ce;h({camZ:k.camZ},Z,ee,n.travel),h({fov:a},Z,ee*.78),h({camX:k.camX,camY:k.camY},Z+ee*.3,ee*.58,n.settle),h({roll:k.roll},Z+ee*.35,ee*.55),b+=i.zoomHold}else if(ne==="roll"){const me=k.camX>P.camX?1:-1;h({camZ:k.camZ},b,F,n.travel),h({roll:me*i.roll*vo},b,F*.45),h({roll:k.roll},b+F*.45,F*.45),h({camX:k.camX,camY:k.camY},b+F*.08,F*.78,n.settle)}b+=F,l.push({t:b,k:U,i:z.i});const ie=i.hold*(U===u-1?1.15:1);h({camZ:k.camZ-z.d*.045},b,ie,n.breathe),h({camX:k.camX+(U%2?.05:-.05)},b,ie,n.breathe),b+=ie,w={...k,camZ:k.camZ-z.d*.045,camX:k.camX+(U%2?.05:-.05),fov:a}});const v=r.mosaic,y=b;h({camZ:v.camZ},y,2.3,n.reveal),h({camX:0,camY:0,roll:0,yaw:0,pitch:0},y+.05,2,n.settle),h({fov:a},y,2.1),h({assemble:1},y,2.35,n.glide),h({dim:.78},y+2.7,.9,n.fade),h({text:1},y+2.95,.85,n.fade),h({camZ:v.camZ+.8},y+2.35,1.55,n.breathe),o.to({},{duration:.01},y+3.9);const L=o.duration(),D=1200,N=Math.min(.95,p*.82/L),O=Math.max(N+.01,(y-.1)/L),V=[];for(let z=0;z<=D;z++){const U=N+(O-N)*(z/D);o.progress(U),V.push({p:U,camZ:t.camZ})}const X=r.planes.map(z=>{const U=z.z+z.fitD;let F=V[0].p,k=1/0;for(let P=0;P<V.length;P++){const ne=Math.abs(V[P].camZ-U);ne<k&&(k=ne,F=V[P].p)}return F});return o.progress(0),{tl:o,marks:l,duration:L,finaleStart:y,photoProgress:X}}const vh="183",zg=0,Sf=1,kg=2,el=1,Hg=2,ya=3,Ir=0,Bn=1,qi=2,ji=0,Rr=1,jc=2,yf=3,Ef=4,Vg=5,qr=100,Gg=101,Wg=102,Xg=103,Yg=104,qg=200,Zg=201,$g=202,jg=203,Kc=204,Jc=205,Kg=206,Jg=207,Qg=208,e0=209,t0=210,n0=211,i0=212,r0=213,s0=214,Qc=0,eu=1,tu=2,Ks=3,nu=4,iu=5,ru=6,su=7,$p=0,a0=1,o0=2,Fi=0,jp=1,Kp=2,Jp=3,Qp=4,em=5,tm=6,nm=7,im=300,ls=301,Js=302,Zl=303,$l=304,Pl=306,au=1e3,Di=1001,ou=1002,on=1003,l0=1004,xo=1005,ln=1006,jl=1007,yr=1008,li=1009,rm=1010,sm=1011,qa=1012,xh=1013,Oi=1014,Li=1015,Si=1016,Mh=1017,Sh=1018,Za=1020,am=35902,om=35899,lm=1021,cm=1022,Mi=1023,tr=1026,Kr=1027,um=1028,yh=1029,Qs=1030,Eh=1031,bh=1033,tl=33776,nl=33777,il=33778,rl=33779,lu=35840,cu=35841,uu=35842,hu=35843,fu=36196,du=37492,pu=37496,mu=37488,_u=37489,gu=37490,vu=37491,xu=37808,Mu=37809,Su=37810,yu=37811,Eu=37812,bu=37813,Tu=37814,wu=37815,Au=37816,Ru=37817,Cu=37818,Pu=37819,Du=37820,Lu=37821,Iu=36492,Uu=36494,Fu=36495,Nu=36283,Ou=36284,Bu=36285,zu=36286,c0=3200,u0=0,h0=1,mr="",qn="srgb",cs="srgb-linear",yl="linear",xt="srgb",vs=7680,bf=519,f0=512,d0=513,p0=514,Th=515,m0=516,_0=517,wh=518,g0=519,Tf=35044,wf="300 es",Ii=2e3,El=2001;function v0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function bl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function x0(){const r=bl("canvas");return r.style.display="block",r}const Af={};function Rf(...r){const e="THREE."+r.shift();console.log(e,...r)}function hm(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function je(...r){r=hm(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ut(...r){r=hm(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Tl(...r){const e=r.join(" ");e in Af||(Af[e]=!0,je(...r))}function M0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const S0={[Qc]:eu,[tu]:ru,[nu]:su,[Ks]:iu,[eu]:Qc,[ru]:tu,[su]:nu,[iu]:Ks};class ta{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kl=Math.PI/180,ku=180/Math.PI;function Ka(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function y0(r,e){return(r%e+e)%e}function Jl(r,e,t){return(1-t)*r+t*e}function oa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Cn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class na{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],f=s[a+0],h=s[a+1],p=s[a+2],g=s[a+3];if(d!==g||l!==f||c!==h||u!==p){let _=l*f+c*h+u*p+d*g;_<0&&(f=-f,h=-h,p=-p,g=-g,_=-_);let m=1-o;if(_<.9995){const x=Math.acos(_),E=Math.sin(x);m=Math.sin(m*x)/E,o=Math.sin(o*x)/E,l=l*m+f*o,c=c*m+h*o,u=u*m+p*o,d=d*m+g*o}else{l=l*m+f*o,c=c*m+h*o,u=u*m+p*o,d=d*m+g*o;const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],f=s[a+1],h=s[a+2],p=s[a+3];return e[t]=o*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-o*h,e[t+2]=c*p+u*h+o*f-l*d,e[t+3]=u*p-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),f=l(n/2),h=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ql.copy(this).projectOnVector(e),this.sub(Ql)}reflect(e){return this.sub(Ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ql=new J,Cf=new na;class tt{constructor(e,t,n,i,s,a,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],p=n[8],g=i[0],_=i[3],m=i[6],x=i[1],E=i[4],S=i[7],A=i[2],b=i[5],w=i[8];return s[0]=a*g+o*x+l*A,s[3]=a*_+o*E+l*b,s[6]=a*m+o*S+l*w,s[1]=c*g+u*x+d*A,s[4]=c*_+u*E+d*b,s[7]=c*m+u*S+d*w,s[2]=f*g+h*x+p*A,s[5]=f*_+h*E+p*b,s[8]=f*m+h*S+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,p=t*d+n*f+i*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=d*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=h*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ec.makeScale(e,t)),this}rotate(e){return this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ec=new tt,Pf=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Df=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E0(){const r={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(i.r=Ws(i.r),i.g=Ws(i.g),i.b=Ws(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mr?yl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[cs]:{primaries:e,whitePoint:n,transfer:yl,toXYZ:Pf,fromXYZ:Df,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Pf,fromXYZ:Df,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),r}const ht=E0();function Ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xs;class b0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=bl("canvas")),xs.width=e.width,xs.height=e.height;const i=xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ki(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T0=0;class Ah{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Ka(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(tc(i[a].image)):s.push(tc(i[a]))}else s=tc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function tc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?b0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let w0=0;const nc=new J;class Mn extends ta{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,n=Di,i=Di,s=ln,a=yr,o=Mi,l=li,c=Mn.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Ka(),this.name="",this.source=new Ah(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nc).x}get height(){return this.source.getSize(nc).y}get depth(){return this.source.getSize(nc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==im)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case au:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case au:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=im;Mn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,n=0,i=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],g=l[2],_=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(p-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(p+_)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(h+1)/2,A=(m+1)/2,b=(u+f)/4,w=(d+g)/4,v=(p+_)/4;return E>S&&E>A?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=b/n,s=w/n):S>A?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=b/i,s=v/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=w/s,i=v/s),this.set(n,i,s,t),this}let x=Math.sqrt((_-p)*(_-p)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(_-p)/x,this.y=(d-g)/x,this.z=(f-u)/x,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A0 extends ta{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Mn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ah(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends A0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fm extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class R0 extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ft{constructor(e,t,n,i,s,a,o,l,c,u,d,f,h,p,g,_){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,f,h,p,g,_)}set(e,t,n,i,s,a,o,l,c,u,d,f,h,p,g,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=p,m[11]=g,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),a=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,p=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=p+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,p=c*u,g=c*d;t[0]=f+g*o,t[4]=p*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-p,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,p=c*u,g=c*d;t[0]=f-g*o,t[4]=-a*d,t[8]=p+h*o,t[1]=h+p*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,p=o*u,g=o*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=h*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,p=o*l,g=o*c;t[0]=l*u,t[4]=g-f*d,t[8]=p*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-g*d}else if(e.order==="XZY"){const f=a*l,h=a*c,p=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=a*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=o*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C0,e,P0)}lookAt(e,t,n){const i=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),ar.crossVectors(n,Vn),ar.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),ar.crossVectors(n,Vn)),ar.normalize(),Mo.crossVectors(Vn,ar),i[0]=ar.x,i[4]=Mo.x,i[8]=Vn.x,i[1]=ar.y,i[5]=Mo.y,i[9]=Vn.y,i[2]=ar.z,i[6]=Mo.z,i[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],p=n[2],g=n[6],_=n[10],m=n[14],x=n[3],E=n[7],S=n[11],A=n[15],b=i[0],w=i[4],v=i[8],y=i[12],L=i[1],D=i[5],N=i[9],O=i[13],V=i[2],X=i[6],z=i[10],U=i[14],F=i[3],k=i[7],P=i[11],ne=i[15];return s[0]=a*b+o*L+l*V+c*F,s[4]=a*w+o*D+l*X+c*k,s[8]=a*v+o*N+l*z+c*P,s[12]=a*y+o*O+l*U+c*ne,s[1]=u*b+d*L+f*V+h*F,s[5]=u*w+d*D+f*X+h*k,s[9]=u*v+d*N+f*z+h*P,s[13]=u*y+d*O+f*U+h*ne,s[2]=p*b+g*L+_*V+m*F,s[6]=p*w+g*D+_*X+m*k,s[10]=p*v+g*N+_*z+m*P,s[14]=p*y+g*O+_*U+m*ne,s[3]=x*b+E*L+S*V+A*F,s[7]=x*w+E*D+S*X+A*k,s[11]=x*v+E*N+S*z+A*P,s[15]=x*y+E*O+S*U+A*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],g=e[7],_=e[11],m=e[15],x=l*h-c*f,E=o*h-c*d,S=o*f-l*d,A=a*h-c*u,b=a*f-l*u,w=a*d-o*u;return t*(g*x-_*E+m*S)-n*(p*x-_*A+m*b)+i*(p*E-g*A+m*w)-s*(p*S-g*b+_*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],g=e[13],_=e[14],m=e[15],x=t*o-n*a,E=t*l-i*a,S=t*c-s*a,A=n*l-i*o,b=n*c-s*o,w=i*c-s*l,v=u*g-d*p,y=u*_-f*p,L=u*m-h*p,D=d*_-f*g,N=d*m-h*g,O=f*m-h*_,V=x*O-E*N+S*D+A*L-b*y+w*v;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/V;return e[0]=(o*O-l*N+c*D)*X,e[1]=(i*N-n*O-s*D)*X,e[2]=(g*w-_*b+m*A)*X,e[3]=(f*b-d*w-h*A)*X,e[4]=(l*L-a*O-c*y)*X,e[5]=(t*O-i*L+s*y)*X,e[6]=(_*S-p*w-m*E)*X,e[7]=(u*w-f*S+h*E)*X,e[8]=(a*N-o*L+c*v)*X,e[9]=(n*L-t*N-s*v)*X,e[10]=(p*b-g*S+m*x)*X,e[11]=(d*S-u*b-h*x)*X,e[12]=(o*y-a*D-l*v)*X,e[13]=(t*D-n*y+i*v)*X,e[14]=(g*E-p*A-_*x)*X,e[15]=(u*A-d*E+f*x)*X,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,p=s*d,g=a*u,_=a*d,m=o*d,x=l*c,E=l*u,S=l*d,A=n.x,b=n.y,w=n.z;return i[0]=(1-(g+m))*A,i[1]=(h+S)*A,i[2]=(p-E)*A,i[3]=0,i[4]=(h-S)*b,i[5]=(1-(f+m))*b,i[6]=(_+x)*b,i[7]=0,i[8]=(p+E)*w,i[9]=(_-x)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ms.set(i[0],i[1],i[2]).length();const o=Ms.set(i[4],i[5],i[6]).length(),l=Ms.set(i[8],i[9],i[10]).length();s<0&&(a=-a),pi.copy(this);const c=1/a,u=1/o,d=1/l;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=d,pi.elements[9]*=d,pi.elements[10]*=d,t.setFromRotationMatrix(pi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Ii,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let p,g;if(l)p=s/(a-s),g=a*s/(a-s);else if(o===Ii)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===El)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ii,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),h=-(n+i)/(n-i);let p,g;if(l)p=1/(a-s),g=a/(a-s);else if(o===Ii)p=-2/(a-s),g=-(a+s)/(a-s);else if(o===El)p=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ms=new J,pi=new Ft,C0=new J(0,0,0),P0=new J(1,1,1),ar=new J,Mo=new J,Vn=new J,Lf=new Ft,If=new na;class nr{constructor(e=0,t=0,n=0,i=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return If.setFromEuler(this),this.setFromQuaternion(If,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class Rh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let D0=0;const Uf=new J,Ss=new na,zi=new Ft,So=new J,la=new J,L0=new J,I0=new na,Ff=new J(1,0,0),Nf=new J(0,1,0),Of=new J(0,0,1),Bf={type:"added"},U0={type:"removed"},ys={type:"childadded",child:null},ic={type:"childremoved",child:null};class zn extends ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new J,t=new nr,n=new na,i=new J(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ft},normalMatrix:{value:new tt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Ff,e)}rotateY(e){return this.rotateOnAxis(Nf,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,t){return Uf.copy(e).applyQuaternion(this.quaternion),this.position.add(Uf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ff,e)}translateY(e){return this.translateOnAxis(Nf,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?So.copy(e):So.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(la,So,this.up):zi.lookAt(So,la,this.up),this.quaternion.setFromRotationMatrix(zi),i&&(zi.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(zi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bf),ys.child=e,this.dispatchEvent(ys),ys.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(U0),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bf),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,L0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,I0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}zn.DEFAULT_UP=new J(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ea extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F0={type:"move"};class rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),m=this._getHandJoint(c,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ea;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},yo={h:0,s:0,l:0};function sc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=y0(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=sc(a,s,e+1/3),this.g=sc(a,s,e),this.b=sc(a,s,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=qn){function n(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qn){const n=dm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return ht.workingToColorSpace(pn.copy(this),e),Math.round(ot(pn.r*255,0,255))*65536+Math.round(ot(pn.g*255,0,255))*256+Math.round(ot(pn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(pn.copy(this),t);const n=pn.r,i=pn.g,s=pn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=qn){ht.workingToColorSpace(pn.copy(this),e);const t=pn.r,n=pn.g,i=pn.b;return e!==qn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(yo);const n=Jl(or.h,yo.h,t),i=Jl(or.s,yo.s,t),s=Jl(or.l,yo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new pt;pt.NAMES=dm;class zf extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nr,this.environmentIntensity=1,this.environmentRotation=new nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mi=new J,ki=new J,ac=new J,Hi=new J,Es=new J,bs=new J,kf=new J,oc=new J,lc=new J,cc=new J,uc=new It,hc=new It,fc=new It;class xi{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mi.subVectors(e,t),i.cross(mi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){mi.subVectors(i,t),ki.subVectors(n,t),ac.subVectors(e,t);const a=mi.dot(mi),o=mi.dot(ki),l=mi.dot(ac),c=ki.dot(ki),u=ki.dot(ac),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,p=(a*u-o*l)*f;return s.set(1-h-p,p,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hi.x),l.addScaledVector(a,Hi.y),l.addScaledVector(o,Hi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return uc.setScalar(0),hc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(e,t),hc.fromBufferAttribute(e,n),fc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(uc,s.x),a.addScaledVector(hc,s.y),a.addScaledVector(fc,s.z),a}static isFrontFacing(e,t,n,i){return mi.subVectors(n,t),ki.subVectors(e,t),mi.cross(ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),mi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return xi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Es.subVectors(i,n),bs.subVectors(s,n),oc.subVectors(e,n);const l=Es.dot(oc),c=bs.dot(oc);if(l<=0&&c<=0)return t.copy(n);lc.subVectors(e,i);const u=Es.dot(lc),d=bs.dot(lc);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Es,a);cc.subVectors(e,s);const h=Es.dot(cc),p=bs.dot(cc);if(p>=0&&h<=p)return t.copy(s);const g=h*c-l*p;if(g<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(bs,o);const _=u*p-h*d;if(_<=0&&d-u>=0&&h-p>=0)return kf.subVectors(s,i),o=(d-u)/(d-u+(h-p)),t.copy(i).addScaledVector(kf,o);const m=1/(_+g+f);return a=g*m,o=f*m,t.copy(n).addScaledVector(Es,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ja{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_i):_i.fromBufferAttribute(s,a),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),bo.subVectors(this.max,ca),Ts.subVectors(e.a,ca),ws.subVectors(e.b,ca),As.subVectors(e.c,ca),lr.subVectors(ws,Ts),cr.subVectors(As,ws),Br.subVectors(Ts,As);let t=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Br.z,Br.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Br.z,0,-Br.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Br.y,Br.x,0];return!dc(t,Ts,ws,As,bo)||(t=[1,0,0,0,1,0,0,0,1],!dc(t,Ts,ws,As,bo))?!1:(To.crossVectors(lr,cr),t=[To.x,To.y,To.z],dc(t,Ts,ws,As,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new J,new J,new J,new J,new J,new J,new J,new J],_i=new J,Eo=new Ja,Ts=new J,ws=new J,As=new J,lr=new J,cr=new J,Br=new J,ca=new J,bo=new J,To=new J,zr=new J;function dc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){zr.fromArray(r,s);const o=i.x*Math.abs(zr.x)+i.y*Math.abs(zr.y)+i.z*Math.abs(zr.z),l=e.dot(zr),c=t.dot(zr),u=n.dot(zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ht=new J,wo=new ct;let N0=0;class In{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tf,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array),i=Cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array),i=Cn(i,this.array),s=Cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tf&&(e.usage=this.usage),e}}class pm extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mm extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ji extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}}const O0=new Ja,ua=new J,pc=new J;class Dl{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):O0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);const t=ua.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ua,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(pc)),this.expandByPoint(ua.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let B0=0;const ii=new Ft,mc=new zn,Rs=new J,Gn=new Ja,ha=new Ja,Qt=new J;class fi extends ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v0(e)?mm:pm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return mc.lookAt(e),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ji(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ha.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Gn.min,ha.min),Gn.expandByPoint(Qt),Qt.addVectors(Gn.max,ha.max),Gn.expandByPoint(Qt)):(Gn.expandByPoint(ha.min),Gn.expandByPoint(ha.max))}Gn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Qt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Qt.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(e,c),Qt.add(Rs)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new J,l[v]=new J;const c=new J,u=new J,d=new J,f=new ct,h=new ct,p=new ct,g=new J,_=new J;function m(v,y,L){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,L),f.fromBufferAttribute(s,v),h.fromBufferAttribute(s,y),p.fromBufferAttribute(s,L),u.sub(c),d.sub(c),h.sub(f),p.sub(f);const D=1/(h.x*p.y-p.x*h.y);isFinite(D)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(D),_.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(D),o[v].add(g),o[y].add(g),o[L].add(g),l[v].add(_),l[y].add(_),l[L].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,y=x.length;v<y;++v){const L=x[v],D=L.start,N=L.count;for(let O=D,V=D+N;O<V;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new J,S=new J,A=new J,b=new J;function w(v){A.fromBufferAttribute(i,v),b.copy(A);const y=o[v];E.copy(y),E.sub(A.multiplyScalar(A.dot(y))).normalize(),S.crossVectors(b,y);const D=S.dot(l[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,D)}for(let v=0,y=x.length;v<y;++v){const L=x[v],D=L.start,N=L.count;for(let O=D,V=D+N;O<V;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new J,s=new J,a=new J,o=new J,l=new J,c=new J,u=new J,d=new J;if(e)for(let f=0,h=e.count;f<h;f+=3){const p=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,p=0;for(let g=0,_=l.length;g<_;g++){o.isInterleavedBufferAttribute?h=l[g]*o.data.stride+o.offset:h=l[g]*u;for(let m=0;m<u;m++)f[p++]=c[h++]}return new In(f,u,d)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let z0=0;class Qa extends ta{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=Rr,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Jc,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==Ir&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kc&&(n.blendSrc=this.blendSrc),this.blendDst!==Jc&&(n.blendDst=this.blendDst),this.blendEquation!==qr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Gi=new J,_c=new J,Ao=new J,ur=new J,gc=new J,Ro=new J,vc=new J;class Ch{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_c.copy(e).add(t).multiplyScalar(.5),Ao.copy(t).sub(e).normalize(),ur.copy(this.origin).sub(_c);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ao),o=ur.dot(this.direction),l=-ur.dot(Ao),c=ur.lengthSq(),u=Math.abs(1-a*a);let d,f,h,p;if(u>0)if(d=a*l-o,f=a*o-l,p=s*u,d>=0)if(f>=-p)if(f<=p){const g=1/u;d*=g,f*=g,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(_c).addScaledVector(Ao,f),h}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const n=Gi.dot(this.direction),i=Gi.dot(Gi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,i,s){gc.subVectors(t,e),Ro.subVectors(n,e),vc.crossVectors(gc,Ro);let a=this.direction.dot(vc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ur.subVectors(this.origin,e);const l=o*this.direction.dot(Ro.crossVectors(ur,Ro));if(l<0)return null;const c=o*this.direction.dot(gc.cross(ur));if(c<0||l+c>a)return null;const u=-o*ur.dot(vc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _m extends Qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=$p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hf=new Ft,kr=new Ch,Co=new Dl,Vf=new J,Po=new J,Do=new J,Lo=new J,xc=new J,Io=new J,Gf=new J,Uo=new J;class Jn extends zn{constructor(e=new fi,t=new _m){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Io.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(xc.fromBufferAttribute(d,e),a?Io.addScaledVector(xc,u):Io.addScaledVector(xc.sub(t),u))}t.add(Io)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(Co.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Co,Vf)===null||kr.origin.distanceToSquared(Vf)>(e.far-e.near)**2))&&(Hf.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Hf),!(n.boundingBox!==null&&kr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,g=f.length;p<g;p++){const _=f[p],m=a[_.materialIndex],x=Math.max(_.start,h.start),E=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let S=x,A=E;S<A;S+=3){const b=o.getX(S),w=o.getX(S+1),v=o.getX(S+2);i=Fo(this,m,e,n,c,u,d,b,w,v),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const p=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let _=p,m=g;_<m;_+=3){const x=o.getX(_),E=o.getX(_+1),S=o.getX(_+2);i=Fo(this,a,e,n,c,u,d,x,E,S),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,g=f.length;p<g;p++){const _=f[p],m=a[_.materialIndex],x=Math.max(_.start,h.start),E=Math.min(l.count,Math.min(_.start+_.count,h.start+h.count));for(let S=x,A=E;S<A;S+=3){const b=S,w=S+1,v=S+2;i=Fo(this,m,e,n,c,u,d,b,w,v),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const p=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let _=p,m=g;_<m;_+=3){const x=_,E=_+1,S=_+2;i=Fo(this,a,e,n,c,u,d,x,E,S),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}}function k0(r,e,t,n,i,s,a,o){let l;if(e.side===Bn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Ir,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Uo);return c<t.near||c>t.far?null:{distance:c,point:Uo.clone(),object:r}}function Fo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Po),r.getVertexPosition(l,Do),r.getVertexPosition(c,Lo);const u=k0(r,e,t,n,Po,Do,Lo,Gf);if(u){const d=new J;xi.getBarycoord(Gf,Po,Do,Lo,d),i&&(u.uv=xi.getInterpolatedAttribute(i,o,l,c,d,new ct)),s&&(u.uv1=xi.getInterpolatedAttribute(s,o,l,c,d,new ct)),a&&(u.normal=xi.getInterpolatedAttribute(a,o,l,c,d,new J),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new J,materialIndex:0};xi.getNormal(Po,Do,Lo,f.normal),u.face=f,u.barycoord=d}return u}class H0 extends Mn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=on,u=on,d,f){super(null,a,o,l,c,u,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mc=new J,V0=new J,G0=new tt;class pr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Mc.subVectors(n,t).cross(V0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Mc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||G0.getNormalMatrix(e),i=this.coplanarPoint(Mc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Dl,W0=new ct(.5,.5),No=new J;class gm{constructor(e=new pr,t=new pr,n=new pr,i=new pr,s=new pr,a=new pr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ii,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],p=s[8],g=s[9],_=s[10],m=s[11],x=s[12],E=s[13],S=s[14],A=s[15];if(i[0].setComponents(c-a,h-u,m-p,A-x).normalize(),i[1].setComponents(c+a,h+u,m+p,A+x).normalize(),i[2].setComponents(c+o,h+d,m+g,A+E).normalize(),i[3].setComponents(c-o,h-d,m-g,A-E).normalize(),n)i[4].setComponents(l,f,_,S).normalize(),i[5].setComponents(c-l,h-f,m-_,A-S).normalize();else if(i[4].setComponents(c-l,h-f,m-_,A-S).normalize(),t===Ii)i[5].setComponents(c+l,h+f,m+_,A+S).normalize();else if(t===El)i[5].setComponents(l,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const t=W0.distanceTo(e.center);return Hr.radius=.7071067811865476+t,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(No.x=i.normal.x>0?e.max.x:e.min.x,No.y=i.normal.y>0?e.max.y:e.min.y,No.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class X0 extends Qa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wf=new Ft,Hu=new Ch,Oo=new Dl,Bo=new J;class Y0 extends zn{constructor(e=new fi,t=new X0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(i),Oo.radius+=s,e.ray.intersectsSphere(Oo)===!1)return;Wf.copy(i).invert(),Hu.copy(e.ray).applyMatrix4(Wf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let p=f,g=h;p<g;p++){const _=c.getX(p);Bo.fromBufferAttribute(d,_),Xf(Bo,_,l,i,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let p=f,g=h;p<g;p++)Bo.fromBufferAttribute(d,p),Xf(Bo,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xf(r,e,t,n,i,s,a){const o=Hu.distanceSqToPoint(r);if(o<t){const l=new J;Hu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class vm extends Mn{constructor(e=[],t=ls,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $a extends Mn{constructor(e,t,n=Oi,i,s,a,o=on,l=on,c,u=tr,d=1){if(u!==tr&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ah(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class q0 extends $a{constructor(e,t=Oi,n=ls,i,s,a=on,o=on,l,c=tr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xm extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class eo extends fi{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ji(c,3)),this.setAttribute("normal",new Ji(u,3)),this.setAttribute("uv",new Ji(d,2));function p(g,_,m,x,E,S,A,b,w,v,y){const L=S/w,D=A/v,N=S/2,O=A/2,V=b/2,X=w+1,z=v+1;let U=0,F=0;const k=new J;for(let P=0;P<z;P++){const ne=P*D-O;for(let ie=0;ie<X;ie++){const me=ie*L-N;k[g]=me*x,k[_]=ne*E,k[m]=V,c.push(k.x,k.y,k.z),k[g]=0,k[_]=0,k[m]=b>0?1:-1,u.push(k.x,k.y,k.z),d.push(ie/w),d.push(1-P/v),U+=1}}for(let P=0;P<v;P++)for(let ne=0;ne<w;ne++){const ie=f+ne+X*P,me=f+ne+X*(P+1),Re=f+(ne+1)+X*(P+1),Ce=f+(ne+1)+X*P;l.push(ie,me,Ce),l.push(me,Re,Ce),F+=6}o.addGroup(h,F,y),h+=F,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class to extends fi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,f=t/l,h=[],p=[],g=[],_=[];for(let m=0;m<u;m++){const x=m*f-a;for(let E=0;E<c;E++){const S=E*d-s;p.push(S,-x,0),g.push(0,0,1),_.push(E/o),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const E=x+c*m,S=x+c*(m+1),A=x+1+c*(m+1),b=x+1+c*m;h.push(E,S,b),h.push(S,A,b)}this.setIndex(h),this.setAttribute("position",new Ji(p,3)),this.setAttribute("normal",new Ji(g,3)),this.setAttribute("uv",new Ji(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.widthSegments,e.heightSegments)}}function ea(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function En(r){const e={};for(let t=0;t<r.length;t++){const n=ea(r[t]);for(const i in n)e[i]=n[i]}return e}function Z0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Mm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const $0={clone:ea,merge:En};var j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends Qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=Z0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class J0 extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Q0 extends Qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ev extends Qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zo=new J,ko=new na,Ei=new J;class Sm extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zo,ko,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,ko,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(zo,ko,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,ko,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new J,Yf=new ct,qf=new ct;class oi extends Sm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ku*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ku*2*Math.atan(Math.tan(Kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,t){return this.getViewBounds(e,Yf,qf),t.subVectors(qf,Yf)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ph extends Sm{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cs=-90,Ps=1;class tv extends zn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new oi(Cs,Ps,e,t);i.layers=this.layers,this.add(i);const s=new oi(Cs,Ps,e,t);s.layers=this.layers,this.add(s);const a=new oi(Cs,Ps,e,t);a.layers=this.layers,this.add(a);const o=new oi(Cs,Ps,e,t);o.layers=this.layers,this.add(o);const l=new oi(Cs,Ps,e,t);l.layers=this.layers,this.add(l);const c=new oi(Cs,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===El)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class nv extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Zf=new Ft;class iv{constructor(e,t,n=0,i=1/0){this.ray=new Ch(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Rh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zf),this}intersectObject(e,t=!0,n=[]){return Vu(e,this,n,t),n.sort($f),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Vu(e[i],this,n,t);return n.sort($f),n}}function $f(r,e){return r.distance-e.distance}function Vu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Vu(s[a],e,t,!0)}}function jf(r,e,t,n){const i=rv(n);switch(t){case lm:return r*e;case um:return r*e/i.components*i.byteLength;case yh:return r*e/i.components*i.byteLength;case Qs:return r*e*2/i.components*i.byteLength;case Eh:return r*e*2/i.components*i.byteLength;case cm:return r*e*3/i.components*i.byteLength;case Mi:return r*e*4/i.components*i.byteLength;case bh:return r*e*4/i.components*i.byteLength;case tl:case nl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case il:case rl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cu:case hu:return Math.max(r,16)*Math.max(e,8)/4;case lu:case uu:return Math.max(r,8)*Math.max(e,8)/2;case fu:case du:case mu:case _u:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pu:case gu:case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Su:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case yu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case bu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case wu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Au:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Pu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Du:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Lu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Iu:case Uu:case Fu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Nu:case Ou:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Bu:case zu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rv(r){switch(r){case li:case rm:return{byteLength:1,components:1};case qa:case sm:case Si:return{byteLength:2,components:1};case Mh:case Sh:return{byteLength:2,components:4};case Oi:case xh:case Li:return{byteLength:4,components:1};case am:case om:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);function ym(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function sv(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){const p=d[f],g=d[h];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++f,d[f]=g)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){const g=d[h];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ov=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ov=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$v=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ex=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ix=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ox=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ix=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ux=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_M=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:av,alphahash_pars_fragment:ov,alphamap_fragment:lv,alphamap_pars_fragment:cv,alphatest_fragment:uv,alphatest_pars_fragment:hv,aomap_fragment:fv,aomap_pars_fragment:dv,batching_pars_vertex:pv,batching_vertex:mv,begin_vertex:_v,beginnormal_vertex:gv,bsdfs:vv,iridescence_fragment:xv,bumpmap_pars_fragment:Mv,clipping_planes_fragment:Sv,clipping_planes_pars_fragment:yv,clipping_planes_pars_vertex:Ev,clipping_planes_vertex:bv,color_fragment:Tv,color_pars_fragment:wv,color_pars_vertex:Av,color_vertex:Rv,common:Cv,cube_uv_reflection_fragment:Pv,defaultnormal_vertex:Dv,displacementmap_pars_vertex:Lv,displacementmap_vertex:Iv,emissivemap_fragment:Uv,emissivemap_pars_fragment:Fv,colorspace_fragment:Nv,colorspace_pars_fragment:Ov,envmap_fragment:Bv,envmap_common_pars_fragment:zv,envmap_pars_fragment:kv,envmap_pars_vertex:Hv,envmap_physical_pars_fragment:Jv,envmap_vertex:Vv,fog_vertex:Gv,fog_pars_vertex:Wv,fog_fragment:Xv,fog_pars_fragment:Yv,gradientmap_pars_fragment:qv,lightmap_pars_fragment:Zv,lights_lambert_fragment:$v,lights_lambert_pars_fragment:jv,lights_pars_begin:Kv,lights_toon_fragment:Qv,lights_toon_pars_fragment:ex,lights_phong_fragment:tx,lights_phong_pars_fragment:nx,lights_physical_fragment:ix,lights_physical_pars_fragment:rx,lights_fragment_begin:sx,lights_fragment_maps:ax,lights_fragment_end:ox,logdepthbuf_fragment:lx,logdepthbuf_pars_fragment:cx,logdepthbuf_pars_vertex:ux,logdepthbuf_vertex:hx,map_fragment:fx,map_pars_fragment:dx,map_particle_fragment:px,map_particle_pars_fragment:mx,metalnessmap_fragment:_x,metalnessmap_pars_fragment:gx,morphinstance_vertex:vx,morphcolor_vertex:xx,morphnormal_vertex:Mx,morphtarget_pars_vertex:Sx,morphtarget_vertex:yx,normal_fragment_begin:Ex,normal_fragment_maps:bx,normal_pars_fragment:Tx,normal_pars_vertex:wx,normal_vertex:Ax,normalmap_pars_fragment:Rx,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Px,clearcoat_pars_fragment:Dx,iridescence_pars_fragment:Lx,opaque_fragment:Ix,packing:Ux,premultiplied_alpha_fragment:Fx,project_vertex:Nx,dithering_fragment:Ox,dithering_pars_fragment:Bx,roughnessmap_fragment:zx,roughnessmap_pars_fragment:kx,shadowmap_pars_fragment:Hx,shadowmap_pars_vertex:Vx,shadowmap_vertex:Gx,shadowmask_pars_fragment:Wx,skinbase_vertex:Xx,skinning_pars_vertex:Yx,skinning_vertex:qx,skinnormal_vertex:Zx,specularmap_fragment:$x,specularmap_pars_fragment:jx,tonemapping_fragment:Kx,tonemapping_pars_fragment:Jx,transmission_fragment:Qx,transmission_pars_fragment:eM,uv_pars_fragment:tM,uv_pars_vertex:nM,uv_vertex:iM,worldpos_vertex:rM,background_vert:sM,background_frag:aM,backgroundCube_vert:oM,backgroundCube_frag:lM,cube_vert:cM,cube_frag:uM,depth_vert:hM,depth_frag:fM,distance_vert:dM,distance_frag:pM,equirect_vert:mM,equirect_frag:_M,linedashed_vert:gM,linedashed_frag:vM,meshbasic_vert:xM,meshbasic_frag:MM,meshlambert_vert:SM,meshlambert_frag:yM,meshmatcap_vert:EM,meshmatcap_frag:bM,meshnormal_vert:TM,meshnormal_frag:wM,meshphong_vert:AM,meshphong_frag:RM,meshphysical_vert:CM,meshphysical_frag:PM,meshtoon_vert:DM,meshtoon_frag:LM,points_vert:IM,points_frag:UM,shadow_vert:FM,shadow_frag:NM,sprite_vert:OM,sprite_frag:BM},Te={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Ai={basic:{uniforms:En([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:En([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:En([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:En([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:En([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new pt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:En([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:En([Te.points,Te.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:En([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:En([Te.common,Te.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:En([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:En([Te.sprite,Te.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:En([Te.common,Te.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:En([Te.lights,Te.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Ai.physical={uniforms:En([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Ho={r:0,b:0,g:0},Vr=new nr,zM=new Ft;function kM(r,e,t,n,i,s){const a=new pt(0);let o=i===!0?0:1,l,c,u=null,d=0,f=null;function h(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const S=x.backgroundBlurriness>0;E=e.get(E,S)}return E}function p(x){let E=!1;const S=h(x);S===null?_(a,o):S&&S.isColor&&(_(S,1),E=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(x,E){const S=h(E);S&&(S.isCubeTexture||S.mapping===Pl)?(c===void 0&&(c=new Jn(new eo(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:ea(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Vr.copy(E.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zM.makeRotationFromEuler(Vr)),c.material.toneMapped=ht.getTransfer(S.colorSpace)!==xt,(u!==S||d!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Jn(new to(2,2),new sn({name:"BackgroundMaterial",uniforms:ea(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ht.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function _(x,E){x.getRGB(Ho,Mm(r)),t.buffers.color.setClear(Ho.r,Ho.g,Ho.b,E,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,_(a,o)},render:p,addToRenderList:g,dispose:m}}function HM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(D,N,O,V,X){let z=!1;const U=d(D,V,O,N);s!==U&&(s=U,c(s.object)),z=h(D,V,O,X),z&&p(D,V,O,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,S(D,N,O,V),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function u(D){return r.deleteVertexArray(D)}function d(D,N,O,V){const X=V.wireframe===!0;let z=n[N.id];z===void 0&&(z={},n[N.id]=z);const U=D.isInstancedMesh===!0?D.id:0;let F=z[U];F===void 0&&(F={},z[U]=F);let k=F[O.id];k===void 0&&(k={},F[O.id]=k);let P=k[X];return P===void 0&&(P=f(l()),k[X]=P),P}function f(D){const N=[],O=[],V=[];for(let X=0;X<t;X++)N[X]=0,O[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:V,object:D,attributes:{},index:null}}function h(D,N,O,V){const X=s.attributes,z=N.attributes;let U=0;const F=O.getAttributes();for(const k in F)if(F[k].location>=0){const ne=X[k];let ie=z[k];if(ie===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),ne===void 0||ne.attribute!==ie||ie&&ne.data!==ie.data)return!0;U++}return s.attributesNum!==U||s.index!==V}function p(D,N,O,V){const X={},z=N.attributes;let U=0;const F=O.getAttributes();for(const k in F)if(F[k].location>=0){let ne=z[k];ne===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));const ie={};ie.attribute=ne,ne&&ne.data&&(ie.data=ne.data),X[k]=ie,U++}s.attributes=X,s.attributesNum=U,s.index=V}function g(){const D=s.newAttributes;for(let N=0,O=D.length;N<O;N++)D[N]=0}function _(D){m(D,0)}function m(D,N){const O=s.newAttributes,V=s.enabledAttributes,X=s.attributeDivisors;O[D]=1,V[D]===0&&(r.enableVertexAttribArray(D),V[D]=1),X[D]!==N&&(r.vertexAttribDivisor(D,N),X[D]=N)}function x(){const D=s.newAttributes,N=s.enabledAttributes;for(let O=0,V=N.length;O<V;O++)N[O]!==D[O]&&(r.disableVertexAttribArray(O),N[O]=0)}function E(D,N,O,V,X,z,U){U===!0?r.vertexAttribIPointer(D,N,O,X,z):r.vertexAttribPointer(D,N,O,V,X,z)}function S(D,N,O,V){g();const X=V.attributes,z=O.getAttributes(),U=N.defaultAttributeValues;for(const F in z){const k=z[F];if(k.location>=0){let P=X[F];if(P===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),P!==void 0){const ne=P.normalized,ie=P.itemSize,me=e.get(P);if(me===void 0)continue;const Re=me.buffer,Ce=me.type,Z=me.bytesPerElement,ee=Ce===r.INT||Ce===r.UNSIGNED_INT||P.gpuType===xh;if(P.isInterleavedBufferAttribute){const re=P.data,Ue=re.stride,Le=P.offset;if(re.isInstancedInterleavedBuffer){for(let Pe=0;Pe<k.locationSize;Pe++)m(k.location+Pe,re.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Pe=0;Pe<k.locationSize;Pe++)_(k.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let Pe=0;Pe<k.locationSize;Pe++)E(k.location+Pe,ie/k.locationSize,Ce,ne,Ue*Z,(Le+ie/k.locationSize*Pe)*Z,ee)}else{if(P.isInstancedBufferAttribute){for(let re=0;re<k.locationSize;re++)m(k.location+re,P.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let re=0;re<k.locationSize;re++)_(k.location+re);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let re=0;re<k.locationSize;re++)E(k.location+re,ie/k.locationSize,Ce,ne,ie*Z,ie/k.locationSize*re*Z,ee)}}else if(U!==void 0){const ne=U[F];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(k.location,ne);break;case 3:r.vertexAttrib3fv(k.location,ne);break;case 4:r.vertexAttrib4fv(k.location,ne);break;default:r.vertexAttrib1fv(k.location,ne)}}}}x()}function A(){y();for(const D in n){const N=n[D];for(const O in N){const V=N[O];for(const X in V){const z=V[X];for(const U in z)u(z[U].object),delete z[U];delete V[X]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;const N=n[D.id];for(const O in N){const V=N[O];for(const X in V){const z=V[X];for(const U in z)u(z[U].object),delete z[U];delete V[X]}}delete n[D.id]}function w(D){for(const N in n){const O=n[N];for(const V in O){const X=O[V];if(X[D.id]===void 0)continue;const z=X[D.id];for(const U in z)u(z[U].object),delete z[U];delete X[D.id]}}}function v(D){for(const N in n){const O=n[N],V=D.isInstancedMesh===!0?D.id:0,X=O[V];if(X!==void 0){for(const z in X){const U=X[z];for(const F in U)u(U[F].object),delete U[F];delete X[z]}delete O[V],Object.keys(O).length===0&&delete n[N]}}}function y(){L(),a=!0,s!==i&&(s=i,c(s.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:y,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:_,disableUnusedAttributes:x}}function VM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,n,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)a(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g]*f[g];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function GM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Mi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const v=w===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==li&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Li&&!v)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:S,maxSamples:A,samples:b}}function WM(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new pr,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const p=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,m=r.get(d);if(!i||p===null||p.length===0||s&&!_)s?u(null):c();else{const x=s?0:n,E=x*4;let S=m.clippingState||null;l.value=S,S=u(p,f,E,h);for(let A=0;A!==E;++A)S[A]=t[A];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,p){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=l.value,p!==!0||_===null){const m=h+g*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(_===null||_.length<m)&&(_=new Float32Array(m));for(let E=0,S=h;E!==g;++E,S+=4)a.copy(d[E]).applyMatrix4(x,o),a.normal.toArray(_,S),_[S+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}const Er=4,Kf=[.125,.215,.35,.446,.526,.582],Zr=20,XM=256,fa=new Ph,Jf=new pt;let Sc=null,yc=0,Ec=0,bc=!1;const YM=new J;class Qf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=YM}=s;Sc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,yc,Ec),this._renderer.xr.enabled=bc,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Si,format:Mi,colorSpace:cs,depthBuffer:!1},i=ed(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qM(s)),this._blurMaterial=$M(s,e,t),this._ggxMaterial=ZM(s,e,t)}return i}_compileMaterial(e){const t=new Jn(new fi,e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,n,i,s){const l=new oi(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Jf),d.toneMapping=Fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jn(new eo,new _m({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,_=g.material;let m=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,m=!0):(_.color.copy(Jf),m=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const A=this._cubeSize;Ds(i,S*A,E>2?A:0,A,A),d.setRenderTarget(i),m&&d.render(g,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ls||e.mapping===Js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ds(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:p}=this,g=this._sizeLods[n],_=3*g*(n>p-Er?n-p+Er:0),m=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=p-t,Ds(s,_,m,3*g,2*g),i.setRenderTarget(s),i.render(o,fa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Ds(e,_,m,3*g,2*g),i.setRenderTarget(e),i.render(o,fa)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ut("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=c;const f=c.uniforms,h=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Zr-1),g=s/p,_=isFinite(s)?1+Math.floor(u*g):Zr;_>Zr&&je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Zr}`);const m=[];let x=0;for(let w=0;w<Zr;++w){const v=w/g,y=Math.exp(-v*v/2);m.push(y),w===0?x+=y:w<_&&(x+=2*y)}for(let w=0;w<m.length;w++)m[w]=m[w]/x;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=p,f.mipInt.value=E-n;const S=this._sizeLods[i],A=3*S*(i>E-Er?i-E+Er:0),b=4*(this._cubeSize-S);Ds(t,A,b,3*S,2*S),l.setRenderTarget(t),l.render(d,fa)}}function qM(r){const e=[],t=[],n=[];let i=r;const s=r-Er+1+Kf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Er?l=Kf[a-r+Er-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,g=3,_=2,m=1,x=new Float32Array(g*p*h),E=new Float32Array(_*p*h),S=new Float32Array(m*p*h);for(let b=0;b<h;b++){const w=b%3*2/3-1,v=b>2?0:-1,y=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];x.set(y,g*p*b),E.set(f,_*p*b);const L=[b,b,b,b,b,b];S.set(L,m*p*b)}const A=new fi;A.setAttribute("position",new In(x,g)),A.setAttribute("uv",new In(E,_)),A.setAttribute("faceIndex",new In(S,m)),n.push(new Jn(A,null)),i>Er&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ed(r,e,t){const n=new Rn(r,e,t);return n.texture.mapping=Pl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ZM(r,e,t){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ll(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function $M(r,e,t){const n=new Float32Array(Zr),i=new J(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function td(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function nd(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Em extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new eo(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:ji});s.uniforms.tEquirect.value=t;const a=new Jn(i,s),o=t.minFilter;return t.minFilter===yr&&(t.minFilter=ln),new tv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function jM(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Zl||h===$l)if(e.has(f)){const p=e.get(f).texture;return o(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const g=new Em(p.height);return g.fromEquirectangularTexture(r,f),e.set(f,g),f.addEventListener("dispose",c),o(g.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const h=f.mapping,p=h===Zl||h===$l,g=h===ls||h===Js;if(p||g){let _=t.get(f);const m=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Qf(r)),_=p?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const x=f.image;return p&&x&&x.height>0||g&&x&&l(x)?(n===null&&(n=new Qf(r)),_=p?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",u),_.texture):null}}}return f}function o(f,h){return h===Zl?f.mapping=ls:h===$l&&(f.mapping=Js),f}function l(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function c(f){const h=f.target;h.removeEventListener("dispose",c);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function KM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Tl("WebGLRenderer: "+n+" extension not supported."),i}}}function JM(r,e,t,n){const i={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete i[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],r.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,p=d.attributes.position;let g=0;if(p===void 0)return;if(h!==null){const x=h.array;g=h.version;for(let E=0,S=x.length;E<S;E+=3){const A=x[E+0],b=x[E+1],w=x[E+2];f.push(A,b,b,w,w,A)}}else{const x=p.array;g=p.version;for(let E=0,S=x.length/3-1;E<S;E+=3){const A=E+0,b=E+1,w=E+2;f.push(A,b,b,w,w,A)}}const _=new(p.count>=65535?mm:pm)(f,1);_.version=g;const m=s.get(d);m&&e.remove(m),s.set(d,_)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function QM(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){r.drawElements(n,h,s,f*a),t.update(h,n,1)}function c(f,h,p){p!==0&&(r.drawElementsInstanced(n,h,s,f*a,p),t.update(h,n,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];t.update(_,n,1)}function d(f,h,p,g){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<f.length;m++)c(f[m]/a,h[m],g[m]);else{_.multiDrawElementsInstancedWEBGL(n,h,0,s,f,0,g,0,p);let m=0;for(let x=0;x<p;x++)m+=h[x]*g[x];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function eS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:ut("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tS(r,e,t){const n=new WeakMap,i=new It;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let y=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const h=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let E=0;h===!0&&(E=1),p===!0&&(E=2),g===!0&&(E=3);let S=o.attributes.position.count*E,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const b=new Float32Array(S*A*4*d),w=new fm(b,S,A,d);w.type=Li,w.needsUpdate=!0;const v=E*4;for(let L=0;L<d;L++){const D=_[L],N=m[L],O=x[L],V=S*A*4*L;for(let X=0;X<D.count;X++){const z=X*v;h===!0&&(i.fromBufferAttribute(D,X),b[V+z+0]=i.x,b[V+z+1]=i.y,b[V+z+2]=i.z,b[V+z+3]=0),p===!0&&(i.fromBufferAttribute(N,X),b[V+z+4]=i.x,b[V+z+5]=i.y,b[V+z+6]=i.z,b[V+z+7]=0),g===!0&&(i.fromBufferAttribute(O,X),b[V+z+8]=i.x,b[V+z+9]=i.y,b[V+z+10]=i.z,b[V+z+11]=O.itemSize===4?i.w:1)}}f={count:d,texture:w,size:new ct(S,A)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let h=0;for(let g=0;g<c.length;g++)h+=c[g];const p=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function nS(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const iS={[jp]:"LINEAR_TONE_MAPPING",[Kp]:"REINHARD_TONE_MAPPING",[Jp]:"CINEON_TONE_MAPPING",[Qp]:"ACES_FILMIC_TONE_MAPPING",[tm]:"AGX_TONE_MAPPING",[nm]:"NEUTRAL_TONE_MAPPING",[em]:"CUSTOM_TONE_MAPPING"};function rS(r,e,t,n,i){const s=new Rn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Rn(e,t,{type:Si,depthBuffer:!1,stencilBuffer:!1}),o=new fi;o.setAttribute("position",new Ji([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ji([0,2,0,0,2,0],2));const l=new J0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Jn(o,l),u=new Ph(-1,1,1,-1,0,1);let d=null,f=null,h=!1,p,g=null,_=[],m=!1;this.setSize=function(x,E){s.setSize(x,E),a.setSize(x,E);for(let S=0;S<_.length;S++){const A=_[S];A.setSize&&A.setSize(x,E)}},this.setEffects=function(x){_=x,m=_.length>0&&_[0].isRenderPass===!0;const E=s.width,S=s.height;for(let A=0;A<_.length;A++){const b=_[A];b.setSize&&b.setSize(E,S)}},this.begin=function(x,E){if(h||x.toneMapping===Fi&&_.length===0)return!1;if(g=E,E!==null){const S=E.width,A=E.height;(s.width!==S||s.height!==A)&&this.setSize(S,A)}return m===!1&&x.setRenderTarget(s),p=x.toneMapping,x.toneMapping=Fi,!0},this.hasRenderPass=function(){return m},this.end=function(x,E){x.toneMapping=p,h=!0;let S=s,A=a;for(let b=0;b<_.length;b++){const w=_[b];if(w.enabled!==!1&&(w.render(x,A,S,E),w.needsSwap!==!1)){const v=S;S=A,A=v}}if(d!==x.outputColorSpace||f!==x.toneMapping){d=x.outputColorSpace,f=x.toneMapping,l.defines={},ht.getTransfer(d)===xt&&(l.defines.SRGB_TRANSFER="");const b=iS[f];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(g),x.render(c,u),g=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const bm=new Mn,Gu=new $a(1,1),Tm=new fm,wm=new R0,Am=new vm,id=[],rd=[],sd=new Float32Array(16),ad=new Float32Array(9),od=new Float32Array(4);function ia(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=id[i];if(s===void 0&&(s=new Float32Array(i),id[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function $t(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Il(r,e){let t=rd[e];t===void 0&&(t=new Int32Array(e),rd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function sS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function aS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2fv(this.addr,e),jt(t,e)}}function oS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;r.uniform3fv(this.addr,e),jt(t,e)}}function lS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4fv(this.addr,e),jt(t,e)}}function cS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if($t(t,n))return;od.set(n),r.uniformMatrix2fv(this.addr,!1,od),jt(t,n)}}function uS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if($t(t,n))return;ad.set(n),r.uniformMatrix3fv(this.addr,!1,ad),jt(t,n)}}function hS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if($t(t,n))return;sd.set(n),r.uniformMatrix4fv(this.addr,!1,sd),jt(t,n)}}function fS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2iv(this.addr,e),jt(t,e)}}function pS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3iv(this.addr,e),jt(t,e)}}function mS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4iv(this.addr,e),jt(t,e)}}function _S(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function gS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2uiv(this.addr,e),jt(t,e)}}function vS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3uiv(this.addr,e),jt(t,e)}}function xS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4uiv(this.addr,e),jt(t,e)}}function MS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Gu.compareFunction=t.isReversedDepthBuffer()?wh:Th,s=Gu):s=bm,t.setTexture2D(e||s,i)}function SS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wm,i)}function yS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Am,i)}function ES(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tm,i)}function bS(r){switch(r){case 5126:return sS;case 35664:return aS;case 35665:return oS;case 35666:return lS;case 35674:return cS;case 35675:return uS;case 35676:return hS;case 5124:case 35670:return fS;case 35667:case 35671:return dS;case 35668:case 35672:return pS;case 35669:case 35673:return mS;case 5125:return _S;case 36294:return gS;case 36295:return vS;case 36296:return xS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return ES}}function TS(r,e){r.uniform1fv(this.addr,e)}function wS(r,e){const t=ia(e,this.size,2);r.uniform2fv(this.addr,t)}function AS(r,e){const t=ia(e,this.size,3);r.uniform3fv(this.addr,t)}function RS(r,e){const t=ia(e,this.size,4);r.uniform4fv(this.addr,t)}function CS(r,e){const t=ia(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function PS(r,e){const t=ia(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function DS(r,e){const t=ia(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function LS(r,e){r.uniform1iv(this.addr,e)}function IS(r,e){r.uniform2iv(this.addr,e)}function US(r,e){r.uniform3iv(this.addr,e)}function FS(r,e){r.uniform4iv(this.addr,e)}function NS(r,e){r.uniform1uiv(this.addr,e)}function OS(r,e){r.uniform2uiv(this.addr,e)}function BS(r,e){r.uniform3uiv(this.addr,e)}function zS(r,e){r.uniform4uiv(this.addr,e)}function kS(r,e,t){const n=this.cache,i=e.length,s=Il(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Gu:a=bm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function HS(r,e,t){const n=this.cache,i=e.length,s=Il(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||wm,s[a])}function VS(r,e,t){const n=this.cache,i=e.length,s=Il(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Am,s[a])}function GS(r,e,t){const n=this.cache,i=e.length,s=Il(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Tm,s[a])}function WS(r){switch(r){case 5126:return TS;case 35664:return wS;case 35665:return AS;case 35666:return RS;case 35674:return CS;case 35675:return PS;case 35676:return DS;case 5124:case 35670:return LS;case 35667:case 35671:return IS;case 35668:case 35672:return US;case 35669:case 35673:return FS;case 5125:return NS;case 36294:return OS;case 36295:return BS;case 36296:return zS;case 35678:case 36198:case 36298:case 36306:case 35682:return kS;case 35679:case 36299:case 36307:return HS;case 35680:case 36300:case 36308:case 36293:return VS;case 36289:case 36303:case 36311:case 36292:return GS}}class XS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bS(t.type)}}class YS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WS(t.type)}}class qS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function ld(r,e){r.seq.push(e),r.map[e.id]=e}function ZS(r,e,t){const n=r.name,i=n.length;for(Tc.lastIndex=0;;){const s=Tc.exec(n),a=Tc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ld(t,c===void 0?new XS(o,r,e):new YS(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new qS(o),ld(t,d)),t=d}}}class sl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ZS(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function cd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const $S=37297;let jS=0;function KS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ud=new tt;function JS(r){ht._getMatrix(ud,ht.workingColorSpace,r);const e=`mat3( ${ud.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(r)){case yl:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function hd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+KS(r.getShaderSource(e),o)}else return s}function QS(r,e){const t=JS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ey={[jp]:"Linear",[Kp]:"Reinhard",[Jp]:"Cineon",[Qp]:"ACESFilmic",[tm]:"AgX",[nm]:"Neutral",[em]:"Custom"};function ty(r,e){const t=ey[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vo=new J;function ny(){ht.getLuminanceCoefficients(Vo);const r=Vo.x.toFixed(4),e=Vo.y.toFixed(4),t=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function ry(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sy(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ba(r){return r!==""}function fd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(r){return r.replace(ay,ly)}const oy=new Map;function ly(r,e){let t=nt[e];if(t===void 0){const n=oy.get(e);if(n!==void 0)t=nt[n],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wu(t)}const cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(r){return r.replace(cy,uy)}function uy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function md(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hy={[el]:"SHADOWMAP_TYPE_PCF",[ya]:"SHADOWMAP_TYPE_VSM"};function fy(r){return hy[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dy={[ls]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[Pl]:"ENVMAP_TYPE_CUBE_UV"};function py(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":dy[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const my={[Js]:"ENVMAP_MODE_REFRACTION"};function _y(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":my[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gy={[$p]:"ENVMAP_BLENDING_MULTIPLY",[a0]:"ENVMAP_BLENDING_MIX",[o0]:"ENVMAP_BLENDING_ADD"};function vy(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":gy[r.combine]||"ENVMAP_BLENDING_NONE"}function xy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function My(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=fy(t),c=py(t),u=_y(t),d=vy(t),f=xy(t),h=iy(t),p=ry(s),g=i.createProgram();let _,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ba).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ba).join(`
`),m.length>0&&(m+=`
`)):(_=[md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),m=[md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?nt.tonemapping_pars_fragment:"",t.toneMapping!==Fi?ty("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,QS("linearToOutputTexel",t.outputColorSpace),ny(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ba).join(`
`)),a=Wu(a),a=fd(a,t),a=dd(a,t),o=Wu(o),o=fd(o,t),o=dd(o,t),a=pd(a),o=pd(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=x+_+a,S=x+m+o,A=cd(i,i.VERTEX_SHADER,E),b=cd(i,i.FRAGMENT_SHADER,S);i.attachShader(g,A),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(D){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g)||"",O=i.getShaderInfoLog(A)||"",V=i.getShaderInfoLog(b)||"",X=N.trim(),z=O.trim(),U=V.trim();let F=!0,k=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,b);else{const P=hd(i,A,"vertex"),ne=hd(i,b,"fragment");ut("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+P+`
`+ne)}else X!==""?je("WebGLProgram: Program Info Log:",X):(z===""||U==="")&&(k=!1);k&&(D.diagnostics={runnable:F,programLog:X,vertexShader:{log:z,prefix:_},fragmentShader:{log:U,prefix:m}})}i.deleteShader(A),i.deleteShader(b),v=new sl(i,g),y=sy(i,g)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(g,$S)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=b,this}let Sy=0;class yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ey(e),t.set(e,n)),n}}class Ey{constructor(e){this.id=Sy++,this.code=e,this.usedTimes=0}}function by(r,e,t,n,i,s){const a=new Rh,o=new yy,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,y,L,D,N){const O=D.fog,V=N.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,U=e.get(v.envMap||X,z),F=U&&U.mapping===Pl?U.image.height:null,k=h[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&je("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const P=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ne=P!==void 0?P.length:0;let ie=0;V.morphAttributes.position!==void 0&&(ie=1),V.morphAttributes.normal!==void 0&&(ie=2),V.morphAttributes.color!==void 0&&(ie=3);let me,Re,Ce,Z;if(k){const Ae=Ai[k];me=Ae.vertexShader,Re=Ae.fragmentShader}else me=v.vertexShader,Re=v.fragmentShader,o.update(v),Ce=o.getVertexShaderID(v),Z=o.getFragmentShaderID(v);const ee=r.getRenderTarget(),re=r.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,Le=N.isBatchedMesh===!0,Pe=!!v.map,Ke=!!v.matcap,ye=!!U,He=!!v.aoMap,Ye=!!v.lightMap,Ve=!!v.bumpMap,H=!!v.normalMap,C=!!v.displacementMap,W=!!v.emissiveMap,ve=!!v.metalnessMap,he=!!v.roughnessMap,oe=v.anisotropy>0,R=v.clearcoat>0,M=v.dispersion>0,B=v.iridescence>0,Q=v.sheen>0,j=v.transmission>0,K=oe&&!!v.anisotropyMap,pe=R&&!!v.clearcoatMap,se=R&&!!v.clearcoatNormalMap,Fe=R&&!!v.clearcoatRoughnessMap,be=B&&!!v.iridescenceMap,fe=B&&!!v.iridescenceThicknessMap,de=Q&&!!v.sheenColorMap,De=Q&&!!v.sheenRoughnessMap,we=!!v.specularMap,ae=!!v.specularColorMap,ge=!!v.specularIntensityMap,I=j&&!!v.transmissionMap,ce=j&&!!v.thicknessMap,le=!!v.gradientMap,_e=!!v.alphaMap,ue=v.alphaTest>0,te=!!v.alphaHash,Ie=!!v.extensions;let We=Fi;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(We=r.toneMapping);const ft={shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:me,fragmentShader:Re,defines:v.defines,customVertexShaderID:Ce,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Le,batchingColor:Le&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:cs,alphaToCoverage:!!v.alphaToCoverage,map:Pe,matcap:Ke,envMap:ye,envMapMode:ye&&U.mapping,envMapCubeUVHeight:F,aoMap:He,lightMap:Ye,bumpMap:Ve,normalMap:H,displacementMap:C,emissiveMap:W,normalMapObjectSpace:H&&v.normalMapType===h0,normalMapTangentSpace:H&&v.normalMapType===u0,metalnessMap:ve,roughnessMap:he,anisotropy:oe,anisotropyMap:K,clearcoat:R,clearcoatMap:pe,clearcoatNormalMap:se,clearcoatRoughnessMap:Fe,dispersion:M,iridescence:B,iridescenceMap:be,iridescenceThicknessMap:fe,sheen:Q,sheenColorMap:de,sheenRoughnessMap:De,specularMap:we,specularColorMap:ae,specularIntensityMap:ge,transmission:j,transmissionMap:I,thicknessMap:ce,gradientMap:le,opaque:v.transparent===!1&&v.blending===Rr&&v.alphaToCoverage===!1,alphaMap:_e,alphaTest:ue,alphaHash:te,combine:v.combine,mapUv:Pe&&p(v.map.channel),aoMapUv:He&&p(v.aoMap.channel),lightMapUv:Ye&&p(v.lightMap.channel),bumpMapUv:Ve&&p(v.bumpMap.channel),normalMapUv:H&&p(v.normalMap.channel),displacementMapUv:C&&p(v.displacementMap.channel),emissiveMapUv:W&&p(v.emissiveMap.channel),metalnessMapUv:ve&&p(v.metalnessMap.channel),roughnessMapUv:he&&p(v.roughnessMap.channel),anisotropyMapUv:K&&p(v.anisotropyMap.channel),clearcoatMapUv:pe&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:de&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:De&&p(v.sheenRoughnessMap.channel),specularMapUv:we&&p(v.specularMap.channel),specularColorMapUv:ae&&p(v.specularColorMap.channel),specularIntensityMapUv:ge&&p(v.specularIntensityMap.channel),transmissionMapUv:I&&p(v.transmissionMap.channel),thicknessMapUv:ce&&p(v.thicknessMap.channel),alphaMapUv:_e&&p(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(H||oe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(Pe||_e),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&H===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ie,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:We,decodeVideoTexture:Pe&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:W&&v.emissiveMap.isVideoTexture===!0&&ht.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===qi,flipSided:v.side===Bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&v.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function _(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)y.push(L),y.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(m(y,v),x(y,v),y.push(r.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function m(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function x(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function E(v){const y=h[v.type];let L;if(y){const D=Ai[y];L=$0.clone(D.uniforms)}else L=v.uniforms;return L}function S(v,y){let L=u.get(y);return L!==void 0?++L.usedTimes:(L=new My(r,y,v,i),c.push(L),u.set(y,L)),L}function A(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:E,acquireProgram:S,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:w}}function Ty(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function wy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function _d(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function gd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,p,g,_,m){let x=r[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:p,materialVariant:a(f),groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=p,x.materialVariant=a(f),x.groupOrder=g,x.renderOrder=f.renderOrder,x.z=_,x.group=m),e++,x}function l(f,h,p,g,_,m){const x=o(f,h,p,g,_,m);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):t.push(x)}function c(f,h,p,g,_,m){const x=o(f,h,p,g,_,m);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function u(f,h){t.length>1&&t.sort(f||wy),n.length>1&&n.sort(h||_d),i.length>1&&i.sort(h||_d)}function d(){for(let f=e,h=r.length;f<h;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function Ay(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new gd,r.set(n,[a])):i>=s.length?(a=new gd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ry(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new pt};break;case"SpotLight":t={position:new J,direction:new J,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=t,t}}}function Cy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Py=0;function Dy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ly(r){const e=new Ry,t=Cy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);const i=new J,s=new Ft,a=new Ft;function o(c){let u=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let h=0,p=0,g=0,_=0,m=0,x=0,E=0,S=0,A=0,b=0,w=0;c.sort(Dy);for(let y=0,L=c.length;y<L;y++){const D=c[y],N=D.color,O=D.intensity,V=D.distance;let X=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Qs?X=D.shadow.map.texture:X=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=N.r*O,d+=N.g*O,f+=N.b*O;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],O);w++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const U=D.shadow,F=t.get(D);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,n.directionalShadow[h]=F,n.directionalShadowMap[h]=X,n.directionalShadowMatrix[h]=D.shadow.matrix,x++}n.directional[h]=z,h++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(N).multiplyScalar(O),z.distance=V,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[g]=z;const U=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,U.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[g]=U.matrix,D.castShadow){const F=t.get(D);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,n.spotShadow[g]=F,n.spotShadowMap[g]=X,S++}g++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(N).multiplyScalar(O),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[_]=z,_++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const U=D.shadow,F=t.get(D);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,F.shadowCameraNear=U.camera.near,F.shadowCameraFar=U.camera.far,n.pointShadow[p]=F,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=D.shadow.matrix,E++}n.point[p]=z,p++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(O),z.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[m]=z,m++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==h||v.pointLength!==p||v.spotLength!==g||v.rectAreaLength!==_||v.hemiLength!==m||v.numDirectionalShadows!==x||v.numPointShadows!==E||v.numSpotShadows!==S||v.numSpotMaps!==A||v.numLightProbes!==w)&&(n.directional.length=h,n.spot.length=g,n.rectArea.length=_,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,v.directionalLength=h,v.pointLength=p,v.spotLength=g,v.rectAreaLength=_,v.hemiLength=m,v.numDirectionalShadows=x,v.numPointShadows=E,v.numSpotShadows=S,v.numSpotMaps=A,v.numLightProbes=w,n.version=Py++)}function l(c,u){let d=0,f=0,h=0,p=0,g=0;const _=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const E=c[m];if(E.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(_),d++}else if(E.isSpotLight){const S=n.spot[h];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(_),h++}else if(E.isRectAreaLight){const S=n.rectArea[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(_),a.identity(),s.copy(E.matrixWorld),s.premultiply(_),a.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(E.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(_),f++}else if(E.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(_),g++}}}return{setup:o,setupView:l,state:n}}function vd(r){const e=new Ly(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Iy(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new vd(r),e.set(i,[o])):s>=a.length?(o=new vd(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ny=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Oy=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],xd=new Ft,da=new J,wc=new J;function By(r,e,t){let n=new gm;const i=new ct,s=new ct,a=new It,o=new Q0,l=new ev,c={},u=t.maxTextureSize,d={[Ir]:Bn,[Bn]:Ir,[qi]:qi},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Uy,fragmentShader:Fy}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const p=new fi;p.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Jn(p,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let m=this.type;this.render=function(b,w,v){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||b.length===0)return;this.type===Hg&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=el);const y=r.getRenderTarget(),L=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ji),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=m!==this.type;O&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(X=>X.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,X=b.length;V<X;V++){const z=b[V],U=z.shadow;if(U===void 0){je("WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const F=U.getFrameExtents();i.multiply(F),s.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/F.x),i.x=s.x*F.x,U.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/F.y),i.y=s.y*F.y,U.mapSize.y=s.y));const k=r.state.buffers.depth.getReversed();if(U.camera._reversedDepth=k,U.map===null||O===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===ya){if(z.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Rn(i.x,i.y,{format:Qs,type:Si,minFilter:ln,magFilter:ln,generateMipmaps:!1}),U.map.texture.name=z.name+".shadowMap",U.map.depthTexture=new $a(i.x,i.y,Li),U.map.depthTexture.name=z.name+".shadowMapDepth",U.map.depthTexture.format=tr,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=on,U.map.depthTexture.magFilter=on}else z.isPointLight?(U.map=new Em(i.x),U.map.depthTexture=new q0(i.x,Oi)):(U.map=new Rn(i.x,i.y),U.map.depthTexture=new $a(i.x,i.y,Oi)),U.map.depthTexture.name=z.name+".shadowMap",U.map.depthTexture.format=tr,this.type===el?(U.map.depthTexture.compareFunction=k?wh:Th,U.map.depthTexture.minFilter=ln,U.map.depthTexture.magFilter=ln):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=on,U.map.depthTexture.magFilter=on);U.camera.updateProjectionMatrix()}const P=U.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<P;ne++){if(U.map.isWebGLCubeRenderTarget)r.setRenderTarget(U.map,ne),r.clear();else{ne===0&&(r.setRenderTarget(U.map),r.clear());const ie=U.getViewport(ne);a.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),N.viewport(a)}if(z.isPointLight){const ie=U.camera,me=U.matrix,Re=z.distance||ie.far;Re!==ie.far&&(ie.far=Re,ie.updateProjectionMatrix()),da.setFromMatrixPosition(z.matrixWorld),ie.position.copy(da),wc.copy(ie.position),wc.add(Ny[ne]),ie.up.copy(Oy[ne]),ie.lookAt(wc),ie.updateMatrixWorld(),me.makeTranslation(-da.x,-da.y,-da.z),xd.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),U._frustum.setFromProjectionMatrix(xd,ie.coordinateSystem,ie.reversedDepth)}else U.updateMatrices(z);n=U.getFrustum(),S(w,v,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===ya&&x(U,v),U.needsUpdate=!1}m=this.type,_.needsUpdate=!1,r.setRenderTarget(y,L,D)};function x(b,w){const v=e.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Rn(i.x,i.y,{format:Qs,type:Si})),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,v,f,g,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,v,h,g,null)}function E(b,w,v,y){let L=null;const D=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)L=D;else if(L=v.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=L.uuid,O=w.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let X=V[O];X===void 0&&(X=L.clone(),V[O]=X,w.addEventListener("dispose",A)),L=X}if(L.visible=w.visible,L.wireframe=w.wireframe,y===ya?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:d[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const N=r.properties.get(L);N.light=v}return L}function S(b,w,v,y,L){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===ya)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const O=e.update(b),V=b.material;if(Array.isArray(V)){const X=O.groups;for(let z=0,U=X.length;z<U;z++){const F=X[z],k=V[F.materialIndex];if(k&&k.visible){const P=E(b,k,y,L);b.onBeforeShadow(r,b,w,v,O,P,F),r.renderBufferDirect(v,null,O,P,b,F),b.onAfterShadow(r,b,w,v,O,P,F)}}}else if(V.visible){const X=E(b,V,y,L);b.onBeforeShadow(r,b,w,v,O,X,null),r.renderBufferDirect(v,null,O,X,b,null),b.onAfterShadow(r,b,w,v,O,X,null)}}const N=b.children;for(let O=0,V=N.length;O<V;O++)S(N[O],w,v,y,L)}function A(b){b.target.removeEventListener("dispose",A);for(const v in c){const y=c[v],L=b.target.uuid;L in y&&(y[L].dispose(),delete y[L])}}}function zy(r,e){function t(){let I=!1;const ce=new It;let le=null;const _e=new It(0,0,0,0);return{setMask:function(ue){le!==ue&&!I&&(r.colorMask(ue,ue,ue,ue),le=ue)},setLocked:function(ue){I=ue},setClear:function(ue,te,Ie,We,ft){ft===!0&&(ue*=We,te*=We,Ie*=We),ce.set(ue,te,Ie,We),_e.equals(ce)===!1&&(r.clearColor(ue,te,Ie,We),_e.copy(ce))},reset:function(){I=!1,le=null,_e.set(-1,0,0,0)}}}function n(){let I=!1,ce=!1,le=null,_e=null,ue=null;return{setReversed:function(te){if(ce!==te){const Ie=e.get("EXT_clip_control");te?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const We=ue;ue=null,this.setClear(We)}},getReversed:function(){return ce},setTest:function(te){te?ee(r.DEPTH_TEST):re(r.DEPTH_TEST)},setMask:function(te){le!==te&&!I&&(r.depthMask(te),le=te)},setFunc:function(te){if(ce&&(te=S0[te]),_e!==te){switch(te){case Qc:r.depthFunc(r.NEVER);break;case eu:r.depthFunc(r.ALWAYS);break;case tu:r.depthFunc(r.LESS);break;case Ks:r.depthFunc(r.LEQUAL);break;case nu:r.depthFunc(r.EQUAL);break;case iu:r.depthFunc(r.GEQUAL);break;case ru:r.depthFunc(r.GREATER);break;case su:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_e=te}},setLocked:function(te){I=te},setClear:function(te){ue!==te&&(ue=te,ce&&(te=1-te),r.clearDepth(te))},reset:function(){I=!1,le=null,_e=null,ue=null,ce=!1}}}function i(){let I=!1,ce=null,le=null,_e=null,ue=null,te=null,Ie=null,We=null,ft=null;return{setTest:function(Ae){I||(Ae?ee(r.STENCIL_TEST):re(r.STENCIL_TEST))},setMask:function(Ae){ce!==Ae&&!I&&(r.stencilMask(Ae),ce=Ae)},setFunc:function(Ae,ze,et){(le!==Ae||_e!==ze||ue!==et)&&(r.stencilFunc(Ae,ze,et),le=Ae,_e=ze,ue=et)},setOp:function(Ae,ze,et){(te!==Ae||Ie!==ze||We!==et)&&(r.stencilOp(Ae,ze,et),te=Ae,Ie=ze,We=et)},setLocked:function(Ae){I=Ae},setClear:function(Ae){ft!==Ae&&(r.clearStencil(Ae),ft=Ae)},reset:function(){I=!1,ce=null,le=null,_e=null,ue=null,te=null,Ie=null,We=null,ft=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],p=null,g=!1,_=null,m=null,x=null,E=null,S=null,A=null,b=null,w=new pt(0,0,0),v=0,y=!1,L=null,D=null,N=null,O=null,V=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,U=0;const F=r.getParameter(r.VERSION);F.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(F)[1]),z=U>=1):F.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),z=U>=2);let k=null,P={};const ne=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),me=new It().fromArray(ne),Re=new It().fromArray(ie);function Ce(I,ce,le,_e){const ue=new Uint8Array(4),te=r.createTexture();r.bindTexture(I,te),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ie=0;Ie<le;Ie++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,_e,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(ce+Ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return te}const Z={};Z[r.TEXTURE_2D]=Ce(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(r.DEPTH_TEST),a.setFunc(Ks),Ve(!1),H(Sf),ee(r.CULL_FACE),He(ji);function ee(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function re(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Ue(I,ce){return d[I]!==ce?(r.bindFramebuffer(I,ce),d[I]=ce,I===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ce),I===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function Le(I,ce){let le=h,_e=!1;if(I){le=f.get(ce),le===void 0&&(le=[],f.set(ce,le));const ue=I.textures;if(le.length!==ue.length||le[0]!==r.COLOR_ATTACHMENT0){for(let te=0,Ie=ue.length;te<Ie;te++)le[te]=r.COLOR_ATTACHMENT0+te;le.length=ue.length,_e=!0}}else le[0]!==r.BACK&&(le[0]=r.BACK,_e=!0);_e&&r.drawBuffers(le)}function Pe(I){return p!==I?(r.useProgram(I),p=I,!0):!1}const Ke={[qr]:r.FUNC_ADD,[Gg]:r.FUNC_SUBTRACT,[Wg]:r.FUNC_REVERSE_SUBTRACT};Ke[Xg]=r.MIN,Ke[Yg]=r.MAX;const ye={[qg]:r.ZERO,[Zg]:r.ONE,[$g]:r.SRC_COLOR,[Kc]:r.SRC_ALPHA,[t0]:r.SRC_ALPHA_SATURATE,[Qg]:r.DST_COLOR,[Kg]:r.DST_ALPHA,[jg]:r.ONE_MINUS_SRC_COLOR,[Jc]:r.ONE_MINUS_SRC_ALPHA,[e0]:r.ONE_MINUS_DST_COLOR,[Jg]:r.ONE_MINUS_DST_ALPHA,[n0]:r.CONSTANT_COLOR,[i0]:r.ONE_MINUS_CONSTANT_COLOR,[r0]:r.CONSTANT_ALPHA,[s0]:r.ONE_MINUS_CONSTANT_ALPHA};function He(I,ce,le,_e,ue,te,Ie,We,ft,Ae){if(I===ji){g===!0&&(re(r.BLEND),g=!1);return}if(g===!1&&(ee(r.BLEND),g=!0),I!==Vg){if(I!==_||Ae!==y){if((m!==qr||S!==qr)&&(r.blendEquation(r.FUNC_ADD),m=qr,S=qr),Ae)switch(I){case Rr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jc:r.blendFunc(r.ONE,r.ONE);break;case yf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ef:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ut("WebGLState: Invalid blending: ",I);break}else switch(I){case Rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case yf:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ef:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",I);break}x=null,E=null,A=null,b=null,w.set(0,0,0),v=0,_=I,y=Ae}return}ue=ue||ce,te=te||le,Ie=Ie||_e,(ce!==m||ue!==S)&&(r.blendEquationSeparate(Ke[ce],Ke[ue]),m=ce,S=ue),(le!==x||_e!==E||te!==A||Ie!==b)&&(r.blendFuncSeparate(ye[le],ye[_e],ye[te],ye[Ie]),x=le,E=_e,A=te,b=Ie),(We.equals(w)===!1||ft!==v)&&(r.blendColor(We.r,We.g,We.b,ft),w.copy(We),v=ft),_=I,y=!1}function Ye(I,ce){I.side===qi?re(r.CULL_FACE):ee(r.CULL_FACE);let le=I.side===Bn;ce&&(le=!le),Ve(le),I.blending===Rr&&I.transparent===!1?He(ji):He(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const _e=I.stencilWrite;o.setTest(_e),_e&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),W(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):re(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(I){L!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),L=I)}function H(I){I!==zg?(ee(r.CULL_FACE),I!==D&&(I===Sf?r.cullFace(r.BACK):I===kg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):re(r.CULL_FACE),D=I}function C(I){I!==N&&(z&&r.lineWidth(I),N=I)}function W(I,ce,le){I?(ee(r.POLYGON_OFFSET_FILL),(O!==ce||V!==le)&&(O=ce,V=le,a.getReversed()&&(ce=-ce),r.polygonOffset(ce,le))):re(r.POLYGON_OFFSET_FILL)}function ve(I){I?ee(r.SCISSOR_TEST):re(r.SCISSOR_TEST)}function he(I){I===void 0&&(I=r.TEXTURE0+X-1),k!==I&&(r.activeTexture(I),k=I)}function oe(I,ce,le){le===void 0&&(k===null?le=r.TEXTURE0+X-1:le=k);let _e=P[le];_e===void 0&&(_e={type:void 0,texture:void 0},P[le]=_e),(_e.type!==I||_e.texture!==ce)&&(k!==le&&(r.activeTexture(le),k=le),r.bindTexture(I,ce||Z[I]),_e.type=I,_e.texture=ce)}function R(){const I=P[k];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(I){ut("WebGLState:",I)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(I){ut("WebGLState:",I)}}function Q(){try{r.texSubImage2D(...arguments)}catch(I){ut("WebGLState:",I)}}function j(){try{r.texSubImage3D(...arguments)}catch(I){ut("WebGLState:",I)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(I){ut("WebGLState:",I)}}function pe(){try{r.compressedTexSubImage3D(...arguments)}catch(I){ut("WebGLState:",I)}}function se(){try{r.texStorage2D(...arguments)}catch(I){ut("WebGLState:",I)}}function Fe(){try{r.texStorage3D(...arguments)}catch(I){ut("WebGLState:",I)}}function be(){try{r.texImage2D(...arguments)}catch(I){ut("WebGLState:",I)}}function fe(){try{r.texImage3D(...arguments)}catch(I){ut("WebGLState:",I)}}function de(I){me.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),me.copy(I))}function De(I){Re.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Re.copy(I))}function we(I,ce){let le=c.get(ce);le===void 0&&(le=new WeakMap,c.set(ce,le));let _e=le.get(I);_e===void 0&&(_e=r.getUniformBlockIndex(ce,I.name),le.set(I,_e))}function ae(I,ce){const _e=c.get(ce).get(I);l.get(ce)!==_e&&(r.uniformBlockBinding(ce,_e,I.__bindingPointIndex),l.set(ce,_e))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},k=null,P={},d={},f=new WeakMap,h=[],p=null,g=!1,_=null,m=null,x=null,E=null,S=null,A=null,b=null,w=new pt(0,0,0),v=0,y=!1,L=null,D=null,N=null,O=null,V=null,me.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:re,bindFramebuffer:Ue,drawBuffers:Le,useProgram:Pe,setBlending:He,setMaterial:Ye,setFlipSided:Ve,setCullFace:H,setLineWidth:C,setPolygonOffset:W,setScissorTest:ve,activeTexture:he,bindTexture:oe,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:B,texImage2D:be,texImage3D:fe,updateUBOMapping:we,uniformBlockBinding:ae,texStorage2D:se,texStorage3D:Fe,texSubImage2D:Q,texSubImage3D:j,compressedTexSubImage2D:K,compressedTexSubImage3D:pe,scissor:de,viewport:De,reset:ge}}function ky(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,M){return h?new OffscreenCanvas(R,M):bl("canvas")}function g(R,M,B){let Q=1;const j=oe(R);if((j.width>B||j.height>B)&&(Q=B/Math.max(j.width,j.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Q*j.width),pe=Math.floor(Q*j.height);d===void 0&&(d=p(K,pe));const se=M?p(K,pe):d;return se.width=K,se.height=pe,se.getContext("2d").drawImage(R,0,0,K,pe),je("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+pe+")."),se}else return"data"in R&&je("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function _(R){return R.generateMipmaps}function m(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(R,M,B,Q,j=!1){if(R!==null){if(r[R]!==void 0)return r[R];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=M;if(M===r.RED&&(B===r.FLOAT&&(K=r.R32F),B===r.HALF_FLOAT&&(K=r.R16F),B===r.UNSIGNED_BYTE&&(K=r.R8)),M===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.R8UI),B===r.UNSIGNED_SHORT&&(K=r.R16UI),B===r.UNSIGNED_INT&&(K=r.R32UI),B===r.BYTE&&(K=r.R8I),B===r.SHORT&&(K=r.R16I),B===r.INT&&(K=r.R32I)),M===r.RG&&(B===r.FLOAT&&(K=r.RG32F),B===r.HALF_FLOAT&&(K=r.RG16F),B===r.UNSIGNED_BYTE&&(K=r.RG8)),M===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RG8UI),B===r.UNSIGNED_SHORT&&(K=r.RG16UI),B===r.UNSIGNED_INT&&(K=r.RG32UI),B===r.BYTE&&(K=r.RG8I),B===r.SHORT&&(K=r.RG16I),B===r.INT&&(K=r.RG32I)),M===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RGB8UI),B===r.UNSIGNED_SHORT&&(K=r.RGB16UI),B===r.UNSIGNED_INT&&(K=r.RGB32UI),B===r.BYTE&&(K=r.RGB8I),B===r.SHORT&&(K=r.RGB16I),B===r.INT&&(K=r.RGB32I)),M===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),B===r.UNSIGNED_INT&&(K=r.RGBA32UI),B===r.BYTE&&(K=r.RGBA8I),B===r.SHORT&&(K=r.RGBA16I),B===r.INT&&(K=r.RGBA32I)),M===r.RGB&&(B===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),M===r.RGBA){const pe=j?yl:ht.getTransfer(Q);B===r.FLOAT&&(K=r.RGBA32F),B===r.HALF_FLOAT&&(K=r.RGBA16F),B===r.UNSIGNED_BYTE&&(K=pe===xt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(R,M){let B;return R?M===null||M===Oi||M===Za?B=r.DEPTH24_STENCIL8:M===Li?B=r.DEPTH32F_STENCIL8:M===qa&&(B=r.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Oi||M===Za?B=r.DEPTH_COMPONENT24:M===Li?B=r.DEPTH_COMPONENT32F:M===qa&&(B=r.DEPTH_COMPONENT16),B}function A(R,M){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),v(M),M.isVideoTexture&&u.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),L(M)}function v(R){const M=n.get(R);if(M.__webglInit===void 0)return;const B=R.source,Q=f.get(B);if(Q){const j=Q[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(R),Object.keys(Q).length===0&&f.delete(B)}n.remove(R)}function y(R){const M=n.get(R);r.deleteTexture(M.__webglTexture);const B=R.source,Q=f.get(B);delete Q[M.__cacheKey],a.memory.textures--}function L(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let j=0;j<M.__webglFramebuffer[Q].length;j++)r.deleteFramebuffer(M.__webglFramebuffer[Q][j]);else r.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[Q]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let Q=0,j=B.length;Q<j;Q++){const K=n.get(B[Q]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(B[Q])}n.remove(R)}let D=0;function N(){D=0}function O(){const R=D;return R>=i.maxTextures&&je("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function V(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function X(R,M){const B=n.get(R);if(R.isVideoTexture&&ve(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const Q=R.image;if(Q===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,R,M);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+M)}function z(R,M){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Z(B,R,M);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+M)}function U(R,M){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Z(B,R,M);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+M)}function F(R,M){const B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){ee(B,R,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+M)}const k={[au]:r.REPEAT,[Di]:r.CLAMP_TO_EDGE,[ou]:r.MIRRORED_REPEAT},P={[on]:r.NEAREST,[l0]:r.NEAREST_MIPMAP_NEAREST,[xo]:r.NEAREST_MIPMAP_LINEAR,[ln]:r.LINEAR,[jl]:r.LINEAR_MIPMAP_NEAREST,[yr]:r.LINEAR_MIPMAP_LINEAR},ne={[f0]:r.NEVER,[g0]:r.ALWAYS,[d0]:r.LESS,[Th]:r.LEQUAL,[p0]:r.EQUAL,[wh]:r.GEQUAL,[m0]:r.GREATER,[_0]:r.NOTEQUAL};function ie(R,M){if(M.type===Li&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===jl||M.magFilter===xo||M.magFilter===yr||M.minFilter===ln||M.minFilter===jl||M.minFilter===xo||M.minFilter===yr)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,k[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,k[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,k[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,P[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,P[M.minFilter]),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===on||M.minFilter!==xo&&M.minFilter!==yr||M.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function me(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const Q=M.source;let j=f.get(Q);j===void 0&&(j={},f.set(Q,j));const K=V(M);if(K!==R.__cacheKey){j[K]===void 0&&(j[K]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[K].usedTimes++;const pe=j[R.__cacheKey];pe!==void 0&&(j[R.__cacheKey].usedTimes--,pe.usedTimes===0&&y(M)),R.__cacheKey=K,R.__webglTexture=j[K].texture}return B}function Re(R,M,B){return Math.floor(Math.floor(R/B)/M)}function Ce(R,M,B,Q){const K=R.updateRanges;if(K.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,B,Q,M.data);else{K.sort((fe,de)=>fe.start-de.start);let pe=0;for(let fe=1;fe<K.length;fe++){const de=K[pe],De=K[fe],we=de.start+de.count,ae=Re(De.start,M.width,4),ge=Re(de.start,M.width,4);De.start<=we+1&&ae===ge&&Re(De.start+De.count-1,M.width,4)===ae?de.count=Math.max(de.count,De.start+De.count-de.start):(++pe,K[pe]=De)}K.length=pe+1;const se=r.getParameter(r.UNPACK_ROW_LENGTH),Fe=r.getParameter(r.UNPACK_SKIP_PIXELS),be=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let fe=0,de=K.length;fe<de;fe++){const De=K[fe],we=Math.floor(De.start/4),ae=Math.ceil(De.count/4),ge=we%M.width,I=Math.floor(we/M.width),ce=ae,le=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,ge,I,ce,le,B,Q,M.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Fe),r.pixelStorei(r.UNPACK_SKIP_ROWS,be)}}function Z(R,M,B){let Q=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=r.TEXTURE_3D);const j=me(R,M),K=M.source;t.bindTexture(Q,R.__webglTexture,r.TEXTURE0+B);const pe=n.get(K);if(K.version!==pe.__version||j===!0){t.activeTexture(r.TEXTURE0+B);const se=ht.getPrimaries(ht.workingColorSpace),Fe=M.colorSpace===mr?null:ht.getPrimaries(M.colorSpace),be=M.colorSpace===mr||se===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let fe=g(M.image,!1,i.maxTextureSize);fe=he(M,fe);const de=s.convert(M.format,M.colorSpace),De=s.convert(M.type);let we=E(M.internalFormat,de,De,M.colorSpace,M.isVideoTexture);ie(Q,M);let ae;const ge=M.mipmaps,I=M.isVideoTexture!==!0,ce=pe.__version===void 0||j===!0,le=K.dataReady,_e=A(M,fe);if(M.isDepthTexture)we=S(M.format===Kr,M.type),ce&&(I?t.texStorage2D(r.TEXTURE_2D,1,we,fe.width,fe.height):t.texImage2D(r.TEXTURE_2D,0,we,fe.width,fe.height,0,de,De,null));else if(M.isDataTexture)if(ge.length>0){I&&ce&&t.texStorage2D(r.TEXTURE_2D,_e,we,ge[0].width,ge[0].height);for(let ue=0,te=ge.length;ue<te;ue++)ae=ge[ue],I?le&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,ae.width,ae.height,de,De,ae.data):t.texImage2D(r.TEXTURE_2D,ue,we,ae.width,ae.height,0,de,De,ae.data);M.generateMipmaps=!1}else I?(ce&&t.texStorage2D(r.TEXTURE_2D,_e,we,fe.width,fe.height),le&&Ce(M,fe,de,De)):t.texImage2D(r.TEXTURE_2D,0,we,fe.width,fe.height,0,de,De,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,we,ge[0].width,ge[0].height,fe.depth);for(let ue=0,te=ge.length;ue<te;ue++)if(ae=ge[ue],M.format!==Mi)if(de!==null)if(I){if(le)if(M.layerUpdates.size>0){const Ie=jf(ae.width,ae.height,M.format,M.type);for(const We of M.layerUpdates){const ft=ae.data.subarray(We*Ie/ae.data.BYTES_PER_ELEMENT,(We+1)*Ie/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,We,ae.width,ae.height,1,de,ft)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,ae.width,ae.height,fe.depth,de,ae.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,we,ae.width,ae.height,fe.depth,0,ae.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?le&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,ae.width,ae.height,fe.depth,de,De,ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,we,ae.width,ae.height,fe.depth,0,de,De,ae.data)}else{I&&ce&&t.texStorage2D(r.TEXTURE_2D,_e,we,ge[0].width,ge[0].height);for(let ue=0,te=ge.length;ue<te;ue++)ae=ge[ue],M.format!==Mi?de!==null?I?le&&t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,ae.width,ae.height,de,ae.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,we,ae.width,ae.height,0,ae.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?le&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,ae.width,ae.height,de,De,ae.data):t.texImage2D(r.TEXTURE_2D,ue,we,ae.width,ae.height,0,de,De,ae.data)}else if(M.isDataArrayTexture)if(I){if(ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,we,fe.width,fe.height,fe.depth),le)if(M.layerUpdates.size>0){const ue=jf(fe.width,fe.height,M.format,M.type);for(const te of M.layerUpdates){const Ie=fe.data.subarray(te*ue/fe.data.BYTES_PER_ELEMENT,(te+1)*ue/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,fe.width,fe.height,1,de,De,Ie)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,de,De,fe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,fe.width,fe.height,fe.depth,0,de,De,fe.data);else if(M.isData3DTexture)I?(ce&&t.texStorage3D(r.TEXTURE_3D,_e,we,fe.width,fe.height,fe.depth),le&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,de,De,fe.data)):t.texImage3D(r.TEXTURE_3D,0,we,fe.width,fe.height,fe.depth,0,de,De,fe.data);else if(M.isFramebufferTexture){if(ce)if(I)t.texStorage2D(r.TEXTURE_2D,_e,we,fe.width,fe.height);else{let ue=fe.width,te=fe.height;for(let Ie=0;Ie<_e;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,we,ue,te,0,de,De,null),ue>>=1,te>>=1}}else if(ge.length>0){if(I&&ce){const ue=oe(ge[0]);t.texStorage2D(r.TEXTURE_2D,_e,we,ue.width,ue.height)}for(let ue=0,te=ge.length;ue<te;ue++)ae=ge[ue],I?le&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,de,De,ae):t.texImage2D(r.TEXTURE_2D,ue,we,de,De,ae);M.generateMipmaps=!1}else if(I){if(ce){const ue=oe(fe);t.texStorage2D(r.TEXTURE_2D,_e,we,ue.width,ue.height)}le&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,De,fe)}else t.texImage2D(r.TEXTURE_2D,0,we,de,De,fe);_(M)&&m(Q),pe.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ee(R,M,B){if(M.image.length!==6)return;const Q=me(R,M),j=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const K=n.get(j);if(j.version!==K.__version||Q===!0){t.activeTexture(r.TEXTURE0+B);const pe=ht.getPrimaries(ht.workingColorSpace),se=M.colorSpace===mr?null:ht.getPrimaries(M.colorSpace),Fe=M.colorSpace===mr||pe===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,de=[];for(let te=0;te<6;te++)!be&&!fe?de[te]=g(M.image[te],!0,i.maxCubemapSize):de[te]=fe?M.image[te].image:M.image[te],de[te]=he(M,de[te]);const De=de[0],we=s.convert(M.format,M.colorSpace),ae=s.convert(M.type),ge=E(M.internalFormat,we,ae,M.colorSpace),I=M.isVideoTexture!==!0,ce=K.__version===void 0||Q===!0,le=j.dataReady;let _e=A(M,De);ie(r.TEXTURE_CUBE_MAP,M);let ue;if(be){I&&ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,ge,De.width,De.height);for(let te=0;te<6;te++){ue=de[te].mipmaps;for(let Ie=0;Ie<ue.length;Ie++){const We=ue[Ie];M.format!==Mi?we!==null?I?le&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie,0,0,We.width,We.height,we,We.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie,ge,We.width,We.height,0,We.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie,0,0,We.width,We.height,we,ae,We.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie,ge,We.width,We.height,0,we,ae,We.data)}}}else{if(ue=M.mipmaps,I&&ce){ue.length>0&&_e++;const te=oe(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,ge,te.width,te.height)}for(let te=0;te<6;te++)if(fe){I?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,de[te].width,de[te].height,we,ae,de[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ge,de[te].width,de[te].height,0,we,ae,de[te].data);for(let Ie=0;Ie<ue.length;Ie++){const ft=ue[Ie].image[te].image;I?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie+1,0,0,ft.width,ft.height,we,ae,ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie+1,ge,ft.width,ft.height,0,we,ae,ft.data)}}else{I?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,we,ae,de[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ge,we,ae,de[te]);for(let Ie=0;Ie<ue.length;Ie++){const We=ue[Ie];I?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie+1,0,0,we,ae,We.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie+1,ge,we,ae,We.image[te])}}}_(M)&&m(r.TEXTURE_CUBE_MAP),K.__version=j.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function re(R,M,B,Q,j,K){const pe=s.convert(B.format,B.colorSpace),se=s.convert(B.type),Fe=E(B.internalFormat,pe,se,B.colorSpace),be=n.get(M),fe=n.get(B);if(fe.__renderTarget=M,!be.__hasExternalTextures){const de=Math.max(1,M.width>>K),De=Math.max(1,M.height>>K);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,K,Fe,de,De,M.depth,0,pe,se,null):t.texImage2D(j,K,Fe,de,De,0,pe,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),W(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,j,fe.__webglTexture,0,C(M)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,j,fe.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(R,M,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer){const Q=M.depthTexture,j=Q&&Q.isDepthTexture?Q.type:null,K=S(M.stencilBuffer,j),pe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;W(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,C(M),K,M.width,M.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,C(M),K,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,K,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,R)}else{const Q=M.textures;for(let j=0;j<Q.length;j++){const K=Q[j],pe=s.convert(K.format,K.colorSpace),se=s.convert(K.type),Fe=E(K.internalFormat,pe,se,K.colorSpace);W(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,C(M),Fe,M.width,M.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,C(M),Fe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Fe,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Le(R,M,B){const Q=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(M.depthTexture);if(j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q){if(j.__webglInit===void 0&&(j.__webglInit=!0,M.depthTexture.addEventListener("dispose",b)),j.__webglTexture===void 0){j.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),ie(r.TEXTURE_CUBE_MAP,M.depthTexture);const be=s.convert(M.depthTexture.format),fe=s.convert(M.depthTexture.type);let de;M.depthTexture.format===tr?de=r.DEPTH_COMPONENT24:M.depthTexture.format===Kr&&(de=r.DEPTH24_STENCIL8);for(let De=0;De<6;De++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,de,M.width,M.height,0,be,fe,null)}}else X(M.depthTexture,0);const K=j.__webglTexture,pe=C(M),se=Q?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,Fe=M.depthTexture.format===Kr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===tr)W(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Fe,se,K,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,Fe,se,K,0);else if(M.depthTexture.format===Kr)W(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Fe,se,K,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,Fe,se,K,0);else throw new Error("Unknown depthTexture format")}function Pe(R){const M=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",j)};Q.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=Q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let Q=0;Q<6;Q++)Le(M.__webglFramebuffer[Q],R,Q);else{const Q=R.texture.mipmaps;Q&&Q.length>0?Le(M.__webglFramebuffer[0],R,0):Le(M.__webglFramebuffer,R,0)}else if(B){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=r.createRenderbuffer(),Ue(M.__webglDepthbuffer[Q],R,!1);else{const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,K)}}else{const Q=R.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ue(M.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,K)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(R,M,B){const Q=n.get(R);M!==void 0&&re(Q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Pe(R)}function ye(R){const M=R.texture,B=n.get(R),Q=n.get(M);R.addEventListener("dispose",w);const j=R.textures,K=R.isWebGLCubeRenderTarget===!0,pe=j.length>1;if(pe||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=M.version,a.memory.textures++),K){B.__webglFramebuffer=[];for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[se]=[];for(let Fe=0;Fe<M.mipmaps.length;Fe++)B.__webglFramebuffer[se][Fe]=r.createFramebuffer()}else B.__webglFramebuffer[se]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let se=0;se<M.mipmaps.length;se++)B.__webglFramebuffer[se]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(pe)for(let se=0,Fe=j.length;se<Fe;se++){const be=n.get(j[se]);be.__webglTexture===void 0&&(be.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&W(R)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const Fe=j[se];B.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[se]);const be=s.convert(Fe.format,Fe.colorSpace),fe=s.convert(Fe.type),de=E(Fe.internalFormat,be,fe,Fe.colorSpace,R.isXRRenderTarget===!0),De=C(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,de,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,B.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),ie(r.TEXTURE_CUBE_MAP,M);for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0)for(let Fe=0;Fe<M.mipmaps.length;Fe++)re(B.__webglFramebuffer[se][Fe],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe);else re(B.__webglFramebuffer[se],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);_(M)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let se=0,Fe=j.length;se<Fe;se++){const be=j[se],fe=n.get(be);let de=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,fe.__webglTexture),ie(de,be),re(B.__webglFramebuffer,R,be,r.COLOR_ATTACHMENT0+se,de,0),_(be)&&m(de)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Q.__webglTexture),ie(se,M),M.mipmaps&&M.mipmaps.length>0)for(let Fe=0;Fe<M.mipmaps.length;Fe++)re(B.__webglFramebuffer[Fe],R,M,r.COLOR_ATTACHMENT0,se,Fe);else re(B.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,se,0);_(M)&&m(se),t.unbindTexture()}R.depthBuffer&&Pe(R)}function He(R){const M=R.textures;for(let B=0,Q=M.length;B<Q;B++){const j=M[B];if(_(j)){const K=x(R),pe=n.get(j).__webglTexture;t.bindTexture(K,pe),m(K),t.unbindTexture()}}}const Ye=[],Ve=[];function H(R){if(R.samples>0){if(W(R)===!1){const M=R.textures,B=R.width,Q=R.height;let j=r.COLOR_BUFFER_BIT;const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=n.get(R),se=M.length>1;if(se)for(let be=0;be<M.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const Fe=R.texture.mipmaps;Fe&&Fe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let be=0;be<M.length;be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pe.__webglColorRenderbuffer[be]);const fe=n.get(M[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,fe,0)}r.blitFramebuffer(0,0,B,Q,0,0,B,Q,j,r.NEAREST),l===!0&&(Ye.length=0,Ve.length=0,Ye.push(r.COLOR_ATTACHMENT0+be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ye.push(K),Ve.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ve)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let be=0;be<M.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,pe.__webglColorRenderbuffer[be]);const fe=n.get(M[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,fe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function C(R){return Math.min(i.maxSamples,R.samples)}function W(R){const M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ve(R){const M=a.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function he(R,M){const B=R.colorSpace,Q=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==cs&&B!==mr&&(ht.getTransfer(B)===xt?(Q!==Mi||j!==li)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",B)),M}function oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=U,this.setTextureCube=F,this.rebindTextures=Ke,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=W,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Hy(r,e){function t(n,i=mr){let s;const a=ht.getTransfer(i);if(n===li)return r.UNSIGNED_BYTE;if(n===Mh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Sh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===am)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===om)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===rm)return r.BYTE;if(n===sm)return r.SHORT;if(n===qa)return r.UNSIGNED_SHORT;if(n===xh)return r.INT;if(n===Oi)return r.UNSIGNED_INT;if(n===Li)return r.FLOAT;if(n===Si)return r.HALF_FLOAT;if(n===lm)return r.ALPHA;if(n===cm)return r.RGB;if(n===Mi)return r.RGBA;if(n===tr)return r.DEPTH_COMPONENT;if(n===Kr)return r.DEPTH_STENCIL;if(n===um)return r.RED;if(n===yh)return r.RED_INTEGER;if(n===Qs)return r.RG;if(n===Eh)return r.RG_INTEGER;if(n===bh)return r.RGBA_INTEGER;if(n===tl||n===nl||n===il||n===rl)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lu||n===cu||n===uu||n===hu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===lu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fu||n===du)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===pu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===mu)return s.COMPRESSED_R11_EAC;if(n===_u)return s.COMPRESSED_SIGNED_R11_EAC;if(n===gu)return s.COMPRESSED_RG11_EAC;if(n===vu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xu||n===Mu||n===Su||n===yu||n===Eu||n===bu||n===Tu||n===wu||n===Au||n===Ru||n===Cu||n===Pu||n===Du||n===Lu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===xu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Su)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Au)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ru)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Du)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Iu||n===Uu||n===Fu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Iu)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nu||n===Ou||n===Bu||n===zu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Nu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ou)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Za?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new xm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new sn({vertexShader:Vy,fragmentShader:Gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new to(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xy extends ta{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null;const g=typeof XRWebGLBinding<"u",_=new Wy,m={},x=t.getContextAttributes();let E=null,S=null;const A=[],b=[],w=new ct;let v=null;const y=new oi;y.viewport=new It;const L=new oi;L.viewport=new It;const D=[y,L],N=new nv;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=A[Z];return ee===void 0&&(ee=new rc,A[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=A[Z];return ee===void 0&&(ee=new rc,A[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=A[Z];return ee===void 0&&(ee=new rc,A[Z]=ee),ee.getHandSpace()};function X(Z){const ee=b.indexOf(Z.inputSource);if(ee===-1)return;const re=A[ee];re!==void 0&&(re.update(Z.inputSource,Z.frame,c||a),re.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",U);for(let Z=0;Z<A.length;Z++){const ee=b[Z];ee!==null&&(b[Z]=null,A[Z].disconnect(ee))}O=null,V=null,_.reset();for(const Z in m)delete m[Z];e.setRenderTarget(E),h=null,f=null,d=null,i=null,S=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",z),i.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ue=null,Le=null;x.depth&&(Le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=x.stencil?Kr:tr,Ue=x.stencil?Za:Oi);const Pe={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Pe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Rn(f.textureWidth,f.textureHeight,{format:Mi,type:li,depthTexture:new $a(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const re={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Rn(h.framebufferWidth,h.framebufferHeight,{format:Mi,type:li,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ce.setContext(i),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function U(Z){for(let ee=0;ee<Z.removed.length;ee++){const re=Z.removed[ee],Ue=b.indexOf(re);Ue>=0&&(b[Ue]=null,A[Ue].disconnect(re))}for(let ee=0;ee<Z.added.length;ee++){const re=Z.added[ee];let Ue=b.indexOf(re);if(Ue===-1){for(let Pe=0;Pe<A.length;Pe++)if(Pe>=b.length){b.push(re),Ue=Pe;break}else if(b[Pe]===null){b[Pe]=re,Ue=Pe;break}if(Ue===-1)break}const Le=A[Ue];Le&&Le.connect(re)}}const F=new J,k=new J;function P(Z,ee,re){F.setFromMatrixPosition(ee.matrixWorld),k.setFromMatrixPosition(re.matrixWorld);const Ue=F.distanceTo(k),Le=ee.projectionMatrix.elements,Pe=re.projectionMatrix.elements,Ke=Le[14]/(Le[10]-1),ye=Le[14]/(Le[10]+1),He=(Le[9]+1)/Le[5],Ye=(Le[9]-1)/Le[5],Ve=(Le[8]-1)/Le[0],H=(Pe[8]+1)/Pe[0],C=Ke*Ve,W=Ke*H,ve=Ue/(-Ve+H),he=ve*-Ve;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(he),Z.translateZ(ve),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Le[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const oe=Ke+ve,R=ye+ve,M=C-he,B=W+(Ue-he),Q=He*ye/R*oe,j=Ye*ye/R*oe;Z.projectionMatrix.makePerspective(M,B,Q,j,oe,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ne(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ee=Z.near,re=Z.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(re=_.depthFar)),N.near=L.near=y.near=ee,N.far=L.far=y.far=re,(O!==N.near||V!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,V=N.far),N.layers.mask=Z.layers.mask|6,y.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;const Ue=Z.parent,Le=N.cameras;ne(N,Ue);for(let Pe=0;Pe<Le.length;Pe++)ne(Le[Pe],Ue);Le.length===2?P(N,y,L):N.projectionMatrix.copy(y.projectionMatrix),ie(Z,N,Ue)};function ie(Z,ee,re){re===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(re.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ku*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(Z){return m[Z]};let me=null;function Re(Z,ee){if(u=ee.getViewerPose(c||a),p=ee,u!==null){const re=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Ue=!1;re.length!==N.cameras.length&&(N.cameras.length=0,Ue=!0);for(let ye=0;ye<re.length;ye++){const He=re[ye];let Ye=null;if(h!==null)Ye=h.getViewport(He);else{const H=d.getViewSubImage(f,He);Ye=H.viewport,ye===0&&(e.setRenderTargetTextures(S,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(S))}let Ve=D[ye];Ve===void 0&&(Ve=new oi,Ve.layers.enable(ye),Ve.viewport=new It,D[ye]=Ve),Ve.matrix.fromArray(He.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(He.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ye===0&&(N.matrix.copy(Ve.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ue===!0&&N.cameras.push(Ve)}const Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const ye=d.getDepthInformation(re[0]);ye&&ye.isValid&&ye.texture&&_.init(ye,i.renderState)}if(Le&&Le.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let ye=0;ye<re.length;ye++){const He=re[ye].camera;if(He){let Ye=m[He];Ye||(Ye=new xm,m[He]=Ye);const Ve=d.getCameraImage(He);Ye.sourceTexture=Ve}}}}for(let re=0;re<A.length;re++){const Ue=b[re],Le=A[re];Ue!==null&&Le!==void 0&&Le.update(Ue,ee,c||a)}me&&me(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}const Ce=new ym;Ce.setAnimationLoop(Re),this.setAnimationLoop=function(Z){me=Z},this.dispose=function(){}}}const Gr=new nr,Yy=new Ft;function qy(r,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,Mm(r)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,x,E,S){m.isMeshBasicMaterial?s(_,m):m.isMeshLambertMaterial?(s(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(_,m),d(_,m)):m.isMeshPhongMaterial?(s(_,m),u(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(_,m),f(_,m),m.isMeshPhysicalMaterial&&h(_,m,S)):m.isMeshMatcapMaterial?(s(_,m),p(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),g(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&o(_,m)):m.isPointsMaterial?l(_,m,x,E):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===Bn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===Bn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const x=e.get(m),E=x.envMap,S=x.envMapRotation;E&&(_.envMap.value=E,Gr.copy(S),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),_.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(Gr)),_.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function o(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,x,E){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*x,_.scale.value=E*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function d(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function h(_,m,x){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,m){m.matcap&&(_.matcap.value=m.matcap)}function g(_,m){const x=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zy(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const S=E.program;n.uniformBlockBinding(x,S)}function c(x,E){let S=i[x.id];S===void 0&&(p(x),S=u(x),i[x.id]=S,x.addEventListener("dispose",_));const A=E.program;n.updateUBOMapping(x,A);const b=e.render.frame;s[x.id]!==b&&(f(x),s[x.id]=b)}function u(x){const E=d();x.__bindingPointIndex=E;const S=r.createBuffer(),A=x.__size,b=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,S),S}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const E=i[x.id],S=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let b=0,w=S.length;b<w;b++){const v=Array.isArray(S[b])?S[b]:[S[b]];for(let y=0,L=v.length;y<L;y++){const D=v[y];if(h(D,b,y,A)===!0){const N=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let X=0;X<O.length;X++){const z=O[X],U=g(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,N+V,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,V),V+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(x,E,S,A){const b=x.value,w=E+"_"+S;if(A[w]===void 0)return typeof b=="number"||typeof b=="boolean"?A[w]=b:A[w]=b.clone(),!0;{const v=A[w];if(typeof b=="number"||typeof b=="boolean"){if(v!==b)return A[w]=b,!0}else if(v.equals(b)===!1)return v.copy(b),!0}return!1}function p(x){const E=x.uniforms;let S=0;const A=16;for(let w=0,v=E.length;w<v;w++){const y=Array.isArray(E[w])?E[w]:[E[w]];for(let L=0,D=y.length;L<D;L++){const N=y[L],O=Array.isArray(N.value)?N.value:[N.value];for(let V=0,X=O.length;V<X;V++){const z=O[V],U=g(z),F=S%A,k=F%U.boundary,P=F+k;S+=k,P!==0&&A-P<U.storage&&(S+=A-P),N.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=U.storage}}}const b=S%A;return b>0&&(S+=A-b),x.__size=S,x.__cache={},this}function g(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",x),E}function _(x){const E=x.target;E.removeEventListener("dispose",_);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}const $y=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bi=null;function jy(){return bi===null&&(bi=new H0($y,16,16,Qs,Si),bi.name="DFG_LUT",bi.minFilter=ln,bi.magFilter=ln,bi.wrapS=Di,bi.wrapT=Di,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}class Ky{constructor(e={}){const{canvas:t=x0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=li}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=h,_=new Set([bh,Eh,yh]),m=new Set([li,Oi,qa,Za,Mh,Sh]),x=new Uint32Array(4),E=new Int32Array(4);let S=null,A=null;const b=[],w=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let L=!1;this._outputColorSpace=qn;let D=0,N=0,O=null,V=-1,X=null;const z=new It,U=new It;let F=null;const k=new pt(0);let P=0,ne=t.width,ie=t.height,me=1,Re=null,Ce=null;const Z=new It(0,0,ne,ie),ee=new It(0,0,ne,ie);let re=!1;const Ue=new gm;let Le=!1,Pe=!1;const Ke=new Ft,ye=new J,He=new It,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function H(){return O===null?me:1}let C=n;function W(T,G){return t.getContext(T,G)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vh}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ft,!1),C===null){const G="webgl2";if(C=W(G,T),C===null)throw W(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw ut("WebGLRenderer: "+T.message),T}let ve,he,oe,R,M,B,Q,j,K,pe,se,Fe,be,fe,de,De,we,ae,ge,I,ce,le,_e;function ue(){ve=new KM(C),ve.init(),ce=new Hy(C,ve),he=new GM(C,ve,e,ce),oe=new zy(C,ve),he.reversedDepthBuffer&&f&&oe.buffers.depth.setReversed(!0),R=new eS(C),M=new Ty,B=new ky(C,ve,oe,M,he,ce,R),Q=new jM(y),j=new sv(C),le=new HM(C,j),K=new JM(C,j,R,le),pe=new nS(C,K,j,le,R),ae=new tS(C,he,B),de=new WM(M),se=new by(y,Q,ve,he,le,de),Fe=new qy(y,M),be=new Ay,fe=new Iy(ve),we=new kM(y,Q,oe,pe,p,l),De=new By(y,pe,he),_e=new Zy(C,R,he,oe),ge=new VM(C,ve,R),I=new QM(C,ve,R),R.programs=se.programs,y.capabilities=he,y.extensions=ve,y.properties=M,y.renderLists=be,y.shadowMap=De,y.state=oe,y.info=R}ue(),g!==li&&(v=new rS(g,t.width,t.height,i,s));const te=new Xy(y,C);this.xr=te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const T=ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(T){T!==void 0&&(me=T,this.setSize(ne,ie,!1))},this.getSize=function(T){return T.set(ne,ie)},this.setSize=function(T,G,$=!0){if(te.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=T,ie=G,t.width=Math.floor(T*me),t.height=Math.floor(G*me),$===!0&&(t.style.width=T+"px",t.style.height=G+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(ne*me,ie*me).floor()},this.setDrawingBufferSize=function(T,G,$){ne=T,ie=G,me=$,t.width=Math.floor(T*$),t.height=Math.floor(G*$),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(g===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(z)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,G,$,q){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,G,$,q),oe.viewport(z.copy(Z).multiplyScalar(me).round())},this.getScissor=function(T){return T.copy(ee)},this.setScissor=function(T,G,$,q){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,G,$,q),oe.scissor(U.copy(ee).multiplyScalar(me).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){oe.setScissorTest(re=T)},this.setOpaqueSort=function(T){Re=T},this.setTransparentSort=function(T){Ce=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,$=!0){let q=0;if(T){let Y=!1;if(O!==null){const xe=O.texture.format;Y=_.has(xe)}if(Y){const xe=O.texture.type,Se=m.has(xe),Me=we.getClearColor(),Oe=we.getClearAlpha(),Ne=Me.r,Qe=Me.g,it=Me.b;Se?(x[0]=Ne,x[1]=Qe,x[2]=it,x[3]=Oe,C.clearBufferuiv(C.COLOR,0,x)):(E[0]=Ne,E[1]=Qe,E[2]=it,E[3]=Oe,C.clearBufferiv(C.COLOR,0,E))}else q|=C.COLOR_BUFFER_BIT}G&&(q|=C.DEPTH_BUFFER_BIT),$&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),we.dispose(),be.dispose(),fe.dispose(),M.dispose(),Q.dispose(),pe.dispose(),le.dispose(),_e.dispose(),se.dispose(),te.dispose(),te.removeEventListener("sessionstart",$e),te.removeEventListener("sessionend",Nt),Je.stop()};function Ie(T){T.preventDefault(),Rf("WebGLRenderer: Context Lost."),L=!0}function We(){Rf("WebGLRenderer: Context Restored."),L=!1;const T=R.autoReset,G=De.enabled,$=De.autoUpdate,q=De.needsUpdate,Y=De.type;ue(),R.autoReset=T,De.enabled=G,De.autoUpdate=$,De.needsUpdate=q,De.type=Y}function ft(T){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ae(T){const G=T.target;G.removeEventListener("dispose",Ae),ze(G)}function ze(T){et(T),M.remove(T)}function et(T){const G=M.get(T).programs;G!==void 0&&(G.forEach(function($){se.releaseProgram($)}),T.isShaderMaterial&&se.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,$,q,Y,xe){G===null&&(G=Ye);const Se=Y.isMesh&&Y.matrixWorld.determinant()<0,Me=ni(T,G,$,q,Y);oe.setMaterial(q,Se);let Oe=$.index,Ne=1;if(q.wireframe===!0){if(Oe=K.getWireframeAttribute($),Oe===void 0)return;Ne=2}const Qe=$.drawRange,it=$.attributes.position;let Ge=Qe.start*Ne,Mt=(Qe.start+Qe.count)*Ne;xe!==null&&(Ge=Math.max(Ge,xe.start*Ne),Mt=Math.min(Mt,(xe.start+xe.count)*Ne)),Oe!==null?(Ge=Math.max(Ge,0),Mt=Math.min(Mt,Oe.count)):it!=null&&(Ge=Math.max(Ge,0),Mt=Math.min(Mt,it.count));const Ot=Mt-Ge;if(Ot<0||Ot===1/0)return;le.setup(Y,q,Me,$,Oe);let Lt,St=ge;if(Oe!==null&&(Lt=j.get(Oe),St=I,St.setIndex(Lt)),Y.isMesh)q.wireframe===!0?(oe.setLineWidth(q.wireframeLinewidth*H()),St.setMode(C.LINES)):St.setMode(C.TRIANGLES);else if(Y.isLine){let fn=q.linewidth;fn===void 0&&(fn=1),oe.setLineWidth(fn*H()),Y.isLineSegments?St.setMode(C.LINES):Y.isLineLoop?St.setMode(C.LINE_LOOP):St.setMode(C.LINE_STRIP)}else Y.isPoints?St.setMode(C.POINTS):Y.isSprite&&St.setMode(C.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const fn=Y._multiDrawStarts,ke=Y._multiDrawCounts,Hn=Y._multiDrawCount,dt=Oe?j.get(Oe).bytesPerElement:1,di=M.get(q).currentProgram.getUniforms();for(let yi=0;yi<Hn;yi++)di.setValue(C,"_gl_DrawID",yi),St.render(fn[yi]/dt,ke[yi])}else if(Y.isInstancedMesh)St.renderInstances(Ge,Ot,Y.count);else if($.isInstancedBufferGeometry){const fn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ke=Math.min($.instanceCount,fn);St.renderInstances(Ge,Ot,ke)}else St.render(Ge,Ot)};function Ee(T,G,$){T.transparent===!0&&T.side===qi&&T.forceSinglePass===!1?(T.side=Bn,T.needsUpdate=!0,un(T,G,$),T.side=Ir,T.needsUpdate=!0,un(T,G,$),T.side=qi):un(T,G,$)}this.compile=function(T,G,$=null){$===null&&($=T),A=fe.get($),A.init(G),w.push(A),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),T!==$&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights();const q=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const xe=Y.material;if(xe)if(Array.isArray(xe))for(let Se=0;Se<xe.length;Se++){const Me=xe[Se];Ee(Me,$,Y),q.add(Me)}else Ee(xe,$,Y),q.add(xe)}),A=w.pop(),q},this.compileAsync=function(T,G,$=null){const q=this.compile(T,G,$);return new Promise(Y=>{function xe(){if(q.forEach(function(Se){M.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){Y(T);return}setTimeout(xe,10)}ve.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let qe=null;function Xe(T){qe&&qe(T)}function $e(){Je.stop()}function Nt(){Je.start()}const Je=new ym;Je.setAnimationLoop(Xe),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(T){qe=T,te.setAnimationLoop(T),T===null?Je.stop():Je.start()},te.addEventListener("sessionstart",$e),te.addEventListener("sessionend",Nt),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const $=te.enabled===!0&&te.isPresenting===!0,q=v!==null&&(O===null||$)&&v.begin(y,O);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(G),G=te.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,G,O),A=fe.get(T,w.length),A.init(G),w.push(A),Ke.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ue.setFromProjectionMatrix(Ke,Ii,G.reversedDepth),Pe=this.localClippingEnabled,Le=de.init(this.clippingPlanes,Pe),S=be.get(T,b.length),S.init(),b.push(S),te.enabled===!0&&te.isPresenting===!0){const Se=y.xr.getDepthSensingMesh();Se!==null&&wt(Se,G,-1/0,y.sortObjects)}wt(T,G,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(Re,Ce),Ve=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ve&&we.addToRenderList(S,T),this.info.render.frame++,Le===!0&&de.beginShadows();const Y=A.state.shadowsArray;if(De.render(Y,T,G),Le===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&v.hasRenderPass())===!1){const Se=S.opaque,Me=S.transmissive;if(A.setupLights(),G.isArrayCamera){const Oe=G.cameras;if(Me.length>0)for(let Ne=0,Qe=Oe.length;Ne<Qe;Ne++){const it=Oe[Ne];At(Se,Me,T,it)}Ve&&we.render(T);for(let Ne=0,Qe=Oe.length;Ne<Qe;Ne++){const it=Oe[Ne];Wt(S,T,it,it.viewport)}}else Me.length>0&&At(Se,Me,T,G),Ve&&we.render(T),Wt(S,T,G)}O!==null&&N===0&&(B.updateMultisampleRenderTarget(O),B.updateRenderTargetMipmap(O)),q&&v.end(y),T.isScene===!0&&T.onAfterRender(y,T,G),le.resetDefaultState(),V=-1,X=null,w.pop(),w.length>0?(A=w[w.length-1],Le===!0&&de.setGlobalState(y.clippingPlanes,A.state.camera)):A=null,b.pop(),b.length>0?S=b[b.length-1]:S=null};function wt(T,G,$,q){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ue.intersectsSprite(T)){q&&He.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ke);const Se=pe.update(T),Me=T.material;Me.visible&&S.push(T,Se,Me,$,He.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ue.intersectsObject(T))){const Se=pe.update(T),Me=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),He.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),He.copy(Se.boundingSphere.center)),He.applyMatrix4(T.matrixWorld).applyMatrix4(Ke)),Array.isArray(Me)){const Oe=Se.groups;for(let Ne=0,Qe=Oe.length;Ne<Qe;Ne++){const it=Oe[Ne],Ge=Me[it.materialIndex];Ge&&Ge.visible&&S.push(T,Se,Ge,$,He.z,it)}}else Me.visible&&S.push(T,Se,Me,$,He.z,null)}}const xe=T.children;for(let Se=0,Me=xe.length;Se<Me;Se++)wt(xe[Se],G,$,q)}function Wt(T,G,$,q){const{opaque:Y,transmissive:xe,transparent:Se}=T;A.setupLightsView($),Le===!0&&de.setGlobalState(y.clippingPlanes,$),q&&oe.viewport(z.copy(q)),Y.length>0&&gt(Y,G,$),xe.length>0&&gt(xe,G,$),Se.length>0&&gt(Se,G,$),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function At(T,G,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[q.id]===void 0){const Ge=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[q.id]=new Rn(1,1,{generateMipmaps:!0,type:Ge?Si:li,minFilter:yr,samples:Math.max(4,he.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const xe=A.state.transmissionRenderTarget[q.id],Se=q.viewport||z;xe.setSize(Se.z*y.transmissionResolutionScale,Se.w*y.transmissionResolutionScale);const Me=y.getRenderTarget(),Oe=y.getActiveCubeFace(),Ne=y.getActiveMipmapLevel();y.setRenderTarget(xe),y.getClearColor(k),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear(),Ve&&we.render($);const Qe=y.toneMapping;y.toneMapping=Fi;const it=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),A.setupLightsView(q),Le===!0&&de.setGlobalState(y.clippingPlanes,q),gt(T,$,q),B.updateMultisampleRenderTarget(xe),B.updateRenderTargetMipmap(xe),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Mt=0,Ot=G.length;Mt<Ot;Mt++){const Lt=G[Mt],{object:St,geometry:fn,material:ke,group:Hn}=Lt;if(ke.side===qi&&St.layers.test(q.layers)){const dt=ke.side;ke.side=Bn,ke.needsUpdate=!0,mt(St,$,q,fn,ke,Hn),ke.side=dt,ke.needsUpdate=!0,Ge=!0}}Ge===!0&&(B.updateMultisampleRenderTarget(xe),B.updateRenderTargetMipmap(xe))}y.setRenderTarget(Me,Oe,Ne),y.setClearColor(k,P),it!==void 0&&(q.viewport=it),y.toneMapping=Qe}function gt(T,G,$){const q=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,xe=T.length;Y<xe;Y++){const Se=T[Y],{object:Me,geometry:Oe,group:Ne}=Se;let Qe=Se.material;Qe.allowOverride===!0&&q!==null&&(Qe=q),Me.layers.test($.layers)&&mt(Me,G,$,Oe,Qe,Ne)}}function mt(T,G,$,q,Y,xe){T.onBeforeRender(y,G,$,q,Y,xe),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(y,G,$,q,T,xe),Y.transparent===!0&&Y.side===qi&&Y.forceSinglePass===!1?(Y.side=Bn,Y.needsUpdate=!0,y.renderBufferDirect($,G,q,Y,T,xe),Y.side=Ir,Y.needsUpdate=!0,y.renderBufferDirect($,G,q,Y,T,xe),Y.side=qi):y.renderBufferDirect($,G,q,Y,T,xe),T.onAfterRender(y,G,$,q,Y,xe)}function un(T,G,$){G.isScene!==!0&&(G=Ye);const q=M.get(T),Y=A.state.lights,xe=A.state.shadowsArray,Se=Y.state.version,Me=se.getParameters(T,Y.state,xe,G,$),Oe=se.getProgramCacheKey(Me);let Ne=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,q.fog=G.fog;const Qe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=Q.get(T.envMap||q.environment,Qe),q.envMapRotation=q.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",Ae),Ne=new Map,q.programs=Ne);let it=Ne.get(Oe);if(it!==void 0){if(q.currentProgram===it&&q.lightsStateVersion===Se)return hn(T,Me),it}else Me.uniforms=se.getUniforms(T),T.onBeforeCompile(Me,y),it=se.acquireProgram(Me,Oe),Ne.set(Oe,it),q.uniforms=Me.uniforms;const Ge=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=de.uniform),hn(T,Me),q.needsLights=Yt(T),q.lightsStateVersion=Se,q.needsLights&&(Ge.ambientLightColor.value=Y.state.ambient,Ge.lightProbe.value=Y.state.probe,Ge.directionalLights.value=Y.state.directional,Ge.directionalLightShadows.value=Y.state.directionalShadow,Ge.spotLights.value=Y.state.spot,Ge.spotLightShadows.value=Y.state.spotShadow,Ge.rectAreaLights.value=Y.state.rectArea,Ge.ltc_1.value=Y.state.rectAreaLTC1,Ge.ltc_2.value=Y.state.rectAreaLTC2,Ge.pointLights.value=Y.state.point,Ge.pointLightShadows.value=Y.state.pointShadow,Ge.hemisphereLights.value=Y.state.hemi,Ge.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ge.spotLightMatrix.value=Y.state.spotLightMatrix,Ge.spotLightMap.value=Y.state.spotLightMap,Ge.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.currentProgram=it,q.uniformsList=null,it}function Tt(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=sl.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function hn(T,G){const $=M.get(T);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function ni(T,G,$,q,Y){G.isScene!==!0&&(G=Ye),B.resetTextureUnits();const xe=G.fog,Se=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?G.environment:null,Me=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:cs,Oe=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ne=Q.get(q.envMap||Se,Oe),Qe=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,it=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ge=!!$.morphAttributes.position,Mt=!!$.morphAttributes.normal,Ot=!!$.morphAttributes.color;let Lt=Fi;q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Lt=y.toneMapping);const St=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,fn=St!==void 0?St.length:0,ke=M.get(q),Hn=A.state.lights;if(Le===!0&&(Pe===!0||T!==X)){const Jt=T===X&&q.id===V;de.setState(q,T,Jt)}let dt=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Hn.state.version||ke.outputColorSpace!==Me||Y.isBatchedMesh&&ke.batching===!1||!Y.isBatchedMesh&&ke.batching===!0||Y.isBatchedMesh&&ke.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ke.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ke.instancing===!1||!Y.isInstancedMesh&&ke.instancing===!0||Y.isSkinnedMesh&&ke.skinning===!1||!Y.isSkinnedMesh&&ke.skinning===!0||Y.isInstancedMesh&&ke.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ke.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ke.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ke.instancingMorph===!1&&Y.morphTexture!==null||ke.envMap!==Ne||q.fog===!0&&ke.fog!==xe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==de.numPlanes||ke.numIntersection!==de.numIntersection)||ke.vertexAlphas!==Qe||ke.vertexTangents!==it||ke.morphTargets!==Ge||ke.morphNormals!==Mt||ke.morphColors!==Ot||ke.toneMapping!==Lt||ke.morphTargetsCount!==fn)&&(dt=!0):(dt=!0,ke.__version=q.version);let di=ke.currentProgram;dt===!0&&(di=un(q,G,Y));let yi=!1,Fr=!1,fs=!1;const Et=di.getUniforms(),rn=ke.uniforms;if(oe.useProgram(di.program)&&(yi=!0,Fr=!0,fs=!0),q.id!==V&&(V=q.id,Fr=!0),yi||X!==T){oe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Et.setValue(C,"projectionMatrix",T.projectionMatrix),Et.setValue(C,"viewMatrix",T.matrixWorldInverse);const rr=Et.map.cameraPosition;rr!==void 0&&rr.setValue(C,ye.setFromMatrixPosition(T.matrixWorld)),he.logarithmicDepthBuffer&&Et.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Et.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,Fr=!0,fs=!0)}if(ke.needsLights&&(Hn.state.directionalShadowMap.length>0&&Et.setValue(C,"directionalShadowMap",Hn.state.directionalShadowMap,B),Hn.state.spotShadowMap.length>0&&Et.setValue(C,"spotShadowMap",Hn.state.spotShadowMap,B),Hn.state.pointShadowMap.length>0&&Et.setValue(C,"pointShadowMap",Hn.state.pointShadowMap,B)),Y.isSkinnedMesh){Et.setOptional(C,Y,"bindMatrix"),Et.setOptional(C,Y,"bindMatrixInverse");const Jt=Y.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Et.setValue(C,"boneTexture",Jt.boneTexture,B))}Y.isBatchedMesh&&(Et.setOptional(C,Y,"batchingTexture"),Et.setValue(C,"batchingTexture",Y._matricesTexture,B),Et.setOptional(C,Y,"batchingIdTexture"),Et.setValue(C,"batchingIdTexture",Y._indirectTexture,B),Et.setOptional(C,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Et.setValue(C,"batchingColorTexture",Y._colorsTexture,B));const ir=$.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&ae.update(Y,$,di),(Fr||ke.receiveShadow!==Y.receiveShadow)&&(ke.receiveShadow=Y.receiveShadow,Et.setValue(C,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&G.environment!==null&&(rn.envMapIntensity.value=G.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=jy()),Fr&&(Et.setValue(C,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&Xt(rn,fs),xe&&q.fog===!0&&Fe.refreshFogUniforms(rn,xe),Fe.refreshMaterialUniforms(rn,q,me,ie,A.state.transmissionRenderTarget[T.id]),sl.upload(C,Tt(ke),rn,B)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(sl.upload(C,Tt(ke),rn,B),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Et.setValue(C,"center",Y.center),Et.setValue(C,"modelViewMatrix",Y.modelViewMatrix),Et.setValue(C,"normalMatrix",Y.normalMatrix),Et.setValue(C,"modelMatrix",Y.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Jt=q.uniformsGroups;for(let rr=0,ds=Jt.length;rr<ds;rr++){const Dh=Jt[rr];_e.update(Dh,di),_e.bind(Dh,di)}}return di}function Xt(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Yt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(T,G,$){const q=M.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=G,M.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const $=M.get(T);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0};const Kt=C.createFramebuffer();this.setRenderTarget=function(T,G=0,$=0){O=T,D=G,N=$;let q=null,Y=!1,xe=!1;if(T){const Me=M.get(T);if(Me.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(C.FRAMEBUFFER,Me.__webglFramebuffer),z.copy(T.viewport),U.copy(T.scissor),F=T.scissorTest,oe.viewport(z),oe.scissor(U),oe.setScissorTest(F),V=-1;return}else if(Me.__webglFramebuffer===void 0)B.setupRenderTarget(T);else if(Me.__hasExternalTextures)B.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Qe=T.depthTexture;if(Me.__boundDepthTexture!==Qe){if(Qe!==null&&M.has(Qe)&&(T.width!==Qe.image.width||T.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(T)}}const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(xe=!0);const Ne=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[G])?q=Ne[G][$]:q=Ne[G],Y=!0):T.samples>0&&B.useMultisampledRTT(T)===!1?q=M.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?q=Ne[$]:q=Ne,z.copy(T.viewport),U.copy(T.scissor),F=T.scissorTest}else z.copy(Z).multiplyScalar(me).floor(),U.copy(ee).multiplyScalar(me).floor(),F=re;if($!==0&&(q=Kt),oe.bindFramebuffer(C.FRAMEBUFFER,q)&&oe.drawBuffers(T,q),oe.viewport(z),oe.scissor(U),oe.setScissorTest(F),Y){const Me=M.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+G,Me.__webglTexture,$)}else if(xe){const Me=G;for(let Oe=0;Oe<T.textures.length;Oe++){const Ne=M.get(T.textures[Oe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Oe,Ne.__webglTexture,$,Me)}}else if(T!==null&&$!==0){const Me=M.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Me.__webglTexture,$)}V=-1},this.readRenderTargetPixels=function(T,G,$,q,Y,xe,Se,Me=0){if(!(T&&T.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Oe=Oe[Se]),Oe){oe.bindFramebuffer(C.FRAMEBUFFER,Oe);try{const Ne=T.textures[Me],Qe=Ne.format,it=Ne.type;if(T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),!he.textureFormatReadable(Qe)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(it)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-q&&$>=0&&$<=T.height-Y&&C.readPixels(G,$,q,Y,ce.convert(Qe),ce.convert(it),xe)}finally{const Ne=O!==null?M.get(O).__webglFramebuffer:null;oe.bindFramebuffer(C.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(T,G,$,q,Y,xe,Se,Me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Oe=Oe[Se]),Oe)if(G>=0&&G<=T.width-q&&$>=0&&$<=T.height-Y){oe.bindFramebuffer(C.FRAMEBUFFER,Oe);const Ne=T.textures[Me],Qe=Ne.format,it=Ne.type;if(T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),!he.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ge),C.bufferData(C.PIXEL_PACK_BUFFER,xe.byteLength,C.STREAM_READ),C.readPixels(G,$,q,Y,ce.convert(Qe),ce.convert(it),0);const Mt=O!==null?M.get(O).__webglFramebuffer:null;oe.bindFramebuffer(C.FRAMEBUFFER,Mt);const Ot=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await M0(C,Ot,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ge),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,xe),C.deleteBuffer(Ge),C.deleteSync(Ot),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,$=0){const q=Math.pow(2,-$),Y=Math.floor(T.image.width*q),xe=Math.floor(T.image.height*q),Se=G!==null?G.x:0,Me=G!==null?G.y:0;B.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,$,0,0,Se,Me,Y,xe),oe.unbindTexture()};const Bi=C.createFramebuffer(),hs=C.createFramebuffer();this.copyTextureToTexture=function(T,G,$=null,q=null,Y=0,xe=0){let Se,Me,Oe,Ne,Qe,it,Ge,Mt,Ot;const Lt=T.isCompressedTexture?T.mipmaps[xe]:T.image;if($!==null)Se=$.max.x-$.min.x,Me=$.max.y-$.min.y,Oe=$.isBox3?$.max.z-$.min.z:1,Ne=$.min.x,Qe=$.min.y,it=$.isBox3?$.min.z:0;else{const rn=Math.pow(2,-Y);Se=Math.floor(Lt.width*rn),Me=Math.floor(Lt.height*rn),T.isDataArrayTexture?Oe=Lt.depth:T.isData3DTexture?Oe=Math.floor(Lt.depth*rn):Oe=1,Ne=0,Qe=0,it=0}q!==null?(Ge=q.x,Mt=q.y,Ot=q.z):(Ge=0,Mt=0,Ot=0);const St=ce.convert(G.format),fn=ce.convert(G.type);let ke;G.isData3DTexture?(B.setTexture3D(G,0),ke=C.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(B.setTexture2DArray(G,0),ke=C.TEXTURE_2D_ARRAY):(B.setTexture2D(G,0),ke=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,G.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,G.unpackAlignment);const Hn=C.getParameter(C.UNPACK_ROW_LENGTH),dt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),di=C.getParameter(C.UNPACK_SKIP_PIXELS),yi=C.getParameter(C.UNPACK_SKIP_ROWS),Fr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Lt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Lt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ne),C.pixelStorei(C.UNPACK_SKIP_ROWS,Qe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,it);const fs=T.isDataArrayTexture||T.isData3DTexture,Et=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const rn=M.get(T),ir=M.get(G),Jt=M.get(rn.__renderTarget),rr=M.get(ir.__renderTarget);oe.bindFramebuffer(C.READ_FRAMEBUFFER,Jt.__webglFramebuffer),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,rr.__webglFramebuffer);for(let ds=0;ds<Oe;ds++)fs&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,M.get(T).__webglTexture,Y,it+ds),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,M.get(G).__webglTexture,xe,Ot+ds)),C.blitFramebuffer(Ne,Qe,Se,Me,Ge,Mt,Se,Me,C.DEPTH_BUFFER_BIT,C.NEAREST);oe.bindFramebuffer(C.READ_FRAMEBUFFER,null),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||M.has(T)){const rn=M.get(T),ir=M.get(G);oe.bindFramebuffer(C.READ_FRAMEBUFFER,Bi),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,hs);for(let Jt=0;Jt<Oe;Jt++)fs?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,rn.__webglTexture,Y,it+Jt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,rn.__webglTexture,Y),Et?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ir.__webglTexture,xe,Ot+Jt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ir.__webglTexture,xe),Y!==0?C.blitFramebuffer(Ne,Qe,Se,Me,Ge,Mt,Se,Me,C.COLOR_BUFFER_BIT,C.NEAREST):Et?C.copyTexSubImage3D(ke,xe,Ge,Mt,Ot+Jt,Ne,Qe,Se,Me):C.copyTexSubImage2D(ke,xe,Ge,Mt,Ne,Qe,Se,Me);oe.bindFramebuffer(C.READ_FRAMEBUFFER,null),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Et?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(ke,xe,Ge,Mt,Ot,Se,Me,Oe,St,fn,Lt.data):G.isCompressedArrayTexture?C.compressedTexSubImage3D(ke,xe,Ge,Mt,Ot,Se,Me,Oe,St,Lt.data):C.texSubImage3D(ke,xe,Ge,Mt,Ot,Se,Me,Oe,St,fn,Lt):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,xe,Ge,Mt,Se,Me,St,fn,Lt.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,xe,Ge,Mt,Lt.width,Lt.height,St,Lt.data):C.texSubImage2D(C.TEXTURE_2D,xe,Ge,Mt,Se,Me,St,fn,Lt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Hn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,dt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,di),C.pixelStorei(C.UNPACK_SKIP_ROWS,yi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Fr),xe===0&&G.generateMipmaps&&C.generateMipmap(ke),oe.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&B.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?B.setTextureCube(T,0):T.isData3DTexture?B.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?B.setTexture2DArray(T,0):B.setTexture2D(T,0),oe.unbindTexture()},this.resetState=function(){D=0,N=0,O=null,oe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const Rm=`
float sdRoundRect(vec2 p, vec2 halfSize, float r) {
  vec2 q = abs(p) - halfSize + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}
`,Md=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Jy=`
precision highp float;
${Rm}
uniform sampler2D uAtlas;
uniform vec4 uAtlasRect; // u0, v0, du, dv
uniform sampler2D uMap;
uniform float uHasHi;    // 0 = atlas only, 1 = hi-res texture
uniform vec2 uSize;      // world size of the print
uniform float uTexW;     // texture width in px
uniform float uRadius;
uniform float uAlpha;
uniform float uBlur;     // blur radius in uv (fraction of width)
uniform float uDim;
uniform float uDesat;
uniform float uFog;
uniform vec3 uBg;
uniform float uSeed;
varying vec2 vUv;

vec3 samplePhoto(vec2 uv, float lod) {
  vec2 auv = uAtlasRect.xy + clamp(uv, 0.008, 0.992) * uAtlasRect.zw;
  vec3 atlasCol = textureLod(uAtlas, auv, min(lod, 3.6)).rgb;
  if (uHasHi < 0.01) return atlasCol;
  vec3 hiCol = textureLod(uMap, clamp(uv, 0.001, 0.999), lod).rgb;
  return mix(atlasCol, hiCol, uHasHi);
}

vec3 dof(vec2 uv) {
  if (uBlur < 0.0012) return samplePhoto(uv, 0.0);
  float lod = max(0.0, log2(uBlur * uTexW * 0.6));
  vec2 asp = vec2(1.0, uSize.x / uSize.y);
  vec3 acc = vec3(0.0);
  float rot = uSeed * 6.2831;
  const int TAPS = 8;
  for (int i = 0; i < TAPS; i++) {
    float fi = float(i);
    float a = fi * 2.39996 + rot;
    float r = sqrt((fi + 0.5) / float(TAPS)) * uBlur;
    acc += samplePhoto(uv + vec2(cos(a), sin(a)) * r * asp, lod);
  }
  return acc / float(TAPS);
}

void main() {
  vec2 p = (vUv - 0.5) * uSize;
  float d = sdRoundRect(p, uSize * 0.5, uRadius);
  float aa = fwidth(d);
  float soft = uBlur * uSize.x * 0.5;            // blurred prints get soft edges, like real DOF
  float mask = 1.0 - smoothstep(-aa - soft, aa + soft * 0.5, d);

  vec3 col = dof(vUv);
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(col, vec3(l), uDesat);
  col *= uDim;
  col = mix(col, uBg, uFog);

  float a = mask * uAlpha;
  gl_FragColor = vec4(col * a, a);
}
`,Qy=`
precision highp float;
${Rm}
uniform sampler2D uAtlas;
uniform vec4 uAtlasRect;
uniform vec2 uSize;
uniform float uPad;
uniform float uRadius;
uniform float uAlpha;
uniform float uGlow;
uniform float uShadow;
varying vec2 vUv;
void main() {
  vec2 full = uSize + 2.0 * uPad;
  vec2 p = (vUv - 0.5) * full;
  float d = sdRoundRect(p, uSize * 0.5, uRadius);
  float outside = smoothstep(-0.015, 0.04, d);

  // Sample edge colour from atlas; compress bright whites so prints spill mood, not grey haze
  vec2 puv = clamp(p / uSize + 0.5, 0.05, 0.95);
  vec2 auv = uAtlasRect.xy + puv * uAtlasRect.zw;
  vec3 c = textureLod(uAtlas, auv, 3.6).rgb;
  float cl = max(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1e-4);
  c = mix(vec3(cl), c, 1.35);
  c *= 1.0 / (1.0 + cl * 2.6);

  float glow = (exp(-max(d, 0.0) * 2.4) * 0.65 + exp(-max(d, 0.0) * 1.1) * 0.35) * outside;
  float edgeFade = 1.0 - smoothstep(uPad * 0.35, uPad * 0.92, d);
  glow *= edgeFade * edgeFade;

  float ds = sdRoundRect(p + vec2(0.0, 0.05), uSize * 0.5, uRadius);
  float shadow = (1.0 - smoothstep(-0.03, 0.32, ds)) * outside;

  vec3 rgb = max(c, 0.0) * glow * uGlow * uAlpha;
  float a = shadow * uShadow * uAlpha;
  gl_FragColor = vec4(rgb, a);
}
`,e1=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.9999, 1.0); }
`,t1=`
precision highp float;
uniform vec3 uBg;
uniform vec3 uLift;
uniform float uAspect;
varying vec2 vUv;
void main() {
  vec2 c = (vUv - vec2(0.5, 0.52)) * vec2(uAspect, 1.0);
  float r = length(c);
  float f = exp(-r * r * 1.6);
  vec3 col = mix(uBg, uLift, f);
  gl_FragColor = vec4(col, 1.0);
}
`,n1=`
uniform vec3 uCam;
uniform float uTime;
uniform float uPR;
uniform float uScale;
attribute float aSeed;
varying float vAlpha;
void main() {
  vec3 box = vec3(14.0, 9.0, 36.0);
  vec3 p = position;
  p += vec3(sin(uTime * 0.07 + aSeed * 9.0), cos(uTime * 0.05 + aSeed * 7.0), sin(uTime * 0.04 + aSeed * 3.0)) * 0.6;
  p.y += uTime * 0.03 * (0.4 + aSeed);
  vec3 w = uCam - mod(uCam - p, box) + box * vec3(0.5, 0.5, 0.0);
  w.z = uCam.z - mod(uCam.z - p.z, box.z);
  vec4 mv = modelViewMatrix * vec4(w, 1.0);
  float depth = -mv.z;
  gl_Position = projectionMatrix * mv;
  float near = smoothstep(0.4, 2.5, depth);
  float far = 1.0 - smoothstep(18.0, 34.0, depth);
  float twinkle = 0.6 + 0.4 * sin(uTime * (0.3 + aSeed) + aSeed * 40.0);
  vAlpha = near * far * twinkle * (0.25 + 0.75 * aSeed);
  gl_PointSize = uScale * uPR * (0.025 + 0.035 * aSeed) / max(depth, 0.1);
}
`,i1=`
precision highp float;
uniform float uStrength;
uniform vec3 uTint;
varying float vAlpha;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float a = exp(-d * d * 18.0) * vAlpha * uStrength;
  gl_FragColor = vec4(uTint * a, 0.0);
}
`,Ac=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,r1=`
precision highp float;
uniform sampler2D tInput;
uniform vec2 uTexel;
uniform float uThreshold;
varying vec2 vUv;
void main() {
  vec3 c = vec3(0.0);
  c += texture(tInput, vUv + uTexel * vec2(-1.0, -1.0)).rgb;
  c += texture(tInput, vUv + uTexel * vec2( 1.0, -1.0)).rgb;
  c += texture(tInput, vUv + uTexel * vec2(-1.0,  1.0)).rgb;
  c += texture(tInput, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
  c *= 0.25;
  float l = max(c.r, max(c.g, c.b));
  float knee = 0.25;
  float s = clamp(l - uThreshold + knee, 0.0, 2.0 * knee);
  s = s * s / (4.0 * knee + 1e-4);
  float w = max(s, l - uThreshold) / max(l, 1e-4);
  gl_FragColor = vec4(c * w, 1.0);
}
`,s1=`
precision highp float;
uniform sampler2D tInput;
uniform vec2 uDir;
varying vec2 vUv;
void main() {
  vec3 c = texture(tInput, vUv).rgb * 0.227027;
  c += texture(tInput, vUv + uDir * 1.3846).rgb * 0.3162162;
  c += texture(tInput, vUv - uDir * 1.3846).rgb * 0.3162162;
  c += texture(tInput, vUv + uDir * 3.2308).rgb * 0.0702703;
  c += texture(tInput, vUv - uDir * 3.2308).rgb * 0.0702703;
  gl_FragColor = vec4(c, 1.0);
}
`,a1=`
precision highp float;
uniform sampler2D tScene;
uniform sampler2D tBloomA;
uniform sampler2D tBloomB;
uniform vec2 uRes;
uniform float uTime;
uniform float uGrain;
uniform float uVignette;
uniform float uCA;
uniform float uHalation;
uniform float uLeak;
uniform float uFade;
uniform vec3 uBg;
varying vec2 vUv;

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
vec3 toSRGB(vec3 c) {
  c = max(c, 0.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

void main() {
  vec2 uv = vUv;
  vec2 c = uv - 0.5;
  float aspect = uRes.x / uRes.y;
  float r2 = dot(c * vec2(aspect, 1.0), c * vec2(aspect, 1.0));

  // whisper of chromatic aberration, only toward the outer corners
  vec2 off = c * pow(r2, 1.45) * uCA * 3.5;
  vec3 col;
  col.r = texture(tScene, uv + off).r;
  col.g = texture(tScene, uv).g;
  col.b = texture(tScene, uv - off).b;

  // halation: warm, wide, faint
  vec3 bl = texture(tBloomA, uv).rgb * 0.55 + texture(tBloomB, uv).rgb * 0.75;
  col += bl * vec3(1.0, 0.6, 0.42) * uHalation;

  // light leaks — rare, slow, barely there, quiet at opening
  float t = uTime;
  float env1 = pow(max(0.0, sin(t * 0.045 - 0.8)), 14.0) * smoothstep(4.0, 12.0, t);
  float env2 = pow(max(0.0, sin(t * 0.031 + 2.6)), 14.0) * smoothstep(4.0, 12.0, t);
  vec2 l1 = vec2(-0.25 + fract(t * 0.009) * 1.5, 0.85 - fract(t * 0.009) * 0.4);
  vec2 l2 = vec2(1.15 - fract(t * 0.007 + 0.4) * 1.3, 0.1 + fract(t * 0.007 + 0.4) * 0.3);
  float b1 = exp(-dot((uv - l1) * vec2(aspect * 0.7, 1.4), (uv - l1) * vec2(aspect * 0.7, 1.4)) * 3.0);
  float b2 = exp(-dot((uv - l2) * vec2(aspect * 0.6, 1.2), (uv - l2) * vec2(aspect * 0.6, 1.2)) * 2.5);
  col += (vec3(1.0, 0.48, 0.22) * b1 * env1 + vec3(1.0, 0.36, 0.38) * b2 * env2) * uLeak;

  // soft vignette
  float v = smoothstep(1.32, 0.22, sqrt(r2) * 1.02);
  col *= mix(1.0, v, uVignette);

  // gentle highlight shoulder, like film
  col = col / (1.0 + max(col - 0.85, 0.0) * 0.6);

  col = mix(uBg, col, uFade);
  vec3 s = toSRGB(col);

  // grain: fine film texture, quiet in deep shadows
  float n = hash(uv * uRes + fract(t * 7.13) * 91.7) + hash(uv * uRes * 1.37 - fract(t * 3.71) * 37.1) - 1.0;
  float lum = dot(s, vec3(0.299, 0.587, 0.114));
  float g = uGrain * (0.35 + 1.2 * lum * (1.0 - lum) * 2.4);
  s += n * g;
  s += (hash(uv * uRes + 0.5) - 0.5) / 255.0; // dither
  gl_FragColor = vec4(s, 1.0);
}
`,gi=(r,e,t)=>{const n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)},Bt=(r,e,t,n)=>r+(e-r)*(1-Math.exp(-t*n)),Sd=xr.parseEase("power3.inOut");class o1{constructor(e,t,n,i){this.cfg=t,this.atlases=n||[],this.pool=i,this.renderer=new Ky({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.autoClear=!1,this.renderer.outputColorSpace=cs,this.maxPR=Math.min(t.perf.maxPixelRatio,window.devicePixelRatio||1),this.pr=this.maxPR,this.scene=new zf,this.camera=new oi(t.camera.fov,1,.05,260),this.camera.rotation.order="YXZ",this.bgCol=xl(t.look.background),this.liftCol=xl(t.look.backgroundLift),this.ambient=[...this.bgCol],this.uBg={value:new pt(...this.bgCol)},this.uLift={value:new pt(...this.liftCol)},this.time={value:0},this.focus=12,this.mouse={x:0,y:0,tx:0,ty:0},this.pointerActive=!1,this.locked=!1,this.hoveredIdx=-1,this.hoverAmount=0,this.wallZoom=1,this.wallZoomTarget=1,this.pan={x:0,y:0},this.idlePan={x:(Math.random()-.5)*1.4,y:(Math.random()-.5)*1.4},this.lens={x:0,y:0,strength:0},this.inspectIdx=-1,this.inspectMix=0,this._ray=new iv,this._ndc=new ct,this._plane=new pr(new J(0,0,1),0),this._hit=new J,this.geo=new to(1,1),this.basePhoto=new sn({vertexShader:Md,fragmentShader:Jy,transparent:!0,depthWrite:!0,premultipliedAlpha:!0,blending:Rr,uniforms:{}}),this.baseHalo=new sn({vertexShader:Md,fragmentShader:Qy,transparent:!0,depthWrite:!1,premultipliedAlpha:!0,blending:Rr,uniforms:{}}),this.makeBackground(),this.makeDust(),this.makePost(),this.items=[]}makeBackground(){const e=new sn({vertexShader:e1,fragmentShader:t1,depthTest:!1,depthWrite:!1,uniforms:{uBg:this.uBg,uLift:this.uLift,uAspect:{value:1}}});this.bg=new Jn(this.geo,e),this.bg.frustumCulled=!1,this.bg.renderOrder=-1e6,this.scene.add(this.bg)}makeDust(){const e=this.cfg.look.dust,t=new fi,n=new Float32Array(e*3),i=new Float32Array(e);for(let s=0;s<e;s++)n[s*3]=Math.random()*14,n[s*3+1]=Math.random()*9,n[s*3+2]=Math.random()*36,i[s]=Math.random();t.setAttribute("position",new In(n,3)),t.setAttribute("aSeed",new In(i,1)),this.dustMat=new sn({vertexShader:n1,fragmentShader:i1,transparent:!0,depthWrite:!1,blending:jc,uniforms:{uCam:{value:new J},uTime:this.time,uPR:{value:1},uScale:{value:800},uStrength:{value:.55},uTint:{value:new pt(1,.93,.85)}}}),this.dust=new Y0(t,this.dustMat),this.dust.frustumCulled=!1,this.dust.renderOrder=1e6,this.scene.add(this.dust)}setLayout(e){this.layout=e;for(const n of this.items)n.photoMat.dispose(),n.haloMat.dispose(),this.scene.remove(n.group);this.items=[];const t=this.cfg.look;for(const n of e.planes){const i=n.photo.atlas,s=this.atlases[i.page]||this.atlases[0],a=new It(i.u0,i.v0,i.u1-i.u0,i.v1-i.v0),o=this.pool?.fallback||s,l=this.basePhoto.clone();l.uniforms={uAtlas:{value:s},uAtlasRect:{value:a},uMap:{value:o},uHasHi:{value:0},uSize:{value:new ct(n.w,n.h)},uTexW:{value:256},uRadius:{value:t.radius},uAlpha:{value:1},uBlur:{value:0},uDim:{value:1},uDesat:{value:0},uFog:{value:0},uBg:this.uBg,uSeed:{value:n.seed%1}};const c=this.baseHalo.clone(),u=1.15;c.uniforms={uAtlas:{value:s},uAtlasRect:{value:a},uSize:{value:new ct(n.w,n.h)},uPad:{value:u},uRadius:{value:t.radius},uAlpha:{value:1},uGlow:{value:t.glow},uShadow:{value:t.shadow}};const d=new Jn(this.geo,l),f=new Jn(this.geo,c);f.position.z=-.02;const h=new Ea;h.add(f,d),this.scene.add(h),this.items.push({p:n,group:h,photo:d,halo:f,photoMat:l,haloMat:c,pad:u,ambient:Pg(n.photo,this.cfg.look.tintMax),d:0,hover:0,hiMix:0})}}makePost(){const e={type:Si,depthBuffer:!0};this.rtScene=new Rn(4,4,e);const t={type:Si,depthBuffer:!1};this.rtA=new Rn(4,4,t),this.rtB=new Rn(4,4,t),this.rtC=new Rn(4,4,t),this.rtD=new Rn(4,4,t),this.postScene=new zf,this.postCam=new Ph(-1,1,1,-1,0,1);const n=new fi;n.setAttribute("position",new In(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),n.setAttribute("uv",new In(new Float32Array([0,0,2,0,0,2]),2)),this.quad=new Jn(n,null),this.quad.frustumCulled=!1,this.postScene.add(this.quad);const i=this.cfg.look;this.mBright=new sn({vertexShader:Ac,fragmentShader:r1,depthTest:!1,uniforms:{tInput:{value:null},uTexel:{value:new ct},uThreshold:{value:i.halationThreshold}}}),this.mBlur=new sn({vertexShader:Ac,fragmentShader:s1,depthTest:!1,uniforms:{tInput:{value:null},uDir:{value:new ct}}}),this.mComp=new sn({vertexShader:Ac,fragmentShader:a1,depthTest:!1,uniforms:{tScene:{value:this.rtScene.texture},tBloomA:{value:this.rtA.texture},tBloomB:{value:this.rtC.texture},uRes:{value:new ct},uTime:this.time,uGrain:{value:i.grain},uVignette:{value:i.vignette},uCA:{value:i.chromatic},uHalation:{value:i.halation},uLeak:{value:i.leaks},uFade:{value:1},uBg:this.uBg}})}pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.postScene,this.postCam)}resize(e,t){this.w=e,this.h=t,this.renderer.setPixelRatio(this.pr),this.renderer.setSize(e,t,!1);const n=Math.floor(e*this.pr),i=Math.floor(t*this.pr);this.rtScene.setSize(n,i);const s=Math.max(1,n>>2),a=Math.max(1,i>>2);this.rtA.setSize(s,a),this.rtB.setSize(s,a),this.rtC.setSize(Math.max(1,s>>1),Math.max(1,a>>1)),this.rtD.setSize(Math.max(1,s>>1),Math.max(1,a>>1)),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.bg.material.uniforms.uAspect.value=e/t,this.mComp.uniforms.uRes.value.set(n,i),this.dustMat.uniforms.uPR.value=this.pr,this.dustMat.uniforms.uScale.value=i/this.pr*1.2}setPixelRatio(e){Math.abs(e-this.pr)<.01||(this.pr=e,this.resize(this.w,this.h))}setInspect(e){this.inspectIdx=e,!(e<0)&&this.inspectMix<.05&&(this.inspectMix=0)}randomizePan(){this.idlePan={x:(Math.random()-.5)*1.4,y:(Math.random()-.5)*1.4},this.pointerActive=!1}setWallZoom(e,t=!1){if(this.wallZoomTarget=Math.min(4.2,Math.max(1,e)),t&&(this.wallZoom=this.wallZoomTarget,this.layout?.mosaicOpen)){const n=Math.max(0,1-1/this.wallZoom);this.pan.x=this.idlePan.x*this.layout.mosaicOpen.W*.5*n,this.pan.y=-this.idlePan.y*this.layout.mosaicOpen.H*.5*n}}intersectMosaic(e,t,n){return this._ndc.set(e,-t),this._ray.setFromCamera(this._ndc,this.camera),this._plane.constant=-n,this._ray.ray.intersectPlane(this._plane,this._hit)?{x:this._hit.x,y:this._hit.y}:null}pickMosaic(e,t,n){const i=this.intersectMosaic(e,t,n);if(!i)return-1;for(let s=0;s<this.items.length;s++){const a=this.items[s].p.slot;if(Math.abs(i.x-a.x)<=a.w*.5&&Math.abs(i.y-a.y)<=a.h*.5)return s}return-1}pickTunnel(e,t){if(!this._visible?.length)return-1;this._ndc.set(e,-t),this._ray.setFromCamera(this._ndc,this.camera);const n=[];for(const o of this._visible)o.alpha>.18&&n.push(o.photo);if(!n.length)return-1;const i=this._ray.intersectObjects(n,!1);if(!i.length)return-1;const s=i[0].object,a=this._visible.find(o=>o.photo===s);return a?a.p.i:-1}update(e,t,n){const i=this.cfg,s=i.look,a=i.camera;this.time.value=n,this.pool?.beginFrame();const o=this.camera,l=a.shake,c=Math.sin(n*.53)*.6+Math.sin(n*1.31+1.7)*.3+Math.sin(n*2.17+.3)*.1,u=Math.sin(n*.41+2.1)*.6+Math.sin(n*1.07+.9)*.3+Math.sin(n*2.71+2.2)*.1,d=Math.sin(n*.29+4)*.7+Math.sin(n*.83+1.1)*.3,f=this.locked?0:this.mouse.tx,h=this.locked?0:this.mouse.ty;this.mouse.x=Bt(this.mouse.x,f,a.mouseDamping,t),this.mouse.y=Bt(this.mouse.y,h,a.mouseDamping,t);const p=a.mouseLean*Math.PI/180,g=e.openAssemble||0,_=e.assemble||0,m=Math.max(g,_);this.inspectMix=Bt(this.inspectMix,this.inspectIdx>=0?1:0,4.5,t);let x=e.camX,E=e.camY,S=e.camZ,A=0;if(this.inspectIdx>=0&&this.items[this.inspectIdx]){const H=this.items[this.inspectIdx].p,C=H.z+H.fitD-e.camZ;A=Math.min(1,Math.abs(C)/28)*this.inspectMix;const W=this.inspectMix*(1-g)*(1-_),ve=gi(22,0,Math.abs(C))*W;this.inspectOffset=this.inspectOffset||{x:0,y:0,z:0},this.inspectOffset.x=Bt(this.inspectOffset.x,H.x-e.camX,5.5,t),this.inspectOffset.y=Bt(this.inspectOffset.y,H.y-e.camY,5.5,t),this.inspectOffset.z=Bt(this.inspectOffset.z,C,6,t),x+=this.inspectOffset.x*W,E+=this.inspectOffset.y*W,S+=this.inspectOffset.z*ve}else this.inspectOffset&&(this.inspectOffset.x=Bt(this.inspectOffset.x,0,5.5,t),this.inspectOffset.y=Bt(this.inspectOffset.y,0,5.5,t),this.inspectOffset.z=Bt(this.inspectOffset.z,0,5.5,t),x+=this.inspectOffset.x*this.inspectMix,E+=this.inspectOffset.y*this.inspectMix,S+=this.inspectOffset.z*this.inspectMix);const b=m>.72?this.wallZoomTarget:1;this.wallZoom=Bt(this.wallZoom,b,4.2,t);const w=Math.max(0,1-1/this.wallZoom),v=g>=_?this.layout.mosaicOpen:this.layout.mosaic,y=v.W*.5*w,L=v.H*.5*w,D=this.pointerActive&&!this.locked,N=(D?this.mouse.tx:this.idlePan.x)*y,O=-(D?this.mouse.ty:this.idlePan.y)*L;this.pan.x=Bt(this.pan.x,N,3.4,t),this.pan.y=Bt(this.pan.y,O,3.4,t),x+=this.pan.x*m,E+=this.pan.y*m,S-=v.dist*w*m;const V=l*(1-m*.72),X=1-w*.65;o.position.set(x+c*.018*V+this.mouse.x*(m>.5?.14:.12)*X,E+u*.014*V-this.mouse.y*(m>.5?.1:.08)*X,S),o.rotation.set(e.pitch+u*.0011*V+this.mouse.y*p*.6*X,e.yaw+c*.0013*V-this.mouse.x*p*X,e.roll+d*.0012*V);const z=Math.sin(n*.37)*a.breathing+Math.sin(n*.13+1)*a.breathing*.5;o.fov=e.fov+z*(1-m*.65),o.updateProjectionMatrix(),o.updateMatrixWorld();let U=-1,F=null;if(this.pointerActive&&!this.locked)if(m>.72){if(F=this.intersectMosaic(this.mouse.tx,this.mouse.ty,v.z),F)for(let H=0;H<this.items.length;H++){const C=this.items[H].p.slot;if(Math.abs(F.x-C.x)<=C.w*.5&&Math.abs(F.y-C.y)<=C.h*.5){U=H;break}}}else U=this.pickTunnel(this.mouse.tx,this.mouse.ty);F&&U>=0&&(this.lens.x=Bt(this.lens.x,F.x,8.5,t),this.lens.y=Bt(this.lens.y,F.y,8.5,t)),this.lens.strength=Bt(this.lens.strength,m>.72&&F?1:0,5.5,t),this.hoveredIdx=U,this.hoverAmount=Bt(this.hoverAmount,U>=0?1:0,6,t);const k=v.W*.125/Math.sqrt(this.wallZoom),P=2*k*k,ne=this.lens.strength*m,ie=o.position.z,me=i.layout.fogFar,Re=[];let Ce=1e9,Z=1e9;const ee=[0,0,0];let re=0;const Ue=g<=.001&&_<=.001;for(let H=0;H<this.items.length;H++){const C=this.items[H],W=C.p,ve=H===U?1:0;if(C.hover=Bt(C.hover,ve,ve?8.5:5,t),Ue){const ae=ie-W.z;if(ae<-1||ae>me+45){C.group.visible=!1;continue}}let he,oe,R,M=1,B=W.rotZ,Q=W.rotY,j=1;if(g>.001){const ae=Math.min(1,Math.max(0,(g*1.45-W.openDelay)/.85)),ge=Sd(ae),I=W.slot,ce=this.layout.mosaicOpen.z+I.dz,le=I.w/W.w;he=W.x+(I.x-W.x)*ge,oe=W.y+(I.y-W.y)*ge,R=W.z+(ce-W.z)*ge,M=1+(le-1)*ge,B=W.rotZ+(I.rotZ-W.rotZ)*ge,Q=W.rotY*(1-ge);const _e=ie-R;g<.99&&!(H===this.inspectIdx&&this.inspectMix>.15)&&(j=gi(W.fadeNear[0],W.fadeNear[1],_e)*(1-gi(me*.72,me,_e)*(1-ge)))}else if(_<=.001){he=W.x,oe=W.y,R=W.z;const ae=ie-R,ge=1-gi(4,34,ae),I=1-gi(.4,7,ae);if(M=.93+.07*ge,he+=Math.cos(n*.17+W.seed)*.035-x*(W.layer-.5)*.12,oe+=Math.sin(n*.21+W.seed*1.3)*.045,B+=Math.sin(n*.11+W.seed)*.004,!W.feature&&!(H===this.inspectIdx&&this.inspectMix>.15)){const le=Math.hypot(W.x,W.y)||1;he+=W.x/le*I*1.15,oe+=W.y/le*I*.85,Q+=W.side*I*.14}j=(H===this.inspectIdx&&this.inspectMix>.15?1:gi(W.fadeNear[0],W.fadeNear[1],ae))*(1-gi(me*.72,me,ae))}else{const ae=Math.min(1,Math.max(0,(_*1.55-W.delay)/.82)),ge=Sd(ae),I=W.start,ce=W.slot,le=this.layout.mosaic.z+ce.dz;if(he=I.x+(ce.x-I.x)*ge,oe=I.y+(ce.y-I.y)*ge,R=I.z+(le-I.z)*ge,M=1+(ce.scale-1)*ge,B=W.rotZ+(ce.rotZ-W.rotZ)*ge,Q=W.deep?0:W.rotY*(1-ge),j=W.deep?gi(0,.35,ae):1,!W.deep){const _e=ie-R;j*=gi(W.fadeNear[0],W.fadeNear[1],_e)}}let K=0;if(ne>.004){const ae=W.slot.x-this.lens.x,ge=W.slot.y-this.lens.y,I=ae*ae+ge*ge;if(K=Math.exp(-I/P)*ne,K>.002){const ce=Math.sqrt(I),le=K*(1-Math.exp(-ce*1.6))*(.38/Math.sqrt(this.wallZoom));ce>.001&&(he+=ae/ce*le,oe+=ge/ce*le),R+=K*.56/Math.sqrt(this.wallZoom),M*=1+K*.36,B*=1-K}}let pe=0;if(C.hover>.001){const ae=C.hover;m>.5?(R+=ae*.6/Math.sqrt(this.wallZoom),M*=1+ae*.16,B*=1-ae):(R+=ae*.45,M*=1+ae*.075),pe=-this.mouse.y*ae*.045,Q+=this.mouse.x*ae*.055}C.lens=K;const se=ie-R;if(this.inspectIdx>=0&&Ue&&(H<this.inspectIdx?j*=1-this.inspectMix:H!==this.inspectIdx&&A>.01&&(j*=1-A*.72)),j<.004||se<.05||se>me+45){C.group.visible=!1;continue}C.group.visible=!0,C.group.position.set(he,oe,R),C.group.rotation.set(pe,Q,B);const Fe=W.w*M,be=W.h*M;C.photo.scale.set(Fe,be,1),C.halo.scale.set(Fe+C.pad*2*M,be+C.pad*2*M,1),C.photoMat.uniforms.uSize.value.set(Fe,be),C.haloMat.uniforms.uSize.value.set(Fe,be),C.haloMat.uniforms.uPad.value=C.pad*M,C.d=se,C.alpha=j,C.x=he,C.y=oe,Re.push(C);const fe=H===this.inspectIdx,de=m>.65&&this.wallZoom>1.3&&Math.abs(he-o.position.x)<v.W*.45/this.wallZoom+Fe&&Math.abs(oe-o.position.y)<v.H*.45/this.wallZoom+be;if((C.hover>.05||K>.35||fe||de||m<.6&&se<60)&&this.pool){const ae=fe||C.hover>.05?-20:de?Math.hypot(he-o.position.x,oe-o.position.y):se;this.pool.request(W.photo,ae,W.feature||C.hover>.05||fe);const ge=this.pool.get(W.photo.file);ge?(C.photoMat.uniforms.uMap.value!==ge.texture&&(C.photoMat.uniforms.uMap.value=ge.texture,C.photoMat.uniforms.uTexW.value=ge.width),C.hiMix=Bt(C.hiMix,1,14,t)):C.hiMix=Bt(C.hiMix,0,10,t)}else C.hiMix=Bt(C.hiMix,0,10,t);C.photoMat.uniforms.uHasHi.value=C.hiMix;const we=Math.hypot(he-o.position.x,oe-o.position.y)/Math.max(1,se*this.layout.tanH);if(se>.25&&j>.35&&m<.5){const ae=W.zoom&&se<5||H===this.inspectIdx?.05:1,ge=se*(1+we*we*2.5)*ae;ge<Z&&(Z=ge,Ce=se)}if(m<.7||se<28){const ae=H===this.inspectIdx?8:H===U?5:W.feature&&se<12?2.5:1,ge=j*ae*Math.exp(-se/8.5)*Math.exp(-we*we*1.6);ee[0]+=C.ambient[0]*ge,ee[1]+=C.ambient[1]*ge,ee[2]+=C.ambient[2]*ge,re+=ge}}g>=.5?Ce=ie-this.layout.mosaicOpen.z:_>=.5&&(Ce=ie-this.layout.mosaic.z),Ce<1e8&&(this.focus=Bt(this.focus,Ce,this.inspectIdx>=0?9:3.2,t));const Le=s.tint,Pe=re>0?Sl(ee,1/Math.max(re,.25)):this.bgCol,Ke=Ml(this.bgCol,Pe,Le);Mf(this.ambient,Ke,2.5,t),this.uBg.value.setRGB(...this.ambient),this.liftNow=this.liftNow||[...this.liftCol];const ye=Ml(this.liftCol,Sl(Pe,1.9),Le);Mf(this.liftNow,ye,2.5,t),this.uLift.value.setRGB(...this.liftNow.map((H,C)=>H+(this.ambient[C]-H)*e.dim*.35));const He=.014*s.blur,Ye=this.focus,Ve=m>.5?Math.min(1,Math.max(0,(this.wallZoom-1.05)*1.4)):0;for(const H of Re){const C=H.d,W=Math.min(1,H.hover+(H.lens||0)*.85),ve=Math.min(1,Math.max(W,Ve)),he=Math.abs(C-Ye)/Math.max(C,.3);let oe=Math.min(.011,he*He);m>.5?oe=e.dim*.0018*(1-ve):this.inspectIdx>=0&&H.p.i===this.inspectIdx?oe*=1-this.inspectMix:oe*=1-W;const R=gi(16,76,C)*(1-m),M=(1-R*s.distanceDim)*(1-e.dim*.62),B=M+(1-M)*ve,Q=(R*s.distanceDesat+e.dim*.22)*(1-ve),j=H.photoMat.uniforms;j.uBlur.value=oe,j.uAlpha.value=H.alpha,j.uDim.value=B,j.uDesat.value=Q,j.uFog.value=gi(s.fogNear,s.fogFar,C)*s.fog*(1-m*.9)*(1-ve*.6);const K=m<.65||H.hover>.01||(H.lens||0)>.2;if(H.halo.visible=K,K){const pe=H.haloMat.uniforms;pe.uAlpha.value=H.alpha*(1-j.uFog.value)*(1-R*.45),pe.uGlow.value=s.glow*(m>.5?.22+W*1.4:(1-e.dim*.65)*(1+H.hover*.9))}}return m>.5?Re.sort((H,C)=>(H.hover-C.hover)*100||((H.lens||0)-(C.lens||0))*20||C.d-H.d):Re.sort((H,C)=>C.d-H.d),Re.forEach((H,C)=>{H.halo.renderOrder=C*2,H.photo.renderOrder=C*2+1}),this._visible=Re,this.dustMat.uniforms.uCam.value.copy(o.position),this.dustMat.uniforms.uTint.value.setRGB(1,.93,.85),{ambient:this.ambient,hoveredIdx:U,hoverAmount:this.hoverAmount,wallZoom:this.wallZoom,mosaicMode:m}}render(e=1){const t=this.renderer;t.setRenderTarget(this.rtScene),t.setClearColor(this.uBg.value,1),t.clear(!0,!0,!0),t.render(this.scene,this.camera);const n=this.rtScene.width,i=this.rtScene.height;this.mBright.uniforms.tInput.value=this.rtScene.texture,this.mBright.uniforms.uTexel.value.set(1.5/n,1.5/i),this.pass(this.mBright,this.rtA),this.mBlur.uniforms.tInput.value=this.rtA.texture,this.mBlur.uniforms.uDir.value.set(1/this.rtA.width,0),this.pass(this.mBlur,this.rtB),this.mBlur.uniforms.tInput.value=this.rtB.texture,this.mBlur.uniforms.uDir.value.set(0,1/this.rtA.height),this.pass(this.mBlur,this.rtA),this.mBlur.uniforms.tInput.value=this.rtA.texture,this.mBlur.uniforms.uDir.value.set(2/this.rtC.width,0),this.pass(this.mBlur,this.rtC),this.mBlur.uniforms.tInput.value=this.rtC.texture,this.mBlur.uniforms.uDir.value.set(0,2/this.rtC.height),this.pass(this.mBlur,this.rtD),this.mComp.uniforms.tBloomB.value=this.rtD.texture,this.mComp.uniforms.uFade.value=e,this.pass(this.mComp,null)}}function l1(){const r=document.getElementById("loader"),e=r.querySelector(".loader__line i");let t=0,n=0,i,s=performance.now();const a=(o=performance.now())=>{const l=Math.min(.1,(o-s)/1e3);s=o,t+=(n-t)*(1-Math.exp(-5.2*l)),e.style.transform=`scaleX(${t.toFixed(4)})`,i=requestAnimationFrame(a)};return a(),{set(o){n=Math.max(n,o)},async finish(){n=1;const o=performance.now();await new Promise(l=>{const c=()=>t>.985||performance.now()-o>950?l():setTimeout(c,25);c()}),e.style.transform="scaleX(1)"},hide(o=1.6){r.style.transition=`opacity ${o}s cubic-bezier(.65,0,.35,1)`,r.style.opacity="0",setTimeout(()=>{cancelAnimationFrame(i),r.remove()},o*1e3+50)}}}const yd=typeof createImageBitmap=="function";async function Xu(r,e,t,{flipY:n=!0}={}){let i;if(yd){const a=await(await fetch(r)).blob();i=await createImageBitmap(a,{imageOrientation:n?"flipY":"none",premultiplyAlpha:"none",colorSpaceConversion:"none"})}else i=await new Promise((a,o)=>{const l=new Image;l.onload=()=>a(l),l.onerror=o,l.src=r});const s=new Mn(i);return s.flipY=yd?!1:n,s.colorSpace=qn,s.generateMipmaps=!0,s.minFilter=yr,s.magFilter=ln,s.anisotropy=t,s.wrapS=s.wrapT=Di,s.needsUpdate=!0,e.initTexture(s),{texture:s,width:i.width,height:i.height,source:i}}async function c1(r,e,t,n){const i=Math.min(t.perf.anisotropy,e.capabilities.getMaxAnisotropy());let s=0;return await Promise.all(r.map(async o=>{const l=await Xu("./"+o,e,i,{flipY:!0});return s++,n(s/r.length),l.texture}))}function u1(r,e,t,n=28){const i=Math.max(window.innerWidth,window.innerHeight)*Math.min(2,window.devicePixelRatio||1)>1500,s=Math.min(e.perf.anisotropy,r.capabilities.getMaxAnisotropy()),a=new Map,o=new Map,l=[];let c=0,u=0;const d=()=>{for(;c<2&&l.length;){l.sort((m,x)=>m.priority-x.priority);const h=l.shift();if(a.has(h.photo.file)||o.has(h.photo.file))continue;c++;const p=i&&h.hiRes?2048:1024,g="./"+(h.photo.tex?.[p]||h.photo.src),_=Xu(g,r,s,{flipY:!0}).then(m=>{a.set(h.photo.file,{...m,usedAt:u}),f()}).catch(m=>console.warn("hi-res load skipped",h.photo.file,m)).finally(()=>{o.delete(h.photo.file),c--,d()});o.set(h.photo.file,_)}},f=()=>{if(a.size<=n)return;const h=[...a.entries()].sort((p,g)=>p[1].usedAt-g[1].usedAt);for(;a.size>n&&h.length;){const[p,g]=h.shift();if(u-g.usedAt<6)break;g.texture.dispose(),g.source?.close?.(),a.delete(p)}};return{fallback:t,beginFrame(){u++},get(h){const p=a.get(h);return p?(p.usedAt=u,p):null},request(h,p=0,g=!1){if(a.has(h.file)||o.has(h.file))return;const _=l.find(m=>m.photo.file===h.file);if(_){_.priority=Math.min(_.priority,p);return}l.push({photo:h,priority:p,hiRes:g}),l.length>48&&(l.sort((m,x)=>m.priority-x.priority),l.length=48),d()},async preload(h,p){let g=0;await Promise.all(h.map(async _=>{const m="./"+(_.tex?.[i?2048:1024]||_.src);try{const x=await Xu(m,r,s,{flipY:!0});a.set(_.file,{...x,usedAt:u})}catch(x){console.warn("preload skipped",_.file,x)}g++,p?.(g/h.length)}))}}}function h1(){const r=document.getElementById("finaleName"),e=r?.querySelector(".finale__wordmark");if(!r||!e)return;const t=()=>{if(!e.naturalWidth||r.querySelector(".finale__dots"))return;const n=e.naturalWidth,i=e.naturalHeight,s=document.createElement("canvas");s.width=n,s.height=i;const a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(e,0,0);const{data:o}=a.getImageData(0,0,n,i),l=new Uint8Array(n*i),c=[],u=new Int32Array(4096),d=new Int32Array(4096);for(let b=0;b<i;b++)for(let w=0;w<n;w++){const v=b*n+w;if(l[v]||o[v*4+3]<95)continue;let y=0,L=0;u[L]=w,d[L]=b,L++,l[v]=1;let D=0,N=0,O=0;for(;y<L;){const V=u[y],X=d[y];y++,D+=V,N+=X,O++;for(let z=-1;z<=1;z++)for(let U=-1;U<=1;U++){const F=V+U,k=X+z;if(F<0||F>=n||k<0||k>=i)continue;const P=k*n+F;!l[P]&&o[P*4+3]>=95&&L<u.length&&(l[P]=1,u[L]=F,d[L]=k,L++)}}O>=6&&c.push({bx:D/O,by:N/O,r:Math.max(2.2,Math.sqrt(O/Math.PI)),ox:0,oy:0,vx:0,vy:0,glow:0,phase:Math.random()*Math.PI*2})}if(!c.length)return;const f=document.createElement("canvas");f.className="finale__dots",f.setAttribute("aria-hidden","true"),r.appendChild(f),e.classList.add("is-canvas-backed");const h=f.getContext("2d"),p={x:-9999,y:-9999,active:!1};let g=0,_=0,m=1;const x=()=>{const b=r.getBoundingClientRect();!b.width||!b.height||(m=Math.min(window.devicePixelRatio||1,2),g=b.width,_=b.height,f.width=Math.round(g*m),f.height=Math.round(_*m))};x(),window.addEventListener("resize",x),window.addEventListener("pointermove",b=>{const w=r.getBoundingClientRect();w.width&&(p.x=(b.clientX-w.left)/w.width*n,p.y=(b.clientY-w.top)/w.height*i,p.active=!0)}),window.addEventListener("pointerleave",()=>{p.active=!1});const E=document.getElementById("finale");let S=performance.now();const A=b=>{requestAnimationFrame(A);const w=Math.min(.05,(b-S)/1e3);if(S=b,!E?.classList.contains("is-live")||((!g||!_)&&x(),!g||!_))return;const v=g/n,y=_/i,L=b*.001;h.setTransform(m,0,0,m,0,0),h.clearRect(0,0,g,_);const D=Math.sin(L*1.7)>.985||Math.sin(L*4.3)>.992?.62:.96;for(let N=0;N<c.length;N++){const O=c[N];let V=0,X=0,z=0;if(p.active){const ne=O.bx-p.x,ie=O.by-p.y,me=Math.hypot(ne,ie),Re=58;if(me<Re&&me>.01){const Ce=1-me/Re,Z=Ce*Ce*11;V=ne/me*Z,X=ie/me*Z,z=Ce}}O.vx=(O.vx+(V-O.ox)*180*w)*Math.exp(-11*w),O.vy=(O.vy+(X-O.oy)*180*w)*Math.exp(-11*w),O.ox+=O.vx*w,O.oy+=O.vy*w,O.glow+=(z-O.glow)*Math.min(1,w*12);const U=(O.bx+O.ox)*v,F=(O.by+O.oy)*y,k=O.r*Math.min(v,y)*(1+O.glow*.28),P=Math.min(1,D*(.88+.08*Math.sin(L*2.1+O.phase))+O.glow*.14);h.beginPath(),h.arc(U,F,k,0,Math.PI*2),h.fillStyle=O.glow>.05?`rgba(255, 252, 246, ${P.toFixed(3)})`:`rgba(244, 238, 228, ${P.toFixed(3)})`,O.glow>.15?(h.shadowColor="rgba(248, 244, 236, 0.55)",h.shadowBlur=10*O.glow):h.shadowBlur=0,h.fill()}h.shadowBlur=0};requestAnimationFrame(A)};e.complete&&e.naturalWidth?t():e.addEventListener("load",t,{once:!0})}xr.registerPlugin(Ze);const dr=new URLSearchParams(location.search),f1=window.matchMedia("(prefers-reduced-motion: reduce)").matches||dr.has("calm"),d1=window.matchMedia("(pointer: fine)").matches,Go=()=>window.innerWidth<760||window.innerWidth/window.innerHeight<.8,Cm=(r,e)=>r.photos.alt[e.file]||e.file.replace(/\.[^.]+$/,"").replace(/[-_]+/g," ");function p1(r){const e=r.site,t=document.getElementById("mark");t&&(t.textContent=e.name,t.href=e.nameHref);const n=document.getElementById("finaleName");n&&(n.querySelector(".finale__wordmark")||(n.innerHTML='<img class="finale__wordmark" src="./wordmark.png" alt="avery beuth" />'),n.href=e.nameHref,h1());const i=document.getElementById("finaleContact");i&&(i.textContent=e.contactText,i.href=e.contactHref);const s=document.getElementById("allPhotos");s&&(s.textContent=e.allPhotosText),document.title=e.title||e.name}function m1(r,e){const t=document.getElementById("srList");t.innerHTML=e.map(n=>`<li><img src="${n.tex?.[1024]||n.src}" alt="${Cm(r,n).replace(/"/g,"&quot;")}" loading="lazy" width="${n.width}" height="${n.height}"></li>`).join("")}function Ed(r,e){document.documentElement.classList.add("rm","ready"),document.getElementById("loader")?.remove();const t=document.getElementById("calm");t.hidden=!1,t.innerHTML=e.map(i=>`<figure><img src="${i.tex?.[2048]||i.src}" alt="${Cm(r,i).replace(/"/g,"&quot;")}" width="${i.width}" height="${i.height}" loading="lazy" decoding="async"></figure>`).join("")+`<div class="calm__end"><a class="finale__name" href="${r.site.nameHref}">${r.site.title||r.site.name}</a><div class="finale__links"><a class="finale__contact" href="${r.site.contactHref}" target="_blank" rel="noopener">${r.site.contactText}</a></div><nav class="finale__nav" aria-label="Portfolio sections"><a href="./code.html">code</a><span class="finale__sep" aria-hidden="true">·</span><a href="./scripts/index.html">scripts</a><span class="finale__sep" aria-hidden="true">·</span><a href="./music.html">music</a><span class="finale__sep" aria-hidden="true">·</span><a href="./film.html">films</a></nav></div>`,document.getElementById("srList").remove();const n=new IntersectionObserver(i=>i.forEach(s=>s.isIntersecting&&s.target.classList.add("is-in")),{threshold:.15});t.querySelectorAll("figure").forEach(i=>n.observe(i))}async function _1(){Pm();const r=performance.now();let e=xf(Go());p1(e);const t=await(await fetch("./photos.json",{cache:"no-cache"})).json(),n=Lg(t.photos,e);if(m1(e,n),f1)return Ed(e,n);const i=document.getElementById("gl");let s;try{s=new o1(i,e,[],null)}catch(W){return console.warn(W),Ed(e,n)}const a=l1(),o=await c1(t.atlases||[],s.renderer,e,W=>a.set(W*.68)),l=u1(s.renderer,e,o[0],28);await l.preload(n.slice(0,Math.min(8,n.length)),W=>a.set(.68+W*.28)),s.atlases=o,s.pool=l,await document.fonts?.ready,await a.finish();const c=Ng(e);let u,d,f;const h=document.getElementById("scroll"),p=new wg({lerp:e.scroll.lerp,wheelMultiplier:e.scroll.wheelMultiplier,touchMultiplier:e.scroll.touchMultiplier,syncTouch:!d1,syncTouchLerp:.095,respectReducedMotion:!1});p.on("scroll",Ze.update),window.__lenis=p;const g=document.querySelector(".progress i"),_=document.getElementById("allPhotos"),m=document.getElementById("zoomBtn"),x=()=>{if(!m)return;const W=s.wallZoomTarget>1.25;m.setAttribute("aria-pressed",String(W)),m.textContent=W?"zoom out":e.site.zoomText},E=dr.has("p")?Math.min(1,Math.max(0,parseFloat(dr.get("p"))||0)):0;let S=E===0&&!dr.has("zoom")&&!dr.has("overview"),A=dr.has("zoom"),b=0,w=A?0:1;s.locked=S,S&&p.stop(),document.body.classList.toggle("is-locked",S);const v=()=>{S&&(S=!1,b=performance.now(),s.locked=!1,A=!0,document.body.classList.remove("is-locked"),p.start(),ie.whoosh())};p.options.virtualScroll=W=>{if(S)return W.event.cancelable&&W.event.preventDefault(),!1;if(!(Math.max(c.openAssemble||0,c.assemble||0)>.72))return!0;const he=W.event.ctrlKey,oe=p.targetScroll<=24&&(W.deltaY<0||s.wallZoomTarget>1.02);if(he||oe){if(W.event.cancelable&&W.event.preventDefault(),!he&&W.deltaY<-4&&s.wallZoomTarget<1.3)s.setWallZoom(2.35),ie.whoosh();else{const R=Math.exp(-W.deltaY*(he?.0085:.0026)),M=s.wallZoomTarget*R;s.setWallZoom(M<1.04?1:M)}return x(),V(p.targetScroll),!1}return!0};function y(W=0){e=xf(Go()),s.cfg=e;const ve=window.innerWidth,he=window.innerHeight;s.resize(ve,he),u=Fg(n,e,{aspect:ve/he}),s.setLayout(u),d&&d.tl.kill(),f?.kill(),d=Bg(u,e,c),h.style.height=`${Math.round(d.duration*he+he)}px`,f=Ze.create({trigger:h,start:"top top",end:"bottom bottom",scrub:e.scroll.scrub,animation:d.tl,onUpdate:oe=>{g.style.transform=`scaleX(${oe.progress.toFixed(4)})`,_&&(_.textContent=oe.progress>.96?"top":e.site.allPhotosText)}}),d.tl.progress(W).progress(0).progress(W),Ze.refresh(),p.resize(),W>0&&p.scrollTo(W*Ze.maxScroll(window),{immediate:!0,force:!0})}y(E),E===0&&window.scrollTo(0,0),E===0&&!dr.has("overview")&&(s.setWallZoom(2.55,!0),x());const L=E>0?{z:0,fade:1}:{z:.35,fade:0},D=E>0?50:Math.max(380,1550-(performance.now()-r));setTimeout(()=>{E===0&&(xr.to(L,{z:0,duration:2,ease:e.ease.glide}),xr.to(L,{fade:1,duration:1.35,ease:e.ease.fade,delay:.05})),a.hide(E>0?.45:1.15),document.documentElement.classList.add("ready")},D);const N=document.getElementById("hint"),O=()=>N.classList.remove("is-on"),V=(W=window.scrollY)=>{if(E>0)return;const ve=W<=36&&s.wallZoomTarget<=1.05;N.classList.toggle("is-on",ve)};E===0&&setTimeout(()=>V(window.scrollY),450),p.on("scroll",({scroll:W})=>V(W));const X=(W=!1)=>{O();const ve=S;v(),A=!0,W&&!ve&&s.randomizePan();const he=f?.progress||0;he>.08&&he<.92&&(s.setInspect(-1),p.scrollTo(0,{duration:1,easing:oe=>1-Math.pow(1-oe,3),force:!0})),s.setWallZoom(2.55),x(),V(p.targetScroll),ve||ie.whoosh()};m?.addEventListener("click",()=>{if(O(),S){v(),s.setWallZoom(1),A=!1,x(),V(p.targetScroll);return}s.wallZoomTarget>1.25?(s.setWallZoom(1),A=!1):(s.randomizePan(),s.setWallZoom(2.55),A=!0),x(),V(p.targetScroll),ie.whoosh()}),document.getElementById("finalePhotos")?.addEventListener("click",W=>{W.preventDefault(),X(!1)}),document.getElementById("sidePhotos")?.addEventListener("click",W=>{W.preventDefault(),X(A&&s.wallZoomTarget>1.25)}),document.getElementById("mark")?.addEventListener("click",W=>{(f?.progress||0)<.02&&!A||(W.preventDefault(),A=!1,S=!0,s.locked=!0,s.setWallZoom(2.55),p.stop(),document.body.classList.add("is-locked"),x(),O(),ie.whoosh(),(f?.progress||0)>=.02&&p.scrollTo(0,{duration:1.2,force:!0}))}),_?.addEventListener("click",()=>{O(),v(),s.setWallZoom(1),x(),s.setInspect(-1),ie.whoosh();const W=Ze.maxScroll(window),ve=(f?.progress||0)>.96;p.scrollTo(ve?0:W,{duration:1.75,easing:he=>he<.5?8*he*he*he*he:1-Math.pow(-2*he+2,4)/2,force:!0})});let z=null;window.addEventListener("pointerdown",W=>{W.target.closest("a, button")||(z={x:W.clientX,y:W.clientY},!S&&W.pointerType!=="mouse"&&(s.pointerActive=!0,s.mouse.tx=W.clientX/innerWidth*2-1,s.mouse.ty=W.clientY/innerHeight*2-1))});const U=W=>{if(W<0||W>=u.planes.length)return;O();const ve=d.photoProgress[W];l.request(u.planes[W].photo,-30,!0),s.setWallZoom(1),x(),s.setInspect(W),ie.whoosh(),p.scrollTo(ve*Ze.maxScroll(window),{duration:1.65,easing:he=>he<.5?8*he*he*he*he:1-Math.pow(-2*he+2,4)/2,force:!0})},F=W=>{const ve=u.planes.length;if(!ve)return;let he=s.inspectIdx;if(he<0){const R=Ze.maxScroll(window)>0?p.targetScroll/Ze.maxScroll(window):0;let M=0,B=1/0;for(let Q=0;Q<ve;Q++){const j=Math.abs(d.photoProgress[Q]-R);j<B&&(B=j,M=Q)}he=M}const oe=Math.max(0,Math.min(ve-1,he+W));(oe!==he||s.inspectIdx<0)&&U(oe)};window.addEventListener("pointerup",W=>{if(!z)return;const ve=Math.hypot(W.clientX-z.x,W.clientY-z.y);if(z=null,ve>8||W.target.closest("a, button"))return;if(S||!A||performance.now()-b<350){v(),A=!0,W.pointerType==="mouse"&&(s.pointerActive=!0,s.mouse.tx=W.clientX/innerWidth*2-1,s.mouse.ty=W.clientY/innerHeight*2-1);return}const he=c.openAssemble||0,oe=c.assemble||0,R=W.clientX/innerWidth*2-1,M=W.clientY/innerHeight*2-1;let B=-1;if(Math.max(he,oe)>.72){const Q=he>=oe?u.mosaicOpen.z:u.mosaic.z;B=s.pickMosaic(R,M,Q)}else B=s.pickTunnel(R,M);B>=0&&U(B)});const k=()=>{s.inspectIdx>=0&&(s.inspectIdx=-1)};window.addEventListener("wheel",k,{passive:!0}),window.addEventListener("touchmove",k,{passive:!0});let P=!1,ne=0;window.addEventListener("keydown",W=>{if(W.target.closest("a, button, input, textarea"))return;if(S){(W.code==="Space"||W.key.startsWith("Arrow")||W.key.startsWith("Page"))&&W.preventDefault();return}if(W.key.toLowerCase()==="d"&&!W.ctrlKey&&!W.metaKey&&!W.altKey){W.preventDefault();const he=document.documentElement.classList.toggle("is-darkroom");Lm(he?"darkroom on":"darkroom off");return}if(W.key==="Escape"){if(s.inspectIdx>=0){W.preventDefault(),k();return}if(s.wallZoomTarget>1.05){W.preventDefault(),s.setWallZoom(1),x(),V(p.targetScroll);return}}if(W.key==="ArrowRight"){W.preventDefault(),F(1);return}if(W.key==="ArrowLeft"){W.preventDefault(),F(-1);return}if(W.code==="Space"){W.preventDefault(),P=!0,O(),k(),s.wallZoomTarget>1.02&&(s.setWallZoom(1),x());return}const ve=innerHeight*.65;W.key==="ArrowDown"||W.key==="PageDown"?(W.preventDefault(),O(),k(),p.scrollTo(Math.min(p.limit,p.targetScroll+(W.key==="ArrowDown"?240:ve)),{duration:.7})):(W.key==="ArrowUp"||W.key==="PageUp")&&(W.preventDefault(),k(),p.scrollTo(Math.max(0,p.targetScroll-(W.key==="ArrowUp"?240:ve)),{duration:.7}))}),window.addEventListener("keyup",W=>{W.code==="Space"&&(P=!1)}),window.addEventListener("blur",()=>{P=!1});const ie=new Dm,me=document.getElementById("sound");me.addEventListener("click",()=>{const W=ie.toggle();me.setAttribute("aria-pressed",String(W)),me.querySelector(".sound__label").textContent=W?"sound · on":"sound"});const Re=document.getElementById("finale"),Ce=Go()?null:Im({onMove:W=>{s.pointerActive=!0,s.mouse.tx=W.clientX/innerWidth*2-1,s.mouse.ty=W.clientY/innerHeight*2-1},onLeave:()=>{s.pointerActive=!1,s.mouse.tx=s.mouse.ty=0}});let Z;window.addEventListener("resize",()=>{clearTimeout(Z),Z=setTimeout(()=>y(f?f.progress:0),220)}),window.__jump=W=>{const ve=Math.min(1,Math.max(0,W));O(),p.scrollTo(ve*Ze.maxScroll(window),{immediate:!0,force:!0}),Ze.update(),d.tl.progress(ve),L.z=0,L.fade=1,g.style.transform=`scaleX(${ve.toFixed(4)})`},E>0&&window.__jump(E);let ee;dr.has("fps")&&(ee=document.createElement("div"),ee.style.cssText="position:fixed;left:24px;bottom:16px;z-index:40;font:11px monospace;color:#9a9;opacity:.7",document.body.appendChild(ee));const re={};let Ue=performance.now()/1e3,Le=0,Pe=0,Ke=0,ye=0,He=0,Ye=0,Ve=-1,H=1/60;const C=document.querySelector(".progress");xr.ticker.lagSmoothing(0),xr.ticker.add(W=>{const ve=performance.now()/1e3,he=Math.min(.05,Math.max(.001,ve-Ue));H+=(he-H)*.25;const oe=H;if(Ue=ve,Le+=oe,ne+=((P?1:0)-ne)*(1-Math.exp(-(P?3.2:4.8)*oe)),ne>.004&&p.limit>0){const pe=Math.min(p.limit,p.targetScroll+ne*(e.scroll.spaceSpeed||1.15)*window.innerHeight*oe);p.scrollTo(pe,{immediate:!0,force:!0})}p.raf(W*1e3),s.inspectIdx<0&&s.inspectMix>.001,Object.assign(re,c),re.camZ=c.camZ+L.z*(1-d.tl.progress());const R=s.update(re,oe,Le);s.render(L.fade),R.hoveredIdx!==Ve&&(R.hoveredIdx>=0&&ie.tick(u.planes[R.hoveredIdx]?.photo.luminance||.5),Ve=R.hoveredIdx),C?.classList.toggle("is-moving",Math.abs(p.velocity||0)>1.5);const M=d.tl.time();if(M>Ye)for(const pe of d.marks)Ye<pe.t+.05&&M>=pe.t+.05&&ie.shutter();Ye=M,ie.setBrightness(Math.min(1,Zp(R.ambient)*30)),(f?.progress||0)>.15&&(f?.progress||0)<.9&&(A=!1);const B=!A&&c.text>.45,Q=S?1:A?0:c.text;w+=(Q-w)*(1-Math.exp(-8.5*oe));const j=S||Ce?.state.uiHover?0:R.hoverAmount*.22,K=w*(1-j);if(Re.style.opacity=K.toFixed(3),Re.style.transform=S?"none":`translate3d(0, ${((1-c.text)*14).toFixed(2)}px, 0)`,Re.classList.toggle("is-live",B),document.body.classList.toggle("nav-aside",!B),m&&m.classList.toggle("is-hidden",R.mosaicMode<=.65),Ce&&!Go()){const pe=Rg(R.ambient.map(se=>Math.min(1,se*9+.55)));Ce.update(oe,{photoHover:R.hoveredIdx>=0,velocity:p.velocity||0,tintColor:se=>Cg(pe,se)})}if(Le>3){if(Pe+=oe,Ke++,Pe>=1){const pe=Ke/Pe;ee&&(ee.textContent=`${pe.toFixed(0)} fps · pr ${s.pr.toFixed(2)}`),pe<e.perf.targetFps-6?(ye++,He=0):pe>e.perf.targetFps&&(He++,ye=0),ye>=2&&s.pr>e.perf.minPixelRatio&&(s.setPixelRatio(Math.max(e.perf.minPixelRatio,s.pr-.25)),ye=0),He>=6&&s.pr<s.maxPR&&(s.setPixelRatio(Math.min(s.maxPR,s.pr+.25)),He=0),Pe=0,Ke=0}}else ee&&(ee.textContent=`warmup · pr ${s.pr.toFixed(2)}`)})}_1().catch(r=>console.error(r));
