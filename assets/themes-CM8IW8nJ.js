class K{constructor(){this.on=!1,this.sfxOn=!0,this.ctx=null}ensureCtx(){if(this.ctx)return this.ctx;const e=this.ctx=new(window.AudioContext||window.webkitAudioContext),t=e.createDynamicsCompressor();this.analyser=e.createAnalyser(),this.analyser.fftSize=128,this.analyser.smoothingTimeConstant=.86,this._fftData=new Uint8Array(this.analyser.frequencyBinCount),t.connect(this.analyser).connect(e.destination),this.master=e.createGain(),this.master.gain.value=0,this.master.connect(t),this.sfxMaster=e.createGain(),this.sfxMaster.gain.value=.85,this.sfxMaster.connect(t);const i=e.sampleRate*4,r=e.createBuffer(1,i,e.sampleRate),m=r.getChannelData(0);let h=0,u=0,f=0;for(let y=0;y<i;y++){const n=Math.random()*2-1;h=.997*h+n*.029,u=.985*u+n*.032,f=.95*f+n*.048,m[y]=(h+u+f)*.35}return this.noiseBuf=r,e}unlockSfx(){if(!this.sfxOn)return;const e=this.ensureCtx();e.state==="suspended"&&e.resume().catch(()=>{})}init(){const e=this.ensureCtx();if(this._musicInit)return;this._musicInit=!0,this.filter=e.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=680,this.filter.Q.value=.4,this.filter.connect(this.master),[[110,.055],[164.81,.036],[220.4,.024],[246.94,.016],[277.18,.009],[329.63,.008]].forEach(([m,h],u)=>{const f=e.createOscillator();f.type=u===1||u===2?"triangle":"sine",f.frequency.value=m,f.detune.value=(u-2.5)*3.5;const y=e.createGain();y.gain.value=h;const n=e.createOscillator();n.frequency.value=.027+u*.014;const x=e.createGain();x.gain.value=h*.55,n.connect(x).connect(y.gain),f.connect(y).connect(this.filter),f.start(),n.start()});const t=e.createBufferSource();t.buffer=this.noiseBuf,t.loop=!0;const i=e.createBiquadFilter();i.type="bandpass",i.frequency.value=380,i.Q.value=.6;const r=e.createGain();r.gain.value=.05,t.connect(i).connect(r).connect(this.master),t.start()}toggle(){this.init(),this.on=!this.on;const e=this.ctx.currentTime;return this.on&&this.ctx.resume(),this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(this.master.gain.value,e),this.master.gain.linearRampToValueAtTime(this.on?.85:0,e+(this.on?1.4:.8)),this.on}setBrightness(e){!this.ctx||!this.on||!this.filter||this.filter.frequency.setTargetAtTime(420+e*1600,this.ctx.currentTime,.8)}getLevel(){if(!this.analyser||!this.on||this.ctx?.state!=="running")return 0;this.analyser.getByteFrequencyData(this._fftData);let e=0;const t=Math.min(18,this._fftData.length);for(let i=0;i<t;i++)e+=this._fftData[i];return Math.min(1,e/(t*110))}shutter(){if(!this.sfxOn||!this.ctx||this.ctx.state!=="running")return;const e=this.ctx,t=e.currentTime,i=(h,u,f)=>{const y=e.createBufferSource();y.buffer=this.noiseBuf;const n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=f,n.Q.value=1.4;const x=e.createGain();x.gain.setValueAtTime(0,h),x.gain.linearRampToValueAtTime(u,h+.002),x.gain.exponentialRampToValueAtTime(1e-4,h+.05),y.connect(n).connect(x).connect(this.sfxMaster),y.start(h,Math.random()*3,.06)};i(t,.95,3200),i(t+.055,.62,2400);const r=e.createOscillator();r.frequency.value=95;const m=e.createGain();m.gain.setValueAtTime(0,t),m.gain.linearRampToValueAtTime(.14,t+.004),m.gain.exponentialRampToValueAtTime(1e-4,t+.08),r.connect(m).connect(this.sfxMaster),r.start(t),r.stop(t+.1)}tick(e=.5){if(!this.sfxOn||!this.ctx||this.ctx.state!=="running")return;const t=performance.now();if(this._lastTick&&t-this._lastTick<65)return;this._lastTick=t;const i=this.ctx,r=i.currentTime,m=i.createBufferSource();m.buffer=this.noiseBuf;const h=i.createBiquadFilter();h.type="bandpass",h.frequency.value=1350+e*850,h.Q.value=2;const u=i.createGain();u.gain.setValueAtTime(0,r),u.gain.linearRampToValueAtTime(.42,r+.002),u.gain.exponentialRampToValueAtTime(1e-4,r+.028),m.connect(h).connect(u).connect(this.sfxMaster),m.start(r,Math.random()*3,.035);const f=i.createOscillator();f.type="sine",f.frequency.setValueAtTime(210+e*90,r),f.frequency.exponentialRampToValueAtTime(95,r+.028);const y=i.createGain();y.gain.setValueAtTime(0,r),y.gain.linearRampToValueAtTime(.12,r+.002),y.gain.exponentialRampToValueAtTime(1e-4,r+.032),f.connect(y).connect(this.sfxMaster),f.start(r),f.stop(r+.04)}whoosh(){if(!this.sfxOn||!this.ctx||this.ctx.state!=="running")return;const e=this.ctx,t=e.currentTime,i=e.createBufferSource();i.buffer=this.noiseBuf;const r=e.createBiquadFilter();r.type="lowpass",r.Q.value=.75,r.frequency.setValueAtTime(240,t),r.frequency.exponentialRampToValueAtTime(860,t+.32),r.frequency.exponentialRampToValueAtTime(220,t+.95);const m=e.createGain();m.gain.setValueAtTime(0,t),m.gain.linearRampToValueAtTime(.55,t+.22),m.gain.exponentialRampToValueAtTime(1e-4,t+1),i.connect(r).connect(m).connect(this.sfxMaster),i.start(t,Math.random()*2,1.05)}}const Y='a, button, [role="button"], input, textarea, select, summary, .project-thumb-wrap, .album-cover-wrap, .script-card, .music-vinyl-disc, .aero-win-titlebar, body.is-locked .finale.is-live',O={original:{ring:'<svg viewBox="0 0 64 64" width="64" height="64" shape-rendering="geometricPrecision"><circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" stroke-width="2" /></svg>',dot:'<svg viewBox="0 0 16 16" width="16" height="16" shape-rendering="geometricPrecision"><circle cx="8" cy="8" r="3" fill="currentColor" /></svg>',arrow:!1},terminal:{ring:'<svg viewBox="0 0 64 64" width="64" height="64" shape-rendering="crispEdges"><path d="M18 10H10V18M46 10H54V18M10 46V54H18M54 46V54H46" fill="none" stroke="currentColor" stroke-width="2.4" /></svg>',dot:'<svg viewBox="0 0 16 16" width="16" height="16" shape-rendering="crispEdges"><rect x="4" y="2" width="8" height="12" fill="currentColor" /></svg>',arrow:!1},frutiger:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5" /></svg>',dot:'<svg viewBox="0 0 24 24" width="24" height="24"><path d="M3 2L3 19.5L7.6 15.2L10.8 22L13.5 20.7L10.3 14L16.4 14L3 2Z" fill="#ffffff" stroke="#0c1c2c" stroke-width="1.6" stroke-linejoin="round"/></svg>',arrow:!0},silly:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="7 6" stroke-linecap="round" /></svg>',dot:'<svg viewBox="0 0 28 28" width="28" height="28"><path d="M14 2L17.4 9.6L25.6 10.4L19.4 15.9L21.2 24L14 19.8L6.8 24L8.6 15.9L2.4 10.4L10.6 9.6Z" fill="#ff4fa3" stroke="#181818" stroke-width="2" stroke-linejoin="round"/></svg>',arrow:!1},paper:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-width="1.2" /></svg>',dot:'<svg viewBox="0 0 18 18" width="18" height="18"><path d="M9 1L14 9L9 17L4 9Z" fill="currentColor" /></svg>',arrow:!1},cobalt:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="25" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 4" /><path d="M32 3V13M32 51V61M3 32H13M51 32H61" stroke="currentColor" stroke-width="1.6" /></svg>',dot:'<svg viewBox="0 0 18 18" width="18" height="18"><path d="M9 2V16M2 9H16" stroke="currentColor" stroke-width="1.6" /><circle cx="9" cy="9" r="2" fill="currentColor" /></svg>',arrow:!1}};function W({onMove:s,onLeave:e}={}){if(!window.matchMedia("(pointer: fine) and (hover: hover)").matches)return null;document.documentElement.classList.add("has-cursor");let i=document.getElementById("cursor");i||(i=document.createElement("div"),i.id="cursor",i.className="cursor",i.setAttribute("aria-hidden","true"),document.body.appendChild(i)),i.innerHTML='<span class="cursor__ring" aria-hidden="true"></span><span class="cursor__dot" aria-hidden="true"></span>';const r=i.querySelector(".cursor__ring"),m=i.querySelector(".cursor__dot");let h="",u=!1;const f=()=>{const b=document.documentElement.getAttribute("data-theme")||"original";if(b===h)return;h=b;const v=O[b]||O.original;u=!!v.arrow,r.innerHTML=v.ring,m.innerHTML=v.dot,i.classList.toggle("is-arrow",u),r.style.color="",m.style.color=""};f(),new MutationObserver(f).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});const n={x:-100,y:-100,rx:-100,ry:-100,dx:-100,dy:-100,hover:0,uiHover:!1,visible:!1,hasInit:!1,sillyRot:0};window.addEventListener("pointermove",b=>{b.pointerType&&b.pointerType!=="mouse"||(n.x=b.clientX,n.y=b.clientY,n.hasInit||(n.rx=n.dx=n.x,n.ry=n.dy=n.y,n.hasInit=!0),n.visible=!0,n.uiHover=!!b.target?.closest?.(Y),i.classList.add("is-on"),i.classList.toggle("is-clickable",n.uiHover),s?.(b,n))},{passive:!0}),window.addEventListener("pointerdown",b=>{if(b.pointerType&&b.pointerType!=="mouse")return;n.x=n.dx=b.clientX,n.y=n.dy=b.clientY;const v=document.createElement("span");v.className="cursor__pulse",v.style.left=`${b.clientX}px`,v.style.top=`${b.clientY}px`,v.innerHTML=(O[h]||O.original).ring,document.body.appendChild(v),requestAnimationFrame(()=>v.classList.add("is-active")),setTimeout(()=>v.remove(),380)},{passive:!0});const x=()=>{n.visible=!1,n.uiHover=!1,i.classList.remove("is-on","is-clickable"),e?.()};return document.documentElement.addEventListener("mouseleave",x),window.addEventListener("blur",x),{el:i,state:n,update(b,{photoHover:v=!1,velocity:I=0,tintColor:C=null}={}){if(!n.hasInit)return;const S=1-Math.exp(-b*16);n.rx+=(n.x-n.rx)*S,n.ry+=(n.y-n.ry)*S,n.dx=n.x,n.dy=n.y;const k=n.uiHover?1:v?.52:0;n.hover+=(k-n.hover)*(1-Math.exp(-b*16));const M=Math.min(1,Math.abs(I)/40),a=u?.42+n.hover*.25:.5+n.hover*.42+M*.12,o=u?n.uiHover?1.1:1:n.uiHover?1.28:v?.88:1;h==="silly"?(n.sillyRot=(n.sillyRot+b*(n.uiHover?160:55))%360,r.style.transform=`translate3d(${n.rx.toFixed(1)}px, ${n.ry.toFixed(1)}px, 0) rotate(${n.sillyRot.toFixed(1)}deg) scale(${a.toFixed(3)})`,m.style.transform=`translate3d(${n.dx.toFixed(1)}px, ${n.dy.toFixed(1)}px, 0) rotate(${(-n.sillyRot*.45).toFixed(1)}deg) scale(${o.toFixed(3)})`):(r.style.transform=`translate3d(${n.rx.toFixed(1)}px, ${n.ry.toFixed(1)}px, 0) scale(${a.toFixed(3)}, ${(a*(1-M*.08)).toFixed(3)})`,m.style.transform=`translate3d(${n.dx.toFixed(1)}px, ${n.dy.toFixed(1)}px, 0) scale(${o.toFixed(3)})`),h==="original"&&C&&!n.uiHover?(r.style.color=C(.36+n.hover*.35),m.style.color=""):r.style.color&&(r.style.color="")}}}function Z(){const s=W();if(!s)return;let e=performance.now();const t=i=>{const r=Math.min(.05,Math.max(.001,(i-e)/1e3));e=i,s.update(r),requestAnimationFrame(t)};requestAnimationFrame(t)}let z=!1;function H(s,e=2600){let t=document.getElementById("eggToast");t||(t=document.createElement("div"),t.id="eggToast",t.setAttribute("aria-hidden","true"),t.style.cssText=["position:fixed","left:50%","bottom:max(24px,env(safe-area-inset-bottom))","transform:translateX(-50%) translateY(8px)","z-index:9997","pointer-events:none",'font-family:"Dotmatri",ui-monospace,monospace',"font-size:13px","letter-spacing:0.1em","color:rgba(244,238,228,0.88)","background:rgba(11,12,15,0.82)","border:1px solid rgba(236,230,220,0.16)","padding:7px 14px","border-radius:999px","opacity:0","transition:opacity 0.35s ease,transform 0.35s ease","backdrop-filter:blur(8px)"].join(";"),document.body.appendChild(t)),t.textContent=s,requestAnimationFrame(()=>{t.style.opacity="1",t.style.transform="translateX(-50%) translateY(0)"}),clearTimeout(t._timer),t._timer=setTimeout(()=>{t.style.opacity="0",t.style.transform="translateX(-50%) translateY(8px)"},e)}function _(){for(let e=0;e<42;e++){const t=document.createElement("span");t.setAttribute("aria-hidden","true");const i=10+Math.random()*80,r=3+Math.random()*5,m=1.6+Math.random()*1.4,h=Math.random()*.25,u=(Math.random()-.5)*140;t.style.cssText=["position:fixed",`left:${i}vw`,"top:-12px",`width:${r}px`,`height:${r}px`,"border-radius:50%","background:rgba(244,238,228,0.88)","box-shadow:0 0 8px rgba(244,238,228,0.45)","pointer-events:none","z-index:9998",`transition:transform ${m}s cubic-bezier(0.22,1,0.36,1) ${h}s,opacity ${m}s ease ${h}s`].join(";"),document.body.appendChild(t),requestAnimationFrame(()=>{t.style.transform=`translate(${u}px, ${window.innerHeight+30}px)`,t.style.opacity="0"}),setTimeout(()=>t.remove(),(m+h)*1e3+80)}}function j(){let s=document.getElementById("eggCat");s||(s=document.createElement("div"),s.id="eggCat",s.setAttribute("aria-hidden","true"),s.style.cssText=["position:fixed","right:max(20px,env(safe-area-inset-right))","bottom:0","z-index:9996","pointer-events:none",'font-family:"Dotmatri",ui-monospace,monospace',"font-size:18px","letter-spacing:0.06em","color:rgba(244,238,228,0.9)","text-shadow:0 2px 14px rgba(0,0,0,0.9)","padding:10px 14px 12px","transform:translateY(100%)","transition:transform 0.45s cubic-bezier(0.22,1,0.36,1)"].join(";"),document.body.appendChild(s)),s.textContent="=^._.^=",requestAnimationFrame(()=>{s.style.transform="translateY(0)"}),clearTimeout(s._blink),clearTimeout(s._hide),s._blink=setTimeout(()=>{s.textContent="=^.-.^=  hi"},1100),s._hide=setTimeout(()=>{s.style.transform="translateY(100%)"},3800)}function U(){const s=document.documentElement.classList.toggle("is-crt");let e=document.getElementById("crtOverlay"),t=document.getElementById("crtStyle");s&&!t&&(t=document.createElement("style"),t.id="crtStyle",t.textContent=["html.is-crt body{filter:contrast(1.1) brightness(1.04) saturate(1.08);}","html.is-crt h1,html.is-crt h2,html.is-crt .rail-brand,html.is-crt .mark{text-shadow:1px 0 0 rgba(255,60,90,0.38),-1px 0 0 rgba(70,220,255,0.38),0 0 10px rgba(244,238,228,0.22);}"].join(""),document.head.appendChild(t)),s&&!e?(e=document.createElement("div"),e.id="crtOverlay",e.setAttribute("aria-hidden","true"),e.style.cssText=["position:fixed","inset:0","pointer-events:none","z-index:9994","background:repeating-linear-gradient(to bottom,rgba(255,255,255,0.03) 0px,rgba(255,255,255,0.03) 1px,rgba(0,0,0,0.44) 2px,rgba(0,0,0,0.44) 3px),repeating-linear-gradient(to right,rgba(255,40,40,0.03) 0px,rgba(40,255,80,0.03) 1px,rgba(40,120,255,0.03) 2px,transparent 3px)","box-shadow:inset 0 0 110px rgba(0,0,0,0.72),inset 0 0 28px rgba(180,220,255,0.06)"].join(";"),document.body.appendChild(e)):s||(e?.remove(),t?.remove()),H(s?"crt on":"crt off")}function G(){let s=document.getElementById("eggModal");if(!s){s=document.createElement("div"),s.id="eggModal",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label","Easter egg binds"),s.style.cssText=["position:fixed","inset:0","z-index:9999","display:flex","align-items:center","justify-content:center","padding:24px","background:rgba(11,12,15,0.78)","backdrop-filter:blur(10px)","-webkit-backdrop-filter:blur(10px)","opacity:0","transition:opacity 0.25s ease"].join(";"),s.innerHTML=`
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
    `;const e=()=>{s.style.opacity="0",setTimeout(()=>{s.hidden=!0},240)};s.addEventListener("click",t=>{(t.target===s||t.target.closest("[data-close-eggs]"))&&e()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&!s.hidden&&(t.preventDefault(),e())}),document.body.appendChild(s)}s.hidden=!1,requestAnimationFrame(()=>{s.style.opacity="1"})}function X(){const s=document.querySelector(".rail-meta");if(!s||s.querySelector(".egg-trigger"))return;const e=document.createElement("button");e.type="button",e.className="egg-trigger",e.textContent="secrets",e.addEventListener("click",G),s.appendChild(e)}function Q(){if(z)return;z=!0,console.log("%caverybeuth.xyz","font-family:monospace;font-size:14px;color:#f4eee4;"),X();let s="";const e=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let t=0,i=!1,r=0,m=null;const h=(u,f,y=!1)=>{const n=document.createElement("span");n.setAttribute("aria-hidden","true");const x=y?["✦","✧","·"]:["✦","✧","⋆","+"],b=["rgba(255,250,235,0.95)","rgba(255,232,178,0.92)","rgba(222,238,255,0.9)"];n.textContent=x[Math.floor(Math.random()*x.length)];const v=(Math.random()-.5)*(y?18:44),I=(y?-16:10)+(Math.random()-.5)*28,C=(Math.random()-.5)*140,S=y?10+Math.random()*8:11+Math.random()*10,k=y?1.5:.95,M=b[Math.floor(Math.random()*b.length)];n.style.cssText=["position:fixed",`left:${u}px`,`top:${f}px`,"transform:translate(-50%,-50%) scale(0.5) rotate(0deg)",'font-family:"Dotmatri",ui-monospace,monospace',`font-size:${S.toFixed(1)}px`,`color:${M}`,`text-shadow:0 0 10px ${M},0 0 20px rgba(255,244,210,0.45)`,"pointer-events:none","z-index:9995",`transition:transform ${k}s cubic-bezier(0.22,1,0.36,1),opacity ${k}s ease-out`].join(";"),document.body.appendChild(n),requestAnimationFrame(()=>{n.style.transform=`translate(calc(-50% + ${v}px), calc(-50% + ${I}px)) scale(1.15) rotate(${C}deg)`,n.style.opacity="0"}),setTimeout(()=>n.remove(),k*1e3+60)};window.addEventListener("pointermove",u=>{if(!i)return;const f=performance.now();f-r<22||(r=f,h(u.clientX,u.clientY,!1))}),window.addEventListener("keydown",u=>{if(u.target.closest("input, textarea, select"))return;const f=u.key.length===1?u.key.toLowerCase():u.key;f===e[t]?(t++,t===e.length&&(t=0,_(),H("nice"))):t=f===e[0]?1:0,!(u.key.length!==1||u.ctrlKey||u.metaKey||u.altKey)&&(s=(s+u.key.toLowerCase()).slice(-12),s.endsWith("meow")||s.endsWith("cats")?(s="",j()):s.endsWith("stars")?(s="",i=!i,clearInterval(m),i&&(m=setInterval(()=>{h(Math.random()*window.innerWidth,Math.random()*window.innerHeight,!0)},160)),H(i?"stars on":"stars off")):s.endsWith("crt")&&(s="",U()))})}const L=[{id:"original",num:"01",name:"Original",label:"ORIGINAL",desc:"Obsidian dark, warm cream, dot-matrix",themeColor:"#0b0c0f",previewClass:"is-original"},{id:"terminal",num:"02",name:"Terminal",label:"TERMINAL",desc:"Pure-text zsh TUI, Matrix rain & live CLI",themeColor:"#101411",previewClass:"is-terminal"},{id:"frutiger",num:"03",name:"Frutiger 7",label:"FRUTIGER 7",desc:"Draggable Windows 7 Aero desktop & browser",themeColor:"#071b2e",previewClass:"is-frutiger"},{id:"silly",num:"04",name:"Silly",label:"SILLY",desc:"Comic Sans, stickers, rainbow & chaos",themeColor:"#fff7cc",previewClass:"is-silly"},{id:"paper",num:"05",name:"Paper",label:"PAPER",desc:"Broadsheet newspaper & archival print",themeColor:"#f2ede2",previewClass:"is-paper"},{id:"cobalt",num:"06",name:"Cobalt",label:"COBALT",desc:"Architectural cyanotype CAD blueprint",themeColor:"#061429",previewClass:"is-cobalt"}],B="avery_theme";let P=!1;function F(){if(!!!(document.getElementById("stage")&&document.getElementById("gl")))return!1;const e=new URLSearchParams(window.location.search);return e.has("zoom")||e.has("overview")||e.has("p")}function $(){return!!(document.getElementById("stage")&&document.getElementById("gl"))}function q(){const s=window.location.pathname.toLowerCase(),e=s.includes("/scripts/"),t=e?"..":".";if($())return{base:".",inScripts:!1,slug:"home",title:"Home",cmd:"neofetch"};let i="home",r="Portfolio",m="ls -la ~/";return s.includes("code")?(i="code",r="Code",m="ls -la ~/code --no-images"):s.includes("music")?(i="music",r="Music",m="mpc playlist --verbose ~/music"):s.includes("film")?(i="films",r="Films",m="ls -lh ~/films/"):e&&s.includes("view")?(i="scripts/view",r="Screenplay",m="less -N ~/scripts/screenplay.fountain"):e?(i="scripts",r="Scripts",m="ls -lh ~/scripts/*.fountain"):s.includes("privacy")&&(i="privacy",r="Privacy",m="cat ~/privacy.txt"),{base:t,inScripts:e,slug:i,title:r,cmd:m}}function V(s){if(F())return document.documentElement.removeAttribute("data-theme"),document.documentElement.classList.remove("is-themed-home"),"original";const e=L.find(r=>r.id===s)||L[0],t=e.id;t==="original"?(document.documentElement.removeAttribute("data-theme"),document.documentElement.classList.remove("is-themed-home"),sessionStorage.removeItem(B)):(document.documentElement.setAttribute("data-theme",t),$()&&document.documentElement.classList.add("is-themed-home"),sessionStorage.setItem(B,t));const i=document.querySelector('meta[name="theme-color"]');return i&&e.themeColor&&i.setAttribute("content",e.themeColor),t}if(!F()){const s=sessionStorage.getItem(B)||"original";s!=="original"&&V(s)}function R(s,e){if(!s||!e)return()=>{};let t=0,i=0,r=!1,m=0,h=0,u=0,f=0;const y=v=>{window.innerWidth<=860||v.target.closest("button, a, input")||(r=!0,m=v.clientX,h=v.clientY,u=t,f=i,s.classList.add("is-dragging"),e.setPointerCapture?.(v.pointerId),v.preventDefault())},n=v=>{r&&(t=u+(v.clientX-m),i=f+(v.clientY-h),s.style.transform=`translate3d(${t.toFixed(0)}px, ${i.toFixed(0)}px, 0)`)},x=()=>{r&&(r=!1,s.classList.remove("is-dragging"))},b=v=>{v.target.closest("button, a")||(t=0,i=0,s.style.transform="")};return e.addEventListener("pointerdown",y),window.addEventListener("pointermove",n),window.addEventListener("pointerup",x),e.addEventListener("dblclick",b),()=>{e.removeEventListener("pointerdown",y),window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",x),e.removeEventListener("dblclick",b),s.style.transform="",s.classList.remove("is-dragging","is-minimized")}}function J(){if(P||F())return;P=!0;let s=sessionStorage.getItem(B)||"original",e=null,t=[];const i=()=>{for(;t.length;){const a=t.pop();try{a()}catch{}}document.querySelectorAll("[data-theme-injected]").forEach(a=>a.remove())},r=()=>{const a=document.createElement("canvas");a.className="term-matrix-bg",a.setAttribute("data-theme-injected","1"),a.setAttribute("aria-hidden","true"),document.body.prepend(a);const o=a.getContext("2d");let c=0,d=!1;const T="01アイウエオカキクケコABXY#$%&*+=-:/";let p=[];const w=()=>{a.width=window.innerWidth,a.height=window.innerHeight;const E=Math.max(12,Math.floor(a.width/22));p=Array.from({length:E},()=>Math.random()*-40)};w(),window.addEventListener("resize",w);let g=0;const l=E=>{if(c=requestAnimationFrame(l),!(E-g<(d?42:90))){g=E,o.fillStyle=d?"rgba(12, 16, 13, 0.14)":"rgba(12, 16, 13, 0.26)",o.fillRect(0,0,a.width,a.height),o.fillStyle=d?"rgba(110, 231, 135, 0.52)":"rgba(110, 231, 135, 0.16)",o.font='13px "Courier Prime", monospace';for(let A=0;A<p.length;A++)o.fillText(T[Math.floor(Math.random()*T.length)],A*22,p[A]*20),p[A]*20>a.height&&Math.random()>.968&&(p[A]=0),p[A]+=d?1.15:.6}};return c=requestAnimationFrame(l),t.push(()=>{cancelAnimationFrame(c),window.removeEventListener("resize",w)}),{toggle(){return d=!d,a.classList.toggle("is-boosted",d),d}}},m=(a,o,c,d,T)=>{const p=w=>{const g=document.createElement("div");g.className="term-cli-out",g.innerHTML=w,c.appendChild(g),c.scrollTop=c.scrollHeight};a?.addEventListener("submit",w=>{w.preventDefault();const g=(o.value||"").trim();if(o.value="",!g)return;const l=g.toLowerCase();if(p(`<span class="term-prompt">$</span> ${g.replace(/</g,"&lt;")}`),l==="help")p('commands: <span class="term-hi">neofetch</span>, <span class="term-hi">ls</span>, <span class="term-hi">matrix</span>, <span class="term-hi">cd photos</span>, <span class="term-hi">cd code</span>, <span class="term-hi">cd scripts</span>, <span class="term-hi">cd music</span>, <span class="term-hi">cd films</span>, <span class="term-hi">themes</span>, <span class="term-hi">original</span>, <span class="term-hi">clear</span>');else if(l==="ls")p(`drwxr-xr-x  <a href="${d.base}/?zoom=1">photos/</a>  <a href="${d.base}/code.html">code/</a>  <a href="${d.base}/scripts/index.html">scripts/</a>  <a href="${d.base}/music.html">music/</a>  <a href="${d.base}/film.html">films/</a>`);else if(l==="neofetch")p(`<pre class="term-mini-neo"> █████╗ ██████╗    visitor@averybeuth.xyz
██╔══██╗██╔══██╗   ----------------------
███████║██████╔╝   owner   Avery Beuth
██╔══██║██╔══██╗   path    ~/${d.slug}
██║  ██║██████╔╝   shell   zsh 5.9 (web)
╚═╝  ╚═╝╚═════╝    theme   terminal [pure-text]</pre>`);else if(l==="matrix"){const E=T.toggle();p(E?"[OK] matrix rain: overdrive":"[OK] matrix rain: ambient")}else l==="clear"?c.innerHTML="":l==="themes"?S(!0):l==="original"||l==="exit"?C("original"):l==="cd code"||l==="code"?window.location.href=`${d.base}/code.html`:l==="cd music"||l==="music"?window.location.href=`${d.base}/music.html`:l==="cd films"||l==="cd film"||l==="films"?window.location.href=`${d.base}/film.html`:l==="cd scripts"||l==="scripts"?window.location.href=`${d.base}/scripts/index.html`:l==="cd photos"||l==="photos"?window.location.href=`${d.base}/?zoom=1`:p(`zsh: command not found: ${g.replace(/</g,"&lt;")} — type <span class="term-hi">help</span>`)})},h=()=>{const a=q(),o=Date.now(),c=r(),d=document.createElement("div");d.className="term-winbar",d.setAttribute("data-theme-injected","1"),d.innerHTML=`
      <div class="term-dots">
        <button type="button" class="term-dot is-red" data-t-original title="Back to Original"></button>
        <span class="term-dot is-yellow"></span>
        <span class="term-dot is-green"></span>
      </div>
      <div class="term-winbar-title">visitor@averybeuth.xyz: ~/${a.slug} &mdash; zsh</div>
      <div class="term-winbar-right">
        <span class="term-uptime" id="termUptime">up 00:00</span>
        <button type="button" data-t-matrix>[matrix]</button>
        <button type="button" data-t-themes>[themes]</button>
        <button type="button" data-t-original>[original]</button>
      </div>
    `,document.body.prepend(d);const T=setInterval(()=>{const p=document.getElementById("termUptime");if(!p)return;const w=Math.floor((Date.now()-o)/1e3);p.textContent=`up ${String(Math.floor(w/60)).padStart(2,"0")}:${String(w%60).padStart(2,"0")}`},1e3);if(t.push(()=>clearInterval(T)),$()){const p=document.createElement("main");p.className="theme-home theme-home-terminal",p.setAttribute("data-theme-injected","1"),p.innerHTML=`
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
          <p class="term-home-bio"><span class="term-k">bio:</span> photographer, filmmaker, composer &amp; developer from nz. click a folder or type <span class="term-hi">help</span> below. note: <a href="./?zoom=1">photos/</a> always opens the 3d gallery.</p>
          <div class="term-cli-log" id="termCliLog"></div>
          <form class="term-cli-form" id="termCliForm" autocomplete="off">
            <label class="term-prompt" for="termCliInput">visitor@averybeuth.xyz:~$</label>
            <input id="termCliInput" class="term-cli-input" type="text" spellcheck="false" placeholder="help" />
          </form>
        </div>
      `,document.body.appendChild(p);const w=p.querySelector("#termTyped");let g=0;const l=setInterval(()=>{g++,w&&(w.textContent="neofetch".slice(0,g)),g>=8&&clearInterval(l)},45);t.push(()=>clearInterval(l)),m(p.querySelector("#termCliForm"),p.querySelector("#termCliInput"),p.querySelector("#termCliLog"),a,c)}else{const p=document.querySelector(".page-wrap");if(p){const g=document.createElement("section");g.className="term-console",g.setAttribute("data-theme-injected","1"),g.innerHTML=`
          <div class="term-boot-line">
            <span class="term-prompt">visitor@averybeuth.xyz:~/${a.slug}$</span>
            <span class="term-typed" id="termTyped"></span><span class="term-caret"></span>
          </div>
          <div class="term-boot-status" id="termBootStatus"></div>
          <div class="term-cli-log" id="termCliLog"></div>
          <form class="term-cli-form" id="termCliForm" autocomplete="off">
            <label class="term-prompt" for="termCliInput">visitor@averybeuth.xyz:~/${a.slug}$</label>
            <input id="termCliInput" class="term-cli-input" type="text" spellcheck="false" placeholder="help | ls | neofetch | matrix | cd music" />
          </form>
        `,p.prepend(g);const l=g.querySelector("#termTyped"),E=g.querySelector("#termBootStatus");let A=0;const D=setInterval(()=>{if(A++,l&&(l.textContent=a.cmd.slice(0,A)),A>=a.cmd.length){clearInterval(D);const N=document.querySelectorAll(".project-card, .album-row, .script-card, .film-card").length;E&&(E.textContent=N>0?`total ${N} — pure-text terminal listing`:`buffer ~/${a.slug} mounted`)}},26);t.push(()=>clearInterval(D)),m(g.querySelector("#termCliForm"),g.querySelector("#termCliInput"),g.querySelector("#termCliLog"),a,c)}const w=[...document.querySelectorAll(".project-card, .album-row, .script-card, .film-card")];w.forEach((g,l)=>g.style.setProperty("--term-i",String(Math.min(l,16)))),t.push(()=>w.forEach(g=>g.style.removeProperty("--term-i")))}document.querySelectorAll("[data-t-matrix]").forEach(p=>p.addEventListener("click",()=>c.toggle())),document.querySelectorAll("[data-t-themes]").forEach(p=>p.addEventListener("click",()=>S())),document.querySelectorAll("[data-t-original]").forEach(p=>p.addEventListener("click",()=>C("original")))},u=()=>{const a=q(),o=document.createElement("div");o.className="aero-bg",o.setAttribute("data-theme-injected","1"),o.setAttribute("aria-hidden","true"),o.innerHTML=`
      <span class="aero-bubble b1"></span>
      <span class="aero-bubble b2"></span>
      <span class="aero-bubble b3"></span>
      <span class="aero-bubble b4"></span>
      <span class="aero-bubble b5"></span>
      <span class="aero-bubble b6"></span>
    `,document.body.prepend(o);const c=document.createElement("nav");c.className="aero-desktop-icons",c.setAttribute("data-theme-injected","1"),c.setAttribute("aria-label","Desktop shortcuts"),c.innerHTML=`
      <a class="aero-d-icon ${a.slug==="home"?"is-current":""}" href="${a.base}/">
        <span class="aero-d-glyph">🏠</span><span>Home</span>
      </a>
      <a class="aero-d-icon" href="${a.base}/?zoom=1">
        <span class="aero-d-glyph">📷</span><span>Photos</span>
      </a>
      <a class="aero-d-icon ${a.slug==="code"?"is-current":""}" href="${a.base}/code.html">
        <span class="aero-d-glyph">📁</span><span>Code</span>
      </a>
      <a class="aero-d-icon ${a.slug.startsWith("scripts")?"is-current":""}" href="${a.base}/scripts/index.html">
        <span class="aero-d-glyph">📄</span><span>Scripts</span>
      </a>
      <a class="aero-d-icon ${a.slug==="music"?"is-current":""}" href="${a.base}/music.html">
        <span class="aero-d-glyph">🎵</span><span>Music</span>
      </a>
      <a class="aero-d-icon ${a.slug==="films"?"is-current":""}" href="${a.base}/film.html">
        <span class="aero-d-glyph">🎞️</span><span>Films</span>
      </a>
      <button type="button" class="aero-d-icon" data-a-notes>
        <span class="aero-d-glyph">📝</span><span>About.txt</span>
      </button>
      <button type="button" class="aero-d-icon" data-a-themes>
        <span class="aero-d-glyph">🎨</span><span>Themes</span>
      </button>
      <button type="button" class="aero-d-icon" data-a-original>
        <span class="aero-d-glyph">⏻</span><span>Original</span>
      </button>
    `,document.body.appendChild(c);const d=document.createElement("aside");d.className="aero-notepad",d.setAttribute("data-theme-injected","1"),d.hidden=!0,d.innerHTML=`
      <div class="aero-win-titlebar aero-note-handle">
        <span class="aero-win-title">About.txt &mdash; Notepad</span>
        <div class="aero-win-btns">
          <button type="button" class="aero-win-btn is-close" data-close-note>&times;</button>
        </div>
      </div>
      <div class="aero-note-body">
        <p><strong>Avery Beuth</strong> (@avery.beuth)</p>
        <p>Photographer, filmmaker, composer &amp; developer from Aotearoa.</p>
        <p>Drag any window by its glass titlebar. Double-click a titlebar to re-center!</p>
        <p><a href="https://github.com/averywsc" target="_blank" rel="noopener">github.com/averywsc</a> &middot; <a href="mailto:averybeuth3@gmail.com">averybeuth3@gmail.com</a></p>
      </div>
    `,document.body.appendChild(d),t.push(R(d,d.querySelector(".aero-note-handle"))),d.querySelector("[data-close-note]")?.addEventListener("click",()=>{d.hidden=!0});let T=null;if($()){const l=document.createElement("div");l.className="theme-home theme-home-frutiger",l.setAttribute("data-theme-injected","1"),l.innerHTML=`
        <section class="aero-home-window" id="aeroMainWin">
          <div class="aero-win-titlebar aero-main-handle">
            <span class="aero-win-title">Avery Beuth &mdash; Windows Internet Explorer</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-a-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-a-original title="Back to Original">&times;</button>
            </div>
          </div>
          <div class="aero-addr-bar">
            <div class="aero-nav-orbs" aria-hidden="true"><span>◀</span><span>▶</span></div>
            <div class="aero-url-box">https://averybeuth.xyz/</div>
            <button type="button" class="aero-tool-btn" data-a-themes>Themes</button>
          </div>
          <div class="aero-fav-bar">
            <a href="./?zoom=1">★ Photos (3D)</a>
            <a href="./code.html">★ Code</a>
            <a href="./scripts/index.html">★ Scripts</a>
            <a href="./music.html">★ Music</a>
            <a href="./film.html">★ Films</a>
            <a href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">★ Instagram</a>
          </div>
          <div class="aero-web2-banner">
            <div class="aero-web2-left">
              <span class="aero-web2-logo">avery<strong>beuth</strong></span>
              <span class="aero-web2-beta">beta</span>
            </div>
            <button type="button" class="aero-web2-pill" data-a-themes>6 themes ▾</button>
          </div>
          <div class="aero-home-content">
            <div class="aero-hero-card">
              <div>
                <h1>Welcome to my homepage!</h1>
                <p>Photographs, short films, screenplays, music, and open-source software by Avery Beuth. Drag this window around the desktop!</p>
                <div class="aero-hero-btns">
                  <a class="aero-cta" href="./?zoom=1">Explore 3D Photos &raquo;</a>
                  <a class="aero-cta is-blue" href="./code.html">Browse Code &raquo;</a>
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
                <div class="aero-box-head">Quick Links</div>
                <div class="aero-link-btns">
                  <a class="aero-green-btn" href="./code.html">Code &amp; Apps (89)</a>
                  <a class="aero-green-btn" href="./music.html">Music &amp; OSTs</a>
                  <a class="aero-green-btn" href="./film.html">Short Films</a>
                  <a class="aero-green-btn" href="./scripts/index.html">Screenplays</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      `,document.body.appendChild(l),T=l.querySelector("#aeroMainWin"),t.push(R(T,l.querySelector(".aero-main-handle")))}else{const l=document.querySelector(".site-main");if(l){T=l;const E=document.createElement("div");E.className="aero-browser-chrome",E.setAttribute("data-theme-injected","1"),E.innerHTML=`
          <div class="aero-win-titlebar aero-main-handle">
            <span class="aero-win-title">Avery Beuth &mdash; ${a.title} &mdash; Windows Internet Explorer</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-a-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-a-original title="Back to Original">&times;</button>
            </div>
          </div>
          <div class="aero-addr-bar">
            <div class="aero-nav-orbs" aria-hidden="true"><span>◀</span><span>▶</span></div>
            <div class="aero-url-box">https://averybeuth.xyz/${a.slug}</div>
            <button type="button" class="aero-tool-btn" data-a-themes>Themes</button>
          </div>
          <div class="aero-fav-bar">
            <a href="${a.base}/">★ Home</a>
            <a href="${a.base}/?zoom=1">★ Photos</a>
            <a href="${a.base}/code.html">★ Code</a>
            <a href="${a.base}/scripts/index.html">★ Scripts</a>
            <a href="${a.base}/music.html">★ Music</a>
            <a href="${a.base}/film.html">★ Films</a>
          </div>
          <div class="aero-web2-banner">
            <div class="aero-web2-left">
              <span class="aero-web2-logo">avery<strong>beuth</strong></span>
              <span class="aero-web2-beta">beta</span>
            </div>
            <button type="button" class="aero-web2-pill" data-a-themes>6 themes ▾</button>
          </div>
        `,l.prepend(E),t.push(R(l,E.querySelector(".aero-main-handle")))}}const p=document.createElement("footer");p.className="aero-taskbar-global",p.setAttribute("data-theme-injected","1"),p.innerHTML=`
      <button type="button" class="aero-start-orb" data-a-themes aria-label="Start / Themes">❖</button>
      <div class="aero-task-list">
        <button type="button" class="aero-task-tab is-active" data-a-restore>${a.title} - Internet</button>
        <button type="button" class="aero-task-tab" data-a-notes>About.txt</button>
        <button type="button" class="aero-task-tab" data-a-original>Original site</button>
      </div>
      <div class="aero-tray-clock">
        <span id="aeroTime"></span>
        <span id="aeroDate"></span>
      </div>
    `,document.body.appendChild(p);const w=()=>{const l=new Date,E=document.getElementById("aeroTime"),A=document.getElementById("aeroDate");E&&(E.textContent=l.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),A&&(A.textContent=l.toLocaleDateString([],{day:"2-digit",month:"2-digit",year:"numeric"}))};w();const g=setInterval(w,15e3);t.push(()=>clearInterval(g)),document.querySelectorAll("[data-a-min]").forEach(l=>l.addEventListener("click",()=>{T?.classList.add("is-minimized")})),document.querySelectorAll("[data-a-restore]").forEach(l=>l.addEventListener("click",()=>{T?.classList.remove("is-minimized")})),document.querySelectorAll("[data-a-notes]").forEach(l=>l.addEventListener("click",()=>{d.hidden=!d.hidden})),document.querySelectorAll("[data-a-themes]").forEach(l=>l.addEventListener("click",()=>S())),document.querySelectorAll("[data-a-original]").forEach(l=>l.addEventListener("click",()=>C("original")))},f=()=>{const a=document.createElement("div");if(a.className="silly-ribbon",a.setAttribute("data-theme-injected","1"),a.innerHTML=`
      <div class="silly-marquee">
        <span>★ WELCOME TO AVERY'S SUPER COOL WEBSITE!! ★ 100% REAL COMIC SANS ★ VERY PROFESSIONAL PORTFOLIO ★ CLICK EVERYTHING ★ WOW!! ★</span>
        <span>★ WELCOME TO AVERY'S SUPER COOL WEBSITE!! ★ 100% REAL COMIC SANS ★ VERY PROFESSIONAL PORTFOLIO ★ CLICK EVERYTHING ★ WOW!! ★</span>
      </div>
    `,document.body.prepend(a),$()){const o=document.createElement("main");o.className="theme-home theme-home-silly",o.setAttribute("data-theme-injected","1"),o.innerHTML=`
        <div class="silly-home-card">
          <span class="silly-sticker">WOW!!</span>
          <h1 class="silly-hero-title">hi welcome to avery's website!!!</h1>
          <p class="silly-hero-sub">i make photos, cool apps, short films, music &amp; screenplays :)</p>
          <nav class="silly-home-nav">
            <a class="silly-pill is-pink" href="./?zoom=1">📷 3D PHOTOS!</a>
            <a class="silly-pill is-blue" href="./code.html">💻 CODE STUFF!</a>
            <a class="silly-pill is-green" href="./scripts/index.html">📝 SCRIPTS!</a>
            <a class="silly-pill is-orange" href="./music.html">🎵 MUSIC!</a>
            <a class="silly-pill is-purple" href="./film.html">🎬 FILMS!</a>
          </nav>
          <div class="silly-home-foot">
            <button type="button" class="silly-mini-btn" data-s-themes>🎨 change theme</button>
            <button type="button" class="silly-mini-btn" data-s-original>go back to serious mode</button>
          </div>
        </div>
      `,document.body.appendChild(o),o.querySelector("[data-s-themes]")?.addEventListener("click",()=>S()),o.querySelector("[data-s-original]")?.addEventListener("click",()=>C("original"))}},y=()=>{const a=q();if($()){const o=document.createElement("main");o.className="theme-home theme-home-paper",o.setAttribute("data-theme-injected","1"),o.innerHTML=`
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
      `,document.body.appendChild(o),o.querySelector("[data-p-themes]")?.addEventListener("click",()=>S()),o.querySelector("[data-p-original]")?.addEventListener("click",()=>C("original"))}else{const o=document.querySelector(".page-wrap");if(!o)return;const c=document.createElement("div");c.className="paper-sub-masthead",c.setAttribute("data-theme-injected","1"),c.innerHTML=`<span>THE AVERY CHRONICLE</span><span>SECTION: ${a.title.toUpperCase()}</span><span>ARCHIVAL PRINT</span>`,o.prepend(c)}},n=()=>{const a=q();if($()){const o=document.createElement("main");o.className="theme-home theme-home-cobalt",o.setAttribute("data-theme-injected","1"),o.innerHTML=`
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
      `,document.body.appendChild(o),o.querySelector("[data-c-themes]")?.addEventListener("click",()=>S()),o.querySelector("[data-c-original]")?.addEventListener("click",()=>C("original"))}else{const o=document.querySelector(".page-wrap");if(!o)return;const c=document.createElement("div");c.className="cobalt-titleblock",c.setAttribute("data-theme-injected","1"),c.innerHTML=`
        <span>DWG NO. AB-${a.slug.toUpperCase()}</span>
        <span>LAYER: ${a.title.toUpperCase()} // SCALE 1:1</span>
        <span>CYANOTYPE ARCHIVE // 2026</span>
      `,o.prepend(c)}},x=a=>{i(),a==="terminal"?h():a==="frutiger"?u():a==="silly"?f():a==="paper"?y():a==="cobalt"&&n()},b=a=>{if(!e)return;const o=e.querySelector(".themes-mini"),c=e.querySelector(".themes-meta-num"),d=e.querySelector(".themes-meta-name"),T=e.querySelector(".themes-meta-desc"),p=e.querySelector(".themes-in-use");o&&(o.className=`themes-mini ${a.previewClass}`,c.textContent=a.num,d.textContent=a.name,T.textContent=a.desc,p.style.visibility=a.id===s?"visible":"hidden")},v=()=>{e&&e.querySelectorAll(".theme-tile").forEach(a=>{a.classList.toggle("is-active",a.dataset.themeId===s)})},I=()=>{!e||e.hidden||(e.classList.remove("is-open"),setTimeout(()=>{e&&(e.hidden=!0)},180))},C=a=>{const o=s;if(s=V(a),$()&&s==="original"&&o!=="original"){window.location.reload();return}x(s),v(),b(L.find(c=>c.id===s)||L[0])},S=(a=null)=>{if(e||(e=document.createElement("aside"),e.className="themes-popover",e.setAttribute("role","dialog"),e.setAttribute("aria-label","Site themes"),e.hidden=!0,e.innerHTML=`
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
          ${L.map(c=>`
            <button type="button" class="theme-tile" data-theme-id="${c.id}">
              <div class="theme-tile-top">
                <span class="theme-tile-num">${c.num}</span>
                <span class="theme-tile-badge">IN USE</span>
              </div>
              <div class="theme-tile-name">${c.label}</div>
            </button>
          `).join("")}
        </div>
        <div class="themes-footer">
          <span class="themes-kbd-hint"><span class="themes-kbd">1-6</span>pick <span class="themes-kbd" style="margin-left:6px;">esc</span>close</span>
          <span class="themes-touch-hint">tap a theme</span>
          <button type="button" class="themes-close-btn" data-close-themes>close</button>
        </div>
      `,e.addEventListener("click",c=>{if(c.target.closest("[data-close-themes]")){I();return}const d=c.target.closest(".theme-tile");d&&C(d.dataset.themeId)}),e.addEventListener("mouseover",c=>{const d=c.target.closest(".theme-tile");if(!d)return;const T=L.find(p=>p.id===d.dataset.themeId);T&&b(T)}),e.addEventListener("mouseleave",()=>{b(L.find(c=>c.id===s)||L[0])}),document.addEventListener("pointerdown",c=>{!e||e.hidden||c.target.closest(".themes-popover, .themes-trigger, .themes-mobile-trigger, [data-t-themes], [data-a-themes], [data-s-themes], [data-p-themes], [data-c-themes]")||I()}),window.addEventListener("keydown",c=>{if(!e||e.hidden)return;if(c.key==="Escape"){c.preventDefault(),I();return}const d=Number(c.key);d>=1&&d<=L.length&&!c.target.closest("input, textarea")&&(c.preventDefault(),C(L[d-1].id))}),document.body.appendChild(e)),!(a!==null?a:e.hidden)){I();return}v(),b(L.find(c=>c.id===s)||L[0]),e.hidden=!1,requestAnimationFrame(()=>e.classList.add("is-open"))};x(s);const k=document.querySelector(".rail-meta"),M=document.querySelector(".rail-top-row");if(k&&!k.querySelector(".themes-trigger")){const a=document.createElement("button");if(a.type="button",a.className="themes-trigger",a.textContent="themes",a.addEventListener("click",()=>S()),k.insertBefore(a,k.firstChild),M&&!M.querySelector(".themes-mobile-trigger")){const o=document.createElement("button");o.type="button",o.className="themes-mobile-trigger",o.setAttribute("aria-label","Open site themes"),o.textContent="themes",o.addEventListener("click",()=>S()),M.appendChild(o)}}}export{K as S,J as a,Q as b,W as c,F as i,Z as s};
