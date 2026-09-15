import Link from "next/link";
import Logo from "@/components/logo";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-intro">
          <Link className="footer-mark" href="/">
            <Logo size="footer" />
          </Link>
          <p>
            12 kW fiber laser cutting, CNC bending and complete metal
            fabrication solutions.
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
          <span>Power. Precision. Speed.</span>
        </div>
      </div>
    </footer>
  );
}
