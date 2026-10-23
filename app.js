/**
 * MS DHONI SCROLLYTELLING — MASTER ENGINE
 * Includes DRS Simulator, Web Audio Synthesizers, Canvas Helicopter Physics,
 * 0.08s Reflex Duel, 183* Wagon Wheel, and Interactive Editorial Modules.
 */

(function () {
  'use strict';

  // --- 1. WEB AUDIO SYNTHESIS ENGINE (100% Offline, Zero External MP3s) ---
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.enabled = false;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.init();
      this.enabled = !this.enabled;
      return this.enabled;
    }

    // Heavy bat crack on sweet spot
    playBatThwack() {
      if (!this.enabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(160, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.1);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.85, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.14);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.15);
      } catch (e) {}
    }

    // Stadium roar swell
    playCrowdRoar() {
      if (!this.enabled || !this.ctx) return;
      try {
        const bufferSize = this.ctx.sampleRate * 1.6;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(450, this.ctx.currentTime);
        filter.Q.setValueAtTime(2.5, this.ctx.currentTime);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.4, this.ctx.currentTime + 0.45);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 1.55);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        noise.start();
        noise.stop(this.ctx.currentTime + 1.6);
      } catch (e) {}
    }

    // Wooden bails dislodging snap
    playBailsClack() {
      if (!this.enabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(950, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.06);

        gain.gain.setValueAtTime(0.9, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.07);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
      } catch (e) {}
    }

    // High-tech DRS Heartbeat Beep
    playDrsBeep() {
      if (!this.enabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.11);
      } catch (e) {}
    }

    // CSK Whistle Podu Anthem Motif
    playWhistlePodu() {
      if (!this.enabled || !this.ctx) return;
      const notes = [
        { f: 587.33, d: 0.12 }, // D5
        { f: 659.25, d: 0.12 }, // E5
        { f: 783.99, d: 0.22 }, // G5
        { f: 659.25, d: 0.15 }, // E5
        { f: 880.00, d: 0.35 }  // A5
      ];
      let time = this.ctx.currentTime + 0.05;

      notes.forEach((note) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.f, time);

        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.4, time + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.01, time + note.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(time);
        osc.stop(time + note.d + 0.02);
        time += note.d + 0.04;
      });
    }

    // Mechanical Ticket Punch Click
    playPunchClick() {
      if (!this.enabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      } catch (e) {}
    }
  }

  const sound = new SoundEngine();

  // --- 2. DOM REFERENCES & SCROLL PROGRESS ---
  const progressBar = document.getElementById('scrollProgressBar');
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const narrativeSteps = document.querySelectorAll('.narrative-step');
  const stageLayers = document.querySelectorAll('.stage-layer');
  const navDots = document.querySelectorAll('.nav-dot');

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      const active = sound.toggle();
      soundToggleBtn.classList.toggle('active', active);
      soundToggleBtn.querySelector('.btn-label').textContent = active ? 'Sound: ON' : 'Sound: OFF';
      if (active) sound.playBatThwack();
    });
  }

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      if (progressBar) progressBar.style.width = `${progress}%`;
    }
  }, { passive: true });

  // --- 3. SCROLLYTELLING INTERSECTION OBSERVER ---
  function switchChapter(chapterId) {
    stageLayers.forEach(layer => {
      if (layer.dataset.layer === chapterId) {
        layer.classList.add('active');
      } else {
        layer.classList.remove('active');
      }
    });

    navDots.forEach(dot => {
      if (dot.dataset.target === chapterId) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    if (chapterId === 'chapter-4') {
      triggerHelicopterShot();
    }
  }

  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        narrativeSteps.forEach(s => s.classList.remove('active'));
        entry.target.classList.add('active');
        const chapterId = entry.target.dataset.chapter;
        switchChapter(chapterId);
      }
    });
  }, { root: null, rootMargin: '-20% 0px -40% 0px', threshold: 0.15 });

  narrativeSteps.forEach(step => stepObserver.observe(step));

  navDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetId = dot.dataset.target;
      const targetEl = document.querySelector(`.narrative-step[data-chapter="${targetId}"]`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // --- 4. CHAPTER 1: KHARAGPUR TICKET PUNCHER ---
  const punchBtn = document.getElementById('punchTicketBtn');
  const punchCounter = document.getElementById('punchCount');
  const ticketBody = document.getElementById('railwayTicketBody');
  let punchCount = 0;

  if (punchBtn && ticketBody) {
    punchBtn.addEventListener('click', () => {
      punchCount++;
      if (punchCounter) punchCounter.textContent = `${punchCount} punched`;
      sound.playPunchClick();

      const hole = document.createElement('div');
      hole.style.position = 'absolute';
      hole.style.width = '14px';
      hole.style.height = '14px';
      hole.style.borderRadius = '50%';
      hole.style.backgroundColor = '#050811';
      hole.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.85)';
      const rect = ticketBody.getBoundingClientRect();
      const left = Math.floor(Math.random() * (rect.width - 50)) + 25;
      const top = Math.floor(Math.random() * (rect.height - 50)) + 25;
      hole.style.left = `${left}px`;
      hole.style.top = `${top}px`;
      hole.style.zIndex = '5';
      ticketBody.appendChild(hole);
    });
  }

  // --- 5. CHAPTER 2: WAGON WHEEL (183* vs Sri Lanka) ---
  const wagonData = [
    { type: 'six', angle: 45, dist: 105, bowler: 'Chaminda Vaas', desc: 'Over deep midwicket into the pavilion roof' },
    { type: 'six', angle: 25, dist: 112, bowler: 'Muttiah Muralitharan', desc: 'Straight down the ground over sightscreen' },
    { type: 'six', angle: 70, dist: 98, bowler: 'Dilhara Fernando', desc: 'Savage pull shot over square leg' },
    { type: 'six', angle: 10, dist: 108, bowler: 'Farveez Maharoof', desc: 'Effortless loft over long-off boundary' },
    { type: 'four', angle: 130, dist: 78, bowler: 'Chaminda Vaas', desc: 'Fiercely slashed past backward point' },
    { type: 'four', angle: -30, dist: 80, bowler: 'Muralitharan', desc: 'Inside-out drilled through extra cover' },
    { type: 'four', angle: 60, dist: 75, bowler: 'Fernando', desc: 'Bottom-hand whip through deep mid-wicket' },
    { type: 'six', angle: -45, dist: 102, bowler: 'Muralitharan', desc: 'Magnificent lofted drive over long-off' }
  ];

  const wagonSvg = document.getElementById('wagonWheelSvg');
  const shotTooltip = document.getElementById('shotTooltip');

  if (wagonSvg) {
    const cx = 150;
    const cy = 150;
    wagonData.forEach((shot) => {
      const rad = (shot.angle - 90) * (Math.PI / 180);
      const r = (shot.dist / 120) * 125;
      const x2 = cx + r * Math.cos(rad);
      const y2 = cy + r * Math.sin(rad);

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', cx);
      line.setAttribute('y1', cy);
      line.setAttribute('x2', x2);
      line.setAttribute('y2', y2);
      line.setAttribute('stroke', shot.type === 'six' ? '#fdb913' : '#00d2ff');
      line.setAttribute('stroke-width', shot.type === 'six' ? '3' : '2');
      line.setAttribute('stroke-linecap', 'round');
      line.style.cursor = 'pointer';

      line.addEventListener('mouseenter', () => {
        line.setAttribute('stroke-width', '5');
        if (shotTooltip) {
          shotTooltip.style.opacity = '1';
          shotTooltip.innerHTML = `<strong style="color:${shot.type === 'six' ? '#fdb913' : '#00d2ff'};">${shot.type.toUpperCase()} (${shot.dist}m)</strong> vs ${shot.bowler}<br><em>${shot.desc}</em>`;
        }
        sound.playBatThwack();
      });

      line.addEventListener('mouseleave', () => {
        line.setAttribute('stroke-width', shot.type === 'six' ? '3' : '2');
        if (shotTooltip) shotTooltip.style.opacity = '0';
      });

      wagonSvg.appendChild(line);
    });
  }

  // --- 6. CHAPTER 3: 2007 JOGINDER SHARMA OVER ---
  const overEvents = [
    { ball: '19.1', type: 'wide', title: 'Wide Ball', color: '#f59e0b', text: 'Joginder bowls wide outside off. Tension rises. 12 runs needed off 6 balls.' },
    { ball: '19.1', type: 'dot', title: 'Dot Ball', color: '#00d2ff', text: 'Good length outside off, Misbah swings and misses! 12 runs needed off 5 balls.' },
    { ball: '19.2', type: 'six', title: 'Misbah Hits SIX!', color: '#ef4444', text: 'Full toss smashed straight down the ground! 6 runs needed off 4 balls. Tension mounts!' },
    { ball: '19.3', type: 'wicket', title: 'IN THE AIR... SREESANTH TAKES IT!', color: '#10b981', text: 'Misbah scoops to short fine leg! Sreesanth catches it! INDIA WIN INAUGURAL T20 WORLD CUP!' }
  ];

  const ballNodes = document.querySelectorAll('.ball-node');
  const overEventBadge = document.getElementById('overEventBadge');
  const overDesc = document.getElementById('overDesc');

  function triggerOverBall(index) {
    if (index < 0 || index >= overEvents.length) return;
    const event = overEvents[index];

    ballNodes.forEach((node, i) => {
      node.classList.remove('active');
      if (i === index) node.classList.add('active');
    });

    if (overEventBadge) {
      overEventBadge.textContent = event.title;
      overEventBadge.style.backgroundColor = event.color;
    }

    if (overDesc) {
      overDesc.textContent = event.text;
    }

    if (event.type === 'six') {
      sound.playBatThwack();
    } else if (event.type === 'wicket') {
      sound.playCrowdRoar();
      triggerConfetti();
    } else {
      sound.playPunchClick();
    }
  }

  ballNodes.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.ballIndex, 10);
      triggerOverBall(idx);
    });
  });

  // --- 7. CHAPTER 4: 2011 HELICOPTER SHOT PHYSICS CANVAS ---
  const canvas = document.getElementById('helicopterCanvas');
  let ctx = null;
  let animId = null;

  if (canvas) {
    ctx = canvas.getContext('2d');
  }

  function resizeCanvas() {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * (window.devicePixelRatio || 1);
    canvas.height = rect.height * (window.devicePixelRatio || 1);
    if (ctx) ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
  }

  window.addEventListener('resize', resizeCanvas);
  setTimeout(resizeCanvas, 100);

  let ballProgress = 0;
  let isSimulating = false;

  function triggerHelicopterShot() {
    if (!canvas || !ctx || isSimulating) return;
    isSimulating = true;
    ballProgress = 0;
    sound.playBatThwack();
    setTimeout(() => sound.playCrowdRoar(), 320);

    const w = canvas.getBoundingClientRect().width;
    const h = canvas.getBoundingClientRect().height;

    const startX = 45;
    const startY = h - 50;
    const controlX = w * 0.45;
    const controlY = 15;
    const endX = w - 40;
    const endY = h - 90;

    const particles = [];

    function animate() {
      ctx.clearRect(0, 0, w, h);

      // Turf grass
      ctx.fillStyle = '#064e3b';
      ctx.fillRect(0, h - 30, w, 30);

      // Crease
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(38, h - 35, 5, 25);

      // Stumps
      ctx.fillStyle = '#fef08a';
      ctx.fillRect(32, h - 55, 4, 25);
      ctx.fillRect(38, h - 55, 4, 25);
      ctx.fillRect(44, h - 55, 4, 25);

      // Flight Path Guide
      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(controlX, controlY, endX, endY);
      ctx.stroke();
      ctx.setLineDash([]);

      const t = Math.min(ballProgress, 1);
      const currentX = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * controlX + t * t * endX;
      const currentY = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * controlY + t * t * endY;

      // Particle Trail
      if (t < 1) {
        particles.push({
          x: currentX,
          y: currentY,
          radius: Math.random() * 3.5 + 2,
          alpha: 1,
          color: Math.random() > 0.5 ? '#fdb913' : '#00d2ff'
        });
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.alpha -= 0.022;
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      // Ball
      ctx.beginPath();
      ctx.arc(currentX, currentY, 7.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 16;
      ctx.shadowColor = '#fdb913';
      ctx.fill();
      ctx.shadowBlur = 0;

      const dist = Math.round(t * 108);
      ctx.fillStyle = '#fdb913';
      ctx.font = 'bold 12px monospace';
      ctx.fillText(`${dist}m`, currentX - 12, currentY - 14);

      ballProgress += 0.015;

      if (ballProgress <= 1.25) {
        animId = requestAnimationFrame(animate);
      } else {
        isSimulating = false;
      }
    }

    cancelAnimationFrame(animId);
    animate();
  }

  const replayHeliBtn = document.getElementById('replayHeliBtn');
  if (replayHeliBtn) {
    replayHeliBtn.addEventListener('click', () => {
      isSimulating = false;
      triggerHelicopterShot();
    });
  }

  // --- 8. CHAPTER 5: 0.08s STUMPING MINI-GAME ---
  const startReflexBtn = document.getElementById('startReflexBtn');
  const reflexActionBtn = document.getElementById('reflexActionBtn');
  const reflexResult = document.getElementById('reflexResult');
  const bailsGroup = document.getElementById('bailsSvgGroup');

  let reflexStartTime = 0;
  let reflexTimeout = null;
  let isWaitingForFoot = false;
  let isGameReady = false;

  if (startReflexBtn && reflexActionBtn) {
    startReflexBtn.addEventListener('click', () => {
      startReflexBtn.style.display = 'none';
      reflexActionBtn.style.display = 'inline-block';
      reflexActionBtn.textContent = 'WAIT FOR FOOT TO LIFT...';
      reflexActionBtn.style.background = '#475569';
      if (reflexResult) reflexResult.innerHTML = 'Watch the batting crease closely...';

      if (bailsGroup) bailsGroup.classList.remove('bails-flying');

      isWaitingForFoot = true;
      isGameReady = false;

      const delay = Math.random() * 2000 + 1500;
      clearTimeout(reflexTimeout);
      reflexTimeout = setTimeout(() => {
        if (!isWaitingForFoot) return;
        isGameReady = true;
        reflexStartTime = performance.now();
        reflexActionBtn.textContent = 'STUMP NOW! (CLICK!)';
        reflexActionBtn.style.background = 'linear-gradient(135deg, #ef4444, #b91c1c)';
        if (reflexResult) reflexResult.innerHTML = '<span style="color:#ef4444; font-weight:bold;">FOOT IN THE AIR!</span>';
      }, delay);
    });

    reflexActionBtn.addEventListener('click', () => {
      if (!isWaitingForFoot) return;

      if (!isGameReady) {
        clearTimeout(reflexTimeout);
        isWaitingForFoot = false;
        reflexActionBtn.style.display = 'none';
        startReflexBtn.style.display = 'inline-block';
        startReflexBtn.textContent = 'TRY AGAIN';
        if (reflexResult) {
          reflexResult.innerHTML = '<span style="color:#f59e0b; font-weight:bold;">TOO EARLY! Batsman was safe. Dhoni never guesses!</span>';
        }
        return;
      }

      const reactionTimeMs = Math.round(performance.now() - reflexStartTime);
      isWaitingForFoot = false;
      isGameReady = false;

      sound.playBailsClack();
      if (bailsGroup) bailsGroup.classList.add('bails-flying');

      reflexActionBtn.style.display = 'none';
      startReflexBtn.style.display = 'inline-block';
      startReflexBtn.textContent = 'RETRY REFLEX TEST';

      const ratio = (reactionTimeMs / 80).toFixed(1);

      if (reflexResult) {
        reflexResult.innerHTML = `
          <div class="reaction-speed-display">${reactionTimeMs} ms</div>
          <div>Dhoni's World Record: <strong>80 ms (0.08 sec)</strong></div>
          <p style="margin-top:0.4rem; color:#cbd5e1;">${reactionTimeMs < 140 ? 'Pro athlete reflexes!' : `Dhoni dislodged the bails <strong>${ratio}x faster</strong> than you!`}</p>
        `;
      }
    });
  }

  // --- 9. CHAPTER 6: "DHONI REVIEW SYSTEM" (DRS) SIMULATOR ---
  const triggerDrsBtn = document.getElementById('triggerDrsBtn');
  const drsVerdictBanner = document.getElementById('drsVerdictBanner');
  const drsScreenStatus = document.getElementById('drsScreenStatus');
  const edgeBars = document.querySelectorAll('.edge-bar');

  if (triggerDrsBtn && drsVerdictBanner) {
    triggerDrsBtn.addEventListener('click', () => {
      triggerDrsBtn.disabled = true;
      triggerDrsBtn.textContent = 'CHECKING HAWK-EYE & ULTRA-EDGE...';
      sound.playDrsBeep();

      if (drsScreenStatus) drsScreenStatus.textContent = 'ULTRA-EDGE: NO BAT INVOLVED';

      // Animate flat wave then spike
      let ticks = 0;
      const interval = setInterval(() => {
        ticks++;
        edgeBars.forEach((bar, idx) => {
          if (idx === 7 || idx === 8) {
            bar.style.height = `${Math.sin(ticks) * 25 + 10}px`;
            bar.style.background = '#ef4444';
          } else {
            bar.style.height = `${Math.random() * 8 + 4}px`;
            bar.style.background = '#10b981';
          }
        });

        if (ticks >= 15) {
          clearInterval(interval);
          sound.playDrsBeep();
          if (drsScreenStatus) drsScreenStatus.textContent = 'BALL TRACKING: HITTING MIDDLE STUMP';
          drsVerdictBanner.textContent = 'OUT (DECISION OVERTURNED)';
          drsVerdictBanner.classList.add('out');
          sound.playCrowdRoar();
          triggerConfetti();

          triggerDrsBtn.disabled = false;
          triggerDrsBtn.textContent = 'TEST ANOTHER DRS CALL';
        }
      }, 100);
    });
  }

  // --- 10. CHAPTER 7: CSK RINGS & WHISTLE PODU ---
  const whistleBtn = document.getElementById('whistlePoduBtn');
  if (whistleBtn) {
    whistleBtn.addEventListener('click', () => {
      sound.playWhistlePodu();
    });
  }

  const ringBadges = document.querySelectorAll('.ring-badge');
  const ringInfoBox = document.getElementById('ringInfoBox');

  const ringData = {
    '2010': 'CSK beats Mumbai Indians in Mumbai. Dhoni places a straight mid-off for Pollard; plan works next ball!',
    '2011': 'CSK defends the title at Chepauk! Dominant 58-run win over Royal Challengers Bangalore.',
    '2018': '"The Comeback Kings" — Shane Watson hits a blazing century to clinch trophy #3 after 2 years away.',
    '2021': 'Masterclass in Dubai. CSK defeats KKR by 27 runs to lift their 4th IPL crown.',
    '2023': 'The 3 AM thriller in Ahmedabad! Ravindra Jadeja hits 10 off 2 balls; Dhoni lifts Jadeja in iconic celebration.'
  };

  ringBadges.forEach(badge => {
    badge.addEventListener('click', () => {
      ringBadges.forEach(b => b.classList.remove('active'));
      badge.classList.add('active');
      const yr = badge.dataset.year;
      if (ringInfoBox && ringData[yr]) {
        ringInfoBox.innerHTML = `<strong>IPL ${yr} Champion:</strong> ${ringData[yr]}`;
      }
      sound.playPunchClick();
    });
  });

  // --- 11. CONFETTI EFFECT ---
  function triggerConfetti() {
    const stage = document.querySelector('.stage-layer.active') || document.body;
    for (let i = 0; i < 30; i++) {
      const c = document.createElement('div');
      c.style.position = 'absolute';
      c.style.width = `${Math.random() * 8 + 4}px`;
      c.style.height = `${Math.random() * 8 + 4}px`;
      c.style.backgroundColor = ['#fdb913', '#00d2ff', '#ef4444', '#10b981', '#ffffff'][Math.floor(Math.random() * 5)];
      c.style.left = `${Math.random() * 100}%`;
      c.style.top = '10%';
      c.style.zIndex = '999';
      c.style.pointerEvents = 'none';
      c.style.transition = 'transform 1.2s ease-out, opacity 1.2s ease-out';
      stage.appendChild(c);

      const dx = (Math.random() - 0.5) * 200;
      const dy = Math.random() * 250 + 80;

      requestAnimationFrame(() => {
        c.style.transform = `translate(${dx}px, ${dy}px) rotate(${Math.random() * 360}deg)`;
        c.style.opacity = '0';
      });

      setTimeout(() => c.remove(), 1300);
    }
  }

  // --- 12. TRIBUTE WALL (LocalStorage & Legends) ---
  const tributeForm = document.getElementById('userTributeForm');
  const userTributeList = document.getElementById('userTributesList');

  const defaultTributes = [
    { author: 'Sachin Tendulkar', text: 'Dhoni is the best captain I have played under. His calmness under intense pressure was unmatched in world cricket.' },
    { author: 'Virat Kohli', text: 'You will always be my captain. The trust and camaraderie we shared on the 22 yards will stay forever in my heart.' },
    { author: 'Adam Gilchrist', text: 'The best finisher in the game, and one of the finest wicketkeepers the cricket world has ever witnessed.' },
    { author: 'Sunil Gavaskar', text: 'If I have only a few minutes left to live, I would ask to see that six of MS Dhoni in the 2011 World Cup final.' }
  ];

  function loadTributes() {
    if (!userTributeList) return;
    const stored = JSON.parse(localStorage.getItem('msd_tributes') || '[]');
    const all = [...stored, ...defaultTributes];

    userTributeList.innerHTML = all.map(item => `
      <div class="quote-slide">
        <blockquote>"${escapeHtml(item.text)}"</blockquote>
        <author>— ${escapeHtml(item.author)}</author>
      </div>
    `).join('');
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  if (tributeForm) {
    tributeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('tributeName');
      const msgInput = document.getElementById('tributeMessage');

      const name = (nameInput ? nameInput.value.trim() : '') || 'Anonymous Fan';
      const msg = msgInput ? msgInput.value.trim() : '';

      if (!msg) return;

      const stored = JSON.parse(localStorage.getItem('msd_tributes') || '[]');
      stored.unshift({ author: name, text: msg });
      localStorage.setItem('msd_tributes', JSON.stringify(stored));

      if (msgInput) msgInput.value = '';
      if (nameInput) nameInput.value = '';

      loadTributes();
      sound.playCrowdRoar();
      triggerConfetti();
    });
  }

  loadTributes();

})();
