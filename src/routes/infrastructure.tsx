import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Mail, Phone, MapPin, Linkedin, Menu, X } from "lucide-react";
import img5 from "@/assets/5.jpeg";
import img6 from "@/assets/6.jpeg";
import img7 from "@/assets/7.jpeg";
import img8 from "@/assets/8.jpeg";
import img9 from "@/assets/9.jpeg";

export const Route = createFileRoute("/infrastructure")({
  component: Infrastructure,
});

const CONTACT_EMAIL = "ebseedcompany@gmail.com";
const CONTACT_PHONE = "+250 788 449 457";

const NAV = [
  { label: "Our Story", href: "/#story" },
  { label: "What We Do", href: "/#impact" },
  { label: "Our Impact", href: "/#network" },
  { label: "Why We're Different", href: "/#why" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Contact", href: "/#contact" },
];

const GALLERY = [
  {
    src: img9,
    title: "Headquarters & Fleet",
    caption:
      "Our main warehouse in Kayonza proudly bears the E&B Seed Co. name — a landmark in the district, supported by a dedicated fleet of trucks that ensures timely delivery to farmers across Rwanda.",
  },
  {
    src: img6,
    title: "Seed Processing Facility",
    caption:
      "State-of-the-art industrial machinery cleans, grades, and conditions seed lots to certified standards. Every batch is processed with precision to guarantee germination rates that farmers can count on.",
  },
  {
    src: img7,
    title: "Cold & Dry Storage",
    caption:
      "Our climate-controlled warehouse preserves seed viability across seasons. Purpose-built for optimal humidity and temperature, this facility protects stock from harvest right through to distribution.",
  },
  {
    src: img5,
    title: "Field Equipment",
    caption:
      "A John Deere tractor at work in our demonstration plots. Mechanised land preparation enables us to maintain the seed multiplication fields that supply our certified seed pipeline.",
  },
  {
    src: img8,
    title: "Expanding Capacity",
    caption:
      "A new two-storey administration and processing annex currently under construction — built brick by brick to meet the growing demand for quality seed in Rwanda's agriculture sector.",
  },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        aria-label="Primary"
        className={`glass w-full max-w-6xl rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled ? "shadow-[var(--shadow-card)]" : ""
        }`}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
          <a href="/" className="flex min-w-0 items-center gap-2.5 group">
            <span className="truncate text-sm font-semibold tracking-tight">
              <span className="hidden sm:inline">E&B Seed Co Ltd</span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Rwanda Agribusiness
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className={`rounded-full px-3.5 py-2 text-[13px] font-medium transition hover:bg-secondary hover:text-foreground ${
                    n.href === "/infrastructure"
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pl-2">
              <a
                href="/#contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-[13px] font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Partner with us <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </li>
          </ul>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <ul className="mt-3 flex flex-col gap-1 border-t border-border pt-3 lg:hidden">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary hover:text-foreground ${
                    n.href === "/infrastructure"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-between rounded-lg bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Partner with us <ArrowRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-semibold tracking-tight">E&B Seed Co Ltd</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              From the Land. For the Land. Growing Rwanda's Future.
            </p>
            <p className="mt-5 text-xs text-muted-foreground">
              Buhabwa Village, Kayonza District, Rwanda · Founded 2011 · Registered 2017
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Explore</p>
            <ul className="space-y-2.5 text-sm">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground/80 hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2 text-foreground/80">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary">{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="hover:text-primary">{CONTACT_PHONE}</a>
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <MapPin className="h-4 w-4 text-primary" /> Kayonza, Rwanda
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Network</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary" href="#">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li><a className="text-foreground/80 hover:text-primary" href="#">Privacy Policy</a></li>
              <li><a className="text-foreground/80 hover:text-primary" href="#">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} E&B Seed Co Ltd. All rights reserved.</p>
          <p className="text-gradient font-semibold">From the Land. For the Land.</p>
        </div>
      </div>
    </footer>
  );
}

function Infrastructure() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />

      <main className="pt-28 pb-24">
        {/* Back link */}
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition mb-10"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </a>
        </div>

        {/* Hero text */}
        <section className="mx-auto max-w-6xl px-5 sm:px-8 mb-20">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-4">
            <span className="h-px w-8 bg-primary" />
            Company Infrastructure
          </span>
          <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl leading-[1.08] mb-6">
            Built for quality.{" "}
            <span className="text-gradient">Equipped for scale.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            E&B Seed Co Ltd operates from a fully integrated infrastructure in Kayonza District —
            purpose-built seed processing facilities, climate-controlled storage, mechanised field
            equipment, and a growing fleet that reaches every corner of Rwanda.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Processing Capacity", value: "1,000+ MT/season" },
              { label: "Warehouse Space", value: "Spacious multi-unit" },
              { label: "Distribution Fleet", value: "Company-owned trucks" },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-2xl border border-border bg-card px-6 py-5">
                <p className="text-2xl font-black tracking-tight text-foreground">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Photo gallery */}
        <section className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8">
            {GALLERY.map((item, i) => (
              <div
                key={item.title}
                className={`grid gap-6 items-center lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-72 w-full rounded-3xl object-cover shadow-[var(--shadow-card)] sm:h-96"
                    loading="lazy"
                  />
                </div>
                <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
                    <span className="h-px w-6 bg-primary" />
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl font-black tracking-tight sm:text-3xl mb-3">
                    {item.title}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          data-theme="light"
          className="mt-24 mx-auto max-w-6xl px-5 sm:px-8"
        >
          <div className="rounded-3xl bg-stone-50 border border-border px-8 py-12 text-center sm:px-16">
            <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl mb-4">
              Interested in partnering with us?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Whether you're a farmer, distributor, or investor — our infrastructure is built
              to support partnerships at every scale.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
