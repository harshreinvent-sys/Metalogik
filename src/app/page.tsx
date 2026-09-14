import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "Laser cutting",
    copy: "Fibre laser cutting for mild steel, stainless and aluminium sheet with clean, burr-free edges.",
  },
  {
    number: "02",
    title: "CNC bending",
    copy: "Press-brake forming to tight tolerances, from single prototypes to repeat production runs.",
  },
  {
    number: "03",
    title: "Metal fabrication",
    copy: "Welding, assembly and finishing of frames, enclosures, brackets and structural parts.",
  },
  {
    number: "04",
    title: "Design & drafting",
    copy: "CAD design, nesting and DFM review so every part is ready for the machine before it hits the floor.",
  },
];

export default function Home() {
  return (
    <main aria-label="Home">
      <section className="hero">
        <div className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">CNC cutting · Fabrication · Design</p>
            <h1>
              Precision metalwork, <span className="metal-text">cut to spec.</span>
            </h1>
            <p>
              Metalogik takes your drawings from CAD to finished part. Laser
              cutting, CNC bending and full fabrication under one roof, with
              the accuracy your project depends on.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-metal" href="/contact">
                Request a quote <span aria-hidden="true">↗</span>
              </Link>
              <Link className="btn btn-outline" href="/services">
                View services
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-plate">
              <dl>
                <div>
                  <dt>Tolerance</dt>
                  <dd>±0.1 mm</dd>
                </div>
                <div>
                  <dt>Sheet up to</dt>
                  <dd>25 mm</dd>
                </div>
                <div>
                  <dt>Turnaround</dt>
                  <dd>From 3 days</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities" aria-label="Capabilities">
        <div className="section-head">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>One workshop, every step.</h2>
          </div>
          <p>
            From flat sheet to finished assembly, each stage is handled
            in-house so nothing gets lost between suppliers.
          </p>
        </div>
        <div className="capabilities-grid">
          {capabilities.map((item) => (
            <article className="capability" key={item.number}>
              <span className="capability-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band" aria-label="Start a project">
        <div className="cta-inner">
          <div>
            <h2>Have a drawing ready? Send it over.</h2>
            <p>DXF, DWG, STEP or a sketch on paper. We will quote it either way.</p>
          </div>
          <Link className="btn btn-outline" href="/contact">
            Start a project <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
