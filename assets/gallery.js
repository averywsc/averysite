import{i as Dm,a as Lm,S as Im,c as Um}from"./themes-BKh2uLQn.js";function Wi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Td(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oa={duration:.5,overwrite:!1,delay:0},Yu,cn,Re,ci=1e8,ye=1/ci,Rc=Math.PI*2,Fm=Rc/4,Nm=0,wd=Math.sqrt,Om=Math.cos,Bm=Math.sin,nn=function(t){return typeof t=="string"},Ue=function(t){return typeof t=="function"},Qi=function(t){return typeof t=="number"},qu=function(t){return typeof t>"u"},Ni=function(t){return typeof t=="object"},Un=function(t){return t!==!1},Zu=function(){return typeof window<"u"},io=function(t){return Ue(t)||nn(t)},Ad=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xn=Array.isArray,zm=/random\([^)]+\)/g,km=/,\s*/g,Lh=/(?:-?\.?\d|\.)+/gi,Rd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Us=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ul=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cd=/[+-]=-?[.\d]+/,Hm=/[^,'"\[\]\s]+/gi,Vm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pe,Ti,Cc,$u,ti={},al={},Pd,Dd=function(t){return(al=Xs(t,ti))&&kn},ju=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ba=function(t,e){return!e&&console.warn(t)},Ld=function(t,e){return t&&(ti[t]=e)&&al&&(al[t]=e)||ti},za=function(){return 0},Gm={suppressEvents:!0,isStart:!0,kill:!1},Wo={suppressEvents:!0,kill:!1},Wm={suppressEvents:!0},Ku={},Er=[],Pc={},Id,Yn={},Fl={},Ih=30,Xo=[],Ju="",Qu=function(t){var e=t[0],n,i;if(Ni(e)||Ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Xo.length;i--&&!Xo[i].targetTest(e););n=Xo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new ep(t[i],n)))||t.splice(i,1);return t},Jr=function(t){return t._gsap||Qu(ui(t))[0]._gsap},Ud=function(t,e,n){return(n=t[e])&&Ue(n)?t[e]():qu(n)&&t.getAttribute&&t.getAttribute(e)||n},Fn=function(t,e){return(t=t.split(",")).forEach(e)||t},ze=function(t){return Math.round(t*1e5)/1e5||0},Ce=function(t){return Math.round(t*1e7)/1e7||0},Os=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Xm=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ol=function(){var t=Er.length,e=Er.slice(0),n,i;for(Pc={},Er.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},th=function(t){return!!(t._initted||t._startAt||t.add)},Fd=function(t,e,n,i){Er.length&&!cn&&ol(),t.render(e,n,!!(cn&&e<0&&th(t))),Er.length&&!cn&&ol()},Nd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Hm).length<2?e:nn(t)?t.trim():t},Od=function(t){return t},ei=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ym=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Xs=function(t,e){for(var n in e)t[n]=e[n];return t},Uh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ni(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ll=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},wa=function(t){var e=t.parent||Pe,n=t.keyframes?Ym(xn(t.keyframes)):ei;if(Un(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},qm=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Bd=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},wl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Cr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Qr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Zm=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Dc=function(t,e,n,i){return t._startAt&&(cn?t._startAt.revert(Wo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},$m=function r(t){return!t||t._ts&&r(t.parent)},Fh=function(t){return t._repeat?Ys(t._tTime,t=t.duration()+t._rDelay)*t:0},Ys=function(t,e){var n=Math.floor(t=Ce(t/e));return t&&n===t?n-1:n},cl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Al=function(t){return t._end=Ce(t._start+(t._tDur/Math.abs(t._ts||t._rts||ye)||0))},Rl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ce(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Al(t),n._dirty||Qr(n,t)),t},zd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=cl(t.rawTime(),e),(!e._dur||Ka(0,e.totalDuration(),n)-e._tTime>ye)&&e.render(n,!0)),Qr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ye}},Ri=function(t,e,n,i){return e.parent&&Cr(e),e._start=Ce((Qi(n)?n:!n&&ul(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Pe?ri(t,n,e):t._time)+e._delay),e._end=Ce(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Bd(t,e,"_first","_last",t._sort?"_start":0),ul(e)||(t._recent=e),i||zd(t,e),t._ts<0&&Rl(t,t._tTime),t},kd=function(t,e){return(ti.ScrollTrigger||ju("scrollTrigger",e))&&ti.ScrollTrigger.create(e,t)},Hd=function(t,e,n,i,s){if(nh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!cn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Id!==$n.frame)return Er.push(t),t._lazy=[s,i],1},jm=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},ul=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Km=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&jm(t)&&!(!t._initted&&ul(t))||(t._ts<0||t._dp._ts<0)&&!ul(t))?0:1,o=t._rDelay,l=0,c,u,d;if(o&&t._repeat&&(l=Ka(0,t._tDur,e),u=Ys(l,o),t._yoyo&&u&1&&(a=1-a),u!==Ys(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||cn||i||t._zTime===ye||!e&&t._zTime){if(!t._initted&&Hd(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?ye:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Dc(t,e,n,!0),t._onUpdate&&!n&&jn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&jn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Cr(t,1),!n&&!cn&&(jn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Jm=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},qs=function(t,e,n,i){var s=t._repeat,a=Ce(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ce(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Rl(t,t._tTime=t._tDur*o),t.parent&&Al(t),n||Qr(t.parent,t),t},Nh=function(t){return t instanceof Dn?Qr(t):qs(t,t._dur)},Qm={_start:0,endTime:za,totalDuration:za},ri=function r(t,e,n){var i=t.labels,s=t._recent||Qm,a=t.duration()>=ci?s.endTime(!1):t._dur,o,l,c;return nn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(xn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Aa=function(t,e,n){var i=Qi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Un(l.vars.inherit)&&l.parent;a.immediateRender=Un(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Ge(e[0],a,e[s+1])},Ur=function(t,e){return t||t===0?e(t):e},Ka=function(t,e,n){return n<t?t:n>e?e:n},gn=function(t,e){return!nn(t)||!(e=Vm.exec(t))?"":e[1]},t_=function(t,e,n){return Ur(n,function(i){return Ka(t,e,i)})},Lc=[].slice,Vd=function(t,e){return t&&Ni(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ni(t[0]))&&!t.nodeType&&t!==Ti},e_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return nn(i)&&!e||Vd(i,1)?(s=n).push.apply(s,ui(i)):n.push(i)})||n},ui=function(t,e,n){return Re&&!e&&Re.selector?Re.selector(t):nn(t)&&!n&&(Cc||!Zs())?Lc.call((e||$u).querySelectorAll(t),0):xn(t)?e_(t,n):Vd(t)?Lc.call(t,0):t?[t]:[]},Ic=function(t){return t=ui(t)[0]||Ba("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ui(e,n.querySelectorAll?n:n===t?Ba("Invalid scope")||$u.createElement("div"):t)}},Gd=function(t){return t.sort(function(){return .5-Math.random()})},Wd=function(t){if(Ue(t))return t;var e=Ni(t)?t:{each:t},n=ts(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,d=i;return nn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(f,h,p){var g=(p||e).length,_=a[g],m,x,b,S,A,E,w,v,y;if(!_){if(y=e.grid==="auto"?0:(e.grid||[1,ci])[1],!y){for(w=-ci;w<(w=p[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(_=a[g]=[],m=l?Math.min(y,g)*u-.5:i%y,x=y===ci?0:l?g*d/y-.5:i/y|0,w=0,v=ci,E=0;E<g;E++)b=E%y-m,S=x-(E/y|0),_[E]=A=c?Math.abs(c==="y"?S:b):wd(b*b+S*S),A>w&&(w=A),A<v&&(v=A);i==="random"&&Gd(_),_.max=w-v,_.min=v,_.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),_.b=g<0?s-g:s,_.u=gn(e.amount||e.each)||0,n=n&&g<0?p_(n):n}return g=(_[f]-_.min)/_.max||0,Ce(_.b+(n?n(g):g)*_.v)+_.u}},Uc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ce(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Qi(n)?0:gn(n))}},Xd=function(t,e){var n=xn(t),i,s;return!n&&Ni(t)&&(i=n=t.radius||ci,t.values?(t=ui(t.values),(s=!Qi(t[0]))&&(i*=i)):t=Uc(t.increment)),Ur(e,n?Ue(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ci,u=0,d=t.length,f,h;d--;)s?(f=t[d].x-o,h=t[d].y-l,f=f*f+h*h):f=Math.abs(t[d]-o),f<c&&(c=f,u=d);return u=!i||c<=i?t[u]:a,s||u===a||Qi(a)?u:u+gn(a)}:Uc(t))},Yd=function(t,e,n,i){return Ur(xn(t)?!e:n===!0?!!(n=0):!i,function(){return xn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},n_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},i_=function(t,e){return function(n){return t(parseFloat(n))+(e||gn(n))}},r_=function(t,e,n){return Zd(t,e,0,1,n)},qd=function(t,e,n){return Ur(n,function(i){return t[~~e(i)]})},s_=function r(t,e,n){var i=e-t;return xn(t)?qd(t,r(0,t.length),e):Ur(n,function(s){return(i+(s-t)%i)%i+t})},a_=function r(t,e,n){var i=e-t,s=i*2;return xn(t)?qd(t,r(0,t.length-1),e):Ur(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},ka=function(t){return t.replace(zm,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(km);return Yd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Zd=function(t,e,n,i,s){var a=e-t,o=i-n;return Ur(s,function(l){return n+((l-t)/a*o||0)})},o_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(h){return(1-h)*t+h*e};if(!s){var a=nn(t),o={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(xn(t)&&!xn(e)){for(u=[],d=t.length,f=d-2,c=1;c<d;c++)u.push(r(t[c-1],t[c]));d--,s=function(p){p*=d;var g=Math.min(f,~~p);return u[g](p-g)},n=e}else i||(t=Xs(xn(t)?[]:{},t));if(!u){for(l in e)eh.call(o,t,l,"get",e[l]);s=function(p){return sh(p,o)||(a?t.p:t)}}}return Ur(n,s)},Oh=function(t,e,n){var i=t.labels,s=ci,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},jn=function(t,e,n){var i=t.vars,s=i[e],a=Re,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Er.length&&ol(),o&&(Re=o),u=l?s.apply(c,l):s.call(c),Re=a,u},ma=function(t){return Cr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!cn),t.progress()<1&&jn(t,"onInterrupt"),t},Fs,$d=[],jd=function(t){if(t)if(t=!t.name&&t.default||t,Zu()||t.headless){var e=t.name,n=Ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:za,render:sh,add:eh,kill:E_,modifier:b_,rawVars:0},a={targetTest:0,get:0,getSetter:rh,aliases:{},register:0};if(Zs(),t!==i){if(Yn[e])return;ei(i,ei(ll(t,s),a)),Xs(i.prototype,Xs(s,ll(t,a))),Yn[i.prop=e]=i,t.targetTest&&(Xo.push(i),Ku[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ld(e,i),t.register&&t.register(kn,i,Nn)}else $d.push(t)},Ee=255,_a={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},Nl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ee+.5|0},Kd=function(t,e,n){var i=t?Qi(t)?[t>>16,t>>8&Ee,t&Ee]:0:_a.black,s,a,o,l,c,u,d,f,h,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),_a[t])i=_a[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ee,i&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(Lh),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Nl(l+1/3,s,a),i[1]=Nl(l,s,a),i[2]=Nl(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Rd),n&&i.length<4&&(i[3]=1),i}else i=t.match(Lh)||_a.transparent;i=i.map(Number)}return e&&!p&&(s=i[0]/Ee,a=i[1]/Ee,o=i[2]/Ee,d=Math.max(s,a,o),f=Math.min(s,a,o),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Jd=function(t){var e=[],n=[],i=-1;return t.split(Tr).forEach(function(s){var a=s.match(Us)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Bh=function(t,e,n){var i="",s=(t+i).match(Tr),a=e?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return t;if(s=s.map(function(f){return(f=Kd(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Jd(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Tr,"1").split(Us),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Tr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},Tr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in _a)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),l_=/hsl[a]?\(/,Qd=function(t){var e=t.join(" "),n;if(Tr.lastIndex=0,Tr.test(e))return n=l_.test(e),t[1]=Bh(t[1],n),t[0]=Bh(t[0],n,Jd(t[1])),!0},Ha,$n=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,f,h,p=function g(_){var m=r()-i,x=_===!0,b,S,A,E;if((m>t||m<0)&&(n+=m-e),i+=m,A=i-n,b=A-a,(b>0||x)&&(E=++d.frame,f=A-d.time*1e3,d.time=A=A/1e3,a+=b+(b>=s?0:s-b),S=1),x||(l=c(g)),S)for(h=0;h<o.length;h++)o[h](A,f,E,_)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){Pd&&(!Cc&&Zu()&&(Ti=Cc=window,$u=Ti.document||{},ti.gsap=kn,(Ti.gsapVersions||(Ti.gsapVersions=[])).push(kn.version),Dd(al||Ti.GreenSockGlobals||!Ti.gsap&&Ti||{}),$d.forEach(jd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,a-d.time*1e3+1|0)},Ha=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ha=0,c=za},lagSmoothing:function(_,m){t=_||1/0,e=Math.min(m||33,t)},fps:function(_){s=1e3/(_||240),a=d.time*1e3+s},add:function(_,m,x){var b=m?function(S,A,E,w){_(S,A,E,w),d.remove(b)}:_;return d.remove(_),o[x?"unshift":"push"](b),Zs(),b},remove:function(_,m){~(m=o.indexOf(_))&&o.splice(m,1)&&h>=m&&h--},_listeners:o},d})(),Zs=function(){return!Ha&&$n.wake()},le={},c_=/^[\d.\-M][\d.\-,\s]/,u_=/["']/g,h_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(u_,"").trim():+c,i=l.substr(o+1).trim();return e},f_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},d_=function(t){var e=(t+"").split("("),n=le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[h_(e[1])]:f_(t).split(",").map(Nd)):le._CE&&c_.test(t)?le._CE("",t):n},p_=function(t){return function(e){return 1-t(1-e)}},ts=function(t,e){return t&&(Ue(t)?t:le[t]||d_(t))||e},us=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Fn(t,function(o){le[o]=ti[o]=s,le[a=o.toLowerCase()]=n;for(var l in s)le[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[o+"."+l]=s[l]}),s},tp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ol=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Rc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Bm((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:tp(o);return s=Rc/s,l.config=function(c,u){return r(t,c,u)},l},Bl=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:tp(n);return i.config=function(s){return r(t,s)},i};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;us(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;us("Elastic",Ol("in"),Ol("out"),Ol());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};us("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);us("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});us("Circ",function(r){return-(wd(1-r*r)-1)});us("Sine",function(r){return r===1?1:-Om(r*Fm)+1});us("Back",Bl("in"),Bl("out"),Bl());le.SteppedEase=le.steps=ti.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ye;return function(o){return((i*Ka(0,a,o)|0)+s)*n}}};Oa.ease=le["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ju+=r+","+r+"Params,"});var ep=function(t,e){this.id=Nm++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ud,this.set=e?e.getSetter:rh},Va=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,qs(this,+e.duration,1,1),this.data=e.data,Re&&(this._ctx=Re,Re.data.push(this)),Ha||$n.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Zs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Rl(this,n),!s._dp||s.parent||zd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ye||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Fd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ys(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?cl(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-ye?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(Ka(-Math.abs(this._delay),o,s),i!==!1),Al(this),Zm(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Zs(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==ye,a;if(s)for(this._tTime-=ye,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+ye){s=!1;break}a=a._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=Ce(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ri(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Un(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?cl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Wm);var i=cn;return cn=n,th(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ri(this,n),Un(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Un(i)),this._dur||(this._zTime=-ye),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ye)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ue(n)?n:Od,l=function(){var u=i.then;i.then=null,s&&s(),Ue(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){ma(this)},r})();ei(Va.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var Dn=(function(r){Td(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Un(n.sortChildren),Pe&&Ri(n.parent||Pe,Wi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&kd(Wi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Aa(0,arguments,this),this},e.from=function(i,s,a){return Aa(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Aa(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,wa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ge(i,s,ri(this,a),1),this},e.call=function(i,s,a){return Ri(this,Ge.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ge(i,a,ri(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,wa(a).immediateRender=Un(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,wa(o).immediateRender=Un(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ce(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,p,g,_,m,x,b,S,A,E,w;if(this!==Pe&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,S=this._start,b=this._ts,m=!b,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,a);if(f=Ce(u%_),u===l?(g=this._repeat,f=c):(A=Ce(u/_),g=~~A,g&&g===A&&(f=c,g--),f>c&&(f=c)),A=Ys(this._tTime,_),!o&&this._tTime&&A!==g&&this._tTime-A*_-this._dur<=0&&(A=g),E&&g&1&&(f=c-f,w=1),g!==A&&!this._lock){var v=E&&A&1,y=v===(E&&g&1);if(g<A&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(w?0:Ce(g*_)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&jn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,A=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Jm(this,Ce(o),Ce(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!A&&(jn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(h=this._first;h;){if(p=h._next,(h._act||f>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,a),f!==this._time||!this._ts&&!m){x=0,p&&(u+=this._zTime=-ye);break}}h=p}else{h=this._last;for(var I=i<0?i:f;h;){if(p=h._prev,(h._act||I<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(I-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(I-h._start)*h._ts,s,a||cn&&th(h)),f!==this._time||!this._ts&&!m){x=0,p&&(u+=this._zTime=I?-ye:ye);break}}h=p}}if(x&&!s&&(this.pause(),x.render(f>=o?0:-ye)._zTime=f>=o?1:-1,this._ts))return this._start=S,Al(this),this.render(i,s,a);this._onUpdate&&!s&&jn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Cr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(jn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Qi(s)||(s=ri(this,s,i)),!(i instanceof Va)){if(xn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(nn(i))return this.addLabel(i,s);if(Ue(i))i=Ge.delayedCall(0,i);else return this}return this!==i?Ri(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ci);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ge?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return nn(i)?this.removeLabel(i):Ue(i)?this.killTweensOf(i):(i.parent===this&&wl(this,i),i===this._recent&&(this._recent=this._last),Qr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ce($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ri(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Ge.delayedCall(0,s||za,a);return o.data="isPause",this._hasPause=1,Ri(this,o,ri(this,i))},e.removePause=function(i){var s=this._first;for(i=ri(this,i);s;)s._start===i&&s.data==="isPause"&&Cr(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)_r!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=ui(i),l=this._first,c=Qi(s),u;l;)l instanceof Ge?Xm(l._targets,o)&&(c?(!_r||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=ri(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,p=Ge.to(a,ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ye,onStart:function(){if(a.pause(),!h){var _=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==_&&qs(p,_,0,1).render(p._time,!0,!0),h=1}u&&u.apply(p,d||[])}},s));return f?p.render(0):p},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,ei({startAt:{time:ri(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Oh(this,ri(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Oh(this,ri(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ye)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ce(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Qr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=ci,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ri(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ce(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;qs(a,a===Pe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Pe._ts&&(Fd(Pe,cl(i,Pe)),Id=$n.frame),$n.frame>=Ih){Ih+=Qn.autoSleep||120;var s=Pe._first;if((!s||!s._ts)&&Qn.autoSleep&&$n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$n.sleep()}}},t})(Va);ei(Dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var m_=function(t,e,n,i,s,a,o){var l=new Nn(this._pt,t,e,0,1,ap,null,s),c=0,u=0,d,f,h,p,g,_,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ka(i)),a&&(x=[n,i],a(x,t,e),n=x[0],i=x[1]),f=n.match(Ul)||[];d=Ul.exec(i);)p=d[0],g=i.substring(c,d.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),p!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:p.charAt(1)==="="?Os(_,p)-_:parseFloat(p)-_,m:h&&h<4?Math.round:0},c=Ul.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Cd.test(i)||m)&&(l.e=0),this._pt=l,l},eh=function(t,e,n,i,s,a,o,l,c,u){Ue(i)&&(i=i(s||0,t,a));var d=t[e],f=n!=="get"?n:Ue(d)?c?t[e.indexOf("set")||!Ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,h=Ue(d)?c?M_:rp:ih,p;if(nn(i)&&(~i.indexOf("random(")&&(i=ka(i)),i.charAt(1)==="="&&(p=Os(f,i)+(gn(f)||0),(p||p===0)&&(i=p))),!u||f!==i||Fc)return!isNaN(f*i)&&i!==""?(p=new Nn(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?y_:sp,0,h),c&&(p.fp=c),o&&p.modifier(o,this,t),this._pt=p):(!d&&!(e in t)&&ju(e,i),m_.call(this,t,e,f,i,h,l||Qn.stringFilter,c))},__=function(t,e,n,i,s){if(Ue(t)&&(t=Ra(t,s,e,n,i)),!Ni(t)||t.style&&t.nodeType||xn(t)||Ad(t))return nn(t)?Ra(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Ra(t[o],s,e,n,i);return a},np=function(t,e,n,i,s,a){var o,l,c,u;if(Yn[t]&&(o=new Yn[t]).init(s,o.rawVars?e[t]:__(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Nn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Fs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},_r,Fc,nh=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,h=i.autoRevert,p=t._dur,g=t._startAt,_=t._targets,m=t.parent,x=m&&m.data==="nested"?m.vars.targets:_,b=t._overwrite==="auto"&&!Yu,S=t.timeline,A=i.easeReverse||d,E,w,v,y,I,L,N,z,V,W,O,U,F;if(S&&(!f||!s)&&(s="none"),t._ease=ts(s,Oa.ease),t._rEase=A&&(ts(A)||t._ease),t._from=!S&&!!i.runBackwards,t._from&&(t.ratio=1),!S||f&&!i.stagger){if(z=_[0]?Jr(_[0]).harness:0,U=z&&i[z.prop],E=ll(i,Ku),g&&(g._zTime<0&&g.progress(1),e<0&&u&&o&&!h?g.render(-1,!0):g.revert(u&&p?Wo:Gm),g._lazy=0),a){if(Cr(t._startAt=Ge.set(_,ei({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Un(l),startAt:null,delay:0,onUpdate:c&&function(){return jn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(cn||!o&&!h)&&t._startAt.revert(Wo),o&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&p&&!g){if(e&&(o=!1),v=ei({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Un(l),immediateRender:o,stagger:0,parent:m},E),U&&(v[z.prop]=U),Cr(t._startAt=Ge.set(_,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(cn?t._startAt.revert(Wo):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ye,ye);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Un(l)||l&&!p,w=0;w<_.length;w++){if(I=_[w],N=I._gsap||Qu(_)[w]._gsap,t._ptLookup[w]=W={},Pc[N.id]&&Er.length&&ol(),O=x===_?w:x.indexOf(I),z&&(V=new z).init(I,U||E,t,O,x)!==!1&&(t._pt=y=new Nn(t._pt,I,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(k){W[k]=y}),V.priority&&(L=1)),!z||U)for(v in E)Yn[v]&&(V=np(v,E,t,O,I,x))?V.priority&&(L=1):W[v]=y=eh.call(t,I,v,"get",E[v],O,x,0,i.stringFilter);t._op&&t._op[w]&&t.kill(I,t._op[w]),b&&t._pt&&(_r=t,Pe.killTweensOf(I,W,t.globalTime(e)),F=!t.parent,_r=0),t._pt&&l&&(Pc[N.id]=1)}L&&op(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!F,f&&e<=0&&S.render(ci,!0,!0)},g_=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,d,f,h;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,h=t._targets.length;h--;){if(u=f[h][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Fc=1,t.vars[e]="+=0",nh(t,o),Fc=0,l?Ba(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=ze(n)+gn(d.e)),d.b&&(d.b=u.s+gn(d.b))},v_=function(t,e){var n=t[0]?Jr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Xs({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},x_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(xn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Ra=function(t,e,n,i,s){return Ue(t)?t.call(e,n,i,s):nn(t)&&~t.indexOf("random(")?ka(t):t},hl=Ju+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ip={};Fn(hl+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ip[r]=1});hl=hl.split(",");var Ge=(function(r){Td(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:wa(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,p=l.keyframes,g=l.defaults,_=l.scrollTrigger,m=i.parent||Pe,x=(xn(n)||Ad(n)?Qi(n[0]):"length"in i)?[n]:ui(n),b,S,A,E,w,v,y,I;if(o._targets=x.length?Qu(x):Ba("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,p||f||io(c)||io(u)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(b=o.timeline=new Dn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:x}),b.kill(),b.parent=b._dp=Wi(o),b._start=0,f||io(c)||io(u)){if(E=x.length,y=f&&Wd(f),Ni(f))for(w in f)~hl.indexOf(w)&&(I||(I={}),I[w]=f[w]);for(S=0;S<E;S++)A=ll(i,ip),A.stagger=0,L&&(A.easeReverse=L),I&&Xs(A,I),v=x[S],A.duration=+Ra(c,Wi(o),S,v,x),A.delay=(+Ra(u,Wi(o),S,v,x)||0)-o._delay,!f&&E===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),b.to(v,A,y?y(S,v,x):0),b._ease=le.none;b.duration()?c=u=0:o.timeline=0}else if(p){wa(ei(b.vars.defaults,{ease:"none"})),b._ease=ts(p.ease||i.ease||"none");var N=0,z,V,W;if(xn(p))p.forEach(function(O){return b.to(x,O,">")}),b.duration();else{A={};for(w in p)w==="ease"||w==="easeEach"||x_(w,p[w],A,p.easeEach);for(w in A)for(z=A[w].sort(function(O,U){return O.t-U.t}),N=0,S=0;S<z.length;S++)V=z[S],W={ease:V.e,duration:(V.t-(S?z[S-1].t:0))/100*c},W[w]=V.v,b.to(x,W,N),N+=W.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return h===!0&&!Yu&&(_r=Wi(o),Pe.killTweensOf(x),_r=0),Ri(m,Wi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!p&&o._start===Ce(m._time)&&Un(d)&&$m(Wi(o))&&m.data!=="nested")&&(o._tTime=-ye,o.render(Math.max(0,-u)||0)),_&&kd(Wi(o),_),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-ye&&!u?l:i<ye?0:i,f,h,p,g,_,m,x,b;if(!c)Km(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(f=Ce(d%g),d===l?(p=this._repeat,f=c):(_=Ce(d/g),p=~~_,p&&p===_?(f=c,p--):f>c&&(f=c)),m=this._yoyo&&p&1,m&&(f=c-f),_=Ys(this._tTime,g),f===o&&!a&&this._initted&&p===_)return this._tTime=d,this;p!==_&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(Ce(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(Hd(this,u?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==_))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var S=f<o;if(S!==this._inv){var A=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(S?-1:1)/A:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(f/c);if(this._from&&(this.ratio=x=1-x),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!_&&(jn(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Dc(this,i,s,a),jn(this,"onUpdate")),this._repeat&&p!==_&&this.vars.onRepeat&&!s&&this.parent&&jn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Dc(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Cr(this,1),!s&&!(u&&!o)&&(d||o||m)&&(jn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Ha||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||nh(this,c),u=this._ease(c/this._dur),g_(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Rl(this,0),this.parent||Bd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ma(this):this.scrollTrigger&&this.scrollTrigger.kill(!!cn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,_r&&_r.vars.overwrite!==!0)._first||ma(this),this.parent&&a!==this.timeline.totalDuration()&&qs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ui(i):o,c=this._ptLookup,u=this._pt,d,f,h,p,g,_,m;if((!s||s==="all")&&qm(o,l))return s==="all"&&(this._pt=0),ma(this);for(d=this._op=this._op||[],s!=="all"&&(nn(s)&&(g={},Fn(s,function(x){return g[x]=1}),s=g),s=v_(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(d[m]=s,p=f,h={}):(h=d[m]=d[m]||{},p=s);for(g in p)_=f&&f[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&wl(this,_,"_pt"),delete f[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&u&&ma(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Aa(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Aa(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Pe.killTweensOf(i,s,a)},t})(Va);ei(Ge.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(r){Ge[r]=function(){var t=new Dn,e=Lc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var ih=function(t,e,n){return t[e]=n},rp=function(t,e,n){return t[e](n)},M_=function(t,e,n,i){return t[e](i.fp,n)},S_=function(t,e,n){return t.setAttribute(e,n)},rh=function(t,e){return Ue(t[e])?rp:qu(t[e])&&t.setAttribute?S_:ih},sp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},y_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ap=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},sh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},b_=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},E_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?wl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},T_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},op=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Nn=(function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||sp,this.d=l||this,this.set=c||ih,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=T_,this.m=n,this.mt=s,this.tween=i},r})();Fn(Ju+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Ku[r]=1});ti.TweenMax=ti.TweenLite=Ge;ti.TimelineLite=ti.TimelineMax=Dn;Pe=new Dn({sortChildren:!1,defaults:Oa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=Qd;var es=[],Yo={},w_=[],zh=0,A_=0,zl=function(t){return(Yo[t]||w_).map(function(e){return e()})},Ga=function(){var t=Date.now(),e=[];t-zh>2&&(zl("matchMediaInit"),es.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Ti.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),zl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zh=t,zl("matchMedia"))},lp=(function(){function r(e,n){this.selector=n&&Ic(n),this.data=[],this._r=[],this.isReverted=!1,this.id=A_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ue(n)&&(s=i,i=n,n=Ue);var a=this,o=function(){var c=Re,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ic(s)),Re=a,d=i.apply(a,arguments),Ue(d)&&a._r.push(d),Re=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Ue?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Re;Re=null,n(this),Re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ge&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ge)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=es.length;a--;)es[a].id===this.id&&es.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Ga):o.removeEventListener("change",Ga)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r})(),R_=(function(){function r(e){this.contexts=[],this.scope=e,Re&&Re.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ni(n)||(n={matches:n});var a=new lp(0,s||this.scope),o=a.conditions={},l,c,u;Re&&!a.selector&&(a.selector=Re.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Ti.matchMedia(n[c]),l&&(es.indexOf(a)<0&&es.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ga):l.addEventListener("change",Ga),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),fl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return jd(i)})},timeline:function(t){return new Dn(t)},getTweensOf:function(t,e){return Pe.getTweensOf(t,e)},getProperty:function(t,e,n,i){nn(t)&&(t=ui(t)[0]);var s=Jr(t||{}).get,a=n?Od:Nd;return n==="native"&&(n=""),t&&(e?a((Yn[e]&&Yn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Yn[o]&&Yn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=ui(t),t.length>1){var i=t.map(function(u){return kn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}t=t[0]||{};var a=Yn[e],o=Jr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var d=new a;Fs._pt=0,d.init(t,n?u+n:u,Fs,0,[t]),d.render(1,d),Fs._pt&&sh(1,Fs)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=kn.to(t,ei((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return Pe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ts(t.ease,Oa.ease)),Uh(Oa,t||{})},config:function(t){return Uh(Qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Yn[o]&&!ti[o]&&Ba(e+" effect requires "+o+" plugin.")}),Fl[e]=function(o,l,c){return n(ui(o),ei(l||{},s),c)},a&&(Dn.prototype[e]=function(o,l,c){return this.add(Fl[e](o,Ni(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){le[t]=ts(e)},parseEase:function(t,e){return arguments.length?ts(t,e):le},getById:function(t){return Pe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Dn(t),i,s;for(n.smoothChildTiming=Un(t.smoothChildTiming),Pe.remove(n),n._dp=0,n._time=n._tTime=Pe._time,i=Pe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ge&&i.vars.onComplete===i._targets[0]))&&Ri(n,i,i._start-i._delay),i=s;return Ri(Pe,n,0),n},context:function(t,e){return t?new lp(t,e):Re},matchMedia:function(t){return new R_(t)},matchMediaRefresh:function(){return es.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ga()},addEventListener:function(t,e){var n=Yo[t]||(Yo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Yo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:s_,wrapYoyo:a_,distribute:Wd,random:Yd,snap:Xd,normalize:r_,getUnit:gn,clamp:t_,splitColor:Kd,toArray:ui,selector:Ic,mapRange:Zd,pipe:n_,unitize:i_,interpolate:o_,shuffle:Gd},install:Dd,effects:Fl,ticker:$n,updateRoot:Dn.updateRoot,plugins:Yn,globalTimeline:Pe,core:{PropTween:Nn,globals:Ld,Tween:Ge,Timeline:Dn,Animation:Va,getCache:Jr,_removeLinkedListItem:wl,reverting:function(){return cn},context:function(t){return t&&Re&&(Re.data.push(t),t._ctx=Re),Re},suppressOverwrites:function(t){return Yu=t}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return fl[r]=Ge[r]});$n.add(Dn.updateRoot);Fs=fl.to({},{duration:0});var C_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},P_=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=C_(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},kl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(nn(s)&&(l={},Fn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}P_(o,s)}}}},kn=fl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},kl("roundProps",Uc),kl("modifiers"),kl("snap",Xd))||fl;Ge.version=Dn.version=kn.version="3.15.1";Pd=1;Zu()&&Zs();le.Power0;le.Power1;le.Power2;le.Power3;le.Power4;le.Linear;le.Quad;le.Cubic;le.Quart;le.Quint;le.Strong;le.Elastic;le.Back;le.SteppedEase;le.Bounce;le.Sine;le.Expo;le.Circ;var kh,gr,Bs,ah,$r,Hh,oh,D_=function(){return typeof window<"u"},tr={},Wr=180/Math.PI,zs=Math.PI/180,ps=Math.atan2,Vh=1e8,lh=/([A-Z])/g,L_=/(left|right|width|margin|padding|x)/i,I_=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},U_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},F_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},N_=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},O_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},cp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},up=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},B_=function(t,e,n){return t.style[e]=n},z_=function(t,e,n){return t.style.setProperty(e,n)},k_=function(t,e,n){return t._gsap[e]=n},H_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},V_=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},G_=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},De="transform",On=De+"Origin",W_=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in tr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ci[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Xi(i,o)}):this.tfm[t]=a.x?a[t]:Xi(i,t),t===On&&(this.tfm.zOrigin=a.zOrigin);else return Ci.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(De)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(On,e,"")),t=De}(s||e)&&this.props.push(t,e,s[t])},hp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},X_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(lh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=oh(),(!s||!s.isStart)&&!n[De]&&(hp(n),i.zOrigin&&n[On]&&(n[On]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},fp=function(t,e){var n={target:t,props:[],revert:X_,save:W_};return t._gsap||kn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},dp,Oc=function(t,e){var n=gr.createElementNS?gr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):gr.createElement(t);return n&&n.style?n:gr.createElement(t)},Kn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(lh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,$s(e)||e,1)||""},Gh="O,Moz,ms,Ms,Webkit".split(","),$s=function(t,e,n){var i=e||$r,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Gh[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Gh[a]:"")+t},Bc=function(){D_()&&window.document&&(kh=window,gr=kh.document,Bs=gr.documentElement,$r=Oc("div")||{style:{}},Oc("div"),De=$s(De),On=De+"Origin",$r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dp=!!$s("perspective"),oh=kn.core.reverting,ah=1)},Wh=function(t){var e=t.ownerSVGElement,n=Oc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Bs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Bs.removeChild(n),s},Xh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},pp=function(t){var e,n;try{e=t.getBBox()}catch{e=Wh(t),n=1}return e&&(e.width||e.height)||n||(e=Wh(t)),e&&!e.width&&!e.x&&!e.y?{x:+Xh(t,["x","cx","x1"])||0,y:+Xh(t,["y","cy","y1"])||0,width:0,height:0}:e},mp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&pp(t))},Pr=function(t,e){if(e){var n=t.style,i;e in tr&&e!==On&&(e=De),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(lh,"-$1").toLowerCase())):n.removeAttribute(e)}},vr=function(t,e,n,i,s,a){var o=new Nn(t._pt,e,n,0,1,a?up:cp);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Yh={deg:1,rad:1,turn:1},Y_={grid:1,flex:1},Dr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=$r.style,l=L_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",p,g,_,m;if(i===a||!s||Yh[i]||Yh[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&mp(t),(h||a==="%")&&(tr[e]||~e.indexOf("adius")))return p=m?t.getBBox()[l?"width":"height"]:t[u],ze(h?s/p*d:s/100*p);if(o[l?"width":"height"]=d+(f?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===gr||!g.appendChild)&&(g=gr.body),_=g._gsap,_&&h&&_.width&&l&&_.time===$n.time&&!_.uncache)return ze(s/_.width*d);if(h&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=d+i,p=t[u],x?t.style[e]=x:Pr(t,e)}else(h||a==="%")&&!Y_[Kn(g,"display")]&&(o.position=Kn(t,"position")),g===t&&(o.position="static"),g.appendChild($r),p=$r[u],g.removeChild($r),o.position="absolute";return l&&h&&(_=Jr(g),_.time=$n.time,_.width=g[u]),ze(f?p*s/d:p&&s?d/p*s:0)},Xi=function(t,e,n,i){var s;return ah||Bc(),e in Ci&&e!=="transform"&&(e=Ci[e],~e.indexOf(",")&&(e=e.split(",")[0])),tr[e]&&e!=="transform"?(s=Xa(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:pl(Kn(t,On))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=dl[e]&&dl[e](t,e,n)||Kn(t,e)||Ud(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Dr(t,e,s,n)+n:s},q_=function(t,e,n,i){if(!n||n==="none"){var s=$s(e,t,1),a=s&&Kn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Kn(t,"borderTopColor"))}var o=new Nn(this._pt,t.style,e,0,1,ap),l=0,c=0,u,d,f,h,p,g,_,m,x,b,S,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Kn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Kn(t,e)||i,g?t.style[e]=g:Pr(t,e)),u=[n,i],Qd(u),n=u[0],i=u[1],f=n.match(Us)||[],A=i.match(Us)||[],A.length){for(;d=Us.exec(i);)_=d[0],x=i.substring(l,d.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),_!==(g=f[c++]||"")&&(h=parseFloat(g)||0,S=g.substr((h+"").length),_.charAt(1)==="="&&(_=Os(h,_)+S),m=parseFloat(_),b=_.substr((m+"").length),l=Us.lastIndex-b.length,b||(b=b||Qn.units[e]||S,l===i.length&&(i+=b,o.e+=b)),S!==b&&(h=Dr(t,e,g,b)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:h,c:m-h,m:p&&p<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?up:cp;return Cd.test(i)&&(o.e=0),this._pt=o,o},qh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Z_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=qh[n]||n,e[1]=qh[i]||i,e.join(" ")},$_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],tr[o]&&(l=1,o=o==="transformOrigin"?On:De),Pr(n,o);l&&(Pr(n,De),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Xa(n,1),a.uncache=1,hp(i)))}},dl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Nn(t._pt,e,n,0,0,$_);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Wa=[1,0,0,1,0,0],_p={},gp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Zh=function(t){var e=Kn(t,De);return gp(e)?Wa:e.substr(7).match(Rd).map(ze)},ch=function(t,e){var n=t._gsap||Jr(t),i=t.style,s=Zh(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Wa:s):(s===Wa&&!t.offsetParent&&t!==Bs&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Bs.appendChild(t)),s=Zh(t),l?i.display=l:Pr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Bs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},zc=function(t,e,n,i,s,a){var o=t._gsap,l=s||ch(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],p=l[1],g=l[2],_=l[3],m=l[4],x=l[5],b=e.split(" "),S=parseFloat(b[0])||0,A=parseFloat(b[1])||0,E,w,v,y;n?l!==Wa&&(w=h*_-p*g)&&(v=S*(_/w)+A*(-g/w)+(g*x-_*m)/w,y=S*(-p/w)+A*(h/w)-(h*x-p*m)/w,S=v,A=y):(E=pp(t),S=E.x+(~b[0].indexOf("%")?S/100*E.width:S),A=E.y+(~(b[1]||b[0]).indexOf("%")?A/100*E.height:A)),i||i!==!1&&o.smooth?(m=S-c,x=A-u,o.xOffset=d+(m*h+x*g)-m,o.yOffset=f+(m*p+x*_)-x):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[On]="0px 0px",a&&(vr(a,o,"xOrigin",c,S),vr(a,o,"yOrigin",u,A),vr(a,o,"xOffset",d,o.xOffset),vr(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",S+" "+A)},Xa=function(t,e){var n=t._gsap||new ep(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Kn(t,On)||"0",u,d,f,h,p,g,_,m,x,b,S,A,E,w,v,y,I,L,N,z,V,W,O,U,F,k,C,st,ct,xt,Lt,Rt;return u=d=f=g=_=m=x=b=S=0,h=p=1,n.svg=!!(t.getCTM&&mp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[De]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[De]!=="none"?l[De]:"")),i.scale=i.rotate=i.translate="none"),w=ch(t,n.svg),n.svg&&(n.uncache?(F=t.getBBox(),c=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),zc(t,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,E=n.yOrigin||0,w!==Wa&&(L=w[0],N=w[1],z=w[2],V=w[3],u=W=w[4],d=O=w[5],w.length===6?(h=Math.sqrt(L*L+N*N),p=Math.sqrt(V*V+z*z),g=L||N?ps(N,L)*Wr:0,x=z||V?ps(z,V)*Wr+g:0,x&&(p*=Math.abs(Math.cos(x*zs))),n.svg&&(u-=A-(A*L+E*z),d-=E-(A*N+E*V))):(Rt=w[6],xt=w[7],C=w[8],st=w[9],ct=w[10],Lt=w[11],u=w[12],d=w[13],f=w[14],v=ps(Rt,ct),_=v*Wr,v&&(y=Math.cos(-v),I=Math.sin(-v),U=W*y+C*I,F=O*y+st*I,k=Rt*y+ct*I,C=W*-I+C*y,st=O*-I+st*y,ct=Rt*-I+ct*y,Lt=xt*-I+Lt*y,W=U,O=F,Rt=k),v=ps(-z,ct),m=v*Wr,v&&(y=Math.cos(-v),I=Math.sin(-v),U=L*y-C*I,F=N*y-st*I,k=z*y-ct*I,Lt=V*I+Lt*y,L=U,N=F,z=k),v=ps(N,L),g=v*Wr,v&&(y=Math.cos(v),I=Math.sin(v),U=L*y+N*I,F=W*y+O*I,N=N*y-L*I,O=O*y-W*I,L=U,W=F),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,m=180-m),h=ze(Math.sqrt(L*L+N*N+z*z)),p=ze(Math.sqrt(O*O+Rt*Rt)),v=ps(W,O),x=Math.abs(v)>2e-4?v*Wr:0,S=Lt?1/(Lt<0?-Lt:Lt):0),n.svg&&(U=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!gp(Kn(t,De)),U&&t.setAttribute("transform",U))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(h*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=ze(h),n.scaleY=ze(p),n.rotation=ze(g)+o,n.rotationX=ze(_)+o,n.rotationY=ze(m)+o,n.skewX=x+o,n.skewY=b+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[On]=pl(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?K_:dp?vp:j_,n.uncache=0,n},pl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Hl=function(t,e,n){var i=gn(e);return ze(parseFloat(e)+parseFloat(Dr(t,"x",n+"px",i)))+i},j_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,vp(t,e)},Nr="0deg",ra="0px",Or=") ",vp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,p=n.scaleX,g=n.scaleY,_=n.transformPerspective,m=n.force3D,x=n.target,b=n.zOrigin,S="",A=m==="auto"&&t&&t!==1||m===!0;if(b&&(d!==Nr||u!==Nr)){var E=parseFloat(u)*zs,w=Math.sin(E),v=Math.cos(E),y;E=parseFloat(d)*zs,y=Math.cos(E),a=Hl(x,a,w*y*-b),o=Hl(x,o,-Math.sin(E)*-b),l=Hl(x,l,v*y*-b+b)}_!==ra&&(S+="perspective("+_+Or),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(A||a!==ra||o!==ra||l!==ra)&&(S+=l!==ra||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Or),c!==Nr&&(S+="rotate("+c+Or),u!==Nr&&(S+="rotateY("+u+Or),d!==Nr&&(S+="rotateX("+d+Or),(f!==Nr||h!==Nr)&&(S+="skew("+f+", "+h+Or),(p!==1||g!==1)&&(S+="scale("+p+", "+g+Or),x.style[De]=S||"translate(0, 0)"},K_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,p=n.xOrigin,g=n.yOrigin,_=n.xOffset,m=n.yOffset,x=n.forceCSS,b=parseFloat(a),S=parseFloat(o),A,E,w,v,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=zs,c*=zs,A=Math.cos(l)*d,E=Math.sin(l)*d,w=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=zs,y=Math.tan(c-u),y=Math.sqrt(1+y*y),w*=y,v*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),A*=y,E*=y)),A=ze(A),E=ze(E),w=ze(w),v=ze(v)):(A=d,v=f,E=w=0),(b&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(b=Dr(h,"x",a,"px"),S=Dr(h,"y",o,"px")),(p||g||_||m)&&(b=ze(b+p-(p*A+g*w)+_),S=ze(S+g-(p*E+g*v)+m)),(i||s)&&(y=h.getBBox(),b=ze(b+i/100*y.width),S=ze(S+s/100*y.height)),y="matrix("+A+","+E+","+w+","+v+","+b+","+S+")",h.setAttribute("transform",y),x&&(h.style[De]=y)},J_=function(t,e,n,i,s){var a=360,o=nn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Wr:1),c=l-i,u=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Vh)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Vh)%a-~~(c/a)*a)),t._pt=f=new Nn(t._pt,e,n,i,c,U_),f.e=u,f.u="deg",t._props.push(n),f},$h=function(t,e){for(var n in e)t[n]=e[n];return t},Q_=function(t,e,n){var i=$h({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,f,h,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[De]=e,o=Xa(n,1),Pr(n,De),n.setAttribute("transform",c)):(c=getComputedStyle(n)[De],a[De]=e,o=Xa(n,1),a[De]=c);for(l in tr)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=gn(c),p=gn(u),d=h!==p?Dr(n,l,c,p):parseFloat(c),f=parseFloat(u),t._pt=new Nn(t._pt,o,l,d,f-d,Nc),t._pt.u=p||0,t._props.push(l));$h(o,i)};Fn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});dl[t>1?"border"+r:r]=function(o,l,c,u,d){var f,h;if(arguments.length<4)return f=a.map(function(p){return Xi(o,p,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},a.forEach(function(p,g){return h[p]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,h,d)}});var xp={name:"css",register:Bc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,d,f,h,p,g,_,m,x,b,S,A,E,w,v,y;ah||Bc(),this.styles=this.styles||fp(t),v=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Yn[g]&&np(g,e,n,i,t,s)))){if(h=typeof u,p=dl[g],h==="function"&&(u=u.call(n,i,t,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=ka(u)),p)p(this,t,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",Tr.lastIndex=0,Tr.test(c)||(_=gn(c),m=gn(u),m?_!==m&&(c=Dr(t,g,c,m)+m):_&&(u+=_)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),v.push(g,0,o[g]);else if(h!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],nn(c)&&~c.indexOf("random(")&&(c=ka(c)),gn(c+"")||c==="auto"||(c+=Qn.units[g]||gn(Xi(t,g))||""),(c+"").charAt(1)==="="&&(c=Xi(t,g))):c=Xi(t,g),f=parseFloat(c),x=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),d=parseFloat(u),g in Ci&&(g==="autoAlpha"&&(f===1&&Xi(t,"visibility")==="hidden"&&d&&(f=0),v.push("visibility",0,o.visibility),vr(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Ci[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in tr,b){if(this.styles.save(g),y=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Kn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var I=t.style.perspective;t.style.perspective=u,u=Kn(t,"perspective"),I?t.style.perspective=I:Pr(t,"perspective")}d=parseFloat(u)}if(S||(A=t._gsap,A.renderTransform&&!e.parseTransform||Xa(t,e.parseTransform),E=e.smoothOrigin!==!1&&A.smooth,S=this._pt=new Nn(this._pt,o,De,0,1,A.renderTransform,A,0,-1),S.dep=1),g==="scale")this._pt=new Nn(this._pt,A,"scaleY",A.scaleY,(x?Os(A.scaleY,x+d):d)-A.scaleY||0,Nc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){v.push(On,0,o[On]),u=Z_(u),A.svg?zc(t,u,0,E,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&vr(this,A,"zOrigin",A.zOrigin,m),vr(this,o,g,pl(c),pl(u)));continue}else if(g==="svgOrigin"){zc(t,u,1,E,0,this);continue}else if(g in _p){J_(this,A,g,f,x?Os(f,x+u):u);continue}else if(g==="smoothOrigin"){vr(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){Q_(this,u,t);continue}}else g in o||(g=$s(g)||g);if(b||(d||d===0)&&(f||f===0)&&!I_.test(u)&&g in o)_=(c+"").substr((f+"").length),d||(d=0),m=gn(u)||(g in Qn.units?Qn.units[g]:_),_!==m&&(f=Dr(t,g,c,m)),this._pt=new Nn(this._pt,b?A:o,g,f,(x?Os(f,x+d):d)-f,!b&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?O_:Nc),this._pt.u=m||0,b&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=N_):_!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=F_);else if(g in o)q_.call(this,t,g,c,x?x+u:u);else if(g in t)this.add(t,g,c||t[g],x?x+u:u,i,s);else if(g!=="parseTransform"){ju(g,u);continue}b||(g in o?v.push(g,0,o[g]):typeof t[g]=="function"?v.push(g,2,t[g]()):v.push(g,1,c||t[g])),a.push(g)}}w&&op(this)},render:function(t,e){if(e.tween._time||!oh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Xi,aliases:Ci,getSetter:function(t,e,n){var i=Ci[e];return i&&i.indexOf(",")<0&&(e=i),e in tr&&e!==On&&(t._gsap.x||Xi(t,"x"))?n&&Hh===n?e==="scale"?H_:k_:(Hh=n||{})&&(e==="scale"?V_:G_):t.style&&!qu(t.style[e])?B_:~e.indexOf("-")?z_:rh(t,e)},core:{_removeProperty:Pr,_getMatrix:ch}};kn.utils.checkPrefix=$s;kn.core.getStyleSaver=fp;(function(r,t,e,n){var i=Fn(r+","+t+","+e,function(s){tr[s]=1});Fn(t,function(s){Qn.units[s]="deg",_p[s]=1}),Ci[i[13]]=r+","+t,Fn(n,function(s){var a=s.split(":");Ci[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qn.units[r]="px"});kn.registerPlugin(xp);var xr=kn.registerPlugin(xp)||kn;xr.core.Tween;function tg(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function eg(r,t,e){return t&&tg(r.prototype,t),r}var an,qo,Ln,Mr,Sr,ks,Mp,Xr,Hs,Sp,Zi,vi,yp,bp=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},Ep=1,Ns=[],ae=[],Ui=[],Ca=Date.now,kc=function(t,e){return e},ng=function(){var t=Hs.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ae),i.push.apply(i,Ui),ae=n,Ui=i,kc=function(a,o){return e[a](o)}},wr=function(t,e){return~Ui.indexOf(t)&&Ui[Ui.indexOf(t)+1][e]},Pa=function(t){return!!~Sp.indexOf(t)},yn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Sn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ro="scrollLeft",so="scrollTop",Hc=function(){return Zi&&Zi.isPressed||ae.cache++},ml=function(t,e){var n=function i(s){if(s||s===0){Ep&&Ln.history.scrollRestoration!=="manual"&&(Ln.history.scrollRestoration="manual");var a=Zi&&Zi.isPressed;s=i.v=Math.round(s)||(Zi&&Zi.iOS?1:0),t(s),i.cacheID=ae.cache,a&&kc("ss",s)}else(e||ae.cache!==i.cacheID||kc("ref"))&&(i.cacheID=ae.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},An={s:ro,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ml(function(r){return arguments.length?Ln.scrollTo(r,Ze.sc()):Ln.pageXOffset||Mr[ro]||Sr[ro]||ks[ro]||0})},Ze={s:so,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:ml(function(r){return arguments.length?Ln.scrollTo(An.sc(),r):Ln.pageYOffset||Mr[so]||Sr[so]||ks[so]||0})},Pn=function(t,e){return(e&&e._ctx&&e._ctx.selector||an.utils.toArray)(t)[0]||(typeof t=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ig=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Lr=function(t,e){var n=e.s,i=e.sc;Pa(t)&&(t=Mr.scrollingElement||Sr);var s=ae.indexOf(t),a=i===Ze.sc?1:2;!~s&&(s=ae.push(t)-1),ae[s+a]||yn(t,"scroll",Hc);var o=ae[s+a],l=o||(ae[s+a]=ml(wr(t,n),!0)||(Pa(t)?i:ml(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=an.getProperty(t,"scrollBehavior")==="smooth"),l},Vc=function(t,e,n){var i=t,s=t,a=Ca(),o=a,l=e||50,c=Math.max(500,l*3),u=function(p,g){var _=Ca();g||_-a>l?(s=i,i=p,o=a,a=_):n?i+=p:i=s+(p-s)/(_-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(p){var g=o,_=s,m=Ca();return(p||p===0)&&p!==i&&u(p),a===o||m-o>c?0:(i+(n?_:-_))/((n?m:a)-g)*1e3};return{update:u,reset:d,getVelocity:f}},sa=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},jh=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Tp=function(){Hs=an.core.globals().ScrollTrigger,Hs&&Hs.core&&ng()},wp=function(t){return an=t||bp(),!qo&&an&&typeof document<"u"&&document.body&&(Ln=window,Mr=document,Sr=Mr.documentElement,ks=Mr.body,Sp=[Ln,Mr,Sr,ks],an.utils.clamp,yp=an.core.context||function(){},Xr="onpointerenter"in ks?"pointer":"mouse",Mp=ke.isTouch=Ln.matchMedia&&Ln.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ln||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,vi=ke.eventTypes=("ontouchstart"in Sr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Sr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ep=0},500),qo=1),Hs||Tp(),qo};An.op=Ze;ae.cache=0;var ke=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){qo||wp(an)||console.warn("Please gsap.registerPlugin(Observer)"),Hs||Tp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,f=n.onStopDelay,h=n.ignore,p=n.wheelSpeed,g=n.event,_=n.onDragStart,m=n.onDragEnd,x=n.onDrag,b=n.onPress,S=n.onRelease,A=n.onRight,E=n.onLeft,w=n.onUp,v=n.onDown,y=n.onChangeX,I=n.onChangeY,L=n.onChange,N=n.onToggleX,z=n.onToggleY,V=n.onHover,W=n.onHoverEnd,O=n.onMove,U=n.ignoreCheck,F=n.isNormalizer,k=n.onGestureStart,C=n.onGestureEnd,st=n.onWheel,ct=n.onEnable,xt=n.onDisable,Lt=n.onClick,Rt=n.scrollSpeed,Y=n.capture,et=n.allowClicks,it=n.lockAxis,Ct=n.onLockAxis;this.target=o=Pn(o)||Sr,this.vars=n,h&&(h=an.utils.toArray(h)),i=i||1e-9,s=s||0,p=p||1,Rt=Rt||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ln.getComputedStyle(ks).lineHeight)||22);var Ut,Pt,jt,yt,Vt,Yt,zt,X=this,P=0,ht=0,ft=n.passive||!u&&n.passive!==!1,Bt=Lr(o,An),Mt=Lr(o,Ze),R=Bt(),M=Mt(),B=~a.indexOf("touch")&&!~a.indexOf("pointer")&&vi[0]==="pointerdown",Q=Pa(o),tt=o.ownerDocument||Mr,q=[0,0,0],vt=[0,0,0],pt=0,H=function(){return pt=Ca()},rt=function(kt,te){return(X.event=kt)&&h&&ig(kt.target,h)||te&&B&&kt.pointerType!=="touch"||U&&U(kt,te)},j=function(){X._vx.reset(),X._vy.reset(),Pt.pause(),d&&d(X)},at=function(){var kt=X.deltaX=jh(q),te=X.deltaY=jh(vt),wt=Math.abs(kt)>=i,qt=Math.abs(te)>=i;L&&(wt||qt)&&L(X,kt,te,q,vt),wt&&(A&&X.deltaX>0&&A(X),E&&X.deltaX<0&&E(X),y&&y(X),N&&X.deltaX<0!=P<0&&N(X),P=X.deltaX,q[0]=q[1]=q[2]=0),qt&&(v&&X.deltaY>0&&v(X),w&&X.deltaY<0&&w(X),I&&I(X),z&&X.deltaY<0!=ht<0&&z(X),ht=X.deltaY,vt[0]=vt[1]=vt[2]=0),(yt||jt)&&(O&&O(X),jt&&(_&&jt===1&&_(X),x&&x(X),jt=0),yt=!1),Yt&&!(Yt=!1)&&Ct&&Ct(X),Vt&&(st(X),Vt=!1),Ut=0},_t=function(kt,te,wt){q[wt]+=kt,vt[wt]+=te,X._vx.update(kt),X._vy.update(te),c?Ut||(Ut=requestAnimationFrame(at)):at()},dt=function(kt,te){it&&!zt&&(X.axis=zt=Math.abs(kt)>Math.abs(te)?"x":"y",Yt=!0),zt!=="y"&&(q[2]+=kt,X._vx.update(kt,!0)),zt!=="x"&&(vt[2]+=te,X._vy.update(te,!0)),c?Ut||(Ut=requestAnimationFrame(at)):at()},mt=function(kt){if(!rt(kt,1)){kt=sa(kt,u);var te=kt.clientX,wt=kt.clientY,qt=te-X.x,Xt=wt-X.y,$t=X.isDragging;X.x=te,X.y=wt,($t||(qt||Xt)&&(Math.abs(X.startX-te)>=s||Math.abs(X.startY-wt)>=s))&&(jt||(jt=$t?2:1),$t||(X.isDragging=!0),dt(qt,Xt))}},St=X.onPress=function(Dt){rt(Dt,1)||Dt&&Dt.button||(X.axis=zt=null,Pt.pause(),X.isPressed=!0,Dt=sa(Dt),P=ht=0,X.startX=X.x=Dt.clientX,X.startY=X.y=Dt.clientY,X._vx.reset(),X._vy.reset(),yn(F?o:tt,vi[1],mt,ft,!0),X.deltaX=X.deltaY=0,b&&b(X))},D=X.onRelease=function(Dt){if(!rt(Dt,1)){Sn(F?o:tt,vi[1],mt,!0);var kt=!isNaN(X.y-X.startY),te=X.isDragging,wt=te&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),qt=sa(Dt);!wt&&kt&&(X._vx.reset(),X._vy.reset(),u&&et&&an.delayedCall(.08,function(){if(Ca()-pt>300&&!Dt.defaultPrevented){if(Dt.target.click)Dt.target.click();else if(tt.createEvent){var Xt=tt.createEvent("MouseEvents");Xt.initMouseEvent("click",!0,!0,Ln,1,qt.screenX,qt.screenY,qt.clientX,qt.clientY,!1,!1,!1,!1,0,null),Dt.target.dispatchEvent(Xt)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,d&&te&&!F&&Pt.restart(!0),jt&&at(),m&&te&&m(X),S&&S(X,wt)}},lt=function(kt){return kt.touches&&kt.touches.length>1&&(X.isGesturing=!0)&&k(kt,X.isDragging)},ot=function(){return(X.isGesturing=!1)||C(X)},gt=function(kt){if(!rt(kt)){var te=Bt(),wt=Mt();_t((te-R)*Rt,(wt-M)*Rt,1),R=te,M=wt,d&&Pt.restart(!0)}},ut=function(kt){if(!rt(kt)){kt=sa(kt,u),st&&(Vt=!0);var te=(kt.deltaMode===1?l:kt.deltaMode===2?Ln.innerHeight:1)*p;_t(kt.deltaX*te,kt.deltaY*te,0),d&&!F&&Pt.restart(!0)}},nt=function(kt){if(!rt(kt)){var te=kt.clientX,wt=kt.clientY,qt=te-X.x,Xt=wt-X.y;X.x=te,X.y=wt,yt=!0,d&&Pt.restart(!0),(qt||Xt)&&dt(qt,Xt)}},It=function(kt){X.event=kt,V(X)},Wt=function(kt){X.event=kt,W(X)},fe=function(kt){return rt(kt)||sa(kt,u)&&Lt(X)};Pt=X._dc=an.delayedCall(f||.25,j).pause(),X.deltaX=X.deltaY=0,X._vx=Vc(0,50,!0),X._vy=Vc(0,50,!0),X.scrollX=Bt,X.scrollY=Mt,X.isDragging=X.isGesturing=X.isPressed=!1,yp(this),X.enable=function(Dt){return X.isEnabled||(yn(Q?tt:o,"scroll",Hc),a.indexOf("scroll")>=0&&yn(Q?tt:o,"scroll",gt,ft,Y),a.indexOf("wheel")>=0&&yn(o,"wheel",ut,ft,Y),(a.indexOf("touch")>=0&&Mp||a.indexOf("pointer")>=0)&&(yn(o,vi[0],St,ft,Y),yn(tt,vi[2],D),yn(tt,vi[3],D),et&&yn(o,"click",H,!0,!0),Lt&&yn(o,"click",fe),k&&yn(tt,"gesturestart",lt),C&&yn(tt,"gestureend",ot),V&&yn(o,Xr+"enter",It),W&&yn(o,Xr+"leave",Wt),O&&yn(o,Xr+"move",nt)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=yt=jt=!1,X._vx.reset(),X._vy.reset(),R=Bt(),M=Mt(),Dt&&Dt.type&&St(Dt),ct&&ct(X)),X},X.disable=function(){X.isEnabled&&(Ns.filter(function(Dt){return Dt!==X&&Pa(Dt.target)}).length||Sn(Q?tt:o,"scroll",Hc),X.isPressed&&(X._vx.reset(),X._vy.reset(),Sn(F?o:tt,vi[1],mt,!0)),Sn(Q?tt:o,"scroll",gt,Y),Sn(o,"wheel",ut,Y),Sn(o,vi[0],St,Y),Sn(tt,vi[2],D),Sn(tt,vi[3],D),Sn(o,"click",H,!0),Sn(o,"click",fe),Sn(tt,"gesturestart",lt),Sn(tt,"gestureend",ot),Sn(o,Xr+"enter",It),Sn(o,Xr+"leave",Wt),Sn(o,Xr+"move",nt),X.isEnabled=X.isPressed=X.isDragging=!1,xt&&xt(X))},X.kill=X.revert=function(){X.disable();var Dt=Ns.indexOf(X);Dt>=0&&Ns.splice(Dt,1),Zi===X&&(Zi=0)},Ns.push(X),F&&Pa(o)&&(Zi=X),X.enable(g)},eg(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();ke.version="3.15.1";ke.create=function(r){return new ke(r)};ke.register=wp;ke.getAll=function(){return Ns.slice()};ke.getById=function(r){return Ns.filter(function(t){return t.vars.id===r})[0]};bp()&&an.registerPlugin(ke);var Ot,Ls,se,ve,Zn,_e,uh,_l,Ya,Da,ga,ao,mn,Cl,Gc,Tn,Kh,Jh,Is,Ap,Vl,Rp,En,Wc,Cp,Pp,fr,Xc,hh,Vs,fh,Ar,Yc,Gl,oo=1,_n=Date.now,Wl=_n(),hi=0,va=0,Qh=function(t,e,n){var i=Xn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},tf=function(t,e){return e&&(!Xn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},rg=function r(){return va&&requestAnimationFrame(r)},ef=function(){return Cl=1},nf=function(){return Cl=0},wi=function(t){return t},xa=function(t){return Math.round(t*1e5)/1e5||0},Dp=function(){return typeof window<"u"},Lp=function(){return Ot||Dp()&&(Ot=window.gsap)&&Ot.registerPlugin&&Ot},ss=function(t){return!!~uh.indexOf(t)},Ip=function(t){return(t==="Height"?fh:se["inner"+t])||Zn["client"+t]||_e["client"+t]},Up=function(t){return wr(t,"getBoundingClientRect")||(ss(t)?function(){return Jo.width=se.innerWidth,Jo.height=fh,Jo}:function(){return Yi(t)})},sg=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=wr(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?Ip(s):t["client"+s])||0}},ag=function(t,e){return!e||~Ui.indexOf(t)?Up(t):function(){return Jo}},Pi=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=wr(t,n))?a()-Up(t)()[s]:ss(t)?(Zn[n]||_e[n])-Ip(i):t[n]-t["offset"+i])},lo=function(t,e){for(var n=0;n<Is.length;n+=3)(!e||~e.indexOf(Is[n+1]))&&t(Is[n],Is[n+1],Is[n+2])},Xn=function(t){return typeof t=="string"},vn=function(t){return typeof t=="function"},Ma=function(t){return typeof t=="number"},Yr=function(t){return typeof t=="object"},aa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ms=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},_s=Math.abs,Fp="left",Np="top",dh="right",ph="bottom",ns="width",is="height",La="Right",Ia="Left",Ua="Top",Fa="Bottom",Ve="padding",si="margin",js="Width",mh="Height",qe="px",ai=function(t){return se.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},og=function(t){var e=ai(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},rf=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Yi=function(t,e){var n=e&&ai(t)[Gc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ot.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},gl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Op=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},lg=function(t){return function(e){return Ot.utils.snap(Op(t),e)}},_h=function(t){var e=Ot.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},cg=function(t){return function(e,n){return _h(Op(t))(e,n.direction)}},co=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},en=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},tn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},uo=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},sf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ho={toggleActions:"play",anticipatePin:0},vl={top:0,left:0,center:.5,bottom:1,right:1},Zo=function(t,e){if(Xn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in vl?vl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},fo=function(t,e,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,p=ve.createElement("div"),g=ss(n)||wr(n,"pinType")==="fixed",_=t.indexOf("scroller")!==-1,m=g?_e:n.tagName==="IFRAME"?n.contentDocument.body:n,x=t.indexOf("start")!==-1,b=x?c:u,S="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((_||l)&&g?"fixed;":"absolute;"),(_||l||!g)&&(S+=(i===Ze?dh:ph)+":"+(a+parseFloat(f))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=x,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=S,p.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+i.op.d2],$o(p,0,i,x),p},$o=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+js]=1,s["border"+o+js]=0,s[n.p]=e+"px",Ot.set(t,s)},re=[],qc={},qa,af=function(){return _n()-hi>34&&(qa||(qa=requestAnimationFrame($i)))},gs=function(){(!En||!En.isPressed||En.startX>_e.clientWidth)&&(ae.cache++,En?qa||(qa=requestAnimationFrame($i)):$i(),hi||os("scrollStart"),hi=_n())},Xl=function(){Pp=se.innerWidth,Cp=se.innerHeight},Sa=function(t){ae.cache++,(t===!0||!mn&&!Rp&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!Wc||Pp!==se.innerWidth||Math.abs(se.innerHeight-Cp)>se.innerHeight*.25))&&_l.restart(!0)},as={},ug=[],Bp=function r(){return tn(Zt,"scrollEnd",r)||jr(!0)},os=function(t){return as[t]&&as[t].map(function(e){return e()})||ug},Wn=[],zp=function(t){for(var e=0;e<Wn.length;e+=5)(!t||Wn[e+4]&&Wn[e+4].query===t)&&(Wn[e].style.cssText=Wn[e+1],Wn[e].getBBox&&Wn[e].setAttribute("transform",Wn[e+2]||""),Wn[e+3].uncache=1)},kp=function(){ae.cache++,ae.forEach(function(t){return vn(t)&&(t.rec=t())})},gh=function(t,e){var n;for(Tn=0;Tn<re.length;Tn++)n=re[Tn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Ar=!0,e&&zp(e),e||os("revert")},Hp=function(t,e){ae.cache++,(e||!wn)&&ae.forEach(function(n){return vn(n)&&n.cacheID++&&(n.rec=0)}),Xn(t)&&(hh=t,se.history.scrollRestoration!==t&&(se.history.scrollRestoration=t))},wn,rs=0,of,hg=function(){if(of!==rs){var t=of=rs;requestAnimationFrame(function(){return t===rs&&jr(!0)})}},Vp=function(){_e.appendChild(Vs),fh=!En&&Vs.offsetHeight||se.innerHeight,_e.removeChild(Vs)},lf=function(t){return Ya(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},jr=function(t,e){if(Zn=ve.documentElement,_e=ve.body,uh=[se,ve,Zn,_e],hi&&!t&&!Ar){en(Zt,"scrollEnd",Bp);return}Vp(),wn=Zt.isRefreshing=!0,Ar||kp();var n=os("refreshInit");Ap&&Zt.sort(),e||gh(),ae.forEach(function(i){vn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),re.slice(0).forEach(function(i){return i.refresh()}),Ar=!1,re.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Yc=1,lf(!0),re.forEach(function(i){var s=Pi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),lf(!1),Yc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ae.forEach(function(i){vn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Hp(hh,1),_l.pause(),rs++,wn=2,$i(2),re.forEach(function(i){return vn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),wn=Zt.isRefreshing=!1,os("refresh")},Zc=0,jo=1,Na,$i=function(t){if(t===2||!wn&&!Ar){Zt.isUpdating=!0,Na&&Na.update(0);var e=re.length,n=_n(),i=n-Wl>=50,s=e&&re[0].scroll();if(jo=Zc>s?-1:1,wn||(Zc=s),i&&(hi&&!Cl&&n-hi>200&&(hi=0,os("scrollEnd")),ga=Wl,Wl=n),jo<0){for(Tn=e;Tn-- >0;)re[Tn]&&re[Tn].update(0,i);jo=1}else for(Tn=0;Tn<e;Tn++)re[Tn]&&re[Tn].update(0,i);Zt.isUpdating=!1}qa=0},$c=[Fp,Np,ph,dh,si+Fa,si+La,si+Ua,si+Ia,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ko=$c.concat([ns,is,"boxSizing","max"+js,"max"+mh,"position",si,Ve,Ve+Ua,Ve+La,Ve+Fa,Ve+Ia]),fg=function(t,e,n){Gs(n);var i=t._gsap;if(i.spacerIsNative)Gs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Yl=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=$c.length,a=e.style,o=t.style,l;s--;)l=$c[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[ph]=o[dh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ns]=gl(t,An)+qe,a[is]=gl(t,Ze)+qe,a[Ve]=o[si]=o[Np]=o[Fp]="0",Gs(i),o[ns]=o["max"+js]=n[ns],o[is]=o["max"+mh]=n[is],o[Ve]=n[Ve],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},dg=/([A-Z])/g,Gs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||Ot.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(dg,"-$1").toLowerCase())}},po=function(t){for(var e=Ko.length,n=t.style,i=[],s=0;s<e;s++)i.push(Ko[s],n[Ko[s]]);return i.t=t,i},pg=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},Jo={left:0,top:0},cf=function(t,e,n,i,s,a,o,l,c,u,d,f,h,p){vn(t)&&(t=t(l)),Xn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Zo("0"+t.substr(3),n):0));var g=h?h.time():0,_,m,x;if(h&&h.seek(0),isNaN(t)||(t=+t),Ma(t))h&&(t=Ot.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,t)),o&&$o(o,n,i,!0);else{vn(e)&&(e=e(l));var b=(t||"0").split(" "),S,A,E,w;x=Pn(e,l)||_e,S=Yi(x)||{},(!S||!S.left&&!S.top)&&ai(x).display==="none"&&(w=x.style.display,x.style.display="block",S=Yi(x),w?x.style.display=w:x.style.removeProperty("display")),A=Zo(b[0],S[i.d]),E=Zo(b[1]||"0",n),t=S[i.p]-c[i.p]-u+A+s-E,o&&$o(o,E,i,n-E<20||o._isStart&&E>20),n-=n-E}if(p&&(l[p]=t||-.001,t<0&&(t=0)),a){var v=t+n,y=a._isStart;_="scroll"+i.d2,$o(a,v,i,y&&v>20||!y&&(d?Math.max(_e[_],Zn[_]):a.parentNode[_])<=v+1),d&&(c=Yi(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+qe))}return h&&x&&(_=Yi(x),h.seek(f),m=Yi(x),h._caScrollDist=_[i.p]-m[i.p],t=t/h._caScrollDist*f),h&&h.seek(g),h?t:Math.round(t)},mg=/(webkit|moz|length|cssText|inset)/i,uf=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===_e){t._stOrig=s.cssText,o=ai(t);for(a in o)!+a&&!mg.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ot.core.getCache(t).uncache=1,e.appendChild(t)}},Gp=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},mo=function(t,e,n){var i={};i[e.p]="+="+n,Ot.set(t,i)},hf=function(t,e){var n=Lr(t,e),i="_scroll"+e.p2,s=function a(o,l,c,u,d){var f=a.tween,h=l.onComplete,p={};c=c||n();var g=Gp(n,c,function(){f.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=p,p[i]=function(){return g(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){ae.cache++,a.tween&&$i()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=Ot.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},en(t,"wheel",n.wheelHandler),Zt.isTouch&&en(t,"touchmove",n.wheelHandler),s},Zt=(function(){function r(e,n){Ls||r.register(Ot)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Xc(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!va){this.update=this.refresh=this.kill=wi;return}n=rf(Xn(n)||Ma(n)||n.nodeType?{trigger:n}:n,ho);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,p=s.pinSpacing,g=s.invalidateOnRefresh,_=s.anticipatePin,m=s.onScrubComplete,x=s.onSnapComplete,b=s.once,S=s.snap,A=s.pinReparent,E=s.pinSpacer,w=s.containerAnimation,v=s.fastScrollEnd,y=s.preventOverlaps,I=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:Ze,L=!d&&d!==0,N=Pn(n.scroller||se),z=Ot.core.getCache(N),V=ss(N),W=("pinType"in n?n.pinType:wr(N,"pinType")||V&&"fixed")==="fixed",O=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=L&&n.toggleActions.split(" "),F="markers"in n?n.markers:ho.markers,k=V?0:parseFloat(ai(N)["border"+I.p2+js])||0,C=this,st=n.onRefreshInit&&function(){return n.onRefreshInit(C)},ct=sg(N,V,I),xt=ag(N,V),Lt=0,Rt=0,Y=0,et=Lr(N,I),it,Ct,Ut,Pt,jt,yt,Vt,Yt,zt,X,P,ht,ft,Bt,Mt,R,M,B,Q,tt,q,vt,pt,H,rt,j,at,_t,dt,mt,St,D,lt,ot,gt,ut,nt,It,Wt;if(C._startClamp=C._endClamp=!1,C._dir=I,_*=45,C.scroller=N,C.scroll=w?w.time.bind(w):et,Pt=et(),Ar&&et.rec==null&&(et.rec=Pt),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Ap=1,n.refreshPriority===-9999&&(Na=C)),z.tweenScroll=z.tweenScroll||{top:hf(N,Ze),left:hf(N,An)},C.tweenTo=it=z.tweenScroll[I.p],C.scrubDuration=function(wt){lt=Ma(wt)&&wt,lt?D?D.duration(wt):D=Ot.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:lt,paused:!0,onComplete:function(){return m&&m(C)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(d),mt=0,l||(l=i.vars.id)),S&&((!Yr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in _e.style&&Ot.set(V?[_e,Zn]:N,{scrollBehavior:"auto"}),ae.forEach(function(wt){return vn(wt)&&wt.target===(V?ve.scrollingElement||Zn:N)&&(wt.smooth=!1)}),Ut=vn(S.snapTo)?S.snapTo:S.snapTo==="labels"?lg(i):S.snapTo==="labelsDirectional"?cg(i):S.directional!==!1?function(wt,qt){return _h(S.snapTo)(wt,_n()-Rt<500?0:qt.direction)}:Ot.utils.snap(S.snapTo),ot=S.duration||{min:.1,max:2},ot=Yr(ot)?Da(ot.min,ot.max):Da(ot,ot),gt=Ot.delayedCall(S.delay||lt/2||.1,function(){var wt=et(),qt=_n()-Rt<500,Xt=it.tween;if((qt||Math.abs(C.getVelocity())<10)&&!Xt&&!Cl&&Lt!==wt){var $t=(wt-yt)/Bt,Ne=i&&!L?i.totalProgress():$t,Jt=qt?0:(Ne-St)/(_n()-ga)*1e3||0,we=Ot.utils.clamp(-$t,1-$t,_s(Jt/2)*Jt/.185),We=$t+(S.inertia===!1?0:we),Ae,ge,me=S,un=me.onStart,Te=me.onInterrupt,hn=me.onComplete;if(Ae=Ut(We,C),Ma(Ae)||(Ae=We),ge=Math.max(0,Math.round(yt+Ae*Bt)),wt<=Vt&&wt>=yt&&ge!==wt){if(Xt&&!Xt._initted&&Xt.data<=_s(ge-wt))return;S.inertia===!1&&(we=Ae-$t),it(ge,{duration:ot(_s(Math.max(_s(We-Ne),_s(Ae-Ne))*.185/Jt/.05||0)),ease:S.ease||"power3",data:_s(ge-wt),onInterrupt:function(){return gt.restart(!0)&&Te&&ms(C,Te)},onComplete:function(){C.update(),Lt=et(),i&&!L&&(D?D.resetTo("totalProgress",Ae,i._tTime/i._tDur):i.progress(Ae)),mt=St=i&&!L?i.totalProgress():C.progress,x&&x(C),hn&&ms(C,hn)}},wt,we*Bt,ge-wt-we*Bt),un&&ms(C,un,it.tween)}}else C.isActive&&Lt!==wt&&gt.restart(!0)}).pause()),l&&(qc[l]=C),f=C.trigger=Pn(f||h!==!0&&h),Wt=f&&f._gsap&&f._gsap.stRevert,Wt&&(Wt=Wt(C)),h=h===!0?f:Pn(h),Xn(o)&&(o={targets:f,className:o}),h&&(p===!1||p===si||(p=!p&&h.parentNode&&h.parentNode.style&&ai(h.parentNode).display==="flex"?!1:Ve),C.pin=h,Ct=Ot.core.getCache(h),Ct.spacer?Mt=Ct.pinState:(E&&(E=Pn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ct.spacerIsNative=!!E,E&&(Ct.spacerState=po(E))),Ct.spacer=B=E||ve.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),Ct.pinState=Mt=po(h)),n.force3D!==!1&&Ot.set(h,{force3D:!0}),C.spacer=B=Ct.spacer,dt=ai(h),H=dt[p+I.os2],tt=Ot.getProperty(h),q=Ot.quickSetter(h,I.a,qe),Yl(h,B,dt),M=po(h)),F){ht=Yr(F)?rf(F,sf):sf,X=fo("scroller-start",l,N,I,ht,0),P=fo("scroller-end",l,N,I,ht,0,X),Q=X["offset"+I.op.d2];var fe=Pn(wr(N,"content")||N);Yt=this.markerStart=fo("start",l,fe,I,ht,Q,0,w),zt=this.markerEnd=fo("end",l,fe,I,ht,Q,0,w),w&&(It=Ot.quickSetter([Yt,zt],I.a,qe)),!W&&!(Ui.length&&wr(N,"fixedMarkers")===!0)&&(og(V?_e:N),Ot.set([X,P],{force3D:!0}),j=Ot.quickSetter(X,I.a,qe),_t=Ot.quickSetter(P,I.a,qe))}if(w){var Dt=w.vars.onUpdate,kt=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){C.update(0,0,1),Dt&&Dt.apply(w,kt||[])})}if(C.previous=function(){return re[re.indexOf(C)-1]},C.next=function(){return re[re.indexOf(C)+1]},C.revert=function(wt,qt){if(!qt)return C.kill(!0);var Xt=wt!==!1||!C.enabled,$t=mn;Xt!==C.isReverted&&(Xt&&(ut=Math.max(et(),C.scroll.rec||0),Y=C.progress,nt=i&&i.progress()),Yt&&[Yt,zt,X,P].forEach(function(Ne){return Ne.style.display=Xt?"none":"block"}),Xt&&(mn=C,C.update(Xt)),h&&(!A||!C.isActive)&&(Xt?fg(h,B,Mt):Yl(h,B,ai(h),rt)),Xt||C.update(Xt),mn=$t,C.isReverted=Xt)},C.refresh=function(wt,qt,Xt,$t){if(!((mn||!C.enabled)&&!qt)){if(h&&wt&&hi){en(r,"scrollEnd",Bp);return}!wn&&st&&st(C),mn=C,it.tween&&!Xt&&(it.tween.kill(),it.tween=0),D&&D.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ft){return Ft.vars.immediateRender&&Ft.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Ne=ct(),Jt=xt(),we=w?w.duration():Pi(N,I),We=Bt<=.01||!Bt,Ae=0,ge=$t||0,me=Yr(Xt)?Xt.end:n.end,un=n.endTrigger||f,Te=Yr(Xt)?Xt.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),hn=C.pinnedContainer=n.pinnedContainer&&Pn(n.pinnedContainer,C),ni=f&&Math.max(0,re.indexOf(C))||0,Xe=ni,Ye,Ke,Bi,hs,T,G,K,$,Z,bt,Tt,Et,Nt;for(F&&Yr(Xt)&&(Et=Ot.getProperty(X,I.p),Nt=Ot.getProperty(P,I.p));Xe-- >0;)G=re[Xe],G.end||G.refresh(0,1)||(mn=C),K=G.pin,K&&(K===f||K===h||K===hn)&&!G.isReverted&&(bt||(bt=[]),bt.unshift(G),G.revert(!0,!0)),G!==re[Xe]&&(ni--,Xe--);for(vn(Te)&&(Te=Te(C)),Te=Qh(Te,"start",C),yt=cf(Te,f,Ne,I,et(),Yt,X,C,Jt,k,W,we,w,C._startClamp&&"_startClamp")||(h?-.001:0),vn(me)&&(me=me(C)),Xn(me)&&!me.indexOf("+=")&&(~me.indexOf(" ")?me=(Xn(Te)?Te.split(" ")[0]:"")+me:(Ae=Zo(me.substr(2),Ne),me=Xn(Te)?Te:(w?Ot.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,yt):yt)+Ae,un=f)),me=Qh(me,"end",C),Vt=Math.max(yt,cf(me||(un?"100% 0":we),un,Ne,I,et()+Ae,zt,P,C,Jt,k,W,we,w,C._endClamp&&"_endClamp"))||-.001,Ae=0,Xe=ni;Xe--;)G=re[Xe]||{},K=G.pin,K&&G.start-G._pinPush<=yt&&!w&&G.end>0&&(Ye=G.end-(C._startClamp?Math.max(0,G.start):G.start),(K===f&&G.start-G._pinPush<yt||K===hn)&&isNaN(Te)&&(Ae+=Ye*(1-G.progress)),K===h&&(ge+=Ye));if(yt+=Ae,Vt+=Ae,C._startClamp&&(C._startClamp+=Ae),C._endClamp&&!wn&&(C._endClamp=Vt||-.001,Vt=Math.min(Vt,Pi(N,I))),Bt=Vt-yt||(yt-=.01)&&.001,We&&(Y=Ot.utils.clamp(0,1,Ot.utils.normalize(yt,Vt,ut))),C._pinPush=ge,Yt&&Ae&&(Ye={},Ye[I.a]="+="+Ae,hn&&(Ye[I.p]="-="+et()),Ot.set([Yt,zt],Ye)),h&&!(Yc&&C.end>=Pi(N,I)))Ye=ai(h),hs=I===Ze,Bi=et(),vt=parseFloat(tt(I.a))+ge,!we&&Vt>1&&(Tt=(V?ve.scrollingElement||Zn:N).style,Tt={style:Tt,value:Tt["overflow"+I.a.toUpperCase()]},V&&ai(_e)["overflow"+I.a.toUpperCase()]!=="scroll"&&(Tt.style["overflow"+I.a.toUpperCase()]="scroll")),Yl(h,B,Ye),M=po(h),Ke=Yi(h,!0),$=W&&Lr(N,hs?An:Ze)(),p?(rt=[p+I.os2,Bt+ge+qe],rt.t=B,Xe=p===Ve?gl(h,I)+Bt+ge:0,Xe&&(rt.push(I.d,Xe+qe),B.style.flexBasis!=="auto"&&(B.style.flexBasis=Xe+qe)),Gs(rt),hn&&re.forEach(function(Ft){Ft.pin===hn&&Ft.vars.pinSpacing!==!1&&(Ft._subPinOffset=!0)}),W&&et(ut)):(Xe=gl(h,I),Xe&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=Xe+qe)),W&&(T={top:Ke.top+(hs?Bi-yt:$)+qe,left:Ke.left+(hs?$:Bi-yt)+qe,boxSizing:"border-box",position:"fixed"},T[ns]=T["max"+js]=Math.ceil(Ke.width)+qe,T[is]=T["max"+mh]=Math.ceil(Ke.height)+qe,T[si]=T[si+Ua]=T[si+La]=T[si+Fa]=T[si+Ia]="0",T[Ve]=Ye[Ve],T[Ve+Ua]=Ye[Ve+Ua],T[Ve+La]=Ye[Ve+La],T[Ve+Fa]=Ye[Ve+Fa],T[Ve+Ia]=Ye[Ve+Ia],R=pg(Mt,T,A),wn&&et(0)),i?(Z=i._initted,Vl(1),i.render(i.duration(),!0,!0),pt=tt(I.a)-vt+Bt+ge,at=Math.abs(Bt-pt)>1,W&&at&&R.splice(R.length-2,2),i.render(0,!0,!0),Z||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Vl(0)):pt=Bt,Tt&&(Tt.value?Tt.style["overflow"+I.a.toUpperCase()]=Tt.value:Tt.style.removeProperty("overflow-"+I.a));else if(f&&et()&&!w)for(Ke=f.parentNode;Ke&&Ke!==_e;)Ke._pinOffset&&(yt-=Ke._pinOffset,Vt-=Ke._pinOffset),Ke=Ke.parentNode;bt&&bt.forEach(function(Ft){return Ft.revert(!1,!0)}),C.start=yt,C.end=Vt,Pt=jt=wn?ut:et(),!w&&!wn&&!Ar&&(Pt<ut&&et(ut),C.scroll.rec=0),C.revert(!1,!0),Rt=_n(),gt&&(Lt=-1,gt.restart(!0)),mn=0,i&&L&&(i._initted||nt)&&i.progress()!==nt&&i.progress(nt||0,!0).render(i.time(),!0,!0),(We||Y!==C.progress||w||g||i&&!i._initted)&&(i&&!L&&(i._initted||Y||i.vars.immediateRender!==!1)&&i.totalProgress(w&&yt<-.001&&!Y?Ot.utils.normalize(yt,Vt,0):Y,!0),C.progress=We||(Pt-yt)/Bt===Y?0:Y),h&&p&&(B._pinOffset=Math.round(C.progress*pt)),D&&D.invalidate(),isNaN(Et)||(Et-=Ot.getProperty(X,I.p),Nt-=Ot.getProperty(P,I.p),mo(X,I,Et),mo(Yt,I,Et-($t||0)),mo(P,I,Nt),mo(zt,I,Nt-($t||0))),We&&!wn&&C.update(),u&&!wn&&!ft&&(ft=!0,u(C),ft=!1)}},C.getVelocity=function(){return(et()-jt)/(_n()-ga)*1e3||0},C.endAnimation=function(){aa(C.callbackAnimation),i&&(D?D.progress(1):i.paused()?L||aa(i,C.direction<0,1):aa(i,i.reversed()))},C.labelToScroll=function(wt){return i&&i.labels&&(yt||C.refresh()||yt)+i.labels[wt]/i.duration()*Bt||0},C.getTrailing=function(wt){var qt=re.indexOf(C),Xt=C.direction>0?re.slice(0,qt).reverse():re.slice(qt+1);return(Xn(wt)?Xt.filter(function($t){return $t.vars.preventOverlaps===wt}):Xt).filter(function($t){return C.direction>0?$t.end<=yt:$t.start>=Vt})},C.update=function(wt,qt,Xt){if(!(w&&!Xt&&!wt)){var $t=wn===!0?ut:C.scroll(),Ne=wt?0:($t-yt)/Bt,Jt=Ne<0?0:Ne>1?1:Ne||0,we=C.progress,We,Ae,ge,me,un,Te,hn,ni;if(qt&&(jt=Pt,Pt=w?et():$t,S&&(St=mt,mt=i&&!L?i.totalProgress():Jt)),_&&h&&!mn&&!oo&&hi&&(!Jt&&yt<$t+($t-jt)/(_n()-ga)*_?Jt=1e-4:Jt===1&&Vt>$t+($t-jt)/(_n()-ga)*_&&(Jt=.9999)),Jt!==we&&C.enabled){if(We=C.isActive=!!Jt&&Jt<1,Ae=!!we&&we<1,Te=We!==Ae,un=Te||!!Jt!=!!we,C.direction=Jt>we?1:-1,C.progress=Jt,un&&!mn&&(ge=Jt&&!we?0:Jt===1?1:we===1?2:3,L&&(me=!Te&&U[ge+1]!=="none"&&U[ge+1]||U[ge],ni=i&&(me==="complete"||me==="reset"||me in i))),y&&(Te||ni)&&(ni||d||!i)&&(vn(y)?y(C):C.getTrailing(y).forEach(function(Bi){return Bi.endAnimation()})),L||(D&&!mn&&!oo?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",Jt,i._tTime/i._tDur):(D.vars.totalProgress=Jt,D.invalidate().restart())):i&&i.totalProgress(Jt,!!(mn&&(Rt||wt)))),h){if(wt&&p&&(B.style[p+I.os2]=H),!W)q(xa(vt+pt*Jt));else if(un){if(hn=!wt&&Jt>we&&Vt+1>$t&&$t+1>=Pi(N,I),A)if(!wt&&(We||hn)){var Xe=Yi(h,!0),Ye=$t-yt;uf(h,_e,Xe.top+(I===Ze?Ye:0)+qe,Xe.left+(I===Ze?0:Ye)+qe)}else uf(h,B);Gs(We||hn?R:M),at&&Jt<1&&We||q(vt+(Jt===1&&!hn?pt:0))}}S&&!it.tween&&!mn&&!oo&&gt.restart(!0),o&&(Te||b&&Jt&&(Jt<1||!Gl))&&Ya(o.targets).forEach(function(Bi){return Bi.classList[We||b?"add":"remove"](o.className)}),a&&!L&&!wt&&a(C),un&&!mn?(L&&(ni&&(me==="complete"?i.pause().totalProgress(1):me==="reset"?i.restart(!0).pause():me==="restart"?i.restart(!0):i[me]()),a&&a(C)),(Te||!Gl)&&(c&&Te&&ms(C,c),O[ge]&&ms(C,O[ge]),b&&(Jt===1?C.kill(!1,1):O[ge]=0),Te||(ge=Jt===1?1:3,O[ge]&&ms(C,O[ge]))),v&&!We&&Math.abs(C.getVelocity())>(Ma(v)?v:2500)&&(aa(C.callbackAnimation),D?D.progress(1):aa(i,me==="reverse"?1:!Jt,1))):L&&a&&!mn&&a(C)}if(_t){var Ke=w?$t/w.duration()*(w._caScrollDist||0):$t;j(Ke+(X._isFlipped?1:0)),_t(Ke)}It&&It(-$t/w.duration()*(w._caScrollDist||0))}},C.enable=function(wt,qt){C.enabled||(C.enabled=!0,en(N,"resize",Sa),V||en(N,"scroll",gs),st&&en(r,"refreshInit",st),wt!==!1&&(C.progress=Y=0,Pt=jt=Lt=et()),qt!==!1&&C.refresh())},C.getTween=function(wt){return wt&&it?it.tween:D},C.setPositions=function(wt,qt,Xt,$t){if(w){var Ne=w.scrollTrigger,Jt=w.duration(),we=Ne.end-Ne.start;wt=Ne.start+we*wt/Jt,qt=Ne.start+we*qt/Jt}C.refresh(!1,!1,{start:tf(wt,Xt&&!!C._startClamp),end:tf(qt,Xt&&!!C._endClamp)},$t),C.update()},C.adjustPinSpacing=function(wt){if(rt&&wt){var qt=rt.indexOf(I.d)+1;rt[qt]=parseFloat(rt[qt])+wt+qe,rt[1]=parseFloat(rt[1])+wt+qe,Gs(rt)}},C.disable=function(wt,qt){if(wt!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,qt||D&&D.pause(),ut=0,Ct&&(Ct.uncache=1),st&&tn(r,"refreshInit",st),gt&&(gt.pause(),it.tween&&it.tween.kill()&&(it.tween=0)),!V)){for(var Xt=re.length;Xt--;)if(re[Xt].scroller===N&&re[Xt]!==C)return;tn(N,"resize",Sa),V||tn(N,"scroll",gs)}},C.kill=function(wt,qt){C.disable(wt,qt),D&&!qt&&D.kill(),l&&delete qc[l];var Xt=re.indexOf(C);Xt>=0&&re.splice(Xt,1),Xt===Tn&&jo>0&&Tn--,Xt=0,re.forEach(function($t){return $t.scroller===C.scroller&&(Xt=1)}),Xt||wn||Ar||(C.scroll.rec=0),i&&(i.scrollTrigger=null,wt&&i.revert({kill:!1}),qt||i.kill()),Yt&&[Yt,zt,X,P].forEach(function($t){return $t.parentNode&&$t.parentNode.removeChild($t)}),Na===C&&(Na=0),h&&(Ct&&(Ct.uncache=1),Xt=0,re.forEach(function($t){return $t.pin===h&&Xt++}),Xt||(Ct.spacer=0)),n.onKill&&n.onKill(C)},re.push(C),C.enable(!1,!1),Wt&&Wt(C),i&&i.add&&!Bt){var te=C.update;C.update=function(){C.update=te,ae.cache++,yt||Vt||C.refresh()},Ot.delayedCall(.01,C.update),Bt=.01,yt=Vt=0}else C.refresh();h&&hg()},r.register=function(n){return Ls||(Ot=n||Lp(),Dp()&&window.document&&r.enable(),Ls=va),Ls},r.defaults=function(n){if(n)for(var i in n)ho[i]=n[i];return ho},r.disable=function(n,i){va=0,re.forEach(function(a){return a[i?"kill":"disable"](n)}),tn(se,"wheel",gs),tn(ve,"scroll",gs),clearInterval(ao),tn(ve,"touchcancel",wi),tn(_e,"touchstart",wi),co(tn,ve,"pointerdown,touchstart,mousedown",ef),co(tn,ve,"pointerup,touchend,mouseup",nf),_l.kill(),lo(tn);for(var s=0;s<ae.length;s+=3)uo(tn,ae[s],ae[s+1]),uo(tn,ae[s],ae[s+2])},r.enable=function(){if(se=window,ve=document,Zn=ve.documentElement,_e=ve.body,Ot){if(Ya=Ot.utils.toArray,Da=Ot.utils.clamp,Xc=Ot.core.context||wi,Vl=Ot.core.suppressOverwrites||wi,hh=se.history.scrollRestoration||"auto",Zc=se.pageYOffset||0,Ot.core.globals("ScrollTrigger",r),_e){va=1,Vs=document.createElement("div"),Vs.style.height="100vh",Vs.style.position="absolute",Vp(),rg(),ke.register(Ot),r.isTouch=ke.isTouch,fr=ke.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Wc=ke.isTouch===1,en(se,"wheel",gs),uh=[se,ve,Zn,_e],Ot.matchMedia?(r.matchMedia=function(u){var d=Ot.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},Ot.addEventListener("matchMediaInit",function(){kp(),gh()}),Ot.addEventListener("matchMediaRevert",function(){return zp()}),Ot.addEventListener("matchMedia",function(){jr(0,1),os("matchMedia")}),Ot.matchMedia().add("(orientation: portrait)",function(){return Xl(),Xl})):console.warn("Requires GSAP 3.11.0 or later"),Xl(),en(ve,"scroll",gs);var n=_e.hasAttribute("style"),i=_e.style,s=i.borderTopStyle,a=Ot.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Yi(_e),Ze.m=Math.round(o.top+Ze.sc())||0,An.m=Math.round(o.left+An.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),ao=setInterval(af,250),Ot.delayedCall(.5,function(){return oo=0}),en(ve,"touchcancel",wi),en(_e,"touchstart",wi),co(en,ve,"pointerdown,touchstart,mousedown",ef),co(en,ve,"pointerup,touchend,mouseup",nf),Gc=Ot.utils.checkPrefix("transform"),Ko.push(Gc),Ls=_n(),_l=Ot.delayedCall(.2,jr).pause(),Is=[ve,"visibilitychange",function(){var u=se.innerWidth,d=se.innerHeight;ve.hidden?(Kh=u,Jh=d):(Kh!==u||Jh!==d)&&Sa()},ve,"DOMContentLoaded",jr,se,"load",jr,se,"resize",Sa],lo(en),re.forEach(function(u){return u.enable(0,1)}),l=0;l<ae.length;l+=3)uo(tn,ae[l],ae[l+1]),uo(tn,ae[l],ae[l+2])}else if(ve){var c=function u(){r.enable(),ve.removeEventListener("DOMContentLoaded",u)};ve.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Gl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ao)||(ao=i)&&setInterval(af,i),"ignoreMobileResize"in n&&(Wc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(lo(tn)||lo(en,n.autoRefreshEvents||"none"),Rp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Pn(n),a=ae.indexOf(s),o=ss(s);~a&&ae.splice(a,o?6:2),i&&(o?Ui.unshift(se,i,_e,i,Zn,i):Ui.unshift(s,i))},r.clearMatchMedia=function(n){re.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Xn(n)?Pn(n):n).getBoundingClientRect(),o=a[s?ns:is]*i||0;return s?a.right-o>0&&a.left+o<se.innerWidth:a.bottom-o>0&&a.top+o<se.innerHeight},r.positionInViewport=function(n,i,s){Xn(n)&&(n=Pn(n));var a=n.getBoundingClientRect(),o=a[s?ns:is],l=i==null?o/2:i in vl?vl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/se.innerWidth:(a.top+l)/se.innerHeight},r.killAll=function(n){if(re.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=as.killAll||[];as={},i.forEach(function(s){return s()})}},r})();Zt.version="3.15.1";Zt.saveStyles=function(r){return r?Ya(r).forEach(function(t){if(t&&t.style){var e=Wn.indexOf(t);e>=0&&Wn.splice(e,5),Wn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ot.core.getCache(t),Xc())}}):Wn};Zt.revert=function(r,t){return gh(!r,t)};Zt.create=function(r,t){return new Zt(r,t)};Zt.refresh=function(r){return r?Sa(!0):(Ls||Zt.register())&&jr(!0)};Zt.update=function(r){return++ae.cache&&$i(r===!0?2:0)};Zt.clearScrollMemory=Hp;Zt.maxScroll=function(r,t){return Pi(r,t?An:Ze)};Zt.getScrollFunc=function(r,t){return Lr(Pn(r),t?An:Ze)};Zt.getById=function(r){return qc[r]};Zt.getAll=function(){return re.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Zt.isScrolling=function(){return!!hi};Zt.snapDirectional=_h;Zt.addEventListener=function(r,t){var e=as[r]||(as[r]=[]);~e.indexOf(t)||e.push(t)};Zt.removeEventListener=function(r,t){var e=as[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Zt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var d=[],f=[],h=Ot.delayedCall(i,function(){u(d,f),d=[],f=[]}).pause();return function(p){d.length||h.restart(!0),d.push(p.trigger),f.push(p),s<=d.length&&h.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&vn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return vn(s)&&(s=s(),en(Zt,"refresh",function(){return s=t.batchMax()})),Ya(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(Zt.create(c))}),e};var ff=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},ql=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(ke.isTouch?" pinch-zoom":""):"none",t===Zn&&r(_e,e)},_o={auto:1,scroll:1},_g=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Ot.core.getCache(s),o=_n(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==_e&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(_o[(l=ai(s)).overflowY]||_o[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ss(s)&&(_o[(l=ai(s)).overflowY]||_o[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Wp=function(t,e,n,i){return ke.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&_g,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&en(ve,ke.eventTypes[0],pf,!1,!0)},onDisable:function(){return tn(ve,ke.eventTypes[0],pf,!0)}})},gg=/(input|label|select|textarea)/i,df,pf=function(t){var e=gg.test(t.target.tagName);(e||df)&&(t._gsapAllow=!0,df=e)},vg=function(t){Yr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=Pn(t.target)||Zn,u=Ot.core.globals().ScrollSmoother,d=u&&u.get(),f=fr&&(t.content&&Pn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),h=Lr(c,Ze),p=Lr(c,An),g=1,_=(ke.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,m=0,x=vn(i)?function(){return i(o)}:function(){return i||2.8},b,S,A=Wp(c,t.type,!0,s),E=function(){return S=!1},w=wi,v=wi,y=function(){l=Pi(c,Ze),v=Da(fr?1:0,l),n&&(w=Da(0,Pi(c,An))),b=rs},I=function(){f._gsap.y=xa(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},L=function(){if(S){requestAnimationFrame(E);var F=xa(o.deltaY/2),k=v(h.v-F);if(f&&k!==h.v+h.offset){h.offset=k-h.v;var C=xa((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",h.cacheID=ae.cache,$i()}return!0}h.offset&&I(),S=!0},N,z,V,W,O=function(){y(),N.isActive()&&N.vars.scrollY>l&&(h()>l?N.progress(1)&&h(l):N.resetTo("scrollY",l))};return f&&Ot.set(f,{y:"+=0"}),t.ignoreCheck=function(U){return fr&&U.type==="touchmove"&&L()||g>1.05&&U.type!=="touchstart"||o.isGesturing||U.touches&&U.touches.length>1},t.onPress=function(){S=!1;var U=g;g=xa((se.visualViewport&&se.visualViewport.scale||1)/_),N.pause(),U!==g&&ql(c,g>1.01?!0:n?!1:"x"),z=p(),V=h(),y(),b=rs},t.onRelease=t.onGestureStart=function(U,F){if(h.offset&&I(),!F)W.restart(!0);else{ae.cache++;var k=x(),C,st;n&&(C=p(),st=C+k*.05*-U.velocityX/.227,k*=ff(p,C,st,Pi(c,An)),N.vars.scrollX=w(st)),C=h(),st=C+k*.05*-U.velocityY/.227,k*=ff(h,C,st,Pi(c,Ze)),N.vars.scrollY=v(st),N.invalidate().duration(k).play(.01),(fr&&N.vars.scrollY>=l||C>=l-1)&&Ot.to({},{onUpdate:O,duration:k})}a&&a(U)},t.onWheel=function(){N._ts&&N.pause(),_n()-m>1e3&&(b=0,m=_n())},t.onChange=function(U,F,k,C,st){if(rs!==b&&y(),F&&n&&p(w(C[2]===F?z+(U.startX-U.x):p()+F-C[1])),k){h.offset&&I();var ct=st[2]===k,xt=ct?V+U.startY-U.y:h()+k-st[1],Lt=v(xt);ct&&xt!==Lt&&(V+=Lt-xt),h(Lt)}(k||F)&&$i()},t.onEnable=function(){ql(c,n?!1:"x"),Zt.addEventListener("refresh",O),en(se,"resize",O),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=p.smooth=!1),A.enable()},t.onDisable=function(){ql(c,!0),tn(se,"resize",O),Zt.removeEventListener("refresh",O),A.kill()},t.lockAxis=t.lockAxis!==!1,o=new ke(t),o.iOS=fr,fr&&!h()&&h(1),fr&&Ot.ticker.add(wi),W=o._dc,N=Ot.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Gp(h,h(),function(){return N.pause()})},onUpdate:$i,onComplete:W.vars.onComplete}),o};Zt.sort=function(r){if(vn(r))return re.sort(r);var t=se.pageYOffset||0;return Zt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+se.innerHeight}),re.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Zt.observe=function(r){return new ke(r)};Zt.normalizeScroll=function(r){if(typeof r>"u")return En;if(r===!0&&En)return En.enable();if(r===!1){En&&En.kill(),En=r;return}var t=r instanceof ke?r:vg(r);return En&&En.target===t.target&&En.kill(),ss(t.target)&&(En=t),t};Zt.core={_getVelocityProp:Vc,_inputObserver:Wp,_scrollers:ae,_proxies:Ui,bridge:{ss:function(){hi||os("scrollStart"),hi=_n()},ref:function(){return mn}}};Lp()&&Ot.registerPlugin(Zt);var mf="1.3.27";function Xp(r,t,e){return Math.max(r,Math.min(t,e))}function xg(r,t,e){return(1-e)*r+e*t}function Mg(r,t,e,n){return xg(r,t,1-Math.exp(-e*n))}function Sg(r,t){return(r%t+t)%t}var yg=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const e=Xp(0,this.currentTime/this.duration,1);t=e>=1;const n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Mg(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function bg(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var Eg=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){this.wrapper=r,this.content=t,e&&(this.debouncedResize=bg(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Yp=class{events={};emit(r,...t){const e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}};const Tg=100/6,sr={passive:!1};function _f(r,t){return r===1?Tg:r===2?t:1}var wg=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Yp;constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,sr),this.element.addEventListener("touchstart",this.onTouchStart,sr),this.element.addEventListener("touchmove",this.onTouchMove,sr),this.element.addEventListener("touchend",this.onTouchEnd,sr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,sr),this.element.removeEventListener("touchstart",this.onTouchStart,sr),this.element.removeEventListener("touchmove",this.onTouchMove,sr),this.element.removeEventListener("touchend",this.onTouchEnd,sr)}onTouchStart=r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=_f(n,this.window.width),s=_f(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const gf=r=>Math.min(1,1.001-2**(-10*r));var Ag=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new yg;emitter=new Yp;dimensions;virtualScroll;constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:p=1,autoResize:g=!0,prevent:_,virtualScroll:m,overscroll:x=!0,autoRaf:b=!1,anchors:S=!1,autoToggle:A=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:v=w,stopInertiaOnNavigate:y=!1,respectReducedMotion:I=!0}={}){window.lenisVersion=mf,window.lenis||(window.lenis={}),window.lenis.version=mf,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=gf:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:h,wheelMultiplier:p,autoResize:g,prevent:_,virtualScroll:m,overscroll:x,autoRaf:b,anchors:S,autoToggle:A,allowNestedScroll:E,naiveDimensions:v,stopInertiaOnNavigate:y,respectReducedMotion:I},this.dimensions=new Eg(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new wg(e,{touchMultiplier:h,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}};onPointerDown=r=>{r.button===1&&this.reset()};isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],a=40,o=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=a,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=a;return o||l}onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,h=i&&n.type==="touchend";h&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:h?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=r,h=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let p=null;if(typeof f=="string"?(p=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),p||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(p=f),p){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();h-=this.isHorizontal?S.left:S.top}const g=p.getBoundingClientRect(),_=getComputedStyle(p),m=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),x=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);f=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(b)?0:b)}}if(typeof f=="number"){if(f+=h,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const p=f-this.animatedScroll;p>this.limit/2?f-=this.limit:p<-this.limit/2&&(f+=this.limit)}}else f=Xp(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof a=="number"&&typeof o!="function"?o=gf:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,f,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),g||this.emit(),g&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,a,o,l,c,u,d,f,h,p;if(n-(i.time??0)>2e3){i.time=Date.now();const E=window.getComputedStyle(r);if(i.computedStyle=E,s=["auto","overlay","scroll"].includes(E.overflowX),a=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),u=["auto"].includes(E.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=a,!(s||a))return!1;d=r.scrollWidth,f=r.scrollHeight,h=r.clientWidth,p=r.clientHeight,o=d>h,l=f>p,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=h,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,h=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const g=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let _,m,x,b,S,A;if(g==="horizontal")_=Math.round(r.scrollLeft),m=d-h,x=t,b=s,S=o,A=c;else if(g==="vertical")_=Math.round(r.scrollTop),m=f-p,x=e,b=a,S=l,A=u;else return!1;return!A&&(_>=m||_<=0)?!0:(x>0?_<m:_>0)&&b&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Sg(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};const vf={site:{title:"averybeuth.xyz",name:"averybeuth.xyz",nameHref:"./",contactText:"@avery.beuth",contactHref:"https://instagram.com/avery.beuth",zoomText:"zoom",allPhotosText:"all photos"},photos:{order:["bee-rose-rain.jpg","bee-rose-bokeh.jpg","bee-rose-closeup.jpg","sunflowers.jpg","offerings.jpg","temple-worker.jpg","statue-wires.jpg","seaweed-boat.jpg","taxi.jpg","boat-wake.jpg","corn-snake.jpg","puzzle.jpg","escalator-one.jpg","escalator-crowd.jpg","plane-window.jpg","supertrees-plane.jpg","bougainvillea-sea.jpg","moon-bird.jpg","speed-sign.jpg","sunset-wires.jpg","skyline-night.jpg","durian-market.jpg","satay.jpg","red-light.jpg","garden-projection.jpg","bougainvillea-night.jpg","cigarettes.jpg","butterfly.jpg","bonfire.jpg","fountain-firework.jpg","sparkler.jpg","fireworks.jpg","moon-rain.jpg"],features:["bee-rose-closeup.jpg","seaweed-boat.jpg","plane-window.jpg","sunset-wires.jpg","satay.jpg","bonfire.jpg","moon-rain.jpg"],zoomThrough:"sunset-wires.jpg",alt:{"bee-rose-rain.jpg":"A honeybee and an ant on a rain-wet white rose bud","bee-rose-bokeh.jpg":"A honeybee climbing a rose bud among soft white roses","bee-rose-closeup.jpg":"Close-up of a honeybee on a white rose bud in sunlight","sunflowers.jpg":"An older man photographing a field of sunflowers","offerings.jpg":"Women in sarongs preparing offerings beside the water","temple-worker.jpg":"A worker carrying sacks on a bamboo pole past a Balinese temple gate","statue-wires.jpg":"A statue of two archers framed by tangled power lines","seaweed-boat.jpg":"A seaweed farmer standing in a wooden boat on still water","taxi.jpg":"A man resting in the open boot of a blue taxi","boat-wake.jpg":"A speedboat drawing a white wake across a teal sea","corn-snake.jpg":"Close-up of a corn snake against a warm background","puzzle.jpg":"Scattered jigsaw pieces in inverted colours","escalator-one.jpg":"Two people on escalators seen from directly above","escalator-crowd.jpg":"A crowd riding escalators seen from above","plane-window.jpg":"A plane over the sea seen through a narrow gap in a wall","supertrees-plane.jpg":"A plane passing over the Supertrees in a pink dusk sky","bougainvillea-sea.jpg":"Out-of-focus bougainvillea in front of a hazy sea with a lone boat","moon-bird.jpg":"A bird crossing the rising moon above dark trees","speed-sign.jpg":"A temporary 30 sign glowing against a sunset","sunset-wires.jpg":"A bird silhouetted on power lines against a red sun","skyline-night.jpg":"A city skyline at night over dark water","durian-market.jpg":"A durian seller under bright bulbs at a night market","satay.jpg":"Smoke rising from a satay stall at night","red-light.jpg":"A red pedestrian signal against a textured wall","garden-projection.jpg":"A child in a dark room of projected flowers","bougainvillea-night.jpg":"Bougainvillea lit from below around a streetlight","cigarettes.jpg":"An overflowing pile of cigarette butts","butterfly.jpg":"A butterfly resting on a leaf at night","bonfire.jpg":"A large bonfire against a dusk sky","fountain-firework.jpg":"A fountain firework sparking on the grass in smoke","sparkler.jpg":"Sparkler light drawings in the dark","fireworks.jpg":"Golden fireworks streaking across the night","moon-rain.jpg":"The full moon behind streaks of falling rain"}},scroll:{perPhoto:1,maxTunnelScreens:65,finale:3.4,scrub:.38,lerp:.068,wheelMultiplier:.9,touchMultiplier:1.25,spaceSpeed:1.15},camera:{fov:38,speed:1,fill:.76,hold:.95,zoomHold:.7,pace:[.72,.85,1,1.12,1.2,1.3,.78],shots:["push","sweep","tilt","pullback","zoom","roll","climax"],sweep:2.2,roll:3.2,tilt:4.5,mouseLean:1.6,mouseDamping:1.6,breathing:.22,shake:1},layout:{seed:11,size:2.75,depthSpacing:3.7,spreadX:4.3,spreadY:2.15,jitter:.36,rotation:2.4,yaw:8,zoomGap:12,fogFar:115},look:{background:"#0b0c0f",backgroundLift:"#14161b",tint:.78,tintMax:.17,blur:.42,fogNear:34,fogFar:108,fog:.84,distanceDim:.34,distanceDesat:.32,grain:.018,vignette:.32,halation:.16,halationThreshold:.72,chromatic:55e-5,glow:.042,shadow:.48,radius:.024,dust:64,leaks:.015},ease:{glide:"sine.inOut",travel:"power2.inOut",settle:"power3.inOut",breathe:"sine.inOut",reveal:"expo.inOut",fade:"power1.inOut"},mobile:{camera:{fill:.9,sweep:.9,roll:2,tilt:3,shake:.7,fov:46},layout:{spreadX:1.35,spreadY:1.9,size:2.9,yaw:5},look:{dust:32,chromatic:4e-4,grain:.015},scroll:{scrub:.85}},perf:{maxPixelRatio:2,minPixelRatio:.85,targetFps:58,anisotropy:8}};function xf(r){const t=structuredClone(vf);if(!r)return t;for(const[e,n]of Object.entries(vf.mobile))Object.assign(t[e],n);return t}const ya=r=>{const t=r.replace("#",""),e=parseInt(t.length===3?t.split("").map(n=>n+n).join(""):t,16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]},qp=r=>r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4),Rg=r=>r<=.0031308?r*12.92:1.055*Math.pow(r,1/2.4)-.055,Zp=r=>r.map(qp),Cg=r=>r.map(Rg),xl=r=>Zp(ya(r)),Pg=(r,t=1)=>`rgba(${r.map(e=>Math.round(Math.min(1,Math.max(0,e))*255)).join(",")},${t})`,Ml=(r,t,e)=>[r[0]+(t[0]-r[0])*e,r[1]+(t[1]-r[1])*e,r[2]+(t[2]-r[2])*e],Sl=(r,t)=>[r[0]*t,r[1]*t,r[2]*t],$p=r=>.2126*r[0]+.7152*r[1]+.0722*r[2];function go(r){const[t,e,n]=Zp(r),i=Math.cbrt(.4122214708*t+.5363325363*e+.0514459929*n),s=Math.cbrt(.2119034982*t+.6806995451*e+.1073969566*n),a=Math.cbrt(.0883024619*t+.2817188376*e+.6299787005*n);return[.2104542553*i+.793617785*s-.0040720468*a,1.9779984951*i-2.428592205*s+.4505937099*a,.0259040371*i+.7827717662*s-.808675766*a]}function vo(r,t){const e=go(ya(r.dominant)),n=go(ya(t.dominant)),i=go(ya(r.avg)),s=go(ya(t.avg)),a=Math.hypot(e[0]-n[0],(e[1]-n[1])*1.6,(e[2]-n[2])*1.6),o=Math.hypot(i[0]-s[0],(i[1]-s[1])*1.6,(i[2]-s[2])*1.6);return a*.55+o*.45+Math.abs(r.luminance-t.luminance)*.8}function Dg(r,t){const e=xl(r.dominant),n=xl(r.avg),i=Ml(n,e,.72),s=Math.max($p(i),1e-4),a=Sl(i,1/s),o=qp(t)*(.58+.42*Math.min(1,r.luminance*2));return Sl(Ml([1,1,1],a,.88),o)}function Mf(r,t,e,n){const i=1-Math.exp(-2.5*n);return r[0]+=(t[0]-r[0])*i,r[1]+=(t[1]-r[1])*i,r[2]+=(t[2]-r[2])*i,r}function Lg(r){let t=r>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Qo=Math.PI/180;function Ig(r,t){const e=new Map(r.map(s=>[s.file,s]));let n=t.photos.order.map(s=>e.get(s)).filter(Boolean);const i=r.filter(s=>!n.includes(s));if(n.length<2){const s=[...r].sort((a,o)=>o.luminance-a.luminance);for(n=[s.shift()];s.length;){const a=n[n.length-1];let o=0,l=1/0;s.forEach((c,u)=>{const d=vo(a,c)+Math.max(0,c.luminance-a.luminance)*1.2;d<l&&(l=d,o=u)}),n.push(s.splice(o,1)[0])}return n}for(const s of i){let a=n.length,o=1/0;for(let l=0;l<=n.length;l++){const c=n[l-1],u=n[l],d=(c?vo(c,s):0)+(u?vo(s,u):0)-(c&&u?vo(c,u):0);d<o&&(o=d,a=l)}n.splice(a,0,s)}return n}function Ug(r,t){const e=r.length,n=[0];r.forEach(u=>n.push(n[n.length-1]+u));const i=n[e]/t,s=(u,d)=>(n[d]-n[u]-i)**2,a=Array.from({length:t+1},()=>new Array(e+1).fill(1/0)),o=Array.from({length:t+1},()=>new Array(e+1).fill(0));a[0][0]=0;for(let u=1;u<=t;u++)for(let d=u;d<=e;d++)for(let f=u-1;f<d;f++){const h=a[u-1][f]+s(f,d);h<a[u][d]&&(a[u][d]=h,o[u][d]=f)}const l=[];let c=e;for(let u=t;u>=1;u--){const d=o[u][c];l.unshift([d,c]),c=d}return l}function Fg(r,t,e){const n=r.map(_=>_.photo.aspect),i=r.length,s=i>80?.052:.075,a=Math.max(1,Math.round(Math.sqrt(i/Math.max(.4,t)))),o=Math.max(1,a-5),l=Math.min(i,a+6);let c=null;for(let _=o;_<=l;_++){const m=Ug(n,_),x=m.map(([v,y])=>n.slice(v,y).reduce((I,L)=>I+L,0)+s*(y-v-1)),b=Math.max(...x),S=m.map(([v,y],I)=>(b-s*(y-v-1))/(x[I]-s*(y-v-1))),A=S.reduce((v,y)=>v+y,0)+s*(_-1),E=Math.max(...S)/Math.min(...S),w=Math.abs(Math.log(b/A/t))+(E-1)*.55;(!c||w<c.score)&&(c={score:w,rows:m,rh:S,W:b,H:A})}const{rows:u,rh:d,W:f,H:h}=c,p=[];let g=h/2;return u.forEach(([_,m],x)=>{const b=d[x];let S=-f/2;for(let A=_;A<m;A++){const E=n[A]*b;p[A]={x:S+E/2,y:g-b/2,w:E,h:b,rotZ:(e()-.5)*.5*Qo,dz:(e()-.5)*.16},S+=E+s}g-=b+s}),{slots:p,W:f,H:h}}function Ng(r,t,e){const n=t.layout,i=t.camera,s=Lg(n.seed),a=e.aspect,o=Math.tan(i.fov*Qo/2),l=a<.9,c=r.length;let u=t.photos.features.map(F=>r.findIndex(k=>k.file===F)).filter(F=>F>=0);const d=c>60?Math.min(14,Math.max(8,Math.round(c/22))):Math.max(3,Math.min(8,Math.round(c/5)));if(u.length<d){const F=Math.max(4,Math.floor(c/(d*1.6)));for(let k=0;k<d;k++){const C=Math.min(c-1,Math.round((k+.5)/d*(c-1)));u.every(st=>Math.abs(st-C)>=F)&&u.push(C)}}u=[...new Set(u)].sort((F,k)=>F-k);const f=new Set(u);let h=r.findIndex(F=>F.file===t.photos.zoomThrough);(!f.has(h)||h===u[u.length-1])&&(h=u[Math.min(u.length-2,Math.round(u.length*.55))]);const p=(F,k,C)=>Math.max(k/(2*o*C),F/(2*o*a*C)),g=(F,k)=>Math.min(k/(2*o),F/(2*o*a))*.93,_=c>100?n.depthSpacing*.85:n.depthSpacing,m=[];let x=0,b=s()>.5?1:-1;r.forEach((F,k)=>{const C=F.aspect,st=n.size*Math.sqrt(C),ct=n.size/Math.sqrt(C),xt=f.has(k),Lt=k>0&&f.has(k-1);k>0&&(x-=_*(xt?1.2:Lt?1.38:1)*(1+(s()-.5)*n.jitter*.8),k-1===h&&(x-=n.zoomGap)),b=-b;let Rt,Y;if(xt)Rt=b*n.spreadX*.1,Y=(s()-.5)*n.spreadY*.22;else if(Lt&&!l){const et=m[k-1],it=p(et.w,et.h,i.fill),Ct=et.z-x,Ut=it+Ct;if(et.photo.aspect>=1.1&&st<=et.w*1.15)Rt=et.x+b*Math.min(n.spreadX*.28,.85),Y=et.y+(s()-.5)*n.spreadY*.35;else{const jt=(et.w*.5/it+.045)*Ut+st*.5,yt=Ut*o*a*.86-st*.25;jt<yt?(Rt=et.x+b*jt,Y=(s()-.5)*1.15*n.spreadY):(Rt=et.x+b*.45,Y=et.y+(s()-.5)*.35)}}else{const et=k*2.39996+(s()-.5)*.45,it=.65+.55*s();Rt=Math.cos(et)*(n.spreadX*it+st*(l?.04:.14)),Y=Math.sin(et)*(n.spreadY*it+ct*.08),b=Rt>=0?1:-1}m.push({photo:F,i:k,w:st,h:ct,x:Rt,y:Y,z:x,side:b,feature:xt,rotZ:(s()-.5)*2*n.rotation*Qo*(xt?.25:1),rotY:xt?0:-b*n.yaw*Qo*(.6+.4*s()),layer:s(),seed:s()*100,zoom:k===h,fitD:p(st,ct,i.fill),fadeNear:k===h?[.08,g(st,ct)*.7]:l?[1.5,4.2]:[1.35,3.8]})});const S=u.map(F=>{const k=m[F],C=k.fitD;return{i:F,plane:k,d:C,cover:g(k.w,k.h),cam:{camX:k.x,camY:k.y,camZ:k.z+C,roll:k.rotZ}}}),A=m[c-1],E=l?a*1.04:a*.96,w=Fg(m,E,s),y=(l?22:13.5)/w.H,I=w.W*y,L=w.H*y,N=Math.max(L/(2*o*(l?.78:.82)),I/(2*o*a*(l?.92:.86))),z=m[0].z-4,V=A.z-10,O=S[S.length-1].cam.camZ,U=Math.hypot(I,L)/2;return m.forEach((F,k)=>{const C=w.slots[k],st=C.w*y,ct=C.h*y;F.slot={x:C.x*y,y:C.y*y,dz:C.dz,w:st,h:ct,rotZ:C.rotZ,scale:st/F.w};const xt=F.z<O-.5;F.deep=!xt,F.start=xt?{x:F.x,y:F.y,z:F.z}:{x:F.slot.x*1.45+(s()-.5)*7,y:F.slot.y*1.35+(s()-.5)*4,z:V-20-s()*18},F.delay=xt?0:.08+.58*(Math.hypot(F.slot.x,F.slot.y)/U)+s()*.16,F.openDelay=Math.min(.65,.08+.45*(Math.hypot(F.slot.x,F.slot.y)/U)+k/c*.15)}),{planes:m,features:S,zoomIdx:h,N:c,tanH:o,aspect:a,portrait:l,start:{camX:0,camY:0,camZ:z+N,roll:0},mosaicOpen:{z,W:I,H:L,camZ:z+N,dist:N},mosaic:{z:V,W:I,H:L,camZ:V+N,dist:N}}}const xo=Math.PI/180;function Og(r){return{camX:0,camY:0,camZ:10,yaw:0,pitch:0,roll:0,fov:r.camera.fov,openAssemble:1,assemble:0,dim:.72,text:1}}const Bg=(r,t)=>{const e=Math.min(.9999,Math.max(0,t))*(r.length-1),n=Math.floor(e),i=e-n;return r[n]+(r[n+1]-r[n])*i};function zg(r,t,e){const n=t.ease,i=t.camera,s=t.scroll,a=i.fov,o=xr.timeline({paused:!0}),l=[],c=r.features,u=c.length,d=c.findIndex(O=>O.i===r.zoomIdx),f=r.start;o.set(e,{...f,yaw:0,pitch:0,fov:a,openAssemble:1,assemble:0,dim:.72,text:1},0);const h=(O,U,F,k=n.glide)=>o.to(e,{...O,duration:Math.max(.01,F),ease:k},U),p=1.9;h({text:0},0,.55,n.fade),h({dim:0},0,.85,n.fade),h({openAssemble:0},0,p,n.glide);const g=r.N*s.perPhoto,_=s.maxTunnelScreens?Math.min(g,s.maxTunnelScreens):g,m=u*i.hold+i.zoomHold,x=Math.max(u*1.4,_-m),b=c.map((O,U)=>{const F=U===0?f.camZ:c[U-1].cam.camZ,k=Math.abs(F-O.cam.camZ),C=Bg(i.pace,U/Math.max(1,u-1))*i.speed;return(Math.pow(k,.8)+4)/C}),S=b.reduce((O,U)=>O+U,0),A=b.map(O=>x*O/S);let E=0,w={...f};c.forEach((O,U)=>{const F=U===0?Math.max(A[U],p+.5):A[U],k=O.cam,C=w;let st=i.shots[U%i.shots.length];if(U===0&&(st="push"),st==="zoom"&&U-1!==d&&(st="push"),U-1===d&&(st="zoom"),st==="push")h({camZ:k.camZ},E,F,U===0?n.glide:n.travel),h({camX:k.camX,camY:k.camY},E+F*(U===0?.35:.06),F*(U===0?.58:.84)),h({roll:k.roll},E+F*.25,F*.7),h({fov:a+1.6},E,F*.45),h({fov:a},E+F*.45,F*.55);else if(st==="sweep"||st==="climax"){const xt=st==="climax"?1.35:1,Lt=Math.sign(k.camX-C.camX)||1;h({camZ:k.camZ},E,F,st==="climax"?n.settle:n.travel),h({camX:k.camX+Lt*i.sweep*xt},E,F*.44),h({camX:k.camX},E+F*.44,F*.44,n.settle),h({yaw:-Lt*2.4*xt*xo},E,F*.42),h({yaw:0},E+F*.42,F*.42,n.settle),h({camY:k.camY},E+F*.08,F*.78),h({roll:Lt*(st==="climax"?1.4:.6)*xo},E,F*.44),h({roll:k.roll},E+F*.44,F*.44)}else if(st==="tilt")h({camZ:k.camZ},E,F,n.travel),h({camY:C.camY-1.15},E,F*.42),h({camY:k.camY},E+F*.42,F*.46,n.settle),h({pitch:i.tilt*xo},E+F*.08,F*.4),h({pitch:0},E+F*.48,F*.4,n.settle),h({camX:k.camX},E+F*.05,F*.82),h({roll:k.roll},E+F*.25,F*.6);else if(st==="pullback")h({camZ:C.camZ+3.4},E,F*.3,n.glide),h({fov:a+5},E,F*.32),h({camZ:k.camZ},E+F*.3,F*.7,n.travel),h({fov:a},E+F*.32,F*.62),h({camX:k.camX,camY:k.camY},E+F*.28,F*.58,n.settle),h({roll:k.roll},E+F*.36,F*.52);else if(st==="zoom"){const xt=c[d],Lt=xt.plane.z+xt.cover,Rt=F*.42;h({camZ:Lt},E,Rt,n.glide),h({fov:a-3},E,Rt),h({camZ:Lt-.25},E+Rt,i.zoomHold,n.breathe);const Y=E+Rt+i.zoomHold,et=F-Rt;h({camZ:k.camZ},Y,et,n.travel),h({fov:a},Y,et*.78),h({camX:k.camX,camY:k.camY},Y+et*.3,et*.58,n.settle),h({roll:k.roll},Y+et*.35,et*.55),E+=i.zoomHold}else if(st==="roll"){const xt=k.camX>C.camX?1:-1;h({camZ:k.camZ},E,F,n.travel),h({roll:xt*i.roll*xo},E,F*.45),h({roll:k.roll},E+F*.45,F*.45),h({camX:k.camX,camY:k.camY},E+F*.08,F*.78,n.settle)}E+=F,l.push({t:E,k:U,i:O.i});const ct=i.hold*(U===u-1?1.15:1);h({camZ:k.camZ-O.d*.045},E,ct,n.breathe),h({camX:k.camX+(U%2?.05:-.05)},E,ct,n.breathe),E+=ct,w={...k,camZ:k.camZ-O.d*.045,camX:k.camX+(U%2?.05:-.05),fov:a}});const v=r.mosaic,y=E;h({camZ:v.camZ},y,2.3,n.reveal),h({camX:0,camY:0,roll:0,yaw:0,pitch:0},y+.05,2,n.settle),h({fov:a},y,2.1),h({assemble:1},y,2.35,n.glide),h({dim:.78},y+2.7,.9,n.fade),h({text:1},y+2.95,.85,n.fade),h({camZ:v.camZ+.8},y+2.35,1.55,n.breathe),o.to({},{duration:.01},y+3.9);const I=o.duration(),L=1200,N=Math.min(.95,p*.82/I),z=Math.max(N+.01,(y-.1)/I),V=[];for(let O=0;O<=L;O++){const U=N+(z-N)*(O/L);o.progress(U),V.push({p:U,camZ:e.camZ})}const W=r.planes.map(O=>{const U=O.z+O.fitD;let F=V[0].p,k=1/0;for(let C=0;C<V.length;C++){const st=Math.abs(V[C].camZ-U);st<k&&(k=st,F=V[C].p)}return F});return o.progress(0),{tl:o,marks:l,duration:I,finaleStart:y,photoProgress:W}}const vh="183",kg=0,Sf=1,Hg=2,tl=1,Vg=2,ba=3,Ir=0,Bn=1,qi=2,ji=0,Rr=1,jc=2,yf=3,bf=4,Gg=5,qr=100,Wg=101,Xg=102,Yg=103,qg=104,Zg=200,$g=201,jg=202,Kg=203,Kc=204,Jc=205,Jg=206,Qg=207,t0=208,e0=209,n0=210,i0=211,r0=212,s0=213,a0=214,Qc=0,tu=1,eu=2,Ks=3,nu=4,iu=5,ru=6,su=7,jp=0,o0=1,l0=2,Fi=0,Kp=1,Jp=2,Qp=3,tm=4,em=5,nm=6,im=7,rm=300,ls=301,Js=302,Zl=303,$l=304,Pl=306,au=1e3,Di=1001,ou=1002,on=1003,c0=1004,Mo=1005,ln=1006,jl=1007,yr=1008,li=1009,sm=1010,am=1011,Za=1012,xh=1013,Oi=1014,Li=1015,Si=1016,Mh=1017,Sh=1018,$a=1020,om=35902,lm=35899,cm=1021,um=1022,Mi=1023,er=1026,Kr=1027,hm=1028,yh=1029,Qs=1030,bh=1031,Eh=1033,el=33776,nl=33777,il=33778,rl=33779,lu=35840,cu=35841,uu=35842,hu=35843,fu=36196,du=37492,pu=37496,mu=37488,_u=37489,gu=37490,vu=37491,xu=37808,Mu=37809,Su=37810,yu=37811,bu=37812,Eu=37813,Tu=37814,wu=37815,Au=37816,Ru=37817,Cu=37818,Pu=37819,Du=37820,Lu=37821,Iu=36492,Uu=36494,Fu=36495,Nu=36283,Ou=36284,Bu=36285,zu=36286,u0=3200,h0=0,f0=1,mr="",qn="srgb",cs="srgb-linear",yl="linear",xe="srgb",vs=7680,Ef=519,d0=512,p0=513,m0=514,Th=515,_0=516,g0=517,wh=518,v0=519,Tf=35044,wf="300 es",Ii=2e3,bl=2001;function x0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function El(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function M0(){const r=El("canvas");return r.style.display="block",r}const Af={};function Rf(...r){const t="THREE."+r.shift();console.log(t,...r)}function fm(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Kt(...r){r=fm(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function ue(...r){r=fm(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Tl(...r){const t=r.join(" ");t in Af||(Af[t]=!0,Kt(...r))}function S0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const y0={[Qc]:tu,[eu]:ru,[nu]:su,[Ks]:iu,[tu]:Qc,[ru]:eu,[su]:nu,[iu]:Ks};class ea{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kl=Math.PI/180,ku=180/Math.PI;function Ja(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function oe(r,t,e){return Math.max(t,Math.min(e,r))}function b0(r,t){return(r%t+t)%t}function Jl(r,t,e){return(1-e)*r+e*t}function oa(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Cn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ce{constructor(t=0,e=0){ce.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class na{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],f=s[a+0],h=s[a+1],p=s[a+2],g=s[a+3];if(d!==g||l!==f||c!==h||u!==p){let _=l*f+c*h+u*p+d*g;_<0&&(f=-f,h=-h,p=-p,g=-g,_=-_);let m=1-o;if(_<.9995){const x=Math.acos(_),b=Math.sin(x);m=Math.sin(m*x)/b,o=Math.sin(o*x)/b,l=l*m+f*o,c=c*m+h*o,u=u*m+p*o,d=d*m+g*o}else{l=l*m+f*o,c=c*m+h*o,u=u*m+p*o,d=d*m+g*o;const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],f=s[a+1],h=s[a+2],p=s[a+3];return t[e]=o*p+u*d+l*h-c*f,t[e+1]=l*p+u*f+c*d-o*h,t[e+2]=c*p+u*h+o*f-l*d,t[e+3]=u*p-o*d-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),f=l(n/2),h=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,e=0,n=0){J.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ql.copy(this).projectOnVector(t),this.sub(Ql)}reflect(t){return this.sub(Ql.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ql=new J,Cf=new na;class ee{constructor(t,e,n,i,s,a,o,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],p=n[8],g=i[0],_=i[3],m=i[6],x=i[1],b=i[4],S=i[7],A=i[2],E=i[5],w=i[8];return s[0]=a*g+o*x+l*A,s[3]=a*_+o*b+l*E,s[6]=a*m+o*S+l*w,s[1]=c*g+u*x+d*A,s[4]=c*_+u*b+d*E,s[7]=c*m+u*S+d*w,s[2]=f*g+h*x+p*A,s[5]=f*_+h*b+p*E,s[8]=f*m+h*S+p*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,p=e*d+n*f+i*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return t[0]=d*g,t[1]=(i*c-u*n)*g,t[2]=(o*n-i*a)*g,t[3]=f*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=h*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(tc.makeScale(t,e)),this}rotate(t){return this.premultiply(tc.makeRotation(-t)),this}translate(t,e){return this.premultiply(tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const tc=new ee,Pf=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Df=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E0(){const r={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xe&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(i.r=Ws(i.r),i.g=Ws(i.g),i.b=Ws(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mr?yl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[cs]:{primaries:t,whitePoint:n,transfer:yl,toXYZ:Pf,fromXYZ:Df,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Pf,fromXYZ:Df,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),r}const he=E0();function Ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xs;class T0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xs===void 0&&(xs=El("canvas")),xs.width=t.width,xs.height=t.height;const i=xs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=xs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=El("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ki(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let w0=0;class Ah{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Ja(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ec(i[a].image)):s.push(ec(i[a]))}else s=ec(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ec(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?T0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}let A0=0;const nc=new J;class Mn extends ea{constructor(t=Mn.DEFAULT_IMAGE,e=Mn.DEFAULT_MAPPING,n=Di,i=Di,s=ln,a=yr,o=Mi,l=li,c=Mn.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Ja(),this.name="",this.source=new Ah(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nc).x}get height(){return this.source.getSize(nc).y}get depth(){return this.source.getSize(nc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case au:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case ou:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case au:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case ou:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=rm;Mn.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,n=0,i=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],g=l[2],_=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(p-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(p+_)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,S=(h+1)/2,A=(m+1)/2,E=(u+f)/4,w=(d+g)/4,v=(p+_)/4;return b>S&&b>A?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=E/n,s=w/n):S>A?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=E/i,s=v/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=w/s,i=v/s),this.set(n,i,s,e),this}let x=Math.sqrt((_-p)*(_-p)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(_-p)/x,this.y=(d-g)/x,this.z=(f-u)/x,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R0 extends ea{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},s=new Mn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ah(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends R0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dm extends Mn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class C0 extends Mn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fe{constructor(t,e,n,i,s,a,o,l,c,u,d,f,h,p,g,_){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,d,f,h,p,g,_)}set(t,e,n,i,s,a,o,l,c,u,d,f,h,p,g,_){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=p,m[11]=g,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Ms.setFromMatrixColumn(t,0).length(),s=1/Ms.setFromMatrixColumn(t,1).length(),a=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=a*u,h=a*d,p=o*u,g=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=h+p*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=p+h*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,h=l*d,p=c*u,g=c*d;e[0]=f+g*o,e[4]=p*o-h,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=h*o-p,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,h=l*d,p=c*u,g=c*d;e[0]=f-g*o,e[4]=-a*d,e[8]=p+h*o,e[1]=h+p*o,e[5]=a*u,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,h=a*d,p=o*u,g=o*d;e[0]=l*u,e[4]=p*c-h,e[8]=f*c+g,e[1]=l*d,e[5]=g*c+f,e[9]=h*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,h=a*c,p=o*l,g=o*c;e[0]=l*u,e[4]=g-f*d,e[8]=p*d+h,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=h*d+p,e[10]=f-g*d}else if(t.order==="XZY"){const f=a*l,h=a*c,p=o*l,g=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+g,e[5]=a*u,e[9]=h*d-p,e[2]=p*d-h,e[6]=o*u,e[10]=g*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(P0,t,D0)}lookAt(t,e,n){const i=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),ar.crossVectors(n,Vn),ar.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),ar.crossVectors(n,Vn)),ar.normalize(),So.crossVectors(Vn,ar),i[0]=ar.x,i[4]=So.x,i[8]=Vn.x,i[1]=ar.y,i[5]=So.y,i[9]=Vn.y,i[2]=ar.z,i[6]=So.z,i[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],p=n[2],g=n[6],_=n[10],m=n[14],x=n[3],b=n[7],S=n[11],A=n[15],E=i[0],w=i[4],v=i[8],y=i[12],I=i[1],L=i[5],N=i[9],z=i[13],V=i[2],W=i[6],O=i[10],U=i[14],F=i[3],k=i[7],C=i[11],st=i[15];return s[0]=a*E+o*I+l*V+c*F,s[4]=a*w+o*L+l*W+c*k,s[8]=a*v+o*N+l*O+c*C,s[12]=a*y+o*z+l*U+c*st,s[1]=u*E+d*I+f*V+h*F,s[5]=u*w+d*L+f*W+h*k,s[9]=u*v+d*N+f*O+h*C,s[13]=u*y+d*z+f*U+h*st,s[2]=p*E+g*I+_*V+m*F,s[6]=p*w+g*L+_*W+m*k,s[10]=p*v+g*N+_*O+m*C,s[14]=p*y+g*z+_*U+m*st,s[3]=x*E+b*I+S*V+A*F,s[7]=x*w+b*L+S*W+A*k,s[11]=x*v+b*N+S*O+A*C,s[15]=x*y+b*z+S*U+A*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],h=t[14],p=t[3],g=t[7],_=t[11],m=t[15],x=l*h-c*f,b=o*h-c*d,S=o*f-l*d,A=a*h-c*u,E=a*f-l*u,w=a*d-o*u;return e*(g*x-_*b+m*S)-n*(p*x-_*A+m*E)+i*(p*b-g*A+m*w)-s*(p*S-g*E+_*w)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],h=t[11],p=t[12],g=t[13],_=t[14],m=t[15],x=e*o-n*a,b=e*l-i*a,S=e*c-s*a,A=n*l-i*o,E=n*c-s*o,w=i*c-s*l,v=u*g-d*p,y=u*_-f*p,I=u*m-h*p,L=d*_-f*g,N=d*m-h*g,z=f*m-h*_,V=x*z-b*N+S*L+A*I-E*y+w*v;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/V;return t[0]=(o*z-l*N+c*L)*W,t[1]=(i*N-n*z-s*L)*W,t[2]=(g*w-_*E+m*A)*W,t[3]=(f*E-d*w-h*A)*W,t[4]=(l*I-a*z-c*y)*W,t[5]=(e*z-i*I+s*y)*W,t[6]=(_*S-p*w-m*b)*W,t[7]=(u*w-f*S+h*b)*W,t[8]=(a*N-o*I+c*v)*W,t[9]=(n*I-e*N-s*v)*W,t[10]=(p*E-g*S+m*x)*W,t[11]=(d*S-u*E-h*x)*W,t[12]=(o*y-a*L-l*v)*W,t[13]=(e*L-n*y+i*v)*W,t[14]=(g*b-p*A-_*x)*W,t[15]=(u*A-d*b+f*x)*W,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,p=s*d,g=a*u,_=a*d,m=o*d,x=l*c,b=l*u,S=l*d,A=n.x,E=n.y,w=n.z;return i[0]=(1-(g+m))*A,i[1]=(h+S)*A,i[2]=(p-b)*A,i[3]=0,i[4]=(h-S)*E,i[5]=(1-(f+m))*E,i[6]=(_+x)*E,i[7]=0,i[8]=(p+b)*w,i[9]=(_-x)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Ms.set(i[0],i[1],i[2]).length();const o=Ms.set(i[4],i[5],i[6]).length(),l=Ms.set(i[8],i[9],i[10]).length();s<0&&(a=-a),pi.copy(this);const c=1/a,u=1/o,d=1/l;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=d,pi.elements[9]*=d,pi.elements[10]*=d,e.setFromRotationMatrix(pi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,s,a,o=Ii,l=!1){const c=this.elements,u=2*s/(e-t),d=2*s/(n-i),f=(e+t)/(e-t),h=(n+i)/(n-i);let p,g;if(l)p=s/(a-s),g=a*s/(a-s);else if(o===Ii)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===bl)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Ii,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),h=-(n+i)/(n-i);let p,g;if(l)p=1/(a-s),g=a/(a-s);else if(o===Ii)p=-2/(a-s),g=-(a+s)/(a-s);else if(o===bl)p=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ms=new J,pi=new Fe,P0=new J(0,0,0),D0=new J(1,1,1),ar=new J,So=new J,Vn=new J,Lf=new Fe,If=new na;class nr{constructor(t=0,e=0,n=0,i=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(e){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return If.setFromEuler(this),this.setFromQuaternion(If,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class Rh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let L0=0;const Uf=new J,Ss=new na,zi=new Fe,yo=new J,la=new J,I0=new J,U0=new na,Ff=new J(1,0,0),Nf=new J(0,1,0),Of=new J(0,0,1),Bf={type:"added"},F0={type:"removed"},ys={type:"childadded",child:null},ic={type:"childremoved",child:null};class zn extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const t=new J,e=new nr,n=new na,i=new J(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new ee}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(Ff,t)}rotateY(t){return this.rotateOnAxis(Nf,t)}rotateZ(t){return this.rotateOnAxis(Of,t)}translateOnAxis(t,e){return Uf.copy(t).applyQuaternion(this.quaternion),this.position.add(Uf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ff,t)}translateY(t){return this.translateOnAxis(Nf,t)}translateZ(t){return this.translateOnAxis(Of,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yo.copy(t):yo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(la,yo,this.up):zi.lookAt(yo,la,this.up),this.quaternion.setFromRotationMatrix(zi),i&&(zi.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(zi),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bf),ys.child=t,this.dispatchEvent(ys),ys.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(F0),ic.child=t,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bf),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,t,I0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,U0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),h=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}zn.DEFAULT_UP=new J(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ea extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N0={type:"move"};class rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const _=e.getJointPose(g,n),m=this._getHandJoint(c,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ea;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},bo={h:0,s:0,l:0};function sc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class pe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=b0(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=sc(a,s,t+1/3),this.g=sc(a,s,t),this.b=sc(a,s,t-1/3)}return he.colorSpaceToWorking(this,i),this}setStyle(t,e=qn){function n(s){s!==void 0&&parseFloat(s)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qn){const n=pm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return he.workingToColorSpace(pn.copy(this),t),Math.round(oe(pn.r*255,0,255))*65536+Math.round(oe(pn.g*255,0,255))*256+Math.round(oe(pn.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(pn.copy(this),e);const n=pn.r,i=pn.g,s=pn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=qn){he.workingToColorSpace(pn.copy(this),t);const e=pn.r,n=pn.g,i=pn.b;return t!==qn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(or),this.setHSL(or.h+t,or.s+e,or.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(or),t.getHSL(bo);const n=Jl(or.h,bo.h,e),i=Jl(or.s,bo.s,e),s=Jl(or.l,bo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new pe;pe.NAMES=pm;class zf extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nr,this.environmentIntensity=1,this.environmentRotation=new nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const mi=new J,ki=new J,ac=new J,Hi=new J,bs=new J,Es=new J,kf=new J,oc=new J,lc=new J,cc=new J,uc=new Ie,hc=new Ie,fc=new Ie;class xi{constructor(t=new J,e=new J,n=new J){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mi.subVectors(t,e),i.cross(mi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){mi.subVectors(i,e),ki.subVectors(n,e),ac.subVectors(t,e);const a=mi.dot(mi),o=mi.dot(ki),l=mi.dot(ac),c=ki.dot(ki),u=ki.dot(ac),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,p=(a*u-o*l)*f;return s.set(1-h-p,p,h)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hi.x),l.addScaledVector(a,Hi.y),l.addScaledVector(o,Hi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return uc.setScalar(0),hc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(t,e),hc.fromBufferAttribute(t,n),fc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(uc,s.x),a.addScaledVector(hc,s.y),a.addScaledVector(fc,s.z),a}static isFrontFacing(t,e,n,i){return mi.subVectors(n,e),ki.subVectors(t,e),mi.cross(ki).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),mi.cross(ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return xi.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;bs.subVectors(i,n),Es.subVectors(s,n),oc.subVectors(t,n);const l=bs.dot(oc),c=Es.dot(oc);if(l<=0&&c<=0)return e.copy(n);lc.subVectors(t,i);const u=bs.dot(lc),d=Es.dot(lc);if(u>=0&&d<=u)return e.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(bs,a);cc.subVectors(t,s);const h=bs.dot(cc),p=Es.dot(cc);if(p>=0&&h<=p)return e.copy(s);const g=h*c-l*p;if(g<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Es,o);const _=u*p-h*d;if(_<=0&&d-u>=0&&h-p>=0)return kf.subVectors(s,i),o=(d-u)/(d-u+(h-p)),e.copy(i).addScaledVector(kf,o);const m=1/(_+g+f);return a=g*m,o=f*m,e.copy(n).addScaledVector(bs,a).addScaledVector(Es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Qa{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_i.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_i.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_i.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_i):_i.fromBufferAttribute(s,a),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ca),To.subVectors(this.max,ca),Ts.subVectors(t.a,ca),ws.subVectors(t.b,ca),As.subVectors(t.c,ca),lr.subVectors(ws,Ts),cr.subVectors(As,ws),Br.subVectors(Ts,As);let e=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Br.z,Br.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Br.z,0,-Br.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Br.y,Br.x,0];return!dc(e,Ts,ws,As,To)||(e=[1,0,0,0,1,0,0,0,1],!dc(e,Ts,ws,As,To))?!1:(wo.crossVectors(lr,cr),e=[wo.x,wo.y,wo.z],dc(e,Ts,ws,As,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vi=[new J,new J,new J,new J,new J,new J,new J,new J],_i=new J,Eo=new Qa,Ts=new J,ws=new J,As=new J,lr=new J,cr=new J,Br=new J,ca=new J,To=new J,wo=new J,zr=new J;function dc(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){zr.fromArray(r,s);const o=i.x*Math.abs(zr.x)+i.y*Math.abs(zr.y)+i.z*Math.abs(zr.z),l=t.dot(zr),c=e.dot(zr),u=n.dot(zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const He=new J,Ao=new ce;let O0=0;class In{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tf,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ao.fromBufferAttribute(this,e),Ao.applyMatrix3(t),this.setXY(e,Ao.x,Ao.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=oa(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oa(e,this.array)),e}setX(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oa(e,this.array)),e}setY(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oa(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oa(e,this.array)),e}setW(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array),i=Cn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array),i=Cn(i,this.array),s=Cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tf&&(t.usage=this.usage),t}}class mm extends In{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _m extends In{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ji extends In{constructor(t,e,n){super(new Float32Array(t),e,n)}}const B0=new Qa,ua=new J,pc=new J;class Dl{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):B0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ua.subVectors(t,this.center);const e=ua.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ua,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ua.copy(t.center).add(pc)),this.expandByPoint(ua.copy(t.center).sub(pc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let z0=0;const ii=new Fe,mc=new zn,Rs=new J,Gn=new Qa,ha=new Qa,Qe=new J;class fi extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(x0(t)?_m:mm)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ee().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,n){return ii.makeTranslation(t,e,n),this.applyMatrix4(ii),this}scale(t,e,n){return ii.makeScale(t,e,n),this.applyMatrix4(ii),this}lookAt(t){return mc.lookAt(t),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ji(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ha.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Gn.min,ha.min),Gn.expandByPoint(Qe),Qe.addVectors(Gn.max,ha.max),Gn.expandByPoint(Qe)):(Gn.expandByPoint(ha.min),Gn.expandByPoint(ha.max))}Gn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Qe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Qe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Qe.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(t,c),Qe.add(Rs)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new J,l[v]=new J;const c=new J,u=new J,d=new J,f=new ce,h=new ce,p=new ce,g=new J,_=new J;function m(v,y,I){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,I),f.fromBufferAttribute(s,v),h.fromBufferAttribute(s,y),p.fromBufferAttribute(s,I),u.sub(c),d.sub(c),h.sub(f),p.sub(f);const L=1/(h.x*p.y-p.x*h.y);isFinite(L)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(L),_.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(L),o[v].add(g),o[y].add(g),o[I].add(g),l[v].add(_),l[y].add(_),l[I].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let v=0,y=x.length;v<y;++v){const I=x[v],L=I.start,N=I.count;for(let z=L,V=L+N;z<V;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const b=new J,S=new J,A=new J,E=new J;function w(v){A.fromBufferAttribute(i,v),E.copy(A);const y=o[v];b.copy(y),b.sub(A.multiplyScalar(A.dot(y))).normalize(),S.crossVectors(E,y);const L=S.dot(l[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,L)}for(let v=0,y=x.length;v<y;++v){const I=x[v],L=I.start,N=I.count;for(let z=L,V=L+N;z<V;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new In(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new J,s=new J,a=new J,o=new J,l=new J,c=new J,u=new J,d=new J;if(t)for(let f=0,h=t.count;f<h;f+=3){const p=t.getX(f+0),g=t.getX(f+1),_=t.getX(f+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,h=e.count;f<h;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,p=0;for(let g=0,_=l.length;g<_;g++){o.isInterleavedBufferAttribute?h=l[g]*o.data.stride+o.offset:h=l[g]*u;for(let m=0;m<u;m++)f[p++]=c[h++]}return new In(f,u,d)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=t(f,n);l.push(h)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let k0=0;class to extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=Rr,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Jc,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==Ir&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kc&&(n.blendSrc=this.blendSrc),this.blendDst!==Jc&&(n.blendDst=this.blendDst),this.blendEquation!==qr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ef&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Gi=new J,_c=new J,Ro=new J,ur=new J,gc=new J,Co=new J,vc=new J;class Ch{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gi.copy(this.origin).addScaledVector(this.direction,e),Gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_c.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),ur.copy(this.origin).sub(_c);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ro),o=ur.dot(this.direction),l=-ur.dot(Ro),c=ur.lengthSq(),u=Math.abs(1-a*a);let d,f,h,p;if(u>0)if(d=a*l-o,f=a*o-l,p=s*u,d>=0)if(f>=-p)if(f<=p){const g=1/u;d*=g,f*=g,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(_c).addScaledVector(Ro,f),h}intersectSphere(t,e){Gi.subVectors(t.center,this.origin);const n=Gi.dot(this.direction),i=Gi.dot(Gi)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Gi)!==null}intersectTriangle(t,e,n,i,s){gc.subVectors(e,t),Co.subVectors(n,t),vc.crossVectors(gc,Co);let a=this.direction.dot(vc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ur.subVectors(this.origin,t);const l=o*this.direction.dot(Co.crossVectors(ur,Co));if(l<0)return null;const c=o*this.direction.dot(gc.cross(ur));if(c<0||l+c>a)return null;const u=-o*ur.dot(vc);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gm extends to{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=jp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Hf=new Fe,kr=new Ch,Po=new Dl,Vf=new J,Do=new J,Lo=new J,Io=new J,xc=new J,Uo=new J,Gf=new J,Fo=new J;class Jn extends zn{constructor(t=new fi,e=new gm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(xc.fromBufferAttribute(d,t),a?Uo.addScaledVector(xc,u):Uo.addScaledVector(xc.sub(e),u))}e.add(Uo)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),kr.copy(t.ray).recast(t.near),!(Po.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Po,Vf)===null||kr.origin.distanceToSquared(Vf)>(t.far-t.near)**2))&&(Hf.copy(s).invert(),kr.copy(t.ray).applyMatrix4(Hf),!(n.boundingBox!==null&&kr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,kr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,g=f.length;p<g;p++){const _=f[p],m=a[_.materialIndex],x=Math.max(_.start,h.start),b=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let S=x,A=b;S<A;S+=3){const E=o.getX(S),w=o.getX(S+1),v=o.getX(S+2);i=No(this,m,t,n,c,u,d,E,w,v),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const p=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let _=p,m=g;_<m;_+=3){const x=o.getX(_),b=o.getX(_+1),S=o.getX(_+2);i=No(this,a,t,n,c,u,d,x,b,S),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,g=f.length;p<g;p++){const _=f[p],m=a[_.materialIndex],x=Math.max(_.start,h.start),b=Math.min(l.count,Math.min(_.start+_.count,h.start+h.count));for(let S=x,A=b;S<A;S+=3){const E=S,w=S+1,v=S+2;i=No(this,m,t,n,c,u,d,E,w,v),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const p=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let _=p,m=g;_<m;_+=3){const x=_,b=_+1,S=_+2;i=No(this,a,t,n,c,u,d,x,b,S),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}}}function H0(r,t,e,n,i,s,a,o){let l;if(t.side===Bn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Ir,o),l===null)return null;Fo.copy(o),Fo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Fo);return c<e.near||c>e.far?null:{distance:c,point:Fo.clone(),object:r}}function No(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Do),r.getVertexPosition(l,Lo),r.getVertexPosition(c,Io);const u=H0(r,t,e,n,Do,Lo,Io,Gf);if(u){const d=new J;xi.getBarycoord(Gf,Do,Lo,Io,d),i&&(u.uv=xi.getInterpolatedAttribute(i,o,l,c,d,new ce)),s&&(u.uv1=xi.getInterpolatedAttribute(s,o,l,c,d,new ce)),a&&(u.normal=xi.getInterpolatedAttribute(a,o,l,c,d,new J),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new J,materialIndex:0};xi.getNormal(Do,Lo,Io,f.normal),u.face=f,u.barycoord=d}return u}class V0 extends Mn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=on,u=on,d,f){super(null,a,o,l,c,u,i,s,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mc=new J,G0=new J,W0=new ee;class pr{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Mc.subVectors(n,e).cross(G0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Mc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||W0.getNormalMatrix(t),i=this.coplanarPoint(Mc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Dl,X0=new ce(.5,.5),Oo=new J;class vm{constructor(t=new pr,e=new pr,n=new pr,i=new pr,s=new pr,a=new pr){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ii,n=!1){const i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],p=s[8],g=s[9],_=s[10],m=s[11],x=s[12],b=s[13],S=s[14],A=s[15];if(i[0].setComponents(c-a,h-u,m-p,A-x).normalize(),i[1].setComponents(c+a,h+u,m+p,A+x).normalize(),i[2].setComponents(c+o,h+d,m+g,A+b).normalize(),i[3].setComponents(c-o,h-d,m-g,A-b).normalize(),n)i[4].setComponents(l,f,_,S).normalize(),i[5].setComponents(c-l,h-f,m-_,A-S).normalize();else if(i[4].setComponents(c-l,h-f,m-_,A-S).normalize(),e===Ii)i[5].setComponents(c+l,h+f,m+_,A+S).normalize();else if(e===bl)i[5].setComponents(l,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(t){Hr.center.set(0,0,0);const e=X0.distanceTo(t.center);return Hr.radius=.7071067811865476+e,Hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Oo.x=i.normal.x>0?t.max.x:t.min.x,Oo.y=i.normal.y>0?t.max.y:t.min.y,Oo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Y0 extends to{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wf=new Fe,Hu=new Ch,Bo=new Dl,zo=new J;class q0 extends zn{constructor(t=new fi,e=new Y0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(i),Bo.radius+=s,t.ray.intersectsSphere(Bo)===!1)return;Wf.copy(i).invert(),Hu.copy(t.ray).applyMatrix4(Wf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let p=f,g=h;p<g;p++){const _=c.getX(p);zo.fromBufferAttribute(d,_),Xf(zo,_,l,i,t,e,this)}}else{const f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let p=f,g=h;p<g;p++)zo.fromBufferAttribute(d,p),Xf(zo,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xf(r,t,e,n,i,s,a){const o=Hu.distanceSqToPoint(r);if(o<e){const l=new J;Hu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class xm extends Mn{constructor(t=[],e=ls,n,i,s,a,o,l,c,u){super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ja extends Mn{constructor(t,e,n=Oi,i,s,a,o=on,l=on,c,u=er,d=1){if(u!==er&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ah(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Z0 extends ja{constructor(t,e=Oi,n=ls,i,s,a=on,o=on,l,c=er){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Mm extends Mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class eo extends fi{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;p("z","y","x",-1,-1,n,e,t,a,s,0),p("z","y","x",1,-1,n,e,-t,a,s,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ji(c,3)),this.setAttribute("normal",new Ji(u,3)),this.setAttribute("uv",new Ji(d,2));function p(g,_,m,x,b,S,A,E,w,v,y){const I=S/w,L=A/v,N=S/2,z=A/2,V=E/2,W=w+1,O=v+1;let U=0,F=0;const k=new J;for(let C=0;C<O;C++){const st=C*L-z;for(let ct=0;ct<W;ct++){const xt=ct*I-N;k[g]=xt*x,k[_]=st*b,k[m]=V,c.push(k.x,k.y,k.z),k[g]=0,k[_]=0,k[m]=E>0?1:-1,u.push(k.x,k.y,k.z),d.push(ct/w),d.push(1-C/v),U+=1}}for(let C=0;C<v;C++)for(let st=0;st<w;st++){const ct=f+st+W*C,xt=f+st+W*(C+1),Lt=f+(st+1)+W*(C+1),Rt=f+(st+1)+W*C;l.push(ct,xt,Rt),l.push(xt,Lt,Rt),F+=6}o.addGroup(h,F,y),h+=F,f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class no extends fi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=t/o,f=e/l,h=[],p=[],g=[],_=[];for(let m=0;m<u;m++){const x=m*f-a;for(let b=0;b<c;b++){const S=b*d-s;p.push(S,-x,0),g.push(0,0,1),_.push(b/o),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const b=x+c*m,S=x+c*(m+1),A=x+1+c*(m+1),E=x+1+c*m;h.push(b,S,E),h.push(S,A,E)}this.setIndex(h),this.setAttribute("position",new Ji(p,3)),this.setAttribute("normal",new Ji(g,3)),this.setAttribute("uv",new Ji(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.width,t.height,t.widthSegments,t.heightSegments)}}function ta(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function bn(r){const t={};for(let e=0;e<r.length;e++){const n=ta(r[e]);for(const i in n)t[i]=n[i]}return t}function $0(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Sm(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const j0={clone:ta,merge:bn};var K0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends to{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K0,this.fragmentShader=J0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ta(t.uniforms),this.uniformsGroups=$0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Q0 extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tv extends to{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ev extends to{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ko=new J,Ho=new na,bi=new J;class ym extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ko,Ho,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Ho,bi.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(ko,Ho,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Ho,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new J,Yf=new ce,qf=new ce;class oi extends ym{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ku*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ku*2*Math.atan(Math.tan(Kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hr.x,hr.y).multiplyScalar(-t/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-t/hr.z)}getViewSize(t,e){return this.getViewBounds(t,Yf,qf),e.subVectors(qf,Yf)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Kl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ph extends ym{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Cs=-90,Ps=1;class nv extends zn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new oi(Cs,Ps,t,e);i.layers=this.layers,this.add(i);const s=new oi(Cs,Ps,t,e);s.layers=this.layers,this.add(s);const a=new oi(Cs,Ps,t,e);a.layers=this.layers,this.add(a);const o=new oi(Cs,Ps,t,e);o.layers=this.layers,this.add(o);const l=new oi(Cs,Ps,t,e);l.layers=this.layers,this.add(l);const c=new oi(Cs,Ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class iv extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Zf=new Fe;class rv{constructor(t,e,n=0,i=1/0){this.ray=new Ch(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Rh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ue("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zf),this}intersectObject(t,e=!0,n=[]){return Vu(t,this,n,e),n.sort($f),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Vu(t[i],this,n,e);return n.sort($f),n}}function $f(r,t){return r.distance-t.distance}function Vu(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Vu(s[a],t,e,!0)}}function jf(r,t,e,n){const i=sv(n);switch(e){case cm:return r*t;case hm:return r*t/i.components*i.byteLength;case yh:return r*t/i.components*i.byteLength;case Qs:return r*t*2/i.components*i.byteLength;case bh:return r*t*2/i.components*i.byteLength;case um:return r*t*3/i.components*i.byteLength;case Mi:return r*t*4/i.components*i.byteLength;case Eh:return r*t*4/i.components*i.byteLength;case el:case nl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case il:case rl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cu:case hu:return Math.max(r,16)*Math.max(t,8)/4;case lu:case uu:return Math.max(r,8)*Math.max(t,8)/2;case fu:case du:case mu:case _u:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case pu:case gu:case vu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Su:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case yu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case bu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Eu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Tu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case wu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Au:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ru:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Cu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Pu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Du:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Lu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Iu:case Uu:case Fu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Nu:case Ou:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Bu:case zu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sv(r){switch(r){case li:case sm:return{byteLength:1,components:1};case Za:case am:case Si:return{byteLength:2,components:1};case Mh:case Sh:return{byteLength:2,components:4};case Oi:case xh:case Li:return{byteLength:4,components:1};case om:case lm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);function bm(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function av(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){const p=d[f],g=d[h];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++f,d[f]=g)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){const g=d[h];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var ov=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lv=`#ifdef USE_ALPHAHASH
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
#endif`,cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dv=`#ifdef USE_AOMAP
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
#endif`,pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mv=`#ifdef USE_BATCHING
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
#endif`,_v=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mv=`#ifdef USE_IRIDESCENCE
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
#endif`,Sv=`#ifdef USE_BUMPMAP
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
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pv=`#define PI 3.141592653589793
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
} // validated`,Dv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lv=`vec3 transformedNormal = objectNormal;
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
#endif`,Iv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
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
#endif`,Wv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zv=`#ifdef USE_GRADIENTMAP
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
}`,$v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jv=`uniform bool receiveShadow;
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
#endif`,Qv=`#ifdef USE_ENVMAP
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
#endif`,tx=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rx=`PhysicalMaterial material;
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
#endif`,sx=`uniform sampler2D dfgLUT;
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
}`,ax=`
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
#endif`,ox=`#if defined( RE_IndirectDiffuse )
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
#endif`,lx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ux=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_x=`#if defined( USE_POINTS_UV )
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
#endif`,gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yx=`#ifdef USE_MORPHTARGETS
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
#endif`,bx=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,Tx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cx=`#ifdef USE_NORMALMAP
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
#endif`,Px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xx=`float getShadowMask() {
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
}`,Yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qx=`#ifdef USE_SKINNING
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
#endif`,Zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tM=`#ifdef USE_TRANSMISSION
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oM=`uniform sampler2D t2D;
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`#include <common>
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
}`,dM=`#if DEPTH_PACKING == 3200
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
}`,pM=`#define DISTANCE
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
}`,mM=`#define DISTANCE
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
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`uniform float scale;
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
}`,xM=`uniform vec3 diffuse;
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
}`,MM=`#include <common>
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
}`,SM=`uniform vec3 diffuse;
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
}`,yM=`#define LAMBERT
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
}`,bM=`#define LAMBERT
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
}`,TM=`#define MATCAP
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
}`,wM=`#define NORMAL
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
}`,AM=`#define NORMAL
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
}`,RM=`#define PHONG
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
}`,CM=`#define PHONG
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
}`,PM=`#define STANDARD
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
}`,DM=`#define STANDARD
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
}`,LM=`#define TOON
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
}`,IM=`#define TOON
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
}`,UM=`uniform float size;
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
}`,FM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,OM=`uniform vec3 color;
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
}`,BM=`uniform float rotation;
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
}`,zM=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:ov,alphahash_pars_fragment:lv,alphamap_fragment:cv,alphamap_pars_fragment:uv,alphatest_fragment:hv,alphatest_pars_fragment:fv,aomap_fragment:dv,aomap_pars_fragment:pv,batching_pars_vertex:mv,batching_vertex:_v,begin_vertex:gv,beginnormal_vertex:vv,bsdfs:xv,iridescence_fragment:Mv,bumpmap_pars_fragment:Sv,clipping_planes_fragment:yv,clipping_planes_pars_fragment:bv,clipping_planes_pars_vertex:Ev,clipping_planes_vertex:Tv,color_fragment:wv,color_pars_fragment:Av,color_pars_vertex:Rv,color_vertex:Cv,common:Pv,cube_uv_reflection_fragment:Dv,defaultnormal_vertex:Lv,displacementmap_pars_vertex:Iv,displacementmap_vertex:Uv,emissivemap_fragment:Fv,emissivemap_pars_fragment:Nv,colorspace_fragment:Ov,colorspace_pars_fragment:Bv,envmap_fragment:zv,envmap_common_pars_fragment:kv,envmap_pars_fragment:Hv,envmap_pars_vertex:Vv,envmap_physical_pars_fragment:Qv,envmap_vertex:Gv,fog_vertex:Wv,fog_pars_vertex:Xv,fog_fragment:Yv,fog_pars_fragment:qv,gradientmap_pars_fragment:Zv,lightmap_pars_fragment:$v,lights_lambert_fragment:jv,lights_lambert_pars_fragment:Kv,lights_pars_begin:Jv,lights_toon_fragment:tx,lights_toon_pars_fragment:ex,lights_phong_fragment:nx,lights_phong_pars_fragment:ix,lights_physical_fragment:rx,lights_physical_pars_fragment:sx,lights_fragment_begin:ax,lights_fragment_maps:ox,lights_fragment_end:lx,logdepthbuf_fragment:cx,logdepthbuf_pars_fragment:ux,logdepthbuf_pars_vertex:hx,logdepthbuf_vertex:fx,map_fragment:dx,map_pars_fragment:px,map_particle_fragment:mx,map_particle_pars_fragment:_x,metalnessmap_fragment:gx,metalnessmap_pars_fragment:vx,morphinstance_vertex:xx,morphcolor_vertex:Mx,morphnormal_vertex:Sx,morphtarget_pars_vertex:yx,morphtarget_vertex:bx,normal_fragment_begin:Ex,normal_fragment_maps:Tx,normal_pars_fragment:wx,normal_pars_vertex:Ax,normal_vertex:Rx,normalmap_pars_fragment:Cx,clearcoat_normal_fragment_begin:Px,clearcoat_normal_fragment_maps:Dx,clearcoat_pars_fragment:Lx,iridescence_pars_fragment:Ix,opaque_fragment:Ux,packing:Fx,premultiplied_alpha_fragment:Nx,project_vertex:Ox,dithering_fragment:Bx,dithering_pars_fragment:zx,roughnessmap_fragment:kx,roughnessmap_pars_fragment:Hx,shadowmap_pars_fragment:Vx,shadowmap_pars_vertex:Gx,shadowmap_vertex:Wx,shadowmask_pars_fragment:Xx,skinbase_vertex:Yx,skinning_pars_vertex:qx,skinning_vertex:Zx,skinnormal_vertex:$x,specularmap_fragment:jx,specularmap_pars_fragment:Kx,tonemapping_fragment:Jx,tonemapping_pars_fragment:Qx,transmission_fragment:tM,transmission_pars_fragment:eM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:rM,worldpos_vertex:sM,background_vert:aM,background_frag:oM,backgroundCube_vert:lM,backgroundCube_frag:cM,cube_vert:uM,cube_frag:hM,depth_vert:fM,depth_frag:dM,distance_vert:pM,distance_frag:mM,equirect_vert:_M,equirect_frag:gM,linedashed_vert:vM,linedashed_frag:xM,meshbasic_vert:MM,meshbasic_frag:SM,meshlambert_vert:yM,meshlambert_frag:bM,meshmatcap_vert:EM,meshmatcap_frag:TM,meshnormal_vert:wM,meshnormal_frag:AM,meshphong_vert:RM,meshphong_frag:CM,meshphysical_vert:PM,meshphysical_frag:DM,meshtoon_vert:LM,meshtoon_frag:IM,points_vert:UM,points_frag:FM,shadow_vert:NM,shadow_frag:OM,sprite_vert:BM,sprite_frag:zM},At={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Ai={basic:{uniforms:bn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:bn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:bn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:bn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:bn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new pe(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:bn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:bn([At.points,At.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:bn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:bn([At.common,At.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:bn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:bn([At.sprite,At.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:bn([At.common,At.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:bn([At.lights,At.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Ai.physical={uniforms:bn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Vo={r:0,b:0,g:0},Vr=new nr,kM=new Fe;function HM(r,t,e,n,i,s){const a=new pe(0);let o=i===!0?0:1,l,c,u=null,d=0,f=null;function h(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){const S=x.backgroundBlurriness>0;b=t.get(b,S)}return b}function p(x){let b=!1;const S=h(x);S===null?_(a,o):S&&S.isColor&&(_(S,1),b=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(x,b){const S=h(b);S&&(S.isCubeTexture||S.mapping===Pl)?(c===void 0&&(c=new Jn(new eo(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:ta(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Vr.copy(b.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kM.makeRotationFromEuler(Vr)),c.material.toneMapped=he.getTransfer(S.colorSpace)!==xe,(u!==S||d!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Jn(new no(2,2),new sn({name:"BackgroundMaterial",uniforms:ta(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=he.getTransfer(S.colorSpace)!==xe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function _(x,b){x.getRGB(Vo,Sm(r)),e.buffers.color.setClear(Vo.r,Vo.g,Vo.b,b,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),o=b,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,_(a,o)},render:p,addToRenderList:g,dispose:m}}function VM(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(L,N,z,V,W){let O=!1;const U=d(L,V,z,N);s!==U&&(s=U,c(s.object)),O=h(L,V,z,W),O&&p(L,V,z,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,S(L,N,z,V),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function u(L){return r.deleteVertexArray(L)}function d(L,N,z,V){const W=V.wireframe===!0;let O=n[N.id];O===void 0&&(O={},n[N.id]=O);const U=L.isInstancedMesh===!0?L.id:0;let F=O[U];F===void 0&&(F={},O[U]=F);let k=F[z.id];k===void 0&&(k={},F[z.id]=k);let C=k[W];return C===void 0&&(C=f(l()),k[W]=C),C}function f(L){const N=[],z=[],V=[];for(let W=0;W<e;W++)N[W]=0,z[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:V,object:L,attributes:{},index:null}}function h(L,N,z,V){const W=s.attributes,O=N.attributes;let U=0;const F=z.getAttributes();for(const k in F)if(F[k].location>=0){const st=W[k];let ct=O[k];if(ct===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(ct=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(ct=L.instanceColor)),st===void 0||st.attribute!==ct||ct&&st.data!==ct.data)return!0;U++}return s.attributesNum!==U||s.index!==V}function p(L,N,z,V){const W={},O=N.attributes;let U=0;const F=z.getAttributes();for(const k in F)if(F[k].location>=0){let st=O[k];st===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(st=L.instanceColor));const ct={};ct.attribute=st,st&&st.data&&(ct.data=st.data),W[k]=ct,U++}s.attributes=W,s.attributesNum=U,s.index=V}function g(){const L=s.newAttributes;for(let N=0,z=L.length;N<z;N++)L[N]=0}function _(L){m(L,0)}function m(L,N){const z=s.newAttributes,V=s.enabledAttributes,W=s.attributeDivisors;z[L]=1,V[L]===0&&(r.enableVertexAttribArray(L),V[L]=1),W[L]!==N&&(r.vertexAttribDivisor(L,N),W[L]=N)}function x(){const L=s.newAttributes,N=s.enabledAttributes;for(let z=0,V=N.length;z<V;z++)N[z]!==L[z]&&(r.disableVertexAttribArray(z),N[z]=0)}function b(L,N,z,V,W,O,U){U===!0?r.vertexAttribIPointer(L,N,z,W,O):r.vertexAttribPointer(L,N,z,V,W,O)}function S(L,N,z,V){g();const W=V.attributes,O=z.getAttributes(),U=N.defaultAttributeValues;for(const F in O){const k=O[F];if(k.location>=0){let C=W[F];if(C===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(C=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(C=L.instanceColor)),C!==void 0){const st=C.normalized,ct=C.itemSize,xt=t.get(C);if(xt===void 0)continue;const Lt=xt.buffer,Rt=xt.type,Y=xt.bytesPerElement,et=Rt===r.INT||Rt===r.UNSIGNED_INT||C.gpuType===xh;if(C.isInterleavedBufferAttribute){const it=C.data,Ct=it.stride,Ut=C.offset;if(it.isInstancedInterleavedBuffer){for(let Pt=0;Pt<k.locationSize;Pt++)m(k.location+Pt,it.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Pt=0;Pt<k.locationSize;Pt++)_(k.location+Pt);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let Pt=0;Pt<k.locationSize;Pt++)b(k.location+Pt,ct/k.locationSize,Rt,st,Ct*Y,(Ut+ct/k.locationSize*Pt)*Y,et)}else{if(C.isInstancedBufferAttribute){for(let it=0;it<k.locationSize;it++)m(k.location+it,C.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let it=0;it<k.locationSize;it++)_(k.location+it);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let it=0;it<k.locationSize;it++)b(k.location+it,ct/k.locationSize,Rt,st,ct*Y,ct/k.locationSize*it*Y,et)}}else if(U!==void 0){const st=U[F];if(st!==void 0)switch(st.length){case 2:r.vertexAttrib2fv(k.location,st);break;case 3:r.vertexAttrib3fv(k.location,st);break;case 4:r.vertexAttrib4fv(k.location,st);break;default:r.vertexAttrib1fv(k.location,st)}}}}x()}function A(){y();for(const L in n){const N=n[L];for(const z in N){const V=N[z];for(const W in V){const O=V[W];for(const U in O)u(O[U].object),delete O[U];delete V[W]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;const N=n[L.id];for(const z in N){const V=N[z];for(const W in V){const O=V[W];for(const U in O)u(O[U].object),delete O[U];delete V[W]}}delete n[L.id]}function w(L){for(const N in n){const z=n[N];for(const V in z){const W=z[V];if(W[L.id]===void 0)continue;const O=W[L.id];for(const U in O)u(O[U].object),delete O[U];delete W[L.id]}}}function v(L){for(const N in n){const z=n[N],V=L.isInstancedMesh===!0?L.id:0,W=z[V];if(W!==void 0){for(const O in W){const U=W[O];for(const F in U)u(U[F].object),delete U[F];delete W[O]}delete z[V],Object.keys(z).length===0&&delete n[N]}}}function y(){I(),a=!0,s!==i&&(s=i,c(s.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:y,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:_,disableUnusedAttributes:x}}function GM(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];e.update(h,n,1)}function l(c,u,d,f){if(d===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)a(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g]*f[g];e.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function WM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Mi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const v=w===Si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==li&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Li&&!v)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Kt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:S,maxSamples:A,samples:E}}function XM(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new pr,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){const p=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,m=r.get(d);if(!i||p===null||p.length===0||s&&!_)s?u(null):c();else{const x=s?0:n,b=x*4;let S=m.clippingState||null;l.value=S,S=u(p,f,b,h);for(let A=0;A!==b;++A)S[A]=e[A];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,h,p){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=l.value,p!==!0||_===null){const m=h+g*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(_===null||_.length<m)&&(_=new Float32Array(m));for(let b=0,S=h;b!==g;++b,S+=4)a.copy(d[b]).applyMatrix4(x,o),a.normal.toArray(_,S),_[S+3]=a.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,_}}const br=4,Kf=[.125,.215,.35,.446,.526,.582],Zr=20,YM=256,fa=new Ph,Jf=new pe;let Sc=null,yc=0,bc=0,Ec=!1;const qM=new J;class Qf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=qM}=s;Sc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sc,yc,bc),this._renderer.xr.enabled=Ec,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Si,format:Mi,colorSpace:cs,depthBuffer:!1},i=td(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZM(s)),this._blurMaterial=jM(s,t,e),this._ggxMaterial=$M(s,t,e)}return i}_compileMaterial(t){const e=new Jn(new fi,t);this._renderer.compile(e,fa)}_sceneToCubeUV(t,e,n,i,s){const l=new oi(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Jf),d.toneMapping=Fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jn(new eo,new gm({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,_=g.material;let m=!1;const x=t.background;x?x.isColor&&(_.color.copy(x),t.background=null,m=!0):(_.color.copy(Jf),m=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const A=this._cubeSize;Ds(i,S*A,b>2?A:0,A,A),d.setRenderTarget(i),m&&d.render(g,l),d.render(t,l)}d.toneMapping=h,d.autoClear=f,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ls||t.mapping===Js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ds(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:p}=this,g=this._sizeLods[n],_=3*g*(n>p-br?n-p+br:0),m=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=h,l.mipInt.value=p-e,Ds(s,_,m,3*g,2*g),i.setRenderTarget(s),i.render(o,fa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Ds(t,_,m,3*g,2*g),i.setRenderTarget(t),i.render(o,fa)}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ue("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=c;const f=c.uniforms,h=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Zr-1),g=s/p,_=isFinite(s)?1+Math.floor(u*g):Zr;_>Zr&&Kt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Zr}`);const m=[];let x=0;for(let w=0;w<Zr;++w){const v=w/g,y=Math.exp(-v*v/2);m.push(y),w===0?x+=y:w<_&&(x+=2*y)}for(let w=0;w<m.length;w++)m[w]=m[w]/x;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=p,f.mipInt.value=b-n;const S=this._sizeLods[i],A=3*S*(i>b-br?i-b+br:0),E=4*(this._cubeSize-S);Ds(e,A,E,3*S,2*S),l.setRenderTarget(e),l.render(d,fa)}}function ZM(r){const t=[],e=[],n=[];let i=r;const s=r-br+1+Kf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-br?l=Kf[a-r+br-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,g=3,_=2,m=1,x=new Float32Array(g*p*h),b=new Float32Array(_*p*h),S=new Float32Array(m*p*h);for(let E=0;E<h;E++){const w=E%3*2/3-1,v=E>2?0:-1,y=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];x.set(y,g*p*E),b.set(f,_*p*E);const I=[E,E,E,E,E,E];S.set(I,m*p*E)}const A=new fi;A.setAttribute("position",new In(x,g)),A.setAttribute("uv",new In(b,_)),A.setAttribute("faceIndex",new In(S,m)),n.push(new Jn(A,null)),i>br&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function td(r,t,e){const n=new Rn(r,t,e);return n.texture.mapping=Pl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function $M(r,t,e){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function jM(r,t,e){const n=new Float32Array(Zr),i=new J(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function ed(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

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
	`}class Em extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new xm(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new eo(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:ji});s.uniforms.tEquirect.value=e;const a=new Jn(i,s),o=e.minFilter;return e.minFilter===yr&&(e.minFilter=ln),new nv(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}function KM(r){let t=new WeakMap,e=new WeakMap,n=null;function i(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Zl||h===$l)if(t.has(f)){const p=t.get(f).texture;return o(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const g=new Em(p.height);return g.fromEquirectangularTexture(r,f),t.set(f,g),f.addEventListener("dispose",c),o(g.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const h=f.mapping,p=h===Zl||h===$l,g=h===ls||h===Js;if(p||g){let _=e.get(f);const m=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Qf(r)),_=p?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const x=f.image;return p&&x&&x.height>0||g&&x&&l(x)?(n===null&&(n=new Qf(r)),_=p?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",u),_.texture):null}}}return f}function o(f,h){return h===Zl?f.mapping=ls:h===$l&&(f.mapping=Js),f}function l(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function c(f){const h=f.target;h.removeEventListener("dispose",c);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function JM(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Tl("WebGLRenderer: "+n+" extension not supported."),i}}}function QM(r,t,e,n){const i={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete i[f.id];const h=s.get(f);h&&(t.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)t.update(f[h],r.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,p=d.attributes.position;let g=0;if(p===void 0)return;if(h!==null){const x=h.array;g=h.version;for(let b=0,S=x.length;b<S;b+=3){const A=x[b+0],E=x[b+1],w=x[b+2];f.push(A,E,E,w,w,A)}}else{const x=p.array;g=p.version;for(let b=0,S=x.length/3-1;b<S;b+=3){const A=b+0,E=b+1,w=b+2;f.push(A,E,E,w,w,A)}}const _=new(p.count>=65535?_m:mm)(f,1);_.version=g;const m=s.get(d);m&&t.remove(m),s.set(d,_)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function tS(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){r.drawElements(n,h,s,f*a),e.update(h,n,1)}function c(f,h,p){p!==0&&(r.drawElementsInstanced(n,h,s,f*a,p),e.update(h,n,p))}function u(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];e.update(_,n,1)}function d(f,h,p,g){if(p===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<f.length;m++)c(f[m]/a,h[m],g[m]);else{_.multiDrawElementsInstancedWEBGL(n,h,0,s,f,0,g,0,p);let m=0;for(let x=0;x<p;x++)m+=h[x]*g[x];e.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function eS(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:ue("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function nS(r,t,e){const n=new WeakMap,i=new Ie;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let y=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const h=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let b=0;h===!0&&(b=1),p===!0&&(b=2),g===!0&&(b=3);let S=o.attributes.position.count*b,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const E=new Float32Array(S*A*4*d),w=new dm(E,S,A,d);w.type=Li,w.needsUpdate=!0;const v=b*4;for(let I=0;I<d;I++){const L=_[I],N=m[I],z=x[I],V=S*A*4*I;for(let W=0;W<L.count;W++){const O=W*v;h===!0&&(i.fromBufferAttribute(L,W),E[V+O+0]=i.x,E[V+O+1]=i.y,E[V+O+2]=i.z,E[V+O+3]=0),p===!0&&(i.fromBufferAttribute(N,W),E[V+O+4]=i.x,E[V+O+5]=i.y,E[V+O+6]=i.z,E[V+O+7]=0),g===!0&&(i.fromBufferAttribute(z,W),E[V+O+8]=i.x,E[V+O+9]=i.y,E[V+O+10]=i.z,E[V+O+11]=z.itemSize===4?i.w:1)}}f={count:d,texture:w,size:new ce(S,A)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let h=0;for(let g=0;g<c.length;g++)h+=c[g];const p=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function iS(r,t,e,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,f=t.get(c,d);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const rS={[Kp]:"LINEAR_TONE_MAPPING",[Jp]:"REINHARD_TONE_MAPPING",[Qp]:"CINEON_TONE_MAPPING",[tm]:"ACES_FILMIC_TONE_MAPPING",[nm]:"AGX_TONE_MAPPING",[im]:"NEUTRAL_TONE_MAPPING",[em]:"CUSTOM_TONE_MAPPING"};function sS(r,t,e,n,i){const s=new Rn(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Rn(t,e,{type:Si,depthBuffer:!1,stencilBuffer:!1}),o=new fi;o.setAttribute("position",new Ji([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ji([0,2,0,0,2,0],2));const l=new Q0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Jn(o,l),u=new Ph(-1,1,1,-1,0,1);let d=null,f=null,h=!1,p,g=null,_=[],m=!1;this.setSize=function(x,b){s.setSize(x,b),a.setSize(x,b);for(let S=0;S<_.length;S++){const A=_[S];A.setSize&&A.setSize(x,b)}},this.setEffects=function(x){_=x,m=_.length>0&&_[0].isRenderPass===!0;const b=s.width,S=s.height;for(let A=0;A<_.length;A++){const E=_[A];E.setSize&&E.setSize(b,S)}},this.begin=function(x,b){if(h||x.toneMapping===Fi&&_.length===0)return!1;if(g=b,b!==null){const S=b.width,A=b.height;(s.width!==S||s.height!==A)&&this.setSize(S,A)}return m===!1&&x.setRenderTarget(s),p=x.toneMapping,x.toneMapping=Fi,!0},this.hasRenderPass=function(){return m},this.end=function(x,b){x.toneMapping=p,h=!0;let S=s,A=a;for(let E=0;E<_.length;E++){const w=_[E];if(w.enabled!==!1&&(w.render(x,A,S,b),w.needsSwap!==!1)){const v=S;S=A,A=v}}if(d!==x.outputColorSpace||f!==x.toneMapping){d=x.outputColorSpace,f=x.toneMapping,l.defines={},he.getTransfer(d)===xe&&(l.defines.SRGB_TRANSFER="");const E=rS[f];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(g),x.render(c,u),g=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Tm=new Mn,Gu=new ja(1,1),wm=new dm,Am=new C0,Rm=new xm,id=[],rd=[],sd=new Float32Array(16),ad=new Float32Array(9),od=new Float32Array(4);function ia(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=id[i];if(s===void 0&&(s=new Float32Array(i),id[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function $e(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function je(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Il(r,t){let e=rd[t];e===void 0&&(e=new Int32Array(t),rd[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function aS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function oS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2fv(this.addr,t),je(e,t)}}function lS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;r.uniform3fv(this.addr,t),je(e,t)}}function cS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4fv(this.addr,t),je(e,t)}}function uS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if($e(e,n))return;od.set(n),r.uniformMatrix2fv(this.addr,!1,od),je(e,n)}}function hS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if($e(e,n))return;ad.set(n),r.uniformMatrix3fv(this.addr,!1,ad),je(e,n)}}function fS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if($e(e,n))return;sd.set(n),r.uniformMatrix4fv(this.addr,!1,sd),je(e,n)}}function dS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function pS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2iv(this.addr,t),je(e,t)}}function mS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3iv(this.addr,t),je(e,t)}}function _S(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4iv(this.addr,t),je(e,t)}}function gS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function vS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2uiv(this.addr,t),je(e,t)}}function xS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3uiv(this.addr,t),je(e,t)}}function MS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4uiv(this.addr,t),je(e,t)}}function SS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Gu.compareFunction=e.isReversedDepthBuffer()?wh:Th,s=Gu):s=Tm,e.setTexture2D(t||s,i)}function yS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Am,i)}function bS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Rm,i)}function ES(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||wm,i)}function TS(r){switch(r){case 5126:return aS;case 35664:return oS;case 35665:return lS;case 35666:return cS;case 35674:return uS;case 35675:return hS;case 35676:return fS;case 5124:case 35670:return dS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return _S;case 5125:return gS;case 36294:return vS;case 36295:return xS;case 36296:return MS;case 35678:case 36198:case 36298:case 36306:case 35682:return SS;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return bS;case 36289:case 36303:case 36311:case 36292:return ES}}function wS(r,t){r.uniform1fv(this.addr,t)}function AS(r,t){const e=ia(t,this.size,2);r.uniform2fv(this.addr,e)}function RS(r,t){const e=ia(t,this.size,3);r.uniform3fv(this.addr,e)}function CS(r,t){const e=ia(t,this.size,4);r.uniform4fv(this.addr,e)}function PS(r,t){const e=ia(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function DS(r,t){const e=ia(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function LS(r,t){const e=ia(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function IS(r,t){r.uniform1iv(this.addr,t)}function US(r,t){r.uniform2iv(this.addr,t)}function FS(r,t){r.uniform3iv(this.addr,t)}function NS(r,t){r.uniform4iv(this.addr,t)}function OS(r,t){r.uniform1uiv(this.addr,t)}function BS(r,t){r.uniform2uiv(this.addr,t)}function zS(r,t){r.uniform3uiv(this.addr,t)}function kS(r,t){r.uniform4uiv(this.addr,t)}function HS(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),je(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Gu:a=Tm;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function VS(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Am,s[a])}function GS(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Rm,s[a])}function WS(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||wm,s[a])}function XS(r){switch(r){case 5126:return wS;case 35664:return AS;case 35665:return RS;case 35666:return CS;case 35674:return PS;case 35675:return DS;case 35676:return LS;case 5124:case 35670:return IS;case 35667:case 35671:return US;case 35668:case 35672:return FS;case 35669:case 35673:return NS;case 5125:return OS;case 36294:return BS;case 36295:return zS;case 36296:return kS;case 35678:case 36198:case 36298:case 36306:case 35682:return HS;case 35679:case 36299:case 36307:return VS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return WS}}class YS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=TS(e.type)}}class qS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=XS(e.type)}}class ZS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function ld(r,t){r.seq.push(t),r.map[t.id]=t}function $S(r,t,e){const n=r.name,i=n.length;for(Tc.lastIndex=0;;){const s=Tc.exec(n),a=Tc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ld(e,c===void 0?new YS(o,r,t):new qS(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new ZS(o),ld(e,d)),e=d}}}class sl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);$S(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function cd(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const jS=37297;let KS=0;function JS(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ud=new ee;function QS(r){he._getMatrix(ud,he.workingColorSpace,r);const t=`mat3( ${ud.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case yl:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function hd(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+JS(r.getShaderSource(t),o)}else return s}function ty(r,t){const e=QS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const ey={[Kp]:"Linear",[Jp]:"Reinhard",[Qp]:"Cineon",[tm]:"ACESFilmic",[nm]:"AgX",[im]:"Neutral",[em]:"Custom"};function ny(r,t){const e=ey[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Go=new J;function iy(){he.getLuminanceCoefficients(Go);const r=Go.x.toFixed(4),t=Go.y.toFixed(4),e=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ry(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function sy(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ay(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ta(r){return r!==""}function fd(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dd(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(r){return r.replace(oy,cy)}const ly=new Map;function cy(r,t){let e=ne[t];if(e===void 0){const n=ly.get(t);if(n!==void 0)e=ne[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wu(e)}const uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(r){return r.replace(uy,hy)}function hy(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function md(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const fy={[tl]:"SHADOWMAP_TYPE_PCF",[ba]:"SHADOWMAP_TYPE_VSM"};function dy(r){return fy[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const py={[ls]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[Pl]:"ENVMAP_TYPE_CUBE_UV"};function my(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":py[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const _y={[Js]:"ENVMAP_MODE_REFRACTION"};function gy(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":_y[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vy={[jp]:"ENVMAP_BLENDING_MULTIPLY",[o0]:"ENVMAP_BLENDING_MIX",[l0]:"ENVMAP_BLENDING_ADD"};function xy(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vy[r.combine]||"ENVMAP_BLENDING_NONE"}function My(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sy(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=dy(e),c=my(e),u=gy(e),d=xy(e),f=My(e),h=ry(e),p=sy(s),g=i.createProgram();let _,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ta).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ta).join(`
`),m.length>0&&(m+=`
`)):(_=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),m=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?ne.tonemapping_pars_fragment:"",e.toneMapping!==Fi?ny("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,ty("linearToOutputTexel",e.outputColorSpace),iy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ta).join(`
`)),a=Wu(a),a=fd(a,e),a=dd(a,e),o=Wu(o),o=fd(o,e),o=dd(o,e),a=pd(a),o=pd(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=x+_+a,S=x+m+o,A=cd(i,i.VERTEX_SHADER,b),E=cd(i,i.FRAGMENT_SHADER,S);i.attachShader(g,A),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(L){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g)||"",z=i.getShaderInfoLog(A)||"",V=i.getShaderInfoLog(E)||"",W=N.trim(),O=z.trim(),U=V.trim();let F=!0,k=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,E);else{const C=hd(i,A,"vertex"),st=hd(i,E,"fragment");ue("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+C+`
`+st)}else W!==""?Kt("WebGLProgram: Program Info Log:",W):(O===""||U==="")&&(k=!1);k&&(L.diagnostics={runnable:F,programLog:W,vertexShader:{log:O,prefix:_},fragmentShader:{log:U,prefix:m}})}i.deleteShader(A),i.deleteShader(E),v=new sl(i,g),y=ay(i,g)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(g,jS)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=KS++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=E,this}let yy=0;class by{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ey(t),e.set(t,n)),n}}class Ey{constructor(t){this.id=yy++,this.code=t,this.usedTimes=0}}function Ty(r,t,e,n,i,s){const a=new Rh,o=new by,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,y,I,L,N){const z=L.fog,V=N.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,U=t.get(v.envMap||W,O),F=U&&U.mapping===Pl?U.image.height:null,k=h[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&Kt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const C=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,st=C!==void 0?C.length:0;let ct=0;V.morphAttributes.position!==void 0&&(ct=1),V.morphAttributes.normal!==void 0&&(ct=2),V.morphAttributes.color!==void 0&&(ct=3);let xt,Lt,Rt,Y;if(k){const Dt=Ai[k];xt=Dt.vertexShader,Lt=Dt.fragmentShader}else xt=v.vertexShader,Lt=v.fragmentShader,o.update(v),Rt=o.getVertexShaderID(v),Y=o.getFragmentShaderID(v);const et=r.getRenderTarget(),it=r.state.buffers.depth.getReversed(),Ct=N.isInstancedMesh===!0,Ut=N.isBatchedMesh===!0,Pt=!!v.map,jt=!!v.matcap,yt=!!U,Vt=!!v.aoMap,Yt=!!v.lightMap,zt=!!v.bumpMap,X=!!v.normalMap,P=!!v.displacementMap,ht=!!v.emissiveMap,ft=!!v.metalnessMap,Bt=!!v.roughnessMap,Mt=v.anisotropy>0,R=v.clearcoat>0,M=v.dispersion>0,B=v.iridescence>0,Q=v.sheen>0,tt=v.transmission>0,q=Mt&&!!v.anisotropyMap,vt=R&&!!v.clearcoatMap,pt=R&&!!v.clearcoatNormalMap,H=R&&!!v.clearcoatRoughnessMap,rt=B&&!!v.iridescenceMap,j=B&&!!v.iridescenceThicknessMap,at=Q&&!!v.sheenColorMap,_t=Q&&!!v.sheenRoughnessMap,dt=!!v.specularMap,mt=!!v.specularColorMap,St=!!v.specularIntensityMap,D=tt&&!!v.transmissionMap,lt=tt&&!!v.thicknessMap,ot=!!v.gradientMap,gt=!!v.alphaMap,ut=v.alphaTest>0,nt=!!v.alphaHash,It=!!v.extensions;let Wt=Fi;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Wt=r.toneMapping);const fe={shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:xt,fragmentShader:Lt,defines:v.defines,customVertexShaderID:Rt,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ut,batchingColor:Ut&&N._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&N.instanceColor!==null,instancingMorph:Ct&&N.morphTexture!==null,outputColorSpace:et===null?r.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:cs,alphaToCoverage:!!v.alphaToCoverage,map:Pt,matcap:jt,envMap:yt,envMapMode:yt&&U.mapping,envMapCubeUVHeight:F,aoMap:Vt,lightMap:Yt,bumpMap:zt,normalMap:X,displacementMap:P,emissiveMap:ht,normalMapObjectSpace:X&&v.normalMapType===f0,normalMapTangentSpace:X&&v.normalMapType===h0,metalnessMap:ft,roughnessMap:Bt,anisotropy:Mt,anisotropyMap:q,clearcoat:R,clearcoatMap:vt,clearcoatNormalMap:pt,clearcoatRoughnessMap:H,dispersion:M,iridescence:B,iridescenceMap:rt,iridescenceThicknessMap:j,sheen:Q,sheenColorMap:at,sheenRoughnessMap:_t,specularMap:dt,specularColorMap:mt,specularIntensityMap:St,transmission:tt,transmissionMap:D,thicknessMap:lt,gradientMap:ot,opaque:v.transparent===!1&&v.blending===Rr&&v.alphaToCoverage===!1,alphaMap:gt,alphaTest:ut,alphaHash:nt,combine:v.combine,mapUv:Pt&&p(v.map.channel),aoMapUv:Vt&&p(v.aoMap.channel),lightMapUv:Yt&&p(v.lightMap.channel),bumpMapUv:zt&&p(v.bumpMap.channel),normalMapUv:X&&p(v.normalMap.channel),displacementMapUv:P&&p(v.displacementMap.channel),emissiveMapUv:ht&&p(v.emissiveMap.channel),metalnessMapUv:ft&&p(v.metalnessMap.channel),roughnessMapUv:Bt&&p(v.roughnessMap.channel),anisotropyMapUv:q&&p(v.anisotropyMap.channel),clearcoatMapUv:vt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:pt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:j&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:at&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:_t&&p(v.sheenRoughnessMap.channel),specularMapUv:dt&&p(v.specularMap.channel),specularColorMapUv:mt&&p(v.specularColorMap.channel),specularIntensityMapUv:St&&p(v.specularIntensityMap.channel),transmissionMapUv:D&&p(v.transmissionMap.channel),thicknessMapUv:lt&&p(v.thicknessMap.channel),alphaMapUv:gt&&p(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(X||Mt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(Pt||gt),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&X===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:it,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:ct,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Pt&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===xe,decodeVideoTextureEmissive:ht&&v.emissiveMap.isVideoTexture===!0&&he.getTransfer(v.emissiveMap.colorSpace)===xe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===qi,flipSided:v.side===Bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:It&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&v.extensions.multiDraw===!0||Ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function _(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)y.push(I),y.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(m(y,v),x(y,v),y.push(r.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function m(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function x(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){const y=h[v.type];let I;if(y){const L=Ai[y];I=j0.clone(L.uniforms)}else I=v.uniforms;return I}function S(v,y){let I=u.get(y);return I!==void 0?++I.usedTimes:(I=new Sy(r,y,v,i),c.push(I),u.set(y,I)),I}function A(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:S,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:w}}function wy(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Ay(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function _d(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function gd(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,p,g,_,m){let x=r[t];return x===void 0?(x={id:f.id,object:f,geometry:h,material:p,materialVariant:a(f),groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[t]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=p,x.materialVariant=a(f),x.groupOrder=g,x.renderOrder=f.renderOrder,x.z=_,x.group=m),t++,x}function l(f,h,p,g,_,m){const x=o(f,h,p,g,_,m);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):e.push(x)}function c(f,h,p,g,_,m){const x=o(f,h,p,g,_,m);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):e.unshift(x)}function u(f,h){e.length>1&&e.sort(f||Ay),n.length>1&&n.sort(h||_d),i.length>1&&i.sort(h||_d)}function d(){for(let f=t,h=r.length;f<h;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function Ry(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new gd,r.set(n,[a])):i>=s.length?(a=new gd,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Cy(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new J,color:new pe};break;case"SpotLight":e={position:new J,direction:new J,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=e,e}}}function Py(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Dy=0;function Ly(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Iy(r){const t=new Cy,e=Py(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);const i=new J,s=new Fe,a=new Fe;function o(c){let u=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let h=0,p=0,g=0,_=0,m=0,x=0,b=0,S=0,A=0,E=0,w=0;c.sort(Ly);for(let y=0,I=c.length;y<I;y++){const L=c[y],N=L.color,z=L.intensity,V=L.distance;let W=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Qs?W=L.shadow.map.texture:W=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=N.r*z,d+=N.g*z,f+=N.b*z;else if(L.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(L.sh.coefficients[O],z);w++}else if(L.isDirectionalLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const U=L.shadow,F=e.get(L);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,n.directionalShadow[h]=F,n.directionalShadowMap[h]=W,n.directionalShadowMatrix[h]=L.shadow.matrix,x++}n.directional[h]=O,h++}else if(L.isSpotLight){const O=t.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(N).multiplyScalar(z),O.distance=V,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,n.spot[g]=O;const U=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,U.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[g]=U.matrix,L.castShadow){const F=e.get(L);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,n.spotShadow[g]=F,n.spotShadowMap[g]=W,S++}g++}else if(L.isRectAreaLight){const O=t.get(L);O.color.copy(N).multiplyScalar(z),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=O,_++}else if(L.isPointLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){const U=L.shadow,F=e.get(L);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,F.shadowCameraNear=U.camera.near,F.shadowCameraFar=U.camera.far,n.pointShadow[p]=F,n.pointShadowMap[p]=W,n.pointShadowMatrix[p]=L.shadow.matrix,b++}n.point[p]=O,p++}else if(L.isHemisphereLight){const O=t.get(L);O.skyColor.copy(L.color).multiplyScalar(z),O.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[m]=O,m++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==h||v.pointLength!==p||v.spotLength!==g||v.rectAreaLength!==_||v.hemiLength!==m||v.numDirectionalShadows!==x||v.numPointShadows!==b||v.numSpotShadows!==S||v.numSpotMaps!==A||v.numLightProbes!==w)&&(n.directional.length=h,n.spot.length=g,n.rectArea.length=_,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,v.directionalLength=h,v.pointLength=p,v.spotLength=g,v.rectAreaLength=_,v.hemiLength=m,v.numDirectionalShadows=x,v.numPointShadows=b,v.numSpotShadows=S,v.numSpotMaps=A,v.numLightProbes=w,n.version=Dy++)}function l(c,u){let d=0,f=0,h=0,p=0,g=0;const _=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const b=c[m];if(b.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(_),d++}else if(b.isSpotLight){const S=n.spot[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(_),h++}else if(b.isRectAreaLight){const S=n.rectArea[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),a.identity(),s.copy(b.matrixWorld),s.premultiply(_),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),f++}else if(b.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(_),g++}}}return{setup:o,setupView:l,state:n}}function vd(r){const t=new Iy(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Uy(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new vd(r),t.set(i,[o])):s>=a.length?(o=new vd(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ny=`uniform sampler2D shadow_pass;
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
}`,Oy=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],By=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],xd=new Fe,da=new J,wc=new J;function zy(r,t,e){let n=new vm;const i=new ce,s=new ce,a=new Ie,o=new tv,l=new ev,c={},u=e.maxTextureSize,d={[Ir]:Bn,[Bn]:Ir,[qi]:qi},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Fy,fragmentShader:Ny}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const p=new fi;p.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Jn(p,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl;let m=this.type;this.render=function(E,w,v){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;this.type===Vg&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tl);const y=r.getRenderTarget(),I=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ji),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=m!==this.type;z&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(W=>W.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,W=E.length;V<W;V++){const O=E[V],U=O.shadow;if(U===void 0){Kt("WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const F=U.getFrameExtents();i.multiply(F),s.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/F.x),i.x=s.x*F.x,U.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/F.y),i.y=s.y*F.y,U.mapSize.y=s.y));const k=r.state.buffers.depth.getReversed();if(U.camera._reversedDepth=k,U.map===null||z===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===ba){if(O.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Rn(i.x,i.y,{format:Qs,type:Si,minFilter:ln,magFilter:ln,generateMipmaps:!1}),U.map.texture.name=O.name+".shadowMap",U.map.depthTexture=new ja(i.x,i.y,Li),U.map.depthTexture.name=O.name+".shadowMapDepth",U.map.depthTexture.format=er,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=on,U.map.depthTexture.magFilter=on}else O.isPointLight?(U.map=new Em(i.x),U.map.depthTexture=new Z0(i.x,Oi)):(U.map=new Rn(i.x,i.y),U.map.depthTexture=new ja(i.x,i.y,Oi)),U.map.depthTexture.name=O.name+".shadowMap",U.map.depthTexture.format=er,this.type===tl?(U.map.depthTexture.compareFunction=k?wh:Th,U.map.depthTexture.minFilter=ln,U.map.depthTexture.magFilter=ln):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=on,U.map.depthTexture.magFilter=on);U.camera.updateProjectionMatrix()}const C=U.map.isWebGLCubeRenderTarget?6:1;for(let st=0;st<C;st++){if(U.map.isWebGLCubeRenderTarget)r.setRenderTarget(U.map,st),r.clear();else{st===0&&(r.setRenderTarget(U.map),r.clear());const ct=U.getViewport(st);a.set(s.x*ct.x,s.y*ct.y,s.x*ct.z,s.y*ct.w),N.viewport(a)}if(O.isPointLight){const ct=U.camera,xt=U.matrix,Lt=O.distance||ct.far;Lt!==ct.far&&(ct.far=Lt,ct.updateProjectionMatrix()),da.setFromMatrixPosition(O.matrixWorld),ct.position.copy(da),wc.copy(ct.position),wc.add(Oy[st]),ct.up.copy(By[st]),ct.lookAt(wc),ct.updateMatrixWorld(),xt.makeTranslation(-da.x,-da.y,-da.z),xd.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),U._frustum.setFromProjectionMatrix(xd,ct.coordinateSystem,ct.reversedDepth)}else U.updateMatrices(O);n=U.getFrustum(),S(w,v,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===ba&&x(U,v),U.needsUpdate=!1}m=this.type,_.needsUpdate=!1,r.setRenderTarget(y,I,L)};function x(E,w){const v=t.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Rn(i.x,i.y,{format:Qs,type:Si})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,v,f,g,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,v,h,g,null)}function b(E,w,v,y){let I=null;const L=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)I=L;else if(I=v.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=I.uuid,z=w.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let W=V[z];W===void 0&&(W=I.clone(),V[z]=W,w.addEventListener("dispose",A)),I=W}if(I.visible=w.visible,I.wireframe=w.wireframe,y===ba?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:d[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const N=r.properties.get(I);N.light=v}return I}function S(E,w,v,y,I){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===ba)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const z=t.update(E),V=E.material;if(Array.isArray(V)){const W=z.groups;for(let O=0,U=W.length;O<U;O++){const F=W[O],k=V[F.materialIndex];if(k&&k.visible){const C=b(E,k,y,I);E.onBeforeShadow(r,E,w,v,z,C,F),r.renderBufferDirect(v,null,z,C,E,F),E.onAfterShadow(r,E,w,v,z,C,F)}}}else if(V.visible){const W=b(E,V,y,I);E.onBeforeShadow(r,E,w,v,z,W,null),r.renderBufferDirect(v,null,z,W,E,null),E.onAfterShadow(r,E,w,v,z,W,null)}}const N=E.children;for(let z=0,V=N.length;z<V;z++)S(N[z],w,v,y,I)}function A(E){E.target.removeEventListener("dispose",A);for(const v in c){const y=c[v],I=E.target.uuid;I in y&&(y[I].dispose(),delete y[I])}}}function ky(r,t){function e(){let D=!1;const lt=new Ie;let ot=null;const gt=new Ie(0,0,0,0);return{setMask:function(ut){ot!==ut&&!D&&(r.colorMask(ut,ut,ut,ut),ot=ut)},setLocked:function(ut){D=ut},setClear:function(ut,nt,It,Wt,fe){fe===!0&&(ut*=Wt,nt*=Wt,It*=Wt),lt.set(ut,nt,It,Wt),gt.equals(lt)===!1&&(r.clearColor(ut,nt,It,Wt),gt.copy(lt))},reset:function(){D=!1,ot=null,gt.set(-1,0,0,0)}}}function n(){let D=!1,lt=!1,ot=null,gt=null,ut=null;return{setReversed:function(nt){if(lt!==nt){const It=t.get("EXT_clip_control");nt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),lt=nt;const Wt=ut;ut=null,this.setClear(Wt)}},getReversed:function(){return lt},setTest:function(nt){nt?et(r.DEPTH_TEST):it(r.DEPTH_TEST)},setMask:function(nt){ot!==nt&&!D&&(r.depthMask(nt),ot=nt)},setFunc:function(nt){if(lt&&(nt=y0[nt]),gt!==nt){switch(nt){case Qc:r.depthFunc(r.NEVER);break;case tu:r.depthFunc(r.ALWAYS);break;case eu:r.depthFunc(r.LESS);break;case Ks:r.depthFunc(r.LEQUAL);break;case nu:r.depthFunc(r.EQUAL);break;case iu:r.depthFunc(r.GEQUAL);break;case ru:r.depthFunc(r.GREATER);break;case su:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}gt=nt}},setLocked:function(nt){D=nt},setClear:function(nt){ut!==nt&&(ut=nt,lt&&(nt=1-nt),r.clearDepth(nt))},reset:function(){D=!1,ot=null,gt=null,ut=null,lt=!1}}}function i(){let D=!1,lt=null,ot=null,gt=null,ut=null,nt=null,It=null,Wt=null,fe=null;return{setTest:function(Dt){D||(Dt?et(r.STENCIL_TEST):it(r.STENCIL_TEST))},setMask:function(Dt){lt!==Dt&&!D&&(r.stencilMask(Dt),lt=Dt)},setFunc:function(Dt,kt,te){(ot!==Dt||gt!==kt||ut!==te)&&(r.stencilFunc(Dt,kt,te),ot=Dt,gt=kt,ut=te)},setOp:function(Dt,kt,te){(nt!==Dt||It!==kt||Wt!==te)&&(r.stencilOp(Dt,kt,te),nt=Dt,It=kt,Wt=te)},setLocked:function(Dt){D=Dt},setClear:function(Dt){fe!==Dt&&(r.clearStencil(Dt),fe=Dt)},reset:function(){D=!1,lt=null,ot=null,gt=null,ut=null,nt=null,It=null,Wt=null,fe=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],p=null,g=!1,_=null,m=null,x=null,b=null,S=null,A=null,E=null,w=new pe(0,0,0),v=0,y=!1,I=null,L=null,N=null,z=null,V=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,U=0;const F=r.getParameter(r.VERSION);F.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(F)[1]),O=U>=1):F.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),O=U>=2);let k=null,C={};const st=r.getParameter(r.SCISSOR_BOX),ct=r.getParameter(r.VIEWPORT),xt=new Ie().fromArray(st),Lt=new Ie().fromArray(ct);function Rt(D,lt,ot,gt){const ut=new Uint8Array(4),nt=r.createTexture();r.bindTexture(D,nt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let It=0;It<ot;It++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(lt,0,r.RGBA,1,1,gt,0,r.RGBA,r.UNSIGNED_BYTE,ut):r.texImage2D(lt+It,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ut);return nt}const Y={};Y[r.TEXTURE_2D]=Rt(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=Rt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=Rt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=Rt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(r.DEPTH_TEST),a.setFunc(Ks),zt(!1),X(Sf),et(r.CULL_FACE),Vt(ji);function et(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function it(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Ct(D,lt){return d[D]!==lt?(r.bindFramebuffer(D,lt),d[D]=lt,D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=lt),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=lt),!0):!1}function Ut(D,lt){let ot=h,gt=!1;if(D){ot=f.get(lt),ot===void 0&&(ot=[],f.set(lt,ot));const ut=D.textures;if(ot.length!==ut.length||ot[0]!==r.COLOR_ATTACHMENT0){for(let nt=0,It=ut.length;nt<It;nt++)ot[nt]=r.COLOR_ATTACHMENT0+nt;ot.length=ut.length,gt=!0}}else ot[0]!==r.BACK&&(ot[0]=r.BACK,gt=!0);gt&&r.drawBuffers(ot)}function Pt(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const jt={[qr]:r.FUNC_ADD,[Wg]:r.FUNC_SUBTRACT,[Xg]:r.FUNC_REVERSE_SUBTRACT};jt[Yg]=r.MIN,jt[qg]=r.MAX;const yt={[Zg]:r.ZERO,[$g]:r.ONE,[jg]:r.SRC_COLOR,[Kc]:r.SRC_ALPHA,[n0]:r.SRC_ALPHA_SATURATE,[t0]:r.DST_COLOR,[Jg]:r.DST_ALPHA,[Kg]:r.ONE_MINUS_SRC_COLOR,[Jc]:r.ONE_MINUS_SRC_ALPHA,[e0]:r.ONE_MINUS_DST_COLOR,[Qg]:r.ONE_MINUS_DST_ALPHA,[i0]:r.CONSTANT_COLOR,[r0]:r.ONE_MINUS_CONSTANT_COLOR,[s0]:r.CONSTANT_ALPHA,[a0]:r.ONE_MINUS_CONSTANT_ALPHA};function Vt(D,lt,ot,gt,ut,nt,It,Wt,fe,Dt){if(D===ji){g===!0&&(it(r.BLEND),g=!1);return}if(g===!1&&(et(r.BLEND),g=!0),D!==Gg){if(D!==_||Dt!==y){if((m!==qr||S!==qr)&&(r.blendEquation(r.FUNC_ADD),m=qr,S=qr),Dt)switch(D){case Rr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jc:r.blendFunc(r.ONE,r.ONE);break;case yf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ue("WebGLState: Invalid blending: ",D);break}else switch(D){case Rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case yf:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bf:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",D);break}x=null,b=null,A=null,E=null,w.set(0,0,0),v=0,_=D,y=Dt}return}ut=ut||lt,nt=nt||ot,It=It||gt,(lt!==m||ut!==S)&&(r.blendEquationSeparate(jt[lt],jt[ut]),m=lt,S=ut),(ot!==x||gt!==b||nt!==A||It!==E)&&(r.blendFuncSeparate(yt[ot],yt[gt],yt[nt],yt[It]),x=ot,b=gt,A=nt,E=It),(Wt.equals(w)===!1||fe!==v)&&(r.blendColor(Wt.r,Wt.g,Wt.b,fe),w.copy(Wt),v=fe),_=D,y=!1}function Yt(D,lt){D.side===qi?it(r.CULL_FACE):et(r.CULL_FACE);let ot=D.side===Bn;lt&&(ot=!ot),zt(ot),D.blending===Rr&&D.transparent===!1?Vt(ji):Vt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const gt=D.stencilWrite;o.setTest(gt),gt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ht(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?et(r.SAMPLE_ALPHA_TO_COVERAGE):it(r.SAMPLE_ALPHA_TO_COVERAGE)}function zt(D){I!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),I=D)}function X(D){D!==kg?(et(r.CULL_FACE),D!==L&&(D===Sf?r.cullFace(r.BACK):D===Hg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):it(r.CULL_FACE),L=D}function P(D){D!==N&&(O&&r.lineWidth(D),N=D)}function ht(D,lt,ot){D?(et(r.POLYGON_OFFSET_FILL),(z!==lt||V!==ot)&&(z=lt,V=ot,a.getReversed()&&(lt=-lt),r.polygonOffset(lt,ot))):it(r.POLYGON_OFFSET_FILL)}function ft(D){D?et(r.SCISSOR_TEST):it(r.SCISSOR_TEST)}function Bt(D){D===void 0&&(D=r.TEXTURE0+W-1),k!==D&&(r.activeTexture(D),k=D)}function Mt(D,lt,ot){ot===void 0&&(k===null?ot=r.TEXTURE0+W-1:ot=k);let gt=C[ot];gt===void 0&&(gt={type:void 0,texture:void 0},C[ot]=gt),(gt.type!==D||gt.texture!==lt)&&(k!==ot&&(r.activeTexture(ot),k=ot),r.bindTexture(D,lt||Y[D]),gt.type=D,gt.texture=lt)}function R(){const D=C[k];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(D){ue("WebGLState:",D)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(D){ue("WebGLState:",D)}}function Q(){try{r.texSubImage2D(...arguments)}catch(D){ue("WebGLState:",D)}}function tt(){try{r.texSubImage3D(...arguments)}catch(D){ue("WebGLState:",D)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(D){ue("WebGLState:",D)}}function vt(){try{r.compressedTexSubImage3D(...arguments)}catch(D){ue("WebGLState:",D)}}function pt(){try{r.texStorage2D(...arguments)}catch(D){ue("WebGLState:",D)}}function H(){try{r.texStorage3D(...arguments)}catch(D){ue("WebGLState:",D)}}function rt(){try{r.texImage2D(...arguments)}catch(D){ue("WebGLState:",D)}}function j(){try{r.texImage3D(...arguments)}catch(D){ue("WebGLState:",D)}}function at(D){xt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),xt.copy(D))}function _t(D){Lt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Lt.copy(D))}function dt(D,lt){let ot=c.get(lt);ot===void 0&&(ot=new WeakMap,c.set(lt,ot));let gt=ot.get(D);gt===void 0&&(gt=r.getUniformBlockIndex(lt,D.name),ot.set(D,gt))}function mt(D,lt){const gt=c.get(lt).get(D);l.get(lt)!==gt&&(r.uniformBlockBinding(lt,gt,D.__bindingPointIndex),l.set(lt,gt))}function St(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},k=null,C={},d={},f=new WeakMap,h=[],p=null,g=!1,_=null,m=null,x=null,b=null,S=null,A=null,E=null,w=new pe(0,0,0),v=0,y=!1,I=null,L=null,N=null,z=null,V=null,xt.set(0,0,r.canvas.width,r.canvas.height),Lt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:et,disable:it,bindFramebuffer:Ct,drawBuffers:Ut,useProgram:Pt,setBlending:Vt,setMaterial:Yt,setFlipSided:zt,setCullFace:X,setLineWidth:P,setPolygonOffset:ht,setScissorTest:ft,activeTexture:Bt,bindTexture:Mt,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:B,texImage2D:rt,texImage3D:j,updateUBOMapping:dt,uniformBlockBinding:mt,texStorage2D:pt,texStorage3D:H,texSubImage2D:Q,texSubImage3D:tt,compressedTexSubImage2D:q,compressedTexSubImage3D:vt,scissor:at,viewport:_t,reset:St}}function Hy(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,M){return h?new OffscreenCanvas(R,M):El("canvas")}function g(R,M,B){let Q=1;const tt=Mt(R);if((tt.width>B||tt.height>B)&&(Q=B/Math.max(tt.width,tt.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(Q*tt.width),vt=Math.floor(Q*tt.height);d===void 0&&(d=p(q,vt));const pt=M?p(q,vt):d;return pt.width=q,pt.height=vt,pt.getContext("2d").drawImage(R,0,0,q,vt),Kt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+q+"x"+vt+")."),pt}else return"data"in R&&Kt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function _(R){return R.generateMipmaps}function m(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(R,M,B,Q,tt=!1){if(R!==null){if(r[R]!==void 0)return r[R];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===r.RED&&(B===r.FLOAT&&(q=r.R32F),B===r.HALF_FLOAT&&(q=r.R16F),B===r.UNSIGNED_BYTE&&(q=r.R8)),M===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.R8UI),B===r.UNSIGNED_SHORT&&(q=r.R16UI),B===r.UNSIGNED_INT&&(q=r.R32UI),B===r.BYTE&&(q=r.R8I),B===r.SHORT&&(q=r.R16I),B===r.INT&&(q=r.R32I)),M===r.RG&&(B===r.FLOAT&&(q=r.RG32F),B===r.HALF_FLOAT&&(q=r.RG16F),B===r.UNSIGNED_BYTE&&(q=r.RG8)),M===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.RG8UI),B===r.UNSIGNED_SHORT&&(q=r.RG16UI),B===r.UNSIGNED_INT&&(q=r.RG32UI),B===r.BYTE&&(q=r.RG8I),B===r.SHORT&&(q=r.RG16I),B===r.INT&&(q=r.RG32I)),M===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.RGB8UI),B===r.UNSIGNED_SHORT&&(q=r.RGB16UI),B===r.UNSIGNED_INT&&(q=r.RGB32UI),B===r.BYTE&&(q=r.RGB8I),B===r.SHORT&&(q=r.RGB16I),B===r.INT&&(q=r.RGB32I)),M===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),B===r.UNSIGNED_INT&&(q=r.RGBA32UI),B===r.BYTE&&(q=r.RGBA8I),B===r.SHORT&&(q=r.RGBA16I),B===r.INT&&(q=r.RGBA32I)),M===r.RGB&&(B===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),M===r.RGBA){const vt=tt?yl:he.getTransfer(Q);B===r.FLOAT&&(q=r.RGBA32F),B===r.HALF_FLOAT&&(q=r.RGBA16F),B===r.UNSIGNED_BYTE&&(q=vt===xe?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(R,M){let B;return R?M===null||M===Oi||M===$a?B=r.DEPTH24_STENCIL8:M===Li?B=r.DEPTH32F_STENCIL8:M===Za&&(B=r.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Oi||M===$a?B=r.DEPTH_COMPONENT24:M===Li?B=r.DEPTH_COMPONENT32F:M===Za&&(B=r.DEPTH_COMPONENT16),B}function A(R,M){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function E(R){const M=R.target;M.removeEventListener("dispose",E),v(M),M.isVideoTexture&&u.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),I(M)}function v(R){const M=n.get(R);if(M.__webglInit===void 0)return;const B=R.source,Q=f.get(B);if(Q){const tt=Q[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&y(R),Object.keys(Q).length===0&&f.delete(B)}n.remove(R)}function y(R){const M=n.get(R);r.deleteTexture(M.__webglTexture);const B=R.source,Q=f.get(B);delete Q[M.__cacheKey],a.memory.textures--}function I(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let tt=0;tt<M.__webglFramebuffer[Q].length;tt++)r.deleteFramebuffer(M.__webglFramebuffer[Q][tt]);else r.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[Q]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let Q=0,tt=B.length;Q<tt;Q++){const q=n.get(B[Q]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(B[Q])}n.remove(R)}let L=0;function N(){L=0}function z(){const R=L;return R>=i.maxTextures&&Kt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function V(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function W(R,M){const B=n.get(R);if(R.isVideoTexture&&ft(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const Q=R.image;if(Q===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,R,M);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+M)}function O(R,M){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Y(B,R,M);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+M)}function U(R,M){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Y(B,R,M);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+M)}function F(R,M){const B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){et(B,R,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+M)}const k={[au]:r.REPEAT,[Di]:r.CLAMP_TO_EDGE,[ou]:r.MIRRORED_REPEAT},C={[on]:r.NEAREST,[c0]:r.NEAREST_MIPMAP_NEAREST,[Mo]:r.NEAREST_MIPMAP_LINEAR,[ln]:r.LINEAR,[jl]:r.LINEAR_MIPMAP_NEAREST,[yr]:r.LINEAR_MIPMAP_LINEAR},st={[d0]:r.NEVER,[v0]:r.ALWAYS,[p0]:r.LESS,[Th]:r.LEQUAL,[m0]:r.EQUAL,[wh]:r.GEQUAL,[_0]:r.GREATER,[g0]:r.NOTEQUAL};function ct(R,M){if(M.type===Li&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===jl||M.magFilter===Mo||M.magFilter===yr||M.minFilter===ln||M.minFilter===jl||M.minFilter===Mo||M.minFilter===yr)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,k[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,k[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,k[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,C[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,C[M.minFilter]),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,st[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===on||M.minFilter!==Mo&&M.minFilter!==yr||M.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function xt(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",E));const Q=M.source;let tt=f.get(Q);tt===void 0&&(tt={},f.set(Q,tt));const q=V(M);if(q!==R.__cacheKey){tt[q]===void 0&&(tt[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[q].usedTimes++;const vt=tt[R.__cacheKey];vt!==void 0&&(tt[R.__cacheKey].usedTimes--,vt.usedTimes===0&&y(M)),R.__cacheKey=q,R.__webglTexture=tt[q].texture}return B}function Lt(R,M,B){return Math.floor(Math.floor(R/B)/M)}function Rt(R,M,B,Q){const q=R.updateRanges;if(q.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,B,Q,M.data);else{q.sort((j,at)=>j.start-at.start);let vt=0;for(let j=1;j<q.length;j++){const at=q[vt],_t=q[j],dt=at.start+at.count,mt=Lt(_t.start,M.width,4),St=Lt(at.start,M.width,4);_t.start<=dt+1&&mt===St&&Lt(_t.start+_t.count-1,M.width,4)===mt?at.count=Math.max(at.count,_t.start+_t.count-at.start):(++vt,q[vt]=_t)}q.length=vt+1;const pt=r.getParameter(r.UNPACK_ROW_LENGTH),H=r.getParameter(r.UNPACK_SKIP_PIXELS),rt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let j=0,at=q.length;j<at;j++){const _t=q[j],dt=Math.floor(_t.start/4),mt=Math.ceil(_t.count/4),St=dt%M.width,D=Math.floor(dt/M.width),lt=mt,ot=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,St),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),e.texSubImage2D(r.TEXTURE_2D,0,St,D,lt,ot,B,Q,M.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,pt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,H),r.pixelStorei(r.UNPACK_SKIP_ROWS,rt)}}function Y(R,M,B){let Q=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=r.TEXTURE_3D);const tt=xt(R,M),q=M.source;e.bindTexture(Q,R.__webglTexture,r.TEXTURE0+B);const vt=n.get(q);if(q.version!==vt.__version||tt===!0){e.activeTexture(r.TEXTURE0+B);const pt=he.getPrimaries(he.workingColorSpace),H=M.colorSpace===mr?null:he.getPrimaries(M.colorSpace),rt=M.colorSpace===mr||pt===H?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let j=g(M.image,!1,i.maxTextureSize);j=Bt(M,j);const at=s.convert(M.format,M.colorSpace),_t=s.convert(M.type);let dt=b(M.internalFormat,at,_t,M.colorSpace,M.isVideoTexture);ct(Q,M);let mt;const St=M.mipmaps,D=M.isVideoTexture!==!0,lt=vt.__version===void 0||tt===!0,ot=q.dataReady,gt=A(M,j);if(M.isDepthTexture)dt=S(M.format===Kr,M.type),lt&&(D?e.texStorage2D(r.TEXTURE_2D,1,dt,j.width,j.height):e.texImage2D(r.TEXTURE_2D,0,dt,j.width,j.height,0,at,_t,null));else if(M.isDataTexture)if(St.length>0){D&&lt&&e.texStorage2D(r.TEXTURE_2D,gt,dt,St[0].width,St[0].height);for(let ut=0,nt=St.length;ut<nt;ut++)mt=St[ut],D?ot&&e.texSubImage2D(r.TEXTURE_2D,ut,0,0,mt.width,mt.height,at,_t,mt.data):e.texImage2D(r.TEXTURE_2D,ut,dt,mt.width,mt.height,0,at,_t,mt.data);M.generateMipmaps=!1}else D?(lt&&e.texStorage2D(r.TEXTURE_2D,gt,dt,j.width,j.height),ot&&Rt(M,j,at,_t)):e.texImage2D(r.TEXTURE_2D,0,dt,j.width,j.height,0,at,_t,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){D&&lt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,dt,St[0].width,St[0].height,j.depth);for(let ut=0,nt=St.length;ut<nt;ut++)if(mt=St[ut],M.format!==Mi)if(at!==null)if(D){if(ot)if(M.layerUpdates.size>0){const It=jf(mt.width,mt.height,M.format,M.type);for(const Wt of M.layerUpdates){const fe=mt.data.subarray(Wt*It/mt.data.BYTES_PER_ELEMENT,(Wt+1)*It/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,Wt,mt.width,mt.height,1,at,fe)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,mt.width,mt.height,j.depth,at,mt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ut,dt,mt.width,mt.height,j.depth,0,mt.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ot&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,mt.width,mt.height,j.depth,at,_t,mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ut,dt,mt.width,mt.height,j.depth,0,at,_t,mt.data)}else{D&&lt&&e.texStorage2D(r.TEXTURE_2D,gt,dt,St[0].width,St[0].height);for(let ut=0,nt=St.length;ut<nt;ut++)mt=St[ut],M.format!==Mi?at!==null?D?ot&&e.compressedTexSubImage2D(r.TEXTURE_2D,ut,0,0,mt.width,mt.height,at,mt.data):e.compressedTexImage2D(r.TEXTURE_2D,ut,dt,mt.width,mt.height,0,mt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ot&&e.texSubImage2D(r.TEXTURE_2D,ut,0,0,mt.width,mt.height,at,_t,mt.data):e.texImage2D(r.TEXTURE_2D,ut,dt,mt.width,mt.height,0,at,_t,mt.data)}else if(M.isDataArrayTexture)if(D){if(lt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,dt,j.width,j.height,j.depth),ot)if(M.layerUpdates.size>0){const ut=jf(j.width,j.height,M.format,M.type);for(const nt of M.layerUpdates){const It=j.data.subarray(nt*ut/j.data.BYTES_PER_ELEMENT,(nt+1)*ut/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,nt,j.width,j.height,1,at,_t,It)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,at,_t,j.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,dt,j.width,j.height,j.depth,0,at,_t,j.data);else if(M.isData3DTexture)D?(lt&&e.texStorage3D(r.TEXTURE_3D,gt,dt,j.width,j.height,j.depth),ot&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,at,_t,j.data)):e.texImage3D(r.TEXTURE_3D,0,dt,j.width,j.height,j.depth,0,at,_t,j.data);else if(M.isFramebufferTexture){if(lt)if(D)e.texStorage2D(r.TEXTURE_2D,gt,dt,j.width,j.height);else{let ut=j.width,nt=j.height;for(let It=0;It<gt;It++)e.texImage2D(r.TEXTURE_2D,It,dt,ut,nt,0,at,_t,null),ut>>=1,nt>>=1}}else if(St.length>0){if(D&&lt){const ut=Mt(St[0]);e.texStorage2D(r.TEXTURE_2D,gt,dt,ut.width,ut.height)}for(let ut=0,nt=St.length;ut<nt;ut++)mt=St[ut],D?ot&&e.texSubImage2D(r.TEXTURE_2D,ut,0,0,at,_t,mt):e.texImage2D(r.TEXTURE_2D,ut,dt,at,_t,mt);M.generateMipmaps=!1}else if(D){if(lt){const ut=Mt(j);e.texStorage2D(r.TEXTURE_2D,gt,dt,ut.width,ut.height)}ot&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,at,_t,j)}else e.texImage2D(r.TEXTURE_2D,0,dt,at,_t,j);_(M)&&m(Q),vt.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function et(R,M,B){if(M.image.length!==6)return;const Q=xt(R,M),tt=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const q=n.get(tt);if(tt.version!==q.__version||Q===!0){e.activeTexture(r.TEXTURE0+B);const vt=he.getPrimaries(he.workingColorSpace),pt=M.colorSpace===mr?null:he.getPrimaries(M.colorSpace),H=M.colorSpace===mr||vt===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);const rt=M.isCompressedTexture||M.image[0].isCompressedTexture,j=M.image[0]&&M.image[0].isDataTexture,at=[];for(let nt=0;nt<6;nt++)!rt&&!j?at[nt]=g(M.image[nt],!0,i.maxCubemapSize):at[nt]=j?M.image[nt].image:M.image[nt],at[nt]=Bt(M,at[nt]);const _t=at[0],dt=s.convert(M.format,M.colorSpace),mt=s.convert(M.type),St=b(M.internalFormat,dt,mt,M.colorSpace),D=M.isVideoTexture!==!0,lt=q.__version===void 0||Q===!0,ot=tt.dataReady;let gt=A(M,_t);ct(r.TEXTURE_CUBE_MAP,M);let ut;if(rt){D&&lt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,St,_t.width,_t.height);for(let nt=0;nt<6;nt++){ut=at[nt].mipmaps;for(let It=0;It<ut.length;It++){const Wt=ut[It];M.format!==Mi?dt!==null?D?ot&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,0,0,Wt.width,Wt.height,dt,Wt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,St,Wt.width,Wt.height,0,Wt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,0,0,Wt.width,Wt.height,dt,mt,Wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,St,Wt.width,Wt.height,0,dt,mt,Wt.data)}}}else{if(ut=M.mipmaps,D&&lt){ut.length>0&&gt++;const nt=Mt(at[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,St,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(j){D?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,at[nt].width,at[nt].height,dt,mt,at[nt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,St,at[nt].width,at[nt].height,0,dt,mt,at[nt].data);for(let It=0;It<ut.length;It++){const fe=ut[It].image[nt].image;D?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,0,0,fe.width,fe.height,dt,mt,fe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,St,fe.width,fe.height,0,dt,mt,fe.data)}}else{D?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,dt,mt,at[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,St,dt,mt,at[nt]);for(let It=0;It<ut.length;It++){const Wt=ut[It];D?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,0,0,dt,mt,Wt.image[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,St,dt,mt,Wt.image[nt])}}}_(M)&&m(r.TEXTURE_CUBE_MAP),q.__version=tt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function it(R,M,B,Q,tt,q){const vt=s.convert(B.format,B.colorSpace),pt=s.convert(B.type),H=b(B.internalFormat,vt,pt,B.colorSpace),rt=n.get(M),j=n.get(B);if(j.__renderTarget=M,!rt.__hasExternalTextures){const at=Math.max(1,M.width>>q),_t=Math.max(1,M.height>>q);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,q,H,at,_t,M.depth,0,vt,pt,null):e.texImage2D(tt,q,H,at,_t,0,vt,pt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),ht(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,tt,j.__webglTexture,0,P(M)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,tt,j.__webglTexture,q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(R,M,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer){const Q=M.depthTexture,tt=Q&&Q.isDepthTexture?Q.type:null,q=S(M.stencilBuffer,tt),vt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ht(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(M),q,M.width,M.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(M),q,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,q,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,R)}else{const Q=M.textures;for(let tt=0;tt<Q.length;tt++){const q=Q[tt],vt=s.convert(q.format,q.colorSpace),pt=s.convert(q.type),H=b(q.internalFormat,vt,pt,q.colorSpace);ht(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(M),H,M.width,M.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(M),H,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,H,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ut(R,M,B){const Q=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(M.depthTexture);if(tt.__renderTarget=M,(!tt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,M.depthTexture.addEventListener("dispose",E)),tt.__webglTexture===void 0){tt.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),ct(r.TEXTURE_CUBE_MAP,M.depthTexture);const rt=s.convert(M.depthTexture.format),j=s.convert(M.depthTexture.type);let at;M.depthTexture.format===er?at=r.DEPTH_COMPONENT24:M.depthTexture.format===Kr&&(at=r.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,at,M.width,M.height,0,rt,j,null)}}else W(M.depthTexture,0);const q=tt.__webglTexture,vt=P(M),pt=Q?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,H=M.depthTexture.format===Kr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===er)ht(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,pt,q,0,vt):r.framebufferTexture2D(r.FRAMEBUFFER,H,pt,q,0);else if(M.depthTexture.format===Kr)ht(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,pt,q,0,vt):r.framebufferTexture2D(r.FRAMEBUFFER,H,pt,q,0);else throw new Error("Unknown depthTexture format")}function Pt(R){const M=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",tt)};Q.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=Q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let Q=0;Q<6;Q++)Ut(M.__webglFramebuffer[Q],R,Q);else{const Q=R.texture.mipmaps;Q&&Q.length>0?Ut(M.__webglFramebuffer[0],R,0):Ut(M.__webglFramebuffer,R,0)}else if(B){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=r.createRenderbuffer(),Ct(M.__webglDepthbuffer[Q],R,!1);else{const tt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,q)}}else{const Q=R.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ct(M.__webglDepthbuffer,R,!1);else{const tt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,q)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(R,M,B){const Q=n.get(R);M!==void 0&&it(Q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Pt(R)}function yt(R){const M=R.texture,B=n.get(R),Q=n.get(M);R.addEventListener("dispose",w);const tt=R.textures,q=R.isWebGLCubeRenderTarget===!0,vt=tt.length>1;if(vt||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=M.version,a.memory.textures++),q){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[pt]=[];for(let H=0;H<M.mipmaps.length;H++)B.__webglFramebuffer[pt][H]=r.createFramebuffer()}else B.__webglFramebuffer[pt]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let pt=0;pt<M.mipmaps.length;pt++)B.__webglFramebuffer[pt]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(vt)for(let pt=0,H=tt.length;pt<H;pt++){const rt=n.get(tt[pt]);rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&ht(R)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pt=0;pt<tt.length;pt++){const H=tt[pt];B.__webglColorRenderbuffer[pt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[pt]);const rt=s.convert(H.format,H.colorSpace),j=s.convert(H.type),at=b(H.internalFormat,rt,j,H.colorSpace,R.isXRRenderTarget===!0),_t=P(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,at,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,B.__webglColorRenderbuffer[pt])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Ct(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),ct(r.TEXTURE_CUBE_MAP,M);for(let pt=0;pt<6;pt++)if(M.mipmaps&&M.mipmaps.length>0)for(let H=0;H<M.mipmaps.length;H++)it(B.__webglFramebuffer[pt][H],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,H);else it(B.__webglFramebuffer[pt],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);_(M)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let pt=0,H=tt.length;pt<H;pt++){const rt=tt[pt],j=n.get(rt);let at=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),ct(at,rt),it(B.__webglFramebuffer,R,rt,r.COLOR_ATTACHMENT0+pt,at,0),_(rt)&&m(at)}e.unbindTexture()}else{let pt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(pt,Q.__webglTexture),ct(pt,M),M.mipmaps&&M.mipmaps.length>0)for(let H=0;H<M.mipmaps.length;H++)it(B.__webglFramebuffer[H],R,M,r.COLOR_ATTACHMENT0,pt,H);else it(B.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,pt,0);_(M)&&m(pt),e.unbindTexture()}R.depthBuffer&&Pt(R)}function Vt(R){const M=R.textures;for(let B=0,Q=M.length;B<Q;B++){const tt=M[B];if(_(tt)){const q=x(R),vt=n.get(tt).__webglTexture;e.bindTexture(q,vt),m(q),e.unbindTexture()}}}const Yt=[],zt=[];function X(R){if(R.samples>0){if(ht(R)===!1){const M=R.textures,B=R.width,Q=R.height;let tt=r.COLOR_BUFFER_BIT;const q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=n.get(R),pt=M.length>1;if(pt)for(let rt=0;rt<M.length;rt++)e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);const H=R.texture.mipmaps;H&&H.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let rt=0;rt<M.length;rt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),pt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,vt.__webglColorRenderbuffer[rt]);const j=n.get(M[rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,j,0)}r.blitFramebuffer(0,0,B,Q,0,0,B,Q,tt,r.NEAREST),l===!0&&(Yt.length=0,zt.length=0,Yt.push(r.COLOR_ATTACHMENT0+rt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Yt.push(q),zt.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,zt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pt)for(let rt=0;rt<M.length;rt++){e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,vt.__webglColorRenderbuffer[rt]);const j=n.get(M[rt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,j,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function P(R){return Math.min(i.maxSamples,R.samples)}function ht(R){const M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ft(R){const M=a.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Bt(R,M){const B=R.colorSpace,Q=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==cs&&B!==mr&&(he.getTransfer(B)===xe?(Q!==Mi||tt!==li)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",B)),M}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=O,this.setTexture3D=U,this.setTextureCube=F,this.rebindTextures=jt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Vy(r,t){function e(n,i=mr){let s;const a=he.getTransfer(i);if(n===li)return r.UNSIGNED_BYTE;if(n===Mh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Sh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===om)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===lm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===sm)return r.BYTE;if(n===am)return r.SHORT;if(n===Za)return r.UNSIGNED_SHORT;if(n===xh)return r.INT;if(n===Oi)return r.UNSIGNED_INT;if(n===Li)return r.FLOAT;if(n===Si)return r.HALF_FLOAT;if(n===cm)return r.ALPHA;if(n===um)return r.RGB;if(n===Mi)return r.RGBA;if(n===er)return r.DEPTH_COMPONENT;if(n===Kr)return r.DEPTH_STENCIL;if(n===hm)return r.RED;if(n===yh)return r.RED_INTEGER;if(n===Qs)return r.RG;if(n===bh)return r.RG_INTEGER;if(n===Eh)return r.RGBA_INTEGER;if(n===el||n===nl||n===il||n===rl)if(a===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===el)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===el)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lu||n===cu||n===uu||n===hu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===lu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fu||n===du)return a===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===pu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===mu)return s.COMPRESSED_R11_EAC;if(n===_u)return s.COMPRESSED_SIGNED_R11_EAC;if(n===gu)return s.COMPRESSED_RG11_EAC;if(n===vu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xu||n===Mu||n===Su||n===yu||n===bu||n===Eu||n===Tu||n===wu||n===Au||n===Ru||n===Cu||n===Pu||n===Du||n===Lu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===xu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Su)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Au)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ru)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Du)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Iu||n===Uu||n===Fu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Iu)return a===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nu||n===Ou||n===Bu||n===zu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Nu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ou)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$a?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const Gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wy=`
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

}`;class Xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Mm(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new sn({vertexShader:Gy,fragmentShader:Wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jn(new no(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yy extends ea{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null;const g=typeof XRWebGLBinding<"u",_=new Xy,m={},x=e.getContextAttributes();let b=null,S=null;const A=[],E=[],w=new ce;let v=null;const y=new oi;y.viewport=new Ie;const I=new oi;I.viewport=new Ie;const L=[y,I],N=new iv;let z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=A[Y];return et===void 0&&(et=new rc,A[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=A[Y];return et===void 0&&(et=new rc,A[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=A[Y];return et===void 0&&(et=new rc,A[Y]=et),et.getHandSpace()};function W(Y){const et=E.indexOf(Y.inputSource);if(et===-1)return;const it=A[et];it!==void 0&&(it.update(Y.inputSource,Y.frame,c||a),it.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",U);for(let Y=0;Y<A.length;Y++){const et=E[Y];et!==null&&(E[Y]=null,A[Y].disconnect(et))}z=null,V=null,_.reset();for(const Y in m)delete m[Y];t.setRenderTarget(b),h=null,f=null,d=null,i=null,S=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",O),i.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Ct=null,Ut=null;x.depth&&(Ut=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=x.stencil?Kr:er,Ct=x.stencil?$a:Oi);const Pt={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Pt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Rn(f.textureWidth,f.textureHeight,{format:Mi,type:li,depthTexture:new ja(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const it={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Rn(h.framebufferWidth,h.framebufferHeight,{format:Mi,type:li,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Rt.setContext(i),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function U(Y){for(let et=0;et<Y.removed.length;et++){const it=Y.removed[et],Ct=E.indexOf(it);Ct>=0&&(E[Ct]=null,A[Ct].disconnect(it))}for(let et=0;et<Y.added.length;et++){const it=Y.added[et];let Ct=E.indexOf(it);if(Ct===-1){for(let Pt=0;Pt<A.length;Pt++)if(Pt>=E.length){E.push(it),Ct=Pt;break}else if(E[Pt]===null){E[Pt]=it,Ct=Pt;break}if(Ct===-1)break}const Ut=A[Ct];Ut&&Ut.connect(it)}}const F=new J,k=new J;function C(Y,et,it){F.setFromMatrixPosition(et.matrixWorld),k.setFromMatrixPosition(it.matrixWorld);const Ct=F.distanceTo(k),Ut=et.projectionMatrix.elements,Pt=it.projectionMatrix.elements,jt=Ut[14]/(Ut[10]-1),yt=Ut[14]/(Ut[10]+1),Vt=(Ut[9]+1)/Ut[5],Yt=(Ut[9]-1)/Ut[5],zt=(Ut[8]-1)/Ut[0],X=(Pt[8]+1)/Pt[0],P=jt*zt,ht=jt*X,ft=Ct/(-zt+X),Bt=ft*-zt;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Bt),Y.translateZ(ft),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ut[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Mt=jt+ft,R=yt+ft,M=P-Bt,B=ht+(Ct-Bt),Q=Vt*yt/R*Mt,tt=Yt*yt/R*Mt;Y.projectionMatrix.makePerspective(M,B,Q,tt,Mt,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let et=Y.near,it=Y.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(it=_.depthFar)),N.near=I.near=y.near=et,N.far=I.far=y.far=it,(z!==N.near||V!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,V=N.far),N.layers.mask=Y.layers.mask|6,y.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;const Ct=Y.parent,Ut=N.cameras;st(N,Ct);for(let Pt=0;Pt<Ut.length;Pt++)st(Ut[Pt],Ct);Ut.length===2?C(N,y,I):N.projectionMatrix.copy(y.projectionMatrix),ct(Y,N,Ct)};function ct(Y,et,it){it===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(it.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ku*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(Y){return m[Y]};let xt=null;function Lt(Y,et){if(u=et.getViewerPose(c||a),p=et,u!==null){const it=u.views;h!==null&&(t.setRenderTargetFramebuffer(S,h.framebuffer),t.setRenderTarget(S));let Ct=!1;it.length!==N.cameras.length&&(N.cameras.length=0,Ct=!0);for(let yt=0;yt<it.length;yt++){const Vt=it[yt];let Yt=null;if(h!==null)Yt=h.getViewport(Vt);else{const X=d.getViewSubImage(f,Vt);Yt=X.viewport,yt===0&&(t.setRenderTargetTextures(S,X.colorTexture,X.depthStencilTexture),t.setRenderTarget(S))}let zt=L[yt];zt===void 0&&(zt=new oi,zt.layers.enable(yt),zt.viewport=new Ie,L[yt]=zt),zt.matrix.fromArray(Vt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Vt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),yt===0&&(N.matrix.copy(zt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ct===!0&&N.cameras.push(zt)}const Ut=i.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const yt=d.getDepthInformation(it[0]);yt&&yt.isValid&&yt.texture&&_.init(yt,i.renderState)}if(Ut&&Ut.includes("camera-access")&&g){t.state.unbindTexture(),d=n.getBinding();for(let yt=0;yt<it.length;yt++){const Vt=it[yt].camera;if(Vt){let Yt=m[Vt];Yt||(Yt=new Mm,m[Vt]=Yt);const zt=d.getCameraImage(Vt);Yt.sourceTexture=zt}}}}for(let it=0;it<A.length;it++){const Ct=E[it],Ut=A[it];Ct!==null&&Ut!==void 0&&Ut.update(Ct,et,c||a)}xt&&xt(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),p=null}const Rt=new bm;Rt.setAnimationLoop(Lt),this.setAnimationLoop=function(Y){xt=Y},this.dispose=function(){}}}const Gr=new nr,qy=new Fe;function Zy(r,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,Sm(r)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,x,b,S){m.isMeshBasicMaterial?s(_,m):m.isMeshLambertMaterial?(s(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(_,m),d(_,m)):m.isMeshPhongMaterial?(s(_,m),u(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(_,m),f(_,m),m.isMeshPhysicalMaterial&&h(_,m,S)):m.isMeshMatcapMaterial?(s(_,m),p(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),g(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&o(_,m)):m.isPointsMaterial?l(_,m,x,b):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===Bn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===Bn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const x=t.get(m),b=x.envMap,S=x.envMapRotation;b&&(_.envMap.value=b,Gr.copy(S),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),_.envMapRotation.value.setFromMatrix4(qy.makeRotationFromEuler(Gr)),_.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function o(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,x,b){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*x,_.scale.value=b*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function d(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function h(_,m,x){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,m){m.matcap&&(_.matcap.value=m.matcap)}function g(_,m){const x=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $y(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const S=b.program;n.uniformBlockBinding(x,S)}function c(x,b){let S=i[x.id];S===void 0&&(p(x),S=u(x),i[x.id]=S,x.addEventListener("dispose",_));const A=b.program;n.updateUBOMapping(x,A);const E=t.render.frame;s[x.id]!==E&&(f(x),s[x.id]=E)}function u(x){const b=d();x.__bindingPointIndex=b;const S=r.createBuffer(),A=x.__size,E=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,A,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,S),S}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const b=i[x.id],S=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let E=0,w=S.length;E<w;E++){const v=Array.isArray(S[E])?S[E]:[S[E]];for(let y=0,I=v.length;y<I;y++){const L=v[y];if(h(L,E,y,A)===!0){const N=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let W=0;W<z.length;W++){const O=z[W],U=g(O);typeof O=="number"||typeof O=="boolean"?(L.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,N+V,L.__data)):O.isMatrix3?(L.__data[0]=O.elements[0],L.__data[1]=O.elements[1],L.__data[2]=O.elements[2],L.__data[3]=0,L.__data[4]=O.elements[3],L.__data[5]=O.elements[4],L.__data[6]=O.elements[5],L.__data[7]=0,L.__data[8]=O.elements[6],L.__data[9]=O.elements[7],L.__data[10]=O.elements[8],L.__data[11]=0):(O.toArray(L.__data,V),V+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(x,b,S,A){const E=x.value,w=b+"_"+S;if(A[w]===void 0)return typeof E=="number"||typeof E=="boolean"?A[w]=E:A[w]=E.clone(),!0;{const v=A[w];if(typeof E=="number"||typeof E=="boolean"){if(v!==E)return A[w]=E,!0}else if(v.equals(E)===!1)return v.copy(E),!0}return!1}function p(x){const b=x.uniforms;let S=0;const A=16;for(let w=0,v=b.length;w<v;w++){const y=Array.isArray(b[w])?b[w]:[b[w]];for(let I=0,L=y.length;I<L;I++){const N=y[I],z=Array.isArray(N.value)?N.value:[N.value];for(let V=0,W=z.length;V<W;V++){const O=z[V],U=g(O),F=S%A,k=F%U.boundary,C=F+k;S+=k,C!==0&&A-C<U.storage&&(S+=A-C),N.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=U.storage}}}const E=S%A;return E>0&&(S+=A-E),x.__size=S,x.__cache={},this}function g(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Kt("WebGLRenderer: Unsupported uniform value type.",x),b}function _(x){const b=x.target;b.removeEventListener("dispose",_);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}const jy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function Ky(){return Ei===null&&(Ei=new V0(jy,16,16,Qs,Si),Ei.name="DFG_LUT",Ei.minFilter=ln,Ei.magFilter=ln,Ei.wrapS=Di,Ei.wrapT=Di,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class Jy{constructor(t={}){const{canvas:e=M0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=li}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=h,_=new Set([Eh,bh,yh]),m=new Set([li,Oi,Za,$a,Mh,Sh]),x=new Uint32Array(4),b=new Int32Array(4);let S=null,A=null;const E=[],w=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let I=!1;this._outputColorSpace=qn;let L=0,N=0,z=null,V=-1,W=null;const O=new Ie,U=new Ie;let F=null;const k=new pe(0);let C=0,st=e.width,ct=e.height,xt=1,Lt=null,Rt=null;const Y=new Ie(0,0,st,ct),et=new Ie(0,0,st,ct);let it=!1;const Ct=new vm;let Ut=!1,Pt=!1;const jt=new Fe,yt=new J,Vt=new Ie,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function X(){return z===null?xt:1}let P=n;function ht(T,G){return e.getContext(T,G)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vh}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",fe,!1),P===null){const G="webgl2";if(P=ht(G,T),P===null)throw ht(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw ue("WebGLRenderer: "+T.message),T}let ft,Bt,Mt,R,M,B,Q,tt,q,vt,pt,H,rt,j,at,_t,dt,mt,St,D,lt,ot,gt;function ut(){ft=new JM(P),ft.init(),lt=new Vy(P,ft),Bt=new WM(P,ft,t,lt),Mt=new ky(P,ft),Bt.reversedDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),R=new eS(P),M=new wy,B=new Hy(P,ft,Mt,M,Bt,lt,R),Q=new KM(y),tt=new av(P),ot=new VM(P,tt),q=new QM(P,tt,R,ot),vt=new iS(P,q,tt,ot,R),mt=new nS(P,Bt,B),at=new XM(M),pt=new Ty(y,Q,ft,Bt,ot,at),H=new Zy(y,M),rt=new Ry,j=new Uy(ft),dt=new HM(y,Q,Mt,vt,p,l),_t=new zy(y,vt,Bt),gt=new $y(P,R,Bt,Mt),St=new GM(P,ft,R),D=new tS(P,ft,R),R.programs=pt.programs,y.capabilities=Bt,y.extensions=ft,y.properties=M,y.renderLists=rt,y.shadowMap=_t,y.state=Mt,y.info=R}ut(),g!==li&&(v=new sS(g,e.width,e.height,i,s));const nt=new Yy(y,P);this.xr=nt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=ft.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ft.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(T){T!==void 0&&(xt=T,this.setSize(st,ct,!1))},this.getSize=function(T){return T.set(st,ct)},this.setSize=function(T,G,K=!0){if(nt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}st=T,ct=G,e.width=Math.floor(T*xt),e.height=Math.floor(G*xt),K===!0&&(e.style.width=T+"px",e.style.height=G+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(st*xt,ct*xt).floor()},this.setDrawingBufferSize=function(T,G,K){st=T,ct=G,xt=K,e.width=Math.floor(T*K),e.height=Math.floor(G*K),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(g===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(O)},this.getViewport=function(T){return T.copy(Y)},this.setViewport=function(T,G,K,$){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,G,K,$),Mt.viewport(O.copy(Y).multiplyScalar(xt).round())},this.getScissor=function(T){return T.copy(et)},this.setScissor=function(T,G,K,$){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,G,K,$),Mt.scissor(U.copy(et).multiplyScalar(xt).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(T){Mt.setScissorTest(it=T)},this.setOpaqueSort=function(T){Lt=T},this.setTransparentSort=function(T){Rt=T},this.getClearColor=function(T){return T.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,K=!0){let $=0;if(T){let Z=!1;if(z!==null){const bt=z.texture.format;Z=_.has(bt)}if(Z){const bt=z.texture.type,Tt=m.has(bt),Et=dt.getClearColor(),Nt=dt.getClearAlpha(),Ft=Et.r,Qt=Et.g,ie=Et.b;Tt?(x[0]=Ft,x[1]=Qt,x[2]=ie,x[3]=Nt,P.clearBufferuiv(P.COLOR,0,x)):(b[0]=Ft,b[1]=Qt,b[2]=ie,b[3]=Nt,P.clearBufferiv(P.COLOR,0,b))}else $|=P.COLOR_BUFFER_BIT}G&&($|=P.DEPTH_BUFFER_BIT),K&&($|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&P.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),dt.dispose(),rt.dispose(),j.dispose(),M.dispose(),Q.dispose(),vt.dispose(),ot.dispose(),gt.dispose(),pt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",$t),nt.removeEventListener("sessionend",Ne),Jt.stop()};function It(T){T.preventDefault(),Rf("WebGLRenderer: Context Lost."),I=!0}function Wt(){Rf("WebGLRenderer: Context Restored."),I=!1;const T=R.autoReset,G=_t.enabled,K=_t.autoUpdate,$=_t.needsUpdate,Z=_t.type;ut(),R.autoReset=T,_t.enabled=G,_t.autoUpdate=K,_t.needsUpdate=$,_t.type=Z}function fe(T){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Dt(T){const G=T.target;G.removeEventListener("dispose",Dt),kt(G)}function kt(T){te(T),M.remove(T)}function te(T){const G=M.get(T).programs;G!==void 0&&(G.forEach(function(K){pt.releaseProgram(K)}),T.isShaderMaterial&&pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,K,$,Z,bt){G===null&&(G=Yt);const Tt=Z.isMesh&&Z.matrixWorld.determinant()<0,Et=ni(T,G,K,$,Z);Mt.setMaterial($,Tt);let Nt=K.index,Ft=1;if($.wireframe===!0){if(Nt=q.getWireframeAttribute(K),Nt===void 0)return;Ft=2}const Qt=K.drawRange,ie=K.attributes.position;let Gt=Qt.start*Ft,Me=(Qt.start+Qt.count)*Ft;bt!==null&&(Gt=Math.max(Gt,bt.start*Ft),Me=Math.min(Me,(bt.start+bt.count)*Ft)),Nt!==null?(Gt=Math.max(Gt,0),Me=Math.min(Me,Nt.count)):ie!=null&&(Gt=Math.max(Gt,0),Me=Math.min(Me,ie.count));const Oe=Me-Gt;if(Oe<0||Oe===1/0)return;ot.setup(Z,$,Et,K,Nt);let Le,Se=St;if(Nt!==null&&(Le=tt.get(Nt),Se=D,Se.setIndex(Le)),Z.isMesh)$.wireframe===!0?(Mt.setLineWidth($.wireframeLinewidth*X()),Se.setMode(P.LINES)):Se.setMode(P.TRIANGLES);else if(Z.isLine){let fn=$.linewidth;fn===void 0&&(fn=1),Mt.setLineWidth(fn*X()),Z.isLineSegments?Se.setMode(P.LINES):Z.isLineLoop?Se.setMode(P.LINE_LOOP):Se.setMode(P.LINE_STRIP)}else Z.isPoints?Se.setMode(P.POINTS):Z.isSprite&&Se.setMode(P.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Se.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const fn=Z._multiDrawStarts,Ht=Z._multiDrawCounts,Hn=Z._multiDrawCount,de=Nt?tt.get(Nt).bytesPerElement:1,di=M.get($).currentProgram.getUniforms();for(let yi=0;yi<Hn;yi++)di.setValue(P,"_gl_DrawID",yi),Se.render(fn[yi]/de,Ht[yi])}else if(Z.isInstancedMesh)Se.renderInstances(Gt,Oe,Z.count);else if(K.isInstancedBufferGeometry){const fn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ht=Math.min(K.instanceCount,fn);Se.renderInstances(Gt,Oe,Ht)}else Se.render(Gt,Oe)};function wt(T,G,K){T.transparent===!0&&T.side===qi&&T.forceSinglePass===!1?(T.side=Bn,T.needsUpdate=!0,un(T,G,K),T.side=Ir,T.needsUpdate=!0,un(T,G,K),T.side=qi):un(T,G,K)}this.compile=function(T,G,K=null){K===null&&(K=T),A=j.get(K),A.init(G),w.push(A),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),T!==K&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),A.setupLights();const $=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const bt=Z.material;if(bt)if(Array.isArray(bt))for(let Tt=0;Tt<bt.length;Tt++){const Et=bt[Tt];wt(Et,K,Z),$.add(Et)}else wt(bt,K,Z),$.add(bt)}),A=w.pop(),$},this.compileAsync=function(T,G,K=null){const $=this.compile(T,G,K);return new Promise(Z=>{function bt(){if($.forEach(function(Tt){M.get(Tt).currentProgram.isReady()&&$.delete(Tt)}),$.size===0){Z(T);return}setTimeout(bt,10)}ft.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let qt=null;function Xt(T){qt&&qt(T)}function $t(){Jt.stop()}function Ne(){Jt.start()}const Jt=new bm;Jt.setAnimationLoop(Xt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(T){qt=T,nt.setAnimationLoop(T),T===null?Jt.stop():Jt.start()},nt.addEventListener("sessionstart",$t),nt.addEventListener("sessionend",Ne),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;const K=nt.enabled===!0&&nt.isPresenting===!0,$=v!==null&&(z===null||K)&&v.begin(y,z);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(G),G=nt.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,G,z),A=j.get(T,w.length),A.init(G),w.push(A),jt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ct.setFromProjectionMatrix(jt,Ii,G.reversedDepth),Pt=this.localClippingEnabled,Ut=at.init(this.clippingPlanes,Pt),S=rt.get(T,E.length),S.init(),E.push(S),nt.enabled===!0&&nt.isPresenting===!0){const Tt=y.xr.getDepthSensingMesh();Tt!==null&&we(Tt,G,-1/0,y.sortObjects)}we(T,G,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(Lt,Rt),zt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,zt&&dt.addToRenderList(S,T),this.info.render.frame++,Ut===!0&&at.beginShadows();const Z=A.state.shadowsArray;if(_t.render(Z,T,G),Ut===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&v.hasRenderPass())===!1){const Tt=S.opaque,Et=S.transmissive;if(A.setupLights(),G.isArrayCamera){const Nt=G.cameras;if(Et.length>0)for(let Ft=0,Qt=Nt.length;Ft<Qt;Ft++){const ie=Nt[Ft];Ae(Tt,Et,T,ie)}zt&&dt.render(T);for(let Ft=0,Qt=Nt.length;Ft<Qt;Ft++){const ie=Nt[Ft];We(S,T,ie,ie.viewport)}}else Et.length>0&&Ae(Tt,Et,T,G),zt&&dt.render(T),We(S,T,G)}z!==null&&N===0&&(B.updateMultisampleRenderTarget(z),B.updateRenderTargetMipmap(z)),$&&v.end(y),T.isScene===!0&&T.onAfterRender(y,T,G),ot.resetDefaultState(),V=-1,W=null,w.pop(),w.length>0?(A=w[w.length-1],Ut===!0&&at.setGlobalState(y.clippingPlanes,A.state.camera)):A=null,E.pop(),E.length>0?S=E[E.length-1]:S=null};function we(T,G,K,$){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ct.intersectsSprite(T)){$&&Vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(jt);const Tt=vt.update(T),Et=T.material;Et.visible&&S.push(T,Tt,Et,K,Vt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ct.intersectsObject(T))){const Tt=vt.update(T),Et=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Vt.copy(T.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Vt.copy(Tt.boundingSphere.center)),Vt.applyMatrix4(T.matrixWorld).applyMatrix4(jt)),Array.isArray(Et)){const Nt=Tt.groups;for(let Ft=0,Qt=Nt.length;Ft<Qt;Ft++){const ie=Nt[Ft],Gt=Et[ie.materialIndex];Gt&&Gt.visible&&S.push(T,Tt,Gt,K,Vt.z,ie)}}else Et.visible&&S.push(T,Tt,Et,K,Vt.z,null)}}const bt=T.children;for(let Tt=0,Et=bt.length;Tt<Et;Tt++)we(bt[Tt],G,K,$)}function We(T,G,K,$){const{opaque:Z,transmissive:bt,transparent:Tt}=T;A.setupLightsView(K),Ut===!0&&at.setGlobalState(y.clippingPlanes,K),$&&Mt.viewport(O.copy($)),Z.length>0&&ge(Z,G,K),bt.length>0&&ge(bt,G,K),Tt.length>0&&ge(Tt,G,K),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Ae(T,G,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[$.id]===void 0){const Gt=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[$.id]=new Rn(1,1,{generateMipmaps:!0,type:Gt?Si:li,minFilter:yr,samples:Math.max(4,Bt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace})}const bt=A.state.transmissionRenderTarget[$.id],Tt=$.viewport||O;bt.setSize(Tt.z*y.transmissionResolutionScale,Tt.w*y.transmissionResolutionScale);const Et=y.getRenderTarget(),Nt=y.getActiveCubeFace(),Ft=y.getActiveMipmapLevel();y.setRenderTarget(bt),y.getClearColor(k),C=y.getClearAlpha(),C<1&&y.setClearColor(16777215,.5),y.clear(),zt&&dt.render(K);const Qt=y.toneMapping;y.toneMapping=Fi;const ie=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),A.setupLightsView($),Ut===!0&&at.setGlobalState(y.clippingPlanes,$),ge(T,K,$),B.updateMultisampleRenderTarget(bt),B.updateRenderTargetMipmap(bt),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Me=0,Oe=G.length;Me<Oe;Me++){const Le=G[Me],{object:Se,geometry:fn,material:Ht,group:Hn}=Le;if(Ht.side===qi&&Se.layers.test($.layers)){const de=Ht.side;Ht.side=Bn,Ht.needsUpdate=!0,me(Se,K,$,fn,Ht,Hn),Ht.side=de,Ht.needsUpdate=!0,Gt=!0}}Gt===!0&&(B.updateMultisampleRenderTarget(bt),B.updateRenderTargetMipmap(bt))}y.setRenderTarget(Et,Nt,Ft),y.setClearColor(k,C),ie!==void 0&&($.viewport=ie),y.toneMapping=Qt}function ge(T,G,K){const $=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,bt=T.length;Z<bt;Z++){const Tt=T[Z],{object:Et,geometry:Nt,group:Ft}=Tt;let Qt=Tt.material;Qt.allowOverride===!0&&$!==null&&(Qt=$),Et.layers.test(K.layers)&&me(Et,G,K,Nt,Qt,Ft)}}function me(T,G,K,$,Z,bt){T.onBeforeRender(y,G,K,$,Z,bt),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(y,G,K,$,T,bt),Z.transparent===!0&&Z.side===qi&&Z.forceSinglePass===!1?(Z.side=Bn,Z.needsUpdate=!0,y.renderBufferDirect(K,G,$,Z,T,bt),Z.side=Ir,Z.needsUpdate=!0,y.renderBufferDirect(K,G,$,Z,T,bt),Z.side=qi):y.renderBufferDirect(K,G,$,Z,T,bt),T.onAfterRender(y,G,K,$,Z,bt)}function un(T,G,K){G.isScene!==!0&&(G=Yt);const $=M.get(T),Z=A.state.lights,bt=A.state.shadowsArray,Tt=Z.state.version,Et=pt.getParameters(T,Z.state,bt,G,K),Nt=pt.getProgramCacheKey(Et);let Ft=$.programs;$.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;const Qt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;$.envMap=Q.get(T.envMap||$.environment,Qt),$.envMapRotation=$.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Ft===void 0&&(T.addEventListener("dispose",Dt),Ft=new Map,$.programs=Ft);let ie=Ft.get(Nt);if(ie!==void 0){if($.currentProgram===ie&&$.lightsStateVersion===Tt)return hn(T,Et),ie}else Et.uniforms=pt.getUniforms(T),T.onBeforeCompile(Et,y),ie=pt.acquireProgram(Et,Nt),Ft.set(Nt,ie),$.uniforms=Et.uniforms;const Gt=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Gt.clippingPlanes=at.uniform),hn(T,Et),$.needsLights=Ye(T),$.lightsStateVersion=Tt,$.needsLights&&(Gt.ambientLightColor.value=Z.state.ambient,Gt.lightProbe.value=Z.state.probe,Gt.directionalLights.value=Z.state.directional,Gt.directionalLightShadows.value=Z.state.directionalShadow,Gt.spotLights.value=Z.state.spot,Gt.spotLightShadows.value=Z.state.spotShadow,Gt.rectAreaLights.value=Z.state.rectArea,Gt.ltc_1.value=Z.state.rectAreaLTC1,Gt.ltc_2.value=Z.state.rectAreaLTC2,Gt.pointLights.value=Z.state.point,Gt.pointLightShadows.value=Z.state.pointShadow,Gt.hemisphereLights.value=Z.state.hemi,Gt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Gt.spotLightMatrix.value=Z.state.spotLightMatrix,Gt.spotLightMap.value=Z.state.spotLightMap,Gt.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.currentProgram=ie,$.uniformsList=null,ie}function Te(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=sl.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function hn(T,G){const K=M.get(T);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function ni(T,G,K,$,Z){G.isScene!==!0&&(G=Yt),B.resetTextureUnits();const bt=G.fog,Tt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,Et=z===null?y.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:cs,Nt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ft=Q.get($.envMap||Tt,Nt),Qt=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ie=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Gt=!!K.morphAttributes.position,Me=!!K.morphAttributes.normal,Oe=!!K.morphAttributes.color;let Le=Fi;$.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Le=y.toneMapping);const Se=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,fn=Se!==void 0?Se.length:0,Ht=M.get($),Hn=A.state.lights;if(Ut===!0&&(Pt===!0||T!==W)){const Je=T===W&&$.id===V;at.setState($,T,Je)}let de=!1;$.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Hn.state.version||Ht.outputColorSpace!==Et||Z.isBatchedMesh&&Ht.batching===!1||!Z.isBatchedMesh&&Ht.batching===!0||Z.isBatchedMesh&&Ht.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ht.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ht.instancing===!1||!Z.isInstancedMesh&&Ht.instancing===!0||Z.isSkinnedMesh&&Ht.skinning===!1||!Z.isSkinnedMesh&&Ht.skinning===!0||Z.isInstancedMesh&&Ht.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ht.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ht.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ht.instancingMorph===!1&&Z.morphTexture!==null||Ht.envMap!==Ft||$.fog===!0&&Ht.fog!==bt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==at.numPlanes||Ht.numIntersection!==at.numIntersection)||Ht.vertexAlphas!==Qt||Ht.vertexTangents!==ie||Ht.morphTargets!==Gt||Ht.morphNormals!==Me||Ht.morphColors!==Oe||Ht.toneMapping!==Le||Ht.morphTargetsCount!==fn)&&(de=!0):(de=!0,Ht.__version=$.version);let di=Ht.currentProgram;de===!0&&(di=un($,G,Z));let yi=!1,Fr=!1,fs=!1;const be=di.getUniforms(),rn=Ht.uniforms;if(Mt.useProgram(di.program)&&(yi=!0,Fr=!0,fs=!0),$.id!==V&&(V=$.id,Fr=!0),yi||W!==T){Mt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),be.setValue(P,"projectionMatrix",T.projectionMatrix),be.setValue(P,"viewMatrix",T.matrixWorldInverse);const rr=be.map.cameraPosition;rr!==void 0&&rr.setValue(P,yt.setFromMatrixPosition(T.matrixWorld)),Bt.logarithmicDepthBuffer&&be.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&be.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),W!==T&&(W=T,Fr=!0,fs=!0)}if(Ht.needsLights&&(Hn.state.directionalShadowMap.length>0&&be.setValue(P,"directionalShadowMap",Hn.state.directionalShadowMap,B),Hn.state.spotShadowMap.length>0&&be.setValue(P,"spotShadowMap",Hn.state.spotShadowMap,B),Hn.state.pointShadowMap.length>0&&be.setValue(P,"pointShadowMap",Hn.state.pointShadowMap,B)),Z.isSkinnedMesh){be.setOptional(P,Z,"bindMatrix"),be.setOptional(P,Z,"bindMatrixInverse");const Je=Z.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),be.setValue(P,"boneTexture",Je.boneTexture,B))}Z.isBatchedMesh&&(be.setOptional(P,Z,"batchingTexture"),be.setValue(P,"batchingTexture",Z._matricesTexture,B),be.setOptional(P,Z,"batchingIdTexture"),be.setValue(P,"batchingIdTexture",Z._indirectTexture,B),be.setOptional(P,Z,"batchingColorTexture"),Z._colorsTexture!==null&&be.setValue(P,"batchingColorTexture",Z._colorsTexture,B));const ir=K.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&mt.update(Z,K,di),(Fr||Ht.receiveShadow!==Z.receiveShadow)&&(Ht.receiveShadow=Z.receiveShadow,be.setValue(P,"receiveShadow",Z.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(rn.envMapIntensity.value=G.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=Ky()),Fr&&(be.setValue(P,"toneMappingExposure",y.toneMappingExposure),Ht.needsLights&&Xe(rn,fs),bt&&$.fog===!0&&H.refreshFogUniforms(rn,bt),H.refreshMaterialUniforms(rn,$,xt,ct,A.state.transmissionRenderTarget[T.id]),sl.upload(P,Te(Ht),rn,B)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(sl.upload(P,Te(Ht),rn,B),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&be.setValue(P,"center",Z.center),be.setValue(P,"modelViewMatrix",Z.modelViewMatrix),be.setValue(P,"normalMatrix",Z.normalMatrix),be.setValue(P,"modelMatrix",Z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Je=$.uniformsGroups;for(let rr=0,ds=Je.length;rr<ds;rr++){const Dh=Je[rr];gt.update(Dh,di),gt.bind(Dh,di)}}return di}function Xe(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Ye(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(T,G,K){const $=M.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=G,M.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const K=M.get(T);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0};const Ke=P.createFramebuffer();this.setRenderTarget=function(T,G=0,K=0){z=T,L=G,N=K;let $=null,Z=!1,bt=!1;if(T){const Et=M.get(T);if(Et.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(P.FRAMEBUFFER,Et.__webglFramebuffer),O.copy(T.viewport),U.copy(T.scissor),F=T.scissorTest,Mt.viewport(O),Mt.scissor(U),Mt.setScissorTest(F),V=-1;return}else if(Et.__webglFramebuffer===void 0)B.setupRenderTarget(T);else if(Et.__hasExternalTextures)B.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Qt=T.depthTexture;if(Et.__boundDepthTexture!==Qt){if(Qt!==null&&M.has(Qt)&&(T.width!==Qt.image.width||T.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(T)}}const Nt=T.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(bt=!0);const Ft=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[G])?$=Ft[G][K]:$=Ft[G],Z=!0):T.samples>0&&B.useMultisampledRTT(T)===!1?$=M.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?$=Ft[K]:$=Ft,O.copy(T.viewport),U.copy(T.scissor),F=T.scissorTest}else O.copy(Y).multiplyScalar(xt).floor(),U.copy(et).multiplyScalar(xt).floor(),F=it;if(K!==0&&($=Ke),Mt.bindFramebuffer(P.FRAMEBUFFER,$)&&Mt.drawBuffers(T,$),Mt.viewport(O),Mt.scissor(U),Mt.setScissorTest(F),Z){const Et=M.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+G,Et.__webglTexture,K)}else if(bt){const Et=G;for(let Nt=0;Nt<T.textures.length;Nt++){const Ft=M.get(T.textures[Nt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Nt,Ft.__webglTexture,K,Et)}}else if(T!==null&&K!==0){const Et=M.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Et.__webglTexture,K)}V=-1},this.readRenderTargetPixels=function(T,G,K,$,Z,bt,Tt,Et=0){if(!(T&&T.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Nt=Nt[Tt]),Nt){Mt.bindFramebuffer(P.FRAMEBUFFER,Nt);try{const Ft=T.textures[Et],Qt=Ft.format,ie=Ft.type;if(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Et),!Bt.textureFormatReadable(Qt)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(ie)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-$&&K>=0&&K<=T.height-Z&&P.readPixels(G,K,$,Z,lt.convert(Qt),lt.convert(ie),bt)}finally{const Ft=z!==null?M.get(z).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(T,G,K,$,Z,bt,Tt,Et=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Nt=Nt[Tt]),Nt)if(G>=0&&G<=T.width-$&&K>=0&&K<=T.height-Z){Mt.bindFramebuffer(P.FRAMEBUFFER,Nt);const Ft=T.textures[Et],Qt=Ft.format,ie=Ft.type;if(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Et),!Bt.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Gt),P.bufferData(P.PIXEL_PACK_BUFFER,bt.byteLength,P.STREAM_READ),P.readPixels(G,K,$,Z,lt.convert(Qt),lt.convert(ie),0);const Me=z!==null?M.get(z).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,Me);const Oe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await S0(P,Oe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Gt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,bt),P.deleteBuffer(Gt),P.deleteSync(Oe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,K=0){const $=Math.pow(2,-K),Z=Math.floor(T.image.width*$),bt=Math.floor(T.image.height*$),Tt=G!==null?G.x:0,Et=G!==null?G.y:0;B.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,K,0,0,Tt,Et,Z,bt),Mt.unbindTexture()};const Bi=P.createFramebuffer(),hs=P.createFramebuffer();this.copyTextureToTexture=function(T,G,K=null,$=null,Z=0,bt=0){let Tt,Et,Nt,Ft,Qt,ie,Gt,Me,Oe;const Le=T.isCompressedTexture?T.mipmaps[bt]:T.image;if(K!==null)Tt=K.max.x-K.min.x,Et=K.max.y-K.min.y,Nt=K.isBox3?K.max.z-K.min.z:1,Ft=K.min.x,Qt=K.min.y,ie=K.isBox3?K.min.z:0;else{const rn=Math.pow(2,-Z);Tt=Math.floor(Le.width*rn),Et=Math.floor(Le.height*rn),T.isDataArrayTexture?Nt=Le.depth:T.isData3DTexture?Nt=Math.floor(Le.depth*rn):Nt=1,Ft=0,Qt=0,ie=0}$!==null?(Gt=$.x,Me=$.y,Oe=$.z):(Gt=0,Me=0,Oe=0);const Se=lt.convert(G.format),fn=lt.convert(G.type);let Ht;G.isData3DTexture?(B.setTexture3D(G,0),Ht=P.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(B.setTexture2DArray(G,0),Ht=P.TEXTURE_2D_ARRAY):(B.setTexture2D(G,0),Ht=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment);const Hn=P.getParameter(P.UNPACK_ROW_LENGTH),de=P.getParameter(P.UNPACK_IMAGE_HEIGHT),di=P.getParameter(P.UNPACK_SKIP_PIXELS),yi=P.getParameter(P.UNPACK_SKIP_ROWS),Fr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Le.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Le.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ft),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ie);const fs=T.isDataArrayTexture||T.isData3DTexture,be=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const rn=M.get(T),ir=M.get(G),Je=M.get(rn.__renderTarget),rr=M.get(ir.__renderTarget);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,Je.__webglFramebuffer),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,rr.__webglFramebuffer);for(let ds=0;ds<Nt;ds++)fs&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M.get(T).__webglTexture,Z,ie+ds),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M.get(G).__webglTexture,bt,Oe+ds)),P.blitFramebuffer(Ft,Qt,Tt,Et,Gt,Me,Tt,Et,P.DEPTH_BUFFER_BIT,P.NEAREST);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||M.has(T)){const rn=M.get(T),ir=M.get(G);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,Bi),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,hs);for(let Je=0;Je<Nt;Je++)fs?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,rn.__webglTexture,Z,ie+Je):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,rn.__webglTexture,Z),be?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ir.__webglTexture,bt,Oe+Je):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ir.__webglTexture,bt),Z!==0?P.blitFramebuffer(Ft,Qt,Tt,Et,Gt,Me,Tt,Et,P.COLOR_BUFFER_BIT,P.NEAREST):be?P.copyTexSubImage3D(Ht,bt,Gt,Me,Oe+Je,Ft,Qt,Tt,Et):P.copyTexSubImage2D(Ht,bt,Gt,Me,Ft,Qt,Tt,Et);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else be?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Ht,bt,Gt,Me,Oe,Tt,Et,Nt,Se,fn,Le.data):G.isCompressedArrayTexture?P.compressedTexSubImage3D(Ht,bt,Gt,Me,Oe,Tt,Et,Nt,Se,Le.data):P.texSubImage3D(Ht,bt,Gt,Me,Oe,Tt,Et,Nt,Se,fn,Le):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,bt,Gt,Me,Tt,Et,Se,fn,Le.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,bt,Gt,Me,Le.width,Le.height,Se,Le.data):P.texSubImage2D(P.TEXTURE_2D,bt,Gt,Me,Tt,Et,Se,fn,Le);P.pixelStorei(P.UNPACK_ROW_LENGTH,Hn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de),P.pixelStorei(P.UNPACK_SKIP_PIXELS,di),P.pixelStorei(P.UNPACK_SKIP_ROWS,yi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fr),bt===0&&G.generateMipmaps&&P.generateMipmap(Ht),Mt.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&B.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?B.setTextureCube(T,0):T.isData3DTexture?B.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?B.setTexture2DArray(T,0):B.setTexture2D(T,0),Mt.unbindTexture()},this.resetState=function(){L=0,N=0,z=null,Mt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}const Cm=`
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
`,Qy=`
precision highp float;
${Cm}
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
`,t1=`
precision highp float;
${Cm}
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
`,n1=`
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
`,i1=`
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
`,r1=`
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
`,s1=`
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
`,a1=`
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
`,o1=`
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
`,gi=(r,t,e)=>{const n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},Be=(r,t,e,n)=>r+(t-r)*(1-Math.exp(-e*n)),Sd=xr.parseEase("power3.inOut");class l1{constructor(t,e,n,i){this.cfg=e,this.atlases=n||[],this.pool=i,this.renderer=new Jy({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.autoClear=!1,this.renderer.outputColorSpace=cs,this.maxPR=Math.min(e.perf.maxPixelRatio,window.devicePixelRatio||1),this.pr=this.maxPR,this.scene=new zf,this.camera=new oi(e.camera.fov,1,.05,260),this.camera.rotation.order="YXZ",this.bgCol=xl(e.look.background),this.liftCol=xl(e.look.backgroundLift),this.ambient=[...this.bgCol],this.uBg={value:new pe(...this.bgCol)},this.uLift={value:new pe(...this.liftCol)},this.time={value:0},this.focus=12,this.mouse={x:0,y:0,tx:0,ty:0},this.pointerActive=!1,this.locked=!1,this.hoveredIdx=-1,this.hoverAmount=0,this.wallZoom=1,this.wallZoomTarget=1,this.pan={x:0,y:0},this.idlePan={x:(Math.random()-.5)*1.4,y:(Math.random()-.5)*1.4},this.lens={x:0,y:0,strength:0},this.inspectIdx=-1,this.inspectMix=0,this._ray=new rv,this._ndc=new ce,this._plane=new pr(new J(0,0,1),0),this._hit=new J,this.geo=new no(1,1),this.basePhoto=new sn({vertexShader:Md,fragmentShader:Qy,transparent:!0,depthWrite:!0,premultipliedAlpha:!0,blending:Rr,uniforms:{}}),this.baseHalo=new sn({vertexShader:Md,fragmentShader:t1,transparent:!0,depthWrite:!1,premultipliedAlpha:!0,blending:Rr,uniforms:{}}),this.makeBackground(),this.makeDust(),this.makePost(),this.items=[]}makeBackground(){const t=new sn({vertexShader:e1,fragmentShader:n1,depthTest:!1,depthWrite:!1,uniforms:{uBg:this.uBg,uLift:this.uLift,uAspect:{value:1}}});this.bg=new Jn(this.geo,t),this.bg.frustumCulled=!1,this.bg.renderOrder=-1e6,this.scene.add(this.bg)}makeDust(){const t=this.cfg.look.dust,e=new fi,n=new Float32Array(t*3),i=new Float32Array(t);for(let s=0;s<t;s++)n[s*3]=Math.random()*14,n[s*3+1]=Math.random()*9,n[s*3+2]=Math.random()*36,i[s]=Math.random();e.setAttribute("position",new In(n,3)),e.setAttribute("aSeed",new In(i,1)),this.dustMat=new sn({vertexShader:i1,fragmentShader:r1,transparent:!0,depthWrite:!1,blending:jc,uniforms:{uCam:{value:new J},uTime:this.time,uPR:{value:1},uScale:{value:800},uStrength:{value:.55},uTint:{value:new pe(1,.93,.85)}}}),this.dust=new q0(e,this.dustMat),this.dust.frustumCulled=!1,this.dust.renderOrder=1e6,this.scene.add(this.dust)}setLayout(t){this.layout=t;for(const n of this.items)n.photoMat.dispose(),n.haloMat.dispose(),this.scene.remove(n.group);this.items=[];const e=this.cfg.look;for(const n of t.planes){const i=n.photo.atlas,s=this.atlases[i.page]||this.atlases[0],a=new Ie(i.u0,i.v0,i.u1-i.u0,i.v1-i.v0),o=this.pool?.fallback||s,l=this.basePhoto.clone();l.uniforms={uAtlas:{value:s},uAtlasRect:{value:a},uMap:{value:o},uHasHi:{value:0},uSize:{value:new ce(n.w,n.h)},uTexW:{value:256},uRadius:{value:e.radius},uAlpha:{value:1},uBlur:{value:0},uDim:{value:1},uDesat:{value:0},uFog:{value:0},uBg:this.uBg,uSeed:{value:n.seed%1}};const c=this.baseHalo.clone(),u=1.15;c.uniforms={uAtlas:{value:s},uAtlasRect:{value:a},uSize:{value:new ce(n.w,n.h)},uPad:{value:u},uRadius:{value:e.radius},uAlpha:{value:1},uGlow:{value:e.glow},uShadow:{value:e.shadow}};const d=new Jn(this.geo,l),f=new Jn(this.geo,c);f.position.z=-.02;const h=new Ea;h.add(f,d),this.scene.add(h),this.items.push({p:n,group:h,photo:d,halo:f,photoMat:l,haloMat:c,pad:u,ambient:Dg(n.photo,this.cfg.look.tintMax),d:0,hover:0,hiMix:0})}}makePost(){const t={type:Si,depthBuffer:!0};this.rtScene=new Rn(4,4,t);const e={type:Si,depthBuffer:!1};this.rtA=new Rn(4,4,e),this.rtB=new Rn(4,4,e),this.rtC=new Rn(4,4,e),this.rtD=new Rn(4,4,e),this.postScene=new zf,this.postCam=new Ph(-1,1,1,-1,0,1);const n=new fi;n.setAttribute("position",new In(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),n.setAttribute("uv",new In(new Float32Array([0,0,2,0,0,2]),2)),this.quad=new Jn(n,null),this.quad.frustumCulled=!1,this.postScene.add(this.quad);const i=this.cfg.look;this.mBright=new sn({vertexShader:Ac,fragmentShader:s1,depthTest:!1,uniforms:{tInput:{value:null},uTexel:{value:new ce},uThreshold:{value:i.halationThreshold}}}),this.mBlur=new sn({vertexShader:Ac,fragmentShader:a1,depthTest:!1,uniforms:{tInput:{value:null},uDir:{value:new ce}}}),this.mComp=new sn({vertexShader:Ac,fragmentShader:o1,depthTest:!1,uniforms:{tScene:{value:this.rtScene.texture},tBloomA:{value:this.rtA.texture},tBloomB:{value:this.rtC.texture},uRes:{value:new ce},uTime:this.time,uGrain:{value:i.grain},uVignette:{value:i.vignette},uCA:{value:i.chromatic},uHalation:{value:i.halation},uLeak:{value:i.leaks},uFade:{value:1},uBg:this.uBg}})}pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.postScene,this.postCam)}resize(t,e){this.w=t,this.h=e,this.renderer.setPixelRatio(this.pr),this.renderer.setSize(t,e,!1);const n=Math.floor(t*this.pr),i=Math.floor(e*this.pr);this.rtScene.setSize(n,i);const s=Math.max(1,n>>2),a=Math.max(1,i>>2);this.rtA.setSize(s,a),this.rtB.setSize(s,a),this.rtC.setSize(Math.max(1,s>>1),Math.max(1,a>>1)),this.rtD.setSize(Math.max(1,s>>1),Math.max(1,a>>1)),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.bg.material.uniforms.uAspect.value=t/e,this.mComp.uniforms.uRes.value.set(n,i),this.dustMat.uniforms.uPR.value=this.pr,this.dustMat.uniforms.uScale.value=i/this.pr*1.2}setPixelRatio(t){Math.abs(t-this.pr)<.01||(this.pr=t,this.resize(this.w,this.h))}setInspect(t){this.inspectIdx=t,!(t<0)&&this.inspectMix<.05&&(this.inspectMix=0)}randomizePan(){this.idlePan={x:(Math.random()-.5)*1.4,y:(Math.random()-.5)*1.4},this.pointerActive=!1}setWallZoom(t,e=!1){if(this.wallZoomTarget=Math.min(4.2,Math.max(1,t)),e&&(this.wallZoom=this.wallZoomTarget,this.layout?.mosaicOpen)){const n=Math.max(0,1-1/this.wallZoom);this.pan.x=this.idlePan.x*this.layout.mosaicOpen.W*.5*n,this.pan.y=-this.idlePan.y*this.layout.mosaicOpen.H*.5*n}}intersectMosaic(t,e,n){return this._ndc.set(t,-e),this._ray.setFromCamera(this._ndc,this.camera),this._plane.constant=-n,this._ray.ray.intersectPlane(this._plane,this._hit)?{x:this._hit.x,y:this._hit.y}:null}pickMosaic(t,e,n){const i=this.intersectMosaic(t,e,n);if(!i)return-1;for(let s=0;s<this.items.length;s++){const a=this.items[s].p.slot;if(Math.abs(i.x-a.x)<=a.w*.5&&Math.abs(i.y-a.y)<=a.h*.5)return s}return-1}pickTunnel(t,e){if(!this._visible?.length)return-1;this._ndc.set(t,-e),this._ray.setFromCamera(this._ndc,this.camera);const n=[];for(const o of this._visible)o.alpha>.18&&n.push(o.photo);if(!n.length)return-1;const i=this._ray.intersectObjects(n,!1);if(!i.length)return-1;const s=i[0].object,a=this._visible.find(o=>o.photo===s);return a?a.p.i:-1}update(t,e,n){const i=this.cfg,s=i.look,a=i.camera;this.time.value=n,this.pool?.beginFrame();const o=this.camera,l=a.shake,c=Math.sin(n*.53)*.6+Math.sin(n*1.31+1.7)*.3+Math.sin(n*2.17+.3)*.1,u=Math.sin(n*.41+2.1)*.6+Math.sin(n*1.07+.9)*.3+Math.sin(n*2.71+2.2)*.1,d=Math.sin(n*.29+4)*.7+Math.sin(n*.83+1.1)*.3,f=this.locked?this.mouse.tx*.65:this.mouse.tx,h=this.locked?this.mouse.ty*.65:this.mouse.ty;this.mouse.x=Be(this.mouse.x,f,a.mouseDamping,e),this.mouse.y=Be(this.mouse.y,h,a.mouseDamping,e);const p=a.mouseLean*Math.PI/180,g=t.openAssemble||0,_=t.assemble||0,m=Math.max(g,_);this.inspectMix=Be(this.inspectMix,this.inspectIdx>=0?1:0,3.4,e);let x=t.camX,b=t.camY,S=t.camZ,A=0;if(this.inspectIdx>=0&&this.items[this.inspectIdx]){const P=this.items[this.inspectIdx].p,ht=P.z+P.fitD-t.camZ;A=Math.min(1,Math.abs(ht)/28)*this.inspectMix;const ft=this.inspectMix*(1-g)*(1-_),Bt=gi(28,0,Math.abs(ht))*ft;this.inspectOffset=this.inspectOffset||{x:0,y:0,z:0},this.inspectOffset.x=Be(this.inspectOffset.x,P.x-t.camX,4.2,e),this.inspectOffset.y=Be(this.inspectOffset.y,P.y-t.camY,4.2,e),this.inspectOffset.z=Be(this.inspectOffset.z,ht,5,e),x+=this.inspectOffset.x*ft,b+=this.inspectOffset.y*ft,S+=this.inspectOffset.z*Bt}else this.inspectOffset&&(this.inspectOffset.x=Be(this.inspectOffset.x,0,5.5,e),this.inspectOffset.y=Be(this.inspectOffset.y,0,5.5,e),this.inspectOffset.z=Be(this.inspectOffset.z,0,5.5,e),x+=this.inspectOffset.x*this.inspectMix,b+=this.inspectOffset.y*this.inspectMix,S+=this.inspectOffset.z*this.inspectMix);const E=m>.72?this.wallZoomTarget:1;this.wallZoom=Be(this.wallZoom,E,4.2,e);const w=Math.max(0,1-1/this.wallZoom),v=g>=_?this.layout.mosaicOpen:this.layout.mosaic,y=v.W*.5*w,I=v.H*.5*w,L=this.pointerActive&&!this.locked,N=(L?this.mouse.tx:this.idlePan.x)*y,z=-(L?this.mouse.ty:this.idlePan.y)*I;this.pan.x=Be(this.pan.x,N,3.4,e),this.pan.y=Be(this.pan.y,z,3.4,e),x+=this.pan.x*m,b+=this.pan.y*m,S-=v.dist*w*m;const V=l*(1-m*.72),W=1-w*.65;o.position.set(x+c*.018*V+this.mouse.x*(m>.5?.14:.12)*W,b+u*.014*V-this.mouse.y*(m>.5?.1:.08)*W,S),o.rotation.set(t.pitch+u*.0011*V+this.mouse.y*p*.6*W,t.yaw+c*.0013*V-this.mouse.x*p*W,t.roll+d*.0012*V);const O=Math.sin(n*.37)*a.breathing+Math.sin(n*.13+1)*a.breathing*.5;o.fov=t.fov+O*(1-m*.65),o.updateProjectionMatrix(),o.updateMatrixWorld();let U=-1,F=null;if(this.pointerActive)if(m>.72){if(F=this.intersectMosaic(this.mouse.tx,this.mouse.ty,v.z),F)for(let P=0;P<this.items.length;P++){const ht=this.items[P].p.slot;if(Math.abs(F.x-ht.x)<=ht.w*.5&&Math.abs(F.y-ht.y)<=ht.h*.5){U=P;break}}}else U=this.pickTunnel(this.mouse.tx,this.mouse.ty);F&&U>=0&&(this.lens.x=Be(this.lens.x,F.x,8.5,e),this.lens.y=Be(this.lens.y,F.y,8.5,e)),this.lens.strength=Be(this.lens.strength,m>.72&&F?1:0,5.5,e),this.hoveredIdx=U,this.hoverAmount=Be(this.hoverAmount,U>=0?1:0,6,e);const k=v.W*.125/Math.sqrt(this.wallZoom),C=2*k*k,st=this.locked?.22:1,ct=this.lens.strength*m*st,xt=o.position.z,Lt=i.layout.fogFar,Rt=[];let Y=1e9,et=1e9;const it=[0,0,0];let Ct=0;const Ut=g<=.001&&_<=.001;for(let P=0;P<this.items.length;P++){const ht=this.items[P],ft=ht.p,Bt=P===U?1:0;if(ht.hover=Be(ht.hover,Bt,Bt?8.5:5,e),Ut){const St=xt-ft.z;if(St<-1||St>Lt+45){ht.group.visible=!1;continue}}let Mt,R,M,B=1,Q=ft.rotZ,tt=ft.rotY,q=1;if(g>.001){const St=Math.min(1,Math.max(0,(g*1.45-ft.openDelay)/.85)),D=Sd(St),lt=ft.slot,ot=this.layout.mosaicOpen.z+lt.dz,gt=lt.w/ft.w;Mt=ft.x+(lt.x-ft.x)*D,R=ft.y+(lt.y-ft.y)*D,M=ft.z+(ot-ft.z)*D,B=1+(gt-1)*D,Q=ft.rotZ+(lt.rotZ-ft.rotZ)*D,tt=ft.rotY*(1-D);const ut=xt-M;g<.99&&!(P===this.inspectIdx&&this.inspectMix>.15)&&(q=gi(ft.fadeNear[0],ft.fadeNear[1],ut)*(1-gi(Lt*.72,Lt,ut)*(1-D)))}else if(_<=.001){Mt=ft.x,R=ft.y,M=ft.z;const St=xt-M,D=1-gi(4,34,St),lt=1-gi(.4,7,St);if(B=.93+.07*D,Mt+=Math.cos(n*.17+ft.seed)*.035-x*(ft.layer-.5)*.12,R+=Math.sin(n*.21+ft.seed*1.3)*.045,Q+=Math.sin(n*.11+ft.seed)*.004,!ft.feature&&!(P===this.inspectIdx&&this.inspectMix>.15)){const gt=Math.hypot(ft.x,ft.y)||1;Mt+=ft.x/gt*lt*1.15,R+=ft.y/gt*lt*.85,tt+=ft.side*lt*.14}q=(P===this.inspectIdx&&this.inspectMix>.15?1:gi(ft.fadeNear[0],ft.fadeNear[1],St))*(1-gi(Lt*.72,Lt,St))}else{const St=Math.min(1,Math.max(0,(_*1.55-ft.delay)/.82)),D=Sd(St),lt=ft.start,ot=ft.slot,gt=this.layout.mosaic.z+ot.dz;if(Mt=lt.x+(ot.x-lt.x)*D,R=lt.y+(ot.y-lt.y)*D,M=lt.z+(gt-lt.z)*D,B=1+(ot.scale-1)*D,Q=ft.rotZ+(ot.rotZ-ft.rotZ)*D,tt=ft.deep?0:ft.rotY*(1-D),q=ft.deep?gi(0,.35,St):1,!ft.deep){const ut=xt-M;q*=gi(ft.fadeNear[0],ft.fadeNear[1],ut)}}let vt=0;if(ct>.004){const St=ft.slot.x-this.lens.x,D=ft.slot.y-this.lens.y,lt=St*St+D*D;if(vt=Math.exp(-lt/C)*ct,vt>.002){const ot=Math.sqrt(lt),gt=vt*(1-Math.exp(-ot*1.6))*(.38/Math.sqrt(this.wallZoom));ot>.001&&(Mt+=St/ot*gt,R+=D/ot*gt),M+=vt*.56/Math.sqrt(this.wallZoom),B*=1+vt*.36,Q*=1-vt}}let pt=0;if(ht.hover>.001){const St=ht.hover*st;m>.5?(M+=St*.6/Math.sqrt(this.wallZoom),B*=1+St*.16,Q*=1-St):(M+=St*.45,B*=1+St*.075),pt=-this.mouse.y*St*.045,tt+=this.mouse.x*St*.055}ht.lens=vt;const H=xt-M;if(this.inspectIdx>=0&&Ut&&(P<this.inspectIdx?q*=1-this.inspectMix:P!==this.inspectIdx&&A>.01&&(q*=1-A*.72)),q<.004||H<.05||H>Lt+45){ht.group.visible=!1;continue}ht.group.visible=!0,ht.group.position.set(Mt,R,M),ht.group.rotation.set(pt,tt,Q);const rt=ft.w*B,j=ft.h*B;ht.photo.scale.set(rt,j,1),ht.halo.scale.set(rt+ht.pad*2*B,j+ht.pad*2*B,1),ht.photoMat.uniforms.uSize.value.set(rt,j),ht.haloMat.uniforms.uSize.value.set(rt,j),ht.haloMat.uniforms.uPad.value=ht.pad*B,ht.d=H,ht.alpha=q,ht.x=Mt,ht.y=R,Rt.push(ht);const at=P===this.inspectIdx,_t=m>.65&&this.wallZoom>1.3&&Math.abs(Mt-o.position.x)<v.W*.45/this.wallZoom+rt&&Math.abs(R-o.position.y)<v.H*.45/this.wallZoom+j;if((ht.hover>.05||vt>.35||at||_t||m<.6&&H<60)&&this.pool){const St=at||ht.hover>.05?-20:_t?Math.hypot(Mt-o.position.x,R-o.position.y):H;this.pool.request(ft.photo,St,ft.feature||ht.hover>.05||at);const D=this.pool.get(ft.photo.file);D?(ht.photoMat.uniforms.uMap.value!==D.texture&&(ht.photoMat.uniforms.uMap.value=D.texture,ht.photoMat.uniforms.uTexW.value=D.width),ht.hiMix=Be(ht.hiMix,1,14,e)):ht.hiMix=Be(ht.hiMix,0,10,e)}else ht.hiMix=Be(ht.hiMix,0,10,e);ht.photoMat.uniforms.uHasHi.value=ht.hiMix;const mt=Math.hypot(Mt-o.position.x,R-o.position.y)/Math.max(1,H*this.layout.tanH);if(H>.25&&q>.35&&m<.5){const St=ft.zoom&&H<5||P===this.inspectIdx?.05:1,D=H*(1+mt*mt*2.5)*St;D<et&&(et=D,Y=H)}if(m<.7||H<28){const St=P===this.inspectIdx?8:P===U?5:ft.feature&&H<12?2.5:1,D=q*St*Math.exp(-H/8.5)*Math.exp(-mt*mt*1.6);it[0]+=ht.ambient[0]*D,it[1]+=ht.ambient[1]*D,it[2]+=ht.ambient[2]*D,Ct+=D}}g>=.5?Y=xt-this.layout.mosaicOpen.z:_>=.5&&(Y=xt-this.layout.mosaic.z),Y<1e8&&(this.focus=Be(this.focus,Y,this.inspectIdx>=0?9:3.2,e));const Pt=s.tint,jt=Ct>0?Sl(it,1/Math.max(Ct,.25)):this.bgCol,yt=Ml(this.bgCol,jt,Pt);Mf(this.ambient,yt,2.5,e),this.uBg.value.setRGB(...this.ambient),this.liftNow=this.liftNow||[...this.liftCol];const Vt=Ml(this.liftCol,Sl(jt,1.9),Pt);Mf(this.liftNow,Vt,2.5,e),this.uLift.value.setRGB(...this.liftNow.map((P,ht)=>P+(this.ambient[ht]-P)*t.dim*.35));const Yt=.014*s.blur,zt=this.focus,X=m>.5?Math.min(1,Math.max(0,(this.wallZoom-1.05)*1.4)):0;for(const P of Rt){const ht=P.d,ft=Math.min(1,P.hover+(P.lens||0)*.85),Bt=Math.min(1,Math.max(ft,X)),Mt=Math.abs(ht-zt)/Math.max(ht,.3);let R=Math.min(.011,Mt*Yt);m>.5?R=t.dim*.0018*(1-Bt):this.inspectIdx>=0&&P.p.i===this.inspectIdx?R*=1-this.inspectMix:R*=1-ft;const M=gi(16,76,ht)*(1-m),B=(1-M*s.distanceDim)*(1-t.dim*.62),Q=B+(1-B)*Bt,tt=(M*s.distanceDesat+t.dim*.22)*(1-Bt),q=P.photoMat.uniforms;q.uBlur.value=R,q.uAlpha.value=P.alpha,q.uDim.value=Q,q.uDesat.value=tt,q.uFog.value=gi(s.fogNear,s.fogFar,ht)*s.fog*(1-m*.9)*(1-Bt*.6);const vt=m<.65||P.hover>.01||(P.lens||0)>.2;if(P.halo.visible=vt,vt){const pt=P.haloMat.uniforms;pt.uAlpha.value=P.alpha*(1-q.uFog.value)*(1-M*.45),pt.uGlow.value=s.glow*(m>.5?.22+ft*1.4:(1-t.dim*.65)*(1+P.hover*.9))}}return m>.5?Rt.sort((P,ht)=>(P.hover-ht.hover)*100||((P.lens||0)-(ht.lens||0))*20||ht.d-P.d):Rt.sort((P,ht)=>ht.d-P.d),Rt.forEach((P,ht)=>{P.halo.renderOrder=ht*2,P.photo.renderOrder=ht*2+1}),this._visible=Rt,this.dustMat.uniforms.uCam.value.copy(o.position),this.dustMat.uniforms.uTint.value.setRGB(1,.93,.85),{ambient:this.ambient,hoveredIdx:U,hoverAmount:this.hoverAmount,wallZoom:this.wallZoom,mosaicMode:m}}render(t=1){const e=this.renderer;e.setRenderTarget(this.rtScene),e.setClearColor(this.uBg.value,1),e.clear(!0,!0,!0),e.render(this.scene,this.camera);const n=this.rtScene.width,i=this.rtScene.height;this.mBright.uniforms.tInput.value=this.rtScene.texture,this.mBright.uniforms.uTexel.value.set(1.5/n,1.5/i),this.pass(this.mBright,this.rtA),this.mBlur.uniforms.tInput.value=this.rtA.texture,this.mBlur.uniforms.uDir.value.set(1/this.rtA.width,0),this.pass(this.mBlur,this.rtB),this.mBlur.uniforms.tInput.value=this.rtB.texture,this.mBlur.uniforms.uDir.value.set(0,1/this.rtA.height),this.pass(this.mBlur,this.rtA),this.mBlur.uniforms.tInput.value=this.rtA.texture,this.mBlur.uniforms.uDir.value.set(2/this.rtC.width,0),this.pass(this.mBlur,this.rtC),this.mBlur.uniforms.tInput.value=this.rtC.texture,this.mBlur.uniforms.uDir.value.set(0,2/this.rtC.height),this.pass(this.mBlur,this.rtD),this.mComp.uniforms.tBloomB.value=this.rtD.texture,this.mComp.uniforms.uFade.value=t,this.pass(this.mComp,null)}}function c1(){const r=document.getElementById("loader"),t=r.querySelector(".loader__line i");let e=0,n=0,i,s=performance.now();const a=(o=performance.now())=>{const l=Math.min(.1,(o-s)/1e3);s=o,e+=(n-e)*(1-Math.exp(-5.2*l)),t.style.transform=`scaleX(${e.toFixed(4)})`,i=requestAnimationFrame(a)};return a(),{set(o){n=Math.max(n,o)},async finish(){n=1;const o=performance.now();await new Promise(l=>{const c=()=>e>.985||performance.now()-o>950?l():setTimeout(c,25);c()}),t.style.transform="scaleX(1)"},hide(o=1.6){r.style.transition=`opacity ${o}s cubic-bezier(.65,0,.35,1)`,r.style.opacity="0",setTimeout(()=>{cancelAnimationFrame(i),r.remove()},o*1e3+50)}}}const yd=typeof createImageBitmap=="function";async function Xu(r,t,e,{flipY:n=!0}={}){let i;if(yd){const a=await(await fetch(r)).blob();i=await createImageBitmap(a,{imageOrientation:n?"flipY":"none",premultiplyAlpha:"none",colorSpaceConversion:"none"})}else i=await new Promise((a,o)=>{const l=new Image;l.onload=()=>a(l),l.onerror=o,l.src=r});const s=new Mn(i);return s.flipY=yd?!1:n,s.colorSpace=qn,s.generateMipmaps=!0,s.minFilter=yr,s.magFilter=ln,s.anisotropy=e,s.wrapS=s.wrapT=Di,s.needsUpdate=!0,t.initTexture(s),{texture:s,width:i.width,height:i.height,source:i}}async function u1(r,t,e,n){const i=Math.min(e.perf.anisotropy,t.capabilities.getMaxAnisotropy());let s=0;return await Promise.all(r.map(async o=>{const l=await Xu("./"+o,t,i,{flipY:!0});return s++,n(s/r.length),l.texture}))}function h1(r,t,e,n=28){const i=Math.max(window.innerWidth,window.innerHeight)*Math.min(2,window.devicePixelRatio||1)>1500,s=Math.min(t.perf.anisotropy,r.capabilities.getMaxAnisotropy()),a=new Map,o=new Map,l=[];let c=0,u=0;const d=()=>{for(;c<2&&l.length;){l.sort((m,x)=>m.priority-x.priority);const h=l.shift();if(a.has(h.photo.file)||o.has(h.photo.file))continue;c++;const p=i&&h.hiRes?2048:1024,g="./"+(h.photo.tex?.[p]||h.photo.src),_=Xu(g,r,s,{flipY:!0}).then(m=>{a.set(h.photo.file,{...m,usedAt:u}),f()}).catch(m=>console.warn("hi-res load skipped",h.photo.file,m)).finally(()=>{o.delete(h.photo.file),c--,d()});o.set(h.photo.file,_)}},f=()=>{if(a.size<=n)return;const h=[...a.entries()].sort((p,g)=>p[1].usedAt-g[1].usedAt);for(;a.size>n&&h.length;){const[p,g]=h.shift();if(u-g.usedAt<6)break;g.texture.dispose(),g.source?.close?.(),a.delete(p)}};return{fallback:e,beginFrame(){u++},get(h){const p=a.get(h);return p?(p.usedAt=u,p):null},request(h,p=0,g=!1){if(a.has(h.file)||o.has(h.file))return;const _=l.find(m=>m.photo.file===h.file);if(_){_.priority=Math.min(_.priority,p);return}l.push({photo:h,priority:p,hiRes:g}),l.length>48&&(l.sort((m,x)=>m.priority-x.priority),l.length=48),d()},async preload(h,p){let g=0;await Promise.all(h.map(async _=>{const m="./"+(_.tex?.[i?2048:1024]||_.src);try{const x=await Xu(m,r,s,{flipY:!0});a.set(_.file,{...x,usedAt:u})}catch(x){console.warn("preload skipped",_.file,x)}g++,p?.(g/h.length)}))}}}function f1(){const r=document.getElementById("finaleName"),t=r?.querySelector(".finale__wordmark");if(!r||!t)return;const e=()=>{if(!t.naturalWidth||r.querySelector(".finale__dots"))return;const n=t.naturalWidth,i=t.naturalHeight,s=document.createElement("canvas");s.width=n,s.height=i;const a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(t,0,0);const{data:o}=a.getImageData(0,0,n,i),l=new Uint8Array(n*i),c=[],u=new Int32Array(4096),d=new Int32Array(4096);for(let E=0;E<i;E++)for(let w=0;w<n;w++){const v=E*n+w;if(l[v]||o[v*4+3]<95)continue;let y=0,I=0;u[I]=w,d[I]=E,I++,l[v]=1;let L=0,N=0,z=0;for(;y<I;){const V=u[y],W=d[y];y++,L+=V,N+=W,z++;for(let O=-1;O<=1;O++)for(let U=-1;U<=1;U++){const F=V+U,k=W+O;if(F<0||F>=n||k<0||k>=i)continue;const C=k*n+F;!l[C]&&o[C*4+3]>=95&&I<u.length&&(l[C]=1,u[I]=F,d[I]=k,I++)}}z>=6&&c.push({bx:L/z,by:N/z,r:Math.max(2.2,Math.sqrt(z/Math.PI)),ox:0,oy:0,vx:0,vy:0,glow:0,phase:Math.random()*Math.PI*2})}if(!c.length)return;const f=document.createElement("canvas");f.className="finale__dots",f.setAttribute("aria-hidden","true"),r.appendChild(f),t.classList.add("is-canvas-backed");const h=f.getContext("2d"),p={x:-9999,y:-9999,active:!1};let g=0,_=0,m=1;const x=()=>{const E=r.getBoundingClientRect();!E.width||!E.height||(m=Math.min(window.devicePixelRatio||1,2),g=E.width,_=E.height,f.width=Math.round(g*m),f.height=Math.round(_*m))};x(),window.addEventListener("resize",x),window.addEventListener("pointermove",E=>{const w=r.getBoundingClientRect();w.width&&(p.x=(E.clientX-w.left)/w.width*n,p.y=(E.clientY-w.top)/w.height*i,p.active=!0)}),window.addEventListener("pointerleave",()=>{p.active=!1});const b=document.getElementById("finale");let S=performance.now();const A=E=>{requestAnimationFrame(A);const w=Math.min(.05,(E-S)/1e3);if(S=E,!b?.classList.contains("is-live")||((!g||!_)&&x(),!g||!_))return;const v=g/n,y=_/i,I=E*.001;h.setTransform(m,0,0,m,0,0),h.clearRect(0,0,g,_);const L=Math.sin(I*1.7)>.985||Math.sin(I*4.3)>.992?.62:.96;for(let N=0;N<c.length;N++){const z=c[N];let V=0,W=0,O=0;if(p.active){const st=z.bx-p.x,ct=z.by-p.y,xt=Math.hypot(st,ct),Lt=58;if(xt<Lt&&xt>.01){const Rt=1-xt/Lt,Y=Rt*Rt*11;V=st/xt*Y,W=ct/xt*Y,O=Rt}}z.vx=(z.vx+(V-z.ox)*180*w)*Math.exp(-11*w),z.vy=(z.vy+(W-z.oy)*180*w)*Math.exp(-11*w),z.ox+=z.vx*w,z.oy+=z.vy*w,z.glow+=(O-z.glow)*Math.min(1,w*12);const U=(z.bx+z.ox)*v,F=(z.by+z.oy)*y,k=z.r*Math.min(v,y)*(1+z.glow*.28),C=Math.min(1,L*(.88+.08*Math.sin(I*2.1+z.phase))+z.glow*.14);h.beginPath(),h.arc(U,F,k,0,Math.PI*2),h.fillStyle=z.glow>.05?`rgba(255, 252, 246, ${C.toFixed(3)})`:`rgba(244, 238, 228, ${C.toFixed(3)})`,z.glow>.15?(h.shadowColor="rgba(248, 244, 236, 0.55)",h.shadowBlur=10*z.glow):h.shadowBlur=0,h.fill()}h.shadowBlur=0};requestAnimationFrame(A)};t.complete&&t.naturalWidth?e():t.addEventListener("load",e,{once:!0})}xr.registerPlugin(Zt);const dr=new URLSearchParams(location.search),d1=window.matchMedia("(prefers-reduced-motion: reduce)").matches||dr.has("calm"),bd=window.matchMedia("(pointer: fine)").matches,pa=()=>window.innerWidth<760||window.innerWidth/window.innerHeight<.8,Pm=(r,t)=>r.photos.alt[t.file]||t.file.replace(/\.[^.]+$/,"").replace(/[-_]+/g," ");function p1(r){const t=r.site,e=document.getElementById("mark");e&&(e.textContent=t.name,e.href=t.nameHref);const n=document.getElementById("finaleName");n&&(n.querySelector(".finale__wordmark")||(n.innerHTML='<img class="finale__wordmark" src="./wordmark.png" alt="avery beuth" />'),n.href=t.nameHref,f1());const i=document.getElementById("finaleContact");i&&(i.textContent=t.contactText,i.href=t.contactHref);const s=document.getElementById("allPhotos");s&&(s.textContent=t.allPhotosText),document.title=t.title||t.name}function m1(r,t){const e=document.getElementById("srList");e.innerHTML=t.map(n=>`<li><img src="${n.tex?.[1024]||n.src}" alt="${Pm(r,n).replace(/"/g,"&quot;")}" loading="lazy" width="${n.width}" height="${n.height}"></li>`).join("")}function Ed(r,t){document.documentElement.classList.add("rm","ready"),document.getElementById("loader")?.remove();const e=document.getElementById("calm");e.hidden=!1,e.innerHTML=t.map(i=>`<figure><img src="${i.tex?.[2048]||i.src}" alt="${Pm(r,i).replace(/"/g,"&quot;")}" width="${i.width}" height="${i.height}" loading="lazy" decoding="async"></figure>`).join("")+`<div class="calm__end"><a class="finale__name" href="${r.site.nameHref}">${r.site.title||r.site.name}</a><div class="finale__links"><a class="finale__contact" href="${r.site.contactHref}" target="_blank" rel="noopener">${r.site.contactText}</a></div><nav class="finale__nav" aria-label="Portfolio sections"><a href="./code.html">code</a><span class="finale__sep" aria-hidden="true">·</span><a href="./scripts/index.html">scripts</a><span class="finale__sep" aria-hidden="true">·</span><a href="./music.html">music</a><span class="finale__sep" aria-hidden="true">·</span><a href="./film.html">films</a></nav></div>`,document.getElementById("srList").remove();const n=new IntersectionObserver(i=>i.forEach(s=>s.isIntersecting&&s.target.classList.add("is-in")),{threshold:.15});e.querySelectorAll("figure").forEach(i=>n.observe(i))}async function _1(){Dm(),Lm();const r=performance.now();let t=xf(pa());p1(t);const e=await(await fetch("./photos.json",{cache:"no-cache"})).json(),n=Ig(e.photos,t);if(m1(t,n),d1)return Ed(t,n);const i=document.getElementById("gl");let s;try{s=new l1(i,t,[],null)}catch(H){return console.warn(H),Ed(t,n)}const a=c1(),o=await u1(e.atlases||[],s.renderer,t,H=>a.set(H*.68)),l=h1(s.renderer,t,o[0],28);await l.preload(n.slice(0,Math.min(8,n.length)),H=>a.set(.68+H*.28)),s.atlases=o,s.pool=l,await document.fonts?.ready,await a.finish();const c=Og(t);let u,d,f;const h=document.getElementById("scroll"),p=new Ag({lerp:t.scroll.lerp,wheelMultiplier:t.scroll.wheelMultiplier,touchMultiplier:t.scroll.touchMultiplier,syncTouch:!bd,syncTouchLerp:.095,respectReducedMotion:!1});p.on("scroll",Zt.update),window.__lenis=p;const g=document.querySelector(".progress i"),_=document.getElementById("allPhotos"),m=document.getElementById("zoomBtn"),x=()=>{if(!m)return;const H=s.wallZoomTarget>1.25;m.setAttribute("aria-pressed",String(H)),m.textContent=H?"zoom out":t.site.zoomText},b=dr.has("p")?Math.min(1,Math.max(0,parseFloat(dr.get("p"))||0)):0;let S=b===0&&!dr.has("zoom")&&!dr.has("overview"),A=dr.has("zoom"),E=0,w=A?0:1;s.locked=S,S&&p.stop(),document.body.classList.toggle("is-locked",S);const v=()=>{S&&(S=!1,E=performance.now(),s.locked=!1,A=!0,document.body.classList.remove("is-locked"),p.start(),yt.whoosh())};p.options.virtualScroll=H=>{if(H.event?.target?.closest?.("a, button, input, .themes-backdrop, .theme-shell, .inspect-bar"))return!1;if(S)return H.event.cancelable&&H.event.preventDefault(),!1;if(!(Math.max(c.openAssemble||0,c.assemble||0)>.72))return!0;const j=H.event.ctrlKey,at=p.targetScroll<=24&&(H.deltaY<0||s.wallZoomTarget>1.02);if(j||at){if(H.event.cancelable&&H.event.preventDefault(),!j&&H.deltaY<-4&&s.wallZoomTarget<1.3)s.setWallZoom(2.35),yt.whoosh();else{const _t=Math.exp(-H.deltaY*(j?.0085:.0026)),dt=s.wallZoomTarget*_t;s.setWallZoom(dt<1.04?1:dt)}return x(),U(p.targetScroll),!1}return!0};function y(H=0){t=xf(pa()),s.cfg=t;const rt=window.innerWidth,j=window.innerHeight;s.resize(rt,j),u=Ng(n,t,{aspect:rt/j}),s.setLayout(u),d&&d.tl.kill(),f?.kill(),d=zg(u,t,c),h.style.height=`${Math.round(d.duration*j+j)}px`,f=Zt.create({trigger:h,start:"top top",end:"bottom bottom",scrub:t.scroll.scrub,animation:d.tl,onUpdate:at=>{g.style.transform=`scaleX(${at.progress.toFixed(4)})`,_&&(_.textContent=at.progress>.96?"top":t.site.allPhotosText)}}),d.tl.progress(H).progress(0).progress(H),Zt.refresh(),p.resize(),H>0&&p.scrollTo(H*Zt.maxScroll(window),{immediate:!0,force:!0})}y(b),b===0&&window.scrollTo(0,0),b===0&&!dr.has("overview")&&(s.setWallZoom(2.55,!0),x());const I=b>0?{z:0,fade:1}:{z:.35,fade:0},L=b>0?50:Math.max(380,1550-(performance.now()-r));setTimeout(()=>{b===0&&(xr.to(I,{z:0,duration:2,ease:t.ease.glide}),xr.to(I,{fade:1,duration:1.35,ease:t.ease.fade,delay:.05})),a.hide(b>0?.45:1.15),document.documentElement.classList.add("ready")},L);const N=document.getElementById("hint"),z=N?.querySelector("span"),V=document.getElementById("finalePrompt");(()=>{const H=!bd||pa();z&&(z.textContent=H?"swipe to explore · tap any photo":"hold space or scroll"),V&&(V.textContent=H?"tap anywhere to browse photos":"click anywhere to browse photos")})();const O=()=>N.classList.remove("is-on"),U=(H=window.scrollY)=>{if(b>0)return;const rt=H<=36&&s.wallZoomTarget<=1.05;N.classList.toggle("is-on",rt)};b===0&&setTimeout(()=>U(window.scrollY),450),p.on("scroll",({scroll:H})=>U(H));const F=(H=!1)=>{O();const rt=S;v(),A=!0,H&&!rt&&s.randomizePan();const j=f?.progress||0;j>.08&&j<.92&&(s.setInspect(-1),p.scrollTo(0,{duration:1,easing:at=>1-Math.pow(1-at,3),force:!0})),s.setWallZoom(2.55),x(),U(p.targetScroll),rt||yt.whoosh()};m?.addEventListener("click",()=>{if(O(),S){v(),s.setWallZoom(1),A=!1,x(),U(p.targetScroll);return}s.wallZoomTarget>1.25?(s.setWallZoom(1),A=!1):(s.randomizePan(),s.setWallZoom(2.55),A=!0),x(),U(p.targetScroll),yt.whoosh()}),document.getElementById("finalePhotos")?.addEventListener("click",H=>{H.preventDefault(),F(!1)}),document.getElementById("sidePhotos")?.addEventListener("click",H=>{H.preventDefault(),F(A&&s.wallZoomTarget>1.25)}),document.getElementById("mark")?.addEventListener("click",H=>{(f?.progress||0)<.02&&!A||(H.preventDefault(),A=!1,S=!0,s.locked=!0,s.setWallZoom(2.55),p.stop(),document.body.classList.add("is-locked"),x(),O(),yt.whoosh(),(f?.progress||0)>=.02&&p.scrollTo(0,{duration:1.2,force:!0}))}),_?.addEventListener("click",()=>{O(),v(),s.setWallZoom(1),x(),s.setInspect(-1),yt.whoosh();const H=Zt.maxScroll(window),rt=(f?.progress||0)>.96;p.scrollTo(rt?0:H,{duration:1.75,easing:j=>j<.5?8*j*j*j*j:1-Math.pow(-2*j+2,4)/2,force:!0})});let k=null;window.addEventListener("pointerdown",H=>{H.target.closest("a, button, input, .themes-backdrop, .theme-shell, .inspect-bar")||(k={x:H.clientX,y:H.clientY},!S&&H.pointerType!=="mouse"&&(s.pointerActive=!0,s.mouse.tx=H.clientX/innerWidth*2-1,s.mouse.ty=H.clientY/innerHeight*2-1))});const C=document.getElementById("photoCounter"),st=H=>String(H).padStart(3,"0"),ct=document.createElement("div");ct.className="inspect-bar",ct.id="inspectBar",ct.setAttribute("role","region"),ct.setAttribute("aria-label","Photo navigation"),ct.innerHTML=`
    <button type="button" class="inspect-bar__btn" id="inspectPrev" aria-label="Previous photo">&lsaquo; prev</button>
    <span class="inspect-bar__count" id="inspectBarCount"></span>
    <button type="button" class="inspect-bar__btn" id="inspectNext" aria-label="Next photo">next &rsaquo;</button>
    <button type="button" class="inspect-bar__btn inspect-bar__close" id="inspectClose" aria-label="Close photo">&times;</button>
  `,document.body.appendChild(ct);const xt=document.getElementById("inspectBarCount"),Lt=H=>{const rt=H>=0&&H<u.planes.length;if(document.body.classList.toggle("is-inspecting",rt),ct.classList.toggle("is-on",rt),rt){const j=`${st(H+1)} / ${st(u.planes.length)}`;C&&(C.textContent=j,C.classList.add("is-on")),xt&&(xt.textContent=j)}else C?.classList.remove("is-on")},Rt=H=>{if(H<0||H>=u.planes.length)return;O();const rt=Zt.maxScroll(window),j=d.photoProgress[H]*rt,at=Math.abs(j-p.targetScroll),_t=Math.min(2.6,Math.max(1.15,1.1+at/8500));for(let dt=-2;dt<=2;dt++){const mt=u.planes[H+dt]?.photo;mt&&l.request(mt,dt===0?-30:-10,dt===0)}s.setWallZoom(1),x(),s.setInspect(H),Lt(H),yt.whoosh(),p.scrollTo(j,{duration:_t,easing:dt=>dt<.5?16*dt*dt*dt*dt*dt:1-Math.pow(-2*dt+2,5)/2,force:!0})},Y=H=>{const rt=u.planes.length;if(!rt)return;let j=s.inspectIdx;if(j<0){const _t=Zt.maxScroll(window)>0?p.targetScroll/Zt.maxScroll(window):0;let dt=0,mt=1/0;for(let St=0;St<rt;St++){const D=Math.abs(d.photoProgress[St]-_t);D<mt&&(mt=D,dt=St)}j=dt}const at=Math.max(0,Math.min(rt-1,j+H));(at!==j||s.inspectIdx<0)&&Rt(at)};window.addEventListener("pointerup",H=>{if(!k)return;const rt=Math.hypot(H.clientX-k.x,H.clientY-k.y);if(k=null,rt>8||H.target.closest("a, button, input, .themes-backdrop, .theme-shell, .inspect-bar"))return;if(S||!A||performance.now()-E<350){v(),A=!0,H.pointerType==="mouse"&&(s.pointerActive=!0,s.mouse.tx=H.clientX/innerWidth*2-1,s.mouse.ty=H.clientY/innerHeight*2-1);return}const j=c.openAssemble||0,at=c.assemble||0,_t=H.clientX/innerWidth*2-1,dt=H.clientY/innerHeight*2-1;let mt=-1;if(Math.max(j,at)>.72){const St=j>=at?u.mosaicOpen.z:u.mosaic.z;mt=s.pickMosaic(_t,dt,St)}else mt=s.pickTunnel(_t,dt);mt>=0&&Rt(mt)});const et=()=>{s.inspectIdx>=0&&(s.inspectIdx=-1),Lt(-1)};document.getElementById("inspectPrev")?.addEventListener("click",()=>Y(-1)),document.getElementById("inspectNext")?.addEventListener("click",()=>Y(1)),document.getElementById("inspectClose")?.addEventListener("click",et),window.addEventListener("wheel",et,{passive:!0});let it=null,Ct=null;const Ut=(H,rt)=>Math.hypot(rt.clientX-H.clientX,rt.clientY-H.clientY);window.addEventListener("touchstart",H=>{if(H.target.closest("a, button, .inspect-bar, .themes-backdrop")||S)return;const rt=Math.max(c.openAssemble||0,c.assemble||0)>.72;if(H.touches.length===2&&rt){Ct={dist:Ut(H.touches[0],H.touches[1]),zoom:s.wallZoomTarget},it=null;return}if(H.touches.length===1){const j=H.touches[0];it={sx:j.clientX,sy:j.clientY,lx:j.clientX,ly:j.clientY,moved:!1,panningWall:rt&&s.wallZoomTarget>1.25&&s.inspectIdx<0},it.panningWall&&(s.pointerActive=!0)}},{passive:!0}),window.addEventListener("touchmove",H=>{if(S)return;if(Ct&&H.touches.length===2){H.cancelable&&H.preventDefault();const _t=Ut(H.touches[0],H.touches[1]);if(Ct.dist>10){const dt=Ct.zoom*(_t/Ct.dist);s.setWallZoom(dt<1.08?1:dt),x(),U(p.targetScroll)}return}if(!it||H.touches.length!==1)return;const rt=H.touches[0],j=rt.clientX-it.lx,at=rt.clientY-it.ly;if(it.lx=rt.clientX,it.ly=rt.clientY,Math.hypot(rt.clientX-it.sx,rt.clientY-it.sy)>8&&(it.moved=!0),it.panningWall){H.cancelable&&H.preventDefault();const _t=2.2/Math.max(280,window.innerWidth),dt=2.2/Math.max(360,window.innerHeight);s.pointerActive=!0,s.mouse.tx=Math.max(-1,Math.min(1,s.mouse.tx-j*_t)),s.mouse.ty=Math.max(-1,Math.min(1,s.mouse.ty-at*dt))}else s.inspectIdx>=0&&Math.abs(rt.clientX-it.sx)>Math.abs(rt.clientY-it.sy)&&Math.abs(rt.clientX-it.sx)>14&&H.cancelable&&H.preventDefault()},{passive:!1}),window.addEventListener("touchend",H=>{if(Ct&&H.touches.length<2&&(Ct=null),!!it){if(s.inspectIdx>=0&&it.moved){const rt=it.lx-it.sx,j=it.ly-it.sy;Math.abs(rt)>40&&Math.abs(rt)>Math.abs(j)*1.2?Y(rt<0?1:-1):Math.abs(j)>48&&Math.abs(j)>Math.abs(rt)*1.2&&et()}it=null}},{passive:!0});let Pt=!1,jt=0;window.addEventListener("keydown",H=>{if(H.target.closest("a, button, input, textarea"))return;if(S){(H.code==="Space"||H.key.startsWith("Arrow")||H.key.startsWith("Page"))&&H.preventDefault();return}if(H.key.toLowerCase()==="r"&&!H.ctrlKey&&!H.metaKey&&!H.altKey){H.preventDefault();const j=u.planes.length;j&&Rt(Math.floor(Math.random()*j));return}if(H.key==="Escape"){if(s.inspectIdx>=0){H.preventDefault(),et();return}if(s.wallZoomTarget>1.05){H.preventDefault(),s.setWallZoom(1),x(),U(p.targetScroll);return}}if(H.key==="ArrowRight"){H.preventDefault(),Y(1);return}if(H.key==="ArrowLeft"){H.preventDefault(),Y(-1);return}if(H.code==="Space"){H.preventDefault(),Pt=!0,O(),et(),s.wallZoomTarget>1.02&&(s.setWallZoom(1),x());return}const rt=innerHeight*.65;H.key==="ArrowDown"||H.key==="PageDown"?(H.preventDefault(),O(),et(),p.scrollTo(Math.min(p.limit,p.targetScroll+(H.key==="ArrowDown"?240:rt)),{duration:.7})):(H.key==="ArrowUp"||H.key==="PageUp")&&(H.preventDefault(),et(),p.scrollTo(Math.max(0,p.targetScroll-(H.key==="ArrowUp"?240:rt)),{duration:.7}))}),window.addEventListener("keyup",H=>{H.code==="Space"&&(Pt=!1)}),window.addEventListener("blur",()=>{Pt=!1});const yt=new Im,Vt=()=>yt.unlockSfx();window.addEventListener("pointerdown",Vt,{once:!0,passive:!0}),window.addEventListener("keydown",Vt,{once:!0,passive:!0}),window.addEventListener("wheel",Vt,{once:!0,passive:!0});const Yt=document.getElementById("sound");Yt.addEventListener("click",()=>{const H=yt.toggle();Yt.setAttribute("aria-pressed",String(H)),Yt.querySelector(".sound__label").textContent=H?"sound · on":"sound"});const zt=document.getElementById("finale"),X=pa()?null:Um({onMove:H=>{s.pointerActive=!0,s.mouse.tx=H.clientX/innerWidth*2-1,s.mouse.ty=H.clientY/innerHeight*2-1},onLeave:()=>{s.pointerActive=!1,s.mouse.tx=s.mouse.ty=0}});let P;window.addEventListener("resize",()=>{clearTimeout(P),P=setTimeout(()=>y(f?f.progress:0),220)}),window.__jump=H=>{const rt=Math.min(1,Math.max(0,H));O(),p.scrollTo(rt*Zt.maxScroll(window),{immediate:!0,force:!0}),Zt.update(),d.tl.progress(rt),I.z=0,I.fade=1,g.style.transform=`scaleX(${rt.toFixed(4)})`},b>0&&window.__jump(b);let ht;dr.has("fps")&&(ht=document.createElement("div"),ht.style.cssText="position:fixed;left:24px;bottom:16px;z-index:40;font:11px monospace;color:#9a9;opacity:.7",document.body.appendChild(ht));const ft={};let Bt=performance.now()/1e3,Mt=0,R=0,M=0,B=0,Q=0,tt=0,q=-1,vt=1/60;const pt=document.querySelector(".progress");xr.ticker.lagSmoothing(0),xr.ticker.add(H=>{const rt=performance.now()/1e3,j=Math.min(.05,Math.max(.001,rt-Bt));vt+=(j-vt)*.25;const at=vt;if(Bt=rt,Mt+=at,jt+=((Pt?1:0)-jt)*(1-Math.exp(-(Pt?3.2:4.8)*at)),jt>.004&&p.limit>0){const ot=Math.min(p.limit,p.targetScroll+jt*(t.scroll.spaceSpeed||1.15)*window.innerHeight*at);p.scrollTo(ot,{immediate:!0,force:!0})}p.raf(H*1e3),s.inspectIdx<0&&s.inspectMix>.001,Object.assign(ft,c),ft.camZ=c.camZ+I.z*(1-d.tl.progress());const _t=s.update(ft,at,Mt);s.render(I.fade),_t.hoveredIdx!==q&&(_t.hoveredIdx>=0&&yt.tick(u.planes[_t.hoveredIdx]?.photo.luminance||.5),q=_t.hoveredIdx),pt?.classList.toggle("is-moving",Math.abs(p.velocity||0)>1.5);const dt=d.tl.time();if(dt>tt)for(const ot of d.marks)tt<ot.t+.05&&dt>=ot.t+.05&&yt.shutter();tt=dt,yt.setBrightness(Math.min(1,$p(_t.ambient)*30)),(f?.progress||0)>.15&&(f?.progress||0)<.9&&(A=!1);const mt=!A&&c.text>.45,St=S?1:A?0:c.text;w+=(St-w)*(1-Math.exp(-8.5*at));const D=S||X?.state.uiHover?0:_t.hoverAmount*.22,lt=w*(1-D);if(zt.style.opacity=lt.toFixed(3),zt.style.transform=S?"none":`translate3d(0, ${((1-c.text)*14).toFixed(2)}px, 0)`,zt.classList.toggle("is-live",mt),document.body.classList.toggle("nav-aside",!mt),m&&m.classList.toggle("is-hidden",_t.mosaicMode<=.65),X&&!pa()){const ot=Cg(_t.ambient.map(gt=>Math.min(1,gt*9+.55)));X.update(at,{photoHover:_t.hoveredIdx>=0,velocity:p.velocity||0,tintColor:gt=>Pg(ot,gt)})}if(Mt>3){if(R+=at,M++,R>=1){const ot=M/R;ht&&(ht.textContent=`${ot.toFixed(0)} fps · pr ${s.pr.toFixed(2)}`),ot<t.perf.targetFps-6?(B++,Q=0):ot>t.perf.targetFps&&(Q++,B=0),B>=2&&s.pr>t.perf.minPixelRatio&&(s.setPixelRatio(Math.max(t.perf.minPixelRatio,s.pr-.25)),B=0),Q>=6&&s.pr<s.maxPR&&(s.setPixelRatio(Math.min(s.maxPR,s.pr+.25)),Q=0),R=0,M=0}}else ht&&(ht.textContent=`warmup · pr ${s.pr.toFixed(2)}`)})}_1().catch(r=>console.error(r));
