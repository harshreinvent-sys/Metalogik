const projects = [
  { title: "Stainless control enclosure", tag: "Fabrication", wide: true },
  { title: "Laser-cut steel signage", tag: "Laser cutting" },
  { title: "Aluminium bracket set", tag: "CNC bending" },
  { title: "Architectural screen panels", tag: "Laser cutting", wide: true },
  { title: "Welded machine frame", tag: "Fabrication" },
  { title: "Custom staircase stringers", tag: "Design" },
  { title: "Perforated mesh guards", tag: "Laser cutting" },
];

export default function GalleryPage() {
  return (
    <main className="page-space" aria-label="Gallery">
      <section className="page-intro">
        <p className="eyebrow">Gallery</p>
        <h1>Work that leaves the shop.</h1>
        <p>
          A selection of recent cutting, bending and fabrication projects
          across industrial, architectural and bespoke work.
        </p>
      </section>
      <section className="gallery-grid" aria-label="Project gallery">
        {projects.map((project) => (
          <article
            className={`gallery-tile ${project.wide ? "wide" : ""}`}
            key={project.title}
          >
            <figure>
              <span className="tile-image" aria-hidden="true" />
              <figcaption>
                <strong>{project.title}</strong>
                <span>{project.tag}</span>
              </figcaption>
            </figure>
          </article>
        ))}
      </section>
    </main>
  );
}
