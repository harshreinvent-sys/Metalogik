import Link from "next/link";

const laserPoints = [
  "Heavy-thickness metal cutting",
  "High-speed production",
  "Precision & repeatability",
  "Clean, accurate cuts",
  "Prototype to bulk production",
];

const reasons = [
  {
    title: "12 kW power",
    copy: "High-power laser technology for demanding cutting applications.",
  },
  {
    title: "High-speed production",
    copy: "Faster processing helps reduce production time and improve productivity.",
  },
  {
    title: "Heavy-thickness capability",
    copy: "Designed to handle challenging and thicker metal applications.",
  },
  {
    title: "Precision engineering",
    copy: "Accurate and consistent results across every job.",
  },
  {
    title: "Complete solution",
    copy: "Laser cutting, bending and fabrication under one roof.",
  },
  {
    title: "Quality you can rely on",
    copy: "Focused on accuracy, finish and consistent production quality.",
  },
];

export default function Home() {
  return (
    <main aria-label="Home">
      <section className="hero">
        <div className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Metalogik</p>
            <h1>
              Power. Precision. <span className="metal-text">Speed.</span>
            </h1>
            <p className="hero-subline">
              12 kW Fiber Laser Cutting <span aria-hidden="true">|</span> CNC Bending{" "}
              <span aria-hidden="true">|</span> Metal Fabrication
            </p>
            <p>
              Metalogik is a modern metal processing and fabrication company
              offering high-power 12 kW fiber laser cutting, CNC bending and
              complete metal fabrication solutions.
            </p>
            <p>
              From precision components to heavy-duty metal applications, we
              deliver reliable, accurate and production-ready solutions
              tailored to your requirements.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-metal" href="/contact">
                Request a quote <span aria-hidden="true">↗</span>
              </Link>
              <Link className="btn btn-outline" href="/services">
                Our services
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-plate">
              <dl>
                <div>
                  <dt>Laser power</dt>
                  <dd>12 kW</dd>
                </div>
                <div>
                  <dt>Thickness</dt>
                  <dd>Heavy</dd>
                </div>
                <div>
                  <dt>Speed</dt>
                  <dd>High</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="laser-feature" aria-label="12 kW fiber laser cutting">
        <div className="laser-inner">
          <div className="laser-copy">
            <p className="eyebrow">12 kW fiber laser</p>
            <h2>Heavy thickness. High speed. Precision results.</h2>
            <p>
              Our advanced 12 kW fiber laser cutting technology delivers the
              power and speed required for demanding metal cutting
              applications.
            </p>
          </div>
          <ul className="laser-points">
            {laserPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="why" aria-label="Why Metalogik">
        <div className="section-head">
          <div>
            <p className="eyebrow">Why Metalogik?</p>
            <h2>Built for demanding metal work.</h2>
          </div>
        </div>
        <div className="why-grid">
          {reasons.map((reason) => (
            <article className="why-card" key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band" aria-label="Start a project">
        <div className="cta-inner">
          <div>
            <h2>Have a drawing ready? Send it over.</h2>
            <p>From CAD file or concept to finished component, built to your specifications.</p>
          </div>
          <Link className="btn btn-outline" href="/contact">
            Request a quote <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
