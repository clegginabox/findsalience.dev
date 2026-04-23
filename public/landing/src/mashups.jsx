// Salience — mashups of Lit Row (01) + Aperture (05)
// Eight variations exploring the hybrid space

const A = {
  amber: "#f5a623",
  amberLight: "#ffc266",
  amberDeep: "#c77a0a",
  ink: "#0e0a1e",
  bone: "#f4f2ff",
  dim: "#3a3358",
  dimLight: "#c5c0dc",
};

const dimOf = (v) => v === "onDark" ? A.dim : A.dimLight;
const inkOf = (v) => v === "onDark" ? A.bone : A.ink;

function halo(id, opacity = 0.55) {
  return (
    <radialGradient id={id} cx="50%" cy="50%" r="50%">
      <stop offset="0%"  stopColor={A.amber} stopOpacity={opacity}/>
      <stop offset="100%" stopColor={A.amber} stopOpacity="0"/>
    </radialGradient>
  );
}

/* =========================================================
   M1 — "Aperture Row"
   Lit Row centred inside the aperture brackets.
   Row sits horizontally between the corner brackets.
   ========================================================= */

function MashA({ size = 64, variant = "onDark" }) {
  const ink = inkOf(variant);
  const dim = dimOf(variant);
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>{halo("mA", 0.5)}</defs>
      {/* brackets */}
      <g fill="none" stroke={ink} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 20 V11 H18"/>
        <path d="M46 11 H55 V20"/>
        <path d="M55 44 V53 H46"/>
        <path d="M18 53 H9 V44"/>
      </g>
      {/* halo */}
      <circle cx="32" cy="32" r="18" fill="url(#mA)"/>
      {/* row of dots */}
      <circle cx="16" cy="32" r="2.4" fill={dim}/>
      <circle cx="24" cy="32" r="2.4" fill={dim}/>
      <circle cx="32" cy="32" r="5"   fill={A.amber}/>
      <circle cx="40" cy="32" r="2.4" fill={dim}/>
      <circle cx="48" cy="32" r="2.4" fill={dim}/>
    </svg>
  );
}

/* =========================================================
   M2 — "Aperture Lock"
   Square brackets hugging tight to a single lit dot (no row).
   The most icon-friendly.
   ========================================================= */

// Original (reference)
function MashB({ size = 64, variant = "onDark" }) {
  const ink = inkOf(variant);
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>{halo("mB", 0.6)}</defs>
      <g fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 24 V16 H24"/>
        <path d="M40 16 H48 V24"/>
        <path d="M48 40 V48 H40"/>
        <path d="M24 48 H16 V40"/>
      </g>
      <circle cx="32" cy="32" r="18" fill="url(#mB)"/>
      <circle cx="32" cy="32" r="8"  fill={A.amber}/>
    </svg>
  );
}

// B1 — brackets pushed out, dot grown
function MashB1({ size = 64, variant = "onDark" }) {
  const ink = inkOf(variant);
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>{halo("mB1", 0.7)}</defs>
      <g fill="none" stroke={ink} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 20 V10 H20"/>
        <path d="M44 10 H54 V20"/>
        <path d="M54 44 V54 H44"/>
        <path d="M20 54 H10 V44"/>
      </g>
      <circle cx="32" cy="32" r="24" fill="url(#mB1)"/>
      <circle cx="32" cy="32" r="13" fill={A.amber}/>
    </svg>
  );
}

// B2 — brackets to the very edge, bigger dot, chunkier stroke
function MashB2({ size = 64, variant = "onDark" }) {
  const ink = inkOf(variant);
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>{halo("mB2", 0.75)}</defs>
      <g fill="none" stroke={ink} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18 V6 H18"/>
        <path d="M46 6 H58 V18"/>
        <path d="M58 46 V58 H46"/>
        <path d="M18 58 H6 V46"/>
      </g>
      <circle cx="32" cy="32" r="26" fill="url(#mB2)"/>
      <circle cx="32" cy="32" r="16" fill={A.amber}/>
    </svg>
  );
}

// B3 — edge brackets, biggest sphere, sphere nearly touches brackets
function MashB3({ size = 64, variant = "onDark" }) {
  const ink = inkOf(variant);
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>
        <radialGradient id="mB3halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor={A.amber} stopOpacity="0.8"/>
          <stop offset="100%" stopColor={A.amber} stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="mB3sphere" cx="35%" cy="35%" r="70%">
          <stop offset="0%"  stopColor={A.amberLight}/>
          <stop offset="55%" stopColor={A.amber}/>
          <stop offset="100%" stopColor={A.amberDeep}/>
        </radialGradient>
      </defs>
      <g fill="none" stroke={ink} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17 V5 H17"/>
        <path d="M47 5 H59 V17"/>
        <path d="M59 47 V59 H47"/>
        <path d="M17 59 H5 V47"/>
      </g>
      <circle cx="32" cy="32" r="28" fill="url(#mB3halo)"/>
      <circle cx="32" cy="32" r="19" fill="url(#mB3sphere)"/>
    </svg>
  );
}

/* =========================================================
   M3 — "Vertical Row"
   Rotate the row 90° to make it more icon-square.
   Brackets frame the stack.
   ========================================================= */

function MashC({ size = 64, variant = "onDark" }) {
  const ink = inkOf(variant);
  const dim = dimOf(variant);
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>{halo("mC", 0.5)}</defs>
      <g fill="none" stroke={ink} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 12 H11 V19"/>
        <path d="M46 12 H53 V19"/>
        <path d="M53 45 V52 H46"/>
        <path d="M11 45 V52 H18"/>
      </g>
      <circle cx="32" cy="32" r="18" fill="url(#mC)"/>
      <circle cx="32" cy="14" r="2.4" fill={dim}/>
      <circle cx="32" cy="23" r="2.4" fill={dim}/>
      <circle cx="32" cy="32" r="5"   fill={A.amber}/>
      <circle cx="32" cy="41" r="2.4" fill={dim}/>
      <circle cx="32" cy="50" r="2.4" fill={dim}/>
    </svg>
  );
}

/* =========================================================
   M4 — "Four-Point"
   Lit dot at center with 4 quiet dots at N/S/E/W (cross formation).
   Reads as both a row and reticle.
   ========================================================= */

function MashD({ size = 64, variant = "onDark" }) {
  const dim = dimOf(variant);
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>{halo("mD", 0.55)}</defs>
      <circle cx="32" cy="32" r="20" fill="url(#mD)"/>
      {/* quiet compass points */}
      <circle cx="32" cy="10" r="2.6" fill={dim}/>
      <circle cx="54" cy="32" r="2.6" fill={dim}/>
      <circle cx="32" cy="54" r="2.6" fill={dim}/>
      <circle cx="10" cy="32" r="2.6" fill={dim}/>
      {/* lit centre */}
      <circle cx="32" cy="32" r="7" fill={A.amber}/>
    </svg>
  );
}

/* =========================================================
   M5 — "Bracketed Dot"
   Just 2 brackets (L + R) and a single lit dot.
   Extremely minimal — like an attention marker.
   ========================================================= */

function MashE({ size = 64, variant = "onDark" }) {
  const ink = inkOf(variant);
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>{halo("mE", 0.55)}</defs>
      <g fill="none" stroke={ink} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
        {/* left bracket */}
        <path d="M17 18 L11 32 L17 46"/>
        {/* right bracket */}
        <path d="M47 18 L53 32 L47 46"/>
      </g>
      <circle cx="32" cy="32" r="15" fill="url(#mE)"/>
      <circle cx="32" cy="32" r="7"  fill={A.amber}/>
    </svg>
  );
}

/* =========================================================
   M6 — "Progress Row"
   Lit Row where the left dots are solid (past) and right are
   hollow (future). Lit dot is the "now".  Bracketed top+bottom.
   ========================================================= */

function MashF({ size = 64, variant = "onDark" }) {
  const ink = inkOf(variant);
  const dim = dimOf(variant);
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>{halo("mF", 0.5)}</defs>
      {/* top + bottom brackets only */}
      <g fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 16 H52"/>
        <path d="M12 48 H52"/>
      </g>
      <circle cx="32" cy="32" r="16" fill="url(#mF)"/>
      {/* solid past */}
      <circle cx="14" cy="32" r="2.6" fill={dim}/>
      <circle cx="23" cy="32" r="2.6" fill={dim}/>
      {/* lit now */}
      <circle cx="32" cy="32" r="5"   fill={A.amber}/>
      {/* hollow future */}
      <circle cx="41" cy="32" r="2.4" fill="none" stroke={dim} strokeWidth="1.4"/>
      <circle cx="50" cy="32" r="2.4" fill="none" stroke={dim} strokeWidth="1.4"/>
    </svg>
  );
}

/* =========================================================
   M7 — "Asymmetric Row"
   Lit dot on the LEFT (like the head of a row), trailing dim
   dots falling away. Framed by a single corner bracket.
   Reads as motion/direction.
   ========================================================= */

function MashG({ size = 64, variant = "onDark" }) {
  const ink = inkOf(variant);
  const dim = dimOf(variant);
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>{halo("mG", 0.55)}</defs>
      {/* single top-left + bottom-right bracket for diagonal tension */}
      <g fill="none" stroke={ink} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 20 V10 H20"/>
        <path d="M54 44 V54 H44"/>
      </g>
      <circle cx="16" cy="32" r="14" fill="url(#mG)"/>
      <circle cx="16" cy="32" r="6"  fill={A.amber}/>
      <circle cx="28" cy="32" r="2.6" fill={dim}/>
      <circle cx="36" cy="32" r="2.4" fill={dim} opacity="0.8"/>
      <circle cx="44" cy="32" r="2.2" fill={dim} opacity="0.6"/>
      <circle cx="52" cy="32" r="2"   fill={dim} opacity="0.4"/>
    </svg>
  );
}

/* =========================================================
   M8 — "Solid Bar"
   Minimal monogram: a thick amber horizontal bar with brackets.
   More wordmark-friendly. Pure geometry.
   ========================================================= */

function MashH({ size = 64, variant = "onDark" }) {
  const ink = inkOf(variant);
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>
        <linearGradient id="mH-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={A.amberDeep}/>
          <stop offset="1" stopColor={A.amberLight}/>
        </linearGradient>
        {halo("mH", 0.45)}
      </defs>
      <g fill="none" stroke={ink} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 20 V10 H20"/>
        <path d="M44 10 H54 V20"/>
        <path d="M54 44 V54 H44"/>
        <path d="M20 54 H10 V44"/>
      </g>
      <circle cx="32" cy="32" r="18" fill="url(#mH)"/>
      <rect x="18" y="29" width="28" height="6" rx="3" fill="url(#mH-grad)"/>
    </svg>
  );
}

/* =========================================================
   Wordmark + AppIcon + Dock + ScaleRow (shared from logos.jsx)
   We re-use them since they're on window.*
   ========================================================= */

Object.assign(window, {
  MashA, MashB, MashB1, MashB2, MashB3, MashC, MashD, MashE, MashF, MashG, MashH,
});
