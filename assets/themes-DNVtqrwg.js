class ve{constructor(){this.on=!1,this.sfxOn=!0,this.ctx=null}ensureCtx(){if(this.ctx)return this.ctx;const e=this.ctx=new(window.AudioContext||window.webkitAudioContext),t=e.createDynamicsCompressor();this.analyser=e.createAnalyser(),this.analyser.fftSize=128,this.analyser.smoothingTimeConstant=.86,this._fftData=new Uint8Array(this.analyser.frequencyBinCount),t.connect(this.analyser).connect(e.destination),this.master=e.createGain(),this.master.gain.value=0,this.master.connect(t),this.sfxMaster=e.createGain(),this.sfxMaster.gain.value=.85,this.sfxMaster.connect(t);const l=e.sampleRate*4,m=e.createBuffer(1,l,e.sampleRate),b=m.getChannelData(0);let y=0,h=0,x=0;for(let A=0;A<l;A++){const r=Math.random()*2-1;y=.997*y+r*.029,h=.985*h+r*.032,x=.95*x+r*.048,b[A]=(y+h+x)*.35}return this.noiseBuf=m,e}unlockSfx(){if(!this.sfxOn)return;const e=this.ensureCtx();e.state==="suspended"&&e.resume().catch(()=>{})}init(){const e=this.ensureCtx();if(this._musicInit)return;this._musicInit=!0,this.filter=e.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=680,this.filter.Q.value=.4,this.filter.connect(this.master),[[110,.055],[164.81,.036],[220.4,.024],[246.94,.016],[277.18,.009],[329.63,.008]].forEach(([b,y],h)=>{const x=e.createOscillator();x.type=h===1||h===2?"triangle":"sine",x.frequency.value=b,x.detune.value=(h-2.5)*3.5;const A=e.createGain();A.gain.value=y;const r=e.createOscillator();r.frequency.value=.027+h*.014;const T=e.createGain();T.gain.value=y*.55,r.connect(T).connect(A.gain),x.connect(A).connect(this.filter),x.start(),r.start()});const t=e.createBufferSource();t.buffer=this.noiseBuf,t.loop=!0;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=380,l.Q.value=.6;const m=e.createGain();m.gain.value=.05,t.connect(l).connect(m).connect(this.master),t.start()}toggle(){this.init(),this.on=!this.on;const e=this.ctx.currentTime;return this.on&&this.ctx.resume(),this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(this.master.gain.value,e),this.master.gain.linearRampToValueAtTime(this.on?.85:0,e+(this.on?1.4:.8)),this.on}setBrightness(e){!this.ctx||!this.on||!this.filter||this.filter.frequency.setTargetAtTime(420+e*1600,this.ctx.currentTime,.8)}getLevel(){if(!this.analyser||!this.on||this.ctx?.state!=="running")return 0;this.analyser.getByteFrequencyData(this._fftData);let e=0;const t=Math.min(18,this._fftData.length);for(let l=0;l<t;l++)e+=this._fftData[l];return Math.min(1,e/(t*110))}shutter(){if(!this.sfxOn||!this.ctx||this.ctx.state!=="running")return;const e=this.ctx,t=e.currentTime,l=(y,h,x)=>{const A=e.createBufferSource();A.buffer=this.noiseBuf;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=x,r.Q.value=1.4;const T=e.createGain();T.gain.setValueAtTime(0,y),T.gain.linearRampToValueAtTime(h,y+.002),T.gain.exponentialRampToValueAtTime(1e-4,y+.05),A.connect(r).connect(T).connect(this.sfxMaster),A.start(y,Math.random()*3,.06)};l(t,.95,3200),l(t+.055,.62,2400);const m=e.createOscillator();m.frequency.value=95;const b=e.createGain();b.gain.setValueAtTime(0,t),b.gain.linearRampToValueAtTime(.14,t+.004),b.gain.exponentialRampToValueAtTime(1e-4,t+.08),m.connect(b).connect(this.sfxMaster),m.start(t),m.stop(t+.1)}tick(e=.5){if(!this.sfxOn||!this.ctx||this.ctx.state!=="running")return;const t=performance.now();if(this._lastTick&&t-this._lastTick<65)return;this._lastTick=t;const l=this.ctx,m=l.currentTime,b=l.createBufferSource();b.buffer=this.noiseBuf;const y=l.createBiquadFilter();y.type="bandpass",y.frequency.value=1350+e*850,y.Q.value=2;const h=l.createGain();h.gain.setValueAtTime(0,m),h.gain.linearRampToValueAtTime(.42,m+.002),h.gain.exponentialRampToValueAtTime(1e-4,m+.028),b.connect(y).connect(h).connect(this.sfxMaster),b.start(m,Math.random()*3,.035);const x=l.createOscillator();x.type="sine",x.frequency.setValueAtTime(210+e*90,m),x.frequency.exponentialRampToValueAtTime(95,m+.028);const A=l.createGain();A.gain.setValueAtTime(0,m),A.gain.linearRampToValueAtTime(.12,m+.002),A.gain.exponentialRampToValueAtTime(1e-4,m+.032),x.connect(A).connect(this.sfxMaster),x.start(m),x.stop(m+.04)}whoosh(){if(!this.sfxOn||!this.ctx||this.ctx.state!=="running")return;const e=this.ctx,t=e.currentTime,l=e.createBufferSource();l.buffer=this.noiseBuf;const m=e.createBiquadFilter();m.type="lowpass",m.Q.value=.75,m.frequency.setValueAtTime(240,t),m.frequency.exponentialRampToValueAtTime(860,t+.32),m.frequency.exponentialRampToValueAtTime(220,t+.95);const b=e.createGain();b.gain.setValueAtTime(0,t),b.gain.linearRampToValueAtTime(.55,t+.22),b.gain.exponentialRampToValueAtTime(1e-4,t+1),l.connect(m).connect(b).connect(this.sfxMaster),l.start(t,Math.random()*2,1.05)}}const pe='a, button, [role="button"], input, textarea, select, summary, .project-thumb-wrap, .album-cover-wrap, .script-card, .music-vinyl-disc, .aero-win-titlebar, body.is-locked .finale.is-live',X={original:{ring:'<svg viewBox="0 0 64 64" width="64" height="64" shape-rendering="geometricPrecision"><circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" stroke-width="2" /></svg>',dot:'<svg viewBox="0 0 16 16" width="16" height="16" shape-rendering="geometricPrecision"><circle cx="8" cy="8" r="3" fill="currentColor" /></svg>',arrow:!1},terminal:{ring:'<svg viewBox="0 0 64 64" width="64" height="64" shape-rendering="crispEdges"><path d="M18 10H10V18M46 10H54V18M10 46V54H18M54 46V54H46" fill="none" stroke="currentColor" stroke-width="2.4" /></svg>',dot:'<svg viewBox="0 0 16 16" width="16" height="16" shape-rendering="crispEdges"><rect x="4" y="2" width="8" height="12" fill="currentColor" /></svg>',arrow:!1},frutiger:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5" /></svg>',dot:'<svg viewBox="0 0 24 24" width="24" height="24"><path d="M3 2L3 19.5L7.6 15.2L10.8 22L13.5 20.7L10.3 14L16.4 14L3 2Z" fill="#ffffff" stroke="#0c1c2c" stroke-width="1.6" stroke-linejoin="round"/></svg>',arrow:!0},silly:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="7 6" stroke-linecap="round" /></svg>',dot:'<svg viewBox="0 0 28 28" width="28" height="28"><path d="M14 2L17.4 9.6L25.6 10.4L19.4 15.9L21.2 24L14 19.8L6.8 24L8.6 15.9L2.4 10.4L10.6 9.6Z" fill="#ff4fa3" stroke="#181818" stroke-width="2" stroke-linejoin="round"/></svg>',arrow:!1},paper:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-width="1.2" /></svg>',dot:'<svg viewBox="0 0 18 18" width="18" height="18"><path d="M9 1L14 9L9 17L4 9Z" fill="currentColor" /></svg>',arrow:!1},cobalt:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="25" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 4" /><path d="M32 3V13M32 51V61M3 32H13M51 32H61" stroke="currentColor" stroke-width="1.6" /></svg>',dot:'<svg viewBox="0 0 18 18" width="18" height="18"><path d="M9 2V16M2 9H16" stroke="currentColor" stroke-width="1.6" /><circle cx="9" cy="9" r="2" fill="currentColor" /></svg>',arrow:!1}};function me({onMove:a,onLeave:e}={}){if(!window.matchMedia("(pointer: fine) and (hover: hover)").matches)return null;document.documentElement.classList.add("has-cursor");let l=document.getElementById("cursor");l||(l=document.createElement("div"),l.id="cursor",l.className="cursor",l.setAttribute("aria-hidden","true"),document.body.appendChild(l)),l.innerHTML='<span class="cursor__ring" aria-hidden="true"></span><span class="cursor__dot" aria-hidden="true"></span>';const m=l.querySelector(".cursor__ring"),b=l.querySelector(".cursor__dot");let y="",h=!1;const x=()=>{const k=document.documentElement.getAttribute("data-theme")||"original";if(k===y)return;y=k;const w=X[k]||X.original;h=!!w.arrow,m.innerHTML=w.ring,b.innerHTML=w.dot,l.classList.toggle("is-arrow",h),m.style.color="",b.style.color=""};x(),new MutationObserver(x).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});const r={x:-100,y:-100,rx:-100,ry:-100,dx:-100,dy:-100,hover:0,uiHover:!1,visible:!1,hasInit:!1,sillyRot:0};window.addEventListener("pointermove",k=>{k.pointerType&&k.pointerType!=="mouse"||(r.x=k.clientX,r.y=k.clientY,r.hasInit||(r.rx=r.dx=r.x,r.ry=r.dy=r.y,r.hasInit=!0),r.visible=!0,r.uiHover=!!k.target?.closest?.(pe),l.classList.add("is-on"),l.classList.toggle("is-clickable",r.uiHover),a?.(k,r))},{passive:!0}),window.addEventListener("pointerdown",k=>{if(k.pointerType&&k.pointerType!=="mouse")return;r.x=r.dx=k.clientX,r.y=r.dy=k.clientY;const w=document.createElement("span");w.className="cursor__pulse",w.style.left=`${k.clientX}px`,w.style.top=`${k.clientY}px`,w.innerHTML=(X[y]||X.original).ring,document.body.appendChild(w),requestAnimationFrame(()=>w.classList.add("is-active")),setTimeout(()=>w.remove(),380)},{passive:!0});const T=()=>{r.visible=!1,r.uiHover=!1,l.classList.remove("is-on","is-clickable"),e?.()};return document.documentElement.addEventListener("mouseleave",T),window.addEventListener("blur",T),{el:l,state:r,update(k,{photoHover:w=!1,velocity:_=0,tintColor:z=null}={}){if(!r.hasInit)return;const I=1-Math.exp(-k*16);r.rx+=(r.x-r.rx)*I,r.ry+=(r.y-r.ry)*I,r.dx=r.x,r.dy=r.y;const M=r.uiHover?1:w?.52:0;r.hover+=(M-r.hover)*(1-Math.exp(-k*16));const F=Math.min(1,Math.abs(_)/40),V=h?.42+r.hover*.25:.5+r.hover*.42+F*.12,s=h?r.uiHover?1.1:1:r.uiHover?1.28:w?.88:1;y==="silly"?(r.sillyRot=(r.sillyRot+k*(r.uiHover?160:55))%360,m.style.transform=`translate3d(${r.rx.toFixed(1)}px, ${r.ry.toFixed(1)}px, 0) rotate(${r.sillyRot.toFixed(1)}deg) scale(${V.toFixed(3)})`,b.style.transform=`translate3d(${r.dx.toFixed(1)}px, ${r.dy.toFixed(1)}px, 0) rotate(${(-r.sillyRot*.45).toFixed(1)}deg) scale(${s.toFixed(3)})`):(m.style.transform=`translate3d(${r.rx.toFixed(1)}px, ${r.ry.toFixed(1)}px, 0) scale(${V.toFixed(3)}, ${(V*(1-F*.08)).toFixed(3)})`,b.style.transform=`translate3d(${r.dx.toFixed(1)}px, ${r.dy.toFixed(1)}px, 0) scale(${s.toFixed(3)})`),y==="original"&&z&&!r.uiHover?(m.style.color=z(.36+r.hover*.35),b.style.color=""):m.style.color&&(m.style.color="")}}}function ye(){const a=me();if(!a)return;let e=performance.now();const t=l=>{const m=Math.min(.05,Math.max(.001,(l-e)/1e3));e=l,a.update(m),requestAnimationFrame(t)};requestAnimationFrame(t)}let re=!1;function te(a,e=2600){let t=document.getElementById("eggToast");t||(t=document.createElement("div"),t.id="eggToast",t.setAttribute("aria-hidden","true"),t.style.cssText=["position:fixed","left:50%","bottom:max(24px,env(safe-area-inset-bottom))","transform:translateX(-50%) translateY(8px)","z-index:9997","pointer-events:none",'font-family:"Dotmatri",ui-monospace,monospace',"font-size:13px","letter-spacing:0.1em","color:rgba(244,238,228,0.88)","background:rgba(11,12,15,0.82)","border:1px solid rgba(236,230,220,0.16)","padding:7px 14px","border-radius:999px","opacity:0","transition:opacity 0.35s ease,transform 0.35s ease","backdrop-filter:blur(8px)"].join(";"),document.body.appendChild(t)),t.textContent=a,requestAnimationFrame(()=>{t.style.opacity="1",t.style.transform="translateX(-50%) translateY(0)"}),clearTimeout(t._timer),t._timer=setTimeout(()=>{t.style.opacity="0",t.style.transform="translateX(-50%) translateY(8px)"},e)}function ue(){for(let e=0;e<42;e++){const t=document.createElement("span");t.setAttribute("aria-hidden","true");const l=10+Math.random()*80,m=3+Math.random()*5,b=1.6+Math.random()*1.4,y=Math.random()*.25,h=(Math.random()-.5)*140;t.style.cssText=["position:fixed",`left:${l}vw`,"top:-12px",`width:${m}px`,`height:${m}px`,"border-radius:50%","background:rgba(244,238,228,0.88)","box-shadow:0 0 8px rgba(244,238,228,0.45)","pointer-events:none","z-index:9998",`transition:transform ${b}s cubic-bezier(0.22,1,0.36,1) ${y}s,opacity ${b}s ease ${y}s`].join(";"),document.body.appendChild(t),requestAnimationFrame(()=>{t.style.transform=`translate(${h}px, ${window.innerHeight+30}px)`,t.style.opacity="0"}),setTimeout(()=>t.remove(),(b+y)*1e3+80)}}function he(){let a=document.getElementById("eggCat");a||(a=document.createElement("div"),a.id="eggCat",a.setAttribute("aria-hidden","true"),a.style.cssText=["position:fixed","right:max(20px,env(safe-area-inset-right))","bottom:0","z-index:9996","pointer-events:none",'font-family:"Dotmatri",ui-monospace,monospace',"font-size:18px","letter-spacing:0.06em","color:rgba(244,238,228,0.9)","text-shadow:0 2px 14px rgba(0,0,0,0.9)","padding:10px 14px 12px","transform:translateY(100%)","transition:transform 0.45s cubic-bezier(0.22,1,0.36,1)"].join(";"),document.body.appendChild(a)),a.textContent="=^._.^=",requestAnimationFrame(()=>{a.style.transform="translateY(0)"}),clearTimeout(a._blink),clearTimeout(a._hide),a._blink=setTimeout(()=>{a.textContent="=^.-.^=  hi"},1100),a._hide=setTimeout(()=>{a.style.transform="translateY(100%)"},3800)}function fe(){const a=document.documentElement.classList.toggle("is-crt");let e=document.getElementById("crtOverlay"),t=document.getElementById("crtStyle");a&&!t&&(t=document.createElement("style"),t.id="crtStyle",t.textContent=["html.is-crt body{filter:contrast(1.1) brightness(1.04) saturate(1.08);}","html.is-crt h1,html.is-crt h2,html.is-crt .rail-brand,html.is-crt .mark{text-shadow:1px 0 0 rgba(255,60,90,0.38),-1px 0 0 rgba(70,220,255,0.38),0 0 10px rgba(244,238,228,0.22);}"].join(""),document.head.appendChild(t)),a&&!e?(e=document.createElement("div"),e.id="crtOverlay",e.setAttribute("aria-hidden","true"),e.style.cssText=["position:fixed","inset:0","pointer-events:none","z-index:9994","background:repeating-linear-gradient(to bottom,rgba(255,255,255,0.03) 0px,rgba(255,255,255,0.03) 1px,rgba(0,0,0,0.44) 2px,rgba(0,0,0,0.44) 3px),repeating-linear-gradient(to right,rgba(255,40,40,0.03) 0px,rgba(40,255,80,0.03) 1px,rgba(40,120,255,0.03) 2px,transparent 3px)","box-shadow:inset 0 0 110px rgba(0,0,0,0.72),inset 0 0 28px rgba(180,220,255,0.06)"].join(";"),document.body.appendChild(e)):a||(e?.remove(),t?.remove()),te(a?"crt on":"crt off")}function be(){let a=document.getElementById("eggModal");if(!a){a=document.createElement("div"),a.id="eggModal",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-label","Easter egg binds"),a.style.cssText=["position:fixed","inset:0","z-index:9999","display:flex","align-items:center","justify-content:center","padding:24px","background:rgba(11,12,15,0.78)","backdrop-filter:blur(10px)","-webkit-backdrop-filter:blur(10px)","opacity:0","transition:opacity 0.25s ease"].join(";"),a.innerHTML=`
      <div style="width:min(440px,100%);background:#111318;border:1px solid rgba(236,230,220,0.16);border-radius:6px;padding:26px 26px 22px;color:rgba(236,230,220,0.92);box-shadow:0 24px 64px rgba(0,0,0,0.65);">
        <div style="display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:18px;">
          <h2 style="font-family:'Dotmatri',ui-monospace,monospace;font-weight:400;font-size:22px;letter-spacing:0.05em;">easter eggs</h2>
          <button type="button" data-close-eggs style="font-family:'Dotmatri',ui-monospace,monospace;font-size:13px;letter-spacing:0.08em;color:rgba(236,230,220,0.56);padding:4px 6px;">close</button>
        </div>
        <dl style="display:grid;grid-template-columns:auto minmax(0,1fr);gap:10px 18px;font-size:13px;line-height:1.5;">
          <dt style="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);">r</dt><dd style="color:rgba(236,230,220,0.64);">fly to a random photo (photos)</dd>
          <dt style="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);">← / →</dt><dd style="color:rgba(236,230,220,0.64);">step between photos (photos)</dd>
          <dt style="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);">/</dt><dd style="color:rgba(236,230,220,0.64);">focus project search (code)</dd>
          <dt style="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);">meow</dt><dd style="color:rgba(236,230,220,0.64);">dot-matrix cat peek</dd>
          <dt style="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);">stars</dt><dd style="color:rgba(236,230,220,0.64);">toggle cursor sparkles</dd>
          <dt style="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);">crt</dt><dd style="color:rgba(236,230,220,0.64);">toggle crt scanlines</dd>
          <dt style="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.94);">↑↑↓↓←→←→ba</dt><dd style="color:rgba(236,230,220,0.64);">dot confetti burst</dd>
        </dl>
      </div>
    `;const e=()=>{a.style.opacity="0",setTimeout(()=>{a.hidden=!0},240)};a.addEventListener("click",t=>{(t.target===a||t.target.closest("[data-close-eggs]"))&&e()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&!a.hidden&&(t.preventDefault(),e())}),document.body.appendChild(a)}a.hidden=!1,requestAnimationFrame(()=>{a.style.opacity="1"})}function ge(){const a=document.querySelector(".rail-meta");if(!a||a.querySelector(".egg-trigger"))return;const e=document.createElement("button");e.type="button",e.className="egg-trigger",e.textContent="secrets",e.addEventListener("click",be),a.appendChild(e)}function xe(){if(re)return;re=!0,console.log("%caverybeuth.xyz","font-family:monospace;font-size:14px;color:#f4eee4;"),ge();let a="";const e=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let t=0,l=!1,m=0,b=null;const y=(h,x,A=!1)=>{const r=document.createElement("span");r.setAttribute("aria-hidden","true");const T=A?["✦","✧","·"]:["✦","✧","⋆","+"],k=["rgba(255,250,235,0.95)","rgba(255,232,178,0.92)","rgba(222,238,255,0.9)"];r.textContent=T[Math.floor(Math.random()*T.length)];const w=(Math.random()-.5)*(A?18:44),_=(A?-16:10)+(Math.random()-.5)*28,z=(Math.random()-.5)*140,I=A?10+Math.random()*8:11+Math.random()*10,M=A?1.5:.95,F=k[Math.floor(Math.random()*k.length)];r.style.cssText=["position:fixed",`left:${h}px`,`top:${x}px`,"transform:translate(-50%,-50%) scale(0.5) rotate(0deg)",'font-family:"Dotmatri",ui-monospace,monospace',`font-size:${I.toFixed(1)}px`,`color:${F}`,`text-shadow:0 0 10px ${F},0 0 20px rgba(255,244,210,0.45)`,"pointer-events:none","z-index:9995",`transition:transform ${M}s cubic-bezier(0.22,1,0.36,1),opacity ${M}s ease-out`].join(";"),document.body.appendChild(r),requestAnimationFrame(()=>{r.style.transform=`translate(calc(-50% + ${w}px), calc(-50% + ${_}px)) scale(1.15) rotate(${z}deg)`,r.style.opacity="0"}),setTimeout(()=>r.remove(),M*1e3+60)};window.addEventListener("pointermove",h=>{if(!l)return;const x=performance.now();x-m<22||(m=x,y(h.clientX,h.clientY,!1))}),window.addEventListener("keydown",h=>{if(h.target.closest("input, textarea, select"))return;const x=h.key.length===1?h.key.toLowerCase():h.key;x===e[t]?(t++,t===e.length&&(t=0,ue(),te("nice"))):t=x===e[0]?1:0,!(h.key.length!==1||h.ctrlKey||h.metaKey||h.altKey)&&(a=(a+h.key.toLowerCase()).slice(-12),a.endsWith("meow")||a.endsWith("cats")?(a="",he()):a.endsWith("stars")?(a="",l=!l,clearInterval(b),l&&(b=setInterval(()=>{y(Math.random()*window.innerWidth,Math.random()*window.innerHeight,!0)},160)),te(l?"stars on":"stars off")):a.endsWith("crt")&&(a="",fe()))})}const B=[{id:"original",num:"01",name:"Original",label:"ORIGINAL",desc:"Obsidian dark, warm cream, dot-matrix",themeColor:"#0b0c0f",previewClass:"is-original"},{id:"terminal",num:"02",name:"Terminal",label:"TERMINAL",desc:"Pure-text zsh TUI, Matrix rain & live CLI",themeColor:"#101411",previewClass:"is-terminal"},{id:"frutiger",num:"03",name:"Frutiger 7",label:"FRUTIGER 7",desc:"Windows 7 desktop, File Explorer & previews",themeColor:"#071b2e",previewClass:"is-frutiger"},{id:"silly",num:"04",name:"Silly",label:"SILLY",desc:"Comic Sans, stickers, rainbow & chaos",themeColor:"#fff7cc",previewClass:"is-silly"},{id:"paper",num:"05",name:"Paper",label:"PAPER",desc:"Broadsheet newspaper & archival print",themeColor:"#f2ede2",previewClass:"is-paper"},{id:"cobalt",num:"06",name:"Cobalt",label:"COBALT",desc:"Architectural cyanotype CAD blueprint",themeColor:"#061429",previewClass:"is-cobalt"}],v={folder:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="fg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffe78a"/><stop offset="55%" stop-color="#f7c844"/><stop offset="100%" stop-color="#d89614"/></linearGradient><linearGradient id="fg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff4bf"/><stop offset="48%" stop-color="#ffd24d"/><stop offset="100%" stop-color="#e3a11a"/></linearGradient></defs><path d="M3 8.5C3 7.1 4.1 6 5.5 6H12l2.4 2.5H26.5C27.9 8.5 29 9.6 29 11v13.5c0 1.4-1.1 2.5-2.5 2.5h-21C4.1 27 3 25.9 3 24.5V8.5z" fill="url(#fg1)" stroke="#9a6408" stroke-width="1.2"/><path d="M3 12.2h26v12.3c0 1.4-1.1 2.5-2.5 2.5h-21C4.1 27 3 25.9 3 24.5V12.2z" fill="url(#fg2)" stroke="#a66c0a" stroke-width="1.1"/><path d="M4.5 13.5h23" stroke="rgba(255,255,255,0.75)" stroke-width="1.3"/></svg>',home:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="hg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9fe0ff"/><stop offset="52%" stop-color="#2c8ee0"/><stop offset="100%" stop-color="#114b8c"/></linearGradient></defs><circle cx="16" cy="16" r="13" fill="url(#hg1)" stroke="#0d3766" stroke-width="1.2"/><ellipse cx="16" cy="10" rx="9" ry="5" fill="rgba(255,255,255,0.34)"/><path d="M9.5 16.5L16 10.8l6.5 5.7v6.2h-4.3v-4.2h-4.4v4.2H9.5z" fill="#ffffff" stroke="#0d3766" stroke-width="0.9" stroke-linejoin="round"/></svg>',photos:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="pg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e4eef7"/><stop offset="100%" stop-color="#88a4bd"/></linearGradient><radialGradient id="pg2" cx="40%" cy="35%" r="60%"><stop offset="0%" stop-color="#82e0ff"/><stop offset="55%" stop-color="#1d6ab8"/><stop offset="100%" stop-color="#09223f"/></radialGradient></defs><rect x="3" y="8" width="26" height="18" rx="3.5" fill="url(#pg1)" stroke="#3b5369" stroke-width="1.2"/><path d="M11 8l1.8-3h6.4L21 8" fill="#c4d6e6" stroke="#3b5369" stroke-width="1.1"/><circle cx="16" cy="17" r="6.2" fill="url(#pg2)" stroke="#ffffff" stroke-width="1.4"/><circle cx="14" cy="15" r="1.8" fill="rgba(255,255,255,0.65)"/></svg>',code:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#d2e4f5"/></linearGradient></defs><rect x="4" y="5" width="24" height="22" rx="3" fill="url(#cg1)" stroke="#3e688f" stroke-width="1.2"/><rect x="4" y="5" width="24" height="6" rx="2.5" fill="#3a96e3"/><path d="M12.2 15.5l-3.6 3.5 3.6 3.5M19.8 15.5l3.6 3.5-3.6 3.5M17.2 14.5l-2.4 9" fill="none" stroke="#165699" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',scripts:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="sg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#dce8f4"/></linearGradient></defs><path d="M7 4h12l6 6v18H7z" fill="url(#sg1)" stroke="#4c6f91" stroke-width="1.2" stroke-linejoin="round"/><path d="M19 4v6h6" fill="#bfd6ec" stroke="#4c6f91" stroke-width="1.1"/><path d="M10.5 14h11M10.5 18h11M10.5 22h7.5" stroke="#3c6791" stroke-width="1.5" stroke-linecap="round"/></svg>',music:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><radialGradient id="mg1" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#b8f5ff"/><stop offset="45%" stop-color="#2fa2e8"/><stop offset="100%" stop-color="#114882"/></radialGradient></defs><circle cx="16" cy="16" r="12.5" fill="url(#mg1)" stroke="#0e3866" stroke-width="1.2"/><circle cx="16" cy="16" r="3.4" fill="#eaf6ff" stroke="#114882" stroke-width="1.1"/><path d="M15 21.5V10.5l7.5-1.6v9.2" fill="none" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="21.5" r="2.2" fill="#ffffff"/><circle cx="20.5" cy="18.2" r="2.2" fill="#ffffff"/></svg>',film:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="fmg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#53687e"/><stop offset="100%" stop-color="#1b2836"/></linearGradient></defs><rect x="4" y="6" width="24" height="20" rx="2.5" fill="url(#fmg1)" stroke="#0f1821" stroke-width="1.2"/><rect x="8.5" y="9" width="15" height="14" rx="1.2" fill="#77d0fa"/><path d="M14 13l5.5 3-5.5 3z" fill="#ffffff"/><path d="M5.5 9h1.6M5.5 13h1.6M5.5 17h1.6M5.5 21h1.6M24.9 9h1.6M24.9 13h1.6M24.9 17h1.6M24.9 21h1.6" stroke="#d8e6f2" stroke-width="1.4"/></svg>',notes:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><rect x="6" y="4" width="20" height="24" rx="2" fill="#fffdf2" stroke="#537496" stroke-width="1.2"/><rect x="6" y="4" width="20" height="5" rx="1.5" fill="#4aa7eb"/><path d="M9.5 13.5h13M9.5 17.5h13M9.5 21.5h9" stroke="#6d8ba8" stroke-width="1.4" stroke-linecap="round"/></svg>',themes:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="tg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7ce4ff"/><stop offset="50%" stop-color="#6ee787"/><stop offset="100%" stop-color="#ff85c0"/></linearGradient></defs><circle cx="16" cy="16" r="12.5" fill="url(#tg1)" stroke="#1d4466" stroke-width="1.2"/><ellipse cx="14" cy="10.5" rx="7" ry="4" fill="rgba(255,255,255,0.45)"/><circle cx="12" cy="15" r="2.2" fill="#ffffff"/><circle cx="18.5" cy="14" r="2.2" fill="#ffd32a"/><circle cx="16.5" cy="20.5" r="2.2" fill="#1d6ed6"/></svg>',power:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><radialGradient id="pw1" cx="35%" cy="30%" r="65%"><stop offset="0%" stop-color="#ffa899"/><stop offset="55%" stop-color="#e0432f"/><stop offset="100%" stop-color="#87180c"/></radialGradient></defs><circle cx="16" cy="16" r="12.5" fill="url(#pw1)" stroke="#611209" stroke-width="1.2"/><path d="M16 9.5v6.5M11.6 12.2a6.4 6.4 0 1 0 8.8 0" fill="none" stroke="#ffffff" stroke-width="2.1" stroke-linecap="round"/></svg>',winOrb:'<svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true"><path d="M7.5 10.5c2.8-1.4 5.2-1.4 7.5 0v5.5c-2.3-1.2-4.7-1.2-7.5 0z" fill="#ff5a36"/><path d="M17 10.5c2.3 1.2 4.7 1.2 7.5 0v5.5c-2.8 1.4-5.2 1.4-7.5 0z" fill="#7dd128"/><path d="M7.5 17.5c2.8-1.4 5.2-1.4 7.5 0V23c-2.3-1.2-4.7-1.2-7.5 0z" fill="#2ba8f7"/><path d="M17 17.5c2.3 1.2 4.7 1.2 7.5 0V23c-2.8 1.4-5.2 1.4-7.5 0z" fill="#ffca28"/></svg>',starSmall:'<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M8 1.2l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 12l-4.2 2.2.8-4.7-3.4-3.3 4.7-.7z" fill="#f7c844" stroke="#b87e0e" stroke-width="1"/></svg>',backArrow:'<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M10.5 3.5L5.5 8l5 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',fwdArrow:'<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M5.5 3.5L10.5 8l-5 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',sillyStar:'<svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M10 1.5l2.6 5.4 6 .8-4.4 4.2 1 6L10 15l-5.2 2.9 1-6-4.4-4.2 6-.8z" fill="#ffd32a" stroke="#1e1a24" stroke-width="1.6" stroke-linejoin="round"/></svg>'},Q="avery_theme";let ie=!1;const S=a=>String(a||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function se(){if(!!!(document.getElementById("stage")&&document.getElementById("gl")))return!1;const e=new URLSearchParams(window.location.search);return e.has("zoom")||e.has("overview")||e.has("p")}function j(){return!!(document.getElementById("stage")&&document.getElementById("gl"))}function K(){const a=window.location.pathname.toLowerCase(),e=a.includes("/scripts/"),t=e?"..":".";return j()?{base:".",inScripts:!1,slug:"home",title:"Home",cmd:"neofetch"}:a.includes("code")?{base:t,inScripts:e,slug:"code",title:"Code",cmd:"ls -la ~/code --no-images"}:a.includes("music")?{base:t,inScripts:e,slug:"music",title:"Music",cmd:"mpc playlist --verbose ~/music"}:a.includes("film")?{base:t,inScripts:e,slug:"films",title:"Films",cmd:"ls -lh ~/films/"}:e&&a.includes("view")?{base:t,inScripts:e,slug:"scripts/view",title:"Screenplay",cmd:"less -N ~/scripts/screenplay.fountain"}:e?{base:t,inScripts:e,slug:"scripts",title:"Scripts",cmd:"ls -lh ~/scripts/*.fountain"}:a.includes("privacy")?{base:t,inScripts:e,slug:"privacy",title:"Privacy",cmd:"cat ~/privacy.txt"}:{base:t,inScripts:e,slug:"home",title:"Portfolio",cmd:"ls -la ~/"}}function oe(a){if(se())return document.documentElement.removeAttribute("data-theme"),document.documentElement.classList.remove("is-themed-home","has-aero-explorer"),"original";const e=B.find(m=>m.id===a)||B[0],t=e.id;t==="original"?(document.documentElement.removeAttribute("data-theme"),document.documentElement.classList.remove("is-themed-home","has-aero-explorer"),sessionStorage.removeItem(Q)):(document.documentElement.setAttribute("data-theme",t),j()&&document.documentElement.classList.add("is-themed-home"),sessionStorage.setItem(Q,t));const l=document.querySelector('meta[name="theme-color"]');return l&&e.themeColor&&l.setAttribute("content",e.themeColor),t}if(!se()){const a=sessionStorage.getItem(Q)||"original";a!=="original"&&oe(a)}function Z(a,e){if(!a||!e)return()=>{};let t=0,l=0,m=!1,b=0,y=0,h=0,x=0;const A=w=>{window.innerWidth<=860||w.target.closest("button, a, input")||(m=!0,b=w.clientX,y=w.clientY,h=t,x=l,a.classList.add("is-dragging"),e.setPointerCapture?.(w.pointerId),w.preventDefault())},r=w=>{m&&(t=h+(w.clientX-b),l=x+(w.clientY-y),a.style.transform=`translate3d(${t.toFixed(0)}px, ${l.toFixed(0)}px, 0)`)},T=()=>{m&&(m=!1,a.classList.remove("is-dragging"))},k=w=>{w.target.closest("button, a, input")||(t=0,l=0,a.style.transform="")};return e.addEventListener("pointerdown",A),window.addEventListener("pointermove",r),window.addEventListener("pointerup",T),e.addEventListener("dblclick",k),()=>{e.removeEventListener("pointerdown",A),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",T),e.removeEventListener("dblclick",k),a.style.transform="",a.classList.remove("is-dragging","is-minimized")}}function we(){if(ie||se())return;ie=!0;let a=sessionStorage.getItem(Q)||"original",e=null,t=[];const l=()=>{for(document.documentElement.classList.remove("has-aero-explorer");t.length;){const s=t.pop();try{s()}catch{}}document.querySelectorAll("[data-theme-injected]").forEach(s=>s.remove())},m=()=>{const s=document.createElement("canvas");s.className="term-matrix-bg",s.setAttribute("data-theme-injected","1"),s.setAttribute("aria-hidden","true"),document.body.prepend(s);const n=s.getContext("2d");let o=0,p=!1,E=[];const c="01アイウエオカキクケコABXY#$%&*+=-:/",C=()=>{s.width=window.innerWidth,s.height=window.innerHeight;const i=Math.max(12,Math.floor(s.width/22));E=Array.from({length:i},()=>Math.random()*-40)};C(),window.addEventListener("resize",C);let d=0;const f=i=>{if(o=requestAnimationFrame(f),!(i-d<(p?42:90))){d=i,n.fillStyle=p?"rgba(12, 16, 13, 0.14)":"rgba(12, 16, 13, 0.26)",n.fillRect(0,0,s.width,s.height),n.fillStyle=p?"rgba(110, 231, 135, 0.52)":"rgba(110, 231, 135, 0.16)",n.font='13px "Courier Prime", monospace';for(let g=0;g<E.length;g++)n.fillText(c[Math.floor(Math.random()*c.length)],g*22,E[g]*20),E[g]*20>s.height&&Math.random()>.968&&(E[g]=0),E[g]+=p?1.15:.6}};return o=requestAnimationFrame(f),t.push(()=>{cancelAnimationFrame(o),window.removeEventListener("resize",C)}),{toggle(){return p=!p,s.classList.toggle("is-boosted",p),p}}},b=(s,n,o,p,E)=>{const c=C=>{const d=document.createElement("div");d.className="term-cli-out",d.innerHTML=C,o.appendChild(d),o.scrollTop=o.scrollHeight};s?.addEventListener("submit",C=>{C.preventDefault();const d=(n.value||"").trim();if(n.value="",!d)return;const f=d.toLowerCase();if(c(`<span class="term-prompt">$</span> ${S(d)}`),f==="help")c('commands: <span class="term-hi">neofetch</span>, <span class="term-hi">ls</span>, <span class="term-hi">matrix</span>, <span class="term-hi">cd photos</span>, <span class="term-hi">cd code</span>, <span class="term-hi">cd scripts</span>, <span class="term-hi">cd music</span>, <span class="term-hi">cd films</span>, <span class="term-hi">themes</span>, <span class="term-hi">original</span>, <span class="term-hi">clear</span>');else if(f==="ls")c(`drwxr-xr-x  <a href="${p.base}/?zoom=1">photos/</a>  <a href="${p.base}/code.html">code/</a>  <a href="${p.base}/scripts/index.html">scripts/</a>  <a href="${p.base}/music.html">music/</a>  <a href="${p.base}/film.html">films/</a>`);else if(f==="neofetch")c(`<pre class="term-mini-neo"> █████╗ ██████╗    visitor@averybeuth.xyz
██╔══██╗██╔══██╗   ----------------------
███████║██████╔╝   owner   Avery Beuth
██╔══██║██╔══██╗   path    ~/${p.slug}
██║  ██║██████╔╝   shell   zsh 5.9 (web)
╚═╝  ╚═╝╚═════╝    theme   terminal [pure-text]</pre>`);else if(f==="matrix"){const i=E.toggle();c(i?"[OK] matrix rain: overdrive":"[OK] matrix rain: ambient")}else f==="clear"?o.innerHTML="":f==="themes"?M(!0):f==="original"||f==="exit"?I("original"):f==="cd code"||f==="code"?window.location.href=`${p.base}/code.html`:f==="cd music"||f==="music"?window.location.href=`${p.base}/music.html`:f==="cd films"||f==="cd film"||f==="films"?window.location.href=`${p.base}/film.html`:f==="cd scripts"||f==="scripts"?window.location.href=`${p.base}/scripts/index.html`:f==="cd photos"||f==="photos"?window.location.href=`${p.base}/?zoom=1`:c(`zsh: command not found: ${S(d)} — type <span class="term-hi">help</span>`)})},y=()=>{const s=K(),n=Date.now(),o=m(),p=document.createElement("div");p.className="term-winbar",p.setAttribute("data-theme-injected","1"),p.innerHTML=`
      <div class="term-dots">
        <button type="button" class="term-dot is-red" data-t-original title="Back to Original"></button>
        <span class="term-dot is-yellow"></span>
        <span class="term-dot is-green"></span>
      </div>
      <div class="term-winbar-title">visitor@averybeuth.xyz: ~/${s.slug} &mdash; zsh</div>
      <div class="term-winbar-right">
        <span class="term-uptime" id="termUptime">up 00:00</span>
        <button type="button" data-t-matrix>[matrix]</button>
        <button type="button" data-t-themes>[themes]</button>
        <button type="button" data-t-original>[original]</button>
      </div>
    `,document.body.prepend(p);const E=setInterval(()=>{const c=document.getElementById("termUptime");if(!c)return;const C=Math.floor((Date.now()-n)/1e3);c.textContent=`up ${String(Math.floor(C/60)).padStart(2,"0")}:${String(C%60).padStart(2,"0")}`},1e3);if(t.push(()=>clearInterval(E)),j()){const c=document.createElement("main");c.className="theme-home theme-home-terminal",c.setAttribute("data-theme-injected","1"),c.innerHTML=`
        <div class="term-home-body">
          <div class="term-boot-line"><span class="term-prompt">visitor@averybeuth.xyz:~$</span> <span id="termTyped"></span><span class="term-caret"></span></div>
          <div class="term-neofetch">
            <pre class="term-ascii" aria-hidden="true"> █████╗ ██████╗ 
██╔══██╗██╔══██╗
███████║██████╔╝
██╔══██║██╔══██╗
██║  ██║██████╔╝
╚═╝  ╚═╝╚═════╝ </pre>
            <div class="term-neo-info">
              <div class="term-neo-head">visitor@averybeuth.xyz</div>
              <div class="term-neo-sep">----------------------</div>
              <div><span class="term-k">owner</span>   <span>Avery Beuth</span></div>
              <div><span class="term-k">about</span>   <span>Photographs, films, screenplays, music, and software.</span></div>
              <div><span class="term-k">folders</span> <a href="./?zoom=1">photos/</a> <a href="./code.html">code/</a> <a href="./scripts/index.html">scripts/</a> <a href="./music.html">music/</a> <a href="./film.html">films/</a></div>
              <div><span class="term-k">links</span>   <a href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">instagram</a> <a href="https://github.com/averywsc" target="_blank" rel="noopener">github</a></div>
              <div><span class="term-k">theme</span>   <span>terminal</span> <button type="button" class="term-inline-btn" data-t-themes>(change)</button> <button type="button" class="term-inline-btn" data-t-original>(original)</button></div>
              <div class="term-swatches" aria-hidden="true">
                <span style="background:#e06c75"></span><span style="background:#e5c07b"></span><span style="background:#98c379"></span><span style="background:#56b6c2"></span><span style="background:#61afef"></span><span style="background:#c678dd"></span>
              </div>
            </div>
          </div>
          <p class="term-home-bio"><span class="term-k">bio:</span> photographer, filmmaker, composer &amp; developer from nz. click any folder or type <span class="term-hi">help</span> below. <a href="./?zoom=1">photos/</a> opens the 3d gallery.</p>
          <div class="term-cli-log" id="termCliLog"></div>
          <form class="term-cli-form" id="termCliForm" autocomplete="off">
            <label class="term-prompt" for="termCliInput">visitor@averybeuth.xyz:~$</label>
            <input id="termCliInput" class="term-cli-input" type="text" spellcheck="false" placeholder="help" />
          </form>
        </div>
      `,document.body.appendChild(c);const C=c.querySelector("#termTyped");let d=0;const f=setInterval(()=>{d++,C&&(C.textContent="neofetch".slice(0,d)),d>=8&&clearInterval(f)},45);t.push(()=>clearInterval(f)),b(c.querySelector("#termCliForm"),c.querySelector("#termCliInput"),c.querySelector("#termCliLog"),s,o)}else{const c=document.querySelector(".page-wrap");if(c){const d=document.createElement("section");d.className="term-console",d.setAttribute("data-theme-injected","1"),d.innerHTML=`
          <div class="term-boot-line">
            <span class="term-prompt">visitor@averybeuth.xyz:~/${s.slug}$</span>
            <span class="term-typed" id="termTyped"></span><span class="term-caret"></span>
          </div>
          <div class="term-boot-status" id="termBootStatus"></div>
          <div class="term-cli-log" id="termCliLog"></div>
          <form class="term-cli-form" id="termCliForm" autocomplete="off">
            <label class="term-prompt" for="termCliInput">visitor@averybeuth.xyz:~/${s.slug}$</label>
            <input id="termCliInput" class="term-cli-input" type="text" spellcheck="false" placeholder="help | ls | neofetch | matrix | cd music" />
          </form>
        `,c.prepend(d);const f=d.querySelector("#termTyped"),i=d.querySelector("#termBootStatus");let g=0;const $=setInterval(()=>{if(g++,f&&(f.textContent=s.cmd.slice(0,g)),g>=s.cmd.length){clearInterval($);const L=document.querySelectorAll(".project-card, .album-row, .script-card, .film-entry").length;i&&(i.textContent=L>0?`total ${L} — pure-text terminal listing`:`buffer ~/${s.slug} mounted`)}},26);t.push(()=>clearInterval($)),b(d.querySelector("#termCliForm"),d.querySelector("#termCliInput"),d.querySelector("#termCliLog"),s,o)}const C=[...document.querySelectorAll(".project-card, .album-row, .script-card, .film-entry")];C.forEach((d,f)=>d.style.setProperty("--term-i",String(Math.min(f,16)))),t.push(()=>C.forEach(d=>d.style.removeProperty("--term-i")))}document.querySelectorAll("[data-t-matrix]").forEach(c=>c.addEventListener("click",()=>o.toggle())),document.querySelectorAll("[data-t-themes]").forEach(c=>c.addEventListener("click",()=>M())),document.querySelectorAll("[data-t-original]").forEach(c=>c.addEventListener("click",()=>I("original")))},h=s=>{let n=[],o=[],p="Windows Explorer",E="",c=v.code;if(s.slug==="code"){p="Code — Windows Explorer",c=v.code;const C=[...document.querySelectorAll("#featuredGrid .project-card")],d=[...document.querySelectorAll("#archiveGrid .project-card")],f=(i,g,$)=>{const L=i.querySelector(".project-title a"),O=i.querySelector(".project-thumb"),P=i.querySelector(".project-tag"),N=i.querySelector(".project-desc");return{title:L?.textContent?.trim()||"Untitled",href:L?.getAttribute("href")||"#",external:!0,img:O?.getAttribute("src")||"",tag:P?.textContent?.trim()||i.dataset.category||"project",desc:N?.textContent?.trim()||"",folder:g,folderLabel:$,typeLabel:`${P?.textContent?.trim()||"app"}`}};o=[...C.map(i=>f(i,"main","Main")),...d.map(i=>f(i,"archive","Archive"))],n=[{id:"main",label:"Main",count:C.length},{id:"archive",label:"Archive",count:d.length},{id:"all",label:"All Projects",count:o.length},{id:"cat:tool",label:"Tools",count:o.filter(i=>i.tag==="tool").length},{id:"cat:app",label:"Apps",count:o.filter(i=>i.tag==="app"||i.tag==="apps").length},{id:"cat:game",label:"Games",count:o.filter(i=>i.tag==="game").length},{id:"cat:website",label:"Websites",count:o.filter(i=>i.tag==="website").length},{id:"cat:vr",label:"VR",count:o.filter(i=>i.tag==="vr").length}],E='<button type="button" class="aero-cmd-btn" data-exp-feedback>Feedback</button>'}else if(s.slug==="music")p="Music — Windows Explorer",c=v.music,o=[...document.querySelectorAll(".album-row")].map(d=>{const f=d.querySelector(".album-title"),i=d.querySelector(".album-meta"),g=d.querySelector(".album-copy"),$=d.querySelector(".album-cover"),L=[...d.querySelectorAll(".album-actions a")].map(D=>({label:D.textContent.trim(),href:D.getAttribute("href")||"#"})),O=L.find(D=>D.href.includes("soundcloud.com")),N=(i?.textContent||"release").trim().toLowerCase().includes("single")?"singles":"albums";return{title:f?.textContent?.trim()||"Untitled",href:L[0]?.href||"#",external:!0,img:$?.getAttribute("src")||"",tag:i?.textContent?.trim()||"music",desc:g?.textContent?.trim()||"",folder:N,folderLabel:N==="singles"?"Singles":"Albums & EPs",typeLabel:i?.textContent?.trim()||"audio",links:L,soundcloud:O?.href||"",squareArt:!0}}),n=[{id:"all",label:"All Releases",count:o.length},{id:"albums",label:"Albums & EPs",count:o.filter(d=>d.folder==="albums").length},{id:"singles",label:"Singles",count:o.filter(d=>d.folder==="singles").length}],E='<a class="aero-cmd-btn" href="https://averywsc.github.io/bebeat/" target="_blank" rel="noopener noreferrer">Open bebeat</a>';else if(s.slug==="films")p="Films — Windows Explorer",c=v.film,o=[...document.querySelectorAll(".film-entry")].map(d=>{const f=d.querySelector(".film-title"),i=d.querySelector(".film-credit"),g=d.querySelector(".film-roles"),$=d.querySelector(".film-notes"),L=d.querySelector("iframe"),O=[...d.querySelectorAll(".film-actions a")].map(P=>({label:P.textContent.trim(),href:P.getAttribute("href")||"#"}));return{title:f?.textContent?.trim()||"Untitled",href:O[0]?.href||"",external:!1,embed:L?.getAttribute("src")||"",tag:i?.textContent?.trim()||"short film",desc:[g?.textContent?.trim(),$?.textContent?.trim()].filter(Boolean).join(" — "),folder:"films",folderLabel:"Short Films",typeLabel:"video",links:O}}),n=[{id:"all",label:"Short Films",count:o.length}],E='<a class="aero-cmd-btn" href="https://averywsc.github.io/colorstudies/" target="_blank" rel="noopener noreferrer">guides/LUTs</a><a class="aero-cmd-btn" href="https://averywsc.github.io/fifilm/" target="_blank" rel="noopener noreferrer">fifilm</a>';else if(s.slug==="scripts"){p="Scripts — Windows Explorer",c=v.scripts;const C=()=>[...document.querySelectorAll("#scriptCards .script-card")].map(d=>{const f=d.querySelector(".script-title"),i=d.querySelector(".script-subtitle"),g=d.querySelector(".script-desc");return{title:f?.textContent?.trim()||"Screenplay",href:d.getAttribute("href")||"#",external:!1,tag:i?.textContent?.trim()||"screenplay",desc:g?.textContent?.trim()||"Click to open screenplay viewer.",folder:"scripts",folderLabel:"Screenplays",typeLabel:".fountain"}});return o=C(),n=[{id:"all",label:"Screenplays",count:o.length}],{folders:n,items:o,explorerSubtitle:p,toolbarExtra:E,iconSvg:c,dynamicScripts:C}}else return null;return{folders:n,items:o,explorerSubtitle:p,toolbarExtra:E,iconSvg:c}},x=()=>{const s=K(),n=document.createElement("div");n.className="aero-bg",n.setAttribute("data-theme-injected","1"),n.setAttribute("aria-hidden","true"),n.innerHTML=`
      <span class="aero-bubble b1"></span>
      <span class="aero-bubble b2"></span>
      <span class="aero-bubble b3"></span>
      <span class="aero-bubble b4"></span>
      <span class="aero-bubble b5"></span>
      <span class="aero-bubble b6"></span>
    `,document.body.prepend(n);const o=document.createElement("nav");o.className="aero-desktop-icons",o.setAttribute("data-theme-injected","1"),o.setAttribute("aria-label","Desktop shortcuts"),o.innerHTML=`
      <a class="aero-d-icon ${s.slug==="home"?"is-current":""}" href="${s.base}/">
        <span class="aero-d-glyph">${v.home}</span><span>Home</span>
      </a>
      <a class="aero-d-icon" href="${s.base}/?zoom=1">
        <span class="aero-d-glyph">${v.photos}</span><span>Photos</span>
      </a>
      <a class="aero-d-icon ${s.slug==="code"?"is-current":""}" href="${s.base}/code.html">
        <span class="aero-d-glyph">${v.folder}</span><span>Code</span>
      </a>
      <a class="aero-d-icon ${s.slug.startsWith("scripts")?"is-current":""}" href="${s.base}/scripts/index.html">
        <span class="aero-d-glyph">${v.scripts}</span><span>Scripts</span>
      </a>
      <a class="aero-d-icon ${s.slug==="music"?"is-current":""}" href="${s.base}/music.html">
        <span class="aero-d-glyph">${v.music}</span><span>Music</span>
      </a>
      <a class="aero-d-icon ${s.slug==="films"?"is-current":""}" href="${s.base}/film.html">
        <span class="aero-d-glyph">${v.film}</span><span>Films</span>
      </a>
      <button type="button" class="aero-d-icon" data-a-notes>
        <span class="aero-d-glyph">${v.notes}</span><span>About.txt</span>
      </button>
      <button type="button" class="aero-d-icon" data-a-themes>
        <span class="aero-d-glyph">${v.themes}</span><span>Themes</span>
      </button>
      <button type="button" class="aero-d-icon" data-a-original>
        <span class="aero-d-glyph">${v.power}</span><span>Original</span>
      </button>
    `,document.body.appendChild(o);const p=document.createElement("aside");p.className="aero-notepad",p.setAttribute("data-theme-injected","1"),p.hidden=!0,p.innerHTML=`
      <div class="aero-win-titlebar aero-note-handle">
        <span class="aero-win-title">About.txt &mdash; Notepad</span>
        <div class="aero-win-btns">
          <button type="button" class="aero-win-btn is-close" data-close-note aria-label="Close">&times;</button>
        </div>
      </div>
      <div class="aero-note-body">
        <p><strong>Avery Beuth</strong> (@avery.beuth)</p>
        <p>Photographer, filmmaker, composer &amp; developer from Aotearoa.</p>
        <p>Drag any window by its glass titlebar, or double-click a titlebar to re-center.</p>
        <p><a href="https://github.com/averywsc" target="_blank" rel="noopener">github.com/averywsc</a> &middot; <a href="mailto:averybeuth3@gmail.com">averybeuth3@gmail.com</a></p>
      </div>
    `,document.body.appendChild(p),t.push(Z(p,p.querySelector(".aero-note-handle"))),p.querySelector("[data-close-note]")?.addEventListener("click",()=>{p.hidden=!0});let E=null;const c=j()?null:h(s);if(j()){const i=document.createElement("div");i.className="theme-home theme-home-frutiger",i.setAttribute("data-theme-injected","1"),i.innerHTML=`
        <section class="aero-home-window" id="aeroMainWin">
          <div class="aero-win-titlebar aero-main-handle">
            <span class="aero-win-title">Avery Beuth &mdash; Windows Internet Explorer</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-a-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-a-original title="Back to Original">&times;</button>
            </div>
          </div>
          <div class="aero-addr-bar">
            <div class="aero-nav-orbs" aria-hidden="true"><span>${v.backArrow}</span><span>${v.fwdArrow}</span></div>
            <div class="aero-url-box">https://averybeuth.xyz/</div>
            <button type="button" class="aero-tool-btn" data-a-themes>Themes</button>
          </div>
          <div class="aero-fav-bar">
            <a href="./?zoom=1">${v.starSmall} Photos</a>
            <a href="./code.html">${v.starSmall} Code</a>
            <a href="./scripts/index.html">${v.starSmall} Scripts</a>
            <a href="./music.html">${v.starSmall} Music</a>
            <a href="./film.html">${v.starSmall} Films</a>
            <a href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">${v.starSmall} Instagram</a>
          </div>
          <div class="aero-web2-banner">
            <div class="aero-web2-left">
              <span class="aero-web2-logo">avery<strong>beuth</strong></span>
              <span class="aero-web2-beta">beta</span>
            </div>
            <button type="button" class="aero-web2-pill" data-a-themes>6 themes</button>
          </div>
          <div class="aero-home-content">
            <div class="aero-hero-card">
              <div>
                <h1>Welcome to my homepage!</h1>
                <p>Photographs, short films, screenplays, music, and open-source software by Avery Beuth. Open Code, Music, Scripts, or Films to explore them in Windows Explorer!</p>
                <div class="aero-hero-btns">
                  <a class="aero-cta" href="./code.html">Open Code Explorer &raquo;</a>
                  <a class="aero-cta is-blue" href="./?zoom=1">Explore 3D Photos &raquo;</a>
                </div>
              </div>
              <button type="button" class="aero-starburst" data-a-themes><strong>NEW!</strong><span>6 themes</span></button>
            </div>
            <div class="aero-home-cols">
              <div class="aero-box">
                <div class="aero-box-head">About me</div>
                <p>Building open-source creative tools, shooting photography, writing screenplays, and composing music in New Zealand.</p>
              </div>
              <div class="aero-box">
                <div class="aero-box-head">Libraries</div>
                <div class="aero-link-btns">
                  <a class="aero-green-btn" href="./code.html">Code Explorer (Main &amp; Archive)</a>
                  <a class="aero-green-btn" href="./music.html">Music Library &amp; Previews</a>
                  <a class="aero-green-btn" href="./film.html">Short Films</a>
                  <a class="aero-green-btn" href="./scripts/index.html">Screenplays</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      `,document.body.appendChild(i),E=i.querySelector("#aeroMainWin"),t.push(Z(E,i.querySelector(".aero-main-handle")))}else if(c){document.documentElement.classList.add("has-aero-explorer");const i=document.createElement("div");i.className="aero-explorer-stage",i.setAttribute("data-theme-injected","1"),i.innerHTML=`
        <section class="aero-explorer-win" id="aeroMainWin" aria-label="${S(c.explorerSubtitle)}">
          <div class="aero-win-titlebar aero-main-handle">
            <span class="aero-win-title">${S(c.explorerSubtitle)}</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-a-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-a-original title="Back to Original">&times;</button>
            </div>
          </div>
          <div class="aero-addr-bar">
            <div class="aero-nav-orbs" aria-hidden="true"><span>${v.backArrow}</span><span>${v.fwdArrow}</span></div>
            <div class="aero-breadcrumb" id="expBreadcrumb">Computer &rsaquo; Avery &rsaquo; ${S(s.title)}</div>
            <input type="search" class="aero-exp-search" id="expSearch" placeholder="Search ${S(s.title)}..." aria-label="Search files" />
          </div>
          <div class="aero-cmd-bar">
            <button type="button" class="aero-cmd-btn" data-a-themes>Themes</button>
            ${c.toolbarExtra}
            <a class="aero-cmd-btn" href="${s.base}/?zoom=1">3D Photos</a>
            <button type="button" class="aero-cmd-btn" data-a-original>Original view</button>
          </div>
          <div class="aero-exp-body">
            <aside class="aero-exp-tree" aria-label="Folders">
              <div class="aero-tree-group">
                <div class="aero-tree-head">Folders</div>
                <div id="expFolderTree"></div>
              </div>
              <div class="aero-tree-group">
                <div class="aero-tree-head">Libraries</div>
                <a class="aero-tree-item" href="${s.base}/">${v.home}<span>Home</span></a>
                <a class="aero-tree-item" href="${s.base}/?zoom=1">${v.photos}<span>Photos (3D)</span></a>
                <a class="aero-tree-item ${s.slug==="code"?"is-active-lib":""}" href="${s.base}/code.html">${v.folder}<span>Code</span></a>
                <a class="aero-tree-item ${s.slug==="scripts"?"is-active-lib":""}" href="${s.base}/scripts/index.html">${v.scripts}<span>Scripts</span></a>
                <a class="aero-tree-item ${s.slug==="music"?"is-active-lib":""}" href="${s.base}/music.html">${v.music}<span>Music</span></a>
                <a class="aero-tree-item ${s.slug==="films"?"is-active-lib":""}" href="${s.base}/film.html">${v.film}<span>Films</span></a>
              </div>
            </aside>
            <div class="aero-exp-list-wrap">
              <div class="aero-exp-cols">
                <span>Name</span>
                <span>Type</span>
                <span>Folder</span>
              </div>
              <div class="aero-exp-list" id="expFileList" role="listbox" aria-label="Files"></div>
            </div>
            <aside class="aero-exp-preview" id="expPreview" aria-label="File preview"></aside>
          </div>
          <div class="aero-exp-status">
            <span id="expStatusCount">0 items</span>
            <span>Double-click any file to open &middot; Drag titlebar to move</span>
          </div>
        </section>
      `,document.body.appendChild(i),E=i.querySelector("#aeroMainWin"),t.push(Z(E,i.querySelector(".aero-main-handle")));let g=c.folders[0]?.id||"all",$="",L=null,O="";const P=i.querySelector("#expFolderTree"),N=i.querySelector("#expFileList"),D=i.querySelector("#expPreview"),ne=i.querySelector("#expBreadcrumb"),le=i.querySelector("#expStatusCount"),ae=i.querySelector("#expSearch"),ce=()=>c.items.filter(u=>{if(g!=="all"){if(g.startsWith("cat:")){const R=g.slice(4);if(R==="app"){if(u.tag!=="app"&&u.tag!=="apps")return!1}else if(u.tag!==R)return!1}else if(u.folder!==g)return!1}return!($&&!`${u.title} ${u.tag} ${u.desc} ${u.folderLabel}`.toLowerCase().includes($))}),J=u=>{if(O="",!u){D.innerHTML='<div class="aero-prev-empty">Select a file to preview its photo and details.</div>';return}const R=u.embed?`<div class="aero-prev-video"><iframe src="${S(u.embed)}" title="${S(u.title)}" allowfullscreen></iframe></div>`:u.img?`<div class="aero-prev-img-wrap ${u.squareArt?"is-square":""}"><img src="${S(u.img)}" alt="${S(u.title)}" /></div>`:`<div class="aero-prev-doc-icon">${c.iconSvg}</div>`,q=u.links?.length?u.links.map(Y=>`<a class="aero-prev-btn is-secondary" href="${S(Y.href)}" ${Y.href.startsWith("http")?'target="_blank" rel="noopener noreferrer"':""}>${S(Y.label)}</a>`).join(""):u.href&&u.href!=="#"?`<a class="aero-prev-btn" href="${S(u.href)}" ${u.external?'target="_blank" rel="noopener noreferrer"':""}>Open ${S(u.title)} &raquo;</a>`:"",H=u.soundcloud?'<button type="button" class="aero-prev-btn" id="expScPlayBtn">Play SoundCloud Preview</button><div id="expScEmbed"></div>':"";D.innerHTML=`
          ${R}
          <div class="aero-prev-meta">
            <h3 class="aero-prev-title">${S(u.title)}</h3>
            <span class="aero-prev-tag">${S(u.tag)}</span>
          </div>
          <p class="aero-prev-desc">${S(u.desc)}</p>
          <div class="aero-prev-actions">
            ${H}
            ${q}
          </div>
        `;const G=D.querySelector("#expScPlayBtn"),W=D.querySelector("#expScEmbed");G?.addEventListener("click",()=>{if(O===u.soundcloud){O="",W.innerHTML="",G.textContent="Play SoundCloud Preview";return}O=u.soundcloud;const Y=u.soundcloud.includes("/sets/"),de=`https://w.soundcloud.com/player/?url=${encodeURIComponent(u.soundcloud)}&color=%232b89d8&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;W.innerHTML=`<iframe class="aero-sc-iframe" title="SoundCloud preview" width="100%" height="${Y?260:120}" scrolling="no" frameborder="no" allow="autoplay" src="${de}"></iframe>`,G.textContent="Stop Preview"})},ee=()=>{P.innerHTML=c.folders.map(u=>`
          <button type="button" class="aero-tree-item ${u.id===g?"is-selected":""}" data-folder-id="${S(u.id)}">
            ${v.folder}
            <span>${S(u.label)}</span>
            <em>${u.count}</em>
          </button>
        `).join(""),P.querySelectorAll("[data-folder-id]").forEach(u=>{u.addEventListener("click",()=>{g=u.dataset.folderId,ee(),U()})})},U=()=>{const u=ce(),R=c.folders.find(q=>q.id===g);if(ne.innerHTML=`Computer &rsaquo; Avery &rsaquo; ${S(s.title)} &rsaquo; <strong>${S(R?.label||"All")}</strong>`,le.textContent=`${u.length} ${u.length===1?"item":"items"}`,!u.length){N.innerHTML='<div class="aero-empty-folder">No matching files in this folder.</div>',L=null,J(null);return}(!L||!u.includes(L))&&(L=u[0]),N.innerHTML=u.map((q,H)=>`
          <button type="button" class="aero-file-row ${q===L?"is-selected":""}" data-file-idx="${H}" role="option" aria-selected="${q===L}">
            <span class="aero-file-name">${c.iconSvg}<span>${S(q.title)}</span></span>
            <span class="aero-file-type">${S(q.typeLabel)}</span>
            <span class="aero-file-folder">${S(q.folderLabel)}</span>
          </button>
        `).join(""),N.querySelectorAll("[data-file-idx]").forEach(q=>{const H=u[Number(q.dataset.fileIdx)];q.addEventListener("click",()=>{L=H,N.querySelectorAll(".aero-file-row").forEach(G=>{const W=G===q;G.classList.toggle("is-selected",W),G.setAttribute("aria-selected",String(W))}),J(H)}),q.addEventListener("dblclick",()=>{!H.href||H.href==="#"||(H.external?window.open(H.href,"_blank","noopener,noreferrer"):window.location.href=H.href)})}),J(L)};if(ae?.addEventListener("input",()=>{$=(ae.value||"").trim().toLowerCase(),U()}),i.querySelector("[data-exp-feedback]")?.addEventListener("click",()=>{document.getElementById("feedbackBtn")?.click()}),ee(),U(),c.dynamicScripts){const u=document.getElementById("scriptCards");if(u){const R=new MutationObserver(()=>{c.items=c.dynamicScripts(),c.folders[0].count=c.items.length,ee(),U()});R.observe(u,{childList:!0,subtree:!0}),t.push(()=>R.disconnect())}}}else{const i=document.querySelector(".site-main");if(i){E=i;const g=document.createElement("div");g.className="aero-browser-chrome",g.setAttribute("data-theme-injected","1"),g.innerHTML=`
          <div class="aero-win-titlebar aero-main-handle">
            <span class="aero-win-title">Avery Beuth &mdash; ${S(s.title)} &mdash; WordPad</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-a-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-a-original title="Back to Original">&times;</button>
            </div>
          </div>
          <div class="aero-addr-bar">
            <div class="aero-nav-orbs" aria-hidden="true"><span>${v.backArrow}</span><span>${v.fwdArrow}</span></div>
            <div class="aero-url-box">https://averybeuth.xyz/${S(s.slug)}</div>
            <button type="button" class="aero-tool-btn" data-a-themes>Themes</button>
          </div>
        `,i.prepend(g),t.push(Z(i,g.querySelector(".aero-main-handle")))}}const C=document.createElement("footer");C.className="aero-taskbar-global",C.setAttribute("data-theme-injected","1"),C.innerHTML=`
      <button type="button" class="aero-start-orb" data-a-themes aria-label="Start / Themes">${v.winOrb}</button>
      <div class="aero-task-list">
        <button type="button" class="aero-task-tab is-active" data-a-restore>${S(c?c.explorerSubtitle:`${s.title} - Internet`)}</button>
        <button type="button" class="aero-task-tab" data-a-notes>About.txt</button>
        <button type="button" class="aero-task-tab" data-a-themes>Themes</button>
        <button type="button" class="aero-task-tab" data-a-original>Original site</button>
      </div>
      <div class="aero-tray-clock">
        <span id="aeroTime"></span>
        <span id="aeroDate"></span>
      </div>
    `,document.body.appendChild(C);const d=()=>{const i=new Date,g=document.getElementById("aeroTime"),$=document.getElementById("aeroDate");g&&(g.textContent=i.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),$&&($.textContent=i.toLocaleDateString([],{day:"2-digit",month:"2-digit",year:"numeric"}))};d();const f=setInterval(d,15e3);t.push(()=>clearInterval(f)),document.querySelectorAll("[data-a-min]").forEach(i=>i.addEventListener("click",()=>E?.classList.add("is-minimized"))),document.querySelectorAll("[data-a-restore]").forEach(i=>i.addEventListener("click",()=>E?.classList.remove("is-minimized"))),document.querySelectorAll("[data-a-notes]").forEach(i=>i.addEventListener("click",()=>{p.hidden=!p.hidden})),document.querySelectorAll("[data-a-themes]").forEach(i=>i.addEventListener("click",()=>M())),document.querySelectorAll("[data-a-original]").forEach(i=>i.addEventListener("click",()=>I("original")))},A=()=>{const s=document.createElement("div");if(s.className="silly-ribbon",s.setAttribute("data-theme-injected","1"),s.innerHTML=`
      <div class="silly-marquee">
        <span>WELCOME TO AVERY'S SUPER COOL WEBSITE!! &bull; 100% REAL COMIC SANS &bull; VERY SERIOUS PORTFOLIO &bull; CLICK EVERYTHING &bull; WOW!!</span>
        <span>WELCOME TO AVERY'S SUPER COOL WEBSITE!! &bull; 100% REAL COMIC SANS &bull; VERY SERIOUS PORTFOLIO &bull; CLICK EVERYTHING &bull; WOW!!</span>
      </div>
    `,document.body.prepend(s),j()){const n=document.createElement("main");n.className="theme-home theme-home-silly",n.setAttribute("data-theme-injected","1"),n.innerHTML=`
        <div class="silly-home-card">
          <span class="silly-sticker">${v.sillyStar} WOW!!</span>
          <h1 class="silly-hero-title">hi welcome to avery's website!!!</h1>
          <p class="silly-hero-sub">i make photos, cool apps, short films, music &amp; screenplays :)</p>
          <nav class="silly-home-nav">
            <a class="silly-pill is-pink" href="./?zoom=1">3D PHOTOS!</a>
            <a class="silly-pill is-blue" href="./code.html">CODE STUFF!</a>
            <a class="silly-pill is-green" href="./scripts/index.html">SCRIPTS!</a>
            <a class="silly-pill is-orange" href="./music.html">MUSIC!</a>
            <a class="silly-pill is-purple" href="./film.html">FILMS!</a>
          </nav>
          <div class="silly-home-foot">
            <button type="button" class="silly-mini-btn" data-s-themes>change theme</button>
            <button type="button" class="silly-mini-btn" data-s-original>go back to serious mode</button>
          </div>
        </div>
      `,document.body.appendChild(n),n.querySelector("[data-s-themes]")?.addEventListener("click",()=>M()),n.querySelector("[data-s-original]")?.addEventListener("click",()=>I("original"))}},r=()=>{const s=K();if(j()){const n=document.createElement("main");n.className="theme-home theme-home-paper",n.setAttribute("data-theme-injected","1"),n.innerHTML=`
        <article class="paper-frontpage">
          <header class="paper-masthead">
            <div class="paper-mast-meta"><span>AUCKLAND, NEW ZEALAND</span><span>VOL. IV &middot; ARCHIVAL EDITION</span><span>EST. AVERYBEUTH.XYZ</span></div>
            <h1>THE AVERY CHRONICLE</h1>
            <nav class="paper-mast-nav">
              <a href="./?zoom=1">Photographs (3D)</a>
              <a href="./code.html">Software &amp; Code</a>
              <a href="./scripts/index.html">Screenplays</a>
              <a href="./music.html">Music &amp; Scores</a>
              <a href="./film.html">Short Films</a>
              <button type="button" data-p-themes>Themes</button>
            </nav>
          </header>
          <div class="paper-front-grid">
            <section class="paper-lead">
              <span class="paper-kicker">FRONT PAGE</span>
              <h2>Photographs, Moving Image, Sound &amp; Open-Source Software</h2>
              <p class="paper-dropcap">Welcome to the archival edition of Avery Beuth's portfolio. Browse 89 open-source tools and creative web applications, original soundtracks and albums, screenplays, short films, or step directly back into the interactive 3D photographic gallery.</p>
              <div class="paper-lead-links">
                <a class="paper-cta-link" href="./?zoom=1">Enter 3D Photo Gallery &rarr;</a>
                <a class="paper-cta-link" href="./code.html">Read Code Index &rarr;</a>
              </div>
            </section>
            <aside class="paper-index-col">
              <span class="paper-kicker">CONTENTS</span>
              <ul>
                <li><a href="./?zoom=1"><strong>01 / Photographs</strong><span>Interactive 307-frame gallery (Original theme)</span></a></li>
                <li><a href="./code.html"><strong>02 / Code</strong><span>15 selected works &amp; 74 archival experiments</span></a></li>
                <li><a href="./scripts/index.html"><strong>03 / Scripts</strong><span>Original short &amp; feature screenplays</span></a></li>
                <li><a href="./music.html"><strong>04 / Music</strong><span>Albums, EPs, OSTs &amp; bebeat</span></a></li>
                <li><a href="./film.html"><strong>05 / Films</strong><span>Short films, color studies &amp; fifilm</span></a></li>
              </ul>
              <button type="button" class="paper-small-btn" data-p-original>Return to Original Site</button>
            </aside>
          </div>
        </article>
      `,document.body.appendChild(n),n.querySelector("[data-p-themes]")?.addEventListener("click",()=>M()),n.querySelector("[data-p-original]")?.addEventListener("click",()=>I("original"))}else{const n=document.querySelector(".page-wrap");if(!n)return;const o=document.createElement("div");o.className="paper-sub-masthead",o.setAttribute("data-theme-injected","1"),o.innerHTML=`<span>THE AVERY CHRONICLE</span><span>SECTION: ${S(s.title.toUpperCase())}</span><span>ARCHIVAL PRINT</span>`,n.prepend(o)}},T=()=>{const s=K();if(j()){const n=document.createElement("main");n.className="theme-home theme-home-cobalt",n.setAttribute("data-theme-injected","1"),n.innerHTML=`
        <section class="cobalt-sheet">
          <div class="cobalt-titleblock">
            <span>DWG NO. AB-000 // COVER SHEET</span>
            <span>SCALE 1:1</span>
            <span>CYANOTYPE ARCHIVE 2026</span>
          </div>
          <div class="cobalt-sheet-hero">
            <h1>AVERYBEUTH.XYZ</h1>
            <p>TECHNICAL INDEX — PHOTOGRAPHY, SOFTWARE, SCREENPLAYS, AUDIO &amp; FILM</p>
          </div>
          <div class="cobalt-sheet-grid">
            <a class="cobalt-spec" href="./?zoom=1"><span>S-01</span><strong>PHOTOGRAPHS</strong><em>Opens 3D Gallery (OG)</em></a>
            <a class="cobalt-spec" href="./code.html"><span>S-02</span><strong>CODE &amp; TOOLS</strong><em>89 open-source builds</em></a>
            <a class="cobalt-spec" href="./scripts/index.html"><span>S-03</span><strong>SCREENPLAYS</strong><em>Fountain &amp; PDF archive</em></a>
            <a class="cobalt-spec" href="./music.html"><span>S-04</span><strong>MUSIC &amp; OSTS</strong><em>Albums, EPs &amp; synths</em></a>
            <a class="cobalt-spec" href="./film.html"><span>S-05</span><strong>SHORT FILMS</strong><em>Moving image &amp; LUTs</em></a>
            <button type="button" class="cobalt-spec" data-c-themes><span>S-06</span><strong>THEMES</strong><em>Switch active mode</em></button>
          </div>
          <div class="cobalt-sheet-foot">
            <span>DRAWN BY: A. BEUTH</span>
            <button type="button" data-c-original>[ RESET TO ORIGINAL ]</button>
          </div>
        </section>
      `,document.body.appendChild(n),n.querySelector("[data-c-themes]")?.addEventListener("click",()=>M()),n.querySelector("[data-c-original]")?.addEventListener("click",()=>I("original"))}else{const n=document.querySelector(".page-wrap");if(!n)return;const o=document.createElement("div");o.className="cobalt-titleblock",o.setAttribute("data-theme-injected","1"),o.innerHTML=`
        <span>DWG NO. AB-${S(s.slug.toUpperCase())}</span>
        <span>LAYER: ${S(s.title.toUpperCase())} // SCALE 1:1</span>
        <span>CYANOTYPE ARCHIVE // 2026</span>
      `,n.prepend(o)}},k=s=>{l(),s==="terminal"?y():s==="frutiger"?x():s==="silly"?A():s==="paper"?r():s==="cobalt"&&T()},w=s=>{if(!e)return;const n=e.querySelector(".themes-mini"),o=e.querySelector(".themes-meta-num"),p=e.querySelector(".themes-meta-name"),E=e.querySelector(".themes-meta-desc"),c=e.querySelector(".themes-in-use");n&&(n.className=`themes-mini ${s.previewClass}`,o.textContent=s.num,p.textContent=s.name,E.textContent=s.desc,c.style.visibility=s.id===a?"visible":"hidden")},_=()=>{e&&e.querySelectorAll(".theme-tile").forEach(s=>{s.classList.toggle("is-active",s.dataset.themeId===a)})},z=()=>{!e||e.hidden||(e.classList.remove("is-open"),setTimeout(()=>{e&&(e.hidden=!0)},180))},I=s=>{const n=a;if(a=oe(s),j()&&a==="original"&&n!=="original"){window.location.reload();return}k(a),_(),w(B.find(o=>o.id===a)||B[0])},M=(s=null)=>{if(e||(e=document.createElement("aside"),e.className="themes-popover",e.setAttribute("role","dialog"),e.setAttribute("aria-label","Site themes"),e.hidden=!0,e.innerHTML=`
        <div class="themes-preview-frame">
          <div class="themes-mini is-original">
            <div class="themes-mini-bar">
              <span class="themes-mini-dots"><i></i><i></i><i></i></span>
              <span class="themes-mini-brand">averybeuth.xyz</span>
              <span class="themes-mini-nav"><span>code</span><span>music</span></span>
            </div>
            <div class="themes-mini-hero">
              <div class="themes-mini-title">averybeuth.xyz</div>
              <div class="themes-mini-sub">photos, films, music &amp; software</div>
            </div>
            <div class="themes-mini-grid">
              <div class="themes-mini-card"><div class="themes-mini-thumb"></div><div class="themes-mini-line"></div><div class="themes-mini-line is-short"></div></div>
              <div class="themes-mini-card"><div class="themes-mini-thumb"></div><div class="themes-mini-line"></div><div class="themes-mini-line is-short"></div></div>
              <div class="themes-mini-card"><div class="themes-mini-thumb"></div><div class="themes-mini-line"></div><div class="themes-mini-line is-short"></div></div>
            </div>
            <div class="themes-mini-explorer">
              <div class="tme-tree"><span></span><span></span><span></span></div>
              <div class="tme-files"><span></span><span></span><span></span><span></span></div>
              <div class="tme-prev"><div class="tme-pic"></div><span></span></div>
            </div>
            <div class="themes-mini-textlist">
              <span>drwxr-xr-x  code/</span>
              <span>-rwxr-xr-x  totone.app</span>
              <span>-rwxr-xr-x  third-impact.flac</span>
            </div>
            <div class="themes-mini-taskbar"></div>
          </div>
        </div>
        <div class="themes-meta-bar">
          <div class="themes-meta-left">
            <span class="themes-meta-num">01</span>
            <span class="themes-meta-name">Original</span>
            <span class="themes-meta-desc"></span>
          </div>
          <span class="themes-in-use">IN USE</span>
        </div>
        <div class="themes-grid">
          ${B.map(o=>`
            <button type="button" class="theme-tile" data-theme-id="${o.id}">
              <div class="theme-tile-top">
                <span class="theme-tile-num">${o.num}</span>
                <span class="theme-tile-badge">IN USE</span>
              </div>
              <div class="theme-tile-name">${o.label}</div>
            </button>
          `).join("")}
        </div>
        <div class="themes-footer">
          <span class="themes-kbd-hint"><span class="themes-kbd">1-6</span>pick <span class="themes-kbd" style="margin-left:6px;">esc</span>close</span>
          <span class="themes-touch-hint">tap a theme</span>
          <button type="button" class="themes-close-btn" data-close-themes>close</button>
        </div>
      `,e.addEventListener("click",o=>{if(o.target.closest("[data-close-themes]")){z();return}const p=o.target.closest(".theme-tile");p&&I(p.dataset.themeId)}),e.addEventListener("mouseover",o=>{const p=o.target.closest(".theme-tile");if(!p)return;const E=B.find(c=>c.id===p.dataset.themeId);E&&w(E)}),e.addEventListener("mouseleave",()=>{w(B.find(o=>o.id===a)||B[0])}),document.addEventListener("pointerdown",o=>{!e||e.hidden||o.target.closest(".themes-popover, .themes-trigger, .themes-mobile-trigger, [data-t-themes], [data-a-themes], [data-s-themes], [data-p-themes], [data-c-themes]")||z()}),window.addEventListener("keydown",o=>{if(!e||e.hidden)return;if(o.key==="Escape"){o.preventDefault(),z();return}const p=Number(o.key);p>=1&&p<=B.length&&!o.target.closest("input, textarea")&&(o.preventDefault(),I(B[p-1].id))}),document.body.appendChild(e)),!(s!==null?s:e.hidden)){z();return}_(),w(B.find(o=>o.id===a)||B[0]),e.hidden=!1,requestAnimationFrame(()=>e.classList.add("is-open"))};k(a);const F=document.querySelector(".rail-meta"),V=document.querySelector(".rail-top-row");if(F&&!F.querySelector(".themes-trigger")){const s=document.createElement("button");if(s.type="button",s.className="themes-trigger",s.textContent="themes",s.addEventListener("click",()=>M()),F.insertBefore(s,F.firstChild),V&&!V.querySelector(".themes-mobile-trigger")){const n=document.createElement("button");n.type="button",n.className="themes-mobile-trigger",n.setAttribute("aria-label","Open site themes"),n.textContent="themes",n.addEventListener("click",()=>M()),V.appendChild(n)}}}export{ve as S,we as a,xe as b,me as c,se as i,ye as s};
