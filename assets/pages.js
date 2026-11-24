import{i as te,s as se,S as ae}from"./easter-eggs-CzHKsT5Z.js";const T=[{id:"original",num:"01",name:"Original",label:"ORIGINAL",desc:"Obsidian dark, warm cream, dot-matrix",themeColor:"#0b0c0f",previewClass:"is-original"},{id:"terminal",num:"02",name:"Terminal",label:"TERMINAL",desc:"Interactive zsh TUI, CRT scan & live CLI",themeColor:"#121513",previewClass:"is-terminal"},{id:"frutiger",num:"03",name:"Frutiger 7",label:"FRUTIGER 7",desc:"Windows 7 Aero desktop, glass browser & taskbar",themeColor:"#071b2e",previewClass:"is-frutiger"},{id:"darkroom",num:"04",name:"Darkroom",label:"DARKROOM",desc:"35mm contact sheet, safelight glow & sprockets",themeColor:"#0b0405",previewClass:"is-darkroom"},{id:"paper",num:"05",name:"Paper",label:"PAPER",desc:"Archival print broadsheet, warm cotton & ink",themeColor:"#f2ede2",previewClass:"is-paper"},{id:"cobalt",num:"06",name:"Cobalt",label:"COBALT",desc:"Cyanotype architectural blueprint & CAD grid",themeColor:"#061429",previewClass:"is-cobalt"}],H="avery_theme";let X=!1;function Y(){return!!(document.getElementById("stage")&&document.getElementById("gl"))}function j(){const s=window.location.pathname.toLowerCase(),t=s.includes("/scripts/"),n=t?"..":".";let a="home",r="Portfolio",c="ls -la ~/";return s.includes("code")?(a="code",r="Code",c="ls -la ~/code --featured --archive"):s.includes("music")?(a="music",r="Music",c="mpc playlist --verbose ~/music"):s.includes("film")?(a="films",r="Films",c="ffprobe -hide_banner ~/films/*"):t&&s.includes("view")?(a="scripts/view",r="Screenplay",c="less -N ~/scripts/screenplay.fountain"):t?(a="scripts",r="Scripts",c="ls -lh ~/scripts/*.fountain"):s.includes("privacy")&&(a="privacy",r="Privacy",c="cat ~/privacy.txt"),{base:n,inScripts:t,slug:a,title:r,cmd:c}}function J(s){if(Y())return document.documentElement.removeAttribute("data-theme"),"original";const t=T.find(r=>r.id===s)||T[0],n=t.id;n==="original"?(document.documentElement.removeAttribute("data-theme"),sessionStorage.removeItem(H)):(document.documentElement.setAttribute("data-theme",n),sessionStorage.setItem(H,n));const a=document.querySelector('meta[name="theme-color"]');return a&&t.themeColor&&a.setAttribute("content",t.themeColor),n}Y()||J(sessionStorage.getItem(H)||"original");function ne(){if(X||Y())return;X=!0;let s=sessionStorage.getItem(H)||"original",t=null,n=[];const a=()=>{for(;n.length;){const e=n.pop();try{e()}catch{}}document.querySelectorAll("[data-theme-injected]").forEach(e=>e.remove())},r=()=>{const e=j(),i=Date.now(),o=document.createElement("canvas");o.className="term-matrix-bg",o.setAttribute("data-theme-injected","1"),o.setAttribute("aria-hidden","true"),document.body.appendChild(o);const E=o.getContext("2d");let m=0,l=!1;const w="01アイウエオカキクケコABXY#$%&*+=-:/";let v=0,L=[];const x=()=>{o.width=window.innerWidth,o.height=window.innerHeight,v=Math.max(12,Math.floor(o.width/22)),L=Array.from({length:v},()=>Math.random()*-40)};x(),window.addEventListener("resize",x);let q=0;const _=f=>{if(m=requestAnimationFrame(_),!(f-q<(l?42:85))){q=f,E.fillStyle=l?"rgba(14, 18, 15, 0.14)":"rgba(14, 18, 15, 0.24)",E.fillRect(0,0,o.width,o.height),E.fillStyle=l?"rgba(110, 231, 135, 0.55)":"rgba(110, 231, 135, 0.18)",E.font='13px "Courier Prime", monospace';for(let A=0;A<L.length;A++){const P=w[Math.floor(Math.random()*w.length)];E.fillText(P,A*22,L[A]*20),L[A]*20>o.height&&Math.random()>.965&&(L[A]=0),L[A]+=l?1.15:.65}}};m=requestAnimationFrame(_),n.push(()=>{cancelAnimationFrame(m),window.removeEventListener("resize",x)});const I=document.createElement("div");I.className="term-winbar",I.setAttribute("data-theme-injected","1"),I.innerHTML=`
      <div class="term-dots">
        <button type="button" class="term-dot is-red" data-t-original title="Exit to Original"></button>
        <span class="term-dot is-yellow"></span>
        <span class="term-dot is-green"></span>
      </div>
      <div class="term-winbar-title">visitor@averybeuth.xyz: ~/${e.slug} &mdash; zsh</div>
      <div class="term-winbar-right">
        <span class="term-uptime" id="termUptime">up 00:00</span>
        <button type="button" data-t-matrix>[matrix]</button>
        <button type="button" data-t-themes>[themes]</button>
        <button type="button" data-t-original>[original]</button>
      </div>
    `,document.body.prepend(I);const Z=setInterval(()=>{const f=document.getElementById("termUptime");if(!f)return;const A=Math.floor((Date.now()-i)/1e3),P=String(Math.floor(A/60)).padStart(2,"0"),N=String(A%60).padStart(2,"0");f.textContent=`up ${P}:${N}`},1e3);n.push(()=>clearInterval(Z));const W=document.querySelector(".page-wrap");if(W){const f=document.createElement("section");f.className="term-console",f.setAttribute("data-theme-injected","1"),f.setAttribute("aria-label","Interactive terminal"),f.innerHTML=`
        <div class="term-boot-line">
          <span class="term-prompt">visitor@averybeuth.xyz:~/${e.slug}$</span>
          <span class="term-typed" id="termTyped"></span><span class="term-caret" aria-hidden="true"></span>
        </div>
        <div class="term-boot-status" id="termBootStatus"></div>
        <div class="term-cli-log" id="termCliLog"></div>
        <form class="term-cli-form" id="termCliForm" autocomplete="off">
          <label class="term-prompt" for="termCliInput">visitor@averybeuth.xyz:~/${e.slug}$</label>
          <input id="termCliInput" class="term-cli-input" type="text" spellcheck="false" placeholder="type 'help', 'neofetch', 'matrix', 'ls', or 'cd music'..." />
        </form>
      `,W.prepend(f);const A=f.querySelector("#termTyped"),P=f.querySelector("#termBootStatus");let N=0;const U=setInterval(()=>{if(A&&(N++,A.textContent=e.cmd.slice(0,N),N>=e.cmd.length)){clearInterval(U);const F=document.querySelectorAll(".project-card, .album-row, .script-card, .film-card").length,k=F>0?`[OK] mounted ${F} entries in ~/${e.slug} · interactive mode ready`:`[OK] buffer ~/${e.slug} loaded · interactive mode ready`;P&&(P.textContent=k)}},28);n.push(()=>clearInterval(U));const ee=f.querySelector("#termCliForm"),V=f.querySelector("#termCliInput"),O=f.querySelector("#termCliLog"),B=F=>{const k=document.createElement("div");k.className="term-cli-out",k.innerHTML=F,O.appendChild(k),O.scrollTop=O.scrollHeight};ee?.addEventListener("submit",F=>{F.preventDefault();const k=(V.value||"").trim();if(V.value="",!k)return;const y=k.toLowerCase();B(`<span class="term-prompt">$</span> ${k.replace(/</g,"&lt;")}`),y==="help"?B('commands: <span class="term-hi">neofetch</span>, <span class="term-hi">ls</span>, <span class="term-hi">matrix</span>, <span class="term-hi">cd code</span>, <span class="term-hi">cd scripts</span>, <span class="term-hi">cd music</span>, <span class="term-hi">cd films</span>, <span class="term-hi">cd photos</span>, <span class="term-hi">themes</span>, <span class="term-hi">original</span>, <span class="term-hi">clear</span>'):y==="ls"?B(`drwxr-xr-x  <a href="${e.base}/?zoom=1">photos/</a>  <a href="${e.base}/code.html">code/</a>  <a href="${e.base}/scripts/index.html">scripts/</a>  <a href="${e.base}/music.html">music/</a>  <a href="${e.base}/film.html">films/</a>`):y==="neofetch"?B(`<pre class="term-mini-neo"> █████╗ ██████╗    visitor@averybeuth.xyz
██╔══██╗██╔══██╗   ----------------------
███████║██████╔╝   owner   Avery Beuth
██╔══██║██╔══██╗   page    ~/${e.slug}
██║  ██║██████╔╝   shell   zsh 5.9 (web)
╚═╝  ╚═╝╚═════╝    theme   terminal [animated]</pre>`):y==="matrix"?(l=!l,o.classList.toggle("is-boosted",l),B(l?"[OK] matrix rain overdrive: ON":"[OK] matrix rain overdrive: ambient")):y==="clear"?O.innerHTML="":y==="themes"?S():y==="original"||y==="exit"?C("original"):y==="cd code"||y==="code"?window.location.href=`${e.base}/code.html`:y==="cd music"||y==="music"?window.location.href=`${e.base}/music.html`:y==="cd films"||y==="cd film"||y==="films"?window.location.href=`${e.base}/film.html`:y==="cd scripts"||y==="scripts"?window.location.href=`${e.base}/scripts/index.html`:y==="cd photos"||y==="photos"?window.location.href=`${e.base}/?zoom=1`:B(`zsh: command not found: ${k.replace(/</g,"&lt;")} — try <span class="term-hi">help</span>`)})}const K=[...document.querySelectorAll(".project-card, .album-row, .script-card, .film-card")];K.forEach((f,A)=>{f.style.setProperty("--term-i",String(Math.min(A,18)))}),n.push(()=>{K.forEach(f=>f.style.removeProperty("--term-i"))}),I.querySelector("[data-t-matrix]")?.addEventListener("click",()=>{l=!l,o.classList.toggle("is-boosted",l)}),I.querySelector("[data-t-themes]")?.addEventListener("click",S),I.querySelectorAll("[data-t-original]").forEach(f=>f.addEventListener("click",()=>C("original")))},c=()=>{const e=j(),i=document.createElement("div");i.className="aero-bg",i.setAttribute("data-theme-injected","1"),i.setAttribute("aria-hidden","true"),i.innerHTML=`
      <span class="aero-bubble b1"></span>
      <span class="aero-bubble b2"></span>
      <span class="aero-bubble b3"></span>
      <span class="aero-bubble b4"></span>
      <span class="aero-bubble b5"></span>
      <span class="aero-bubble b6"></span>
    `,document.body.prepend(i);const o=document.createElement("nav");o.className="aero-desktop-icons",o.setAttribute("data-theme-injected","1"),o.setAttribute("aria-label","Desktop shortcuts"),o.innerHTML=`
      <a class="aero-d-icon" href="${e.base}/?zoom=1">
        <span class="aero-d-glyph is-photo">📷</span><span>Photos</span>
      </a>
      <a class="aero-d-icon ${e.slug==="code"?"is-current":""}" href="${e.base}/code.html">
        <span class="aero-d-glyph is-folder">📁</span><span>Code</span>
      </a>
      <a class="aero-d-icon ${e.slug.startsWith("scripts")?"is-current":""}" href="${e.base}/scripts/index.html">
        <span class="aero-d-glyph is-doc">📄</span><span>Scripts</span>
      </a>
      <a class="aero-d-icon ${e.slug==="music"?"is-current":""}" href="${e.base}/music.html">
        <span class="aero-d-glyph is-music">🎵</span><span>Music</span>
      </a>
      <a class="aero-d-icon ${e.slug==="films"?"is-current":""}" href="${e.base}/film.html">
        <span class="aero-d-glyph is-film">🎞️</span><span>Films</span>
      </a>
      <button type="button" class="aero-d-icon" data-a-themes>
        <span class="aero-d-glyph is-paint">🎨</span><span>Themes</span>
      </button>
      <button type="button" class="aero-d-icon" data-a-original>
        <span class="aero-d-glyph is-power">⏻</span><span>Original</span>
      </button>
    `,document.body.appendChild(o);const E=document.querySelector(".site-main");if(E){const v=document.createElement("div");v.className="aero-browser-chrome",v.setAttribute("data-theme-injected","1"),v.innerHTML=`
        <div class="aero-win-titlebar">
          <span class="aero-win-title">Avery Beuth &mdash; ${e.title} &mdash; Windows Internet Explorer</span>
          <div class="aero-win-btns">
            <button type="button" class="aero-win-btn" data-a-themes title="Themes">_</button>
            <button type="button" class="aero-win-btn is-close" data-a-original title="Back to Original">&times;</button>
          </div>
        </div>
        <div class="aero-addr-bar">
          <div class="aero-nav-orbs" aria-hidden="true"><span>◀</span><span>▶</span></div>
          <div class="aero-url-box">https://averybeuth.xyz/${e.slug}</div>
          <button type="button" class="aero-tool-btn" data-a-themes>Themes</button>
        </div>
        <div class="aero-fav-bar">
          <a href="${e.base}/?zoom=1">★ Photos</a>
          <a href="${e.base}/code.html">★ Code</a>
          <a href="${e.base}/scripts/index.html">★ Scripts</a>
          <a href="${e.base}/music.html">★ Music</a>
          <a href="${e.base}/film.html">★ Films</a>
          <a href="https://instagram.com/avery.beuth" target="_blank" rel="noopener">★ Instagram</a>
        </div>
        <div class="aero-web2-banner">
          <div class="aero-web2-left">
            <span class="aero-web2-logo">avery<strong>beuth</strong></span>
            <span class="aero-web2-beta">beta</span>
          </div>
          <button type="button" class="aero-web2-pill" data-a-themes>6 themes ▾</button>
        </div>
      `,E.prepend(v)}const m=document.createElement("footer");m.className="aero-taskbar-global",m.setAttribute("data-theme-injected","1"),m.innerHTML=`
      <button type="button" class="aero-start-orb" data-a-themes aria-label="Start / Themes">❖</button>
      <div class="aero-task-list">
        <span class="aero-task-tab is-active">${e.title} - Internet</span>
        <button type="button" class="aero-task-tab" data-a-themes>Themes</button>
        <button type="button" class="aero-task-tab" data-a-original>Original site</button>
      </div>
      <div class="aero-tray-clock">
        <span id="aeroTime"></span>
        <span id="aeroDate"></span>
      </div>
    `,document.body.appendChild(m);const l=()=>{const v=new Date,L=document.getElementById("aeroTime"),x=document.getElementById("aeroDate");L&&(L.textContent=v.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),x&&(x.textContent=v.toLocaleDateString([],{day:"2-digit",month:"2-digit",year:"numeric"}))};l();const w=setInterval(l,15e3);n.push(()=>clearInterval(w)),document.querySelectorAll("[data-a-themes]").forEach(v=>v.addEventListener("click",S)),document.querySelectorAll("[data-a-original]").forEach(v=>v.addEventListener("click",()=>C("original")))},b=()=>{const e=document.createElement("div");e.className="darkroom-film-edge",e.setAttribute("data-theme-injected","1"),e.setAttribute("aria-hidden","true"),e.innerHTML="<span>KODAK TRI-X 400</span><span>SAFETY FILM</span><span>5063</span><span>36 EXP</span>",document.body.appendChild(e)},u=()=>{const e=j(),i=document.querySelector(".page-wrap");if(!i)return;const o=document.createElement("div");o.className="cobalt-titleblock",o.setAttribute("data-theme-injected","1"),o.innerHTML=`
      <span>DWG NO. AB-${e.slug.toUpperCase()}</span>
      <span>SCALE 1:1</span>
      <span>CYANOTYPE ARCHIVE // 2026</span>
    `,i.prepend(o)},g=e=>{a(),e==="terminal"?r():e==="frutiger"?c():e==="darkroom"?b():e==="cobalt"&&u()},p=e=>{if(!t)return;const i=t.querySelector(".themes-mini"),o=t.querySelector(".themes-meta-num"),E=t.querySelector(".themes-meta-name"),m=t.querySelector(".themes-meta-desc"),l=t.querySelector(".themes-in-use");i&&(i.className=`themes-mini ${e.previewClass}`,o.textContent=e.num,E.textContent=e.name,m.textContent=e.desc,l.style.visibility=e.id===s?"visible":"hidden")},d=()=>{t&&t.querySelectorAll(".theme-tile").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeId===s)})},h=()=>{t&&(t.classList.remove("is-open"),setTimeout(()=>{t&&(t.hidden=!0)},220))},C=e=>{s=J(e),g(s),d(),p(T.find(i=>i.id===s)||T[0])},S=()=>{t||(t=document.createElement("div"),t.className="themes-backdrop",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Site themes"),t.innerHTML=`
        <div class="themes-panel">
          <div class="themes-preview-frame">
            <div class="themes-mini is-original">
              <div class="themes-mini-bar">
                <span class="themes-mini-dots"><i></i><i></i><i></i></span>
                <span class="themes-mini-brand">averybeuth.xyz</span>
                <span class="themes-mini-nav"><span>code</span><span>music</span><span>films</span></span>
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
            ${T.map(e=>`
              <button type="button" class="theme-tile" data-theme-id="${e.id}">
                <div class="theme-tile-top">
                  <span class="theme-tile-num">${e.num}</span>
                  <span class="theme-tile-badge">IN USE</span>
                </div>
                <div class="theme-tile-name">${e.label}</div>
              </button>
            `).join("")}
          </div>
          <div class="themes-footer">
            <span class="themes-kbd-hint"><span class="themes-kbd">1-6</span>pick <span class="themes-kbd" style="margin-left:8px;">esc</span>close</span>
            <span class="themes-touch-hint">tap any theme to apply</span>
            <button type="button" class="text-link themes-close-btn" data-close-themes>close</button>
          </div>
        </div>
      `,t.addEventListener("click",e=>{if(e.target===t||e.target.closest("[data-close-themes]")){h();return}const i=e.target.closest(".theme-tile");i&&C(i.dataset.themeId)}),t.addEventListener("mouseover",e=>{const i=e.target.closest(".theme-tile");if(!i)return;const o=T.find(E=>E.id===i.dataset.themeId);o&&p(o)}),t.addEventListener("mouseleave",()=>{p(T.find(e=>e.id===s)||T[0])}),window.addEventListener("keydown",e=>{if(!t||t.hidden)return;if(e.key==="Escape"){e.preventDefault(),h();return}const i=Number(e.key);i>=1&&i<=T.length&&!e.target.closest("input, textarea")&&(e.preventDefault(),C(T[i-1].id))}),document.body.appendChild(t)),d(),p(T.find(e=>e.id===s)||T[0]),t.hidden=!1,requestAnimationFrame(()=>t.classList.add("is-open"))};g(s);const M=document.querySelector(".rail-meta"),$=document.querySelector(".rail-top-row");if(M&&!M.querySelector(".themes-trigger")){const e=document.createElement("button");if(e.type="button",e.className="themes-trigger",e.textContent="themes",e.addEventListener("click",S),M.insertBefore(e,M.firstChild),$&&!$.querySelector(".themes-mobile-trigger")){const i=document.createElement("button");i.type="button",i.className="themes-mobile-trigger",i.setAttribute("aria-label","Open site themes"),i.textContent="themes",i.addEventListener("click",S),$.appendChild(i)}}}const ie={game:"214, 152, 92",tool:"110, 164, 212",app:"146, 142, 216",apps:"184, 198, 212",vr:"184, 118, 206",website:"216, 198, 162"};function re(){const s=document.body;let t=null;const n=c=>{const b=c?.closest?.(".album-row[data-glow], .script-card[data-glow], .project-card");if(!b)return null;const u=b.dataset.glow||(b.classList.contains("project-card")?ie[b.dataset.category]||"196, 196, 206":"");return u?{el:b,rgb:u}:null},a=c=>{const b=n(c.target);b&&(t=b.el,z=!0,s.style.setProperty("--glow-rgb",b.rgb),s.style.setProperty("--glow-alpha","1"))},r=c=>{t&&(c.relatedTarget&&t.contains(c.relatedTarget)||(t=null,z=!1,!R&&!document.querySelector("[data-portfolio-listen].is-playing")&&s.style.setProperty("--glow-alpha","0")))};document.addEventListener("mouseover",a),document.addEventListener("focusin",a),document.addEventListener("mouseout",r),document.addEventListener("focusout",r)}function oe(){const s=[...document.querySelectorAll("[data-portfolio-listen]")];if(!s.length)return;const t=G=new ae,n=a=>{s.forEach(r=>{r.classList.toggle("is-playing",a),r.classList.contains("album-listen-btn")?(r.setAttribute("aria-pressed",String(a)),r.textContent=a?"listening · stop":"listen"):r.setAttribute("aria-label",a?"Stop still room":"Listen to still room")})};s.forEach(a=>{a.addEventListener("click",()=>{const r=t.toggle();n(r)})})}let R=!1,D=null,G=null,z=!1;function le(){let s=null,t=null,n=null,a=null,r=null,c=null;const b=()=>{if(s){s.state==="suspended"&&s.resume();return}s=new(window.AudioContext||window.webkitAudioContext),t=s.createGain(),t.gain.value=.55,t.connect(s.destination);const u=s.sampleRate*3,g=s.createBuffer(1,u,s.sampleRate),p=g.getChannelData(0);let d=0;for(let S=0;S<u;S++){const M=Math.random()*2-1;d=d*.72+M*.28;const $=Math.random()<.0025?(Math.random()*2-1)*.9:0;p[S]=d*.65+$}const h=s.createBufferSource();h.buffer=g,h.loop=!0,n=s.createBiquadFilter(),n.type="bandpass",n.frequency.value=520,n.Q.value=2.6,a=s.createGain(),a.gain.value=0,h.connect(n).connect(a).connect(t),h.start(),r=s.createOscillator(),r.type="triangle",r.frequency.value=180;const C=s.createBiquadFilter();C.type="lowpass",C.frequency.value=900,c=s.createGain(),c.gain.value=0,r.connect(C).connect(c).connect(t),r.start()};return{grab(){b();const u=s.currentTime,g=s.createOscillator(),p=s.createGain();g.frequency.setValueAtTime(115,u),g.frequency.exponentialRampToValueAtTime(48,u+.055),p.gain.setValueAtTime(.16,u),p.gain.exponentialRampToValueAtTime(1e-4,u+.065),g.connect(p).connect(t),g.start(u),g.stop(u+.07)},update(u,g){if(!s)return;const p=s.currentTime,d=Math.min(1,Math.abs(u)/520),h=340+d*2100;n.frequency.setTargetAtTime(h,p,.025),a.gain.setTargetAtTime(g?.025+d*.42:d*.16,p,.03),r.frequency.setTargetAtTime(130+d*390,p,.02),c.gain.setTargetAtTime(d>.06?d*.08:0,p,.025)}}}function ce(){const s=document.querySelector(".album-list");if(!s)return;const t=s.querySelector(".album-cover"),n=document.createElement("div");n.className="music-vinyl-stage",n.setAttribute("aria-hidden","true"),n.innerHTML=`
    <div class="music-vinyl-disc">
      <div class="music-vinyl-label">
        <img class="music-vinyl-art" src="${t?.getAttribute("src")||""}" alt="" />
      </div>
      <span class="music-vinyl-hole"></span>
    </div>
    <span class="music-vinyl-sheen"></span>
  `,document.body.appendChild(n);const a=n.querySelector(".music-vinyl-disc"),r=n.querySelector(".music-vinyl-art"),c=le(),b=m=>{!m||r.getAttribute("src")===m||(r.style.opacity="0.35",r.setAttribute("src",m),requestAnimationFrame(()=>{r.style.opacity="1"}))};s.addEventListener("mouseover",m=>{const w=m.target?.closest?.(".album-row")?.querySelector(".album-cover");w&&b(w.getAttribute("src"))}),s.addEventListener("focusin",m=>{const w=m.target?.closest?.(".album-row")?.querySelector(".album-cover");w&&b(w.getAttribute("src"))});let u=!1,g=0,p=0,d=0,h=0;const C=m=>{const l=a.getBoundingClientRect();return Math.atan2(m.clientY-(l.top+l.height/2),m.clientX-(l.left+l.width/2))};a.addEventListener("pointerdown",m=>{u=!0,g=C(m),p=performance.now(),h=0,a.setPointerCapture(m.pointerId),c.grab()}),a.addEventListener("pointermove",m=>{if(!u)return;const l=performance.now(),w=C(m);let v=w-g;v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2);const L=v*180/Math.PI,x=Math.max(.004,(l-p)/1e3);d+=L,h=h*.4+L/x*.6,g=w,p=l});const S=()=>{u=!1};a.addEventListener("pointerup",S),a.addEventListener("pointercancel",S);let M=window.scrollY*.35,$=0,e=performance.now(),i=0;const o=document.body,E=m=>{const l=Math.min(.05,(m-e)/1e3);e=m;const w=!!document.querySelector("[data-portfolio-listen].is-playing");if(R||w){$+=l*42;let x=0;if(w&&G)x=G.getLevel()*.55;else{const q=m*.001;x=(.5+.5*Math.sin(q*1.1))*.28+(.5+.5*Math.sin(q*.45+1.2))*.14}if(i+=(x-i)*Math.min(1,l*2.6),o.style.setProperty("--vinyl-pulse",i.toFixed(3)),!z){const q=w?"196, 196, 206":D||"196, 196, 206";o.style.setProperty("--glow-rgb",q),o.style.setProperty("--glow-alpha",(.88+i*.28).toFixed(3))}n.style.filter=`drop-shadow(0 0 ${(20+i*14).toFixed(1)}px rgba(${w?"220,216,208":D||"220,216,208"}, ${(.08+i*.09).toFixed(3)}))`}else i+=(0-i)*Math.min(1,l*6),o.style.setProperty("--vinyl-pulse",i.toFixed(3)),!z&&i<.01&&o.style.setProperty("--glow-alpha","0"),n.style.filter="";u?m-p>40&&(h*=Math.exp(-l*14)):(d+=h*l,h*=Math.exp(-l*4.5),Math.abs(h)<.5&&(h=0)),c.update(h,u);const L=window.scrollY*.35+$+d;M+=(L-M)*(u?.55:Math.min(1,l*10)),a.style.transform=`rotate(${M.toFixed(2)}deg)`,requestAnimationFrame(E)};requestAnimationFrame(E)}function de(){const s=[...document.querySelectorAll(".album-row")];if(!s.length)return;const t='<svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M3 2.2v7.6L9.8 6 3 2.2z"/></svg>',n='<svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><rect x="2.5" y="2.5" width="7" height="7" rx="1"/></svg>';let a=null;const r=()=>{a&&(a.btn.setAttribute("aria-expanded","false"),a.btn.setAttribute("aria-label","Play preview"),a.btn.classList.remove("is-open"),a.btn.innerHTML=t,a.wrap.remove(),a=null,R=!1,D=null)};s.forEach(c=>{const b=c.querySelector('.album-actions a[href*="soundcloud.com"]'),u=c.querySelector(".album-cover-wrap"),g=c.querySelector(".album-body");if(!b||!u||!g)return;const p=document.createElement("div");p.className="album-cover-slot",u.parentNode.insertBefore(p,u),p.appendChild(u);const d=document.createElement("button");d.type="button",d.className="album-cover-play",d.setAttribute("aria-expanded","false"),d.setAttribute("aria-label","Play preview"),d.innerHTML=t,p.appendChild(d),d.addEventListener("click",()=>{if(a?.btn===d){r();return}r();const h=document.createElement("div");h.className="album-player-wrap";const C=b.href.includes("/sets/"),S=`https://w.soundcloud.com/player/?url=${encodeURIComponent(b.href)}&color=%23ece6dc&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;h.innerHTML=`<iframe title="SoundCloud preview" width="100%" height="${C?300:120}" scrolling="no" frameborder="no" allow="autoplay" src="${S}"></iframe>`,g.appendChild(h),d.setAttribute("aria-expanded","true"),d.setAttribute("aria-label","Close preview"),d.classList.add("is-open"),d.innerHTML=n,a={btn:d,wrap:h},R=!0,D=c.dataset.glow||null})})}function me(){const s=[...document.querySelectorAll(".project-thumb-wrap")];!s.length||!window.matchMedia("(pointer: fine) and (hover: hover)").matches||s.forEach(t=>{t.addEventListener("pointermove",n=>{const a=t.getBoundingClientRect();if(!a.width||!a.height)return;const r=(n.clientX-a.left)/a.width,c=(n.clientY-a.top)/a.height,b=(.5-c)*6,u=(r-.5)*7;t.style.setProperty("--mx",`${(r*100).toFixed(1)}%`),t.style.setProperty("--my",`${(c*100).toFixed(1)}%`),t.style.transform=`perspective(720px) rotateX(${b.toFixed(2)}deg) rotateY(${u.toFixed(2)}deg) scale(1.015)`}),t.addEventListener("pointerleave",()=>{t.style.transform=""})})}function ue(){const s=document.getElementById("projectSearch");s&&(window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=860)&&(s.placeholder="search projects...");const t=document.createElement("button");t.type="button",t.className="back-to-top",t.setAttribute("aria-label","Back to top"),t.innerHTML='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M8 12.5V3.5M4 7.5L8 3.5l4 4"/></svg><span>top</span>',t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.body.appendChild(t);let n=!1;const a=()=>{n=!1,t.classList.toggle("is-visible",window.scrollY>480)};window.addEventListener("scroll",()=>{n||(n=!0,requestAnimationFrame(a))},{passive:!0})}function Q(){te(),ne(),ue(),se(),oe(),de(),ce(),me(),re()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Q):Q();
