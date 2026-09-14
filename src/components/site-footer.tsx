import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-intro">
          <Link className="footer-mark" href="/">
            <span className="brand-mark" aria-hidden="true" />
            metalogik<span>.</span>
          </Link>
          <p>
            CNC laser cutting, bending and metal fabrication for industrial,
            architectural and bespoke projects.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <span className="footer-heading">Explore</span>
            <nav aria-label="Footer navigation">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/gallery">Gallery</Link>
            </nav>
          </div>
          <div>
            <span className="footer-heading">Connect</span>
            <nav aria-label="Contact navigation">
              <Link href="/contact">Contact</Link>
              <a href="mailto:hello@metalogik.dev">Email</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Metalogik</span>
          <span>Cut. Formed. Fabricated.</span>
        </div>
      </div>
    </footer>
  );
}
