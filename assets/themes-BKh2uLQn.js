class R{constructor(){this.on=!1,this.sfxOn=!0,this.ctx=null}ensureCtx(){if(this.ctx)return this.ctx;const e=this.ctx=new(window.AudioContext||window.webkitAudioContext),t=e.createDynamicsCompressor();this.analyser=e.createAnalyser(),this.analyser.fftSize=128,this.analyser.smoothingTimeConstant=.86,this._fftData=new Uint8Array(this.analyser.frequencyBinCount),t.connect(this.analyser).connect(e.destination),this.master=e.createGain(),this.master.gain.value=0,this.master.connect(t),this.sfxMaster=e.createGain(),this.sfxMaster.gain.value=.85,this.sfxMaster.connect(t);const i=e.sampleRate*4,r=e.createBuffer(1,i,e.sampleRate),d=r.getChannelData(0);let n=0,o=0,l=0;for(let m=0;m<i;m++){const u=Math.random()*2-1;n=.997*n+u*.029,o=.985*o+u*.032,l=.95*l+u*.048,d[m]=(n+o+l)*.35}return this.noiseBuf=r,e}unlockSfx(){if(!this.sfxOn)return;const e=this.ensureCtx();e.state==="suspended"&&e.resume().catch(()=>{})}init(){const e=this.ensureCtx();if(this._musicInit)return;this._musicInit=!0,this.filter=e.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=680,this.filter.Q.value=.4,this.filter.connect(this.master),[[110,.055],[164.81,.036],[220.4,.024],[246.94,.016],[277.18,.009],[329.63,.008]].forEach(([d,n],o)=>{const l=e.createOscillator();l.type=o===1||o===2?"triangle":"sine",l.frequency.value=d,l.detune.value=(o-2.5)*3.5;const m=e.createGain();m.gain.value=n;const u=e.createOscillator();u.frequency.value=.027+o*.014;const h=e.createGain();h.gain.value=n*.55,u.connect(h).connect(m.gain),l.connect(m).connect(this.filter),l.start(),u.start()});const t=e.createBufferSource();t.buffer=this.noiseBuf,t.loop=!0;const i=e.createBiquadFilter();i.type="bandpass",i.frequency.value=380,i.Q.value=.6;const r=e.createGain();r.gain.value=.05,t.connect(i).connect(r).connect(this.master),t.start()}toggle(){this.init(),this.on=!this.on;const e=this.ctx.currentTime;return this.on&&this.ctx.resume(),this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(this.master.gain.value,e),this.master.gain.linearRampToValueAtTime(this.on?.85:0,e+(this.on?1.4:.8)),this.on}setBrightness(e){!this.ctx||!this.on||!this.filter||this.filter.frequency.setTargetAtTime(420+e*1600,this.ctx.currentTime,.8)}getLevel(){if(!this.analyser||!this.on||this.ctx?.state!=="running")return 0;this.analyser.getByteFrequencyData(this._fftData);let e=0;const t=Math.min(18,this._fftData.length);for(let i=0;i<t;i++)e+=this._fftData[i];return Math.min(1,e/(t*110))}shutter(){if(!this.sfxOn||!this.ctx||this.ctx.state!=="running")return;const e=this.ctx,t=e.currentTime,i=(n,o,l)=>{const m=e.createBufferSource();m.buffer=this.noiseBuf;const u=e.createBiquadFilter();u.type="bandpass",u.frequency.value=l,u.Q.value=1.4;const h=e.createGain();h.gain.setValueAtTime(0,n),h.gain.linearRampToValueAtTime(o,n+.002),h.gain.exponentialRampToValueAtTime(1e-4,n+.05),m.connect(u).connect(h).connect(this.sfxMaster),m.start(n,Math.random()*3,.06)};i(t,.95,3200),i(t+.055,.62,2400);const r=e.createOscillator();r.frequency.value=95;const d=e.createGain();d.gain.setValueAtTime(0,t),d.gain.linearRampToValueAtTime(.14,t+.004),d.gain.exponentialRampToValueAtTime(1e-4,t+.08),r.connect(d).connect(this.sfxMaster),r.start(t),r.stop(t+.1)}tick(e=.5){if(!this.sfxOn||!this.ctx||this.ctx.state!=="running")return;const t=performance.now();if(this._lastTick&&t-this._lastTick<65)return;this._lastTick=t;const i=this.ctx,r=i.currentTime,d=i.createBufferSource();d.buffer=this.noiseBuf;const n=i.createBiquadFilter();n.type="bandpass",n.frequency.value=1350+e*850,n.Q.value=2;const o=i.createGain();o.gain.setValueAtTime(0,r),o.gain.linearRampToValueAtTime(.42,r+.002),o.gain.exponentialRampToValueAtTime(1e-4,r+.028),d.connect(n).connect(o).connect(this.sfxMaster),d.start(r,Math.random()*3,.035);const l=i.createOscillator();l.type="sine",l.frequency.setValueAtTime(210+e*90,r),l.frequency.exponentialRampToValueAtTime(95,r+.028);const m=i.createGain();m.gain.setValueAtTime(0,r),m.gain.linearRampToValueAtTime(.12,r+.002),m.gain.exponentialRampToValueAtTime(1e-4,r+.032),l.connect(m).connect(this.sfxMaster),l.start(r),l.stop(r+.04)}whoosh(){if(!this.sfxOn||!this.ctx||this.ctx.state!=="running")return;const e=this.ctx,t=e.currentTime,i=e.createBufferSource();i.buffer=this.noiseBuf;const r=e.createBiquadFilter();r.type="lowpass",r.Q.value=.75,r.frequency.setValueAtTime(240,t),r.frequency.exponentialRampToValueAtTime(860,t+.32),r.frequency.exponentialRampToValueAtTime(220,t+.95);const d=e.createGain();d.gain.setValueAtTime(0,t),d.gain.linearRampToValueAtTime(.55,t+.22),d.gain.exponentialRampToValueAtTime(1e-4,t+1),i.connect(r).connect(d).connect(this.sfxMaster),i.start(t,Math.random()*2,1.05)}}const B='a, button, [role="button"], input, textarea, select, summary, .project-thumb-wrap, .album-cover-wrap, .script-card, .music-vinyl-disc, body.is-locked .finale.is-live';function I({onMove:s,onLeave:e}={}){if(!window.matchMedia("(pointer: fine) and (hover: hover)").matches)return null;document.documentElement.classList.add("has-cursor");let i=document.getElementById("cursor");i||(i=document.createElement("div"),i.id="cursor",i.className="cursor",i.setAttribute("aria-hidden","true"),document.body.appendChild(i)),i.innerHTML=`
    <span class="cursor__ring" aria-hidden="true">
      <svg viewBox="0 0 64 64" width="64" height="64" shape-rendering="geometricPrecision">
        <circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" stroke-width="2" />
      </svg>
    </span>
    <span class="cursor__dot" aria-hidden="true">
      <svg viewBox="0 0 16 16" width="16" height="16" shape-rendering="geometricPrecision">
        <circle cx="8" cy="8" r="3" fill="currentColor" />
      </svg>
    </span>
  `;const r=i.querySelector(".cursor__ring"),d=i.querySelector(".cursor__dot"),n={x:window.innerWidth/2,y:window.innerHeight/2,rx:window.innerWidth/2,ry:window.innerHeight/2,dx:window.innerWidth/2,dy:window.innerHeight/2,hover:0,uiHover:!1,visible:!1};return window.addEventListener("pointermove",o=>{o.pointerType&&o.pointerType!=="mouse"||(n.x=o.clientX,n.y=o.clientY,n.visible=!0,n.uiHover=!!o.target?.closest?.(B),i.classList.add("is-on"),i.classList.toggle("is-clickable",n.uiHover),s?.(o,n))},{passive:!0}),window.addEventListener("pointerdown",o=>{if(o.pointerType&&o.pointerType!=="mouse")return;const l=document.createElement("span");l.className="cursor__pulse",l.style.left=`${o.clientX}px`,l.style.top=`${o.clientY}px`,l.innerHTML='<svg viewBox="0 0 64 64" width="64" height="64" shape-rendering="geometricPrecision"><circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" stroke-width="2" /></svg>',document.body.appendChild(l),requestAnimationFrame(()=>l.classList.add("is-active")),setTimeout(()=>l.remove(),380)},{passive:!0}),document.documentElement.addEventListener("mouseleave",()=>{n.visible=!1,n.uiHover=!1,i.classList.remove("is-on","is-clickable"),e?.()}),window.addEventListener("blur",()=>{n.visible=!1,n.uiHover=!1,i.classList.remove("is-on","is-clickable"),e?.()}),{el:i,state:n,update(o,{photoHover:l=!1,velocity:m=0,tintColor:u=null}={}){const h=1-Math.exp(-o*12),g=1-Math.exp(-o*30);n.rx+=(n.x-n.rx)*h,n.ry+=(n.y-n.ry)*h,n.dx+=(n.x-n.dx)*g,n.dy+=(n.y-n.dy)*g;const x=n.uiHover?1:l?.52:0;n.hover+=(x-n.hover)*(1-Math.exp(-o*14));const k=Math.min(1,Math.abs(m)/40),a=.5+n.hover*.44+k*.14,c=n.uiHover?1.35:l?.85:1;r.style.transform=`translate3d(${n.rx.toFixed(2)}px, ${n.ry.toFixed(2)}px, 0) scale(${a.toFixed(3)}, ${(a*(1-k*.1)).toFixed(3)})`,d.style.transform=`translate3d(${n.dx.toFixed(2)}px, ${n.dy.toFixed(2)}px, 0) scale(${c.toFixed(3)})`,n.uiHover?(r.style.color="rgba(255, 255, 255, 0.96)",d.style.color="#ffffff"):u?(r.style.color=u(.36+n.hover*.35),d.style.color="rgba(245, 240, 232, 0.94)"):(r.style.color=`rgba(244, 238, 228, ${(.36+n.hover*.4).toFixed(2)})`,d.style.color="rgba(245, 240, 232, 0.94)")}}}function H(){const s=I();if(!s)return;let e=performance.now();const t=i=>{const r=Math.min(.05,Math.max(.001,(i-e)/1e3));e=i,s.update(r),requestAnimationFrame(t)};requestAnimationFrame(t)}let C=!1;function A(s,e=2600){let t=document.getElementById("eggToast");t||(t=document.createElement("div"),t.id="eggToast",t.setAttribute("aria-hidden","true"),t.style.cssText=["position:fixed","left:50%","bottom:max(24px,env(safe-area-inset-bottom))","transform:translateX(-50%) translateY(8px)","z-index:9997","pointer-events:none",'font-family:"Dotmatri",ui-monospace,monospace',"font-size:13px","letter-spacing:0.1em","color:rgba(244,238,228,0.88)","background:rgba(11,12,15,0.82)","border:1px solid rgba(236,230,220,0.16)","padding:7px 14px","border-radius:999px","opacity:0","transition:opacity 0.35s ease,transform 0.35s ease","backdrop-filter:blur(8px)"].join(";"),document.body.appendChild(t)),t.textContent=s,requestAnimationFrame(()=>{t.style.opacity="1",t.style.transform="translateX(-50%) translateY(0)"}),clearTimeout(t._timer),t._timer=setTimeout(()=>{t.style.opacity="0",t.style.transform="translateX(-50%) translateY(8px)"},e)}function $(){for(let e=0;e<42;e++){const t=document.createElement("span");t.setAttribute("aria-hidden","true");const i=10+Math.random()*80,r=3+Math.random()*5,d=1.6+Math.random()*1.4,n=Math.random()*.25,o=(Math.random()-.5)*140;t.style.cssText=["position:fixed",`left:${i}vw`,"top:-12px",`width:${r}px`,`height:${r}px`,"border-radius:50%","background:rgba(244,238,228,0.88)","box-shadow:0 0 8px rgba(244,238,228,0.45)","pointer-events:none","z-index:9998",`transition:transform ${d}s cubic-bezier(0.22,1,0.36,1) ${n}s,opacity ${d}s ease ${n}s`].join(";"),document.body.appendChild(t),requestAnimationFrame(()=>{t.style.transform=`translate(${o}px, ${window.innerHeight+30}px)`,t.style.opacity="0"}),setTimeout(()=>t.remove(),(d+n)*1e3+80)}}function z(){let s=document.getElementById("eggCat");s||(s=document.createElement("div"),s.id="eggCat",s.setAttribute("aria-hidden","true"),s.style.cssText=["position:fixed","right:max(20px,env(safe-area-inset-right))","bottom:0","z-index:9996","pointer-events:none",'font-family:"Dotmatri",ui-monospace,monospace',"font-size:18px","letter-spacing:0.06em","color:rgba(244,238,228,0.9)","text-shadow:0 2px 14px rgba(0,0,0,0.9)","padding:10px 14px 12px","transform:translateY(100%)","transition:transform 0.45s cubic-bezier(0.22,1,0.36,1)"].join(";"),document.body.appendChild(s)),s.textContent="=^._.^=",requestAnimationFrame(()=>{s.style.transform="translateY(0)"}),clearTimeout(s._blink),clearTimeout(s._hide),s._blink=setTimeout(()=>{s.textContent="=^.-.^=  hi"},1100),s._hide=setTimeout(()=>{s.style.transform="translateY(100%)"},3800)}function D(){const s=document.documentElement.classList.toggle("is-crt");let e=document.getElementById("crtOverlay"),t=document.getElementById("crtStyle");s&&!t&&(t=document.createElement("style"),t.id="crtStyle",t.textContent=["html.is-crt body{filter:contrast(1.1) brightness(1.04) saturate(1.08);}","html.is-crt h1,html.is-crt h2,html.is-crt .rail-brand,html.is-crt .mark{text-shadow:1px 0 0 rgba(255,60,90,0.38),-1px 0 0 rgba(70,220,255,0.38),0 0 10px rgba(244,238,228,0.22);}"].join(""),document.head.appendChild(t)),s&&!e?(e=document.createElement("div"),e.id="crtOverlay",e.setAttribute("aria-hidden","true"),e.style.cssText=["position:fixed","inset:0","pointer-events:none","z-index:9994","background:repeating-linear-gradient(to bottom,rgba(255,255,255,0.03) 0px,rgba(255,255,255,0.03) 1px,rgba(0,0,0,0.44) 2px,rgba(0,0,0,0.44) 3px),repeating-linear-gradient(to right,rgba(255,40,40,0.03) 0px,rgba(40,255,80,0.03) 1px,rgba(40,120,255,0.03) 2px,transparent 3px)","box-shadow:inset 0 0 110px rgba(0,0,0,0.72),inset 0 0 28px rgba(180,220,255,0.06)"].join(";"),document.body.appendChild(e)):s||(e?.remove(),t?.remove()),A(s?"crt on":"crt off")}function _(){let s=document.getElementById("eggModal");if(!s){s=document.createElement("div"),s.id="eggModal",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label","Easter egg binds"),s.style.cssText=["position:fixed","inset:0","z-index:9999","display:flex","align-items:center","justify-content:center","padding:24px","background:rgba(11,12,15,0.78)","backdrop-filter:blur(10px)","-webkit-backdrop-filter:blur(10px)","opacity:0","transition:opacity 0.25s ease"].join(";"),s.innerHTML=`
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
    `;const e=()=>{s.style.opacity="0",setTimeout(()=>{s.hidden=!0},240)};s.addEventListener("click",t=>{(t.target===s||t.target.closest("[data-close-eggs]"))&&e()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&!s.hidden&&(t.preventDefault(),e())}),document.body.appendChild(s)}s.hidden=!1,requestAnimationFrame(()=>{s.style.opacity="1"})}function F(){const s=document.querySelector(".rail-meta");if(!s||s.querySelector(".egg-trigger"))return;const e=document.createElement("button");e.type="button",e.className="egg-trigger",e.textContent="secrets",e.addEventListener("click",_),s.appendChild(e)}function O(){if(C)return;C=!0,console.log("%caverybeuth.xyz","font-family:monospace;font-size:14px;color:#f4eee4;"),F();let s="";const e=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let t=0,i=!1,r=0,d=null;const n=(o,l,m=!1)=>{const u=document.createElement("span");u.setAttribute("aria-hidden","true");const h=m?["✦","✧","·"]:["✦","✧","⋆","+"],g=["rgba(255,250,235,0.95)","rgba(255,232,178,0.92)","rgba(222,238,255,0.9)"];u.textContent=h[Math.floor(Math.random()*h.length)];const x=(Math.random()-.5)*(m?18:44),k=(m?-16:10)+(Math.random()-.5)*28,a=(Math.random()-.5)*140,c=m?10+Math.random()*8:11+Math.random()*10,f=m?1.5:.95,w=g[Math.floor(Math.random()*g.length)];u.style.cssText=["position:fixed",`left:${o}px`,`top:${l}px`,"transform:translate(-50%,-50%) scale(0.5) rotate(0deg)",'font-family:"Dotmatri",ui-monospace,monospace',`font-size:${c.toFixed(1)}px`,`color:${w}`,`text-shadow:0 0 10px ${w},0 0 20px rgba(255,244,210,0.45)`,"pointer-events:none","z-index:9995",`transition:transform ${f}s cubic-bezier(0.22,1,0.36,1),opacity ${f}s ease-out`].join(";"),document.body.appendChild(u),requestAnimationFrame(()=>{u.style.transform=`translate(calc(-50% + ${x}px), calc(-50% + ${k}px)) scale(1.15) rotate(${a}deg)`,u.style.opacity="0"}),setTimeout(()=>u.remove(),f*1e3+60)};window.addEventListener("pointermove",o=>{if(!i)return;const l=performance.now();l-r<22||(r=l,n(o.clientX,o.clientY,!1))}),window.addEventListener("keydown",o=>{if(o.target.closest("input, textarea, select"))return;const l=o.key.length===1?o.key.toLowerCase():o.key;l===e[t]?(t++,t===e.length&&(t=0,$(),A("nice"))):t=l===e[0]?1:0,!(o.key.length!==1||o.ctrlKey||o.metaKey||o.altKey)&&(s=(s+o.key.toLowerCase()).slice(-12),s.endsWith("meow")||s.endsWith("cats")?(s="",z()):s.endsWith("stars")?(s="",i=!i,clearInterval(d),i&&(d=setInterval(()=>{n(Math.random()*window.innerWidth,Math.random()*window.innerHeight,!0)},160)),A(i?"stars on":"stars off")):s.endsWith("crt")&&(s="",D()))})}const v=[{id:"original",num:"01",name:"Original",label:"ORIGINAL",desc:"Obsidian, warm cream, dot-matrix",themeColor:"#0b0c0f",mini:{bg:"#0b0c0f",ink:"#ece6dc",card:"rgba(236,230,220,0.06)",thumb:"#1a1d24",accent:"#ece6dc",font:"'Dotmatri', monospace"}},{id:"terminal",num:"02",name:"Terminal",label:"TERMINAL",desc:"Working zsh shell & neofetch",themeColor:"#141615",mini:{bg:"#141615",ink:"#b8ffd0",card:"rgba(94,242,150,0.08)",thumb:"#0c1810",accent:"#5ef296",font:"'Courier Prime', monospace"}},{id:"frutiger",num:"03",name:"Frutiger 7",label:"FRUTIGER 7",desc:"Aero glass desktop & browser",themeColor:"#091b2c",mini:{bg:"linear-gradient(155deg, #0b243b, #144d5c 65%, #163d2b)",ink:"#f0faff",card:"rgba(255,255,255,0.18)",thumb:"rgba(103,232,249,0.28)",accent:"#7dd3fc",font:"'DM Sans', sans-serif"}},{id:"darkroom",num:"04",name:"Darkroom",label:"DARKROOM",desc:"Safelight crimson, analog film",themeColor:"#0c0607",mini:{bg:"#130709",ink:"#ffb4a6",card:"rgba(255,110,90,0.1)",thumb:"#2a0e10",accent:"#ff6b57",font:"'Dotmatri', monospace"}},{id:"paper",num:"05",name:"Paper",label:"PAPER",desc:"Archival print, warm ink",themeColor:"#f3efe6",mini:{bg:"#f3efe6",ink:"#1a1917",card:"rgba(26,25,23,0.06)",thumb:"#ded7c8",accent:"#1a1917",font:"'Cormorant Garamond', Georgia, serif"}},{id:"cobalt",num:"06",name:"Cobalt",label:"COBALT",desc:"Cyanotype blueprint & grid",themeColor:"#061121",mini:{bg:"#071326",ink:"#e4f2ff",card:"rgba(94,194,255,0.1)",thumb:"#0e2544",accent:"#5ec2ff",font:"'Courier Prime', monospace"}}],E="avery_theme";let S=!1;function q(){return!!(document.getElementById("stage")&&document.getElementById("gl"))}function L(s){const e=v.find(r=>r.id===s)||v[0],t=e.id;t==="original"?(document.documentElement.removeAttribute("data-theme"),sessionStorage.removeItem(E)):(document.documentElement.setAttribute("data-theme",t),sessionStorage.setItem(E,t));const i=document.querySelector('meta[name="theme-color"]');return i&&e.themeColor&&i.setAttribute("content",e.themeColor),t}L(sessionStorage.getItem(E)||"original");function V(){if(S)return;S=!0;let s=sessionStorage.getItem(E)||"original",e=null,t=null,i=null;const r=()=>{i&&(clearInterval(i),i=null),t&&(t.remove(),t=null),document.body.classList.remove("is-theme-shell")},d=()=>{if(r(),!q())return;document.body.classList.add("is-theme-shell"),t=document.createElement("div"),t.className="theme-shell theme-terminal-shell",t.innerHTML=`
      <div class="term-titlebar">
        <div class="term-dots" aria-hidden="true">
          <button type="button" class="term-dot is-red" data-term-original title="Back to original"></button>
          <span class="term-dot is-yellow"></span>
          <span class="term-dot is-green"></span>
        </div>
        <div class="term-title">visitor@averybeuth.xyz: ~ &mdash; zsh</div>
        <div class="term-bar-actions">
          <button type="button" data-term-themes>[themes]</button>
          <button type="button" data-term-original>[original]</button>
        </div>
      </div>
      <div class="term-body" id="termBody">
        <div class="term-line"><span class="term-prompt">visitor@averybeuth.xyz:~$</span> neofetch</div>
        <div class="term-neofetch">
          <pre class="term-ascii" aria-hidden="true"> █████╗ ██████╗ 
██╔══██╗██╔══██╗
███████║██████╔╝
██╔══██║██╔══██╗
██║  ██║██████╔╝
╚═╝  ╚═╝╚═════╝ </pre>
          <div class="term-info">
            <div class="term-info-head">visitor@averybeuth.xyz</div>
            <div class="term-info-sep">----------------------</div>
            <div><span class="term-k">owner</span>   <span>Avery Beuth</span></div>
            <div><span class="term-k">about</span>   <span>Photographs, films, screenplays, music, and software.</span></div>
            <div><span class="term-k">folders</span> <a href="./?zoom=1" data-term-photos>photos/</a> <a href="./code.html">code/</a> <a href="./scripts/index.html">scripts/</a> <a href="./music.html">music/</a> <a href="./film.html">films/</a></div>
            <div><span class="term-k">links</span>   <a href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">instagram</a> <a href="https://github.com/averywsc" target="_blank" rel="noopener">github</a></div>
            <div><span class="term-k">theme</span>   <span>terminal</span> <button type="button" class="term-inline-btn" data-term-themes>(change)</button> <button type="button" class="term-inline-btn" data-term-original>(back to original)</button></div>
            <div class="term-swatches" aria-hidden="true">
              <span style="background:#e06c75"></span><span style="background:#e5c07b"></span><span style="background:#98c379"></span><span style="background:#56b6c2"></span><span style="background:#61afef"></span><span style="background:#c678dd"></span>
            </div>
          </div>
        </div>
        <div class="term-bio"><span class="term-k">bio:</span> photographer, filmmaker, composer &amp; developer from nz. type <span class="term-cmd">help</span> or click any folder above.</div>
        <div class="term-history" id="termHistory"></div>
        <form class="term-input-row" id="termForm" autocomplete="off">
          <label class="term-prompt" for="termInput">visitor@averybeuth.xyz:~$</label>
          <input id="termInput" class="term-input" type="text" spellcheck="false" aria-label="Terminal command" placeholder="help" />
        </form>
      </div>
    `,document.body.appendChild(t),t.querySelectorAll("[data-term-themes]").forEach(y=>y.addEventListener("click",g)),t.querySelectorAll("[data-term-original]").forEach(y=>y.addEventListener("click",()=>h("original"))),t.querySelector("[data-term-photos]")?.addEventListener("click",y=>{y.preventDefault(),h("original")});const a=t.querySelector("#termForm"),c=t.querySelector("#termInput"),f=t.querySelector("#termHistory"),w=t.querySelector("#termBody");t.addEventListener("click",y=>{y.target.closest("a, button, input")||c?.focus()});const T=y=>{const b=document.createElement("div");b.className="term-out",b.innerHTML=y,f.appendChild(b),w.scrollTop=w.scrollHeight};a?.addEventListener("submit",y=>{y.preventDefault();const b=(c.value||"").trim();if(c.value="",!b)return;const p=b.toLowerCase();T(`<span class="term-prompt">visitor@averybeuth.xyz:~$</span> ${b.replace(/</g,"&lt;")}`),p==="help"?T('commands: <span class="term-cmd">ls</span>, <span class="term-cmd">cd code</span>, <span class="term-cmd">cd music</span>, <span class="term-cmd">cd films</span>, <span class="term-cmd">cd scripts</span>, <span class="term-cmd">cd photos</span>, <span class="term-cmd">themes</span>, <span class="term-cmd">original</span>, <span class="term-cmd">clear</span>'):p==="ls"?(T('drwxr-xr-x  <a href="./?zoom=1" data-term-photos>photos/</a>  <a href="./code.html">code/</a>  <a href="./scripts/index.html">scripts/</a>  <a href="./music.html">music/</a>  <a href="./film.html">films/</a>'),f.querySelector("[data-term-photos]:last-child")?.addEventListener("click",M=>{M.preventDefault(),h("original")})):p==="whoami"?T("Avery Beuth — @avery.beuth"):p==="clear"?f.innerHTML="":p==="themes"?g():p==="original"||p==="exit"?h("original"):p==="cd code"||p==="open code"||p==="code"?window.location.href="./code.html":p==="cd music"||p==="open music"||p==="music"?window.location.href="./music.html":p==="cd films"||p==="open films"||p==="films"||p==="cd film"?window.location.href="./film.html":p==="cd scripts"||p==="open scripts"||p==="scripts"?window.location.href="./scripts/index.html":p==="cd photos"||p==="open photos"||p==="photos"?h("original"):T(`zsh: command not found: ${b.replace(/</g,"&lt;")} (try <span class="term-cmd">help</span>)`)})},n=()=>{if(r(),!q())return;document.body.classList.add("is-theme-shell"),t=document.createElement("div"),t.className="theme-shell theme-frutiger-shell",t.innerHTML=`
      <div class="aero-bubbles" aria-hidden="true">
        <span class="aero-bubble b1"></span>
        <span class="aero-bubble b2"></span>
        <span class="aero-bubble b3"></span>
        <span class="aero-bubble b4"></span>
      </div>
      <div class="aero-desktop">
        <nav class="aero-icons" aria-label="Desktop shortcuts">
          <button type="button" class="aero-icon" data-aero-photos>
            <span class="aero-icon-glyph">📷</span>
            <span>Photos</span>
          </button>
          <a class="aero-icon" href="./code.html">
            <span class="aero-icon-glyph">📁</span>
            <span>Code</span>
          </a>
          <a class="aero-icon" href="./scripts/index.html">
            <span class="aero-icon-glyph">📄</span>
            <span>Scripts</span>
          </a>
          <a class="aero-icon" href="./music.html">
            <span class="aero-icon-glyph">🎵</span>
            <span>Music</span>
          </a>
          <a class="aero-icon" href="./film.html">
            <span class="aero-icon-glyph">🎞️</span>
            <span>Films</span>
          </a>
          <button type="button" class="aero-icon" data-aero-themes>
            <span class="aero-icon-glyph">🎨</span>
            <span>Themes</span>
          </button>
          <button type="button" class="aero-icon" data-aero-original>
            <span class="aero-icon-glyph">⏻</span>
            <span>Original</span>
          </button>
        </nav>

        <section class="aero-window" aria-label="Browser window">
          <div class="aero-win-titlebar">
            <span class="aero-win-title">Avery Beuth - Internet</span>
            <div class="aero-win-btns">
              <button type="button" class="aero-win-btn" data-aero-themes title="Themes">_</button>
              <button type="button" class="aero-win-btn is-close" data-aero-original title="Back to original">&times;</button>
            </div>
          </div>
          <div class="aero-addr-bar">
            <span class="aero-nav-arrows" aria-hidden="true">◀ ▶</span>
            <div class="aero-url">https://averybeuth.xyz/</div>
            <button type="button" class="aero-go-btn" data-aero-themes>Themes</button>
          </div>
          <div class="aero-fav-bar">
            <a href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">★ Instagram</a>
            <a href="https://github.com/averywsc" target="_blank" rel="noopener">★ GitHub</a>
            <a href="./code.html">★ Code</a>
            <a href="./music.html">★ Music</a>
          </div>
          <div class="aero-page">
            <div class="aero-page-banner">
              <span class="aero-logo">avery<strong>beuth</strong></span>
              <span class="aero-beta">beta</span>
            </div>
            <div class="aero-page-content">
              <div class="aero-hero-card">
                <div class="aero-hero-copy">
                  <h1>Welcome to my homepage!</h1>
                  <p>Photographs, short films, screenplays, music, and open-source software by Avery Beuth.</p>
                  <button type="button" class="aero-cta" data-aero-photos>Explore my photos &raquo;</button>
                </div>
                <button type="button" class="aero-starburst" data-aero-themes>
                  <strong>NEW!</strong>
                  <span>6 themes</span>
                </button>
              </div>
              <div class="aero-cols">
                <div class="aero-box">
                  <div class="aero-box-head">About me</div>
                  <p>Building tools, shooting 35mm &amp; digital, writing scripts, and composing music in Aotearoa.</p>
                </div>
                <div class="aero-box">
                  <div class="aero-box-head">Links</div>
                  <div class="aero-link-btns">
                    <a class="aero-green-btn" href="./code.html">Code &amp; Apps</a>
                    <a class="aero-green-btn" href="./music.html">Music &amp; OSTs</a>
                    <a class="aero-green-btn" href="./film.html">Short Films</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer class="aero-taskbar">
        <button type="button" class="aero-start" data-aero-themes aria-label="Start / Themes">❖</button>
        <div class="aero-task-items">
          <span class="aero-task-pill is-active">Avery Beuth - Internet</span>
          <button type="button" class="aero-task-pill" data-aero-original>Original site</button>
        </div>
        <div class="aero-clock" id="aeroClock"></div>
      </footer>
    `,document.body.appendChild(t);const a=()=>{const c=document.getElementById("aeroClock");if(!c)return;const f=new Date;c.textContent=f.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};a(),i=setInterval(a,15e3),t.querySelectorAll("[data-aero-themes]").forEach(c=>c.addEventListener("click",g)),t.querySelectorAll("[data-aero-original], [data-aero-photos]").forEach(c=>c.addEventListener("click",()=>h("original")))},o=a=>{a==="terminal"?d():a==="frutiger"?n():r()},l=a=>{if(!e)return;const c=e.querySelector(".themes-mini"),f=e.querySelector(".themes-meta-num"),w=e.querySelector(".themes-meta-name"),T=e.querySelector(".themes-meta-desc"),y=e.querySelector(".themes-in-use");c&&(c.style.background=a.mini.bg,c.style.color=a.mini.ink,c.style.fontFamily=a.mini.font,c.querySelector(".themes-mini-brand").style.color=a.mini.accent,c.querySelectorAll(".themes-mini-card").forEach(b=>{b.style.background=a.mini.card,b.style.border=`1px solid ${a.mini.ink}22`}),c.querySelectorAll(".themes-mini-thumb").forEach(b=>{b.style.background=a.mini.thumb}),c.querySelectorAll(".themes-mini-line").forEach(b=>{b.style.background=a.mini.ink}),f.textContent=a.num,w.textContent=a.name,T.textContent=a.desc,y.style.visibility=a.id===s?"visible":"hidden")},m=()=>{e&&e.querySelectorAll(".theme-tile").forEach(a=>{a.classList.toggle("is-active",a.dataset.themeId===s)})},u=()=>{e&&(e.classList.remove("is-open"),setTimeout(()=>{e&&(e.hidden=!0)},220))},h=a=>{s=L(a),o(s),m(),l(v.find(c=>c.id===s)||v[0])},g=()=>{e||(e=document.createElement("div"),e.className="themes-backdrop",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Site themes"),e.innerHTML=`
        <div class="themes-panel">
          <div class="themes-preview-frame">
            <div class="themes-mini">
              <div class="themes-mini-top">
                <span class="themes-mini-brand">averybeuth.xyz</span>
                <span class="themes-mini-nav"><span>photos</span><span>code</span><span>music</span></span>
              </div>
              <div class="themes-mini-hero">
                <div class="themes-mini-title">averybeuth.xyz</div>
                <div class="themes-mini-sub">photos, films, music and software.</div>
              </div>
              <div class="themes-mini-grid">
                <div class="themes-mini-card"><div class="themes-mini-thumb"></div><div class="themes-mini-line"></div><div class="themes-mini-line is-short"></div></div>
                <div class="themes-mini-card"><div class="themes-mini-thumb"></div><div class="themes-mini-line"></div><div class="themes-mini-line is-short"></div></div>
                <div class="themes-mini-card"><div class="themes-mini-thumb"></div><div class="themes-mini-line"></div><div class="themes-mini-line is-short"></div></div>
              </div>
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
            ${v.map(a=>`
              <button type="button" class="theme-tile" data-theme-id="${a.id}">
                <div class="theme-tile-top">
                  <span class="theme-tile-num">${a.num}</span>
                  <span class="theme-tile-badge">IN USE</span>
                </div>
                <div class="theme-tile-name">${a.label}</div>
              </button>
            `).join("")}
          </div>
          <div class="themes-footer">
            <span class="themes-kbd-hint"><span class="themes-kbd">1-6</span>pick <span class="themes-kbd" style="margin-left:8px;">esc</span>close</span>
            <span class="themes-touch-hint">tap any theme to apply</span>
            <button type="button" class="text-link themes-close-btn" data-close-themes>close</button>
          </div>
        </div>
      `,e.addEventListener("click",a=>{if(a.target===e||a.target.closest("[data-close-themes]")){u();return}const c=a.target.closest(".theme-tile");c&&h(c.dataset.themeId)}),e.addEventListener("mouseover",a=>{const c=a.target.closest(".theme-tile");if(!c)return;const f=v.find(w=>w.id===c.dataset.themeId);f&&l(f)}),e.addEventListener("mouseleave",()=>{l(v.find(a=>a.id===s)||v[0])}),window.addEventListener("keydown",a=>{if(!e||e.hidden)return;if(a.key==="Escape"){a.preventDefault(),u();return}const c=Number(a.key);c>=1&&c<=v.length&&!a.target.closest("input, textarea")&&(a.preventDefault(),h(v[c-1].id))}),document.body.appendChild(e)),m(),l(v.find(a=>a.id===s)||v[0]),e.hidden=!1,requestAnimationFrame(()=>e.classList.add("is-open"))};o(s);const x=document.querySelector(".rail-meta"),k=document.querySelector(".rail-top-row");if(x&&!x.querySelector(".themes-trigger")){const a=document.createElement("button");if(a.type="button",a.className="themes-trigger",a.textContent="themes",a.addEventListener("click",g),x.insertBefore(a,x.firstChild),k&&!k.querySelector(".themes-mobile-trigger")){const c=document.createElement("button");c.type="button",c.className="themes-mobile-trigger",c.setAttribute("aria-label","Open site themes"),c.textContent="themes",c.addEventListener("click",g),k.appendChild(c)}}else if(!x&&!document.querySelector(".themes-home-btn")){const a=document.createElement("button");a.type="button",a.className="themes-home-btn",a.textContent="themes",a.addEventListener("click",g),document.body.appendChild(a);const c=document.querySelector(".nav-right");if(c&&!c.querySelector(".themes-nav-btn")){const f=document.createElement("button");f.type="button",f.className="themes-nav-btn",f.textContent="themes",f.addEventListener("click",g),c.insertBefore(f,document.getElementById("sound")||null)}}}export{R as S,V as a,I as c,O as i,H as s};
