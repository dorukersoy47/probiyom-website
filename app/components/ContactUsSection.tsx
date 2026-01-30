// app/components/ContactUsSection.tsx
"use client";

import { useMemo, useState } from "react";
import { ProductGroup } from "../../data/products";
import { siteInfo } from "../../data/site";

export enum MessageSubject {
    Order = "Sipariş",
    InfoRequest = "Bilgi İsteği",
    Suggestion = "Öneri",
    Complaint = "Şikayet",
    Other = "Diğer",
}

type FormState = {
    fullName: string;
    email: string;
    phone: string;
    productGroup: ProductGroup | "";
    subject: MessageSubject | "";
    message: string;
};

function formatPhoneInput(raw: string): string {
    const digits = raw.replace(/\D/g, "");
    const rest = digits.startsWith("90") ? digits.slice(2, 12) : digits.slice(0, 10);

    const a = rest.slice(0, 3);
    const b = rest.slice(3, 6);
    const c = rest.slice(6, 8);
    const d = rest.slice(8, 10);

    let out = "+90";
    if (a.length > 0) out += ` (${a}`;
    if (a.length === 3) out += `)`;
    if (b.length > 0) out += ` ${b}`;
    if (c.length > 0) out += ` ${c}`;
    if (d.length > 0) out += ` ${d}`;

    return out;
}

function buildMailto(to: string, subject: string, body: string): string {
    const params = new URLSearchParams();
    params.set("subject", subject);
    params.set("body", body);
    return `mailto:${to}?${params.toString()}`;
}

export default function ContactUsSection() {
    const [form, setForm] = useState<FormState>({
        fullName: "",
        email: "",
        phone: "+90",
        productGroup: "",
        subject: "",
        message: "",
    });

    const [submitState, setSubmitState] = useState<"idle" | "success">("idle");

    const productGroupOptions = useMemo(() => Object.values(ProductGroup), []);
    const subjectOptions = useMemo(() => Object.values(MessageSubject), []);

    const isFormValid = useMemo(() => {
        return (
            form.fullName.trim().length > 0 &&
            form.email.trim().length > 0 &&
            form.productGroup !== "" &&
            form.subject !== ""
        );
    }, [form]);

    function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
        setSubmitState("idle");
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!isFormValid) return;

        const mailSubject = `İletişim Formu: ${form.subject}`;
        const bodyLines = [
            `Ad: ${form.fullName}`,
            `E-mail: ${form.email}`,
            form.phone.trim().length > 0 ? `İrtibat No: ${form.phone}` : "",
            `Ürün grubu: ${form.productGroup}`,
            `Mesaj konusu: ${form.subject}`,
            "",
            "Mesaj:",
            form.message.trim().length > 0 ? form.message : "(Mesaj yok)",
        ].filter((x) => x !== "");

        const mailto = buildMailto(siteInfo.email, mailSubject, bodyLines.join("\n"));

        window.location.href = mailto;

        setSubmitState("success");

        setForm({
            fullName: "",
            email: "",
            phone: "+90",
            productGroup: "",
            subject: "",
            message: "",
        });
    }

    return (
        <section className="rounded-2xl border border-black/10 bg-white p-4 md:p-8">
            <h2 className="text-[var(--color-baltic-blue)]">Bize Ulaşın</h2>
            <p className="mt-3 max-w-4xl">
                Merak ettiğiniz her konuda bizi arayabilirsiniz. IDOL Invest Ekibi olarak size yardımcı olmaktan mutluluk duyarız.
            </p>

            <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-5">
                <div className="grid gap-4 md:grid-cols-2">
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-black/70">
                            Adınız <span className="text-red-600">*</span>
                        </span>
                        <input
                            value={form.fullName}
                            onChange={(e) => updateField("fullName", e.target.value)}
                            className="rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/25"
                            placeholder="Ad Soyad"
                            required
                        />
                    </label>

                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-black/70">
                            E-mail <span className="text-red-600">*</span>
                        </span>
                        <input
                            value={form.email}
                            onChange={(e) => updateField("email", e.target.value)}
                            className="rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/25"
                            placeholder="ornek@eposta.com"
                            type="email"
                            required
                        />
                    </label>
                </div>

                <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-black/70">
                        İrtibat No
                    </span>
                    <input
                        value={form.phone}
                        onChange={(e) => updateField("phone", formatPhoneInput(e.target.value))}
                        className="rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/25"
                        placeholder="+90 (5xx) xxx xx xx"
                        inputMode="tel"
                    />
                </label>

                <div className="grid gap-4 md:grid-cols-2">
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-black/70">
                            Ürün grubu <span className="text-red-600">*</span>
                        </span>
                        <select
                            value={form.productGroup}
                            onChange={(e) => updateField("productGroup", e.target.value as ProductGroup)}
                            className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                            required
                        >
                            <option value="" disabled>
                                Seçiniz
                            </option>
                            {productGroupOptions.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-black/70">
                            Mesaj konusu <span className="text-red-600">*</span>
                        </span>
                        <select
                            value={form.subject}
                            onChange={(e) => updateField("subject", e.target.value as MessageSubject)}
                            className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                            required
                        >
                            <option value="" disabled>
                                Seçiniz
                            </option>
                            {subjectOptions.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-black/70">
                        Mesajınız
                    </span>
                    <textarea
                        value={form.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        className="min-h-[140px] rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/25"
                        placeholder="Mesajınızı yazınız"
                    />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-black/60">
                        <span className="text-red-600">*</span> ile işaretli alanlar zorunludur.
                    </p>

                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={[
                            "rounded-xl px-5 py-3 font-semibold text-white transition",
                            "bg-[var(--color-baltic-blue)] hover:opacity-90",
                            !isFormValid ? "cursor-not-allowed opacity-50 hover:opacity-50" : "",
                        ].join(" ")}
                    >
                        E-mail Uygulamasında Aç
                    </button>
                </div>

                {submitState === "success" ? (
                    <div className="rounded-xl border border-black/10 bg-black/5 p-4">
                        <p className="font-semibold text-[var(--color-baltic-blue)]">
                            E-mail uygulamanız açıldı. Mesajı göndererek bizimle iletişime geçebilirsiniz.
                        </p>
                    </div>
                ) : null}
            </form>
        </section>
    );
}
