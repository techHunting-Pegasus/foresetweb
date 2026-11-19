"use client";

import { useEffect, useRef, useState } from "react";

const COL = {
  trail: "#8B7355", trailWalked: "#A08060", skin: "#D4A574", hair: "#3D2914",
  shirt: "#5C7A3D", pants: "#594532", boots: "#3D2914", backpack: "#8B5E3C",
  backpackPocket: "#7A5030", stick: "#7A6040", tent: "#5C7A3D",
  tentShade: "#4A6830", tentInner: "#1a2e1a",
};

const TRAIL = [
  "M 180,100", "C 180,500 240,500 240,900", "C 240,1300 70,1300 70,1700",
  "C 70,2100 250,2100 250,2500", "C 250,2900 60,2900 60,3300",
  "C 60,3700 230,3700 230,4100", "C 230,4500 80,4500 80,4900",
  "C 80,5300 240,5300 240,5700", "C 240,6100 70,6100 70,6500",
  "C 70,6900 220,6900 210,7400", "C 200,7900 160,8400 155,8900",
  "C 150,9200 150,9400 150,9600",
].join(" ");

const CAMP = { x: 150, y: 9500 };

const DOTS: [number, number, number][] = [
  [195,250,2],[170,450,1.5],[245,750,2],[235,1050,1.5],
  [180,1200,2],[85,1500,1.5],[60,1800,2],[90,2000,1.5],
  [200,2300,2],[255,2600,1.5],[230,2800,2],[80,3100,1.5],
  [55,3400,2],[75,3600,1.5],[200,3900,2],[235,4200,1.5],
  [210,4400,2],[100,4700,1.5],[75,5000,2],[105,5200,1.5],
  [210,5500,2],[245,5800,1.5],[220,6000,2],[90,6300,1.5],
  [65,6600,2],[95,6800,1.5],[195,7100,2],[215,7400,1.5],
  [190,7700,2],[170,8100,1.5],[158,8500,2],[152,8900,1.5],
];

// --- FOREST WORLD DATA ---

// Treeline silhouette paths (repeating patterns for left and right edges)
// Each tree layer: depth(0=back,1=mid,2=front), side(0=left,1=right), top%, height%, opacity
type TreeSilhouette = { depth: number; side: number; top: number; h: number; opacity: number };
const TREELINES: TreeSilhouette[] = [];
for (let i = 0; i < 20; i++) {
  const t = i * 5;
  TREELINES.push({ depth: 0, side: 0, top: t, h: 5.5, opacity: 0.15 });
  TREELINES.push({ depth: 0, side: 1, top: t + 1, h: 5.5, opacity: 0.15 });
  if (i < 18) {
    TREELINES.push({ depth: 1, side: 0, top: t + 2, h: 5, opacity: 0.25 });
    TREELINES.push({ depth: 1, side: 1, top: t + 0.5, h: 5, opacity: 0.25 });
  }
  if (i < 16) {
    TREELINES.push({ depth: 2, side: 0, top: t + 1.5, h: 4, opacity: 0.4 });
    TREELINES.push({ depth: 2, side: 1, top: t + 3, h: 4, opacity: 0.4 });
  }
}

// Individual detail trees: [leftPct, topPct, scale, type(0=pine,1=fir,2=bush,3=tallpine)]
const TREES: [number, number, number, number][] = [
  // Dense forest corridor - left edge
  [0,1,1.8,3],[5,3,1.4,0],[0,6,2.0,3],[8,8,1.2,1],[2,11,1.6,0],
  [0,14,1.9,3],[6,16,1.3,1],[3,19,1.5,0],[0,22,2.1,3],[7,24,1.1,2],
  [1,27,1.7,0],[0,30,2.0,3],[5,33,1.4,1],[2,36,1.6,0],[0,39,1.8,3],
  [6,42,1.2,0],[0,45,2.2,3],[4,48,1.5,1],[1,51,1.7,0],[0,54,1.9,3],
  [5,57,1.3,0],[0,60,2.0,3],[3,63,1.6,1],[0,66,1.8,3],[6,69,1.1,2],
  [1,72,1.5,0],[0,75,2.1,3],[4,78,1.4,0],
  // Dense forest corridor - right edge
  [82,2,1.6,3],[90,4,1.8,0],[85,7,1.3,1],[92,9,2.0,3],[88,12,1.5,0],
  [95,14,1.7,3],[83,17,1.2,1],[90,20,1.9,0],[86,23,1.4,3],[93,25,1.6,0],
  [88,28,2.0,3],[82,31,1.3,1],[91,34,1.8,0],[87,37,1.5,3],[94,39,1.7,0],
  [83,42,1.9,3],[90,45,1.4,1],[86,48,1.6,0],[92,51,2.1,3],[85,54,1.3,0],
  [89,57,1.8,3],[82,60,1.5,1],[91,63,2.0,0],[87,66,1.4,3],[93,69,1.7,0],
  [84,72,1.9,3],[90,75,1.6,0],[88,78,1.5,3],
  // Scattered mid-ground trees
  [20,5,0.9,2],[35,10,0.7,2],[60,15,0.8,2],[45,25,0.7,2],
  [30,35,0.8,2],[65,40,0.7,2],[25,50,0.9,2],[55,55,0.7,2],
  [40,65,0.8,2],[70,70,0.7,2],[30,80,0.6,2],
];

// Rocks (bigger)
const ROCKS: [number, number, number][] = [
  [30,8,1.4],[55,18,1.2],[20,32,1.5],[70,42,1.3],[35,52,1.6],[60,62,1.2],[25,72,1.4],[50,82,1.0],
];

// Flowers with sway animation
const FLOWERS: [number, number, string, number][] = [
  [22,12,"#E8B84B",0],[40,22,"#D090A0",0.5],[55,32,"#B080D0",1],
  [30,42,"#E87070",1.5],[65,52,"#E8B84B",2],[20,62,"#D090A0",2.5],
  [48,72,"#B080D0",3],[35,82,"#E87070",3.5],
];

// Mushroom clusters
const SHROOMS: [number, number, number][] = [
  [45,16,1.2],[70,26,1.0],[25,46,1.3],[55,56,1.1],[38,66,1.4],[60,76,1.0],
];

// Birds that fly across on scroll trigger: [triggerPct, startX, startY]
const BIRDS: [number][] = [[8],[22],[38],[55],[68]];

// Deer: [leftPct, topPct]
const DEER = { left: 25, top: 42 };

// Moon and stars
const STARS: [number, number, number, number][] = [
  [5,82,3,0],[15,80,2,0.4],[28,83,3.5,0.9],[38,81,2,1.3],[48,84,3,0.6],
  [58,80,2.5,1.1],[68,82,3,0.2],[78,83,2,1.5],[88,81,3.5,0.8],[95,83,2,1.8],
  [10,86,2.5,0.5],[22,85,3,1.0],[35,87,2,1.4],[50,86,3.5,0.3],[62,88,2.5,0.7],
  [75,85,3,1.2],[85,87,2,0.1],[42,89,3,0.9],[55,90,2.5,1.6],[70,89,3,0.4],
];

// Fireflies
const FLIES: [number, number, number, number][] = [
  [15,86,0,4],[30,88,0.8,5],[45,85,1.5,4.5],[60,90,2.2,5.5],
  [75,87,0.5,4.2],[35,92,1.8,5.2],[55,91,3,4.8],[20,93,0.3,5.5],
  [70,93,2.5,4.3],[45,94,1.2,5.0],
];

// Falling leaves
const LEAVES: [number, number, number, number][] = [
  [15,20,0,8],[60,25,2,10],[30,35,4,9],[75,40,1,11],[10,50,3,8.5],
  [50,55,5,9.5],[80,30,1.5,10],[40,45,3.5,8],[25,60,2.5,9],
];

// Sky gradient stops for scroll-driven atmosphere
const SKY_STOPS = [
  { pct: 0, colors: ["rgba(80,140,180,0.08)", "rgba(60,120,80,0.05)"] },
  { pct: 0.15, colors: ["rgba(40,100,60,0.06)", "rgba(30,80,40,0.08)"] },
  { pct: 0.35, colors: ["rgba(20,70,30,0.1)", "rgba(25,60,25,0.12)"] },
  { pct: 0.55, colors: ["rgba(30,60,25,0.1)", "rgba(60,50,20,0.08)"] },
  { pct: 0.7, colors: ["rgba(100,60,30,0.1)", "rgba(60,30,50,0.12)"] },
  { pct: 0.82, colors: ["rgba(40,20,60,0.15)", "rgba(15,15,50,0.2)"] },
  { pct: 1.0, colors: ["rgba(10,10,35,0.25)", "rgba(5,5,20,0.3)"] },
];

function lerpColor(a: string, b: string, t: number): string {
  const pa = a.match(/[\d.]+/g)!.map(Number);
  const pb = b.match(/[\d.]+/g)!.map(Number);
  const r = pa.map((v, i) => v + (pb[i] - v) * t);
  return `rgba(${Math.round(r[0])},${Math.round(r[1])},${Math.round(r[2])},${r[3].toFixed(3)})`;
}

function getSkyGradient(pct: number): string {
  let i = 0;
  while (i < SKY_STOPS.length - 1 && SKY_STOPS[i + 1].pct <= pct) i++;
  if (i >= SKY_STOPS.length - 1) {
    const s = SKY_STOPS[SKY_STOPS.length - 1];
    return `linear-gradient(to bottom, ${s.colors[0]}, ${s.colors[1]})`;
  }
  const a = SKY_STOPS[i], b = SKY_STOPS[i + 1];
  const t = (pct - a.pct) / (b.pct - a.pct);
  return `linear-gradient(to bottom, ${lerpColor(a.colors[0], b.colors[0], t)}, ${lerpColor(a.colors[1], b.colors[1], t)})`;
}

const GW = "w-[20%] sm:w-[22%] md:w-[25%] lg:w-[30%]";

export function ForestAdventureAnimation() {
  const [reducedMotion, setReducedMotion] = useState(false);

  // Trail refs
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const walkedRef = useRef<SVGPathElement>(null);

  // Character refs
  const charRef = useRef<HTMLDivElement>(null);
  const charSvgRef = useRef<SVGSVGElement>(null);
  const bodyRef = useRef<SVGGElement>(null);
  const pickupRef = useRef<SVGGElement>(null);
  const walkRef = useRef<SVGGElement>(null);
  const setupRef = useRef<SVGGElement>(null);
  const restRef = useRef<SVGGElement>(null);
  const lLegRef = useRef<SVGGElement>(null);
  const rLegRef = useRef<SVGGElement>(null);
  const lArmRef = useRef<SVGGElement>(null);
  const rArmRef = useRef<SVGGElement>(null);
  const bpFadeRef = useRef<SVGGElement>(null);
  const stickFadeRef = useRef<SVGGElement>(null);

  // Campsite refs
  const tentGRef = useRef<SVGGElement>(null);
  const fireGRef = useRef<SVGGElement>(null);
  const gearGRef = useRef<SVGGElement>(null);

  // Nature refs
  const deerRef = useRef<HTMLDivElement>(null);
  const natureElsRef = useRef<(HTMLDivElement | null)[]>([]);

  const st = useRef({ walkPhase: 0, lastY: 0, state: "", ctmA: 0, ctmE: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const svg = svgRef.current;
    const path = pathRef.current;
    const walked = walkedRef.current;
    const char = charRef.current;
    if (!svg || !path || !walked || !char) return;

    const totalLen = path.getTotalLength();
    walked.style.strokeDasharray = `${totalLen}`;
    walked.style.strokeDashoffset = `${totalLen}`;

    function cacheCTM() {
      const m = svg!.getScreenCTM();
      if (m) { st.current.ctmA = m.a; st.current.ctmE = m.e; }
    }
    cacheCTM();
    window.addEventListener("resize", cacheCTM);

    let raf = 0;
    const poses: [string, React.RefObject<SVGGElement | null>][] = [
      ["pickup", pickupRef], ["walking", walkRef], ["setup", setupRef], ["resting", restRef],
    ];

    // Count nature elements for scroll reveal
    const totalNatureEls = ROCKS.length + FLOWERS.length + SHROOMS.length;
    const naturePositions = [
      ...ROCKS.map(r => r[1] / 100),
      ...FLOWERS.map(f => f[1] / 100),
      ...SHROOMS.map(s => s[1] / 100),
    ];

    function frame() {
      const s = st.current;
      const scrollY = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;

      // --- Trail ---
      walked!.style.strokeDashoffset = `${totalLen * (1 - pct)}`;

      // --- Character position ---
      const pt = path!.getPointAtLength(pct * totalLen);
      const screenX = s.ctmA * pt.x + s.ctmE;
      char!.style.left = `${screenX}px`;
      char!.style.opacity = pct > 0.003 && pct < 0.985 ? "1" : "0";

      const d = 12;
      const p1 = path!.getPointAtLength(Math.max(0, pct * totalLen - d));
      const p2 = path!.getPointAtLength(Math.min(totalLen, pct * totalLen + d));
      const dx = p2.x - p1.x;
      if (charSvgRef.current) {
        charSvgRef.current.style.transform = dx >= 0 ? "" : "scaleX(-1)";
      }
      const tilt = Math.max(-8, Math.min(8, dx * 0.1));
      bodyRef.current?.setAttribute("transform", `rotate(${tilt})`);

      // --- Poses ---
      let ns = "hidden";
      if (pct <= 0.003) ns = "hidden";
      else if (pct < 0.05) ns = "pickup";
      else if (pct < 0.87) ns = "walking";
      else if (pct < 0.94) ns = "setup";
      else ns = "resting";

      if (ns !== s.state) {
        s.state = ns;
        for (const [name, ref] of poses) {
          if (ref.current) ref.current.style.display = ns === name ? "inline" : "none";
        }
      }

      if (ns === "pickup") {
        const pp = Math.min(1, pct / 0.05);
        if (bpFadeRef.current) bpFadeRef.current.style.opacity = String(pp);
        if (stickFadeRef.current) stickFadeRef.current.style.opacity = String(pp);
      }

      if (ns === "walking") {
        const delta = Math.abs(scrollY - s.lastY);
        s.walkPhase += delta * 0.055;
        const phase = s.walkPhase;
        const lSwing = Math.sin(phase) * 22;
        const aSwing = Math.sin(phase) * 16;
        lLegRef.current?.setAttribute("transform", `rotate(${lSwing}, -3, 0)`);
        rLegRef.current?.setAttribute("transform", `rotate(${-lSwing}, 3, 0)`);
        lArmRef.current?.setAttribute("transform", `rotate(${-aSwing}, -6, -20)`);
        rArmRef.current?.setAttribute("transform", `rotate(${aSwing}, 6, -20)`);
      }

      // --- Campsite ---
      const tentOp = Math.min(1, Math.max(0, (pct - 0.87) / 0.06));
      if (tentGRef.current) tentGRef.current.style.opacity = String(tentOp);
      const fireOp = Math.min(1, Math.max(0, (pct - 0.89) / 0.05));
      if (fireGRef.current) fireGRef.current.style.opacity = String(fireOp);
      const gearOp = Math.min(1, Math.max(0, (pct - 0.93) / 0.04));
      if (gearGRef.current) gearGRef.current.style.opacity = String(gearOp);

      // --- DEER PEEK ---
      if (deerRef.current) {
        const deerDist = Math.abs(pct - 0.42);
        const deerOp = deerDist < 0.08 ? Math.max(0, 1 - deerDist / 0.08) : 0;
        const deerSlide = deerOp > 0 ? (1 - deerOp) * 20 : 20;
        deerRef.current.style.opacity = String(deerOp * 0.8);
        deerRef.current.style.transform = `translateX(${deerSlide}px)`;
      }

      // --- SCROLL-REVEAL NATURE ELEMENTS ---
      for (let i = 0; i < totalNatureEls; i++) {
        const el = natureElsRef.current[i];
        if (!el) continue;
        const elPct = naturePositions[i];
        const dist = pct - elPct;
        if (dist > -0.03 && dist < 0.15) {
          const reveal = Math.min(1, (dist + 0.03) / 0.05);
          el.style.opacity = String(reveal);
          el.style.transform = `scale(${0.5 + reveal * 0.5}) translateY(${(1 - reveal) * 10}px)`;
        } else if (dist >= 0.15) {
          el.style.opacity = "1";
          el.style.transform = "scale(1)";
        } else {
          el.style.opacity = "0";
          el.style.transform = "scale(0.5) translateY(10px)";
        }
      }

      s.lastY = scrollY;
    }

    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(frame);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", cacheCTM);
      cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  let natureIdx = 0;

  return (
    <>
      {/* ═══ LAYER 1: Trail path (z-5) ═══ */}
      <div className={`absolute top-0 right-0 bottom-0 ${GW} pointer-events-none z-[5]`}>
        <svg ref={svgRef} viewBox="0 0 300 10000" preserveAspectRatio="none" className="w-full h-full overflow-visible" aria-hidden="true">
          {DOTS.map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill={COL.trail} opacity={0.1} />
          ))}
          <path d={TRAIL} fill="none" stroke={COL.trail} strokeWidth="8" strokeDasharray="16 10" opacity={0.2} />
          <path ref={walkedRef} d={TRAIL} fill="none" stroke={COL.trailWalked} strokeWidth="8" strokeLinecap="round" opacity={0.55} />
          <path ref={pathRef} d={TRAIL} fill="none" stroke="none" />
        </svg>
      </div>

      {/* ═══ LAYER 2: Nature world (z-12) ═══ */}
      <div className={`absolute top-0 right-0 bottom-0 ${GW} pointer-events-none z-[12] overflow-hidden`}>

        {/* Stream crossing with animated flow */}
        <div className="absolute left-0 w-full" style={{ top: "35%" }}>
          <svg viewBox="0 0 100 12" className="w-full" style={{ height: 10 }} preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,6 Q15,2 30,6 Q45,10 60,6 Q75,2 90,6 Q95,7 100,6" stroke="#3a8ab0" strokeWidth="3" fill="none" opacity={0.3} className="trail-stream" />
            <path d="M0,7 Q12,3 25,7 Q40,11 55,7 Q70,3 85,7 Q92,8.5 100,7" stroke="#2a7aa0" strokeWidth="2" fill="none" opacity={0.2} className="trail-stream-2" />
            <path d="M0,5 Q18,1 35,5 Q50,9 65,5 Q80,1 95,5 L100,5" stroke="#5aaad0" strokeWidth="1" fill="none" opacity={0.15} className="trail-stream" />
          </svg>
        </div>

        {/* Trail entrance sign */}
        <div className="absolute" style={{ left: "35%", top: "0.6%" }}>
          <svg viewBox="0 0 30 45" width={22} height={34} aria-hidden="true">
            <rect x="13" y="15" width="4" height="30" fill="#6B4914" rx={1} />
            <rect x="2" y="3" width="26" height="14" fill="#8B6914" rx={2} />
            <rect x="2" y="3" width="26" height="14" fill="none" stroke="#5a4010" strokeWidth="1" rx={2} />
            <text x="15" y="13" textAnchor="middle" fill="#2a1a0a" fontSize="5" fontFamily="serif">TRAIL</text>
          </svg>
        </div>

        {/* ── SCROLL-REVEAL: Rocks ── */}
        {ROCKS.map(([l, t, s], i) => (
          <div key={`r${i}`} ref={el => { natureElsRef.current[natureIdx++] = el; }} className="absolute transition-none" style={{ left: `${l}%`, top: `${t}%`, opacity: 0 }}>
            <svg viewBox="0 0 24 16" width={Math.round(20 * s)} height={Math.round(14 * s)} aria-hidden="true">
              <ellipse cx="12" cy="10" rx="12" ry="7" fill="#3a3a3a" opacity={0.7} />
              <ellipse cx="10" cy="8" rx="8" ry="5" fill="#4a4a4a" opacity={0.8} />
              <ellipse cx="6" cy="7" rx="3" ry="2" fill="#555" opacity={0.5} />
            </svg>
          </div>
        ))}

        {/* ── SCROLL-REVEAL: Flowers with sway ── */}
        {FLOWERS.map(([l, t, c, delay], i) => (
          <div key={`fl${i}`} ref={el => { natureElsRef.current[natureIdx++] = el; }} className="absolute transition-none trail-flower" style={{ left: `${l}%`, top: `${t}%`, opacity: 0, animationDelay: `${delay}s` }}>
            <svg viewBox="0 0 14 20" width={14} height={20} aria-hidden="true">
              <line x1="7" y1="20" x2="7" y2="8" stroke="#3a6a2a" strokeWidth="1.5" />
              <ellipse cx="4" cy="14" rx="3" ry="1.5" fill="#2a5a1a" opacity={0.6} />
              <circle cx="7" cy="6" r="5" fill={c as string} opacity={0.85} />
              <circle cx="7" cy="6" r="2" fill="#FFE080" />
              <circle cx="4" cy="4" r="2.5" fill={c as string} opacity={0.6} />
              <circle cx="10" cy="4" r="2.5" fill={c as string} opacity={0.6} />
              <circle cx="5" cy="8" r="2" fill={c as string} opacity={0.5} />
              <circle cx="9" cy="8" r="2" fill={c as string} opacity={0.5} />
            </svg>
          </div>
        ))}

        {/* ── SCROLL-REVEAL: Mushrooms ── */}
        {SHROOMS.map(([l, t, s], i) => (
          <div key={`sh${i}`} ref={el => { natureElsRef.current[natureIdx++] = el; }} className="absolute transition-none" style={{ left: `${l}%`, top: `${t}%`, opacity: 0 }}>
            <svg viewBox="0 0 20 22" width={Math.round(16 * s)} height={Math.round(18 * s)} aria-hidden="true">
              <rect x="8" y="12" width="4" height="9" fill="#e8d8c0" rx={1} />
              <ellipse cx="10" cy="11" rx="10" ry="7" fill="#c33" />
              <ellipse cx="10" cy="11" rx="10" ry="7" fill="none" stroke="#a22" strokeWidth="0.5" />
              <circle cx="6" cy="9" r="1.8" fill="#fff" opacity={0.75} />
              <circle cx="12" cy="7" r="1.3" fill="#fff" opacity={0.75} />
              <circle cx="14" cy="12" r="1" fill="#fff" opacity={0.6} />
              <circle cx="7" cy="13" r="0.8" fill="#fff" opacity={0.5} />
            </svg>
          </div>
        ))}

        {/* ── DEER (peeks out near 42%, driven by scroll JS) ── */}
        <div ref={deerRef} className="absolute transition-none" style={{ left: `${DEER.left}%`, top: `${DEER.top}%`, opacity: 0 }}>
          <svg viewBox="0 0 50 50" width={40} height={40} aria-hidden="true">
            <path d="M18,38 L18,28 Q15,20 22,16 L28,15 L30,16 Q36,20 34,28 L34,38" fill="#7a5a3a" />
            <line x1="21" y1="38" x2="21" y2="46" stroke="#7a5a3a" strokeWidth="2.5" />
            <line x1="31" y1="38" x2="31" y2="46" stroke="#7a5a3a" strokeWidth="2.5" />
            <ellipse cx="21" cy="47" rx="2.5" ry="1.5" fill="#5a3a1a" />
            <ellipse cx="31" cy="47" rx="2.5" ry="1.5" fill="#5a3a1a" />
            <circle cx="26" cy="22" r="8" fill="#8a6a4a" />
            <ellipse cx="20" cy="19" rx="4" ry="2.5" fill="#8a6a4a" transform="rotate(-20,20,19)" />
            <ellipse cx="32" cy="19" rx="4" ry="2.5" fill="#8a6a4a" transform="rotate(20,32,19)" />
            <path d="M22,14 L19,4 L16,8" stroke="#7a5a3a" strokeWidth="1.8" fill="none" />
            <path d="M24,14 L22,6 L20,9" stroke="#7a5a3a" strokeWidth="1.2" fill="none" />
            <path d="M30,14 L33,4 L36,8" stroke="#7a5a3a" strokeWidth="1.8" fill="none" />
            <path d="M28,14 L30,6 L32,9" stroke="#7a5a3a" strokeWidth="1.2" fill="none" />
            <circle cx="23" cy="21" r="1.5" fill="#2a1a0a" />
            <circle cx="29" cy="21" r="1.5" fill="#2a1a0a" />
            <circle cx="22.5" cy="20.5" r="0.5" fill="white" />
            <circle cx="28.5" cy="20.5" r="0.5" fill="white" />
            <ellipse cx="26" cy="25" rx="2" ry="1" fill="#5a3a1a" />
            <path d="M28,33 Q26,30 25,33" fill="#fff" opacity={0.15} />
          </svg>
        </div>

        {/* ── Flying birds (CSS animated) ── */}
        {BIRDS.map(([trigger], i) => (
          <div key={`bird${i}`} className="absolute trail-bird" style={{
            top: `${trigger * 1.1 + 2}%`, left: "-10%",
            animationDelay: `${i * 6 + 2}s`, animationDuration: `${12 + i * 2}s`,
          }}>
            <svg viewBox="0 0 24 12" width={18} height={9} aria-hidden="true">
              <path d="M0,6 Q6,0 12,6 Q18,0 24,6" stroke="#1a1a1a" strokeWidth="2" fill="none" opacity={0.6} />
            </svg>
          </div>
        ))}

        {/* ── Moon (night section) ── */}
        <div className="absolute" style={{ left: "65%", top: "79%" }}>
          <svg viewBox="0 0 40 40" width={32} height={32} aria-hidden="true">
            <circle cx="20" cy="20" r="20" fill="#E8D890" opacity={0.04} />
            <circle cx="20" cy="20" r="15" fill="#E8D890" opacity={0.5} />
            <circle cx="15" cy="16" r="3" fill="#D8C870" opacity={0.25} />
            <circle cx="22" cy="24" r="2" fill="#D8C870" opacity={0.2} />
            <circle cx="18" cy="22" r="1.5" fill="#D8C870" opacity={0.15} />
          </svg>
        </div>

        {/* ── Stars (night sky, bigger) ── */}
        {STARS.map(([l, t, sz, d], i) => (
          <div key={`s${i}`} className="absolute rounded-full trail-star" style={{
            left: `${l}%`, top: `${t}%`, width: sz, height: sz,
            backgroundColor: "#fff", animationDelay: `${d}s`,
          }} />
        ))}


        {/* ── Fireflies (bigger, more) ── */}
        {FLIES.map(([l, t, d, dur], i) => (
          <div key={`ff${i}`} className="absolute trail-firefly" style={{
            left: `${l}%`, top: `${t}%`, animationDelay: `${d}s`, animationDuration: `${dur}s`,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%", backgroundColor: "#ffe680",
              boxShadow: "0 0 10px 4px rgba(255,230,100,0.6), 0 0 20px 8px rgba(255,230,100,0.2)",
            }} />
          </div>
        ))}

        {/* ── Falling leaves (bigger) ── */}
        {LEAVES.map(([l, t, d, dur], i) => (
          <div key={`lf${i}`} className="absolute trail-leaf" style={{
            left: `${l}%`, top: `${t}%`, animationDelay: `${d}s`, animationDuration: `${dur}s`,
          }}>
            <svg viewBox="0 0 14 14" width={12} height={12} aria-hidden="true">
              <ellipse cx="7" cy="7" rx="6" ry="3" fill="#8B6914" opacity={0.7} transform="rotate(-30,7,7)" />
              <line x1="7" y1="4" x2="7" y2="10" stroke="#7a5a10" strokeWidth="0.5" />
              <line x1="5" y1="6" x2="7" y2="7" stroke="#7a5a10" strokeWidth="0.3" />
              <line x1="9" y1="6" x2="7" y2="7" stroke="#7a5a10" strokeWidth="0.3" />
            </svg>
          </div>
        ))}
      </div>

      {/* ═══ LAYER 3: Campsite overlay (z-15) ═══ */}
      <div className={`absolute top-0 right-0 bottom-0 ${GW} pointer-events-none z-[15]`}>
        <svg viewBox="0 0 300 10000" preserveAspectRatio="none" className="w-full h-full overflow-visible" aria-hidden="true">
          <g ref={tentGRef} style={{ opacity: 0 }} transform={`translate(${CAMP.x + 30},${CAMP.y})`}>
            <ellipse cx="0" cy="4" rx="22" ry="5" fill="#000" opacity={0.12} />
            <polygon points="-20,0 0,-32 20,0" fill={COL.tent} />
            <polygon points="-20,0 0,-32 0,0" fill={COL.tentShade} />
            <polygon points="-7,0 0,-18 7,0" fill={COL.tentInner} />
            <line x1="0" y1="-32" x2="0" y2="-38" stroke={COL.trail} strokeWidth="1.5" />
            <line x1="0" y1="-32" x2="-28" y2="6" stroke={COL.trail} strokeWidth="0.8" opacity={0.4} />
            <line x1="0" y1="-32" x2="28" y2="6" stroke={COL.trail} strokeWidth="0.8" opacity={0.4} />
          </g>
          <g ref={fireGRef} style={{ opacity: 0 }} transform={`translate(${CAMP.x - 8},${CAMP.y})`}>
            {[-7, -3.5, 0, 3.5, 7].map((dx, i) => (
              <ellipse key={i} cx={dx} cy="2" rx="3" ry="1.5" fill="#555" />
            ))}
            <line x1="-9" y1="0" x2="9" y2="0" stroke="#5C3A1E" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="-6" y1="-1.5" x2="6" y2="1.5" stroke="#4A2E16" strokeWidth="2.5" strokeLinecap="round" />
            <g className="trail-fire-flicker">
              <ellipse cx="0" cy="-9" rx="4.5" ry="9" fill="#FF6B35" opacity={0.9} />
              <ellipse cx="-2.5" cy="-7" rx="3" ry="7" fill="#FFA500" opacity={0.7} />
              <ellipse cx="2" cy="-8" rx="3" ry="8" fill="#FF4500" opacity={0.6} />
              <ellipse cx="0" cy="-12" rx="2" ry="5" fill="#FFD700" opacity={0.4} />
            </g>
            <circle cx="0" cy="-5" r="40" fill="#FFA500" opacity={0.03} />
            <circle cx="0" cy="-5" r="22" fill="#FF6B35" opacity={0.06} />
            <circle cx="0" cy="-5" r="10" fill="#FFD700" opacity={0.1} />
          </g>
          <g ref={gearGRef} style={{ opacity: 0 }} transform={`translate(${CAMP.x - 35},${CAMP.y - 5})`}>
            <rect x="-6" y="-12" width="12" height="16" rx="3" fill={COL.backpack} />
            <rect x="-5" y="-10" width="10" height="5" rx="1" fill={COL.backpackPocket} />
            <line x1="-3" y1="-12" x2="-3" y2="-17" stroke={COL.backpack} strokeWidth="1.5" />
            <line x1="3" y1="-12" x2="3" y2="-17" stroke={COL.backpack} strokeWidth="1.5" />
            <line x1="10" y1="10" x2="35" y2="7" stroke={COL.stick} strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      {/* ═══ LAYER 4: Character (z-20) ═══ */}
      <div
        ref={charRef}
        className="fixed top-1/2 -translate-x-1/2 -translate-y-1/2 z-[20] pointer-events-none transition-opacity duration-500"
        style={{ opacity: 0 }}
      >
        <svg
          ref={charSvgRef}
          viewBox="-30 -55 60 85"
          className="w-[30px] sm:w-[36px] md:w-[42px] lg:w-[50px]"
          aria-hidden="true"
          style={{ overflow: "visible" }}
        >
          <g ref={bodyRef}>
            <g ref={pickupRef} style={{ display: "none" }}>
              <ellipse cx="0" cy="22" rx="12" ry="3" fill="#000" opacity={0.12} />
              <line x1="-4" y1="2" x2="-7" y2="18" stroke={COL.pants} strokeWidth="5" strokeLinecap="round" />
              <line x1="4" y1="2" x2="7" y2="18" stroke={COL.pants} strokeWidth="5" strokeLinecap="round" />
              <ellipse cx="-7" cy="20" rx="4" ry="2.5" fill={COL.boots} />
              <ellipse cx="7" cy="20" rx="4" ry="2.5" fill={COL.boots} />
              <rect x="-6" y="-16" width="12" height="19" rx="4" fill={COL.shirt} transform="rotate(25,0,-7)" />
              <line x1="8" y1="-8" x2="14" y2="12" stroke={COL.skin} strokeWidth="3.5" strokeLinecap="round" />
              <line x1="-5" y1="-8" x2="-10" y2="14" stroke={COL.skin} strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="14" cy="12" r="2" fill={COL.skin} />
              <circle cx="-10" cy="14" r="2" fill={COL.skin} />
              <ellipse cx="6" cy="-20" rx="6" ry="7" fill={COL.skin} />
              <ellipse cx="6" cy="-25" rx="7" ry="3" fill={COL.hair} />
              <rect x="0" y="-27" width="12" height="4" rx="2" fill={COL.hair} />
              <circle cx="4" cy="-20" r="1" fill="#2a1a0a" />
              <circle cx="8" cy="-20" r="1" fill="#2a1a0a" />
              <g ref={bpFadeRef} style={{ opacity: 0 }}>
                <rect x="12" y="8" width="10" height="14" rx="2" fill={COL.backpack} />
                <rect x="13" y="10" width="8" height="4" rx="1" fill={COL.backpackPocket} />
              </g>
              <g ref={stickFadeRef} style={{ opacity: 0 }}>
                <line x1="14" y1="12" x2="16" y2="-5" stroke={COL.stick} strokeWidth="2" strokeLinecap="round" />
              </g>
            </g>
            <g ref={walkRef}>
              <ellipse cx="0" cy="22" rx="12" ry="3" fill="#000" opacity={0.12} />
              <g ref={lArmRef}>
                <line x1="-6" y1="-20" x2="-12" y2="-8" stroke={COL.skin} strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="-12" cy="-8" r="2" fill={COL.skin} />
              </g>
              <g ref={lLegRef}>
                <line x1="-3" y1="0" x2="-5" y2="18" stroke={COL.pants} strokeWidth="5" strokeLinecap="round" />
                <ellipse cx="-5" cy="20" rx="4" ry="2.5" fill={COL.boots} />
              </g>
              <rect x="-10" y="-23" width="6" height="16" rx="2" fill={COL.backpack} />
              <rect x="-9.5" y="-21" width="5" height="4.5" rx="1" fill={COL.backpackPocket} />
              <line x1="-7" y1="-23" x2="-5" y2="-24.5" stroke={COL.backpack} strokeWidth="1.5" />
              <line x1="-7" y1="-14" x2="-5" y2="-15.5" stroke={COL.backpack} strokeWidth="1.5" />
              <g ref={rLegRef}>
                <line x1="3" y1="0" x2="5" y2="18" stroke={COL.pants} strokeWidth="5" strokeLinecap="round" />
                <ellipse cx="5" cy="20" rx="4" ry="2.5" fill={COL.boots} />
              </g>
              <rect x="-6" y="-24" width="12" height="23" rx="4" fill={COL.shirt} />
              <path d="M -3,-24 L 0,-21 L 3,-24" stroke="#4a6a30" strokeWidth="0.8" fill="none" />
              <rect x="-6.5" y="-3" width="13" height="3" rx="1" fill={COL.hair} />
              <g ref={rArmRef}>
                <line x1="6" y1="-20" x2="12" y2="-8" stroke={COL.skin} strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="12" cy="-8" r="2" fill={COL.skin} />
                <line x1="12" y1="-8" x2="14" y2="22" stroke={COL.stick} strokeWidth="2" strokeLinecap="round" />
              </g>
              <rect x="-2" y="-28" width="4" height="5" fill={COL.skin} />
              <ellipse cx="0" cy="-34" rx="6.5" ry="7.5" fill={COL.skin} />
              <ellipse cx="0" cy="-38.5" rx="8.5" ry="3" fill={COL.hair} />
              <rect x="-6.5" y="-42" width="13" height="5" rx="2.5" fill={COL.hair} />
              <ellipse cx="6.5" cy="-34" rx="1.8" ry="2.5" fill={COL.skin} />
              <ellipse cx="6.5" cy="-34" rx="1" ry="1.5" fill="#C49460" />
              <circle cx="-2" cy="-35" r="1.2" fill="#2a1a0a" />
              <circle cx="3" cy="-35" r="1.2" fill="#2a1a0a" />
              <circle cx="-1.6" cy="-35.3" r="0.4" fill="white" />
              <circle cx="3.4" cy="-35.3" r="0.4" fill="white" />
              <line x1="-3.5" y1="-37.5" x2="-0.5" y2="-38" stroke={COL.hair} strokeWidth="0.8" strokeLinecap="round" />
              <line x1="1.5" y1="-38" x2="4.5" y2="-37.5" stroke={COL.hair} strokeWidth="0.8" strokeLinecap="round" />
              <path d="M 0.5,-33 L 1,-31.5 L -0.5,-31.5" fill={COL.skin} stroke="#B8956A" strokeWidth="0.3" />
              <path d="M -1.5,-29.5 Q 0.5,-28 2.5,-29.5" stroke="#8B6B50" strokeWidth="0.7" fill="none" />
            </g>
            <g ref={setupRef} style={{ display: "none" }}>
              <ellipse cx="0" cy="22" rx="12" ry="3" fill="#000" opacity={0.12} />
              <line x1="-4" y1="0" x2="-5" y2="18" stroke={COL.pants} strokeWidth="5" strokeLinecap="round" />
              <line x1="4" y1="0" x2="5" y2="18" stroke={COL.pants} strokeWidth="5" strokeLinecap="round" />
              <ellipse cx="-5" cy="20" rx="4" ry="2.5" fill={COL.boots} />
              <ellipse cx="5" cy="20" rx="4" ry="2.5" fill={COL.boots} />
              <rect x="-6" y="-24" width="12" height="23" rx="4" fill={COL.shirt} transform="rotate(10,0,-12)" />
              <line x1="8" y1="-20" x2="20" y2="-14" stroke={COL.skin} strokeWidth="3.5" strokeLinecap="round" />
              <line x1="-7" y1="-18" x2="-16" y2="-25" stroke={COL.skin} strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="20" cy="-14" r="2" fill={COL.skin} />
              <circle cx="-16" cy="-25" r="2" fill={COL.skin} />
              <rect x="-2" y="-28" width="4" height="5" fill={COL.skin} />
              <ellipse cx="1" cy="-34" rx="6.5" ry="7.5" fill={COL.skin} />
              <ellipse cx="1" cy="-39" rx="8" ry="3" fill={COL.hair} />
              <rect x="-6" y="-41" width="14" height="4" rx="2" fill={COL.hair} />
              <circle cx="-1" cy="-35" r="1.2" fill="#2a1a0a" />
              <circle cx="4" cy="-35" r="1.2" fill="#2a1a0a" />
            </g>
            <g ref={restRef} style={{ display: "none" }}>
              <ellipse cx="0" cy="22" rx="14" ry="3" fill="#000" opacity={0.12} />
              <line x1="-3" y1="5" x2="-12" y2="18" stroke={COL.pants} strokeWidth="5" strokeLinecap="round" />
              <line x1="3" y1="5" x2="12" y2="18" stroke={COL.pants} strokeWidth="5" strokeLinecap="round" />
              <ellipse cx="-12" cy="20" rx="4" ry="2.5" fill={COL.boots} />
              <ellipse cx="12" cy="20" rx="4" ry="2.5" fill={COL.boots} />
              <rect x="-6" y="-18" width="12" height="24" rx="4" fill={COL.shirt} />
              <line x1="6" y1="-10" x2="14" y2="0" stroke={COL.skin} strokeWidth="3.5" strokeLinecap="round" />
              <line x1="-6" y1="-10" x2="-14" y2="0" stroke={COL.skin} strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="14" cy="0" r="2.5" fill={COL.skin} />
              <circle cx="-14" cy="0" r="2.5" fill={COL.skin} />
              <rect x="-2" y="-24" width="4" height="7" fill={COL.skin} />
              <ellipse cx="0" cy="-30" rx="6.5" ry="7.5" fill={COL.skin} />
              <ellipse cx="0" cy="-35" rx="8" ry="3" fill={COL.hair} />
              <rect x="-7" y="-37" width="14" height="4" rx="2" fill={COL.hair} />
              <circle cx="-2" cy="-31" r="1.2" fill="#2a1a0a" />
              <circle cx="3" cy="-31" r="1.2" fill="#2a1a0a" />
              <path d="M -1.5,-26 Q 0.5,-24.5 2.5,-26" stroke="#8B6B50" strokeWidth="0.7" fill="none" />
            </g>
          </g>
        </svg>
      </div>

      {/* ═══ CSS Animations ═══ */}
      <style>{`
        .trail-fire-flicker {
          transform-box: fill-box;
          transform-origin: center bottom;
          animation: trailFlicker 0.4s ease-in-out infinite alternate;
        }
        @keyframes trailFlicker {
          0% { transform: scaleY(1) scaleX(1); }
          50% { transform: scaleY(0.82) scaleX(1.06); }
          100% { transform: scaleY(1.12) scaleX(0.94); }
        }
        .trail-star {
          animation: twinkle 2s ease-in-out infinite alternate;
        }
        @keyframes twinkle {
          0% { opacity: 0.1; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }
        .trail-firefly {
          animation: fireflyFloat 4s ease-in-out infinite;
        }
        @keyframes fireflyFloat {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          30% { transform: translate(8px, -25px); opacity: 0.9; }
          50% { transform: translate(-5px, -35px); opacity: 0.6; }
          70% { transform: translate(12px, -20px); opacity: 0.8; }
          90% { opacity: 0.2; }
        }
        .trail-leaf {
          animation: leafDrift 9s linear infinite;
        }
        @keyframes leafDrift {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          8% { opacity: 0.7; }
          80% { opacity: 0.3; }
          100% { transform: translate(30px, 150px) rotate(720deg); opacity: 0; }
        }
        .trail-flower {
          animation: flowerSway 4s ease-in-out infinite alternate;
        }
        @keyframes flowerSway {
          0% { transform: rotate(-3deg); }
          100% { transform: rotate(3deg); }
        }
        .trail-bird {
          animation: birdFly 14s linear infinite;
        }
        @keyframes birdFly {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          5% { opacity: 0.6; }
          50% { transform: translateX(calc(100% + 50px)) translateY(-15px); opacity: 0.6; }
          51% { opacity: 0; }
          100% { opacity: 0; }
        }
        .trail-stream {
          animation: streamFlow 3s linear infinite;
        }
        .trail-stream-2 {
          animation: streamFlow 4s linear infinite reverse;
        }
        @keyframes streamFlow {
          0% { stroke-dasharray: 8 4; stroke-dashoffset: 0; }
          100% { stroke-dasharray: 8 4; stroke-dashoffset: -24; }
        }
      `}</style>
    </>
  );
}
