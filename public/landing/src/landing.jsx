// Salience — landing page
// Uses the chosen Aperture Row mark (MashA) for the wordmark.

const TAGLINE = "The context between your tools and your agent.";
const SUB = "From your local branch and docker stack to your tickets, PRs, CI, deploys and infrastructure. Correlated into one graph. Glanceable in the app. Queryable by your agent over MCP.";

// ===== wordmark =====
function Wordmark({ size = 40, onDark = true }) {
  const tint = onDark ? "#f4f2ff" : "#0e0a1e";
  return (
    <div className="wm" style={{ gap: size * 0.3 }}>
      <MashA size={size} variant={onDark ? "onDark" : "onLight"} />
      <span className="wm-text" style={{ fontSize: size * 0.58, color: tint }}>
        Salience
      </span>
    </div>
  );
}

// ===== framed screenshot =====
function ScreenFrame({ src, caption, alt = "", bare = false }) {
  return (
    <div className="sf">
      {!bare && (
        <div className="sf-chrome">
          <span className="sf-tl"/><span className="sf-tl"/><span className="sf-tl"/>
          {caption && <span className="sf-caption mono">{caption}</span>}
        </div>
      )}
      <div className="sf-body">
        <img src={src} alt={alt} className="sf-img"/>
      </div>
      {bare && caption && <div className="sf-foot mono">{caption}</div>}
    </div>
  );
}

// ===== page =====
function Landing() {
  return (
    <div className="lnd">
      {/* nav */}
      <nav className="ln-nav">
        <Wordmark size={26}/>
      </nav>

      {/* hero */}
      <header className="ln-hero">
        <MashA size={90} variant="onDark"/>
        <h1 className="ln-title">{TAGLINE}</h1>
        <p className="ln-sub">{SUB}</p>
        <div className="ln-ctas">
          <a className="ln-cta ghost" href="https://discord.gg/qXx6NSpg">
            <span className="ln-cta-i discord"/>
            Join Discord
          </a>
        </div>
      </header>

      {/* agent carousel */}
      <section className="ln-section" id="features">
        <div className="ln-sec-head">
          <div className="ln-eyebrow mono">YOUR AGENT · WITH CONTEXT</div>
          <h2>Query the graph with natural language</h2>
          <p>"What's my stand up?"</p>
          <p>"What's deployed in production?"</p>
          <p>"Is the sprint at risk?"</p>
          <p>"Are my tickets in sync with my work?"</p>
          <p>"Do I need to review anything?"</p>
        </div>

        <ScreenFrame src="summary.png" caption="AGENT · WITH CONTEXT" alt="Salience agent context example"/>
      </section>

      <section className="ln-section">
        <div className="ln-sec-head">
          <div className="ln-eyebrow mono">INSIDE THE APP</div>
          <h2>Everything you'd normally check across five tabs - all in a single place.</h2>
        </div>

        <div className="sf-grid">
          <ScreenFrame src="graph.png" caption="Timeline" alt="Salience timeline view" bare/>
          <ScreenFrame src="build.png" caption="Build" alt="Salience build view" bare/>
          <ScreenFrame src="review.png" caption="Review" alt="Salience review view" bare/>
          <ScreenFrame src="settings.png" caption="Settings" alt="Salience settings view" bare/>
        </div>
      </section>

      {/* alpha banner */}
      <section className="ln-alpha">
        <span className="ln-alpha-pill mono">EARLY ALPHA</span>
        <p className="ln-alpha-text">Salience is in early alpha. <a href="https://discord.gg/qXx6NSpg" className="ln-alpha-link">Join the Discord</a> to follow along, share feedback and get early access.</p>
      </section>

      {/* footer */}
      <footer className="ln-foot">
        <div className="lf-top">
          <Wordmark size={22}/>
          <div className="lf-links">
            <a href="https://discord.gg/qXx6NSpg" className="lf-link">
              <span className="lf-i discord"/>
              <span>Discord</span>
              <span className="lf-meta mono">chat · help · roadmap</span>
            </a>
            <a href="https://github.com/clegginabox/findsalience.dev/" className="lf-link">
              <span className="lf-i github"/>
              <span>GitHub</span>
              <span className="lf-meta mono">issues · feature requests</span>
            </a>
          </div>
        </div>
        <div className="lf-bot mono">
          <span>Salience</span>
          <span className="lf-dot">·</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}

const mount = document.createElement("div");
document.body.appendChild(mount);
ReactDOM.createRoot(mount).render(<Landing/>);
