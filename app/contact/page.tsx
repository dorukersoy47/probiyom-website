"use client";

import { useMemo, useState } from "react";
import { siteInfo } from "../../data/site";
import { ProductGroup } from "../../data/products"
import ContactMap from "../components/ContactMap";

export default function ContactPage() {
    return (
        <section className="flex flex-col gap-10 py-6">
            <header className="flex flex-col gap-3">
                <h1 className="text-[var(--color-baltic-blue)]">İletişim</h1>
                <p className="max-w-4xl">
                    Merak ettiğiniz her konuda bizi arayabilirsiniz. IDOL Invest Ekibi olarak size yardımcı olmaktan mutluluk duyarız.
                </p>
            </header>

            <section className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-white p-4 md:p-6">
                    <h2 className="text-[var(--color-baltic-blue)]">İletişim Bilgileri</h2>

                    <div className="mt-4 flex flex-col gap-4">
                        <div>
                            <p className="text-sm font-semibold text-black/70">Adres</p>
                            <p className="mt-1">
                                {siteInfo.address1}
                                <br />
                                {siteInfo.address2}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-black/70">Telefon</p>
                            <a
                                href={`tel:${siteInfo.phone}`}
                                className="mt-1 inline-block font-semibold text-[var(--color-baltic-blue)] hover:opacity-80"
                            >
                                {siteInfo.phone}
                            </a>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-black/70">E-posta</p>
                            <a
                                href={`mailto:${siteInfo.email}`}
                                className="mt-1 inline-block font-semibold text-[var(--color-baltic-blue)] hover:opacity-80"
                            >
                                {siteInfo.email}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-2 md:p-3">
                    <ContactMap lon={29.068512} lat={40.992680} zoom={15} />
                </div>
            </section>
        </section>
    );
}