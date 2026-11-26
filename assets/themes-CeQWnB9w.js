class ht{constructor(){this.on=!1,this.sfxOn=!0,this.ctx=null}ensureCtx(){if(this.ctx)return this.ctx;const t=this.ctx=new(window.AudioContext||window.webkitAudioContext),i=t.createDynamicsCompressor();this.analyser=t.createAnalyser(),this.analyser.fftSize=128,this.analyser.smoothingTimeConstant=.86,this._fftData=new Uint8Array(this.analyser.frequencyBinCount),i.connect(this.analyser).connect(t.destination),this.master=t.createGain(),this.master.gain.value=0,this.master.connect(i),this.sfxMaster=t.createGain(),this.sfxMaster.gain.value=.85,this.sfxMaster.connect(i);const l=t.sampleRate*4,o=t.createBuffer(1,l,t.sampleRate),v=o.getChannelData(0);let f=0,r=0,S=0;for(let E=0;E<l;E++){const c=Math.random()*2-1;f=.997*f+c*.029,r=.985*r+c*.032,S=.95*S+c*.048,v[E]=(f+r+S)*.35}return this.noiseBuf=o,t}unlockSfx(){if(!this.sfxOn)return;const t=this.ensureCtx();t.state==="suspended"&&t.resume().catch(()=>{})}init(){const t=this.ensureCtx();if(this._musicInit)return;this._musicInit=!0,this.filter=t.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=680,this.filter.Q.value=.4,this.filter.connect(this.master),[[110,.055],[164.81,.036],[220.4,.024],[246.94,.016],[277.18,.009],[329.63,.008]].forEach(([v,f],r)=>{const S=t.createOscillator();S.type=r===1||r===2?"triangle":"sine",S.frequency.value=v,S.detune.value=(r-2.5)*3.5;const E=t.createGain();E.gain.value=f;const c=t.createOscillator();c.frequency.value=.027+r*.014;const D=t.createGain();D.gain.value=f*.55,c.connect(D).connect(E.gain),S.connect(E).connect(this.filter),S.start(),c.start()});const i=t.createBufferSource();i.buffer=this.noiseBuf,i.loop=!0;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=380,l.Q.value=.6;const o=t.createGain();o.gain.value=.05,i.connect(l).connect(o).connect(this.master),i.start()}toggle(){this.init(),this.on=!this.on;const t=this.ctx.currentTime;return this.on&&this.ctx.resume(),this.master.gain.cancelScheduledValues(t),this.master.gain.setValueAtTime(this.master.gain.value,t),this.master.gain.linearRampToValueAtTime(this.on?.85:0,t+(this.on?1.4:.8)),this.on}setBrightness(t){!this.ctx||!this.on||!this.filter||this.filter.frequency.setTargetAtTime(420+t*1600,this.ctx.currentTime,.8)}getLevel(){if(!this.analyser||!this.on||this.ctx?.state!=="running")return 0;this.analyser.getByteFrequencyData(this._fftData);let t=0;const i=Math.min(18,this._fftData.length);for(let l=0;l<i;l++)t+=this._fftData[l];return Math.min(1,t/(i*110))}shutter(){if(!this.sfxOn||!this.ctx||this.ctx.state!=="running")return;const t=this.ctx,i=t.currentTime,l=(f,r,S)=>{const E=t.createBufferSource();E.buffer=this.noiseBuf;const c=t.createBiquadFilter();c.type="bandpass",c.frequency.value=S,c.Q.value=1.4;const D=t.createGain();D.gain.setValueAtTime(0,f),D.gain.linearRampToValueAtTime(r,f+.002),D.gain.exponentialRampToValueAtTime(1e-4,f+.05),E.connect(c).connect(D).connect(this.sfxMaster),E.start(f,Math.random()*3,.06)};l(i,.95,3200),l(i+.055,.62,2400);const o=t.createOscillator();o.frequency.value=95;const v=t.createGain();v.gain.setValueAtTime(0,i),v.gain.linearRampToValueAtTime(.14,i+.004),v.gain.exponentialRampToValueAtTime(1e-4,i+.08),o.connect(v).connect(this.sfxMaster),o.start(i),o.stop(i+.1)}tick(t=.5){if(!this.sfxOn||!this.ctx||this.ctx.state!=="running")return;const i=performance.now();if(this._lastTick&&i-this._lastTick<65)return;this._lastTick=i;const l=this.ctx,o=l.currentTime,v=l.createBufferSource();v.buffer=this.noiseBuf;const f=l.createBiquadFilter();f.type="bandpass",f.frequency.value=1350+t*850,f.Q.value=2;const r=l.createGain();r.gain.setValueAtTime(0,o),r.gain.linearRampToValueAtTime(.42,o+.002),r.gain.exponentialRampToValueAtTime(1e-4,o+.028),v.connect(f).connect(r).connect(this.sfxMaster),v.start(o,Math.random()*3,.035);const S=l.createOscillator();S.type="sine",S.frequency.setValueAtTime(210+t*90,o),S.frequency.exponentialRampToValueAtTime(95,o+.028);const E=l.createGain();E.gain.setValueAtTime(0,o),E.gain.linearRampToValueAtTime(.12,o+.002),E.gain.exponentialRampToValueAtTime(1e-4,o+.032),S.connect(E).connect(this.sfxMaster),S.start(o),S.stop(o+.04)}whoosh(){if(!this.sfxOn||!this.ctx||this.ctx.state!=="running")return;const t=this.ctx,i=t.currentTime,l=t.createBufferSource();l.buffer=this.noiseBuf;const o=t.createBiquadFilter();o.type="lowpass",o.Q.value=.75,o.frequency.setValueAtTime(240,i),o.frequency.exponentialRampToValueAtTime(860,i+.32),o.frequency.exponentialRampToValueAtTime(220,i+.95);const v=t.createGain();v.gain.setValueAtTime(0,i),v.gain.linearRampToValueAtTime(.55,i+.22),v.gain.exponentialRampToValueAtTime(1e-4,i+1),l.connect(o).connect(v).connect(this.sfxMaster),l.start(i,Math.random()*2,1.05)}}const it='a, button, [role="button"], input, textarea, select, summary, .project-thumb-wrap, .album-cover-wrap, .script-card, .music-vinyl-disc, .aero-win-titlebar, .aero-win-handle, body.is-locked .finale.is-live',_e={original:{ring:'<svg viewBox="0 0 64 64" width="64" height="64" shape-rendering="geometricPrecision"><circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" stroke-width="2" /></svg>',dot:'<svg viewBox="0 0 16 16" width="16" height="16" shape-rendering="geometricPrecision"><circle cx="8" cy="8" r="3" fill="currentColor" /></svg>',arrow:!1},terminal:{ring:'<svg viewBox="0 0 64 64" width="64" height="64" shape-rendering="crispEdges"><path d="M18 10H10V18M46 10H54V18M10 46V54H18M54 46V54H46" fill="none" stroke="currentColor" stroke-width="2.4" /></svg>',dot:'<svg viewBox="0 0 16 16" width="16" height="16" shape-rendering="crispEdges"><rect x="4" y="2" width="8" height="12" fill="currentColor" /></svg>',arrow:!1},frutiger:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5" /></svg>',dot:'<svg viewBox="0 0 24 24" width="24" height="24"><path d="M3 2L3 19.5L7.6 15.2L10.8 22L13.5 20.7L10.3 14L16.4 14L3 2Z" fill="#ffffff" stroke="#0c1c2c" stroke-width="1.6" stroke-linejoin="round"/></svg>',arrow:!0},silly:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="7 6" stroke-linecap="round" /></svg>',dot:'<svg viewBox="0 0 28 28" width="28" height="28"><path d="M14 2L17.4 9.6L25.6 10.4L19.4 15.9L21.2 24L14 19.8L6.8 24L8.6 15.9L2.4 10.4L10.6 9.6Z" fill="#ff4fa3" stroke="#181818" stroke-width="2" stroke-linejoin="round"/></svg>',arrow:!1},paper:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-width="1.2" /></svg>',dot:'<svg viewBox="0 0 18 18" width="18" height="18"><path d="M9 1L14 9L9 17L4 9Z" fill="currentColor" /></svg>',arrow:!1},cobalt:{ring:'<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="25" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 4" /><path d="M32 3V13M32 51V61M3 32H13M51 32H61" stroke="currentColor" stroke-width="1.6" /></svg>',dot:'<svg viewBox="0 0 18 18" width="18" height="18"><path d="M9 2V16M2 9H16" stroke="currentColor" stroke-width="1.6" /><circle cx="9" cy="9" r="2" fill="currentColor" /></svg>',arrow:!1}};function ot({onMove:a,onLeave:t}={}){if(!window.matchMedia("(pointer: fine) and (hover: hover)").matches)return null;document.documentElement.classList.add("has-cursor");let l=document.getElementById("cursor");l||(l=document.createElement("div"),l.id="cursor",l.className="cursor",l.setAttribute("aria-hidden","true"),document.body.appendChild(l)),l.innerHTML='<span class="cursor__ring" aria-hidden="true"></span><span class="cursor__dot" aria-hidden="true"></span>';const o=l.querySelector(".cursor__ring"),v=l.querySelector(".cursor__dot");let f="",r=!1;const S=()=>{const A=document.documentElement.getAttribute("data-theme")||"original";if(A===f)return;f=A;const H=_e[A]||_e.original;r=!!H.arrow,o.innerHTML=H.ring,v.innerHTML=H.dot,l.classList.toggle("is-arrow",r),o.style.color="",v.style.color=""};S(),new MutationObserver(S).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});const c={x:-100,y:-100,rx:-100,ry:-100,dx:-100,dy:-100,hover:0,uiHover:!1,visible:!1,hasInit:!1,sillyRot:0};window.addEventListener("pointermove",A=>{A.pointerType&&A.pointerType!=="mouse"||(c.x=A.clientX,c.y=A.clientY,c.hasInit||(c.rx=c.dx=c.x,c.ry=c.dy=c.y,c.hasInit=!0),c.visible=!0,c.uiHover=!!A.target?.closest?.(it),l.classList.add("is-on"),l.classList.toggle("is-clickable",c.uiHover),a?.(A,c))},{passive:!0}),window.addEventListener("pointerdown",A=>{if(A.pointerType&&A.pointerType!=="mouse")return;c.x=c.dx=A.clientX,c.y=c.dy=A.clientY;const H=document.createElement("span");H.className="cursor__pulse",H.style.left=`${A.clientX}px`,H.style.top=`${A.clientY}px`,H.innerHTML=(_e[f]||_e.original).ring,document.body.appendChild(H),requestAnimationFrame(()=>H.classList.add("is-active")),setTimeout(()=>H.remove(),380)},{passive:!0});const D=()=>{c.visible=!1,c.uiHover=!1,l.classList.remove("is-on","is-clickable"),t?.()};return document.documentElement.addEventListener("mouseleave",D),window.addEventListener("blur",D),{el:l,state:c,update(A,{photoHover:H=!1,velocity:R=0,tintColor:q=null}={}){if(!c.hasInit)return;const me=1-Math.exp(-A*16);c.rx+=(c.x-c.rx)*me,c.ry+=(c.y-c.ry)*me,c.dx=c.x,c.dy=c.y;const fe=c.uiHover?1:H?.52:0;c.hover+=(fe-c.hover)*(1-Math.exp(-A*16));const p=Math.min(1,Math.abs(R)/40),n=r?.42+c.hover*.25:.5+c.hover*.42+p*.12,m=r?c.uiHover?1.1:1:c.uiHover?1.28:H?.88:1;f==="silly"?(c.sillyRot=(c.sillyRot+A*(c.uiHover?160:55))%360,o.style.transform=`translate3d(${c.rx.toFixed(1)}px, ${c.ry.toFixed(1)}px, 0) rotate(${c.sillyRot.toFixed(1)}deg) scale(${n.toFixed(3)})`,v.style.transform=`translate3d(${c.dx.toFixed(1)}px, ${c.dy.toFixed(1)}px, 0) rotate(${(-c.sillyRot*.45).toFixed(1)}deg) scale(${m.toFixed(3)})`):(o.style.transform=`translate3d(${c.rx.toFixed(1)}px, ${c.ry.toFixed(1)}px, 0) scale(${n.toFixed(3)}, ${(n*(1-p*.08)).toFixed(3)})`,v.style.transform=`translate3d(${c.dx.toFixed(1)}px, ${c.dy.toFixed(1)}px, 0) scale(${m.toFixed(3)})`),f==="original"&&q&&!c.uiHover?(o.style.color=q(.36+c.hover*.35),v.style.color=""):o.style.color&&(o.style.color="")}}}function mt(){const a=ot();if(!a)return;let t=performance.now();const i=l=>{const o=Math.min(.05,Math.max(.001,(l-t)/1e3));t=l,a.update(o),requestAnimationFrame(i)};requestAnimationFrame(i)}let Ke=!1;function Ge(a,t=2600){let i=document.getElementById("eggToast");i||(i=document.createElement("div"),i.id="eggToast",i.setAttribute("aria-hidden","true"),i.style.cssText=["position:fixed","left:50%","bottom:max(24px,env(safe-area-inset-bottom))","transform:translateX(-50%) translateY(8px)","z-index:9997","pointer-events:none",'font-family:"Dotmatri",ui-monospace,monospace',"font-size:13px","letter-spacing:0.1em","color:rgba(244,238,228,0.88)","background:rgba(11,12,15,0.82)","border:1px solid rgba(236,230,220,0.16)","padding:7px 14px","border-radius:999px","opacity:0","transition:opacity 0.35s ease,transform 0.35s ease","backdrop-filter:blur(8px)"].join(";"),document.body.appendChild(i)),i.textContent=a,requestAnimationFrame(()=>{i.style.opacity="1",i.style.transform="translateX(-50%) translateY(0)"}),clearTimeout(i._timer),i._timer=setTimeout(()=>{i.style.opacity="0",i.style.transform="translateX(-50%) translateY(8px)"},t)}function rt(){for(let t=0;t<42;t++){const i=document.createElement("span");i.setAttribute("aria-hidden","true");const l=10+Math.random()*80,o=3+Math.random()*5,v=1.6+Math.random()*1.4,f=Math.random()*.25,r=(Math.random()-.5)*140;i.style.cssText=["position:fixed",`left:${l}vw`,"top:-12px",`width:${o}px`,`height:${o}px`,"border-radius:50%","background:rgba(244,238,228,0.88)","box-shadow:0 0 8px rgba(244,238,228,0.45)","pointer-events:none","z-index:9998",`transition:transform ${v}s cubic-bezier(0.22,1,0.36,1) ${f}s,opacity ${v}s ease ${f}s`].join(";"),document.body.appendChild(i),requestAnimationFrame(()=>{i.style.transform=`translate(${r}px, ${window.innerHeight+30}px)`,i.style.opacity="0"}),setTimeout(()=>i.remove(),(v+f)*1e3+80)}}function lt(){let a=document.getElementById("eggCat");a||(a=document.createElement("div"),a.id="eggCat",a.setAttribute("aria-hidden","true"),a.style.cssText=["position:fixed","right:max(20px,env(safe-area-inset-right))","bottom:0","z-index:9996","pointer-events:none",'font-family:"Dotmatri",ui-monospace,monospace',"font-size:18px","letter-spacing:0.06em","color:rgba(244,238,228,0.9)","text-shadow:0 2px 14px rgba(0,0,0,0.9)","padding:10px 14px 12px","transform:translateY(100%)","transition:transform 0.45s cubic-bezier(0.22,1,0.36,1)"].join(";"),document.body.appendChild(a)),a.textContent="=^._.^=",requestAnimationFrame(()=>{a.style.transform="translateY(0)"}),clearTimeout(a._blink),clearTimeout(a._hide),a._blink=setTimeout(()=>{a.textContent="=^.-.^=  hi"},1100),a._hide=setTimeout(()=>{a.style.transform="translateY(100%)"},3800)}function ct(){const a=document.documentElement.classList.toggle("is-crt");let t=document.getElementById("crtOverlay"),i=document.getElementById("crtStyle");a&&!i&&(i=document.createElement("style"),i.id="crtStyle",i.textContent=["html.is-crt body{filter:contrast(1.1) brightness(1.04) saturate(1.08);}","html.is-crt h1,html.is-crt h2,html.is-crt .rail-brand,html.is-crt .mark{text-shadow:1px 0 0 rgba(255,60,90,0.38),-1px 0 0 rgba(70,220,255,0.38),0 0 10px rgba(244,238,228,0.22);}"].join(""),document.head.appendChild(i)),a&&!t?(t=document.createElement("div"),t.id="crtOverlay",t.setAttribute("aria-hidden","true"),t.style.cssText=["position:fixed","inset:0","pointer-events:none","z-index:9994","background:repeating-linear-gradient(to bottom,rgba(255,255,255,0.03) 0px,rgba(255,255,255,0.03) 1px,rgba(0,0,0,0.44) 2px,rgba(0,0,0,0.44) 3px),repeating-linear-gradient(to right,rgba(255,40,40,0.03) 0px,rgba(40,255,80,0.03) 1px,rgba(40,120,255,0.03) 2px,transparent 3px)","box-shadow:inset 0 0 110px rgba(0,0,0,0.72),inset 0 0 28px rgba(180,220,255,0.06)"].join(";"),document.body.appendChild(t)):a||(t?.remove(),i?.remove()),Ge(a?"crt on":"crt off")}function ce(){let a=document.getElementById("eggModal");if(!a){a=document.createElement("div"),a.id="eggModal",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-label","Secrets"),a.style.cssText=["position:fixed","inset:0","z-index:9999","display:flex","align-items:center","justify-content:center","padding:18px","background:rgba(8,9,13,0.84)","backdrop-filter:blur(14px)","-webkit-backdrop-filter:blur(14px)","opacity:0","transition:opacity 0.22s ease"].join(";");const t="background:rgba(236,230,220,0.035);border:1px solid rgba(236,230,220,0.1);border-radius:10px;padding:13px 15px;display:flex;flex-direction:column;gap:8px;",i="display:flex;align-items:baseline;justify-content:space-between;gap:8px;",l="font-family:'Dotmatri',ui-monospace,monospace;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#f6f2ea;margin:0;",o="font-family:ui-sans-serif,system-ui,sans-serif;font-size:10.5px;color:rgba(236,230,220,0.48);line-height:1.35;",v="display:grid;grid-template-columns:108px minmax(0,1fr);gap:5px 10px;font-size:11.8px;line-height:1.38;margin:0;",f="font-family:'Dotmatri',ui-monospace,monospace;color:rgba(244,238,228,0.92);",r="font-family:ui-sans-serif,system-ui,sans-serif;color:rgba(236,230,220,0.66);margin:0;";a.innerHTML=`
      <div style="width:min(960px,100%);max-height:90dvh;overflow-y:auto;background:#101217;border:1px solid rgba(236,230,220,0.16);border-radius:14px;padding:20px 22px 22px;color:rgba(236,230,220,0.92);box-shadow:0 32px 84px rgba(0,0,0,0.75);">
        <div style="display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:16px;">
          <div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;">
            <h2 style="font-family:'Dotmatri',ui-monospace,monospace;font-weight:400;font-size:21px;letter-spacing:0.06em;margin:0;">secrets</h2>
            <span style="font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;color:rgba(236,230,220,0.48);">every hidden trigger &amp; easter egg across all 6 modes</span>
          </div>
          <button type="button" data-close-eggs style="font-family:'Dotmatri',ui-monospace,monospace;font-size:13px;letter-spacing:0.08em;color:rgba(236,230,220,0.62);padding:4px 10px;border-radius:6px;background:rgba(236,230,220,0.06);cursor:pointer;">close</button>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(275px,1fr));gap:12px;">
          <section style="${t}">
            <div style="${i}"><h3 style="${l}">01 original &amp; global</h3></div>
            <div style="${o}">menu: faint "secrets" at bottom-left of sidebar</div>
            <dl style="${v}">
              <dt style="${f}">r</dt><dd style="${r}">fly to a random photo</dd>
              <dt style="${f}">&larr; / &rarr;</dt><dd style="${r}">step between photos</dd>
              <dt style="${f}">/</dt><dd style="${r}">focus search on code page</dd>
              <dt style="${f}">meow / cats</dt><dd style="${r}">dot-matrix cat peek</dd>
              <dt style="${f}">stars</dt><dd style="${r}">toggle cursor sparkles</dd>
              <dt style="${f}">crt</dt><dd style="${r}">toggle crt scanlines</dd>
              <dt style="${f}">&uarr;&uarr;&darr;&darr;&larr;&rarr;&larr;&rarr;ba</dt><dd style="${r}">dot confetti burst</dd>
            </dl>
          </section>

          <section style="${t}">
            <div style="${i}"><h3 style="${l}">02 terminal</h3></div>
            <div style="${o}">menu: type "secret" or "secrets" in PowerShell</div>
            <dl style="${v}">
              <dt style="${f}">ily / love u</dt><dd style="${r}">love u too &lt;3</dd>
              <dt style="${f}">cats / meow</dt><dd style="${r}">ascii cat says meow</dd>
              <dt style="${f}">matrix</dt><dd style="${r}">boost or dim the background rain</dd>
              <dt style="${f}">coffee</dt><dd style="${r}">brew a flat white</dd>
              <dt style="${f}">hack / ping</dt><dd style="${r}">movie hacker &amp; network ping</dd>
              <dt style="${f}">party</dt><dd style="${r}">rainbow prompt pulse</dd>
              <dt style="${f}">sudo / rm -rf</dt><dd style="${r}">forbidden commands</dd>
            </dl>
          </section>

          <section style="${t}">
            <div style="${i}"><h3 style="${l}">03 desktop</h3></div>
            <div style="${o}">menu: right-click wallpaper or inside About.txt</div>
            <dl style="${v}">
              <dt style="${f}">click bubbles</dt><dd style="${r}">pop bubbles &amp; watch them relocate</dd>
              <dt style="${f}">right-click</dt><dd style="${r}">sticky notes, spawn bubbles, refresh</dd>
              <dt style="${f}">recycle bin</dt><dd style="${r}">inspect &amp; empty deleted files</dd>
              <dt style="${f}">clock &times;3</dt><dd style="${r}">trigger classic Windows 7 BSOD</dd>
            </dl>
          </section>

          <section style="${t}">
            <div style="${i}"><h3 style="${l}">04 silly</h3></div>
            <div style="${o}">menu: click "best viewed in 800x600" in footer</div>
            <dl style="${v}">
              <dt style="${f}">poke smiley</dt><dd style="${r}">annoy it into sunglasses mode</dd>
              <dt style="${f}">click title</dt><dd style="${r}">wobble "avery beuth" heading</dd>
              <dt style="${f}">sign "avery"</dt><dd style="${r}">identity theft guestbook reply</dd>
              <dt style="${f}">dark mode</dt><dd style="${r}">cursed black-on-black mode</dd>
              <dt style="${f}">do not press</dt><dd style="${r}">tilt &amp; knock the whole site over</dd>
            </dl>
          </section>

          <section style="${t}">
            <div style="${i}"><h3 style="${l}">05 paper</h3></div>
            <div style="${o}">menu: click "VOL. IV" in the masthead dateline</div>
            <dl style="${v}">
              <dt style="${f}">masthead &times;3</dt><dd style="${r}">Extra Edition stamp &amp; new front photo</dd>
              <dt style="${f}">click auckland</dt><dd style="${r}">cycle live Auckland weather dispatch</dd>
            </dl>
          </section>

          <section style="${t}">
            <div style="${i}"><h3 style="${l}">06 cobalt</h3></div>
            <div style="${o}">menu: click "REV 2026" in the blueprint titleblock</div>
            <dl style="${v}">
              <dt style="${f}">scale 1:1</dt><dd style="${r}">toggle inverted Diazo Whiteprint</dd>
              <dt style="${f}">click a1-f1</dt><dd style="${r}">lock Auckland coordinate telemetry</dd>
            </dl>
          </section>
        </div>
      </div>
    `;const S=()=>{a.style.opacity="0",setTimeout(()=>{a.hidden=!0},240)};a.addEventListener("click",E=>{(E.target===a||E.target.closest("[data-close-eggs]"))&&S()}),window.addEventListener("keydown",E=>{E.key==="Escape"&&!a.hidden&&(E.preventDefault(),S())}),document.body.appendChild(a)}a.hidden=!1,requestAnimationFrame(()=>{a.style.opacity="1"})}function dt(){const a=document.querySelector(".rail-meta");if(!a||a.querySelector(".egg-trigger"))return;const t=document.createElement("button");t.type="button",t.className="egg-trigger",t.textContent="secrets",t.addEventListener("click",ce),a.appendChild(t)}function ft(){if(Ke)return;Ke=!0,console.log("%caverybeuth.xyz","font-family:monospace;font-size:14px;color:#f4eee4;"),dt();let a="";const t=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let i=0,l=!1,o=0,v=null;const f=(r,S,E=!1)=>{const c=document.createElement("span");c.setAttribute("aria-hidden","true");const D=E?["✦","✧","·"]:["✦","✧","⋆","+"],A=["rgba(255,250,235,0.95)","rgba(255,232,178,0.92)","rgba(222,238,255,0.9)"];c.textContent=D[Math.floor(Math.random()*D.length)];const H=(Math.random()-.5)*(E?18:44),R=(E?-16:10)+(Math.random()-.5)*28,q=(Math.random()-.5)*140,me=E?10+Math.random()*8:11+Math.random()*10,fe=E?1.5:.95,p=A[Math.floor(Math.random()*A.length)];c.style.cssText=["position:fixed",`left:${r}px`,`top:${S}px`,"transform:translate(-50%,-50%) scale(0.5) rotate(0deg)",'font-family:"Dotmatri",ui-monospace,monospace',`font-size:${me.toFixed(1)}px`,`color:${p}`,`text-shadow:0 0 10px ${p},0 0 20px rgba(255,244,210,0.45)`,"pointer-events:none","z-index:9995",`transition:transform ${fe}s cubic-bezier(0.22,1,0.36,1),opacity ${fe}s ease-out`].join(";"),document.body.appendChild(c),requestAnimationFrame(()=>{c.style.transform=`translate(calc(-50% + ${H}px), calc(-50% + ${R}px)) scale(1.15) rotate(${q}deg)`,c.style.opacity="0"}),setTimeout(()=>c.remove(),fe*1e3+60)};window.addEventListener("pointermove",r=>{if(!l)return;const S=performance.now();S-o<22||(o=S,f(r.clientX,r.clientY,!1))}),window.addEventListener("keydown",r=>{if(r.target.closest("input, textarea, select"))return;const S=r.key.length===1?r.key.toLowerCase():r.key;S===t[i]?(i++,i===t.length&&(i=0,rt(),Ge("nice"))):i=S===t[0]?1:0,!(r.key.length!==1||r.ctrlKey||r.metaKey||r.altKey)&&(a=(a+r.key.toLowerCase()).slice(-12),a.endsWith("meow")||a.endsWith("cats")?(a="",lt()):a.endsWith("stars")?(a="",l=!l,clearInterval(v),l&&(v=setInterval(()=>{f(Math.random()*window.innerWidth,Math.random()*window.innerHeight,!0)},160)),Ge(l?"stars on":"stars off")):a.endsWith("crt")&&(a="",ct()))})}const ne=new Map;function pt(a){const t=(a||"#808080").replace("#",""),i=parseInt(t.length===3?t.replace(/(.)/g,"$1$1"):t,16),l=(i>>16&255)/255,o=(i>>8&255)/255,v=(i&255)/255,f=Math.max(l,o,v),r=Math.min(l,o,v),S=(f+r)/2,E=f-r;let c=0,D=0;return E>1e-4&&(D=E/(1-Math.abs(2*S-1)),f===l?c=((o-v)/E+(o<v?6:0))*60:f===o?c=((v-l)/E+2)*60:c=((l-o)/E+4)*60),{h:c,s:D,l:S}}function ut(a,t){return t<.14?"mono":a<34||a>=330?"warm":a<72?"gold":a<168?"green":a<258?"blue":"violet"}function Le(a,t){return t?/^(https?:|mailto:|data:|\/)/i.test(t)?t:`${a}/${t.replace(/^\.\//,"")}`:""}async function Ve(a){const t=await fetch(a).then(i=>i.text());return new DOMParser().parseFromString(t,"text/html")}async function Ae(a="."){const t=`photos:${a}`;if(ne.has(t))return ne.get(t);const l=((await fetch(`${a}/photos.json`).then(o=>o.json())).photos||[]).map(o=>{const v=o.dominant||o.avg||"#777777",{h:f,s:r,l:S}=pt(v),E=ut(f,r),c=E==="mono",D=(f+25)%360;return{file:o.file,name:o.file.replace(/\.[^.]+$/,"").replace(/[-_]+/g," "),thumb:Le(a,o.tex?.["1024"]||o.src),full:Le(a,o.tex?.["2048"]||o.src),width:o.width||1200,height:o.height||800,aspect:o.aspect||1.5,hex:v,luminance:o.luminance??S,hue:f,sat:r,bucket:E,_sortKey:c?1e4+S*1e3:Math.floor(D/12)*100+S*50}});return l.sort((o,v)=>o._sortKey-v._sortKey),ne.set(t,l),l}async function Se(a="."){const t=`code:${a}`;if(ne.has(t))return ne.get(t);const i=document.getElementById("featuredGrid")?document:await Ve(`${a}/code.html`),l=(r,S,E)=>{const c=r.querySelector(".project-title a"),D=r.querySelector(".project-thumb"),A=r.querySelector(".project-tag"),H=r.querySelector(".project-desc");return{title:c?.textContent?.trim()||"Untitled",href:c?.getAttribute("href")||"#",external:!0,img:Le(a,D?.getAttribute("src")||""),tag:A?.textContent?.trim()||r.dataset.category||"project",desc:H?.textContent?.trim()||"",folder:S,folderLabel:E,typeLabel:A?.textContent?.trim()||"app"}},o=[...i.querySelectorAll("#featuredGrid .project-card")].map(r=>l(r,"main","Main")),v=[...i.querySelectorAll("#archiveGrid .project-card")].map(r=>l(r,"archive","Archive")),f={main:o,archive:v,all:[...o,...v]};return ne.set(t,f),f}async function qe(a="."){const t=`music:${a}`;if(ne.has(t))return ne.get(t);const l=[...(document.querySelector(".album-list")?document:await Ve(`${a}/music.html`)).querySelectorAll(".album-row")].map(o=>{const v=o.querySelector(".album-title"),f=o.querySelector(".album-meta"),r=o.querySelector(".album-copy"),S=o.querySelector(".album-cover"),E=[...o.querySelectorAll(".album-actions a")].map(q=>({label:q.textContent.trim(),href:Le(a,q.getAttribute("href")||"#")})),c=E.find(q=>q.href.includes("soundcloud.com")),D=(o.dataset.kind||"").trim().toLowerCase(),A=(f?.textContent||"release").trim().toLowerCase(),H=D==="soundtrack"||A.includes("soundtrack")?"soundtracks":D==="ep"||A.startsWith("ep")?"eps":D==="single"||A.includes("single")?"singles":"albums",R={singles:"Singles",eps:"EPs",albums:"Albums",soundtracks:"Soundtracks"};return{title:v?.textContent?.trim()||"Untitled",href:E[0]?.href||"#",external:!0,img:Le(a,S?.getAttribute("src")||""),tag:f?.textContent?.trim()||"music",desc:r?.textContent?.trim()||"",folder:H,folderLabel:R[H]||"Music",typeLabel:f?.textContent?.trim()||"audio",links:E,soundcloud:c?.href||"",squareArt:!0}});return ne.set(t,l),l}async function De(a="."){const t=`films:${a}`;if(ne.has(t))return ne.get(t);const l=[...(document.querySelector(".film-list")?document:await Ve(`${a}/film.html`)).querySelectorAll(".film-entry")].map(o=>{const v=o.querySelector(".film-title"),f=o.querySelector(".film-credit"),r=o.querySelector(".film-roles"),S=o.querySelector(".film-notes"),E=o.querySelector("iframe"),c=[...o.querySelectorAll(".film-actions a")].map(D=>({label:D.textContent.trim(),href:Le(a,D.getAttribute("href")||"#")}));return{title:v?.textContent?.trim()||"Untitled",href:c[0]?.href||"",external:!1,embed:E?.getAttribute("src")||"",tag:f?.textContent?.trim()||"short film",desc:[r?.textContent?.trim(),S?.textContent?.trim()].filter(Boolean).join(" · "),folder:"films",folderLabel:"Short Films",typeLabel:"video",links:c}});return ne.set(t,l),l}async function He(a="."){const t=`scripts:${a}`;if(ne.has(t))return ne.get(t);const i=await fetch(`${a}/scripts/manifest.json`).then(o=>o.json()),l=await Promise.all(i.map(async o=>{const v=o.replace(/\.md$/,""),r=(await fetch(`${a}/scripts/${o}`).then(H=>H.text())).split(/\r?\n/);let S="",E="",c="";for(const H of r){const R=H.trim();if(!S&&/^#\s+/.test(R)){S=R.replace(/^#\s+/,"").trim();continue}if(!E&&/^###\s+/.test(R)&&!/^(?:###\s+)?(?:FADE IN:|INT\.|EXT\.|SUPER:|CUT TO:|INSERT:|END\.)/i.test(R)){E=R.replace(/^###\s+/,"").trim();continue}if(!c&&/^\*.*\*$/.test(R)){c=R.replace(/^\*|\*$/g,"").trim();continue}if(R==="FADE IN:"||/^###\s+/.test(R))break}const D=`${a}/scripts/view.html?slug=${encodeURIComponent(v)}`,A=`${a}/scripts/pdfs/${v}.pdf`;return{title:S||v,href:D,external:!1,tag:E||"screenplay",desc:c||"Original screenplay by Avery Beuth.",folder:"scripts",folderLabel:"Screenplays",typeLabel:".fountain",links:[{label:"Read screenplay",href:D},{label:"Download PDF",href:A}]}}));return ne.set(t,l),l}const ke=[{id:"original",num:"01",name:"Original",label:"ORIGINAL",desc:"Obsidian dark & 3D photo gallery",themeColor:"#0b0c0f",previewClass:"is-original"},{id:"terminal",num:"02",name:"Terminal",label:"TERMINAL",desc:"Real Windows Terminal (PowerShell)",themeColor:"#0c0c0c",previewClass:"is-terminal"},{id:"frutiger",num:"03",name:"Desktop",label:"DESKTOP",desc:"Multi-window Windows 7 desktop OS",themeColor:"#071b2e",previewClass:"is-frutiger"},{id:"silly",num:"04",name:"Silly",label:"SILLY",desc:"Deadpan Comic Sans & MS Paint",themeColor:"#faf9f4",previewClass:"is-silly"},{id:"paper",num:"05",name:"Paper",label:"PAPER",desc:"Full broadsheet newspaper edition",themeColor:"#f2ede2",previewClass:"is-paper"},{id:"cobalt",num:"06",name:"Cobalt",label:"COBALT",desc:"Full architectural CAD blueprint set",themeColor:"#061429",previewClass:"is-cobalt"}],J={folder:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="fg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffe78a"/><stop offset="55%" stop-color="#f7c844"/><stop offset="100%" stop-color="#d89614"/></linearGradient><linearGradient id="fg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff4bf"/><stop offset="48%" stop-color="#ffd24d"/><stop offset="100%" stop-color="#e3a11a"/></linearGradient></defs><path d="M3 8.5C3 7.1 4.1 6 5.5 6H12l2.4 2.5H26.5C27.9 8.5 29 9.6 29 11v13.5c0 1.4-1.1 2.5-2.5 2.5h-21C4.1 27 3 25.9 3 24.5V8.5z" fill="url(#fg1)" stroke="#9a6408" stroke-width="1.2"/><path d="M3 12.2h26v12.3c0 1.4-1.1 2.5-2.5 2.5h-21C4.1 27 3 25.9 3 24.5V12.2z" fill="url(#fg2)" stroke="#a66c0a" stroke-width="1.1"/><path d="M4.5 13.5h23" stroke="rgba(255,255,255,0.75)" stroke-width="1.3"/></svg>',photos:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="pg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e4eef7"/><stop offset="100%" stop-color="#88a4bd"/></linearGradient><radialGradient id="pg2" cx="40%" cy="35%" r="60%"><stop offset="0%" stop-color="#82e0ff"/><stop offset="55%" stop-color="#1d6ab8"/><stop offset="100%" stop-color="#09223f"/></radialGradient></defs><rect x="3" y="8" width="26" height="18" rx="3.5" fill="url(#pg1)" stroke="#3b5369" stroke-width="1.2"/><path d="M11 8l1.8-3h6.4L21 8" fill="#c4d6e6" stroke="#3b5369" stroke-width="1.1"/><circle cx="16" cy="17" r="6.2" fill="url(#pg2)" stroke="#ffffff" stroke-width="1.4"/><circle cx="14" cy="15" r="1.8" fill="rgba(255,255,255,0.65)"/></svg>',code:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><rect x="4" y="5" width="24" height="22" rx="3" fill="#eaf3fc" stroke="#3e688f" stroke-width="1.2"/><rect x="4" y="5" width="24" height="6" rx="2.5" fill="#3a96e3"/><path d="M12.2 15.5l-3.6 3.5 3.6 3.5M19.8 15.5l3.6 3.5-3.6 3.5M17.2 14.5l-2.4 9" fill="none" stroke="#165699" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',scripts:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><path d="M7 4h12l6 6v18H7z" fill="#f5faff" stroke="#4c6f91" stroke-width="1.2" stroke-linejoin="round"/><path d="M19 4v6h6" fill="#bfd6ec" stroke="#4c6f91" stroke-width="1.1"/><path d="M10.5 14h11M10.5 18h11M10.5 22h7.5" stroke="#3c6791" stroke-width="1.5" stroke-linecap="round"/></svg>',music:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><radialGradient id="mg1" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#b8f5ff"/><stop offset="45%" stop-color="#2fa2e8"/><stop offset="100%" stop-color="#114882"/></radialGradient></defs><circle cx="16" cy="16" r="12.5" fill="url(#mg1)" stroke="#0e3866" stroke-width="1.2"/><circle cx="16" cy="16" r="3.4" fill="#eaf6ff" stroke="#114882" stroke-width="1.1"/><path d="M15 21.5V10.5l7.5-1.6v9.2" fill="none" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="21.5" r="2.2" fill="#ffffff"/><circle cx="20.5" cy="18.2" r="2.2" fill="#ffffff"/></svg>',film:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><rect x="4" y="6" width="24" height="20" rx="2.5" fill="#2c3d4f" stroke="#0f1821" stroke-width="1.2"/><rect x="8.5" y="9" width="15" height="14" rx="1.2" fill="#77d0fa"/><path d="M14 13l5.5 3-5.5 3z" fill="#ffffff"/><path d="M5.5 9h1.6M5.5 13h1.6M5.5 17h1.6M5.5 21h1.6M24.9 9h1.6M24.9 13h1.6M24.9 17h1.6M24.9 21h1.6" stroke="#d8e6f2" stroke-width="1.4"/></svg>',notes:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><rect x="6" y="4" width="20" height="24" rx="2" fill="#fffdf2" stroke="#537496" stroke-width="1.2"/><rect x="6" y="4" width="20" height="5" rx="1.5" fill="#4aa7eb"/><path d="M9.5 13.5h13M9.5 17.5h13M9.5 21.5h9" stroke="#6d8ba8" stroke-width="1.4" stroke-linecap="round"/></svg>',recycle:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="rb1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e3f4ff"/><stop offset="60%" stop-color="#9cc6e6"/><stop offset="100%" stop-color="#5a8ab5"/></linearGradient></defs><path d="M7.5 9h17l-2 18.5a2 2 0 0 1-2 1.8h-9a2 2 0 0 1-2-1.8L7.5 9z" fill="url(#rb1)" stroke="#2b4f73" stroke-width="1.2"/><ellipse cx="16" cy="9" rx="8.8" ry="2.6" fill="#eef7ff" stroke="#2b4f73" stroke-width="1.1"/><path d="M12.5 16l3.5-2.8 3.5 2.8M19.5 19.5l-3.5 3-3.5-3" fill="none" stroke="#1e7d45" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',themes:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><linearGradient id="tg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7ce4ff"/><stop offset="50%" stop-color="#6ee787"/><stop offset="100%" stop-color="#ff85c0"/></linearGradient></defs><circle cx="16" cy="16" r="12.5" fill="url(#tg1)" stroke="#1d4466" stroke-width="1.2"/><ellipse cx="14" cy="10.5" rx="7" ry="4" fill="rgba(255,255,255,0.45)"/><circle cx="12" cy="15" r="2.2" fill="#ffffff"/><circle cx="18.5" cy="14" r="2.2" fill="#ffd32a"/><circle cx="16.5" cy="20.5" r="2.2" fill="#1d6ed6"/></svg>',power:'<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><defs><radialGradient id="pw1" cx="35%" cy="30%" r="65%"><stop offset="0%" stop-color="#ffa899"/><stop offset="55%" stop-color="#e0432f"/><stop offset="100%" stop-color="#87180c"/></radialGradient></defs><circle cx="16" cy="16" r="12.5" fill="url(#pw1)" stroke="#611209" stroke-width="1.2"/><path d="M16 9.5v6.5M11.6 12.2a6.4 6.4 0 1 0 8.8 0" fill="none" stroke="#ffffff" stroke-width="2.1" stroke-linecap="round"/></svg>',winOrb:'<svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true"><path d="M7.5 10.5c2.8-1.4 5.2-1.4 7.5 0v5.5c-2.3-1.2-4.7-1.2-7.5 0z" fill="#ff5a36"/><path d="M17 10.5c2.3 1.2 4.7 1.2 7.5 0v5.5c-2.8 1.4-5.2 1.4-7.5 0z" fill="#7dd128"/><path d="M7.5 17.5c2.8-1.4 5.2-1.4 7.5 0V23c-2.3-1.2-4.7-1.2-7.5 0z" fill="#2ba8f7"/><path d="M17 17.5c2.3 1.2 4.7 1.2 7.5 0V23c-2.8 1.4-5.2 1.4-7.5 0z" fill="#ffca28"/></svg>',backArrow:'<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M10.5 3.5L5.5 8l5 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',fwdArrow:'<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M5.5 3.5L10.5 8l-5 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',paintFace:'<svg viewBox="0 0 44 44" width="38" height="38" aria-hidden="true"><circle cx="22" cy="22" r="18" fill="#fff59d" stroke="#1c1c1c" stroke-width="2.4"/><circle cx="15.5" cy="17" r="2.2" fill="#1c1c1c"/><circle cx="28.5" cy="16.5" r="2.2" fill="#1c1c1c"/><path d="M13.5 26.5c3.5 4.5 12.5 5 17-0.5" fill="none" stroke="#1c1c1c" stroke-width="2.3" stroke-linecap="round"/></svg>'},ze="avery_theme";let Ze=!1;const s=a=>String(a||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function we(){return!!(document.getElementById("stage")&&document.getElementById("gl"))}function Re(){const a=new URLSearchParams(window.location.search);return we()&&(a.has("zoom")||a.has("photos")||a.has("overview")||a.has("p"))}function Ee(){const a=window.location.pathname.toLowerCase(),t=a.includes("/scripts/"),i=t?"..":".";return Re()?{base:".",inScripts:!1,slug:"photos",title:"Photos"}:we()?{base:".",inScripts:!1,slug:"home",title:"Home"}:a.includes("code")?{base:i,inScripts:t,slug:"code",title:"Code"}:a.includes("music")?{base:i,inScripts:t,slug:"music",title:"Music"}:a.includes("film")?{base:i,inScripts:t,slug:"films",title:"Films"}:t&&a.includes("view")?{base:i,inScripts:t,slug:"scripts/view",title:"Screenplay"}:t?{base:i,inScripts:t,slug:"scripts",title:"Scripts"}:a.includes("privacy")?{base:i,inScripts:t,slug:"privacy",title:"Privacy"}:{base:i,inScripts:t,slug:"home",title:"Portfolio"}}function Ue(){if("scrollRestoration"in history)try{history.scrollRestoration="manual"}catch{}window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body&&(document.body.scrollTop=0)}function et(a){const t=ke.find(o=>o.id===a)||ke[0],i=t.id;i==="original"?(document.documentElement.removeAttribute("data-theme"),document.documentElement.classList.remove("is-themed-home","has-theme-takeover"),sessionStorage.removeItem(ze)):(document.documentElement.setAttribute("data-theme",i),we()&&document.documentElement.classList.add("is-themed-home"),sessionStorage.setItem(ze,i));const l=document.querySelector('meta[name="theme-color"]');return l&&t.themeColor&&l.setAttribute("content",t.themeColor),i}const Qe=sessionStorage.getItem(ze)||"original";Qe!=="original"&&et(Qe);function Je(a,t,i){if(!a||!t)return()=>{};let l=parseFloat(a.dataset.wx||"0")||0,o=parseFloat(a.dataset.wy||"0")||0,v=!1,f=0,r=0,S=0,E=0;const c=()=>{a.dataset.wx=String(Math.round(l)),a.dataset.wy=String(Math.round(o)),a.style.transform=`translate3d(${Math.round(l)}px, ${Math.round(o)}px, 0)`};(l||o)&&c();const D=q=>{i?.(),!(window.innerWidth<=860)&&(q.target.closest("button, a, input")||(v=!0,f=q.clientX,r=q.clientY,S=l,E=o,a.classList.add("is-dragging"),t.setPointerCapture?.(q.pointerId),q.preventDefault()))},A=q=>{v&&(l=S+(q.clientX-f),o=E+(q.clientY-r),c())},H=()=>{v&&(v=!1,a.classList.remove("is-dragging"))},R=q=>{q.target.closest("button, a, input")||(l=0,o=0,c())};return a.addEventListener("pointerdown",()=>i?.()),t.addEventListener("pointerdown",D),window.addEventListener("pointermove",A),window.addEventListener("pointerup",H),t.addEventListener("dblclick",R),()=>{t.removeEventListener("pointerdown",D),window.removeEventListener("pointermove",A),window.removeEventListener("pointerup",H),t.removeEventListener("dblclick",R)}}function Pe(a,t){let i=t,l=document.getElementById("themePhotoLb");l&&l.remove(),l=document.createElement("div"),l.id="themePhotoLb",l.className="theme-photo-lb",l.setAttribute("data-theme-injected","1"),l.innerHTML=`
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
  `,document.body.appendChild(l);const o=()=>{const r=a[i];if(!r)return;l.querySelector("#tplbImg").src=r.full||r.img,l.querySelector("#tplbImg").alt=r.name||r.title||"";const S=r.hex||"#888888",E=r.width&&r.height?` &middot; ${r.width}&times;${r.height}`:"";l.querySelector("#tplbMeta").innerHTML=`<i class="tplb-swatch" style="background:${S}"></i> ${String(i+1).padStart(3,"0")} / ${a.length} &middot; ${s(r.file||r.title||"")} &middot; ${S.toUpperCase()}${E}`},v=()=>{window.removeEventListener("keydown",f),l.remove()},f=r=>{r.key==="Escape"?v():r.key==="ArrowRight"?(i=(i+1)%a.length,o()):r.key==="ArrowLeft"&&(i=(i-1+a.length)%a.length,o())};l.querySelector("#tplbPrev").addEventListener("click",()=>{i=(i-1+a.length)%a.length,o()}),l.querySelector("#tplbNext").addEventListener("click",()=>{i=(i+1)%a.length,o()}),l.querySelector("#tplbClose").addEventListener("click",v),l.addEventListener("click",r=>{(r.target===l||r.target===l.querySelector(".tplb-stage"))&&v()}),window.addEventListener("keydown",f),o()}function bt(){if(Ze)return;Ze=!0;let a=sessionStorage.getItem(ze)||"original",t=null,i=[];const l=()=>{for(document.documentElement.classList.remove("has-theme-takeover");i.length;){const p=i.pop();try{p()}catch{}}document.querySelectorAll("[data-theme-injected]").forEach(p=>p.remove())},o=()=>{const p=Ee();document.documentElement.classList.add("has-theme-takeover");const n=document.createElement("div");n.className="wt-root",n.setAttribute("data-theme-injected","1"),n.innerHTML=`
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
    `,document.body.appendChild(n);const m=n.querySelector("#wtMatrix"),w=m.getContext("2d");let g=0,x=[],T=0;const I="01アイウエオカキクケコABXY#$%&*+-:/",X=()=>{m.width=window.innerWidth,m.height=window.innerHeight,x=Array.from({length:Math.max(12,Math.floor(m.width/24))},()=>Math.random()*-50)};X(),window.addEventListener("resize",X);const se=e=>{if(g=requestAnimationFrame(se),!(e-T<110)){T=e,w.fillStyle="rgba(12, 12, 12, 0.22)",w.fillRect(0,0,m.width,m.height),w.fillStyle="rgba(22, 198, 12, 0.35)",w.font='13px Consolas, "Courier Prime", monospace';for(let h=0;h<x.length;h++)w.fillText(I[Math.floor(Math.random()*I.length)],h*24,x[h]*22),x[h]*22>m.height&&Math.random()>.975&&(x[h]=0),x[h]+=.55}};g=requestAnimationFrame(se);const ee=n.querySelector("#wtOut"),P=n.querySelector("#wtScreen"),F=n.querySelector("#wtForm"),B=n.querySelector("#wtInput"),U=n.querySelector("#wtBefore"),_=n.querySelector("#wtAfter"),re=n.querySelector("#wtPrompt");let G="home",O=0,xe=!1,K=null;const be=[];let de=-1;const V=e=>new Promise(h=>setTimeout(h,e)),ae=()=>{const e=B.value,h=typeof B.selectionStart=="number"?B.selectionStart:e.length;U.textContent=e.slice(0,h),_.textContent=e.slice(h)},pe=e=>{xe=e,F.hidden=e,e||(ae(),P.scrollTop=P.scrollHeight,B.focus())},Ce=e=>{if(e.ctrlKey&&e.key.toLowerCase()==="c"||xe&&e.key==="Escape"){if(!xe&&!K)return;e.preventDefault(),O++,K=null,le(),ee.querySelectorAll(".wt-live-caret").forEach(h=>h.remove()),z('<span class="wt-err">^C</span>',"wt-line"),pe(!1)}};window.addEventListener("keydown",Ce),i.push(()=>{O++,cancelAnimationFrame(g),window.removeEventListener("resize",X),window.removeEventListener("keydown",Ce)});const le=()=>{if(K){re.textContent=`Show ${K.length} more archive projects? [y/N]`;return}const e=G==="home"?"":`\\${G}`;re.textContent=`PS C:\\Users\\visitor\\averybeuth.xyz${e}>`},z=(e,h="wt-line")=>{const u=document.createElement("div");return u.className=h,u.innerHTML=e,ee.appendChild(u),P.scrollTop=P.scrollHeight,u},ie=(e,h)=>{const u=["|","/","-","\\"];let y=0;const $=z(`<span class="wt-dim">[${u[0]}] ${s(e)}</span>`,"wt-line"),k=setInterval(()=>{if(h!==O){clearInterval(k);return}y=(y+1)%u.length,$.innerHTML=`<span class="wt-dim">[${u[y]}] ${s(e)}</span>`},85);return()=>{clearInterval(k),$.remove()}},te=async(e,h,{minDelay:u=60,maxDelay:y=110,batch:$=1}={})=>{const k=document.createElement("span");k.className="wt-cursor-block wt-live-caret";for(let d=0;d<e.length;){if(h!==O){k.remove();return}const M=$>1?Math.max(1,Math.floor(Math.random()*$)+1):1;let L=null;for(let j=0;j<M&&d<e.length;j++,d++){const Q=e[d];L=z(typeof Q=="string"?Q:Q.html,typeof Q=="string"?"wt-line wt-pre":Q.cls)}L&&L.appendChild(k),P.scrollTop=P.scrollHeight;const N=u+Math.random()*(y-u),W=Math.random()<.12?55:0;await V(N+W)}k.remove()},ye=async e=>{const h=++O;K=null,le(),ee.querySelectorAll(".wt-live-caret").forEach(u=>u.remove()),pe(!1),B.value="",ae();for(let u=1;u<=e.length;u++){if(h!==O)return;const y=e[u-1];B.value=e.slice(0,u),B.setSelectionRange?.(u,u),ae();const $=y===" "?85+Math.random()*45:46+Math.random()*40;await V($)}await V(150),h===O&&(B.value="",ae(),await Oe(e,h))},Ie=async e=>{await te(['<span class="wt-g"> █████╗ ██████╗ </span>   <span class="wt-c">visitor@averybeuth.xyz</span>','<span class="wt-g">██╔══██╗██╔══██╗</span>   <span class="wt-y">Host</span>     averybeuth.xyz','<span class="wt-g">███████║██████╔╝</span>   <span class="wt-y">Owner</span>    Avery Beuth (@avery.beuth)','<span class="wt-g">██╔══██║██╔══██╗</span>   <span class="wt-y">Shell</span>    Windows PowerShell 7.4 (web)','<span class="wt-g">██║  ██║██████╔╝</span>   <span class="wt-y">Dirs</span>     <button type="button" class="wt-link" data-wt-run="cd photos">photos\\</button>  <button type="button" class="wt-link" data-wt-run="cd code">code\\</button>  <button type="button" class="wt-link" data-wt-run="cd scripts">scripts\\</button>  <button type="button" class="wt-link" data-wt-run="cd music">music\\</button>  <button type="button" class="wt-link" data-wt-run="cd films">films\\</button>','<span class="wt-g">╚═╝  ╚═╝╚═════╝ </span>   <span class="wt-y">Links</span>    <a class="wt-link" href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">instagram</a>  <a class="wt-link" href="https://github.com/averywsc" target="_blank" rel="noopener">github</a>  <button type="button" class="wt-link" data-wt-themes-inline>themes</button>  <button type="button" class="wt-link" data-wt-orig-inline>original</button>','<span class="wt-dim">Click any directory above or type <span class="wt-g">help</span>, <span class="wt-g">cd code</span>, <span class="wt-g">cd music</span>, <span class="wt-g">cd scripts</span>, <span class="wt-g">cd films</span>, <span class="wt-g">cd photos</span>.</span>'],e,{minDelay:65,maxDelay:115,batch:1})},Be=async(e,h)=>{const u=[`<span class="wt-y">ARCHIVE (${e.length} projects)</span>`,...e.map(y=>`-a---  <span class="wt-g">[${s(y.tag)}]</span> <span class="wt-c">${s(y.title)}</span>  <a class="wt-link" href="${s(y.href)}" target="_blank" rel="noopener">${s(y.href)}</a>
       <span class="wt-dim">${s(y.desc)}</span>`)];await te(u,h,{minDelay:42,maxDelay:74,batch:1})},he=async(e,h)=>{const u=e||G;if(u==="home"){await te(['<span class="wt-dim">Mode                 Items Name</span>','d----                  375 <button type="button" class="wt-link" data-wt-run="cd photos">photos\\</button>','d----                   89 <button type="button" class="wt-link" data-wt-run="cd code">code\\</button>','d----                   15 <button type="button" class="wt-link" data-wt-run="cd scripts">scripts\\</button>','d----                   12 <button type="button" class="wt-link" data-wt-run="cd music">music\\</button>','d----                    3 <button type="button" class="wt-link" data-wt-run="cd films">films\\</button>'],h,{minDelay:65,maxDelay:110,batch:1});return}if(u==="code"){const y=ie("Enumerating C:\\Users\\visitor\\averybeuth.xyz\\code",h),[$]=await Promise.all([Se(p.base),V(420)]);if(y(),h!==O)return;const k=[`<span class="wt-dim">Directory: C:\\Users\\visitor\\averybeuth.xyz\\code  (${$.main.length} Main, ${$.archive.length} Archive)</span>`,`<span class="wt-y">SELECTED PROJECTS (${$.main.length})</span>`,...$.main.map(d=>`-a---  <span class="wt-g">[${s(d.tag)}]</span> <span class="wt-c">${s(d.title)}</span>  <a class="wt-link" href="${s(d.href)}" target="_blank" rel="noopener">${s(d.href)}</a>
       <span class="wt-dim">${s(d.desc)}</span>`)];if(await te(k,h,{minDelay:62,maxDelay:102,batch:1}),h!==O)return;K=$.archive,le(),z(`<span class="wt-y">--More-- ${$.archive.length} archive projects remaining. Show more? [y/N]</span>  <button type="button" class="wt-link" data-wt-more="y">[yes]</button>  <button type="button" class="wt-link" data-wt-more="n">[no]</button>`);return}if(u==="music"){const y=ie("Reading C:\\Users\\visitor\\averybeuth.xyz\\music",h),[$]=await Promise.all([qe(p.base),V(400)]);if(y(),h!==O)return;const k=['<span class="wt-dim">Directory: C:\\Users\\visitor\\averybeuth.xyz\\music  (tool: <a class="wt-link" href="https://averywsc.github.io/bebeat/" target="_blank" rel="noopener">https://averywsc.github.io/bebeat/</a>)</span>',...$.map(d=>{const M=d.links.map(L=>`<a class="wt-link" href="${s(L.href)}" target="_blank" rel="noopener">[${s(L.label)}]</a>`).join(" ");return`-a---  <span class="wt-y">[${s(d.tag)}]</span> <span class="wt-c">${s(d.title)}</span>
       <span class="wt-dim">${s(d.desc)}</span>
       ${M}`})];await te(k,h,{minDelay:75,maxDelay:120,batch:1});return}if(u==="scripts"){const y=ie("Loading C:\\Users\\visitor\\averybeuth.xyz\\scripts\\manifest.json",h),[$]=await Promise.all([He(p.base),V(400)]);if(y(),h!==O)return;const k=[`<span class="wt-dim">Directory: C:\\Users\\visitor\\averybeuth.xyz\\scripts (${$.length} files)</span>`,...$.map(d=>{const M=d.links.map(L=>`<a class="wt-link" href="${s(L.href)}">[${s(L.label)}]</a>`).join(" ");return`-a---  <span class="wt-c">${s(d.title)}</span> <span class="wt-dim">(${s(d.tag)})</span>
       <span class="wt-dim">${s(d.desc)}</span>
       ${M}`})];await te(k,h,{minDelay:72,maxDelay:118,batch:1});return}if(u==="films"){const y=ie("Probing C:\\Users\\visitor\\averybeuth.xyz\\films",h),[$]=await Promise.all([De(p.base),V(400)]);if(y(),h!==O)return;const k=['<span class="wt-dim">Directory: C:\\Users\\visitor\\averybeuth.xyz\\films  (tools: <a class="wt-link" href="https://averywsc.github.io/colorstudies/" target="_blank" rel="noopener">guides/LUTs</a> <a class="wt-link" href="https://averywsc.github.io/fifilm/" target="_blank" rel="noopener">fifilm</a>)</span>',...$.map(d=>{const M=d.embed?d.embed.replace("/embed/","/watch?v="):"",L=[M?`<a class="wt-link" href="${s(M)}" target="_blank" rel="noopener">[watch on youtube]</a>`:"",...d.links.map(N=>`<a class="wt-link" href="${s(N.href)}">[${s(N.label)}]</a>`)].filter(Boolean).join(" ");return`-a---  <span class="wt-c">${s(d.title)}</span> <span class="wt-y">[${s(d.tag)}]</span>
       <span class="wt-dim">${s(d.desc)}</span>
       ${L}`})];await te(k,h,{minDelay:85,maxDelay:135,batch:1});return}if(u==="photos"){const y=ie("Sorting 375 frames by color spectrum",h),[$]=await Promise.all([Ae(p.base),V(420)]);if(y(),h!==O)return;z(`<span class="wt-dim">Directory: C:\\Users\\visitor\\averybeuth.xyz\\photos  (${$.length} frames, click any color block for fullscreen preview)</span>`);const k=z(`<span class="wt-dim">[....................] 0/${$.length}</span>`),d=z("","wt-ansi-wall");d.addEventListener("click",M=>{const L=M.target.closest("[data-wt-photo]");L&&Pe($,Number(L.dataset.wtPhoto))});for(let M=0;M<$.length;M+=15){if(h!==O)return;const L=Math.min(M+15,$.length),N=document.createDocumentFragment();for(let j=M;j<L;j++){const Q=$[j],ue=document.createElement("button");ue.type="button",ue.className="wt-swatch",ue.dataset.wtPhoto=String(j),ue.style.background=Q.hex,ue.title=`${Q.file} (${Q.hex})`,N.appendChild(ue)}d.appendChild(N);const W=Math.round(L/$.length*20);k.innerHTML=`<span class="wt-dim">[${"#".repeat(W)}${".".repeat(20-W)}] ${L}/${$.length}</span>`,P.scrollTop=P.scrollHeight,await V(42+Math.random()*28)}k.innerHTML=`<span class="wt-g">[####################] ${$.length}/${$.length} ok</span>`}},Te=async e=>{if(!K)return;const h=K,u=++O;z(`<span class="wt-prompt-echo">${s(re.textContent)}</span> ${s(e||"n")}`),K=null,le(),pe(!0);const y=(e||"").trim().toLowerCase();["y","yes","more","archive"].includes(y)?await Be(h,u):z(`<span class="wt-dim">Skipped archive. Type <span class="wt-g">archive</span> anytime to list all ${h.length} builds.</span>`),u===O&&pe(!1)},Oe=async(e,h=null)=>{const u=(e||"").trim();if(K){const L=u.toLowerCase();if(!u||["y","yes","n","no","more","archive"].includes(L)){await Te(L||"n");return}K=null,le()}const y=h??++O;if(!u)return;be.unshift(u),de=-1,z(`<span class="wt-prompt-echo">${s(re.textContent)}</span> ${s(u)}`),pe(!0);const $=u.toLowerCase(),k=u.split(/\s+/),d=k[0].toLowerCase(),M=k.slice(1).join(" ").toLowerCase().replace(/[\\/]+$/,"");if(["ily","love u","i love u","love you","i love you","<3"].includes($))await te(['<span class="wt-pink">   /\\_/\\</span>','<span class="wt-pink">  ( ^.^ )  love u too &lt;3</span>'],y,{minDelay:75,maxDelay:120,batch:1});else if(["cats","cat","meow"].includes($))await te(['<span class="wt-y">  /\\_/\\</span>','<span class="wt-y"> ( o.o )  meow</span>','<span class="wt-y">  &gt; ^ &lt;</span>'],y,{minDelay:70,maxDelay:115,batch:1});else if($==="matrix"){const L=n.classList.toggle("is-matrix-boost");z(L?'<span class="wt-g">matrix rain: amplified</span>':'<span class="wt-dim">matrix rain: subtle</span>')}else if($==="coffee"){const L=z('<span class="wt-dim">brewing flat white... [..........] 0%</span>');for(let N=1;N<=10;N++){if(y!==O)return;L.innerHTML=`<span class="wt-dim">brewing flat white... [${"#".repeat(N)}${".".repeat(10-N)}] ${N*10}%</span>`,await V(110)}L.innerHTML='<span class="wt-y">flat white ready. oat milk, double shot.</span>'}else if(d==="sudo")z('<span class="wt-err">nice try. visitor is not in the sudoers file. this incident will be ignored.</span>');else if(d==="rm"&&$.includes("-rf")){const L=ie("deleting averybeuth.xyz",y);if(await V(750),L(),y!==O)return;z('<span class="wt-y">just kidding, i need this website.</span>')}else if(d==="secret"||d==="secrets")z('<span class="wt-g">opening secrets menu...</span>'),ce();else if(d==="hack")await te(['<span class="wt-g">[01/04] bypassing mainframe firewall...</span>','<span class="wt-g">[02/04] decrypting 375 raw jpegs...</span>',`<span class="wt-g">[03/04] downloading avery's unfinished beats...</span>`,'<span class="wt-c">[04/04] ACCESS GRANTED (jk this is a static site)</span>'],y,{minDelay:95,maxDelay:150,batch:1});else if(d==="ping")await te(['<span class="wt-dim">Pinging averybeuth.xyz [127.0.0.1] with 32 bytes of vibes:</span>',"Reply from 127.0.0.1: bytes=32 time=1ms TTL=64","Reply from 127.0.0.1: bytes=32 time=2ms TTL=64","Reply from 127.0.0.1: bytes=32 time=1ms TTL=64",'<span class="wt-g">Packets: Sent = 3, Received = 3, Lost = 0 (0% loss)</span>'],y,{minDelay:160,maxDelay:240,batch:1});else if(d==="party")n.classList.add("is-party"),z('<span class="wt-pink">party mode on for 4 seconds.</span>'),setTimeout(()=>n.classList.remove("is-party"),4e3);else if(d==="archive"||d==="more"){const L=ie("Loading code archive",y),[N]=await Promise.all([Se(p.base),V(380)]);if(L(),y!==O)return;await Be(N.archive,y)}else if(d==="help"||d==="?")await te(['<span class="wt-g">dir / ls [folder]</span>   List entries (photos, code, scripts, music, films)','<span class="wt-g">cd &lt;folder&gt;</span>         Enter directory &amp; stream entries (or <span class="wt-g">cd ..</span> / <span class="wt-g">cd ~</span>)','<span class="wt-g">archive</span>             List all 74 archived code projects','<span class="wt-g">cat &lt;name&gt;</span>          Inspect any project, song, film or script','<span class="wt-g">open &lt;name&gt;</span>         Launch link directly','<span class="wt-g">tree</span>                Show directory tree','<span class="wt-g">neofetch</span>            Display system &amp; owner info','<span class="wt-g">cls / clear</span>         Clear terminal output','<span class="wt-g">themes</span>              Open theme switcher','<span class="wt-g">original / exit</span>     Return to default site'],y,{minDelay:55,maxDelay:95,batch:1});else if(d==="cls"||d==="clear")ee.innerHTML="";else if(d==="neofetch")await Ie(y);else if(d==="whoami")z("averybeuth\\visitor");else if(d==="tree")await te(["C:\\USERS\\VISITOR\\AVERYBEUTH.XYZ","├───photos   (375 color-ordered frames)","├───code     (15 main + 74 archive)","├───scripts  (original screenplays + PDFs)","├───music    (albums, EPs, singles + bebeat)","└───films    (short films + fifilm + LUTs)"],y,{minDelay:70,maxDelay:115,batch:1});else if(d==="dir"||d==="ls"){const L=["photos","code","scripts","music","films","home"].includes(M)?M:G;await he(L,y)}else if(d==="cd")!M||M==="~"||M===".."||M==="home"?(G="home",le(),await he("home",y)):["photos","code","scripts","music","films"].includes(M)?(G=M,le(),await he(M,y)):M==="film"?(G="films",le(),await he("films",y)):z(`<span class="wt-err">cd : Cannot find path '${s(M)}' because it does not exist.</span>`);else if(d==="cat"||d==="info"||d==="open")if(!M)z('<span class="wt-dim">Usage: cat &lt;name&gt;</span>');else{const L=ie(`Searching index for '${M}'`,y),[N,W,j,Q]=await Promise.all([Se(p.base),qe(p.base),De(p.base),He(p.base),V(350)]);if(L(),y!==O)return;const Z=[...N.all,...W,...j,...Q].find($e=>$e.title.toLowerCase().includes(M));Z?(await te([`<span class="wt-c">[${s(Z.title)}]</span> <span class="wt-g">(${s(Z.tag)})</span>`,`  ${s(Z.desc)}`,...Z.href?[`  <a class="wt-link" href="${s(Z.href)}" target="_blank" rel="noopener">${s(Z.href)}</a>`]:[]],y,{minDelay:65,maxDelay:105,batch:1}),d==="open"&&Z.href&&window.open(Z.href,"_blank","noopener,noreferrer")):z(`<span class="wt-err">No entry matching '${s(M)}'.</span>`)}else if(d==="themes")q(!0);else if(d==="original"||d==="exit"){R("original");return}else["photos","code","scripts","music","films"].includes(d)?(G=d,le(),await he(d,y)):z(`<span class="wt-err">${s(d)} : The term '${s(d)}' is not recognized. Type 'help'.</span>`);y===O&&pe(!1)};ee.addEventListener("click",e=>{const h=e.target.closest("[data-wt-more]");if(h){Te(h.dataset.wtMore);return}const u=e.target.closest("[data-wt-run]");if(u){ye(u.dataset.wtRun);return}if(e.target.closest("[data-wt-themes-inline]")){q();return}if(e.target.closest("[data-wt-secrets-inline]")){ce();return}if(e.target.closest("[data-wt-orig-inline]")){R("original");return}}),n.querySelectorAll("[data-wt-cmd]").forEach(e=>e.addEventListener("click",()=>ye(e.dataset.wtCmd))),n.querySelectorAll("[data-wt-themes]").forEach(e=>e.addEventListener("click",()=>q())),n.querySelectorAll("[data-wt-secrets]").forEach(e=>e.addEventListener("click",()=>ce())),n.querySelectorAll("[data-wt-original]").forEach(e=>e.addEventListener("click",()=>R("original"))),P.addEventListener("click",e=>{!e.target.closest("a, button, input")&&!xe&&B.focus()}),["input","keyup","click","select","focus"].forEach(e=>B.addEventListener(e,ae)),F.addEventListener("submit",e=>{e.preventDefault();const h=B.value;B.value="",ae(),Oe(h)}),B.addEventListener("keydown",e=>{if(e.key==="ArrowUp"&&be.length)e.preventDefault(),de=Math.min(be.length-1,de+1),B.value=be[de],ae();else if(e.key==="ArrowDown")e.preventDefault(),de=Math.max(-1,de-1),B.value=de>=0?be[de]:"",ae();else if(e.key==="Tab"){e.preventDefault();const h=B.value.toLowerCase(),y=["cd photos","cd code","cd scripts","cd music","cd films","archive","neofetch","tree","secrets","help","clear","themes","original"].find($=>$.startsWith(h));y&&(B.value=y,ae())}}),(async()=>{const e=++O;pe(!0),await te(['<span class="wt-dim">Windows PowerShell</span>','<span class="wt-dim">Copyright (C) Avery Beuth. All rights reserved.</span>'],e,{minDelay:75,maxDelay:120,batch:1}),await Ie(e),e===O&&(pe(!1),["photos","code","scripts","music","films"].includes(p.slug)&&await ye(`cd ${p.slug}`))})()},v=()=>{const p=Ee();document.documentElement.classList.add("has-theme-takeover");const n=document.createElement("div");n.className="aero-os",n.setAttribute("data-theme-injected","1"),n.innerHTML=`
      <div class="aero-bg" aria-hidden="true">
        <span class="aero-bubble b1"></span><span class="aero-bubble b2"></span>
        <span class="aero-bubble b3"></span><span class="aero-bubble b4"></span>
        <span class="aero-bubble b5"></span><span class="aero-bubble b6"></span>
      </div>
      <nav class="aero-desktop-icons" aria-label="Desktop icons">
        <button type="button" class="aero-d-icon" data-os-open="photos"><span class="aero-d-glyph">${J.photos}</span><span>Photos</span></button>
        <button type="button" class="aero-d-icon" data-os-open="code"><span class="aero-d-glyph">${J.folder}</span><span>Code</span></button>
        <button type="button" class="aero-d-icon" data-os-open="scripts"><span class="aero-d-glyph">${J.scripts}</span><span>Scripts</span></button>
        <button type="button" class="aero-d-icon" data-os-open="music"><span class="aero-d-glyph">${J.music}</span><span>Music</span></button>
        <button type="button" class="aero-d-icon" data-os-open="films"><span class="aero-d-glyph">${J.film}</span><span>Films</span></button>
        <button type="button" class="aero-d-icon" data-os-open="notes"><span class="aero-d-glyph">${J.notes}</span><span>About.txt</span></button>
        <button type="button" class="aero-d-icon" data-os-open="recycle"><span class="aero-d-glyph">${J.recycle}</span><span>Recycle Bin</span></button>
        <button type="button" class="aero-d-icon" data-a-themes><span class="aero-d-glyph">${J.themes}</span><span>Themes</span></button>
        <button type="button" class="aero-d-icon" data-a-original><span class="aero-d-glyph">${J.power}</span><span>Original</span></button>
      </nav>
      <div class="aero-desktop-hint" id="aeroDesktopHint">averybeuth.xyz &middot; click any icon or right-click the desktop</div>
      <div class="aero-win-layer" id="aeroWinLayer"></div>
      <footer class="aero-taskbar-global">
        <button type="button" class="aero-start-orb" data-a-themes aria-label="Start / Themes">${J.winOrb}</button>
        <div class="aero-task-list" id="aeroTaskList"></div>
        <button type="button" class="aero-task-tab" data-a-original>Original site</button>
        <button type="button" class="aero-tray-clock" id="aeroClock" title="System clock"><span id="aeroTime"></span><span id="aeroDate"></span></button>
      </footer>
    `,document.body.appendChild(n);const m=n.querySelector(".aero-bg"),w=n.querySelector(".aero-desktop-icons"),g=n.querySelector("#aeroWinLayer"),x=n.querySelector("#aeroTaskList"),T=n.querySelector("#aeroDesktopHint"),I=new Map;let X=30,se=0,ee=0,P=0,F=[{name:"download_ram.exe",size:"64 GB",note:"failed at 99%"},{name:"homework_final_FINAL_v3.docx",size:"412 KB",note:"made code projects instead"},{name:"unused_beats_2021.zip",size:"84 MB",note:"too many hi-hats"}];const B=()=>{T&&(T.style.opacity=I.size===0?"1":"0")},U=e=>{e.addEventListener("click",h=>{h.stopPropagation(),!e.classList.contains("is-popped")&&(e.classList.add("is-popped"),ee++,T&&I.size===0&&ee>=3&&(T.textContent=`bubbles popped: ${ee}`),setTimeout(()=>{const u=Math.round(24+Math.random()*44),y=(12+Math.random()*78).toFixed(1),$=(10+Math.random()*68).toFixed(1);e.style.width=`${u}px`,e.style.height=`${u}px`,e.style.left=`${y}%`,e.style.top=`${$}%`,e.style.right="auto",e.style.bottom="auto",e.style.animationDuration=`${(6+Math.random()*5).toFixed(1)}s`,e.classList.remove("is-popped")},780))})};n.querySelectorAll(".aero-bubble").forEach(U);const _=(e,h)=>{const u=document.createElement("span");u.className="aero-bubble";const y=Math.round(28+Math.random()*34);u.style.width=`${y}px`,u.style.height=`${y}px`,u.style.left=`${Math.max(8,Math.min(window.innerWidth-y-8,e-y/2))}px`,u.style.top=`${Math.max(8,Math.min(window.innerHeight-y-56,h-y/2))}px`,u.style.animationDuration=`${(6+Math.random()*4).toFixed(1)}s`,U(u),m.appendChild(u)},re=(e=null,h=null)=>{P++,X++;const u=document.createElement("div");u.className="aero-sticky",u.style.zIndex=String(X);const y=["remember to pop the bubbles","right-click desktop for more sticky notes","triple-click the clock if you dare","type something here..."],$=e!=null?Math.min(window.innerWidth-230,Math.max(110,e)):180+P%4*34,k=h!=null?Math.min(window.innerHeight-230,Math.max(30,h)):70+P%4*28;u.style.left=`${$}px`,u.style.top=`${k}px`,u.innerHTML=`
        <div class="aero-sticky-bar">
          <button type="button" data-st-add title="New note">+</button>
          <span>Sticky Note</span>
          <button type="button" data-st-close title="Close">&times;</button>
        </div>
        <textarea class="aero-sticky-text" spellcheck="false">${y[(P-1)%y.length]}</textarea>
      `,g.appendChild(u);const d=Je(u,u.querySelector(".aero-sticky-bar"),()=>{X++,u.style.zIndex=String(X)});u.querySelector("[data-st-add]").addEventListener("click",()=>re()),u.querySelector("[data-st-close]").addEventListener("click",()=>{d(),u.remove()}),i.push(d)};let G=null;const O=()=>{G&&(G.remove(),G=null)};n.addEventListener("contextmenu",e=>{if(e.target.closest(".aero-os-win, .aero-sticky, .aero-taskbar-global"))return;e.preventDefault(),O(),G=document.createElement("div"),G.className="aero-ctx";const h=Math.min(window.innerWidth-196,Math.max(8,e.clientX)),u=Math.min(window.innerHeight-210,Math.max(8,e.clientY));G.style.left=`${h}px`,G.style.top=`${u}px`,G.innerHTML=`
        <button type="button" data-ctx="refresh">Refresh</button>
        <button type="button" data-ctx="sticky">New Sticky Note</button>
        <button type="button" data-ctx="bubble">Spawn Aero Bubble</button>
        <button type="button" data-ctx="themes">Personalize (Themes)</button>
        <button type="button" class="is-faint" data-ctx="secrets">secrets...</button>
      `,G.addEventListener("click",y=>{const $=y.target.closest("[data-ctx]")?.dataset.ctx;O(),$==="refresh"?(w?.classList.add("is-refreshing"),setTimeout(()=>w?.classList.remove("is-refreshing"),140)):$==="sticky"?re(e.clientX,e.clientY):$==="bubble"?_(e.clientX,e.clientY):$==="themes"?q(!0):$==="secrets"&&ce()}),n.appendChild(G)});const xe=e=>{G&&!e.target.closest(".aero-ctx")&&O()};window.addEventListener("pointerdown",xe),i.push(()=>{O(),window.removeEventListener("pointerdown",xe)});const K=document.createElement("div");K.className="aero-marquee",K.hidden=!0,n.appendChild(K);const be=[...n.querySelectorAll(".aero-d-icon")],de=()=>be.forEach(e=>e.classList.remove("is-selected"));let V=null,ae=!1;const pe=e=>{e.button===0&&(e.target.closest(".aero-os-win, .aero-sticky, .aero-taskbar-global, .aero-ctx, .aero-d-icon, .aero-bubble, .aero-bsod")||(de(),V={x:e.clientX,y:e.clientY},ae=!1))},Ce=e=>{if(!V)return;const h=e.clientX-V.x,u=e.clientY-V.y;if(!ae&&Math.hypot(h,u)>4&&(ae=!0,K.hidden=!1,n.classList.add("is-selecting")),!ae)return;const y=Math.min(V.x,e.clientX),$=Math.min(V.y,e.clientY),k=Math.abs(h),d=Math.abs(u);K.style.left=`${y}px`,K.style.top=`${$}px`,K.style.width=`${k}px`,K.style.height=`${d}px`;const M=y+k,L=$+d;be.forEach(N=>{const W=N.getBoundingClientRect(),j=!(W.right<y||W.left>M||W.bottom<$||W.top>L);N.classList.toggle("is-selected",j)})},le=()=>{V&&(V=null,ae&&(ae=!1,K.hidden=!0,n.classList.remove("is-selecting")))},z=e=>{if(e.key!=="Enter"||e.target.closest("input, textarea, button"))return;const h=be.filter(u=>u.classList.contains("is-selected"));h.length&&(e.preventDefault(),h.forEach(u=>{u.dataset.osOpen?he(u.dataset.osOpen):u.hasAttribute("data-a-themes")?q(!0):u.hasAttribute("data-a-original")&&R("original")}),de())};n.addEventListener("pointerdown",pe),window.addEventListener("pointermove",Ce),window.addEventListener("pointerup",le),window.addEventListener("keydown",z),i.push(()=>{n.removeEventListener("pointerdown",pe),window.removeEventListener("pointermove",Ce),window.removeEventListener("pointerup",le),window.removeEventListener("keydown",z)});let ie=0,te=null;n.querySelector("#aeroClock")?.addEventListener("click",()=>{if(ie++,clearTimeout(te),te=setTimeout(()=>{ie=0},900),ie>=3){if(ie=0,n.querySelector(".aero-bsod"))return;const e=document.createElement("div");e.className="aero-bsod",e.innerHTML=`
          <div class="aero-bsod-inner">
            <p>A problem has been detected and averybeuth.xyz has been shut down to prevent excessive nostalgia.</p>
            <p>TOO_MUCH_FRUTIGER_AERO</p>
            <p>If this is the first time you've seen this stop error screen, click anywhere or press any key to reboot the desktop.</p>
            <p>Technical information:</p>
            <p>*** STOP: 0x00000042 (0xAVERY000, 0x00000007, 0x00000375, 0x00000089)</p>
            <p>*** aero_glass.sys - Address FFFFF88001A4B000 base at FFFFF88001A00000</p>
            <p class="aero-bsod-dismiss">[ click anywhere to reboot desktop ]</p>
          </div>
        `;const h=()=>{window.removeEventListener("keydown",h),e.remove()};e.addEventListener("click",h),window.addEventListener("keydown",h),n.appendChild(e)}});const ye=e=>{const h=I.get(e);h&&(X++,h.el.style.zIndex=String(X),h.el.classList.remove("is-minimized"),I.forEach((u,y)=>{u.el.classList.toggle("is-focused",y===e),u.taskBtn.classList.toggle("is-active",y===e)}))},Ie=e=>{const h=I.get(e);h&&(h.cleanupDrag?.(),h.el.remove(),h.taskBtn.remove(),I.delete(e),n.querySelector(`[data-os-open="${e}"]`)?.classList.remove("is-current"),B())},Be=async(e,h,u,y,$)=>{let k=[],d=[],M=J.code,L=!1;if(e==="code"){const b=await Se(p.base);d=b.all,M=J.code,k=[{id:"main",label:"Main",count:b.main.length},{id:"archive",label:"Archive",count:b.archive.length},{id:"all",label:"All Projects",count:b.all.length},{id:"cat:tool",label:"Tools",count:b.all.filter(C=>C.tag==="tool").length},{id:"cat:app",label:"Apps",count:b.all.filter(C=>C.tag==="app"||C.tag==="apps").length},{id:"cat:game",label:"Games",count:b.all.filter(C=>C.tag==="game").length},{id:"cat:website",label:"Websites",count:b.all.filter(C=>C.tag==="website").length}]}else e==="music"?(d=await qe(p.base),M=J.music,k=[{id:"all",label:"All Releases",count:d.length},{id:"singles",label:"Singles",count:d.filter(b=>b.folder==="singles").length},{id:"eps",label:"EPs",count:d.filter(b=>b.folder==="eps").length},{id:"albums",label:"Albums",count:d.filter(b=>b.folder==="albums").length},{id:"soundtracks",label:"Soundtracks",count:d.filter(b=>b.folder==="soundtracks").length}]):e==="films"?(d=await De(p.base),M=J.film,k=[{id:"all",label:"Short Films",count:d.length}]):e==="scripts"?(d=await He(p.base),M=J.scripts,k=[{id:"all",label:"Screenplays",count:d.length}]):e==="photos"&&(L=!0,d=(await Ae(p.base)).map((C,Y)=>({title:C.name,file:C.file,img:C.thumb,full:C.full,width:C.width,height:C.height,tag:C.hex.toUpperCase(),hex:C.hex,desc:`${C.width} × ${C.height} px · Dominant ${C.hex.toUpperCase()} · Color spectrum #${Y+1} (double-click to enlarge)`,folder:C.bucket,folderLabel:C.bucket,typeLabel:"JPG"})),k=[{id:"all",label:"All Colors",count:d.length},{id:"warm",label:"Warm / Red",count:d.filter(C=>C.folder==="warm").length},{id:"gold",label:"Gold / Yellow",count:d.filter(C=>C.folder==="gold").length},{id:"green",label:"Green",count:d.filter(C=>C.folder==="green").length},{id:"blue",label:"Blue / Cyan",count:d.filter(C=>C.folder==="blue").length},{id:"violet",label:"Violet",count:d.filter(C=>C.folder==="violet").length},{id:"mono",label:"Monochrome",count:d.filter(C=>C.folder==="mono").length}]);const N=h.querySelector(".aero-exp-tree-slot"),W=h.querySelector(".aero-exp-list"),j=h.querySelector(".aero-exp-preview");let Q=k[0]?.id||"all",ue="",Z=null,$e="";const tt=()=>d.filter(b=>{if(Q!=="all"){if(Q.startsWith("cat:")){const C=Q.slice(4);if(C==="app"){if(b.tag!=="app"&&b.tag!=="apps")return!1}else if(b.tag!==C)return!1}else if(b.folder!==Q)return!1}return!(ue&&!`${b.title} ${b.tag} ${b.desc}`.toLowerCase().includes(ue))}),je=(b,C)=>{if($e="",!b){j.innerHTML='<div class="aero-prev-empty">Select an item to preview.</div>';return}const Y=b.embed?`<div class="aero-prev-video"><iframe src="${s(b.embed)}" title="${s(b.title)}" allowfullscreen></iframe></div>`:b.img?`<div class="aero-prev-img-wrap ${b.squareArt?"is-square":""}" data-prev-media title="${L?"Double-click for fullscreen":""}"><img src="${s(b.full||b.img)}" alt="${s(b.title)}" /></div>`:`<div class="aero-prev-doc-icon">${M}</div>`,ve=b.soundcloud?'<button type="button" class="aero-prev-btn" data-sc-toggle>Play SoundCloud Preview</button><div data-sc-slot></div>':"",ge=L?'<div class="aero-prev-pnav"><button type="button" class="aero-prev-btn is-secondary" data-p-prev>&lsaquo; Prev</button><button type="button" class="aero-prev-btn is-secondary" data-p-next>Next &rsaquo;</button></div><button type="button" class="aero-prev-btn" data-p-full>Fullscreen Preview</button>':"",Fe=b.links?.length?b.links.map(oe=>`<a class="aero-prev-btn is-secondary" href="${s(oe.href)}" ${oe.href.startsWith("http")?'target="_blank" rel="noopener noreferrer"':""}>${s(oe.label)}</a>`).join(""):b.href&&b.href!=="#"?`<a class="aero-prev-btn" href="${s(b.href)}" ${b.external?'target="_blank" rel="noopener noreferrer"':""}>Open ${s(b.title)} &raquo;</a>`:"",st=b.hex?`<span class="aero-hex-pill"><i style="background:${b.hex}"></i>${s(b.tag)}</span>`:`<span class="aero-prev-tag">${s(b.tag)}</span>`;j.innerHTML=`
          ${Y}
          <div class="aero-prev-meta"><h3 class="aero-prev-title">${s(b.title)}</h3>${st}</div>
          <p class="aero-prev-desc">${s(b.desc)}</p>
          <div class="aero-prev-actions">${ve}${ge}${Fe}</div>
        `,j.querySelector("[data-sc-toggle]")?.addEventListener("click",oe=>{const Xe=j.querySelector("[data-sc-slot]");if($e===b.soundcloud){$e="",Xe.innerHTML="",oe.target.textContent="Play SoundCloud Preview";return}$e=b.soundcloud;const at=b.soundcloud.includes("/sets/"),nt=`https://w.soundcloud.com/player/?url=${encodeURIComponent(b.soundcloud)}&color=%232b89d8&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;Xe.innerHTML=`<iframe class="aero-sc-iframe" title="SoundCloud preview" width="100%" height="${at?220:115}" scrolling="no" frameborder="no" allow="autoplay" src="${nt}"></iframe>`,oe.target.textContent="Stop Preview"}),j.querySelector("[data-p-prev]")?.addEventListener("click",()=>{const oe=C.indexOf(b);oe>0&&(Z=C[oe-1],Me())}),j.querySelector("[data-p-next]")?.addEventListener("click",()=>{const oe=C.indexOf(b);oe>=0&&oe<C.length-1&&(Z=C[oe+1],Me())});const Ye=()=>{L&&Pe(C,C.indexOf(b))};j.querySelector("[data-p-full]")?.addEventListener("click",Ye);const Ne=j.querySelector("[data-prev-media]");Ne&&L&&(Ne.style.cursor="pointer",Ne.title="Click for fullscreen preview",Ne.addEventListener("click",Ye))},We=()=>{N.innerHTML=k.map(b=>`
          <button type="button" class="aero-tree-item ${b.id===Q?"is-selected":""}" data-fid="${s(b.id)}">
            ${J.folder}<span>${s(b.label)}</span><em>${b.count}</em>
          </button>
        `).join(""),N.querySelectorAll("[data-fid]").forEach(b=>b.addEventListener("click",()=>{Q=b.dataset.fid,We(),Me()}))},Me=()=>{const b=tt(),C=k.find(Y=>Y.id===Q);if(u.innerHTML=`Computer &rsaquo; Avery &rsaquo; ${s(e[0].toUpperCase()+e.slice(1))} &rsaquo; <strong>${s(C?.label||"All")}</strong>`,y.textContent=`${b.length} ${b.length===1?"item":"items"}`,!b.length){W.innerHTML='<div class="aero-empty-folder">No matching items.</div>',Z=null,je(null,b);return}(!Z||!b.includes(Z))&&(Z=b[0]),L?(W.classList.add("is-photo-grid"),W.innerHTML=b.map((Y,ve)=>`
            <button type="button" class="aero-photo-tile ${Y===Z?"is-selected":""}" data-idx="${ve}" title="${s(Y.title)} (${Y.hex}) · click preview for fullscreen">
              <img src="${s(Y.img)}" alt="${s(Y.title)}" loading="lazy" />
              <span class="aero-photo-chip" style="background:${Y.hex}"></span>
            </button>
          `).join("")):(W.classList.remove("is-photo-grid"),W.innerHTML=b.map((Y,ve)=>`
            <button type="button" class="aero-file-row ${Y===Z?"is-selected":""}" data-idx="${ve}">
              <span class="aero-file-name">${M}<span>${s(Y.title)}</span></span>
              <span class="aero-file-type">${s(Y.typeLabel)}</span>
              <span class="aero-file-folder">${s(Y.folderLabel)}</span>
            </button>
          `).join("")),W.querySelectorAll("[data-idx]").forEach(Y=>{const ve=Number(Y.dataset.idx),ge=b[ve];Y.addEventListener("click",()=>{Z=ge,W.querySelectorAll("[data-idx]").forEach(Fe=>Fe.classList.toggle("is-selected",Fe===Y)),je(ge,b)}),Y.addEventListener("dblclick",()=>{if(L){Pe(b,ve);return}!ge.href||ge.href==="#"||(ge.external?window.open(ge.href,"_blank","noopener,noreferrer"):window.location.href=ge.href)})}),je(Z,b)};$?.addEventListener("input",()=>{ue=($.value||"").trim().toLowerCase(),Me()}),We(),Me()},he=e=>{if(I.has(e)){ye(e);return}const u={photos:"Photos | Windows Photo Gallery",code:"Code | Windows Explorer",music:"Music | Windows Explorer",films:"Films | Windows Explorer",scripts:"Scripts | Windows Explorer",notes:"About.txt | Notepad",recycle:"Recycle Bin | Windows Explorer"}[e]||"Window",y=se%5*36,$=se%5*28;se++;const k=document.createElement("section");if(k.className=e==="notes"||e==="recycle"?"aero-os-win is-notepad":"aero-os-win is-explorer",k.dataset.wx=String(y),k.dataset.wy=String($),e==="notes")k.innerHTML=`
          <div class="aero-win-titlebar aero-win-handle">
            <span class="aero-win-title">${s(u)}</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-w-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-w-close title="Close">&times;</button>
            </div>
          </div>
          <div class="aero-note-body">
            <p><strong>Avery Beuth</strong> (@avery.beuth)</p>
            <p>Photographer, filmmaker, composer &amp; developer from Aotearoa.</p>
            <p>Open multiple windows at once, drag titlebars to arrange them, right-click the wallpaper for sticky notes, or pop the bubbles.</p>
            <p><a href="https://github.com/averywsc" target="_blank" rel="noopener">github.com/averywsc</a> &middot; <a href="mailto:averybeuth3@gmail.com">averybeuth3@gmail.com</a></p>
            <button type="button" class="aero-note-secret" data-note-secrets>psst: secrets</button>
          </div>
        `;else if(e==="recycle")k.innerHTML=`
          <div class="aero-win-titlebar aero-win-handle">
            <span class="aero-win-title">${s(u)}</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-w-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-w-close title="Close">&times;</button>
            </div>
          </div>
          <div class="aero-bin-bar">
            <button type="button" class="aero-cmd-btn" data-bin-empty>Empty Recycle Bin</button>
            <span class="aero-bin-count" data-bin-count></span>
          </div>
          <div class="aero-note-body aero-bin-body" data-bin-list></div>
        `;else{const L=e==="music"?'<a class="aero-cmd-btn" href="https://averywsc.github.io/bebeat/" target="_blank" rel="noopener">Open bebeat</a>':e==="films"?'<a class="aero-cmd-btn" href="https://averywsc.github.io/colorstudies/" target="_blank" rel="noopener">guides/LUTs</a><a class="aero-cmd-btn" href="https://averywsc.github.io/fifilm/" target="_blank" rel="noopener">fifilm</a>':"";k.innerHTML=`
          <div class="aero-win-titlebar aero-win-handle">
            <span class="aero-win-title">${s(u)}</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-w-min title="Minimize">_</button>
              <button type="button" class="aero-win-btn is-close" data-w-close title="Close">&times;</button>
            </div>
          </div>
          <div class="aero-addr-bar">
            <div class="aero-nav-orbs" aria-hidden="true"><span>${J.backArrow}</span><span>${J.fwdArrow}</span></div>
            <div class="aero-breadcrumb">Loading...</div>
            <input type="search" class="aero-exp-search" placeholder="Search ${s(e)}..." aria-label="Search" />
          </div>
          <div class="aero-cmd-bar">
            <button type="button" class="aero-cmd-btn" data-w-themes>Themes</button>
            ${L}
            <button type="button" class="aero-cmd-btn" data-w-open-other="photos">Photos</button>
            <button type="button" class="aero-cmd-btn" data-w-open-other="code">Code</button>
            <button type="button" class="aero-cmd-btn" data-w-open-other="music">Music</button>
            <button type="button" class="aero-cmd-btn" data-w-open-other="films">Films</button>
          </div>
          <div class="aero-exp-body">
            <aside class="aero-exp-tree"><div class="aero-tree-head">Folders</div><div class="aero-exp-tree-slot"></div></aside>
            <div class="aero-exp-list-wrap">
              ${e==="photos"?"":'<div class="aero-exp-cols"><span>Name</span><span>Type</span><span>Folder</span></div>'}
              <div class="aero-exp-list"><div class="aero-empty-folder">Loading...</div></div>
            </div>
            <aside class="aero-exp-preview"><div class="aero-prev-empty">Loading preview...</div></aside>
          </div>
          <div class="aero-exp-status"><span class="aero-st-count">Loading...</span><span>Drag titlebar to move &middot; Click preview for fullscreen</span></div>
        `}g.appendChild(k);const d=document.createElement("button");d.type="button",d.className="aero-task-tab is-active",d.textContent=u.split(" | ")[0],d.addEventListener("click",()=>{k.classList.contains("is-minimized")?ye(e):k.classList.contains("is-focused")?(k.classList.add("is-minimized"),d.classList.remove("is-active")):ye(e)}),x.appendChild(d),n.querySelector(`[data-os-open="${e}"]`)?.classList.add("is-current");const M=Je(k,k.querySelector(".aero-win-handle"),()=>ye(e));if(I.set(e,{el:k,taskBtn:d,cleanupDrag:M}),ye(e),B(),k.querySelector("[data-w-min]")?.addEventListener("click",()=>{k.classList.add("is-minimized"),d.classList.remove("is-active")}),k.querySelector("[data-w-close]")?.addEventListener("click",()=>Ie(e)),k.querySelector("[data-w-themes]")?.addEventListener("click",()=>q()),k.querySelector("[data-note-secrets]")?.addEventListener("click",()=>ce()),k.querySelectorAll("[data-w-open-other]").forEach(L=>L.addEventListener("click",()=>he(L.dataset.wOpenOther))),e==="recycle"){const L=k.querySelector("[data-bin-list]"),N=k.querySelector("[data-bin-count]"),W=()=>{if(!F.length){L.innerHTML='<p style="color:#678099;">Recycle Bin is empty. Desktop feels 4% lighter.</p>',N.textContent="0 items";return}N.textContent=`${F.length} items`,L.innerHTML=F.map(j=>`<div class="aero-bin-row"><strong>${s(j.name)}</strong><span>${s(j.size)}</span><em>${s(j.note)}</em></div>`).join("")};k.querySelector("[data-bin-empty]")?.addEventListener("click",()=>{F=[],W()}),W()}else e!=="notes"&&Be(e,k.querySelector(".aero-exp-body"),k.querySelector(".aero-breadcrumb"),k.querySelector(".aero-st-count"),k.querySelector(".aero-exp-search"))};n.querySelectorAll("[data-os-open]").forEach(e=>e.addEventListener("click",()=>he(e.dataset.osOpen))),n.querySelectorAll("[data-a-themes]").forEach(e=>e.addEventListener("click",()=>q())),n.querySelectorAll("[data-a-secrets]").forEach(e=>e.addEventListener("click",()=>ce())),n.querySelectorAll("[data-a-original]").forEach(e=>e.addEventListener("click",()=>R("original")));const Te=()=>{const e=new Date,h=document.getElementById("aeroTime"),u=document.getElementById("aeroDate");h&&(h.textContent=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),u&&(u.textContent=e.toLocaleDateString([],{day:"2-digit",month:"2-digit",year:"numeric"}))};Te();const Oe=setInterval(Te,15e3);i.push(()=>{clearInterval(Oe),I.forEach(e=>e.cleanupDrag?.()),I.clear()}),["photos","code","music","films","scripts"].includes(p.slug)&&he(p.slug)},f=(p,n,m,w=60)=>{let g="all",x=!1;const T=["took this one","good lighting","nice color","camera worked","found this outside","pretty neat","yes"];p.innerHTML=`
      <div class="tp-filters" data-tp-filters>
        <button type="button" class="is-active" data-bucket="all">All (${n.length})</button>
        <button type="button" data-bucket="warm">Warm</button>
        <button type="button" data-bucket="gold">Gold</button>
        <button type="button" data-bucket="green">Green</button>
        <button type="button" data-bucket="blue">Blue</button>
        <button type="button" data-bucket="violet">Violet</button>
        <button type="button" data-bucket="mono">Monochrome</button>
      </div>
      <div class="tp-grid" data-tp-grid></div>
      <div class="tp-more-wrap" data-tp-more></div>
    `;const I=p.querySelector("[data-tp-grid]"),X=p.querySelector("[data-tp-filters]"),se=p.querySelector("[data-tp-more]"),ee=()=>{const P=g==="all"?n:n.filter(U=>U.bucket===g),F=x?P:P.slice(0,w);I.innerHTML=F.map((U,_)=>{const re=m==="silly"?T[_%T.length]:m==="paper"?`PLATE ${String(_+1).padStart(3,"0")} · ${U.hex.toUpperCase()}`:`SPEC-${String(_+1).padStart(3,"0")} // ${U.hex.toUpperCase()}`;return`
          <button type="button" class="tp-card" data-pidx="${_}" title="Click or double-click for fullscreen">
            ${m==="silly"?'<span class="tp-tape" aria-hidden="true"></span>':""}
            <div class="tp-img-wrap"><img src="${s(U.thumb)}" alt="${s(U.name)}" loading="lazy" /></div>
            <div class="tp-cap"><i style="background:${U.hex}"></i><span>${s(re)}</span></div>
          </button>
        `}).join("");const B=U=>{const _=U.target.closest("[data-pidx]");_&&Pe(P,Number(_.dataset.pidx))};I.onclick=B,I.ondblclick=B,!x&&P.length>w?(se.innerHTML=`<button type="button" class="tp-more-btn">Show all ${P.length} photos</button>`,se.querySelector("button").addEventListener("click",()=>{x=!0,ee()})):se.innerHTML=""};X.addEventListener("click",P=>{const F=P.target.closest("[data-bucket]");F&&(g=F.dataset.bucket,x=!1,X.querySelectorAll("button").forEach(B=>B.classList.toggle("is-active",B===F)),ee())}),ee()},r=()=>{const p=Ee();if(Re()){const n=document.createElement("main");n.className="theme-photos-page is-silly",n.setAttribute("data-theme-injected","1"),n.innerHTML=`
        <header class="tp-head">
          <nav class="silly-sub-nav">
            <a href="./">home</a>
            <a href="./?photos=1" class="is-on">photos</a>
            <a href="./code.html">code</a>
            <a href="./scripts/index.html">scripts</a>
            <a href="./music.html">music</a>
            <a href="./film.html">films</a>
            <button type="button" data-tp-themes>themes</button>
            <button type="button" data-tp-orig>normal site</button>
          </nav>
          <h1>photos (sorted by color)</h1>
          <p>click any photo to look at it bigger. the tape is decorative.</p>
        </header>
        <div id="sillyPhotoSlot"><div class="tp-loading">Sorting 375 photos by color...</div></div>
      `,document.body.appendChild(n),n.querySelector("[data-tp-themes]")?.addEventListener("click",()=>q()),n.querySelector("[data-tp-orig]")?.addEventListener("click",()=>R("original")),Ae(".").then(m=>f(n.querySelector("#sillyPhotoSlot"),m,"silly",80));return}if(we()){let n=Number(sessionStorage.getItem("avery_silly_hits")||"42")+1;sessionStorage.setItem("avery_silly_hits",String(n));let m=0,w=0;const g=document.createElement("main");g.className="theme-home theme-home-silly",g.setAttribute("data-theme-injected","1"),g.innerHTML=`
        <div class="silly-sheet" id="sillySheet">
          <div class="silly-top-doodle">
            <button type="button" class="silly-face-btn" id="sillyFace" aria-label="Paint smiley">${J.paintFace}</button>
            <div>
              <h1 id="sillyTitle" style="cursor:pointer;">avery beuth</h1>
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
            <button type="button" class="silly-gag-btn" id="sillyHitBtn">visitor #<span id="sillyHits">${String(n).padStart(6,"0")}</span></button>
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
            <button type="button" class="silly-hidden-secret" data-s-secrets>best viewed in 800&times;600</button>
            <div>
              <button type="button" data-s-themes>themes</button>
              <button type="button" data-s-original>normal website</button>
            </div>
          </div>
        </div>
        <div class="silly-fallen-rescue" id="sillyRescue" hidden>
          <p>well done. you knocked the entire website over.</p>
          <button type="button" id="sillyPickUp">pick the website back up</button>
        </div>
      `,document.body.appendChild(g);const x=g.querySelector("#sillySheet"),T=g.querySelector("#sillyMsg"),I=g.querySelector("#sillyRescue"),X=g.querySelector("#sillyGuestForm"),se=g.querySelector("#sillyGuestInput"),ee=g.querySelector("#sillyGuestLog");g.querySelector("#sillyHitBtn")?.addEventListener("click",()=>{n++,sessionStorage.setItem("avery_silly_hits",String(n)),g.querySelector("#sillyHits").textContent=String(n).padStart(6,"0"),T.textContent="congrats you inflated my analytics"});let P=0;const F=g.querySelector("#sillyFace");F?.addEventListener("click",()=>{P++,F.style.transform=`rotate(${(P%2?1:-1)*16}deg) scale(1.12)`,setTimeout(()=>{F.style.transform=""},220),P===1?T.textContent="hey dont poke me":P===2?T.textContent="seriously stop poking my face":P===3?T.textContent="i am literally an svg":(F.innerHTML='<svg viewBox="0 0 44 44" width="38" height="38" aria-hidden="true"><circle cx="22" cy="22" r="18" fill="#fff59d" stroke="#1c1c1c" stroke-width="2.4"/><rect x="10" y="14" width="10" height="6" rx="1.5" fill="#1c1c1c"/><rect x="24" y="14" width="10" height="6" rx="1.5" fill="#1c1c1c"/><path d="M20 16.5h4" stroke="#1c1c1c" stroke-width="2"/><path d="M14 27c3.5 3.5 12 4 16-0.5" fill="none" stroke="#1c1c1c" stroke-width="2.3" stroke-linecap="round"/></svg>',T.textContent="fine. sunglasses mode activated.")}),g.querySelector("#sillyGuestBtn")?.addEventListener("click",()=>{X.hidden=!X.hidden,X.hidden||se.focus()}),X?.addEventListener("submit",U=>{U.preventDefault();const _=(se.value||"").trim();if(!_)return;se.value="";const re=_.toLowerCase().includes("avery");T.textContent=`saving "${_}" to database...`,setTimeout(()=>{T.textContent=re?"wait thats my name. identity theft reported.":"just kidding theres no backend";const G=document.createElement("div");G.textContent=re?`${_} (imposter)`:`${_} (definitely not saved)`,ee.appendChild(G)},650)}),g.querySelector("#sillyFontBtn")?.addEventListener("click",U=>{w=(w+1)%4;const _=["1","1.18","1.38","1.62"];x.style.setProperty("--sf",_[w]),U.target.textContent=w===3?"ok make it normal again":"make font bigger",T.textContent=w===3?"this is getting out of hand":w===0?"back to reasonable sizing.":"bigger."}),g.querySelector("#sillyDarkBtn")?.addEventListener("click",()=>{x.classList.add("is-cursed-dark"),T.textContent="",setTimeout(()=>{x.classList.remove("is-cursed-dark"),T.textContent="sorry i forgot to change the text color"},1250)});const B=[0,5,13,25,42];g.querySelector("#sillyTiltBtn")?.addEventListener("click",()=>{if(m++,m<B.length){const U=B[m];x.style.transform=`rotate(${U}deg)`;const _=["","i literally said do not press","it is starting to slide...","ok seriously stop pressing it","uh oh"];T.textContent=_[m]||"uh oh",U>=40&&setTimeout(()=>{x.classList.add("is-fallen"),I.hidden=!1},320)}}),g.querySelector("#sillyPickUp")?.addEventListener("click",()=>{m=0,x.classList.remove("is-fallen"),x.style.transform="",I.hidden=!0,T.textContent="thank you. please do not press it again."}),g.querySelector("#sillyTitle")?.addEventListener("click",U=>{const _=U.currentTarget;_.classList.remove("silly-wobble"),_.offsetWidth,_.classList.add("silly-wobble"),T.textContent="boing"}),g.querySelector("[data-s-themes]")?.addEventListener("click",()=>q()),g.querySelector("[data-s-secrets]")?.addEventListener("click",()=>ce()),g.querySelector("[data-s-original]")?.addEventListener("click",()=>R("original"))}else{const n=document.querySelector(".page-wrap");if(!n)return;const m=document.createElement("nav");m.className="silly-sub-nav",m.setAttribute("data-theme-injected","1"),m.innerHTML=`
        <a href="${p.base}/">home</a>
        <a href="${p.base}/?photos=1">photos</a>
        <a href="${p.base}/code.html" class="${p.slug==="code"?"is-on":""}">code</a>
        <a href="${p.base}/scripts/index.html" class="${p.slug.startsWith("scripts")?"is-on":""}">scripts</a>
        <a href="${p.base}/music.html" class="${p.slug==="music"?"is-on":""}">music</a>
        <a href="${p.base}/film.html" class="${p.slug==="films"?"is-on":""}">films</a>
        <button type="button" data-s-themes>themes</button>
        <button type="button" data-s-original>normal site</button>
      `,n.prepend(m),m.querySelector("[data-s-themes]")?.addEventListener("click",()=>q()),m.querySelector("[data-s-original]")?.addEventListener("click",()=>R("original"))}},S=()=>{const p=Ee();if(we()){const n=document.createElement("main");n.className="theme-home theme-home-paper",n.setAttribute("data-theme-injected","1"),n.innerHTML=`
        <article class="paper-frontpage">
          <header class="paper-masthead">
            <div class="paper-mast-meta"><button type="button" class="paper-meta-secret" id="paperAuckland">AUCKLAND, NEW ZEALAND</button><button type="button" class="paper-meta-secret" data-p-secrets>VOL. IV &middot; COMPLETE ARCHIVAL EDITION</button><span>AVERYBEUTH.XYZ</span></div>
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
      `,document.body.appendChild(n),n.querySelector("[data-p-themes]")?.addEventListener("click",()=>q()),n.querySelector("[data-p-secrets]")?.addEventListener("click",()=>ce()),n.querySelector("[data-p-original]")?.addEventListener("click",()=>R("original")),Se(".").then(m=>{n.querySelector("#paperCodeMain").innerHTML=m.main.map(w=>`
          <article class="paper-story">
            <a class="paper-story-img" href="${s(w.href)}" target="_blank" rel="noopener"><img src="${s(w.img)}" alt="${s(w.title)}" loading="lazy" /></a>
            <span class="paper-story-tag">${s(w.tag)}</span>
            <h3><a href="${s(w.href)}" target="_blank" rel="noopener">${s(w.title)}</a></h3>
            <p>${s(w.desc)}</p>
          </article>
        `).join(""),n.querySelector("#paperCodeArchive").innerHTML=m.archive.map(w=>`
          <a class="paper-classified" href="${s(w.href)}" target="_blank" rel="noopener">
            <strong>${s(w.title)}</strong> <em>[${s(w.tag)}]</em>: ${s(w.desc)}
          </a>
        `).join("")}),De(".").then(m=>{n.querySelector("#paperFilmsSlot").innerHTML=m.map(w=>`
          <article class="paper-film-story">
            ${w.embed?`<div class="paper-embed"><iframe src="${s(w.embed)}" title="${s(w.title)}" allowfullscreen></iframe></div>`:""}
            <h3>${s(w.title)}</h3>
            <div class="paper-story-tag">${s(w.tag)}</div>
            <p>${s(w.desc)}</p>
            ${w.links.map(g=>`<a class="paper-inline-link" href="${s(g.href)}">${s(g.label)} &rarr;</a>`).join(" ")}
          </article>
        `).join("")}),He(".").then(m=>{n.querySelector("#paperScriptsSlot").innerHTML=m.map(w=>`
          <article class="paper-script-item">
            <h4><a href="${s(w.href)}">${s(w.title)}</a></h4>
            <div class="paper-story-tag">${s(w.tag)}</div>
            <p>${s(w.desc)}</p>
            <div class="paper-item-links">${w.links.map(g=>`<a href="${s(g.href)}">${s(g.label)}</a>`).join(" &middot; ")}</div>
          </article>
        `).join("")}),qe(".").then(m=>{n.querySelector("#paperMusicSlot").innerHTML=m.map(w=>`
          <article class="paper-music-item">
            <img src="${s(w.img)}" alt="${s(w.title)}" loading="lazy" />
            <div>
              <h4>${s(w.title)}</h4>
              <div class="paper-story-tag">${s(w.tag)}</div>
              <p>${s(w.desc)}</p>
              <div class="paper-item-links">${w.links.map(g=>`<a href="${s(g.href)}" target="_blank" rel="noopener">${s(g.label)}</a>`).join(" &middot; ")}</div>
            </div>
          </article>
        `).join("")}),Ae(".").then(m=>{let w=Math.floor(Math.random()*m.length);const g=n.querySelector("#paperHeroPlate"),x=P=>{const F=m[P]||m[0];!F||!g||(w=P,g.innerHTML=`<img src="${s(F.thumb)}" alt="${s(F.name)}" /><figcaption>FIG. 1: ${s(F.file)} (${F.hex.toUpperCase()}). Click to inspect.</figcaption>`)};x(w),g.style.cursor="pointer",g.addEventListener("click",()=>Pe(m,w));let T=0,I=null;n.querySelector("#paperMastTitle")?.addEventListener("click",()=>{if(T++,clearTimeout(I),I=setTimeout(()=>{T=0},900),T>=3){T=0;const P=n.querySelector("#paperExtraBanner");P&&(P.hidden=!1);const F=Math.floor(Math.random()*m.length);x(F)}});const X=n.querySelector("#paperAuckland"),se=["AUCKLAND, NZ · 16°C PROBABLY WINDY","AUCKLAND, NZ · FOUR SEASONS IN 20 MIN","AUCKLAND, NEW ZEALAND"];let ee=0;X?.addEventListener("click",()=>{X.textContent=se[ee%se.length],ee++}),f(n.querySelector("#paperPhotosSlot"),m,"paper",48),Re()&&setTimeout(()=>n.querySelector("#paper-photos")?.scrollIntoView({behavior:"smooth"}),120)})}else{const n=document.querySelector(".page-wrap");if(!n)return;const m=document.createElement("header");m.className="paper-masthead",m.setAttribute("data-theme-injected","1"),m.innerHTML=`
        <div class="paper-mast-meta"><span>AUCKLAND, NEW ZEALAND</span><button type="button" class="paper-meta-secret" data-p-secrets>SECTION: ${s(p.title.toUpperCase())}</button><span>AVERYBEUTH.XYZ</span></div>
        <div class="paper-mast-brand">THE AVERY CHRONICLE</div>
        <nav class="paper-mast-nav">
          <a href="${p.base}/">Complete Edition</a>
          <a href="${p.base}/?photos=1">Photographs</a>
          <a href="${p.base}/code.html" class="${p.slug==="code"?"is-on":""}">Code</a>
          <a href="${p.base}/scripts/index.html" class="${p.slug.startsWith("scripts")?"is-on":""}">Scripts</a>
          <a href="${p.base}/music.html" class="${p.slug==="music"?"is-on":""}">Music</a>
          <a href="${p.base}/film.html" class="${p.slug==="films"?"is-on":""}">Films</a>
          <button type="button" data-p-themes>Themes</button>
          <button type="button" data-p-original>Original</button>
        </nav>
      `,n.prepend(m),m.querySelector("[data-p-themes]")?.addEventListener("click",()=>q()),m.querySelector("[data-p-secrets]")?.addEventListener("click",()=>ce()),m.querySelector("[data-p-original]")?.addEventListener("click",()=>R("original"))}},E=()=>{const p=Ee();if(we()){const n=document.createElement("main");n.className="theme-home theme-home-cobalt",n.setAttribute("data-theme-injected","1"),n.innerHTML=`
        <section class="cobalt-sheet is-master">
          <div class="cobalt-ruler" id="cobaltRuler">
            <button type="button" data-cgrid="A1">A1</button><button type="button" data-cgrid="B1">B1</button><button type="button" data-cgrid="C1">C1</button><button type="button" data-cgrid="D1">D1</button><button type="button" data-cgrid="E1">E1</button><button type="button" data-cgrid="F1">F1</button>
          </div>
          <div class="cobalt-titleblock">
            <span id="cobaltDwgRef">DWG NO. AB-MASTER // FULL PORTFOLIO DOSSIER</span>
            <button type="button" class="cobalt-scale-secret" id="cobaltScaleSecret">SCALE 1:1 // GRID 28MM</button>
            <button type="button" class="cobalt-scale-secret" data-c-secrets>REV 2026 // AVERY BEUTH</button>
          </div>
          <nav class="cobalt-sheet-nav" id="cobaltTabs">
            <button type="button" class="is-on" data-csheet="all">ALL SHEETS</button>
            <button type="button" data-csheet="code">S-01 CODE</button>
            <button type="button" data-csheet="music">S-02 MUSIC</button>
            <button type="button" data-csheet="media">S-03 FILMS &amp; SCRIPTS</button>
            <button type="button" data-csheet="photos">S-04 PHOTOS</button>
            <button type="button" data-c-themes>THEMES</button>
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
      `,document.body.appendChild(n),n.querySelector("[data-c-themes]")?.addEventListener("click",()=>q()),n.querySelector("[data-c-secrets]")?.addEventListener("click",()=>ce()),n.querySelector("[data-c-original]")?.addEventListener("click",()=>R("original")),n.querySelector("#cobaltScaleSecret")?.addEventListener("click",g=>{const x=document.documentElement.classList.toggle("is-cobalt-whiteprint");g.target.textContent=x?"DIAZO WHITEPRINT // 1:1":"SCALE 1:1 // GRID 28MM"}),i.push(()=>document.documentElement.classList.remove("is-cobalt-whiteprint"));const m=n.querySelector("#cobaltDwgRef");n.querySelectorAll("[data-cgrid]").forEach(g=>g.addEventListener("click",()=>{n.querySelectorAll("[data-cgrid]").forEach(T=>T.classList.toggle("is-locked",T===g));const x=g.dataset.cgrid;m&&(m.textContent=`LOCKED REF ${x} // 36.8485° S, 174.7633° E`)}));const w=g=>{n.querySelectorAll("[data-csheet]").forEach(x=>x.classList.toggle("is-on",x.dataset.csheet===g)),n.querySelectorAll("[data-csec]").forEach(x=>{x.hidden=g!=="all"&&x.dataset.csec!==g})};n.querySelectorAll("[data-csheet]").forEach(g=>g.addEventListener("click",()=>w(g.dataset.csheet))),Re()&&w("photos"),Se(".").then(g=>{n.querySelector("#cobaltCodeMain").innerHTML=g.main.map((x,T)=>`
          <article class="cobalt-card">
            <div class="cobalt-card-num">ITEM ${String(T+1).padStart(2,"0")} // ${s(x.tag.toUpperCase())}</div>
            <a class="cobalt-thumb" href="${s(x.href)}" target="_blank" rel="noopener"><img src="${s(x.img)}" alt="${s(x.title)}" loading="lazy" /></a>
            <h3><a href="${s(x.href)}" target="_blank" rel="noopener">${s(x.title)}</a></h3>
            <p>${s(x.desc)}</p>
          </article>
        `).join(""),n.querySelector("#cobaltCodeArchive").innerHTML=g.archive.map((x,T)=>`
          <a class="cobalt-arch-row" href="${s(x.href)}" target="_blank" rel="noopener">
            <span>A-${String(T+1).padStart(2,"0")}</span>
            <strong>${s(x.title)}</strong>
            <em>${s(x.tag)}</em>
            <small>${s(x.desc)}</small>
          </a>
        `).join("")}),qe(".").then(g=>{n.querySelector("#cobaltMusicSlot").innerHTML=g.map((x,T)=>`
          <article class="cobalt-music-row">
            <img src="${s(x.img)}" alt="${s(x.title)}" loading="lazy" />
            <div>
              <div class="cobalt-card-num">AUD-${String(T+1).padStart(2,"0")} // ${s(x.tag.toUpperCase())}</div>
              <h4>${s(x.title)}</h4>
              <p>${s(x.desc)}</p>
              <div class="cobalt-links">${x.links.map(I=>`<a href="${s(I.href)}" target="_blank" rel="noopener">[${s(I.label.toUpperCase())}]</a>`).join(" ")}</div>
            </div>
          </article>
        `).join("")}),De(".").then(g=>{n.querySelector("#cobaltFilmsSlot").innerHTML=g.map((x,T)=>`
          <article class="cobalt-film-item">
            <div class="cobalt-card-num">REEL-${String(T+1).padStart(2,"0")} // ${s(x.tag.toUpperCase())}</div>
            ${x.embed?`<div class="paper-embed"><iframe src="${s(x.embed)}" title="${s(x.title)}" allowfullscreen></iframe></div>`:""}
            <h4>${s(x.title)}</h4>
            <p>${s(x.desc)}</p>
          </article>
        `).join("")}),He(".").then(g=>{n.querySelector("#cobaltScriptsSlot").innerHTML=g.map((x,T)=>`
          <article class="cobalt-script-row">
            <div class="cobalt-card-num">DOC-${String(T+1).padStart(2,"0")} // ${s(x.tag.toUpperCase())}</div>
            <h4><a href="${s(x.href)}">${s(x.title)}</a></h4>
            <p>${s(x.desc)}</p>
            <div class="cobalt-links">${x.links.map(I=>`<a href="${s(I.href)}">[${s(I.label.toUpperCase())}]</a>`).join(" ")}</div>
          </article>
        `).join("")}),Ae(".").then(g=>{f(n.querySelector("#cobaltPhotosSlot"),g,"cobalt",48)})}else{const n=document.querySelector(".page-wrap");if(!n)return;const m=document.createElement("header");m.className="cobalt-sub-header",m.setAttribute("data-theme-injected","1"),m.innerHTML=`
        <div class="cobalt-titleblock">
          <span>DWG NO. AB-${s(p.slug.toUpperCase())}</span>
          <span>LAYER: ${s(p.title.toUpperCase())} // SCALE 1:1</span>
          <button type="button" class="cobalt-scale-secret" data-c-secrets>CYANOTYPE ARCHIVE // 2026</button>
        </div>
        <nav class="cobalt-sheet-nav">
          <a href="${p.base}/">FULL DOSSIER</a>
          <a href="${p.base}/?photos=1">S-04 PHOTOS</a>
          <a href="${p.base}/code.html" class="${p.slug==="code"?"is-on":""}">S-01 CODE</a>
          <a href="${p.base}/music.html" class="${p.slug==="music"?"is-on":""}">S-02 MUSIC</a>
          <a href="${p.base}/scripts/index.html" class="${p.slug.startsWith("scripts")?"is-on":""}">S-03 SCRIPTS</a>
          <a href="${p.base}/film.html" class="${p.slug==="films"?"is-on":""}">S-03 FILMS</a>
          <button type="button" data-c-themes>THEMES</button>
          <button type="button" data-c-original>ORIGINAL</button>
        </nav>
      `,n.prepend(m),m.querySelector("[data-c-themes]")?.addEventListener("click",()=>q()),m.querySelector("[data-c-secrets]")?.addEventListener("click",()=>ce()),m.querySelector("[data-c-original]")?.addEventListener("click",()=>R("original"))}},c=p=>{l(),p==="terminal"?o():p==="frutiger"?v():p==="silly"?r():p==="paper"?S():p==="cobalt"&&E(),Ue(),requestAnimationFrame(Ue),setTimeout(Ue,60)},D=p=>p==="original"?`
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
      `:p==="terminal"?`
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
      `:p==="frutiger"?`
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
      `:p==="silly"?`
        <div class="tpv tpv-silly" aria-hidden="true">
          <div class="tpv-silly-card">
            <div class="tpv-silly-head"><span class="face"></span><b>avery</b></div>
            <div class="tpv-silly-boxes"><span class="y"></span><span></span></div>
            <div class="tpv-silly-btns"><span>font+</span><span class="r">do not</span></div>
          </div>
        </div>
      `:p==="paper"?`
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
    `,A=()=>{if(!t)return;const p=ke.find(m=>m.id===a)||ke[0],n=t.querySelector("#themesActivePill");n&&(n.textContent=p.name.toLowerCase()),t.querySelectorAll(".theme-card").forEach(m=>{m.classList.toggle("is-active",m.dataset.themeId===a)})},H=()=>{!t||t.hidden||(t.classList.remove("is-open"),setTimeout(()=>{t&&(t.hidden=!0)},190))},R=p=>{const n=a,m=Ee();if(a=et(p),a==="original"){if(we()&&n!=="original"){window.location.href="./";return}c("original"),A(),H();return}if(!(we()&&!Re())){window.location.href=`${m.base}/`;return}c(a),A(),H()},q=(p=null)=>{if(t||(t=document.createElement("aside"),t.className="themes-popover",t.setAttribute("role","dialog"),t.setAttribute("aria-label","Site themes"),t.hidden=!0,t.innerHTML=`
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
          ${ke.map(m=>`
            <button type="button" class="theme-card" data-theme-id="${m.id}">
              <div class="theme-card-preview">${D(m.id)}</div>
              <div class="theme-card-meta">
                <div class="theme-card-top">
                  <span class="theme-card-num">${m.num}</span>
                  <strong class="theme-card-name">${m.name}</strong>
                  <span class="theme-card-badge">active</span>
                </div>
                <span class="theme-card-desc">${m.desc}</span>
              </div>
            </button>
          `).join("")}
        </div>
      `,t.addEventListener("click",m=>{if(m.target.closest("[data-close-themes]")){H();return}const w=m.target.closest(".theme-card");w&&R(w.dataset.themeId)}),document.addEventListener("pointerdown",m=>{!t||t.hidden||m.target.closest(".themes-popover, .themes-trigger, .themes-mobile-trigger, [data-wt-themes], [data-wt-themes-inline], [data-a-themes], [data-w-themes], [data-s-themes], [data-p-themes], [data-c-themes], [data-tp-themes]")||H()}),window.addEventListener("keydown",m=>{if(!t||t.hidden)return;if(m.key==="Escape"){m.preventDefault(),H();return}const w=Number(m.key);w>=1&&w<=ke.length&&!m.target.closest("input, textarea")&&(m.preventDefault(),R(ke[w-1].id))}),document.body.appendChild(t)),!(p!==null?p:t.hidden)){H();return}A(),t.hidden=!1,requestAnimationFrame(()=>t.classList.add("is-open"))};c(a);const me=document.querySelector(".rail-meta"),fe=document.querySelector(".rail-top-row");if(me&&!me.querySelector(".themes-trigger")){const p=document.createElement("button");if(p.type="button",p.className="themes-trigger",p.textContent="themes",p.addEventListener("click",()=>q()),me.insertBefore(p,me.firstChild),fe&&!fe.querySelector(".themes-mobile-trigger")){const n=document.createElement("button");n.type="button",n.className="themes-mobile-trigger",n.setAttribute("aria-label","Open site themes"),n.textContent="themes",n.addEventListener("click",()=>q()),fe.appendChild(n)}}}export{ht as S,ft as a,ot as c,bt as i,mt as s};
