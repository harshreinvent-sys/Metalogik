const services = [
  {
    title: "Metal laser cutting",
    number: "01",
    copy: "High-speed, high-precision fiber laser cutting for industrial, architectural and custom applications. Our 12 kW fiber laser handles heavy-thickness metal with clean, accurate cuts, from prototype to bulk production.",
  },
  {
    title: "CNC bending",
    number: "02",
    copy: "Precision sheet-metal bending with accurate angles, dimensions and repeatability across every part.",
  },
  {
    title: "Metal fabrication",
    number: "03",
    copy: "Complete fabrication solutions including welding, assembly and customized metal structures.",
  },
  {
    title: "Custom metal work",
    number: "04",
    copy: "From your CAD drawing or concept to the finished component—we manufacture it to your specifications.",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page" aria-label="Services">
      <h1 className="services-label">Our services</h1>
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
