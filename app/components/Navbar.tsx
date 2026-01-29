"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/about" },
    { label: "Ürünlerimiz", href: "/products" },
    { label: "İletişim", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <nav aria-label="Main navigation" className="relative flex items-center justify-between">
            <Link
                href="/"
                aria-label="Probiyom ana sayfa"
                className="flex items-center gap-3 text-white"
                onClick={() => setIsOpen(false)}
            >
                <Image className="brightness-0 invert" src="/logo.svg" alt="Probiyom logo" width={32} height={32} />

                <span className="text-bg font-semibold tracking-tight">
                    Probiyom
                </span>
            </Link>

            {/* Desktop */}
            <ul className="hidden md:flex items-center gap-8">
                {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className="text-bg font-semibold text-white/95 transition-opacity hover:opacity-80"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile button */}
            <button
                type="button"
                aria-label="Menüyü aç/kapat"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-white backdrop-blur-sm transition hover:bg-white/15"
            >
                <span className="text-sm font-semibold">
                    Menü
                </span>
            </button>

            {/* Mobile dropdown */}
            {isOpen ? (
                <div className="absolute top-full right-0 mt-3 w-full md:hidden">
                    <div className="rounded-2xl border border-white/20 bg-white/95 shadow-lg overflow-hidden">
                        <ul className="flex flex-col py-2">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 text-[var(--color-baltic-blue)] font-semibold hover:bg-black/5"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : null}
        </nav>
    );
}
