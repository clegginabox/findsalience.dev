// Salience — logo/icon system
// Five directions. Each exposes: <MarkX size color bg/>, <WordmarkX/>, <AppIconX/>

const A = {
  amber: "#f5a623",
  amberLight: "#ffc266",
  amberDeep: "#c77a0a",
  ink: "#0e0a1e",
  inkSoft: "#1a1330",
  bone: "#f4f2ff",
  dim: "#3a3358",
  dimmer: "#2a2346",
};

/* =========================================================
   DIRECTION 1 — "Lit Row"
   A row of quiet dots, one lit. Pure salience metaphor.
   ========================================================= */

function Mark1({ size = 64, variant = "onDark" }) {
  // 5 dots in a row; 3rd is lit
  const dim = variant === "onDark" ? "#3a3358" : "#c5c0dc";
  const lit = A.amber;
  const glow = "url(#g1)";
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>
        <radialGradient id="g1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={A.amber} stopOpacity="0.8"/>
          <stop offset="100%" stopColor={A.amber} stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* halo behind lit dot */}
      <circle cx="32" cy="32" r="22" fill={glow}/>
      {/* dots */}
      <circle cx="8"  cy="32" r="3" fill={dim}/>
      <circle cx="20" cy="32" r="3" fill={dim}/>
      <circle cx="32" cy="32" r="6" fill={lit}/>
      <circle cx="44" cy="32" r="3" fill={dim}/>
      <circle cx="56" cy="32" r="3" fill={dim}/>
    </svg>
  );
}

/* =========================================================
   DIRECTION 2 — "Notched S"
   Heavy S glyph with an amber notch / cut.
   ========================================================= */

function Mark2({ size = 64, variant = "onDark" }) {
  const ink = variant === "onDark" ? A.bone : A.ink;
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={A.amberLight}/>
          <stop offset="1" stopColor={A.amberDeep}/>
        </linearGradient>
      </defs>
      {/* S glyph (geometric, monospace-inspired) */}
      <path d="M50 16
               H22
               a6 6 0 0 0 -6 6 v4
               a6 6 0 0 0 6 6 h20
               a6 6 0 0 1 6 6 v4
               a6 6 0 0 1 -6 6
               H14"
        fill="none" stroke={ink} strokeWidth="7" strokeLinecap="square" strokeLinejoin="miter"/>
      {/* lit notch — the "salience" */}
      <rect x="42" y="10" width="10" height="10" fill="url(#g2)"/>
      <rect x="42" y="10" width="10" height="10" fill={A.amber} opacity="0.35">
      </rect>
    </svg>
  );
}

/* =========================================================
   DIRECTION 3 — "Reticle"
   FPS-inspired crosshair with a lit lock-on center.
   ========================================================= */

function Mark3({ size = 64, variant = "onDark" }) {
  const ink = variant === "onDark" ? A.bone : A.ink;
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>
        <radialGradient id="g3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={A.amber} stopOpacity="0.6"/>
          <stop offset="100%" stopColor={A.amber} stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* outer ring — four arcs (broken) */}
      <g fill="none" stroke={ink} strokeWidth="3" strokeLinecap="butt">
        <path d="M32 8 A24 24 0 0 1 56 32"/>
        <path d="M56 32 A24 24 0 0 1 32 56"/>
        <path d="M32 56 A24 24 0 0 1 8 32"/>
        <path d="M8 32 A24 24 0 0 1 32 8"/>
      </g>
      {/* tick marks */}
      <g stroke={ink} strokeWidth="3" strokeLinecap="round">
        <line x1="32" y1="2" x2="32" y2="10"/>
        <line x1="62" y1="32" x2="54" y2="32"/>
        <line x1="32" y1="62" x2="32" y2="54"/>
        <line x1="2"  y1="32" x2="10" y2="32"/>
      </g>
      {/* lit center */}
      <circle cx="32" cy="32" r="16" fill="url(#g3)"/>
      <circle cx="32" cy="32" r="5"  fill={A.amber}/>
    </svg>
  );
}

/* =========================================================
   DIRECTION 4 — "Waveform"
   Flat telemetry with one spike. Signal in noise.
   ========================================================= */

function Mark4({ size = 64, variant = "onDark" }) {
  const dim = variant === "onDark" ? "#5a5276" : "#9f9ab8";
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>
        <linearGradient id="g4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={A.amberLight}/>
          <stop offset="1" stopColor={A.amber}/>
        </linearGradient>
      </defs>
      {/* flat baseline segments on either side of the spike */}
      <path
        d="M4 40 L18 40 L22 40 L26 18 L30 40 L34 40 L38 40 L42 36 L46 40 L60 40"
        fill="none"
        stroke={dim}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* the lit spike */}
      <path
        d="M22 40 L26 18 L30 40"
        fill="none"
        stroke="url(#g4)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* spike cap dot */}
      <circle cx="26" cy="18" r="3.5" fill={A.amber}/>
      <circle cx="26" cy="18" r="8" fill={A.amber} opacity="0.18"/>
    </svg>
  );
}

/* =========================================================
   DIRECTION 5 — "Aperture"
   A bracket/aperture closing in on a lit point.
   ========================================================= */

function Mark5({ size = 64, variant = "onDark" }) {
  const ink = variant === "onDark" ? A.bone : A.ink;
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>
        <radialGradient id="g5" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={A.amber} stopOpacity="0.55"/>
          <stop offset="100%" stopColor={A.amber} stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* four corner brackets */}
      <g fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 20 V10 H18"/>
        <path d="M46 10 H56 V20"/>
        <path d="M56 44 V54 H46"/>
        <path d="M18 54 H8 V44"/>
      </g>
      {/* lit center */}
      <circle cx="32" cy="32" r="18" fill="url(#g5)"/>
      <circle cx="32" cy="32" r="7"  fill={A.amber}/>
    </svg>
  );
}

/* =========================================================
   Wordmark — logo lockup
   ========================================================= */

function Wordmark({ Mark, dark = true, label = "Salience" }) {
  return (
    <div className={"wordmark-stage " + (dark ? "dark" : "")}>
      <Mark size={44} variant={dark ? "onDark" : "onLight"}/>
      <span className="wm-label" style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        letterSpacing: "-0.025em",
      }}>{label}</span>
    </div>
  );
}

/* =========================================================
   App icon — macOS-style rounded square
   ========================================================= */

function AppIcon({ Mark, size = 120, bg = "dark" }) {
  const r = size * 0.225;
  const backgrounds = {
    dark: `linear-gradient(145deg, #1f1838 0%, #0c0820 100%)`,
    darker: `linear-gradient(145deg, #15102a 0%, #050310 100%)`,
    amber: `linear-gradient(145deg, ${A.amberLight} 0%, ${A.amberDeep} 100%)`,
    bone: `linear-gradient(145deg, #ffffff 0%, #e6e2f0 100%)`,
    purple: `linear-gradient(145deg, #4a2a7a 0%, #1a0e3a 100%)`,
  };
  return (
    <div style={{
      width: size, height: size,
      borderRadius: r,
      background: backgrounds[bg] || backgrounds.dark,
      display: "grid", placeItems: "center",
      boxShadow: `
        0 ${size*0.01}px ${size*0.02}px rgba(0,0,0,0.2),
        0 ${size*0.04}px ${size*0.08}px rgba(0,0,0,0.3),
        inset 0 1px 0 rgba(255,255,255,0.08)`,
      overflow: "hidden",
      position: "relative",
    }}>
      <Mark size={size * 0.62} variant={bg === "bone" || bg === "amber" ? "onLight" : "onDark"}/>
      {/* subtle top gloss */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(255,255,255,0.06), transparent 40%)",
        pointerEvents: "none",
      }}/>
    </div>
  );
}

/* =========================================================
   Dock mockup — shows icon next to other apps
   ========================================================= */

function Dock({ Mark, bg = "dark", wp = "wp-purple" }) {
  const fakeIcons = [
    { bg: "linear-gradient(145deg, #2c2c2e, #1c1c1e)", content: "F" },
    { bg: "linear-gradient(145deg, #5a6dff, #2e3fcc)", content: "M" },
    { bg: "linear-gradient(145deg, #ff9f0a, #ff6b00)", content: "N" },
    { bg: "linear-gradient(145deg, #34c759, #248a3d)", content: "C" },
  ];
  return (
    <div className={wp} style={{
      width: "100%", height: "100%",
      display: "flex", alignItems: "flex-end", justifyContent: "center",
      padding: "0 0 24px", position: "relative",
    }}>
      <div style={{
        display: "flex", gap: 8,
        padding: 10,
        background: "rgba(28,24,44,0.55)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRadius: 22,
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      }}>
        {fakeIcons.slice(0, 2).map((ic, i) => (
          <div key={i} style={{
            width: 52, height: 52, borderRadius: 12,
            background: ic.bg,
            display: "grid", placeItems: "center",
            color: "rgba(255,255,255,0.75)",
            fontFamily: "-apple-system, sans-serif",
            fontWeight: 600, fontSize: 22,
          }}>{ic.content}</div>
        ))}
        <AppIcon Mark={Mark} size={52} bg={bg}/>
        {fakeIcons.slice(2).map((ic, i) => (
          <div key={i} style={{
            width: 52, height: 52, borderRadius: 12,
            background: ic.bg,
            display: "grid", placeItems: "center",
            color: "rgba(255,255,255,0.75)",
            fontFamily: "-apple-system, sans-serif",
            fontWeight: 600, fontSize: 22,
          }}>{ic.content}</div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   Small scale test (favicon / menu bar)
   ========================================================= */

function ScaleRow({ Mark, dark = true }) {
  const bg = dark ? "#0e0a1e" : "#f4f2ff";
  return (
    <div style={{
      width: "100%", height: "100%",
      background: bg,
      display: "flex", alignItems: "center",
      justifyContent: "space-around",
      padding: "0 20px",
    }}>
      {[16, 22, 32, 48, 72].map(s => (
        <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <Mark size={s} variant={dark ? "onDark" : "onLight"}/>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9,
            color: dark ? "#605c82" : "#8f8bb2",
          }}>{s}</div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  Mark1, Mark2, Mark3, Mark4, Mark5,
  Wordmark, AppIcon, Dock, ScaleRow,
});
