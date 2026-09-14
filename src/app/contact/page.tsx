export default function ContactPage() {
  return (
    <main className="page-space" aria-label="Contact">
      <section className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Tell us what you need cut.</h1>
        <p>
          Send drawings, quantities and material, and we will come back with a
          quote and lead time.
        </p>
      </section>

      <section className="contact-grid" aria-label="Contact form and details">
        <div className="contact-card">
          <h2>Request a quote</h2>
          <p>Attach files after we reply, or describe the job below.</p>
          <form className="contact-form" action="mailto:hello@metalogik.dev" method="post" encType="text/plain">
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" autoComplete="organization" />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="service">Service</label>
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>Laser cutting</option>
                <option>CNC bending</option>
                <option>Metal fabrication</option>
                <option>Design &amp; drafting</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Project details</label>
              <textarea
                id="message"
                name="message"
                placeholder="Material, thickness, quantity, finish and any deadlines."
              />
            </div>
            <button className="btn btn-metal" type="submit">
              Send request <span aria-hidden="true">↗</span>
            </button>
          </form>
        </div>

        <aside className="contact-details">
          <div className="detail-card metal">
            <h3>Workshop hours</h3>
            <ul>
              <li>
                <span>Monday – Friday</span>
                <span>08:00 – 17:30</span>
              </li>
              <li>
                <span>Saturday</span>
                <span>By appointment</span>
              </li>
              <li>
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
          <div className="detail-card">
            <h3>Email</h3>
            <a href="mailto:hello@metalogik.dev">hello@metalogik.dev</a>
          </div>
          <div className="detail-card">
            <h3>Phone</h3>
            <a href="tel:+10000000000">+1 (000) 000-0000</a>
          </div>
          <div className="detail-card">
            <h3>Workshop</h3>
            <p>
              Unit 4, Industrial Estate
              <br />
              Your City, Postcode
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
