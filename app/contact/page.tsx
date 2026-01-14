"use client";

import { siteInfo } from "../../data/site";

export default function ContactPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    const body = `${message}

---
${name}
${email}`;

    const mailto = `mailto:${siteInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <main className="py-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[7fr_3fr]">
        {/* 70% section */}
        <section
          className="
            rounded-2xl
            border border-black/10
            bg-white
            p-8
            shadow-md
            ring-2 ring-[var(--color-tropical-teal)]/35
          "
        >
          <h1 className="text-[var(--color-text)]">Reach out to us</h1>

          <p className="mt-4 max-w-2xl text-black/70">
            If you have questions about our work or products, feel free to get
            in touch. We will get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-black/70">
                  Your name
                </label>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3"
                  placeholder="Name Surname"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-black/70">
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-black/70">
                Subject
              </label>
              <input
                name="subject"
                required
                className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-black/70">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="
                inline-flex items-center rounded-lg
                bg-[var(--color-tropical-teal)]
                px-6 py-3
                font-medium text-white
                hover:opacity-90
              "
            >
              Email Us
            </button>
          </form>
        </section>

        {/* 30% section */}
        <section
          className="
            rounded-2xl
            border border-black/10
            bg-white
            p-8
            shadow-md
            ring-2 ring-[var(--color-mint-leaf)]/35
          "
        >
          <h2 className="text-[var(--color-text)]">Details</h2>

          <ul className="mt-6 space-y-5">
            <li>
              <div className="text-sm text-black/60">Email</div>
              <a
                href={`mailto:${siteInfo.email}`}
                className="text-base font-medium text-[var(--color-text)] hover:underline"
              >
                {siteInfo.email}
              </a>
            </li>

            {siteInfo.phone && (
              <li>
                <div className="text-sm text-black/60">Phone</div>
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="text-base font-medium text-[var(--color-text)] hover:underline"
                >
                  {siteInfo.phone}
                </a>
              </li>
            )}

            {siteInfo.address && (
              <li>
                <div className="text-sm text-black/60">Address</div>
                <div className="text-base font-medium text-[var(--color-text)]">
                  {siteInfo.address}
                </div>
              </li>
            )}
          </ul>
        </section>
      </div>
    </main>
  );
}
