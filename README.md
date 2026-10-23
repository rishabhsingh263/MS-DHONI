# MS Dhoni — The Chronicles of Captain Cool
### An Interactive Scrollytelling Web Experience

A high-fidelity scrollytelling website exploring the life, career, mindset, and legendary moments of **Mahendra Singh Dhoni (#7)** — from his days as a railway ticket examiner at Kharagpur to becoming the only captain in cricket history to lift all three ICC white-ball trophies.

---

## 🌟 Key Features

1. **Precision Scrollytelling Architecture**:
   - Dual-column sticky-stage layout: Narrative cards scroll on the left, while the visual stage remains pinned on the right, updating seamlessly via `IntersectionObserver`.
   - Real-time global scroll reading progress bar.
   - Desktop chapter navigation rail with tooltips and click-to-jump navigation.

2. **Interactive Stage Simulators**:
   - **Chapter 1: Platform No. 8, Kharagpur (2001–2003)**:
     - Authentic South Eastern Railway TTE ticket with interactive hole puncher and ticket-counting mechanics.
   - **Chapter 2: The Raw Power: 183* vs Sri Lanka (Jaipur 2005)**:
     - Interactive SVG Wagon Wheel plotting the 10 mammoth sixes and boundaries with distance calculations (up to 112m) and bowler tooltips (Vaas, Muralitharan, Fernando).
   - **Chapter 3: Johannesburg 2007 (T20 World Cup Final)**:
     - Step-by-step interactive ball simulation of Joginder Sharma’s final over vs Misbah-ul-Haq, culminating in Sreesanth's immortal catch.
   - **Chapter 4: April 2, 2011 — Wankhede Helicopter Shot**:
     - Physics-driven `<canvas>` flight-path simulator depicting the iconic 108m winning six over long-on, golden particle trails, Ravi Shastri commentary ticker, and replay controls.
   - **Chapter 5: 0.08 Seconds — Faster Than A Blink**:
     - An interactive reaction-time mini-game testing whether users can react faster than Dhoni's world-record 80ms stumping of Keemo Paul / Sabbir Rahman. Includes animated flying bails SVG.
   - **Chapter 6: The Ice-Cold Finisher (Telemetry)**:
     - Real-time heart-rate comparison widget: Dhoni’s calm 68 BPM vs the bowler's 180 BPM under final-over pressure, alongside his record 102.71 batting average in won chases.
   - **Chapter 7: Whistle Podu (CSK Thala Dynasty)**:
     - 5 IPL championship rings with match details, 120.4 dB Chepauk crowd roar audio visualizer, and custom Whistle Podu synthesizer.
   - **Chapter 8: 19:29 Hours Farewell**:
     - The iconic August 15, 2020 Instagram sign-off clock at 19:29 IST.

3. **Web Audio API Sound Engine (Zero external dependencies)**:
   - Includes custom procedural audio synthesizers for cricket bat thwacks, crowd roar swells, wooden bails clacks, and the Whistle Podu whistle motif.
   - Works 100% offline with zero external audio MP3 files or CDN dependencies.

4. **Hall of Fame & Tribute Wall**:
   - Highlights the ICC White-Ball Triple Crown (2007 T20 WC, 2011 ODI WC, 2013 Champions Trophy).
   - Interactive local-storage powered tribute guestbook preloaded with quotes from Sachin Tendulkar, Virat Kohli, Adam Gilchrist, and Sunil Gavaskar.

---

## 🚀 How to Run and View

### Option 1: Direct File Open
Simply double-click or open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari):
```powershell
Start-Process "C:\Users\singh\.gemini\antigravity\scratch\ms-dhoni-scrollytelling\index.html"
```

### Option 2: Local HTTP Server (e.g. Python or Node)
Using Python:
```bash
cd "C:\Users\singh\.gemini\antigravity\scratch\ms-dhoni-scrollytelling"
python -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

---

## 🎨 Design System
- **Colors**: Deep Midnight Navy (`#060913`), CSK Gold (`#fdb913`), Indian Blue / Cyan (`#38bdf8`), Pitch Turf Green (`#10b981`).
- **Typography**: Responsive, high-contrast, modern clean sans-serif and monospace numerals.
- **Responsiveness**: Fully responsive across mobile smartphones, tablets, laptops, and ultra-wide displays.
