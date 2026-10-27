const details = [
  { label: 'When', value: '2027.10.27, 09:40:13' },
  { label: 'Where', value: 'Bogota DC, Colombia' },
  { label: 'For', value: 'Traders from Colombia' },
]

function SignalMark() {
  return (
    <span className="signal-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  )
}

export default function Page() {
  return (
    <main className="event-page">
      <div className="page-grid" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mexc Alerts home">
          <SignalMark />
          <span>Mexc Alerts</span>
        </a>
        <span className="header-index">01 / EVENT</span>
      </header>

      <section className="hero" id="top" aria-labelledby="event-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Live market notice</p>
          <h1 id="event-title">Mexc<br /><em>Alerts</em></h1>
          <p className="intro">Notify traders how the coin graph is.</p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-label">COIN / GRAPH</div>
          <svg viewBox="0 0 460 280" role="presentation">
            <path className="chart-grid" d="M0 48H460M0 108H460M0 168H460M0 228H460M72 0V280M164 0V280M256 0V280M348 0V280" />
            <path className="chart-line" d="M0 224 C28 218, 35 201, 59 207 S83 177, 104 190 S124 157, 148 168 S171 131, 192 151 S211 117, 231 132 S248 90, 274 109 S303 58, 324 88 S349 63, 372 72 S394 34, 416 54 S442 20, 460 25" />
            <circle className="chart-point" cx="460" cy="25" r="5" />
          </svg>
        </div>
      </section>

      <section className="details" aria-label="Event details">
        {details.map((detail) => (
          <div className="detail" key={detail.label}>
            <span className="detail-label">{detail.label}</span>
            <span className="detail-value">{detail.value}</span>
          </div>
        ))}
      </section>

      <footer className="site-footer">
        <span>Mexc Alerts</span>
        <span>For traders from Colombia</span>
      </footer>
    </main>
  )
}

