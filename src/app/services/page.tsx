const services = [
  {
    title: "Metal laser cutting",
    number: "01",
    copy: "Fibre laser cutting of mild steel, stainless steel and aluminium sheet. Fine kerf, minimal heat distortion and clean edges that are ready for bending or welding without secondary finishing.",
  },
  {
    title: "CNC bending",
    number: "02",
    copy: "CNC press-brake forming with repeatable angles and flange lengths. Suited to brackets, enclosures, channels and folded panels, from one-off prototypes to batch production.",
  },
  {
    title: "Metal fabrication",
    number: "03",
    copy: "MIG and TIG welding, assembly and finishing of frames, guards, housings and structural components. Powder coating, galvanising and plating arranged through trusted partners.",
  },
  {
    title: "Custom metal work",
    number: "04",
    copy: "Bespoke architectural and decorative pieces: screens, signage, balustrades and furniture. We work from your drawings or develop the design with you from a sketch.",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page" aria-label="Services">
      <section className="services-intro">
        <p className="eyebrow">Services</p>
        <h1>Built with precision.</h1>
        <p>
          Cutting, forming and fabrication handled end to end in one workshop,
          so tolerances hold from the first cut to the final weld.
        </p>
      </section>
      <section className="services-list" aria-label="Our services">
        {services.map((service, index) => (
          <article className={`service-row ${index % 2 ? "reverse" : ""}`} key={service.title}>
            <div className="service-image" aria-label={`${service.title} image placeholder`}>
              <span aria-hidden="true" />
            </div>
            <div className="service-copy">
              <span className="service-number">{service.number}</span>
              <h2>{service.title}</h2>
              <p>{service.copy}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
