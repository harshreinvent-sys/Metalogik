"use client";

import Link from "next/link";
import Logo from "@/components/logo";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" onClick={() => setIsOpen(false)}>
          <Logo />
        </Link>
        <nav className={`desktop-nav ${isOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <Link
              className={pathname === link.href ? "active" : ""}
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link className="header-action" href="/contact" onClick={() => setIsOpen(false)}>
            Request a quote <span aria-hidden="true">↗</span>
          </Link>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
