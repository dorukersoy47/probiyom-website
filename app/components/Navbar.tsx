import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="flex items-center justify-between"
    >
      <Link
        href="/"
        aria-label="Probiyom home"
        className="flex items-center gap-3 text-[var(--color-background)]"
      >
        <Image src="/logo.svg" alt="Probiyom logo" width={32} height={32} />

        {/* Brand name */}
        <span className="text-base font-semibold tracking-tight">
          Probiyom
        </span>
      </Link>

      <ul className="flex items-center gap-10">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-base font-medium text-[var(--color-text)] transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
