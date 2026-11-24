class Ke{constructor(){this.on=!1,this.sfxOn=!0,this.ctx=null}ensureCtx(){if(this.ctx)return this.ctx;const e=this.ctx=new(window.AudioContext||window.webkitAudioContext),i=e.createDynamicsCompressor();this.analyser=e.createAnalyser(),this.analyser.fftSize=128,this.analyser.smoothingTimeConstant=.86,this._fftData=new Uint8Array(this.analyser.frequencyBinCount),i.connect(this.analyser).connect(e.destination),this.master=e.createGain(),this.master.gain.value=0,this.master.connect(i),this.sfxMaster=e.createGain(),this.sfxMaster.gain.value=.85,this.sfxMaster.connect(i);const n=e.sampleRate*4,a=e.createBuffer(1,n,e.sampleRate),y=a.getChannelData(0);let v=0,u=0,S=0;for(let $=0;$<n;$++){const l=Math.random()*2-1;v=.997*v+l*.029,u=.985*u+l*.032,S=.95*S+l*.048,y[$]=(v+u+S)*.35}return this.noiseBuf=a,e}unlockSfx(){if(!this.sfxOn)return;const e=this.ensureCtx();e.state==="suspended"&&e.resume().catch(()=>{})}init(){const e=this.ensureCtx();if(this._musicInit)return;this._musicInit=!0,this.filter=e.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=680,this.filter.Q.value=.4,this.filter.connect(this.master),[[110,.055],[164.81,.036],[220.4,.024],[246.94,.016],[277.18,.009],[329.63,.008]].forEach(([y,v],u)=>{const S=e.createOscillator();S.type=u===1||u===2?"triangle":"sine",S.frequency.value=y,S.detune.value=(u-2.5)*3.5;const $=e.createGain();$.gain.value=v;const l=e.createOscillator();l.frequency.value=.027+u*.014;const P=e.createGain();P.gain.value=v*.55,l.connect(P).connect($.gain),S.connect($).connect(this.filter),S.start(),l.start()});const i=e.createBufferSource();i.buffer=this.noiseBuf,i.loop=!0;const n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=380,n.Q.value=.6;const a=e.createGain();a.gain.value=.05,i.connect(n).connect(a).connect(this.master),i.start()}toggle(){this.init(),this.on=!this.on;const e=this.ctx.currentTime;return this.on&&this.ctx.resume(),this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(this.master.gain.value,e),this.master.gain.linearRampToValueAtTime(this.on?.85:0,e+(this.on?1.4:.8)),this.on}setBrightness(e){!this.ctx||!this.on||!this.filter||this.filter.frequency.setTargetAtTime(420+e*1600,this.ctx.currentTime,.8)}getLevel(){if(!this.analyser||!this.on||this.ctx?.state!=="running")return 0;this.analyser.getByteFrequencyData(this._fftData);let e=0;const i=Math.min(18,this._fftData.length);for(let n=0;n<i;n++)e+=this._fftData[n];return Math.min(1,e/(i*110))}shutter(){if(!this.sfxOn||!this.ctx||this.ctx.state!=="running")return;const e=this.ctx,i=e.currentTime,n=(v,u,S)=>{const $=e.createBufferSource();$.buffer=this.noiseBuf;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=S,l.Q.value=1.4;const P=e.createGain();P.gain.setValueAtTime(0,v),P.gain.linearRampToValueAtTime(u,v+.002),P.gain.exponentialRampToValueAtTime(1e-4,v+.05),$.connect(l).connect(P).connect(this.sfxMaster),$.start(v,Math.random()*3,.06)};n(i,.95,3200),n(i+.055,.62,2400);const a=e.createOscillator();a.frequency.value=95;const y=e.createGain();y.gain.setValueAtTime(0,i),y.gain.linearRampToValueAtTime(.14,i+.004),y.gain.exponentialRampToValueAtTime(1e-4,i+.08),a.connect(y).connect(this.sfxMaster),a.start(i),a.stop(i+.1)}tick(e=.5){if(!this.sfxOn||!this.ctx||this.ctx.state!=="running")return;const i=performance.now();if(this._lastTick&&i-this._lastTick<65)return;this._lastTick=i;const n=this.ctx,a=n.currentTime,y=n.createBufferSource();y.buffer=this.noiseBuf;const v=n.createBiquadFilter();v.type="bandpass",v.frequency.value=1350+e*850,v.Q.value=2;const u=n.createGain();u.gain.setValueAtTime(0,a),u.gain.linearRampToValueAtTime(.42,a+.002),u.gain.exponentialRampToValueAtTime(1e-4,a+.028),y.connect(v).connect(u).connect(this.sfxMaster),y.start(a,Math.random()*3,.035);const S=n.createOscillator();S.type="sine",S.frequency.setValueAtTime(210+e*90,a),S.frequency.exponentialRampToValueAtTime(95,a+.028);const $=n.createGain();$.gain.setValueAtTime(0,a),$.gain.linearRampToValueAtTime(.12,a+.002),$.gain.exponentialRampToValueAtTime(1e-4,a+.032),S.connect($).connect(this.sfxMaster),S.start(a),S.stop(a+.04)}whoosh(){if(!this.sfxOn||!this.ctx||this.ctx.state!=="running")return;const e=this.ctx,i=e.currentTime,n=e.createBufferSource();n.buffer=this.noiseBuf;const a=e.createBiquadFilter();a.type="lowpass",a.Q.value=.75,a.frequency.setValueAtTime(240,i),a.frequency.exponentialRampToValueAtTime(860,i+.32),a.frequency.exponentialRampToValueAtTime(220,i+.95);const y=e.createGain();y.gain.setValueAtTime(0,i),y.gain.linearRampToValueAtTime(.55,i+.22),y.gain.exponentialRampToValueAtTime(1e-4,i+1),n.connect(a).connect(y).connect(this.sfxMaster),n.start(i,Math.random()*2,1.05)}}const _e='a, button, [role="button"], input, textarea, select, summary, .project-thumb-wrap, .album-cover-wrap, .script-card, .music-vinyl-disc, .aero-win-titlebar, .aero-win-handle, body.is-locked .finale.is-live',qe={original:{ring:'<svg viewBox="0 0 64 64" width="64" height="64" shape-rendering="geometricPrecision"><circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" stroke-width="2" /></svg>',dot:'<svg viewBox="0 0 16 16" width="16" height="16" shape-rendering="geometricPrecision"><circle cx="8" cy="8" r="3" fill="currentColor" /></svg>',arrow:!1},terminal:{ring:'<svg viewBox="0 0 64 64" width="64" height="64" shape-rendering="crispEdges"><path d="M18 10H10V18M46 10H54V18M10 46V54H18M54 46V54H46" fill="none" stroke="currentColor" stroke-width="2.4" /></svg>',dot:'<svg viewBox="0 0 16 16" width="16" height="16" shape-rendering="crispEdges"><rect x="4" y="2" width="8" height="12" fill="currentColor" /></svg>',arrow:!1},frutiger:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5" /></svg>',dot:'<svg viewBox="0 0 24 24" width="24" height="24"><path d="M3 2L3 19.5L7.6 15.2L10.8 22L13.5 20.7L10.3 14L16.4 14L3 2Z" fill="#ffffff" stroke="#0c1c2c" stroke-width="1.6" stroke-linejoin="round"/></svg>',arrow:!0},silly:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="7 6" stroke-linecap="round" /></svg>',dot:'<svg viewBox="0 0 28 28" width="28" height="28"><path d="M14 2L17.4 9.6L25.6 10.4L19.4 15.9L21.2 24L14 19.8L6.8 24L8.6 15.9L2.4 10.4L10.6 9.6Z" fill="#ff4fa3" stroke="#181818" stroke-width="2" stroke-linejoin="round"/></svg>',arrow:!1},paper:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-width="1.2" /></svg>',dot:'<svg viewBox="0 0 18 18" width="18" height="18"><path d="M9 1L14 9L9 17L4 9Z" fill="currentColor" /></svg>',arrow:!1},cobalt:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="25" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 4" /><path d="M32 3V13M32 51V61M3 32H13M51 32H61" stroke="currentColor" stroke-width="1.6" /></svg>',dot:'<svg viewBox="0 0 18 18" width="18" height="18"><path d="M9 2V16M2 9H16" stroke="currentColor" stroke-width="1.6" /><circle cx="9" cy="9" r="2" fill="currentColor" /></svg>',arrow:!1}};function je({onMove:t,onLeave:e}={}){if(!window.matchMedia("(pointer: fine) and (hover: hover)").matches)return null;document.documentElement.classList.add("has-cursor");let n=document.getElementById("cursor");n||(n=document.createElement("div"),n.id="cursor",n.className="cursor",n.setAttribute("aria-hidden","true"),document.body.appendChild(n)),n.innerHTML='<span class="cursor__ring" aria-hidden="true"></span><span class="cursor__dot" aria-hidden="true"></span>';const a=n.querySelector(".cursor__ring"),y=n.querySelector(".cursor__dot");let v="",u=!1;const S=()=>{const L=document.documentElement.getAttribute("data-theme")||"original";if(L===v)return;v=L;const T=qe[L]||qe.original;u=!!T.arrow,a.innerHTML=T.ring,y.innerHTML=T.dot,n.classList.toggle("is-arrow",u),a.style.color="",y.style.color=""};S(),new MutationObserver(S).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});const l={x:-100,y:-100,rx:-100,ry:-100,dx:-100,dy:-100,hover:0,uiHover:!1,visible:!1,hasInit:!1,sillyRot:0};window.addEventListener("pointermove",L=>{L.pointerType&&L.pointerType!=="mouse"||(l.x=L.clientX,l.y=L.clientY,l.hasInit||(l.rx=l.dx=l.x,l.ry=l.dy=l.y,l.hasInit=!0),l.visible=!0,l.uiHover=!!L.target?.closest?.(_e),n.classList.add("is-on"),n.classList.toggle("is-clickable",l.uiHover),t?.(L,l))},{passive:!0}),window.addEventListener("pointerdown",L=>{if(L.pointerType&&L.pointerType!=="mouse")return;l.x=l.dx=L.clientX,l.y=l.dy=L.clientY;const T=document.createElement("span");T.className="cursor__pulse",T.style.left=`${L.clientX}px`,T.style.top=`${L.clientY}px`,T.innerHTML=(qe[v]||qe.original).ring,document.body.appendChild(T),requestAnimationFrame(()=>T.classList.add("is-active")),setTimeout(()=>T.remove(),380)},{passive:!0});const P=()=>{l.visible=!1,l.uiHover=!1,n.classList.remove("is-on","is-clickable"),e?.()};return document.documentElement.addEventListener("mouseleave",P),window.addEventListener("blur",P),{el:n,state:l,update(L,{photoHover:T=!1,velocity:O=0,tintColor:R=null}={}){if(!l.hasInit)return;const me=1-Math.exp(-L*16);l.rx+=(l.x-l.rx)*me,l.ry+=(l.y-l.ry)*me,l.dx=l.x,l.dy=l.y;const fe=l.uiHover?1:T?.52:0;l.hover+=(fe-l.hover)*(1-Math.exp(-L*16));const d=Math.min(1,Math.abs(O)/40),o=u?.42+l.hover*.25:.5+l.hover*.42+d*.12,p=u?l.uiHover?1.1:1:l.uiHover?1.28:T?.88:1;v==="silly"?(l.sillyRot=(l.sillyRot+L*(l.uiHover?160:55))%360,a.style.transform=`translate3d(${l.rx.toFixed(1)}px, ${l.ry.toFixed(1)}px, 0) rotate(${l.sillyRot.toFixed(1)}deg) scale(${o.toFixed(3)})`,y.style.transform=`translate3d(${l.dx.toFixed(1)}px, ${l.dy.toFixed(1)}px, 0) rotate(${(-l.sillyRot*.45).toFixed(1)}deg) scale(${p.toFixed(3)})`):(a.style.transform=`translate3d(${l.rx.toFixed(1)}px, ${l.ry.toFixed(1)}px, 0) scale(${o.toFixed(3)}, ${(o*(1-d*.08)).toFixed(3)})`,y.style.transform=`translate3d(${l.dx.toFixed(1)}px, ${l.dy.toFixed(1)}px, 0) scale(${p.toFixed(3)})`),v==="original"&&R&&!l.uiHover?(a.style.color=R(.36+l.hover*.35),y.style.color=""):a.style.color&&(a.style.color="")}}}function Ze(){const t=je();if(!t)return;let e=performance.now();const i=n=>{const a=Math.min(.05,Math.max(.001,(n-e)/1e3));e=n,t.update(a),requestAnimationFrame(i)};requestAnimationFrame(i)}let Oe=!1;function Pe(t,e=2600){let i=document.getElementById("eggToast");i||(i=document.createElement("div"),i.id="eggToast",i.setAttribute("aria-hidden","true"),i.style.cssText=["position:fixed","left:50%","bottom:max(24px,env(safe-area-inset-bottom))","transform:translateX(-50%) translateY(8px)","z-index:9997","pointer-events:none",'font-family:"Dotmatri",ui-monospace,monospace',"font-size:13px","letter-spacing:0.1em","color:rgba(244,238,228,0.88)","background:rgba(11,12,15,0.82)","border:1px solid rgba(236,230,220,0.16)","padding:7px 14px","border-radius:999px","opacity:0","transition:opacity 0.35s ease,transform 0.35s ease","backdrop-filter:blur(8px)"].join(";"),document.body.appendChild(i)),i.textContent=t,requestAnimationFrame(()=>{i.style.opacity="1",i.style.transform="translateX(-50%) translateY(0)"}),clearTimeout(i._timer),i._timer=setTimeout(()=>{i.style.opacity="0",i.style.transform="translateX(-50%) translateY(8px)"},e)}function ze(){for(let e=0;e<42;e++){const i=document.createElement("span");i.setAttribute("aria-hidden","true");const n=10+Math.random()*80,a=3+Math.random()*5,y=1.6+Math.random()*1.4,v=Math.random()*.25,u=(Math.random()-.5)*140;i.style.cssText=["position:fixed",`left:${n}vw`,"top:-12px",`width:${a}px`,`height:${a}px`,"border-radius:50%","background:rgba(244,238,228,0.88)","box-shadow:0 0 8px rgba(244,238,228,0.45)","pointer-events:none","z-index:9998",`transition:transform ${y}s cubic-bezier(0.22,1,0.36,1) ${v}s,opacity ${y}s ease ${v}s`].join(";"),document.body.appendChild(i),requestAnimationFrame(()=>{i.style.transform=`translate(${u}px, ${window.innerHeight+30}px)`,i.style.opacity="0"}),setTimeout(()=>i.remove(),(y+v)*1e3+80)}}function Ue(){let t=document.getElementById("eggCat");t||(t=document.createElement("div"),t.id="eggCat",t.setAttribute("aria-hidden","true"),t.style.cssText=["position:fixed","right:max(20px,env(safe-area-inset-right))","bottom:0","z-index:9996","pointer-events:none",'font-family:"Dotmatri",ui-monospace,monospace',"font-size:18px","letter-spacing:0.06em","color:rgba(244,238,228,0.9)","text-shadow:0 2px 14px rgba(0,0,0,0.9)","padding:10px 14px 12px","transform:translateY(100%)","transition:transform 0.45s cubic-bezier(0.22,1,0.36,1)"].join(";"),document.body.appendChild(t)),t.textContent="=^._.^=",requestAnimationFrame(()=>{t.style.transform="translateY(0)"}),clearTimeout(t._blink),clearTimeout(t._hide),t._blink=setTimeout(()=>{t.textContent="=^.-.^=  hi"},1100),t._hide=setTimeout(()=>{t.style.transform="translateY(100%)"},3800)}function Ge(){const t=document.documentElement.classList.toggle("is-crt");let e=document.getElementById("crtOverlay"),i=document.getElementById("crtStyle");t&&!i&&(i=document.createElement("style"),i.id="crtStyle",i.textContent=["html.is-crt body{filter:contrast(1.1) brightness(1.04) saturate(1.08);}","html.is-crt h1,html.is-crt h2,html.is-crt .rail-brand,html.is-crt .mark{text-shadow:1px 0 0 rgba(255,60,90,0.38),-1px 0 0 rgba(70,220,255,0.38),0 0 10px rgba(244,238,228,0.22);}"].join(""),document.head.appendChild(i)),t&&!e?(e=document.createElement("div"),e.id="crtOverlay",e.setAttribute("aria-hidden","true"),e.style.cssText=["position:fixed","inset:0","pointer-events:none","z-index:9994","background:repeating-linear-gradient(to bottom,rgba(255,255,255,0.03) 0px,rgba(255,255,255,0.03) 1px,rgba(0,0,0,0.44) 2px,rgba(0,0,0,0.44) 3px),repeating-linear-gradient(to right,rgba(255,40,40,0.03) 0px,rgba(40,255,80,0.03) 1px,rgba(40,120,255,0.03) 2px,transparent 3px)","box-shadow:inset 0 0 110px rgba(0,0,0,0.72),inset 0 0 28px rgba(180,220,255,0.06)"].join(";"),document.body.appendChild(e)):t||(e?.remove(),i?.remove()),Pe(t?"crt on":"crt off")}function ue(){let t=document.getElementById("eggModal");if(!t){t=document.createElement("div"),t.id="eggModal",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Easter egg binds"),t.style.cssText=["position:fixed","inset:0","z-index:9999","display:flex","align-items:center","justify-content:center","padding:20px","background:rgba(11,12,15,0.8)","backdrop-filter:blur(12px)","-webkit-backdrop-filter:blur(12px)","opacity:0","transition:opacity 0.25s ease"].join(";");const e="font-family:'Dotmatri',ui-monospace,monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(236,230,220,0.44);margin:16px 0 8px;",i="display:grid;grid-template-columns:130px minmax(0,1fr);gap:7px 14px;font-size:12.5px;line-height:1.45;",n="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);",a="color:rgba(236,230,220,0.66);";t.innerHTML=`
      <div style="width:min(540px,100%);max-height:84dvh;overflow-y:auto;background:#111318;border:1px solid rgba(236,230,220,0.16);border-radius:10px;padding:24px 24px 22px;color:rgba(236,230,220,0.92);box-shadow:0 28px 72px rgba(0,0,0,0.7);">
        <div style="display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:6px;">
          <h2 style="font-family:'Dotmatri',ui-monospace,monospace;font-weight:400;font-size:22px;letter-spacing:0.05em;">secrets</h2>
          <button type="button" data-close-eggs style="font-family:'Dotmatri',ui-monospace,monospace;font-size:13px;letter-spacing:0.08em;color:rgba(236,230,220,0.58);padding:4px 8px;cursor:pointer;">close</button>
        </div>

        <div style="${e}margin-top:10px;">where to open this box</div>
        <dl style="${i}">
          <dt style="${n}">01 original</dt><dd style="${a}">bottom-left sidebar on code, music, films, scripts &amp; privacy</dd>
          <dt style="${n}">02 terminal</dt><dd style="${a}">top-right tab bar, neofetch links, or type "secrets"</dd>
          <dt style="${n}">03 desktop</dt><dd style="${a}">Secrets.txt icon on the desktop or taskbar button</dd>
          <dt style="${n}">04 silly</dt><dd style="${a}">bottom footer on home or top nav bar on sub-pages</dd>
          <dt style="${n}">05 paper</dt><dd style="${a}">masthead nav bar next to Themes &amp; Original</dd>
          <dt style="${n}">06 cobalt</dt><dd style="${a}">blueprint sheet nav bar next to THEMES &amp; ORIGINAL</dd>
        </dl>

        <div style="${e}">global &amp; original</div>
        <dl style="${i}">
          <dt style="${n}">r</dt><dd style="${a}">fly to a random photo (photos)</dd>
          <dt style="${n}">&larr; / &rarr;</dt><dd style="${a}">step between photos (photos)</dd>
          <dt style="${n}">/</dt><dd style="${a}">focus project search (code)</dd>
          <dt style="${n}">meow / cats</dt><dd style="${a}">dot-matrix cat peek</dd>
          <dt style="${n}">stars</dt><dd style="${a}">toggle cursor sparkles</dd>
          <dt style="${n}">crt</dt><dd style="${a}">toggle crt scanlines</dd>
          <dt style="${n}">&uarr;&uarr;&darr;&darr;&larr;&rarr;&larr;&rarr;ba</dt><dd style="${a}">dot confetti burst</dd>
        </dl>

        <div style="${e}">02 terminal</div>
        <dl style="${i}">
          <dt style="${n}">ily / love u</dt><dd style="${a}">love u too</dd>
          <dt style="${n}">cats / meow</dt><dd style="${a}">ascii cat says meow</dd>
          <dt style="${n}">matrix</dt><dd style="${a}">boost or dim the background rain</dd>
          <dt style="${n}">coffee</dt><dd style="${a}">brew a flat white</dd>
          <dt style="${n}">sudo / rm -rf</dt><dd style="${a}">forbidden commands</dd>
        </dl>

        <div style="${e}">03 desktop</div>
        <dl style="${i}">
          <dt style="${n}">clock &times;3</dt><dd style="${a}">trigger classic blue screen</dd>
          <dt style="${n}">click bubbles</dt><dd style="${a}">pop the floating aero bubbles</dd>
        </dl>

        <div style="${e}">04 silly</div>
        <dl style="${i}">
          <dt style="${n}">poke smiley</dt><dd style="${a}">annoy the paint face</dd>
          <dt style="${n}">sign "avery"</dt><dd style="${a}">special guestbook accusation</dd>
          <dt style="${n}">do not press</dt><dd style="${a}">knock the whole site over</dd>
        </dl>

        <div style="${e}">05 paper</div>
        <dl style="${i}">
          <dt style="${n}">masthead &times;3</dt><dd style="${a}">extra edition stamp &amp; new front photo</dd>
          <dt style="${n}">click auckland</dt><dd style="${a}">live auckland weather dispatch</dd>
        </dl>

        <div style="${e}">06 cobalt</div>
        <dl style="${i}">
          <dt style="${n}">click scale 1:1</dt><dd style="${a}">toggle inverted diazo whiteprint</dd>
          <dt style="${n}">click a1-f1</dt><dd style="${a}">lock grid coordinate telemetry</dd>
        </dl>
      </div>
    `;const y=()=>{t.style.opacity="0",setTimeout(()=>{t.hidden=!0},240)};t.addEventListener("click",v=>{(v.target===t||v.target.closest("[data-close-eggs]"))&&y()}),window.addEventListener("keydown",v=>{v.key==="Escape"&&!t.hidden&&(v.preventDefault(),y())}),document.body.appendChild(t)}t.hidden=!1,requestAnimationFrame(()=>{t.style.opacity="1"})}function Ve(){const t=document.querySelector(".rail-meta");if(!t||t.querySelector(".egg-trigger"))return;const e=document.createElement("button");e.type="button",e.className="egg-trigger",e.textContent="secrets",e.addEventListener("click",ue),t.appendChild(e)}function Qe(){if(Oe)return;Oe=!0,console.log("%caverybeuth.xyz","font-family:monospace;font-size:14px;color:#f4eee4;"),Ve();let t="";const e=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let i=0,n=!1,a=0,y=null;const v=(u,S,$=!1)=>{const l=document.createElement("span");l.setAttribute("aria-hidden","true");const P=$?["✦","✧","·"]:["✦","✧","⋆","+"],L=["rgba(255,250,235,0.95)","rgba(255,232,178,0.92)","rgba(222,238,255,0.9)"];l.textContent=P[Math.floor(Math.random()*P.length)];const T=(Math.random()-.5)*($?18:44),O=($?-16:10)+(Math.random()-.5)*28,R=(Math.random()-.5)*140,me=$?10+Math.random()*8:11+Math.random()*10,fe=$?1.5:.95,d=L[Math.floor(Math.random()*L.length)];l.style.cssText=["position:fixed",`left:${u}px`,`top:${S}px`,"transform:translate(-50%,-50%) scale(0.5) rotate(0deg)",'font-family:"Dotmatri",ui-monospace,monospace',`font-size:${me.toFixed(1)}px`,`color:${d}`,`text-shadow:0 0 10px ${d},0 0 20px rgba(255,244,210,0.45)`,"pointer-events:none","z-index:9995",`transition:transform ${fe}s cubic-bezier(0.22,1,0.36,1),opacity ${fe}s ease-out`].join(";"),document.body.appendChild(l),requestAnimationFrame(()=>{l.style.transform=`translate(calc(-50% + ${T}px), calc(-50% + ${O}px)) scale(1.15) rotate(${R}deg)`,l.style.opacity="0"}),setTimeout(()=>l.remove(),fe*1e3+60)};window.addEventListener("pointermove",u=>{if(!n)return;const S=performance.now();S-a<22||(a=S,v(u.clientX,u.clientY,!1))}),window.addEventListener("keydown",u=>{if(u.target.closest("input, textarea, select"))return;const S=u.key.length===1?u.key.toLowerCase():u.key;S===e[i]?(i++,i===e.length&&(i=0,ze(),Pe("nice"))):i=S===e[0]?1:0,!(u.key.length!==1||u.ctrlKey||u.metaKey||u.altKey)&&(t=(t+u.key.toLowerCase()).slice(-12),t.endsWith("meow")||t.endsWith("cats")?(t="",Ue()):t.endsWith("stars")?(t="",n=!n,clearInterval(y),n&&(y=setInterval(()=>{v(Math.random()*window.innerWidth,Math.random()*window.innerHeight,!0)},160)),Pe(n?"stars on":"stars off")):t.endsWith("crt")&&(t="",Ge()))})}const ae=new Map;function We(t){const e=(t||"#808080").replace("#",""),i=parseInt(e.length===3?e.replace(/(.)/g,"$1$1"):e,16),n=(i>>16&255)/255,a=(i>>8&255)/255,y=(i&255)/255,v=Math.max(n,a,y),u=Math.min(n,a,y),S=(v+u)/2,$=v-u;let l=0,P=0;return $>1e-4&&(P=$/(1-Math.abs(2*S-1)),v===n?l=((a-y)/$+(a<y?6:0))*60:v===a?l=((y-n)/$+2)*60:l=((n-a)/$+4)*60),{h:l,s:P,l:S}}function Ye(t,e){return e<.14?"mono":t<34||t>=330?"warm":t<72?"gold":t<168?"green":t<258?"blue":"violet"}function Se(t,e){return e?/^(https?:|mailto:|data:|\/)/i.test(e)?e:`${t}/${e.replace(/^\.\//,"")}`:""}async function Ie(t){const e=await fetch(t).then(i=>i.text());return new DOMParser().parseFromString(e,"text/html")}async function $e(t="."){const e=`photos:${t}`;if(ae.has(e))return ae.get(e);const n=((await fetch(`${t}/photos.json`).then(a=>a.json())).photos||[]).map(a=>{const y=a.dominant||a.avg||"#777777",{h:v,s:u,l:S}=We(y),$=Ye(v,u),l=$==="mono",P=(v+25)%360;return{file:a.file,name:a.file.replace(/\.[^.]+$/,"").replace(/[-_]+/g," "),thumb:Se(t,a.tex?.["1024"]||a.src),full:Se(t,a.tex?.["2048"]||a.src),width:a.width||1200,height:a.height||800,aspect:a.aspect||1.5,hex:y,luminance:a.luminance??S,hue:v,sat:u,bucket:$,_sortKey:l?1e4+S*1e3:Math.floor(P/12)*100+S*50}});return n.sort((a,y)=>a._sortKey-y._sortKey),ae.set(e,n),n}async function xe(t="."){const e=`code:${t}`;if(ae.has(e))return ae.get(e);const i=document.getElementById("featuredGrid")?document:await Ie(`${t}/code.html`),n=(u,S,$)=>{const l=u.querySelector(".project-title a"),P=u.querySelector(".project-thumb"),L=u.querySelector(".project-tag"),T=u.querySelector(".project-desc");return{title:l?.textContent?.trim()||"Untitled",href:l?.getAttribute("href")||"#",external:!0,img:Se(t,P?.getAttribute("src")||""),tag:L?.textContent?.trim()||u.dataset.category||"project",desc:T?.textContent?.trim()||"",folder:S,folderLabel:$,typeLabel:L?.textContent?.trim()||"app"}},a=[...i.querySelectorAll("#featuredGrid .project-card")].map(u=>n(u,"main","Main")),y=[...i.querySelectorAll("#archiveGrid .project-card")].map(u=>n(u,"archive","Archive")),v={main:a,archive:y,all:[...a,...y]};return ae.set(e,v),v}async function Ee(t="."){const e=`music:${t}`;if(ae.has(e))return ae.get(e);const n=[...(document.querySelector(".album-list")?document:await Ie(`${t}/music.html`)).querySelectorAll(".album-row")].map(a=>{const y=a.querySelector(".album-title"),v=a.querySelector(".album-meta"),u=a.querySelector(".album-copy"),S=a.querySelector(".album-cover"),$=[...a.querySelectorAll(".album-actions a")].map(T=>({label:T.textContent.trim(),href:Se(t,T.getAttribute("href")||"#")})),l=$.find(T=>T.href.includes("soundcloud.com")),L=(v?.textContent||"release").trim().toLowerCase().includes("single")?"singles":"albums";return{title:y?.textContent?.trim()||"Untitled",href:$[0]?.href||"#",external:!0,img:Se(t,S?.getAttribute("src")||""),tag:v?.textContent?.trim()||"music",desc:u?.textContent?.trim()||"",folder:L,folderLabel:L==="singles"?"Singles":"Albums & EPs",typeLabel:v?.textContent?.trim()||"audio",links:$,soundcloud:l?.href||"",squareArt:!0}});return ae.set(e,n),n}async function Le(t="."){const e=`films:${t}`;if(ae.has(e))return ae.get(e);const n=[...(document.querySelector(".film-list")?document:await Ie(`${t}/film.html`)).querySelectorAll(".film-entry")].map(a=>{const y=a.querySelector(".film-title"),v=a.querySelector(".film-credit"),u=a.querySelector(".film-roles"),S=a.querySelector(".film-notes"),$=a.querySelector("iframe"),l=[...a.querySelectorAll(".film-actions a")].map(P=>({label:P.textContent.trim(),href:Se(t,P.getAttribute("href")||"#")}));return{title:y?.textContent?.trim()||"Untitled",href:l[0]?.href||"",external:!1,embed:$?.getAttribute("src")||"",tag:v?.textContent?.trim()||"short film",desc:[u?.textContent?.trim(),S?.textContent?.trim()].filter(Boolean).join(" · "),folder:"films",folderLabel:"Short Films",typeLabel:"video",links:l}});return ae.set(e,n),n}async function Ce(t="."){const e=`scripts:${t}`;if(ae.has(e))return ae.get(e);const i=await fetch(`${t}/scripts/manifest.json`).then(a=>a.json()),n=await Promise.all(i.map(async a=>{const y=a.replace(/\.md$/,""),u=(await fetch(`${t}/scripts/${a}`).then(T=>T.text())).split(/\r?\n/);let S="",$="",l="";for(const T of u){const O=T.trim();if(!S&&/^#\s+/.test(O)){S=O.replace(/^#\s+/,"").trim();continue}if(!$&&/^###\s+/.test(O)&&!/^(?:###\s+)?(?:FADE IN:|INT\.|EXT\.|SUPER:|CUT TO:|INSERT:|END\.)/i.test(O)){$=O.replace(/^###\s+/,"").trim();continue}if(!l&&/^\*.*\*$/.test(O)){l=O.replace(/^\*|\*$/g,"").trim();continue}if(O==="FADE IN:"||/^###\s+/.test(O))break}const P=`${t}/scripts/view.html?slug=${encodeURIComponent(y)}`,L=`${t}/scripts/pdfs/${y}.pdf`;return{title:S||y,href:P,external:!1,tag:$||"screenplay",desc:l||"Original screenplay by Avery Beuth.",folder:"scripts",folderLabel:"Screenplays",typeLabel:".fountain",links:[{label:"Read screenplay",href:P},{label:"Download PDF",href:L}]}}));return ae.set(e,n),n}const ye=[{id:"original",num:"01",name:"Original",label:"ORIGINAL",desc:"Obsidian dark & 3D photo gallery",themeColor:"#0b0c0f",previewClass:"is-original"},{id:"terminal",num:"02",name:"Terminal",label:"TERMINAL",desc:"Real Windows Terminal (PowerShell)",themeColor:"#0c0c0c",previewClass:"is-terminal"},{id:"frutiger",num:"03",name:"Desktop",label:"DESKTOP",desc:"Multi-window Windows 7 desktop OS",themeColor:"#071b2e",previewClass:"is-frutiger"},{id:"silly",num:"04",name:"Silly",label:"SILLY",desc:"Deadpan Comic Sans & MS Paint",themeColor:"#faf9f4",previewClass:"is-silly"},{id:"paper",num:"05",name:"Paper",label:"PAPER",desc:"Full broadsheet newspaper edition",themeColor:"#f2ede2",previewClass:"is-paper"},{id:"cobalt",num:"06",name:"Cobalt",label:"COBALT",desc:"Full architectural CAD blueprint set",themeColor:"#061429",previewClass:"is-cobalt"}],Z={folder:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="fg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffe78a"/><stop offset="55%" stop-color="#f7c844"/><stop offset="100%" stop-color="#d89614"/></linearGradient><linearGradient id="fg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff4bf"/><stop offset="48%" stop-color="#ffd24d"/><stop offset="100%" stop-color="#e3a11a"/></linearGradient></defs><path d="M3 8.5C3 7.1 4.1 6 5.5 6H12l2.4 2.5H26.5C27.9 8.5 29 9.6 29 11v13.5c0 1.4-1.1 2.5-2.5 2.5h-21C4.1 27 3 25.9 3 24.5V8.5z" fill="url(#fg1)" stroke="#9a6408" stroke-width="1.2"/><path d="M3 12.2h26v12.3c0 1.4-1.1 2.5-2.5 2.5h-21C4.1 27 3 25.9 3 24.5V12.2z" fill="url(#fg2)" stroke="#a66c0a" stroke-width="1.1"/><path d="M4.5 13.5h23" stroke="rgba(255,255,255,0.75)" stroke-width="1.3"/></svg>',photos:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="pg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e4eef7"/><stop offset="100%" stop-color="#88a4bd"/></linearGradient><radialGradient id="pg2" cx="40%" cy="35%" r="60%"><stop offset="0%" stop-color="#82e0ff"/><stop offset="55%" stop-color="#1d6ab8"/><stop offset="100%" stop-color="#09223f"/></radialGradient></defs><rect x="3" y="8" width="26" height="18" rx="3.5" fill="url(#pg1)" stroke="#3b5369" stroke-width="1.2"/><path d="M11 8l1.8-3h6.4L21 8" fill="#c4d6e6" stroke="#3b5369" stroke-width="1.1"/><circle cx="16" cy="17" r="6.2" fill="url(#pg2)" stroke="#ffffff" stroke-width="1.4"/><circle cx="14" cy="15" r="1.8" fill="rgba(255,255,255,0.65)"/></svg>',code:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><rect x="4" y="5" width="24" height="22" rx="3" fill="#eaf3fc" stroke="#3e688f" stroke-width="1.2"/><rect x="4" y="5" width="24" height="6" rx="2.5" fill="#3a96e3"/><path d="M12.2 15.5l-3.6 3.5 3.6 3.5M19.8 15.5l3.6 3.5-3.6 3.5M17.2 14.5l-2.4 9" fill="none" stroke="#165699" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',scripts:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><path d="M7 4h12l6 6v18H7z" fill="#f5faff" stroke="#4c6f91" stroke-width="1.2" stroke-linejoin="round"/><path d="M19 4v6h6" fill="#bfd6ec" stroke="#4c6f91" stroke-width="1.1"/><path d="M10.5 14h11M10.5 18h11M10.5 22h7.5" stroke="#3c6791" stroke-width="1.5" stroke-linecap="round"/></svg>',music:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><radialGradient id="mg1" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#b8f5ff"/><stop offset="45%" stop-color="#2fa2e8"/><stop offset="100%" stop-color="#114882"/></radialGradient></defs><circle cx="16" cy="16" r="12.5" fill="url(#mg1)" stroke="#0e3866" stroke-width="1.2"/><circle cx="16" cy="16" r="3.4" fill="#eaf6ff" stroke="#114882" stroke-width="1.1"/><path d="M15 21.5V10.5l7.5-1.6v9.2" fill="none" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="21.5" r="2.2" fill="#ffffff"/><circle cx="20.5" cy="18.2" r="2.2" fill="#ffffff"/></svg>',film:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><rect x="4" y="6" width="24" height="20" rx="2.5" fill="#2c3d4f" stroke="#0f1821" stroke-width="1.2"/><rect x="8.5" y="9" width="15" height="14" rx="1.2" fill="#77d0fa"/><path d="M14 13l5.5 3-5.5 3z" fill="#ffffff"/><path d="M5.5 9h1.6M5.5 13h1.6M5.5 17h1.6M5.5 21h1.6M24.9 9h1.6M24.9 13h1.6M24.9 17h1.6M24.9 21h1.6" stroke="#d8e6f2" stroke-width="1.4"/></svg>',notes:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><rect x="6" y="4" width="20" height="24" rx="2" fill="#fffdf2" stroke="#537496" stroke-width="1.2"/><rect x="6" y="4" width="20" height="5" rx="1.5" fill="#4aa7eb"/><path d="M9.5 13.5h13M9.5 17.5h13M9.5 21.5h9" stroke="#6d8ba8" stroke-width="1.4" stroke-linecap="round"/></svg>',themes:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="tg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7ce4ff"/><stop offset="50%" stop-color="#6ee787"/><stop offset="100%" stop-color="#ff85c0"/></linearGradient></defs><circle cx="16" cy="16" r="12.5" fill="url(#tg1)" stroke="#1d4466" stroke-width="1.2"/><ellipse cx="14" cy="10.5" rx="7" ry="4" fill="rgba(255,255,255,0.45)"/><circle cx="12" cy="15" r="2.2" fill="#ffffff"/><circle cx="18.5" cy="14" r="2.2" fill="#ffd32a"/><circle cx="16.5" cy="20.5" r="2.2" fill="#1d6ed6"/></svg>',power:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><radialGradient id="pw1" cx="35%" cy="30%" r="65%"><stop offset="0%" stop-color="#ffa899"/><stop offset="55%" stop-color="#e0432f"/><stop offset="100%" stop-color="#87180c"/></radialGradient></defs><circle cx="16" cy="16" r="12.5" fill="url(#pw1)" stroke="#611209" stroke-width="1.2"/><path d="M16 9.5v6.5M11.6 12.2a6.4 6.4 0 1 0 8.8 0" fill="none" stroke="#ffffff" stroke-width="2.1" stroke-linecap="round"/></svg>',winOrb:'<svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true"><path d="M7.5 10.5c2.8-1.4 5.2-1.4 7.5 0v5.5c-2.3-1.2-4.7-1.2-7.5 0z" fill="#ff5a36"/><path d="M17 10.5c2.3 1.2 4.7 1.2 7.5 0v5.5c-2.8 1.4-5.2 1.4-7.5 0z" fill="#7dd128"/><path d="M7.5 17.5c2.8-1.4 5.2-1.4 7.5 0V23c-2.3-1.2-4.7-1.2-7.5 0z" fill="#2ba8f7"/><path d="M17 17.5c2.3 1.2 4.7 1.2 7.5 0V23c-2.8 1.4-5.2 1.4-7.5 0z" fill="#ffca28"/></svg>',backArrow:'<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M10.5 3.5L5.5 8l5 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',fwdArrow:'<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M5.5 3.5L10.5 8l-5 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',paintFace:'<svg viewBox="0 0 44 44" width="38" height="38" aria-hidden="true"><circle cx="22" cy="22" r="18" fill="#fff59d" stroke="#1c1c1c" stroke-width="2.4"/><circle cx="15.5" cy="17" r="2.2" fill="#1c1c1c"/><circle cx="28.5" cy="16.5" r="2.2" fill="#1c1c1c"/><path d="M13.5 26.5c3.5 4.5 12.5 5 17-0.5" fill="none" stroke="#1c1c1c" stroke-width="2.3" stroke-linecap="round"/></svg>'},De="avery_theme";let Re=!1;const s=t=>String(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function ge(){return!!(document.getElementById("stage")&&document.getElementById("gl"))}function Ae(){const t=new URLSearchParams(window.location.search);return ge()&&(t.has("zoom")||t.has("photos")||t.has("overview")||t.has("p"))}function ke(){const t=window.location.pathname.toLowerCase(),e=t.includes("/scripts/"),i=e?"..":".";return Ae()?{base:".",inScripts:!1,slug:"photos",title:"Photos"}:ge()?{base:".",inScripts:!1,slug:"home",title:"Home"}:t.includes("code")?{base:i,inScripts:e,slug:"code",title:"Code"}:t.includes("music")?{base:i,inScripts:e,slug:"music",title:"Music"}:t.includes("film")?{base:i,inScripts:e,slug:"films",title:"Films"}:e&&t.includes("view")?{base:i,inScripts:e,slug:"scripts/view",title:"Screenplay"}:e?{base:i,inScripts:e,slug:"scripts",title:"Scripts"}:t.includes("privacy")?{base:i,inScripts:e,slug:"privacy",title:"Privacy"}:{base:i,inScripts:e,slug:"home",title:"Portfolio"}}function He(){if("scrollRestoration"in history)try{history.scrollRestoration="manual"}catch{}window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body&&(document.body.scrollTop=0)}function Fe(t){const e=ye.find(a=>a.id===t)||ye[0],i=e.id;i==="original"?(document.documentElement.removeAttribute("data-theme"),document.documentElement.classList.remove("is-themed-home","has-theme-takeover"),sessionStorage.removeItem(De)):(document.documentElement.setAttribute("data-theme",i),ge()&&document.documentElement.classList.add("is-themed-home"),sessionStorage.setItem(De,i));const n=document.querySelector('meta[name="theme-color"]');return n&&e.themeColor&&n.setAttribute("content",e.themeColor),i}const Be=sessionStorage.getItem(De)||"original";Be!=="original"&&Fe(Be);function Xe(t,e,i){if(!t||!e)return()=>{};let n=parseFloat(t.dataset.wx||"0")||0,a=parseFloat(t.dataset.wy||"0")||0,y=!1,v=0,u=0,S=0,$=0;const l=()=>{t.dataset.wx=String(Math.round(n)),t.dataset.wy=String(Math.round(a)),t.style.transform=`translate3d(${Math.round(n)}px, ${Math.round(a)}px, 0)`};(n||a)&&l();const P=R=>{i?.(),!(window.innerWidth<=860)&&(R.target.closest("button, a, input")||(y=!0,v=R.clientX,u=R.clientY,S=n,$=a,t.classList.add("is-dragging"),e.setPointerCapture?.(R.pointerId),R.preventDefault()))},L=R=>{y&&(n=S+(R.clientX-v),a=$+(R.clientY-u),l())},T=()=>{y&&(y=!1,t.classList.remove("is-dragging"))},O=R=>{R.target.closest("button, a, input")||(n=0,a=0,l())};return t.addEventListener("pointerdown",()=>i?.()),e.addEventListener("pointerdown",P),window.addEventListener("pointermove",L),window.addEventListener("pointerup",T),e.addEventListener("dblclick",O),()=>{e.removeEventListener("pointerdown",P),window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",T),e.removeEventListener("dblclick",O)}}function Te(t,e){let i=e,n=document.getElementById("themePhotoLb");n&&n.remove(),n=document.createElement("div"),n.id="themePhotoLb",n.className="theme-photo-lb",n.setAttribute("data-theme-injected","1"),n.innerHTML=`
    <div class="tplb-inner">
      <div class="tplb-bar">
        <span class="tplb-meta" id="tplbMeta"></span>
        <div class="tplb-actions">
          <button type="button" id="tplbPrev">&lsaquo; prev</button>
          <button type="button" id="tplbNext">next &rsaquo;</button>
          <button type="button" id="tplbClose">&times; close</button>
        </div>
      </div>
      <div class="tplb-stage"><img id="tplbImg" alt="" /></div>
    </div>
  `,document.body.appendChild(n);const a=()=>{const u=t[i];if(!u)return;n.querySelector("#tplbImg").src=u.full||u.img,n.querySelector("#tplbImg").alt=u.name||u.title||"";const S=u.hex||"#888888",$=u.width&&u.height?` &middot; ${u.width}&times;${u.height}`:"";n.querySelector("#tplbMeta").innerHTML=`<i class="tplb-swatch" style="background:${S}"></i> ${String(i+1).padStart(3,"0")} / ${t.length} &middot; ${s(u.file||u.title||"")} &middot; ${S.toUpperCase()}${$}`},y=()=>{window.removeEventListener("keydown",v),n.remove()},v=u=>{u.key==="Escape"?y():u.key==="ArrowRight"?(i=(i+1)%t.length,a()):u.key==="ArrowLeft"&&(i=(i-1+t.length)%t.length,a())};n.querySelector("#tplbPrev").addEventListener("click",()=>{i=(i-1+t.length)%t.length,a()}),n.querySelector("#tplbNext").addEventListener("click",()=>{i=(i+1)%t.length,a()}),n.querySelector("#tplbClose").addEventListener("click",y),n.addEventListener("click",u=>{(u.target===n||u.target===n.querySelector(".tplb-stage"))&&y()}),window.addEventListener("keydown",v),a()}function Je(){if(Re)return;Re=!0;let t=sessionStorage.getItem(De)||"original",e=null,i=[];const n=()=>{for(document.documentElement.classList.remove("has-theme-takeover");i.length;){const d=i.pop();try{d()}catch{}}document.querySelectorAll("[data-theme-injected]").forEach(d=>d.remove())},a=()=>{const d=ke();document.documentElement.classList.add("has-theme-takeover");const o=document.createElement("div");o.className="wt-root",o.setAttribute("data-theme-injected","1"),o.innerHTML=`
      <canvas class="wt-matrix-faint" id="wtMatrix" aria-hidden="true"></canvas>
      <header class="wt-tabbar">
        <div class="wt-tabs">
          <div class="wt-tab is-active"><span class="wt-ps-glyph">&gt;_</span><span>Windows PowerShell | averybeuth.xyz</span></div>
          <div class="wt-quick-cmds">
            <button type="button" data-wt-cmd="cd ~">home</button>
            <button type="button" data-wt-cmd="cd photos">photos</button>
            <button type="button" data-wt-cmd="cd code">code</button>
            <button type="button" data-wt-cmd="cd scripts">scripts</button>
            <button type="button" data-wt-cmd="cd music">music</button>
            <button type="button" data-wt-cmd="cd films">films</button>
          </div>
        </div>
        <div class="wt-win-controls">
          <button type="button" class="wt-ctrl-txt" data-wt-secrets>secrets</button>
          <button type="button" class="wt-ctrl-txt" data-wt-themes>themes</button>
          <button type="button" class="wt-ctrl-txt" data-wt-original>original</button>
          <button type="button" class="wt-cap is-close" data-wt-original aria-label="Exit to Original">&times;</button>
        </div>
      </header>
      <div class="wt-screen" id="wtScreen">
        <div class="wt-output" id="wtOut"></div>
        <form class="wt-prompt-row" id="wtForm" autocomplete="off">
          <label class="wt-prompt-label" id="wtPrompt" for="wtInput">PS C:\\Users\\visitor\\averybeuth.xyz&gt;</label><span class="wt-input-wrap"><span class="wt-input-mirror" id="wtBefore" aria-hidden="true"></span><span class="wt-cursor-block" id="wtCaret" aria-hidden="true"></span><span class="wt-input-mirror" id="wtAfter" aria-hidden="true"></span><input id="wtInput" class="wt-input" type="text" spellcheck="false" autocomplete="off" aria-label="PowerShell command" /></span>
        </form>
      </div>
    `,document.body.appendChild(o);const p=o.querySelector("#wtMatrix"),b=p.getContext("2d");let m=0,g=[],C=0;const Y="01アイウエオカキクケコABXY#$%&*+-:/",U=()=>{p.width=window.innerWidth,p.height=window.innerHeight,g=Array.from({length:Math.max(12,Math.floor(p.width/24))},()=>Math.random()*-50)};U(),window.addEventListener("resize",U);const _=h=>{if(m=requestAnimationFrame(_),!(h-C<110)){C=h,b.fillStyle="rgba(12, 12, 12, 0.22)",b.fillRect(0,0,p.width,p.height),b.fillStyle="rgba(22, 198, 12, 0.35)",b.font='13px Consolas, "Courier Prime", monospace';for(let x=0;x<g.length;x++)b.fillText(Y[Math.floor(Math.random()*Y.length)],x*24,g[x]*22),g[x]*22>p.height&&Math.random()>.975&&(g[x]=0),g[x]+=.55}};m=requestAnimationFrame(_);const J=o.querySelector("#wtOut"),H=o.querySelector("#wtScreen"),N=o.querySelector("#wtForm"),I=o.querySelector("#wtInput"),X=o.querySelector("#wtBefore"),W=o.querySelector("#wtAfter"),oe=o.querySelector("#wtPrompt");let ne="home",F=0,w=!1,D=null;const ee=[];let se=-1;const Q=h=>new Promise(x=>setTimeout(x,h)),E=()=>{const h=I.value,x=typeof I.selectionStart=="number"?I.selectionStart:h.length;X.textContent=h.slice(0,x),W.textContent=h.slice(x)},A=h=>{w=h,N.hidden=h,h||(E(),H.scrollTop=H.scrollHeight,I.focus())},le=h=>{if(h.ctrlKey&&h.key.toLowerCase()==="c"||w&&h.key==="Escape"){if(!w&&!D)return;h.preventDefault(),F++,D=null,G(),J.querySelectorAll(".wt-live-caret").forEach(x=>x.remove()),V('<span class="wt-err">^C</span>',"wt-line"),A(!1)}};window.addEventListener("keydown",le),i.push(()=>{F++,cancelAnimationFrame(m),window.removeEventListener("resize",U),window.removeEventListener("keydown",le)});const G=()=>{if(D){oe.textContent=`Show ${D.length} more archive projects? [y/N]`;return}const h=ne==="home"?"":`\\${ne}`;oe.textContent=`PS C:\\Users\\visitor\\averybeuth.xyz${h}>`},V=(h,x="wt-line")=>{const r=document.createElement("div");return r.className=x,r.innerHTML=h,J.appendChild(r),H.scrollTop=H.scrollHeight,r},te=(h,x)=>{const r=["|","/","-","\\"];let c=0;const k=V(`<span class="wt-dim">[${r[0]}] ${s(h)}</span>`,"wt-line"),B=setInterval(()=>{if(x!==F){clearInterval(B);return}c=(c+1)%r.length,k.innerHTML=`<span class="wt-dim">[${r[c]}] ${s(h)}</span>`},85);return()=>{clearInterval(B),k.remove()}},j=async(h,x,{minDelay:r=60,maxDelay:c=110,batch:k=1}={})=>{const B=document.createElement("span");B.className="wt-cursor-block wt-live-caret";for(let f=0;f<h.length;){if(x!==F){B.remove();return}const M=k>1?Math.max(1,Math.floor(Math.random()*k)+1):1;let q=null;for(let z=0;z<M&&f<h.length;z++,f++){const ie=h[f];q=V(typeof ie=="string"?ie:ie.html,typeof ie=="string"?"wt-line wt-pre":ie.cls)}q&&q.appendChild(B),H.scrollTop=H.scrollHeight;const K=r+Math.random()*(c-r),de=Math.random()<.12?55:0;await Q(K+de)}B.remove()},ce=async h=>{const x=++F;D=null,G(),J.querySelectorAll(".wt-live-caret").forEach(r=>r.remove()),A(!1),I.value="",E();for(let r=1;r<=h.length;r++){if(x!==F)return;const c=h[r-1];I.value=h.slice(0,r),I.setSelectionRange?.(r,r),E();const k=c===" "?85+Math.random()*45:46+Math.random()*40;await Q(k)}await Q(150),x===F&&(I.value="",E(),await we(h,x))},ve=async h=>{await j(['<span class="wt-g"> █████╗ ██████╗ </span>   <span class="wt-c">visitor@averybeuth.xyz</span>','<span class="wt-g">██╔══██╗██╔══██╗</span>   <span class="wt-y">Host</span>     averybeuth.xyz','<span class="wt-g">███████║██████╔╝</span>   <span class="wt-y">Owner</span>    Avery Beuth (@avery.beuth)','<span class="wt-g">██╔══██║██╔══██╗</span>   <span class="wt-y">Shell</span>    Windows PowerShell 7.4 (web)','<span class="wt-g">██║  ██║██████╔╝</span>   <span class="wt-y">Dirs</span>     <button type="button" class="wt-link" data-wt-run="cd photos">photos\\</button>  <button type="button" class="wt-link" data-wt-run="cd code">code\\</button>  <button type="button" class="wt-link" data-wt-run="cd scripts">scripts\\</button>  <button type="button" class="wt-link" data-wt-run="cd music">music\\</button>  <button type="button" class="wt-link" data-wt-run="cd films">films\\</button>','<span class="wt-g">╚═╝  ╚═╝╚═════╝ </span>   <span class="wt-y">Links</span>    <a class="wt-link" href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">instagram</a>  <a class="wt-link" href="https://github.com/averywsc" target="_blank" rel="noopener">github</a>  <button type="button" class="wt-link" data-wt-themes-inline>themes</button>  <button type="button" class="wt-link" data-wt-secrets-inline>secrets</button>  <button type="button" class="wt-link" data-wt-orig-inline>original</button>','<span class="wt-dim">Click any directory above or type <span class="wt-g">help</span>, <span class="wt-g">cd code</span>, <span class="wt-g">cd music</span>, <span class="wt-g">cd scripts</span>, <span class="wt-g">cd films</span>, <span class="wt-g">cd photos</span>.</span>'],h,{minDelay:65,maxDelay:115,batch:1})},re=async(h,x)=>{const r=[`<span class="wt-y">ARCHIVE (${h.length} projects)</span>`,...h.map(c=>`-a---  <span class="wt-g">[${s(c.tag)}]</span> <span class="wt-c">${s(c.title)}</span>  <a class="wt-link" href="${s(c.href)}" target="_blank" rel="noopener">${s(c.href)}</a>
       <span class="wt-dim">${s(c.desc)}</span>`)];await j(r,x,{minDelay:42,maxDelay:74,batch:1})},he=async(h,x)=>{const r=h||ne;if(r==="home"){await j(['<span class="wt-dim">Mode                 Items Name</span>','d----                  375 <button type="button" class="wt-link" data-wt-run="cd photos">photos\\</button>','d----                   89 <button type="button" class="wt-link" data-wt-run="cd code">code\\</button>','d----                   15 <button type="button" class="wt-link" data-wt-run="cd scripts">scripts\\</button>','d----                   12 <button type="button" class="wt-link" data-wt-run="cd music">music\\</button>','d----                    3 <button type="button" class="wt-link" data-wt-run="cd films">films\\</button>'],x,{minDelay:65,maxDelay:110,batch:1});return}if(r==="code"){const c=te("Enumerating C:\\Users\\visitor\\averybeuth.xyz\\code",x),[k]=await Promise.all([xe(d.base),Q(420)]);if(c(),x!==F)return;const B=[`<span class="wt-dim">Directory: C:\\Users\\visitor\\averybeuth.xyz\\code  (${k.main.length} Main, ${k.archive.length} Archive)</span>`,`<span class="wt-y">SELECTED PROJECTS (${k.main.length})</span>`,...k.main.map(f=>`-a---  <span class="wt-g">[${s(f.tag)}]</span> <span class="wt-c">${s(f.title)}</span>  <a class="wt-link" href="${s(f.href)}" target="_blank" rel="noopener">${s(f.href)}</a>
       <span class="wt-dim">${s(f.desc)}</span>`)];if(await j(B,x,{minDelay:62,maxDelay:102,batch:1}),x!==F)return;D=k.archive,G(),V(`<span class="wt-y">--More-- ${k.archive.length} archive projects remaining. Show more? [y/N]</span>  <button type="button" class="wt-link" data-wt-more="y">[yes]</button>  <button type="button" class="wt-link" data-wt-more="n">[no]</button>`);return}if(r==="music"){const c=te("Reading C:\\Users\\visitor\\averybeuth.xyz\\music",x),[k]=await Promise.all([Ee(d.base),Q(400)]);if(c(),x!==F)return;const B=['<span class="wt-dim">Directory: C:\\Users\\visitor\\averybeuth.xyz\\music  (tool: <a class="wt-link" href="https://averywsc.github.io/bebeat/" target="_blank" rel="noopener">https://averywsc.github.io/bebeat/</a>)</span>',...k.map(f=>{const M=f.links.map(q=>`<a class="wt-link" href="${s(q.href)}" target="_blank" rel="noopener">[${s(q.label)}]</a>`).join(" ");return`-a---  <span class="wt-y">[${s(f.tag)}]</span> <span class="wt-c">${s(f.title)}</span>
       <span class="wt-dim">${s(f.desc)}</span>
       ${M}`})];await j(B,x,{minDelay:75,maxDelay:120,batch:1});return}if(r==="scripts"){const c=te("Loading C:\\Users\\visitor\\averybeuth.xyz\\scripts\\manifest.json",x),[k]=await Promise.all([Ce(d.base),Q(400)]);if(c(),x!==F)return;const B=[`<span class="wt-dim">Directory: C:\\Users\\visitor\\averybeuth.xyz\\scripts (${k.length} files)</span>`,...k.map(f=>{const M=f.links.map(q=>`<a class="wt-link" href="${s(q.href)}">[${s(q.label)}]</a>`).join(" ");return`-a---  <span class="wt-c">${s(f.title)}</span> <span class="wt-dim">(${s(f.tag)})</span>
       <span class="wt-dim">${s(f.desc)}</span>
       ${M}`})];await j(B,x,{minDelay:72,maxDelay:118,batch:1});return}if(r==="films"){const c=te("Probing C:\\Users\\visitor\\averybeuth.xyz\\films",x),[k]=await Promise.all([Le(d.base),Q(400)]);if(c(),x!==F)return;const B=['<span class="wt-dim">Directory: C:\\Users\\visitor\\averybeuth.xyz\\films  (tools: <a class="wt-link" href="https://averywsc.github.io/colorstudies/" target="_blank" rel="noopener">guides/LUTs</a> <a class="wt-link" href="https://averywsc.github.io/fifilm/" target="_blank" rel="noopener">fifilm</a>)</span>',...k.map(f=>{const M=f.embed?f.embed.replace("/embed/","/watch?v="):"",q=[M?`<a class="wt-link" href="${s(M)}" target="_blank" rel="noopener">[watch on youtube]</a>`:"",...f.links.map(K=>`<a class="wt-link" href="${s(K.href)}">[${s(K.label)}]</a>`)].filter(Boolean).join(" ");return`-a---  <span class="wt-c">${s(f.title)}</span> <span class="wt-y">[${s(f.tag)}]</span>
       <span class="wt-dim">${s(f.desc)}</span>
       ${q}`})];await j(B,x,{minDelay:85,maxDelay:135,batch:1});return}if(r==="photos"){const c=te("Sorting 375 frames by color spectrum",x),[k]=await Promise.all([$e(d.base),Q(420)]);if(c(),x!==F)return;V(`<span class="wt-dim">Directory: C:\\Users\\visitor\\averybeuth.xyz\\photos  (${k.length} frames, click any color block for fullscreen preview)</span>`);const B=V(`<span class="wt-dim">[....................] 0/${k.length}</span>`),f=V("","wt-ansi-wall");f.addEventListener("click",M=>{const q=M.target.closest("[data-wt-photo]");q&&Te(k,Number(q.dataset.wtPhoto))});for(let M=0;M<k.length;M+=15){if(x!==F)return;const q=Math.min(M+15,k.length),K=document.createDocumentFragment();for(let z=M;z<q;z++){const ie=k[z],be=document.createElement("button");be.type="button",be.className="wt-swatch",be.dataset.wtPhoto=String(z),be.style.background=ie.hex,be.title=`${ie.file} (${ie.hex})`,K.appendChild(be)}f.appendChild(K);const de=Math.round(q/k.length*20);B.innerHTML=`<span class="wt-dim">[${"#".repeat(de)}${".".repeat(20-de)}] ${q}/${k.length}</span>`,H.scrollTop=H.scrollHeight,await Q(42+Math.random()*28)}B.innerHTML=`<span class="wt-g">[####################] ${k.length}/${k.length} ok</span>`}},Me=async h=>{if(!D)return;const x=D,r=++F;V(`<span class="wt-prompt-echo">${s(oe.textContent)}</span> ${s(h||"n")}`),D=null,G(),A(!0);const c=(h||"").trim().toLowerCase();["y","yes","more","archive"].includes(c)?await re(x,r):V(`<span class="wt-dim">Skipped archive. Type <span class="wt-g">archive</span> anytime to list all ${x.length} builds.</span>`),r===F&&A(!1)},we=async(h,x=null)=>{const r=(h||"").trim();if(D){const q=r.toLowerCase();if(!r||["y","yes","n","no","more","archive"].includes(q)){await Me(q||"n");return}D=null,G()}const c=x??++F;if(!r)return;ee.unshift(r),se=-1,V(`<span class="wt-prompt-echo">${s(oe.textContent)}</span> ${s(r)}`),A(!0);const k=r.toLowerCase(),B=r.split(/\s+/),f=B[0].toLowerCase(),M=B.slice(1).join(" ").toLowerCase().replace(/[\\/]+$/,"");if(["ily","love u","i love u","love you","i love you","<3"].includes(k))await j(['<span class="wt-pink">   /\\_/\\</span>','<span class="wt-pink">  ( ^.^ )  love u too &lt;3</span>'],c,{minDelay:75,maxDelay:120,batch:1});else if(["cats","cat","meow"].includes(k))await j(['<span class="wt-y">  /\\_/\\</span>','<span class="wt-y"> ( o.o )  meow</span>','<span class="wt-y">  &gt; ^ &lt;</span>'],c,{minDelay:70,maxDelay:115,batch:1});else if(k==="matrix"){const q=o.classList.toggle("is-matrix-boost");V(q?'<span class="wt-g">matrix rain: amplified</span>':'<span class="wt-dim">matrix rain: subtle</span>')}else if(k==="coffee"){const q=V('<span class="wt-dim">brewing flat white... [..........] 0%</span>');for(let K=1;K<=10;K++){if(c!==F)return;q.innerHTML=`<span class="wt-dim">brewing flat white... [${"#".repeat(K)}${".".repeat(10-K)}] ${K*10}%</span>`,await Q(110)}q.innerHTML='<span class="wt-y">flat white ready. oat milk, double shot.</span>'}else if(f==="sudo")V('<span class="wt-err">nice try. visitor is not in the sudoers file. this incident will be ignored.</span>');else if(f==="rm"&&k.includes("-rf")){const q=te("deleting averybeuth.xyz",c);if(await Q(750),q(),c!==F)return;V('<span class="wt-y">just kidding, i need this website.</span>')}else if(f==="secret"||f==="secrets")await j(['<span class="wt-y">terminal secrets:</span>','  <span class="wt-g">ily / love u</span>    say hi back','  <span class="wt-g">cats / meow</span>     summon ascii cat','  <span class="wt-g">matrix</span>          toggle matrix rain intensity','  <span class="wt-g">coffee</span>          brew a flat white','  <span class="wt-g">sudo / rm -rf</span>   forbidden commands','  <button type="button" class="wt-link" data-wt-secrets-inline>[open full secrets list for all themes]</button>'],c,{minDelay:65,maxDelay:105,batch:1});else if(f==="archive"||f==="more"){const q=te("Loading code archive",c),[K]=await Promise.all([xe(d.base),Q(380)]);if(q(),c!==F)return;await re(K.archive,c)}else if(f==="help"||f==="?")await j(['<span class="wt-g">dir / ls [folder]</span>   List entries (photos, code, scripts, music, films)','<span class="wt-g">cd &lt;folder&gt;</span>         Enter directory &amp; stream entries (or <span class="wt-g">cd ..</span> / <span class="wt-g">cd ~</span>)','<span class="wt-g">archive</span>             List all 74 archived code projects','<span class="wt-g">cat &lt;name&gt;</span>          Inspect any project, song, film or script','<span class="wt-g">open &lt;name&gt;</span>         Launch link directly','<span class="wt-g">tree</span>                Show directory tree','<span class="wt-g">neofetch</span>            Display system &amp; owner info','<span class="wt-g">secrets</span>             Show hidden commands &amp; site secrets','<span class="wt-g">cls / clear</span>         Clear terminal output','<span class="wt-g">themes</span>              Open theme switcher','<span class="wt-g">original / exit</span>     Return to default site'],c,{minDelay:55,maxDelay:95,batch:1});else if(f==="cls"||f==="clear")J.innerHTML="";else if(f==="neofetch")await ve(c);else if(f==="whoami")V("averybeuth\\visitor");else if(f==="tree")await j(["C:\\USERS\\VISITOR\\AVERYBEUTH.XYZ","├───photos   (375 color-ordered frames)","├───code     (15 main + 74 archive)","├───scripts  (original screenplays + PDFs)","├───music    (albums, EPs, singles + bebeat)","└───films    (short films + fifilm + LUTs)"],c,{minDelay:70,maxDelay:115,batch:1});else if(f==="dir"||f==="ls"){const q=["photos","code","scripts","music","films","home"].includes(M)?M:ne;await he(q,c)}else if(f==="cd")!M||M==="~"||M===".."||M==="home"?(ne="home",G(),await he("home",c)):["photos","code","scripts","music","films"].includes(M)?(ne=M,G(),await he(M,c)):M==="film"?(ne="films",G(),await he("films",c)):V(`<span class="wt-err">cd : Cannot find path '${s(M)}' because it does not exist.</span>`);else if(f==="cat"||f==="info"||f==="open")if(!M)V('<span class="wt-dim">Usage: cat &lt;name&gt;</span>');else{const q=te(`Searching index for '${M}'`,c),[K,de,z,ie]=await Promise.all([xe(d.base),Ee(d.base),Le(d.base),Ce(d.base),Q(350)]);if(q(),c!==F)return;const pe=[...K.all,...de,...z,...ie].find(Ne=>Ne.title.toLowerCase().includes(M));pe?(await j([`<span class="wt-c">[${s(pe.title)}]</span> <span class="wt-g">(${s(pe.tag)})</span>`,`  ${s(pe.desc)}`,...pe.href?[`  <a class="wt-link" href="${s(pe.href)}" target="_blank" rel="noopener">${s(pe.href)}</a>`]:[]],c,{minDelay:65,maxDelay:105,batch:1}),f==="open"&&pe.href&&window.open(pe.href,"_blank","noopener,noreferrer")):V(`<span class="wt-err">No entry matching '${s(M)}'.</span>`)}else if(f==="themes")R(!0);else if(f==="original"||f==="exit"){O("original");return}else["photos","code","scripts","music","films"].includes(f)?(ne=f,G(),await he(f,c)):V(`<span class="wt-err">${s(f)} : The term '${s(f)}' is not recognized. Type 'help'.</span>`);c===F&&A(!1)};J.addEventListener("click",h=>{const x=h.target.closest("[data-wt-more]");if(x){Me(x.dataset.wtMore);return}const r=h.target.closest("[data-wt-run]");if(r){ce(r.dataset.wtRun);return}if(h.target.closest("[data-wt-themes-inline]")){R();return}if(h.target.closest("[data-wt-secrets-inline]")){ue();return}if(h.target.closest("[data-wt-orig-inline]")){O("original");return}}),o.querySelectorAll("[data-wt-cmd]").forEach(h=>h.addEventListener("click",()=>ce(h.dataset.wtCmd))),o.querySelectorAll("[data-wt-themes]").forEach(h=>h.addEventListener("click",()=>R())),o.querySelectorAll("[data-wt-secrets]").forEach(h=>h.addEventListener("click",()=>ue())),o.querySelectorAll("[data-wt-original]").forEach(h=>h.addEventListener("click",()=>O("original"))),H.addEventListener("click",h=>{!h.target.closest("a, button, input")&&!w&&I.focus()}),["input","keyup","click","select","focus"].forEach(h=>I.addEventListener(h,E)),N.addEventListener("submit",h=>{h.preventDefault();const x=I.value;I.value="",E(),we(x)}),I.addEventListener("keydown",h=>{if(h.key==="ArrowUp"&&ee.length)h.preventDefault(),se=Math.min(ee.length-1,se+1),I.value=ee[se],E();else if(h.key==="ArrowDown")h.preventDefault(),se=Math.max(-1,se-1),I.value=se>=0?ee[se]:"",E();else if(h.key==="Tab"){h.preventDefault();const x=I.value.toLowerCase(),c=["cd photos","cd code","cd scripts","cd music","cd films","archive","neofetch","tree","secrets","help","clear","themes","original"].find(k=>k.startsWith(x));c&&(I.value=c,E())}}),(async()=>{const h=++F;A(!0),await j(['<span class="wt-dim">Windows PowerShell</span>','<span class="wt-dim">Copyright (C) Avery Beuth. All rights reserved.</span>'],h,{minDelay:75,maxDelay:120,batch:1}),await ve(h),h===F&&(A(!1),["photos","code","scripts","music","films"].includes(d.slug)&&await ce(`cd ${d.slug}`))})()},y=()=>{const d=ke();document.documentElement.classList.add("has-theme-takeover");const o=document.createElement("div");o.className="aero-os",o.setAttribute("data-theme-injected","1"),o.innerHTML=`
      <div class="aero-bg" aria-hidden="true">
        <span class="aero-bubble b1"></span><span class="aero-bubble b2"></span>
        <span class="aero-bubble b3"></span><span class="aero-bubble b4"></span>
        <span class="aero-bubble b5"></span><span class="aero-bubble b6"></span>
      </div>
      <nav class="aero-desktop-icons" aria-label="Desktop icons">
        <button type="button" class="aero-d-icon" data-os-open="photos"><span class="aero-d-glyph">${Z.photos}</span><span>Photos</span></button>
        <button type="button" class="aero-d-icon" data-os-open="code"><span class="aero-d-glyph">${Z.folder}</span><span>Code</span></button>
        <button type="button" class="aero-d-icon" data-os-open="scripts"><span class="aero-d-glyph">${Z.scripts}</span><span>Scripts</span></button>
        <button type="button" class="aero-d-icon" data-os-open="music"><span class="aero-d-glyph">${Z.music}</span><span>Music</span></button>
        <button type="button" class="aero-d-icon" data-os-open="films"><span class="aero-d-glyph">${Z.film}</span><span>Films</span></button>
        <button type="button" class="aero-d-icon" data-os-open="notes"><span class="aero-d-glyph">${Z.notes}</span><span>About.txt</span></button>
        <button type="button" class="aero-d-icon" data-a-secrets><span class="aero-d-glyph">${Z.notes}</span><span>Secrets.txt</span></button>
        <button type="button" class="aero-d-icon" data-a-themes><span class="aero-d-glyph">${Z.themes}</span><span>Themes</span></button>
        <button type="button" class="aero-d-icon" data-a-original><span class="aero-d-glyph">${Z.power}</span><span>Original</span></button>
      </nav>
      <div class="aero-desktop-hint" id="aeroDesktopHint">averybeuth.xyz &middot; click any desktop icon to open a window</div>
      <div class="aero-win-layer" id="aeroWinLayer"></div>
      <footer class="aero-taskbar-global">
        <button type="button" class="aero-start-orb" data-a-themes aria-label="Start / Themes">${Z.winOrb}</button>
        <div class="aero-task-list" id="aeroTaskList"></div>
        <button type="button" class="aero-task-tab" data-a-secrets>Secrets</button>
        <button type="button" class="aero-task-tab" data-a-original>Original site</button>
        <button type="button" class="aero-tray-clock" id="aeroClock" title="System clock"><span id="aeroTime"></span><span id="aeroDate"></span></button>
      </footer>
    `,document.body.appendChild(o);let p=0;const b=[...o.querySelectorAll(".aero-bubble")];b.forEach(w=>{w.addEventListener("click",()=>{w.classList.contains("is-popped")||(w.classList.add("is-popped"),p++,p>=b.length&&(U&&(U.textContent="all bubbles popped. respawning...",U.style.opacity="1"),setTimeout(()=>{b.forEach(D=>D.classList.remove("is-popped")),p=0,U&&(U.textContent="averybeuth.xyz · click any desktop icon to open a window",N())},1100)))})});let m=0,g=null;o.querySelector("#aeroClock")?.addEventListener("click",()=>{if(m++,clearTimeout(g),g=setTimeout(()=>{m=0},900),m>=3){if(m=0,o.querySelector(".aero-bsod"))return;const w=document.createElement("div");w.className="aero-bsod",w.innerHTML=`
          <div class="aero-bsod-inner">
            <p>A problem has been detected and averybeuth.xyz has been shut down to prevent excessive nostalgia.</p>
            <p>TOO_MUCH_FRUTIGER_AERO</p>
            <p>If this is the first time you've seen this stop error screen, click anywhere or press any key to reboot the desktop.</p>
            <p>Technical information:</p>
            <p>*** STOP: 0x00000042 (0xAVERY000, 0x00000007, 0x00000375, 0x00000089)</p>
            <p>*** aero_glass.sys - Address FFFFF88001A4B000 base at FFFFF88001A00000</p>
            <p class="aero-bsod-dismiss">[ click anywhere to reboot desktop ]</p>
          </div>
        `;const D=()=>{window.removeEventListener("keydown",D),w.remove()};w.addEventListener("click",D),window.addEventListener("keydown",D),o.appendChild(w)}});const C=o.querySelector("#aeroWinLayer"),Y=o.querySelector("#aeroTaskList"),U=o.querySelector("#aeroDesktopHint"),_=new Map;let J=30,H=0;const N=()=>{U&&(U.style.opacity=_.size===0?"1":"0")},I=w=>{const D=_.get(w);D&&(J++,D.el.style.zIndex=String(J),D.el.classList.remove("is-minimized"),_.forEach((ee,se)=>{ee.el.classList.toggle("is-focused",se===w),ee.taskBtn.classList.toggle("is-active",se===w)}))},X=w=>{const D=_.get(w);D&&(D.cleanupDrag?.(),D.el.remove(),D.taskBtn.remove(),_.delete(w),o.querySelector(`[data-os-open="${w}"]`)?.classList.remove("is-current"),N())},W=async(w,D,ee,se,Q)=>{let E=[],A=[],le=Z.code,G=!1;if(w==="code"){const r=await xe(d.base);A=r.all,le=Z.code,E=[{id:"main",label:"Main",count:r.main.length},{id:"archive",label:"Archive",count:r.archive.length},{id:"all",label:"All Projects",count:r.all.length},{id:"cat:tool",label:"Tools",count:r.all.filter(c=>c.tag==="tool").length},{id:"cat:app",label:"Apps",count:r.all.filter(c=>c.tag==="app"||c.tag==="apps").length},{id:"cat:game",label:"Games",count:r.all.filter(c=>c.tag==="game").length},{id:"cat:website",label:"Websites",count:r.all.filter(c=>c.tag==="website").length}]}else w==="music"?(A=await Ee(d.base),le=Z.music,E=[{id:"all",label:"All Releases",count:A.length},{id:"albums",label:"Albums & EPs",count:A.filter(r=>r.folder==="albums").length},{id:"singles",label:"Singles",count:A.filter(r=>r.folder==="singles").length}]):w==="films"?(A=await Le(d.base),le=Z.film,E=[{id:"all",label:"Short Films",count:A.length}]):w==="scripts"?(A=await Ce(d.base),le=Z.scripts,E=[{id:"all",label:"Screenplays",count:A.length}]):w==="photos"&&(G=!0,A=(await $e(d.base)).map((c,k)=>({title:c.name,file:c.file,img:c.thumb,full:c.full,width:c.width,height:c.height,tag:c.hex.toUpperCase(),hex:c.hex,desc:`${c.width} × ${c.height} px · Dominant ${c.hex.toUpperCase()} · Color spectrum #${k+1} (double-click to enlarge)`,folder:c.bucket,folderLabel:c.bucket,typeLabel:"JPG"})),E=[{id:"all",label:"All Colors",count:A.length},{id:"warm",label:"Warm / Red",count:A.filter(c=>c.folder==="warm").length},{id:"gold",label:"Gold / Yellow",count:A.filter(c=>c.folder==="gold").length},{id:"green",label:"Green",count:A.filter(c=>c.folder==="green").length},{id:"blue",label:"Blue / Cyan",count:A.filter(c=>c.folder==="blue").length},{id:"violet",label:"Violet",count:A.filter(c=>c.folder==="violet").length},{id:"mono",label:"Monochrome",count:A.filter(c=>c.folder==="mono").length}]);const V=D.querySelector(".aero-exp-tree-slot"),te=D.querySelector(".aero-exp-list"),j=D.querySelector(".aero-exp-preview");let ce=E[0]?.id||"all",ve="",re=null,he="";const Me=()=>A.filter(r=>{if(ce!=="all"){if(ce.startsWith("cat:")){const c=ce.slice(4);if(c==="app"){if(r.tag!=="app"&&r.tag!=="apps")return!1}else if(r.tag!==c)return!1}else if(r.folder!==ce)return!1}return!(ve&&!`${r.title} ${r.tag} ${r.desc}`.toLowerCase().includes(ve))}),we=(r,c)=>{if(he="",!r){j.innerHTML='<div class="aero-prev-empty">Select an item to preview.</div>';return}const k=r.embed?`<div class="aero-prev-video"><iframe src="${s(r.embed)}" title="${s(r.title)}" allowfullscreen></iframe></div>`:r.img?`<div class="aero-prev-img-wrap ${r.squareArt?"is-square":""}" data-prev-media title="${G?"Double-click for fullscreen":""}"><img src="${s(r.full||r.img)}" alt="${s(r.title)}" /></div>`:`<div class="aero-prev-doc-icon">${le}</div>`,B=r.soundcloud?'<button type="button" class="aero-prev-btn" data-sc-toggle>Play SoundCloud Preview</button><div data-sc-slot></div>':"",f=G?'<div class="aero-prev-pnav"><button type="button" class="aero-prev-btn is-secondary" data-p-prev>&lsaquo; Prev</button><button type="button" class="aero-prev-btn is-secondary" data-p-next>Next &rsaquo;</button></div><button type="button" class="aero-prev-btn" data-p-full>Fullscreen Preview</button>':"",M=r.links?.length?r.links.map(z=>`<a class="aero-prev-btn is-secondary" href="${s(z.href)}" ${z.href.startsWith("http")?'target="_blank" rel="noopener noreferrer"':""}>${s(z.label)}</a>`).join(""):r.href&&r.href!=="#"?`<a class="aero-prev-btn" href="${s(r.href)}" ${r.external?'target="_blank" rel="noopener noreferrer"':""}>Open ${s(r.title)} &raquo;</a>`:"",q=r.hex?`<span class="aero-hex-pill"><i style="background:${r.hex}"></i>${s(r.tag)}</span>`:`<span class="aero-prev-tag">${s(r.tag)}</span>`;j.innerHTML=`
          ${k}
          <div class="aero-prev-meta"><h3 class="aero-prev-title">${s(r.title)}</h3>${q}</div>
          <p class="aero-prev-desc">${s(r.desc)}</p>
          <div class="aero-prev-actions">${B}${f}${M}</div>
        `,j.querySelector("[data-sc-toggle]")?.addEventListener("click",z=>{const ie=j.querySelector("[data-sc-slot]");if(he===r.soundcloud){he="",ie.innerHTML="",z.target.textContent="Play SoundCloud Preview";return}he=r.soundcloud;const be=r.soundcloud.includes("/sets/"),pe=`https://w.soundcloud.com/player/?url=${encodeURIComponent(r.soundcloud)}&color=%232b89d8&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;ie.innerHTML=`<iframe class="aero-sc-iframe" title="SoundCloud preview" width="100%" height="${be?220:115}" scrolling="no" frameborder="no" allow="autoplay" src="${pe}"></iframe>`,z.target.textContent="Stop Preview"}),j.querySelector("[data-p-prev]")?.addEventListener("click",()=>{const z=c.indexOf(r);z>0&&(re=c[z-1],x())}),j.querySelector("[data-p-next]")?.addEventListener("click",()=>{const z=c.indexOf(r);z>=0&&z<c.length-1&&(re=c[z+1],x())});const K=()=>{G&&Te(c,c.indexOf(r))};j.querySelector("[data-p-full]")?.addEventListener("click",K);const de=j.querySelector("[data-prev-media]");de&&G&&(de.style.cursor="pointer",de.title="Click for fullscreen preview",de.addEventListener("click",K))},h=()=>{V.innerHTML=E.map(r=>`
          <button type="button" class="aero-tree-item ${r.id===ce?"is-selected":""}" data-fid="${s(r.id)}">
            ${Z.folder}<span>${s(r.label)}</span><em>${r.count}</em>
          </button>
        `).join(""),V.querySelectorAll("[data-fid]").forEach(r=>r.addEventListener("click",()=>{ce=r.dataset.fid,h(),x()}))},x=()=>{const r=Me(),c=E.find(k=>k.id===ce);if(ee.innerHTML=`Computer &rsaquo; Avery &rsaquo; ${s(w[0].toUpperCase()+w.slice(1))} &rsaquo; <strong>${s(c?.label||"All")}</strong>`,se.textContent=`${r.length} ${r.length===1?"item":"items"}`,!r.length){te.innerHTML='<div class="aero-empty-folder">No matching items.</div>',re=null,we(null,r);return}(!re||!r.includes(re))&&(re=r[0]),G?(te.classList.add("is-photo-grid"),te.innerHTML=r.map((k,B)=>`
            <button type="button" class="aero-photo-tile ${k===re?"is-selected":""}" data-idx="${B}" title="${s(k.title)} (${k.hex}) · click preview for fullscreen">
              <img src="${s(k.img)}" alt="${s(k.title)}" loading="lazy" />
              <span class="aero-photo-chip" style="background:${k.hex}"></span>
            </button>
          `).join("")):(te.classList.remove("is-photo-grid"),te.innerHTML=r.map((k,B)=>`
            <button type="button" class="aero-file-row ${k===re?"is-selected":""}" data-idx="${B}">
              <span class="aero-file-name">${le}<span>${s(k.title)}</span></span>
              <span class="aero-file-type">${s(k.typeLabel)}</span>
              <span class="aero-file-folder">${s(k.folderLabel)}</span>
            </button>
          `).join("")),te.querySelectorAll("[data-idx]").forEach(k=>{const B=Number(k.dataset.idx),f=r[B];k.addEventListener("click",()=>{re=f,te.querySelectorAll("[data-idx]").forEach(M=>M.classList.toggle("is-selected",M===k)),we(f,r)}),k.addEventListener("dblclick",()=>{if(G){Te(r,B);return}!f.href||f.href==="#"||(f.external?window.open(f.href,"_blank","noopener,noreferrer"):window.location.href=f.href)})}),we(re,r)};Q?.addEventListener("input",()=>{ve=(Q.value||"").trim().toLowerCase(),x()}),h(),x()},oe=w=>{if(_.has(w)){I(w);return}const ee={photos:"Photos | Windows Photo Gallery",code:"Code | Windows Explorer",music:"Music | Windows Explorer",films:"Films | Windows Explorer",scripts:"Scripts | Windows Explorer",notes:"About.txt | Notepad"}[w]||"Window",se=H%5*36,Q=H%5*28;H++;const E=document.createElement("section");if(E.className=w==="notes"?"aero-os-win is-notepad":"aero-os-win is-explorer",E.dataset.wx=String(se),E.dataset.wy=String(Q),w==="notes")E.innerHTML=`
          <div class="aero-win-titlebar aero-win-handle">
            <span class="aero-win-title">${s(ee)}</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-w-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-w-close title="Close">&times;</button>
            </div>
          </div>
          <div class="aero-note-body">
            <p><strong>Avery Beuth</strong> (@avery.beuth)</p>
            <p>Photographer, filmmaker, composer &amp; developer from Aotearoa.</p>
            <p>Open multiple windows at once, drag titlebars to arrange them, or close them all for a clean desktop.</p>
            <p><a href="https://github.com/averywsc" target="_blank" rel="noopener">github.com/averywsc</a> &middot; <a href="mailto:averybeuth3@gmail.com">averybeuth3@gmail.com</a></p>
          </div>
        `;else{const G=w==="music"?'<a class="aero-cmd-btn" href="https://averywsc.github.io/bebeat/" target="_blank" rel="noopener">Open bebeat</a>':w==="films"?'<a class="aero-cmd-btn" href="https://averywsc.github.io/colorstudies/" target="_blank" rel="noopener">guides/LUTs</a><a class="aero-cmd-btn" href="https://averywsc.github.io/fifilm/" target="_blank" rel="noopener">fifilm</a>':"";E.innerHTML=`
          <div class="aero-win-titlebar aero-win-handle">
            <span class="aero-win-title">${s(ee)}</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-w-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-w-close title="Close">&times;</button>
            </div>
          </div>
          <div class="aero-addr-bar">
            <div class="aero-nav-orbs" aria-hidden="true"><span>${Z.backArrow}</span><span>${Z.fwdArrow}</span></div>
            <div class="aero-breadcrumb">Loading...</div>
            <input type="search" class="aero-exp-search" placeholder="Search ${s(w)}..." aria-label="Search" />
          </div>
          <div class="aero-cmd-bar">
            <button type="button" class="aero-cmd-btn" data-w-themes>Themes</button>
            ${G}
            <button type="button" class="aero-cmd-btn" data-w-open-other="photos">Photos</button>
            <button type="button" class="aero-cmd-btn" data-w-open-other="code">Code</button>
            <button type="button" class="aero-cmd-btn" data-w-open-other="music">Music</button>
            <button type="button" class="aero-cmd-btn" data-w-open-other="films">Films</button>
          </div>
          <div class="aero-exp-body">
            <aside class="aero-exp-tree"><div class="aero-tree-head">Folders</div><div class="aero-exp-tree-slot"></div></aside>
            <div class="aero-exp-list-wrap">
              ${w==="photos"?"":'<div class="aero-exp-cols"><span>Name</span><span>Type</span><span>Folder</span></div>'}
              <div class="aero-exp-list"><div class="aero-empty-folder">Loading...</div></div>
            </div>
            <aside class="aero-exp-preview"><div class="aero-prev-empty">Loading preview...</div></aside>
          </div>
          <div class="aero-exp-status"><span class="aero-st-count">Loading...</span><span>Drag titlebar to move &middot; Click preview for fullscreen</span></div>
        `}C.appendChild(E);const A=document.createElement("button");A.type="button",A.className="aero-task-tab is-active",A.textContent=ee.split(" | ")[0],A.addEventListener("click",()=>{E.classList.contains("is-minimized")?I(w):E.classList.contains("is-focused")?(E.classList.add("is-minimized"),A.classList.remove("is-active")):I(w)}),Y.appendChild(A),o.querySelector(`[data-os-open="${w}"]`)?.classList.add("is-current");const le=Xe(E,E.querySelector(".aero-win-handle"),()=>I(w));_.set(w,{el:E,taskBtn:A,cleanupDrag:le}),I(w),N(),E.querySelector("[data-w-min]")?.addEventListener("click",()=>{E.classList.add("is-minimized"),A.classList.remove("is-active")}),E.querySelector("[data-w-close]")?.addEventListener("click",()=>X(w)),E.querySelector("[data-w-themes]")?.addEventListener("click",()=>R()),E.querySelectorAll("[data-w-open-other]").forEach(G=>G.addEventListener("click",()=>oe(G.dataset.wOpenOther))),w!=="notes"&&W(w,E.querySelector(".aero-exp-body"),E.querySelector(".aero-breadcrumb"),E.querySelector(".aero-st-count"),E.querySelector(".aero-exp-search"))};o.querySelectorAll("[data-os-open]").forEach(w=>w.addEventListener("click",()=>oe(w.dataset.osOpen))),o.querySelectorAll("[data-a-themes]").forEach(w=>w.addEventListener("click",()=>R())),o.querySelectorAll("[data-a-secrets]").forEach(w=>w.addEventListener("click",()=>ue())),o.querySelectorAll("[data-a-original]").forEach(w=>w.addEventListener("click",()=>O("original")));const ne=()=>{const w=new Date,D=document.getElementById("aeroTime"),ee=document.getElementById("aeroDate");D&&(D.textContent=w.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),ee&&(ee.textContent=w.toLocaleDateString([],{day:"2-digit",month:"2-digit",year:"numeric"}))};ne();const F=setInterval(ne,15e3);i.push(()=>{clearInterval(F),_.forEach(w=>w.cleanupDrag?.()),_.clear()}),["photos","code","music","films","scripts"].includes(d.slug)&&oe(d.slug)},v=(d,o,p,b=60)=>{let m="all",g=!1;const C=["took this one","good lighting","nice color","camera worked","found this outside","pretty neat","yes"];d.innerHTML=`
      <div class="tp-filters" data-tp-filters>
        <button type="button" class="is-active" data-bucket="all">All (${o.length})</button>
        <button type="button" data-bucket="warm">Warm</button>
        <button type="button" data-bucket="gold">Gold</button>
        <button type="button" data-bucket="green">Green</button>
        <button type="button" data-bucket="blue">Blue</button>
        <button type="button" data-bucket="violet">Violet</button>
        <button type="button" data-bucket="mono">Monochrome</button>
      </div>
      <div class="tp-grid" data-tp-grid></div>
      <div class="tp-more-wrap" data-tp-more></div>
    `;const Y=d.querySelector("[data-tp-grid]"),U=d.querySelector("[data-tp-filters]"),_=d.querySelector("[data-tp-more]"),J=()=>{const H=m==="all"?o:o.filter(X=>X.bucket===m),N=g?H:H.slice(0,b);Y.innerHTML=N.map((X,W)=>{const oe=p==="silly"?C[W%C.length]:p==="paper"?`PLATE ${String(W+1).padStart(3,"0")} · ${X.hex.toUpperCase()}`:`SPEC-${String(W+1).padStart(3,"0")} // ${X.hex.toUpperCase()}`;return`
          <button type="button" class="tp-card" data-pidx="${W}" title="Click or double-click for fullscreen">
            ${p==="silly"?'<span class="tp-tape" aria-hidden="true"></span>':""}
            <div class="tp-img-wrap"><img src="${s(X.thumb)}" alt="${s(X.name)}" loading="lazy" /></div>
            <div class="tp-cap"><i style="background:${X.hex}"></i><span>${s(oe)}</span></div>
          </button>
        `}).join("");const I=X=>{const W=X.target.closest("[data-pidx]");W&&Te(H,Number(W.dataset.pidx))};Y.onclick=I,Y.ondblclick=I,!g&&H.length>b?(_.innerHTML=`<button type="button" class="tp-more-btn">Show all ${H.length} photos</button>`,_.querySelector("button").addEventListener("click",()=>{g=!0,J()})):_.innerHTML=""};U.addEventListener("click",H=>{const N=H.target.closest("[data-bucket]");N&&(m=N.dataset.bucket,g=!1,U.querySelectorAll("button").forEach(I=>I.classList.toggle("is-active",I===N)),J())}),J()},u=()=>{const d=ke();if(Ae()){const o=document.createElement("main");o.className="theme-photos-page is-silly",o.setAttribute("data-theme-injected","1"),o.innerHTML=`
        <header class="tp-head">
          <nav class="silly-sub-nav">
            <a href="./">home</a>
            <a href="./?photos=1" class="is-on">photos</a>
            <a href="./code.html">code</a>
            <a href="./scripts/index.html">scripts</a>
            <a href="./music.html">music</a>
            <a href="./film.html">films</a>
            <button type="button" data-tp-themes>themes</button>
            <button type="button" data-tp-secrets>secrets</button>
            <button type="button" data-tp-orig>normal site</button>
          </nav>
          <h1>photos (sorted by color)</h1>
          <p>click any photo to look at it bigger. the tape is decorative.</p>
        </header>
        <div id="sillyPhotoSlot"><div class="tp-loading">Sorting 375 photos by color...</div></div>
      `,document.body.appendChild(o),o.querySelector("[data-tp-themes]")?.addEventListener("click",()=>R()),o.querySelector("[data-tp-secrets]")?.addEventListener("click",()=>ue()),o.querySelector("[data-tp-orig]")?.addEventListener("click",()=>O("original")),$e(".").then(p=>v(o.querySelector("#sillyPhotoSlot"),p,"silly",80));return}if(ge()){let o=Number(sessionStorage.getItem("avery_silly_hits")||"42")+1;sessionStorage.setItem("avery_silly_hits",String(o));let p=0,b=0;const m=document.createElement("main");m.className="theme-home theme-home-silly",m.setAttribute("data-theme-injected","1"),m.innerHTML=`
        <div class="silly-sheet" id="sillySheet">
          <div class="silly-top-doodle">
            <button type="button" class="silly-face-btn" id="sillyFace" aria-label="Paint smiley">${Z.paintFace}</button>
            <div>
              <h1>avery beuth</h1>
              <p class="silly-sub">(graphic design is my passion)</p>
            </div>
          </div>
          <p class="silly-note">welcome to the comic sans edition of my website. everything still works, it just looks like i built it in paint.</p>
          <div class="silly-links-wrap">
            <a class="silly-link-box" href="./?photos=1"><strong>photos</strong><span>375 color-sorted, taped to the fridge</span></a>
            <a class="silly-link-box" href="./code.html"><strong>code</strong><span>89+ things i made instead of studying</span></a>
            <a class="silly-link-box" href="./scripts/index.html"><strong>scripts</strong><span>words people say in movies</span></a>
            <a class="silly-link-box" href="./music.html"><strong>music</strong><span>beeps, boops and piano</span></a>
            <a class="silly-link-box" href="./film.html"><strong>films</strong><span>moving pictures with sound</span></a>
          </div>
          <div class="silly-gags">
            <button type="button" class="silly-gag-btn" id="sillyHitBtn">visitor #<span id="sillyHits">${String(o).padStart(6,"0")}</span></button>
            <button type="button" class="silly-gag-btn" id="sillyGuestBtn">sign guestbook</button>
            <button type="button" class="silly-gag-btn" id="sillyFontBtn">make font bigger</button>
            <button type="button" class="silly-gag-btn" id="sillyDarkBtn">dark mode</button>
            <button type="button" class="silly-gag-btn is-red" id="sillyTiltBtn">do not press</button>
          </div>
          <form class="silly-guest-form" id="sillyGuestForm" hidden autocomplete="off">
            <input type="text" id="sillyGuestInput" placeholder="type your name..." maxlength="36" required />
            <button type="submit">sign</button>
          </form>
          <p class="silly-gag-msg" id="sillyMsg"></p>
          <div class="silly-guest-log" id="sillyGuestLog"></div>
          <div class="silly-foot">
            <span>best viewed in 800&times;600</span>
            <div>
              <button type="button" data-s-themes>themes</button>
              <button type="button" data-s-secrets>secrets</button>
              <button type="button" data-s-original>normal website</button>
            </div>
          </div>
        </div>
        <div class="silly-fallen-rescue" id="sillyRescue" hidden>
          <p>well done. you knocked the entire website over.</p>
          <button type="button" id="sillyPickUp">pick the website back up</button>
        </div>
      `,document.body.appendChild(m);const g=m.querySelector("#sillySheet"),C=m.querySelector("#sillyMsg"),Y=m.querySelector("#sillyRescue"),U=m.querySelector("#sillyGuestForm"),_=m.querySelector("#sillyGuestInput"),J=m.querySelector("#sillyGuestLog");m.querySelector("#sillyHitBtn")?.addEventListener("click",()=>{o++,sessionStorage.setItem("avery_silly_hits",String(o)),m.querySelector("#sillyHits").textContent=String(o).padStart(6,"0"),C.textContent="congrats you inflated my analytics"});let H=0;const N=m.querySelector("#sillyFace");N?.addEventListener("click",()=>{H++,N.style.transform=`rotate(${(H%2?1:-1)*16}deg) scale(1.12)`,setTimeout(()=>{N.style.transform=""},220),H===1?C.textContent="hey dont poke me":H===2?C.textContent="seriously stop poking my face":H===3?C.textContent="i am literally an svg":(N.innerHTML='<svg viewBox="0 0 44 44" width="38" height="38" aria-hidden="true"><circle cx="22" cy="22" r="18" fill="#fff59d" stroke="#1c1c1c" stroke-width="2.4"/><rect x="10" y="14" width="10" height="6" rx="1.5" fill="#1c1c1c"/><rect x="24" y="14" width="10" height="6" rx="1.5" fill="#1c1c1c"/><path d="M20 16.5h4" stroke="#1c1c1c" stroke-width="2"/><path d="M14 27c3.5 3.5 12 4 16-0.5" fill="none" stroke="#1c1c1c" stroke-width="2.3" stroke-linecap="round"/></svg>',C.textContent="fine. sunglasses mode activated.")}),m.querySelector("#sillyGuestBtn")?.addEventListener("click",()=>{U.hidden=!U.hidden,U.hidden||_.focus()}),U?.addEventListener("submit",X=>{X.preventDefault();const W=(_.value||"").trim();if(!W)return;_.value="";const oe=W.toLowerCase().includes("avery");C.textContent=`saving "${W}" to database...`,setTimeout(()=>{C.textContent=oe?"wait thats my name. identity theft reported.":"just kidding theres no backend";const ne=document.createElement("div");ne.textContent=oe?`${W} (imposter)`:`${W} (definitely not saved)`,J.appendChild(ne)},650)}),m.querySelector("#sillyFontBtn")?.addEventListener("click",X=>{b=(b+1)%4;const W=["1","1.18","1.38","1.62"];g.style.setProperty("--sf",W[b]),X.target.textContent=b===3?"ok make it normal again":"make font bigger",C.textContent=b===3?"this is getting out of hand":b===0?"back to reasonable sizing.":"bigger."}),m.querySelector("#sillyDarkBtn")?.addEventListener("click",()=>{g.classList.add("is-cursed-dark"),C.textContent="",setTimeout(()=>{g.classList.remove("is-cursed-dark"),C.textContent="sorry i forgot to change the text color"},1250)});const I=[0,5,13,25,42];m.querySelector("#sillyTiltBtn")?.addEventListener("click",()=>{if(p++,p<I.length){const X=I[p];g.style.transform=`rotate(${X}deg)`;const W=["","i literally said do not press","it is starting to slide...","ok seriously stop pressing it","uh oh"];C.textContent=W[p]||"uh oh",X>=40&&setTimeout(()=>{g.classList.add("is-fallen"),Y.hidden=!1},320)}}),m.querySelector("#sillyPickUp")?.addEventListener("click",()=>{p=0,g.classList.remove("is-fallen"),g.style.transform="",Y.hidden=!0,C.textContent="thank you. please do not press it again."}),m.querySelector("[data-s-themes]")?.addEventListener("click",()=>R()),m.querySelector("[data-s-secrets]")?.addEventListener("click",()=>ue()),m.querySelector("[data-s-original]")?.addEventListener("click",()=>O("original"))}else{const o=document.querySelector(".page-wrap");if(!o)return;const p=document.createElement("nav");p.className="silly-sub-nav",p.setAttribute("data-theme-injected","1"),p.innerHTML=`
        <a href="${d.base}/">home</a>
        <a href="${d.base}/?photos=1">photos</a>
        <a href="${d.base}/code.html" class="${d.slug==="code"?"is-on":""}">code</a>
        <a href="${d.base}/scripts/index.html" class="${d.slug.startsWith("scripts")?"is-on":""}">scripts</a>
        <a href="${d.base}/music.html" class="${d.slug==="music"?"is-on":""}">music</a>
        <a href="${d.base}/film.html" class="${d.slug==="films"?"is-on":""}">films</a>
        <button type="button" data-s-themes>themes</button>
        <button type="button" data-s-secrets>secrets</button>
        <button type="button" data-s-original>normal site</button>
      `,o.prepend(p),p.querySelector("[data-s-themes]")?.addEventListener("click",()=>R()),p.querySelector("[data-s-secrets]")?.addEventListener("click",()=>ue()),p.querySelector("[data-s-original]")?.addEventListener("click",()=>O("original"))}},S=()=>{const d=ke();if(ge()){const o=document.createElement("main");o.className="theme-home theme-home-paper",o.setAttribute("data-theme-injected","1"),o.innerHTML=`
        <article class="paper-frontpage">
          <header class="paper-masthead">
            <div class="paper-mast-meta"><button type="button" class="paper-meta-secret" id="paperAuckland">AUCKLAND, NEW ZEALAND</button><span>VOL. IV &middot; COMPLETE ARCHIVAL EDITION</span><span>AVERYBEUTH.XYZ</span></div>
            <h1 id="paperMastTitle" style="cursor:pointer;">THE AVERY CHRONICLE</h1>
            <div class="paper-extra-banner" id="paperExtraBanner" hidden>EXTRA EDITION &middot; LOCAL VISITOR DISCOVERED THE SECRET PRESS RUN</div>
            <nav class="paper-mast-nav">
              <a href="#paper-lead">Lead Story</a>
              <a href="#paper-code">Code Gazette</a>
              <a href="#paper-films">Cinema</a>
              <a href="#paper-scripts">Screenplays</a>
              <a href="#paper-music">Music Desk</a>
              <a href="#paper-photos">Contact Sheet</a>
              <button type="button" data-p-themes>Themes</button>
              <button type="button" data-p-secrets>Secrets</button>
              <button type="button" data-p-original>Original</button>
            </nav>
          </header>

          <section class="paper-front-grid" id="paper-lead">
            <div class="paper-lead">
              <span class="paper-kicker">FRONT PAGE FEATURE</span>
              <h2>Local Creator Publishes 89+ Open-Source Tools, Films, Screenplays &amp; 375 Photographs</h2>
              <div class="paper-byline">By Avery Beuth &middot; Staff Correspondent &middot; <a href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">@avery.beuth</a> &middot; <a href="https://github.com/averywsc" target="_blank" rel="noopener">github.com/averywsc</a></div>
              <p class="paper-dropcap">Everything on averybeuth.xyz is assembled below in a single uninterrupted broadsheet edition. Scroll down to read the software feature stories and classifieds archive, watch short films, inspect original screenplays, listen to albums and EPs, or browse the full 375-plate color-ordered photographic contact sheet.</p>
            </div>
            <figure class="paper-hero-plate" id="paperHeroPlate">
              <div class="paper-plate-placeholder">Developing front-page plate...</div>
            </figure>
          </section>

          <section class="paper-section" id="paper-code">
            <div class="paper-sec-head"><span class="paper-kicker">SECTION I &middot; SOFTWARE &amp; TOOLS</span><h2>The Code Gazette</h2></div>
            <div class="paper-article-grid" id="paperCodeMain"><p class="paper-loading">Typesetting selected works...</p></div>
            <div class="paper-classifieds-wrap">
              <h3 class="paper-classifieds-title">ARCHIVE CLASSIFIEDS (74 PROJECTS)</h3>
              <div class="paper-classifieds" id="paperCodeArchive"></div>
            </div>
          </section>

          <section class="paper-section" id="paper-films">
            <div class="paper-sec-head"><span class="paper-kicker">SECTION II &middot; MOVING IMAGE</span><h2>Cinema &amp; Color Studies</h2></div>
            <div class="paper-sub-links"><a href="https://averywsc.github.io/colorstudies/" target="_blank" rel="noopener">guides/LUTs &rarr;</a><a href="https://averywsc.github.io/fifilm/" target="_blank" rel="noopener">fifilm &rarr;</a></div>
            <div class="paper-films-grid" id="paperFilmsSlot"><p class="paper-loading">Loading film reels...</p></div>
          </section>

          <section class="paper-section" id="paper-scripts">
            <div class="paper-sec-head"><span class="paper-kicker">SECTION III &middot; LITERARY DESK</span><h2>Original Screenplays</h2></div>
            <div class="paper-scripts-cols" id="paperScriptsSlot"><p class="paper-loading">Loading scripts...</p></div>
          </section>

          <section class="paper-section" id="paper-music">
            <div class="paper-sec-head"><span class="paper-kicker">SECTION IV &middot; SOUND &amp; SYNTHESIS</span><h2>The Music Review Desk</h2></div>
            <div class="paper-sub-links"><a href="https://averywsc.github.io/bebeat/" target="_blank" rel="noopener">Open bebeat studio &rarr;</a></div>
            <div class="paper-music-grid" id="paperMusicSlot"><p class="paper-loading">Loading discography...</p></div>
          </section>

          <section class="paper-section" id="paper-photos">
            <div class="paper-sec-head"><span class="paper-kicker">SECTION V &middot; PHOTOGRAPHIC ARCHIVE</span><h2>Color-Ordered Contact Sheet</h2></div>
            <div id="paperPhotosSlot"><p class="paper-loading">Sorting 375 plates by spectrum...</p></div>
          </section>
        </article>
      `,document.body.appendChild(o),o.querySelector("[data-p-themes]")?.addEventListener("click",()=>R()),o.querySelector("[data-p-secrets]")?.addEventListener("click",()=>ue()),o.querySelector("[data-p-original]")?.addEventListener("click",()=>O("original")),xe(".").then(p=>{o.querySelector("#paperCodeMain").innerHTML=p.main.map(b=>`
          <article class="paper-story">
            <a class="paper-story-img" href="${s(b.href)}" target="_blank" rel="noopener"><img src="${s(b.img)}" alt="${s(b.title)}" loading="lazy" /></a>
            <span class="paper-story-tag">${s(b.tag)}</span>
            <h3><a href="${s(b.href)}" target="_blank" rel="noopener">${s(b.title)}</a></h3>
            <p>${s(b.desc)}</p>
          </article>
        `).join(""),o.querySelector("#paperCodeArchive").innerHTML=p.archive.map(b=>`
          <a class="paper-classified" href="${s(b.href)}" target="_blank" rel="noopener">
            <strong>${s(b.title)}</strong> <em>[${s(b.tag)}]</em>: ${s(b.desc)}
          </a>
        `).join("")}),Le(".").then(p=>{o.querySelector("#paperFilmsSlot").innerHTML=p.map(b=>`
          <article class="paper-film-story">
            ${b.embed?`<div class="paper-embed"><iframe src="${s(b.embed)}" title="${s(b.title)}" allowfullscreen></iframe></div>`:""}
            <h3>${s(b.title)}</h3>
            <div class="paper-story-tag">${s(b.tag)}</div>
            <p>${s(b.desc)}</p>
            ${b.links.map(m=>`<a class="paper-inline-link" href="${s(m.href)}">${s(m.label)} &rarr;</a>`).join(" ")}
          </article>
        `).join("")}),Ce(".").then(p=>{o.querySelector("#paperScriptsSlot").innerHTML=p.map(b=>`
          <article class="paper-script-item">
            <h4><a href="${s(b.href)}">${s(b.title)}</a></h4>
            <div class="paper-story-tag">${s(b.tag)}</div>
            <p>${s(b.desc)}</p>
            <div class="paper-item-links">${b.links.map(m=>`<a href="${s(m.href)}">${s(m.label)}</a>`).join(" &middot; ")}</div>
          </article>
        `).join("")}),Ee(".").then(p=>{o.querySelector("#paperMusicSlot").innerHTML=p.map(b=>`
          <article class="paper-music-item">
            <img src="${s(b.img)}" alt="${s(b.title)}" loading="lazy" />
            <div>
              <h4>${s(b.title)}</h4>
              <div class="paper-story-tag">${s(b.tag)}</div>
              <p>${s(b.desc)}</p>
              <div class="paper-item-links">${b.links.map(m=>`<a href="${s(m.href)}" target="_blank" rel="noopener">${s(m.label)}</a>`).join(" &middot; ")}</div>
            </div>
          </article>
        `).join("")}),$e(".").then(p=>{let b=Math.floor(Math.random()*p.length);const m=o.querySelector("#paperHeroPlate"),g=H=>{const N=p[H]||p[0];!N||!m||(b=H,m.innerHTML=`<img src="${s(N.thumb)}" alt="${s(N.name)}" /><figcaption>FIG. 1: ${s(N.file)} (${N.hex.toUpperCase()}). Click to inspect.</figcaption>`)};g(b),m.style.cursor="pointer",m.addEventListener("click",()=>Te(p,b));let C=0,Y=null;o.querySelector("#paperMastTitle")?.addEventListener("click",()=>{if(C++,clearTimeout(Y),Y=setTimeout(()=>{C=0},900),C>=3){C=0;const H=o.querySelector("#paperExtraBanner");H&&(H.hidden=!1);const N=Math.floor(Math.random()*p.length);g(N)}});const U=o.querySelector("#paperAuckland"),_=["AUCKLAND, NZ · 16°C PROBABLY WINDY","AUCKLAND, NZ · FOUR SEASONS IN 20 MIN","AUCKLAND, NEW ZEALAND"];let J=0;U?.addEventListener("click",()=>{U.textContent=_[J%_.length],J++}),v(o.querySelector("#paperPhotosSlot"),p,"paper",48),Ae()&&setTimeout(()=>o.querySelector("#paper-photos")?.scrollIntoView({behavior:"smooth"}),120)})}else{const o=document.querySelector(".page-wrap");if(!o)return;const p=document.createElement("header");p.className="paper-masthead",p.setAttribute("data-theme-injected","1"),p.innerHTML=`
        <div class="paper-mast-meta"><span>AUCKLAND, NEW ZEALAND</span><span>SECTION: ${s(d.title.toUpperCase())}</span><span>AVERYBEUTH.XYZ</span></div>
        <div class="paper-mast-brand">THE AVERY CHRONICLE</div>
        <nav class="paper-mast-nav">
          <a href="${d.base}/">Complete Edition</a>
          <a href="${d.base}/?photos=1">Photographs</a>
          <a href="${d.base}/code.html" class="${d.slug==="code"?"is-on":""}">Code</a>
          <a href="${d.base}/scripts/index.html" class="${d.slug.startsWith("scripts")?"is-on":""}">Scripts</a>
          <a href="${d.base}/music.html" class="${d.slug==="music"?"is-on":""}">Music</a>
          <a href="${d.base}/film.html" class="${d.slug==="films"?"is-on":""}">Films</a>
          <button type="button" data-p-themes>Themes</button>
          <button type="button" data-p-secrets>Secrets</button>
          <button type="button" data-p-original>Original</button>
        </nav>
      `,o.prepend(p),p.querySelector("[data-p-themes]")?.addEventListener("click",()=>R()),p.querySelector("[data-p-secrets]")?.addEventListener("click",()=>ue()),p.querySelector("[data-p-original]")?.addEventListener("click",()=>O("original"))}},$=()=>{const d=ke();if(ge()){const o=document.createElement("main");o.className="theme-home theme-home-cobalt",o.setAttribute("data-theme-injected","1"),o.innerHTML=`
        <section class="cobalt-sheet is-master">
          <div class="cobalt-ruler" id="cobaltRuler">
            <button type="button" data-cgrid="A1">A1</button><button type="button" data-cgrid="B1">B1</button><button type="button" data-cgrid="C1">C1</button><button type="button" data-cgrid="D1">D1</button><button type="button" data-cgrid="E1">E1</button><button type="button" data-cgrid="F1">F1</button>
          </div>
          <div class="cobalt-titleblock">
            <span id="cobaltDwgRef">DWG NO. AB-MASTER // FULL PORTFOLIO DOSSIER</span>
            <button type="button" class="cobalt-scale-secret" id="cobaltScaleSecret">SCALE 1:1 // GRID 28MM</button>
            <span>REV 2026 // AVERY BEUTH</span>
          </div>
          <nav class="cobalt-sheet-nav" id="cobaltTabs">
            <button type="button" class="is-on" data-csheet="all">ALL SHEETS</button>
            <button type="button" data-csheet="code">S-01 CODE</button>
            <button type="button" data-csheet="music">S-02 MUSIC</button>
            <button type="button" data-csheet="media">S-03 FILMS &amp; SCRIPTS</button>
            <button type="button" data-csheet="photos">S-04 PHOTOS</button>
            <button type="button" data-c-themes>THEMES</button>
            <button type="button" data-c-secrets>SECRETS</button>
            <button type="button" data-c-original>ORIGINAL</button>
          </nav>

          <div class="cobalt-block" data-csec="code">
            <div class="cobalt-sec-bar"><span>SHEET S-01 // SOFTWARE &amp; TOOLS SPECIFICATION</span><span>89+ ASSEMBLIES</span></div>
            <div class="cobalt-spec-cards" id="cobaltCodeMain"><div class="tp-loading">Drafting specifications...</div></div>
            <details class="cobalt-archive-drawer">
              <summary>EXPAND ARCHIVE SCHEDULE (74 SECONDARY BUILDS)</summary>
              <div class="cobalt-archive-table" id="cobaltCodeArchive"></div>
            </details>
          </div>

          <div class="cobalt-block" data-csec="music">
            <div class="cobalt-sec-bar"><span>SHEET S-02 // AUDIO SYNTHESIS &amp; DISCOGRAPHY</span><a href="https://averywsc.github.io/bebeat/" target="_blank" rel="noopener">[OPEN BEBEAT]</a></div>
            <div class="cobalt-music-list" id="cobaltMusicSlot"><div class="tp-loading">Loading audio telemetry...</div></div>
          </div>

          <div class="cobalt-block" data-csec="media">
            <div class="cobalt-sec-bar"><span>SHEET S-03 // MOVING IMAGE &amp; SCREENPLAY SCHEMATICS</span><span><a href="https://averywsc.github.io/fifilm/" target="_blank" rel="noopener">[FIFILM]</a> <a href="https://averywsc.github.io/colorstudies/" target="_blank" rel="noopener">[LUTS]</a></span></div>
            <div class="cobalt-media-split">
              <div id="cobaltFilmsSlot"><div class="tp-loading">Loading reels...</div></div>
              <div id="cobaltScriptsSlot"><div class="tp-loading">Loading screenplays...</div></div>
            </div>
          </div>

          <div class="cobalt-block" data-csec="photos">
            <div class="cobalt-sec-bar"><span>SHEET S-04 // CHROMATIC PHOTOGRAPHIC MATRIX</span><span>375 SPECIMENS</span></div>
            <div id="cobaltPhotosSlot"><div class="tp-loading">Plotting 375 color specimens...</div></div>
          </div>
        </section>
      `,document.body.appendChild(o),o.querySelector("[data-c-themes]")?.addEventListener("click",()=>R()),o.querySelector("[data-c-secrets]")?.addEventListener("click",()=>ue()),o.querySelector("[data-c-original]")?.addEventListener("click",()=>O("original")),o.querySelector("#cobaltScaleSecret")?.addEventListener("click",m=>{const g=document.documentElement.classList.toggle("is-cobalt-whiteprint");m.target.textContent=g?"DIAZO WHITEPRINT // 1:1":"SCALE 1:1 // GRID 28MM"}),i.push(()=>document.documentElement.classList.remove("is-cobalt-whiteprint"));const p=o.querySelector("#cobaltDwgRef");o.querySelectorAll("[data-cgrid]").forEach(m=>m.addEventListener("click",()=>{o.querySelectorAll("[data-cgrid]").forEach(C=>C.classList.toggle("is-locked",C===m));const g=m.dataset.cgrid;p&&(p.textContent=`LOCKED REF ${g} // 36.8485° S, 174.7633° E`)}));const b=m=>{o.querySelectorAll("[data-csheet]").forEach(g=>g.classList.toggle("is-on",g.dataset.csheet===m)),o.querySelectorAll("[data-csec]").forEach(g=>{g.hidden=m!=="all"&&g.dataset.csec!==m})};o.querySelectorAll("[data-csheet]").forEach(m=>m.addEventListener("click",()=>b(m.dataset.csheet))),Ae()&&b("photos"),xe(".").then(m=>{o.querySelector("#cobaltCodeMain").innerHTML=m.main.map((g,C)=>`
          <article class="cobalt-card">
            <div class="cobalt-card-num">ITEM ${String(C+1).padStart(2,"0")} // ${s(g.tag.toUpperCase())}</div>
            <a class="cobalt-thumb" href="${s(g.href)}" target="_blank" rel="noopener"><img src="${s(g.img)}" alt="${s(g.title)}" loading="lazy" /></a>
            <h3><a href="${s(g.href)}" target="_blank" rel="noopener">${s(g.title)}</a></h3>
            <p>${s(g.desc)}</p>
          </article>
        `).join(""),o.querySelector("#cobaltCodeArchive").innerHTML=m.archive.map((g,C)=>`
          <a class="cobalt-arch-row" href="${s(g.href)}" target="_blank" rel="noopener">
            <span>A-${String(C+1).padStart(2,"0")}</span>
            <strong>${s(g.title)}</strong>
            <em>${s(g.tag)}</em>
            <small>${s(g.desc)}</small>
          </a>
        `).join("")}),Ee(".").then(m=>{o.querySelector("#cobaltMusicSlot").innerHTML=m.map((g,C)=>`
          <article class="cobalt-music-row">
            <img src="${s(g.img)}" alt="${s(g.title)}" loading="lazy" />
            <div>
              <div class="cobalt-card-num">AUD-${String(C+1).padStart(2,"0")} // ${s(g.tag.toUpperCase())}</div>
              <h4>${s(g.title)}</h4>
              <p>${s(g.desc)}</p>
              <div class="cobalt-links">${g.links.map(Y=>`<a href="${s(Y.href)}" target="_blank" rel="noopener">[${s(Y.label.toUpperCase())}]</a>`).join(" ")}</div>
            </div>
          </article>
        `).join("")}),Le(".").then(m=>{o.querySelector("#cobaltFilmsSlot").innerHTML=m.map((g,C)=>`
          <article class="cobalt-film-item">
            <div class="cobalt-card-num">REEL-${String(C+1).padStart(2,"0")} // ${s(g.tag.toUpperCase())}</div>
            ${g.embed?`<div class="paper-embed"><iframe src="${s(g.embed)}" title="${s(g.title)}" allowfullscreen></iframe></div>`:""}
            <h4>${s(g.title)}</h4>
            <p>${s(g.desc)}</p>
          </article>
        `).join("")}),Ce(".").then(m=>{o.querySelector("#cobaltScriptsSlot").innerHTML=m.map((g,C)=>`
          <article class="cobalt-script-row">
            <div class="cobalt-card-num">DOC-${String(C+1).padStart(2,"0")} // ${s(g.tag.toUpperCase())}</div>
            <h4><a href="${s(g.href)}">${s(g.title)}</a></h4>
            <p>${s(g.desc)}</p>
            <div class="cobalt-links">${g.links.map(Y=>`<a href="${s(Y.href)}">[${s(Y.label.toUpperCase())}]</a>`).join(" ")}</div>
          </article>
        `).join("")}),$e(".").then(m=>{v(o.querySelector("#cobaltPhotosSlot"),m,"cobalt",48)})}else{const o=document.querySelector(".page-wrap");if(!o)return;const p=document.createElement("header");p.className="cobalt-sub-header",p.setAttribute("data-theme-injected","1"),p.innerHTML=`
        <div class="cobalt-titleblock">
          <span>DWG NO. AB-${s(d.slug.toUpperCase())}</span>
          <span>LAYER: ${s(d.title.toUpperCase())} // SCALE 1:1</span>
          <span>CYANOTYPE ARCHIVE // 2026</span>
        </div>
        <nav class="cobalt-sheet-nav">
          <a href="${d.base}/">FULL DOSSIER</a>
          <a href="${d.base}/?photos=1">S-04 PHOTOS</a>
          <a href="${d.base}/code.html" class="${d.slug==="code"?"is-on":""}">S-01 CODE</a>
          <a href="${d.base}/music.html" class="${d.slug==="music"?"is-on":""}">S-02 MUSIC</a>
          <a href="${d.base}/scripts/index.html" class="${d.slug.startsWith("scripts")?"is-on":""}">S-03 SCRIPTS</a>
          <a href="${d.base}/film.html" class="${d.slug==="films"?"is-on":""}">S-03 FILMS</a>
          <button type="button" data-c-themes>THEMES</button>
          <button type="button" data-c-secrets>SECRETS</button>
          <button type="button" data-c-original>ORIGINAL</button>
        </nav>
      `,o.prepend(p),p.querySelector("[data-c-themes]")?.addEventListener("click",()=>R()),p.querySelector("[data-c-secrets]")?.addEventListener("click",()=>ue()),p.querySelector("[data-c-original]")?.addEventListener("click",()=>O("original"))}},l=d=>{n(),d==="terminal"?a():d==="frutiger"?y():d==="silly"?u():d==="paper"?S():d==="cobalt"&&$(),He(),requestAnimationFrame(He),setTimeout(He,60)},P=d=>d==="original"?`
        <div class="tpv tpv-original" aria-hidden="true">
          <div class="tpv-orig-glow"></div>
          <div class="tpv-orig-tunnel">
            <span class="tpv-orig-frame f1"></span>
            <span class="tpv-orig-frame f2"></span>
            <span class="tpv-orig-frame f3"></span>
            <span class="tpv-orig-frame f4"></span>
            <span class="tpv-orig-frame f5"></span>
          </div>
          <div class="tpv-orig-mark">averybeuth.xyz</div>
          <div class="tpv-orig-nav"><span>code</span><span>music</span><span>films</span></div>
        </div>
      `:d==="terminal"?`
        <div class="tpv tpv-terminal" aria-hidden="true">
          <div class="tpv-wt-bar">
            <span class="tpv-wt-tab"><i>&gt;_</i> PowerShell</span>
            <span class="tpv-wt-dots"><i></i><i></i></span>
          </div>
          <div class="tpv-wt-body">
            <div><span class="w-w">PS C:&gt;</span> <span class="w-y">dir</span></div>
            <div><span class="w-g">photos  code  music</span></div>
            <div><span class="w-c">totone</span> <span class="w-d">third-impact</span></div>
            <div><span class="w-w">PS C:&gt;</span> <span class="tpv-wt-caret"></span></div>
          </div>
        </div>
      `:d==="frutiger"?`
        <div class="tpv tpv-desktop" aria-hidden="true">
          <span class="tpv-aero-orb o1"></span>
          <span class="tpv-aero-orb o2"></span>
          <div class="tpv-aero-icons"><i></i><i></i><i></i></div>
          <div class="tpv-aero-win">
            <div class="tpv-aero-title"><span>Explorer</span><i></i></div>
            <div class="tpv-aero-panes">
              <div class="tpv-aero-tree"><i></i><i></i><i></i></div>
              <div class="tpv-aero-list"><i class="on"></i><i></i><i></i></div>
              <div class="tpv-aero-prev"><span class="pic"></span><i></i></div>
            </div>
          </div>
          <div class="tpv-aero-task"><span class="start"></span><span class="pill"></span></div>
        </div>
      `:d==="silly"?`
        <div class="tpv tpv-silly" aria-hidden="true">
          <div class="tpv-silly-card">
            <div class="tpv-silly-head"><span class="face"></span><b>avery</b></div>
            <div class="tpv-silly-boxes"><span class="y"></span><span></span></div>
            <div class="tpv-silly-btns"><span>font+</span><span class="r">do not</span></div>
          </div>
        </div>
      `:d==="paper"?`
        <div class="tpv tpv-paper" aria-hidden="true">
          <div class="tpv-paper-mast">THE AVERY CHRONICLE</div>
          <div class="tpv-paper-cols">
            <div class="tpv-paper-copy">
              <span class="hl"></span>
              <span></span><span></span><span class="s"></span>
            </div>
            <div class="tpv-paper-plate"></div>
          </div>
        </div>
      `:`
      <div class="tpv tpv-cobalt" aria-hidden="true">
        <div class="tpv-cob-head"><span>DWG AB-06</span><span>1:1</span></div>
        <div class="tpv-cob-grid">
          <div class="tpv-cob-box"><i></i><span class="l"></span><span class="l s"></span></div>
          <div class="tpv-cob-box"><i></i><span class="l"></span><span class="l s"></span></div>
        </div>
      </div>
    `,L=()=>{if(!e)return;const d=ye.find(p=>p.id===t)||ye[0],o=e.querySelector("#themesActivePill");o&&(o.textContent=d.name.toLowerCase()),e.querySelectorAll(".theme-card").forEach(p=>{p.classList.toggle("is-active",p.dataset.themeId===t)})},T=()=>{!e||e.hidden||(e.classList.remove("is-open"),setTimeout(()=>{e&&(e.hidden=!0)},190))},O=d=>{const o=t,p=ke();if(t=Fe(d),t==="original"){if(ge()&&o!=="original"){window.location.href="./";return}l("original"),L(),T();return}if(!(ge()&&!Ae())){window.location.href=`${p.base}/`;return}l(t),L(),T()},R=(d=null)=>{if(e||(e=document.createElement("aside"),e.className="themes-popover",e.setAttribute("role","dialog"),e.setAttribute("aria-label","Site themes"),e.hidden=!0,e.innerHTML=`
        <header class="themes-head">
          <div class="themes-head-left">
            <span class="themes-head-title">themes</span>
            <span class="themes-head-pill" id="themesActivePill">original</span>
          </div>
          <div class="themes-head-right">
            <span class="themes-kbd-hint"><span class="themes-kbd">1-6</span>switch <span class="themes-kbd">esc</span>close</span>
            <button type="button" class="themes-close-btn" data-close-themes aria-label="Close themes">&times;</button>
          </div>
        </header>
        <div class="themes-gallery">
          ${ye.map(p=>`
            <button type="button" class="theme-card" data-theme-id="${p.id}">
              <div class="theme-card-preview">${P(p.id)}</div>
              <div class="theme-card-meta">
                <div class="theme-card-top">
                  <span class="theme-card-num">${p.num}</span>
                  <strong class="theme-card-name">${p.name}</strong>
                  <span class="theme-card-badge">active</span>
                </div>
                <span class="theme-card-desc">${p.desc}</span>
              </div>
            </button>
          `).join("")}
        </div>
      `,e.addEventListener("click",p=>{if(p.target.closest("[data-close-themes]")){T();return}const b=p.target.closest(".theme-card");b&&O(b.dataset.themeId)}),document.addEventListener("pointerdown",p=>{!e||e.hidden||p.target.closest(".themes-popover, .themes-trigger, .themes-mobile-trigger, [data-wt-themes], [data-wt-themes-inline], [data-a-themes], [data-w-themes], [data-s-themes], [data-p-themes], [data-c-themes], [data-tp-themes]")||T()}),window.addEventListener("keydown",p=>{if(!e||e.hidden)return;if(p.key==="Escape"){p.preventDefault(),T();return}const b=Number(p.key);b>=1&&b<=ye.length&&!p.target.closest("input, textarea")&&(p.preventDefault(),O(ye[b-1].id))}),document.body.appendChild(e)),!(d!==null?d:e.hidden)){T();return}L(),e.hidden=!1,requestAnimationFrame(()=>e.classList.add("is-open"))};l(t);const me=document.querySelector(".rail-meta"),fe=document.querySelector(".rail-top-row");if(me&&!me.querySelector(".themes-trigger")){const d=document.createElement("button");if(d.type="button",d.className="themes-trigger",d.textContent="themes",d.addEventListener("click",()=>R()),me.insertBefore(d,me.firstChild),fe&&!fe.querySelector(".themes-mobile-trigger")){const o=document.createElement("button");o.type="button",o.className="themes-mobile-trigger",o.setAttribute("aria-label","Open site themes"),o.textContent="themes",o.addEventListener("click",()=>R()),fe.appendChild(o)}}}export{Ke as S,Qe as a,je as c,Je as i,Ze as s};
