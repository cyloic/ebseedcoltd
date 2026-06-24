import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sprout, Wheat, Leaf, ArrowRight, MapPin, Users, Truck, Briefcase, Network,
  ShieldCheck, Award, FileDown, Mail, Phone, Linkedin, ChevronRight, Menu, X,
  CircleCheck, Recycle, TrendingUp,
} from "lucide-react";
import heroFields from "@/assets/hero-fields.jpg";
import farmerPortrait from "@/assets/farmer-portrait.jpg";
import ourStory from "@/assets/Family.jpeg";
import beneficiaryGroup from "@/assets/2.jpeg";
import founderPhoto from "@/assets/Founder.jpeg";
import ricaLogo from "@/assets/RICA-Green-Logo-on-White-Bg-scaled.png";
import rabLogo from "@/assets/RAB_Logo2.png";
import aptcLogo from "@/assets/APTC.jpg";
import maizeFlour from "@/assets/maize-flour.jpg";
import organicSoil from "@/assets/organic-soil.jpg";
import seedField from "@/assets/seed-field.jpg";
import community from "@/assets/community.jpg";
import agribusiness from "@/assets/agribusiness.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const NAV = [
  { label: "Our Story", href: "#story" },
  { label: "What We Do", href: "#impact" },
  { label: "Our Impact", href: "#network" },
  { label: "Why We're Different", href: "#why" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Contact", href: "#contact" },
];

function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main id="main">
        <Hero />
        <Story />
        <TripleImpact />
        <NetworkSection />
        <WhyItMatters />
        <Partnerships />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
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
          <a href="#top" className="flex min-w-0 items-center gap-2.5 group">
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
                  className="rounded-full px-3.5 py-2 text-[13px] font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pl-2">
              <a
                href="#contact"
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
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
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

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-dvh items-end overflow-hidden pb-16 pt-32 sm:pb-24">
      <img
        src={heroFields}
        alt="Rolling green Rwandan farmland at golden hour"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0 -z-10" />
      <div className="bg-noise absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-4xl animate-[fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_both]">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Rwanda · East Africa
          </span>

          <h1 className="mt-6 font-display text-[2.4rem] font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            From the Land,<br className="hidden sm:block" /> For the Land —
            <span className="block text-gradient mt-2">Scaling Certified Seed.</span>
            <span className="block text-foreground/90">Securing Food Security.</span>
            <span className="block text-gradient-earth">Building Rwanda's Future.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base text-foreground/80 sm:text-lg">
            <span className="font-semibold text-foreground">E&B Seed Co Ltd</span> — growing from
            10 hectares to 150+ hectares. Empowering <span className="text-primary font-semibold">472 farming families</span>.
            Reaching <span className="text-earth font-semibold">15 districts</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#network" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
              Our Impact <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#story" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-secondary">
              Our Story
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-earth/50 bg-earth/10 px-5 py-3 text-sm font-semibold text-earth transition hover:bg-earth/20">
              Partner With Us
            </a>
          </div>

          <div className="mt-12 inline-block max-w-2xl rounded-2xl glass px-5 py-4 sm:px-6 sm:py-5">
            <p className="text-sm font-medium leading-relaxed text-foreground/90 sm:text-base">
              <span className="text-primary font-bold">One platform.</span>{" "}
              <span className="text-earth font-bold">Three product lines.</span>{" "}
              <span className="text-foreground font-bold">Zero waste.</span>{" "}
              <span className="text-gradient font-bold">Infinite potential.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STORY ---------------- */
function Story() {
  const milestones = [
    { year: "2011", title: "The Beginning", body: "10 hectares. A family partnership rooted in Buhabwa Village." },
    { year: "2017", title: "Formal Registration", body: "E&B Seed Co Ltd is incorporated, structured for scale." },
    { year: "2024", title: "Today's Footprint", body: "150 hectares · 472 farmers · 15 districts." },
  ];

  return (
    <section id="story" data-theme="light" className="relative bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel>Our Story</SectionLabel>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl">
          From a family field to <span className="text-gradient">Rwanda's most structured</span> seed enterprise.
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
              <img
                src={ourStory}
                alt="E&B Seed Co team members presenting RHM 1407 certified seeds at an agricultural expo"
                width={1280}
                height={853}
                loading="lazy"
                className="h-[520px] w-full object-cover object-top"
              />
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Field portrait — Managing Director & team
            </p>
          </div>

          <div>
            <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
              What began as a family farming partnership on 10 hectares has evolved into Rwanda's
              most structured seed multiplication enterprise. Today, we support{" "}
              <span className="font-semibold text-foreground">472 farming families</span>,
              operate <span className="font-semibold text-foreground">150 hectares</span>, and distribute across{" "}
              <span className="font-semibold text-foreground">15 districts</span> — all anchored
              by a philosophy: <em className="text-primary not-italic font-semibold">nothing wasted, everything valued.</em>
            </p>

            <ol className="mt-10 space-y-5 border-l border-border pl-6">
              {milestones.map((m, i) => (
                <li key={m.year} className="relative">
                  <span className="absolute -left-[31px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-background ring-2 ring-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-2xl font-black text-gradient-earth">{m.year}</span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      {m.title}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-foreground/75 sm:text-base">{m.body}</p>
                  {i < milestones.length - 1 && <div className="mt-5 h-px w-12 bg-border" />}
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {["RAB Certified", "RICA Compliant", "APTC Partner", "KOAISORWA Coop"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-semibold text-foreground/85">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" /> {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRIPLE IMPACT ---------------- */
function TripleImpact() {
  const cards = [
    {
      Icon: Sprout,
      tag: "Product Line 01",
      title: "Certified Hybrid Seed",
      stat: "3 seed types · Maize · Bean · Soya",
      headline: "472 out-growers. RAB-certified. Regional scale.",
      detail: "Structured production model delivering certified hybrids to 500+ farming partners across East Africa.",
      img: seedField,
      accent: "primary" as const,
    },
    {
      Icon: Wheat,
      tag: "Product Line 02",
      title: "Quality Maize Flour",
      stat: "Zero-waste processing · Daily staple",
      headline: "From by-product to staple. Circular economy in action.",
      detail: "Transforms off-grade seed maize into affordable nutrition for Rwandan families while creating new income for farming households.",
      img: maizeFlour,
      accent: "earth" as const,
    },
    {
      Icon: Leaf,
      tag: "Product Line 03",
      title: "Organic Fertiliser",
      stat: "100% organic · 150 hectares powered",
      headline: "Closing the loop. Cattle + crop residue = soil regeneration.",
      detail: "Integrated system: cattle rearing + maize waste conversion equals sustainable, regenerative soil building.",
      img: organicSoil,
      accent: "primary" as const,
    },
  ];

  return (
    <section id="impact" className="relative bg-[var(--gradient-surface)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <SectionLabel>Triple Impact</SectionLabel>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl">
              Three product lines.<br />
              <span className="text-gradient-earth">One circular system.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground sm:text-base">
            Every output feeds the next input. Seed yields flour. Flour by-products feed cattle. Cattle feed soil.
            Soil grows more seed.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={c.title}
              className="group hover-lift relative overflow-hidden rounded-3xl border border-border bg-card"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={c.img}
                  alt=""
                  width={1280}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className={`absolute right-4 top-4 inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${c.accent === "earth" ? "text-earth" : "text-primary"}`}>
                  {c.tag}
                </span>
                <div className={`absolute left-5 top-32 grid h-14 w-14 place-items-center rounded-2xl ${c.accent === "earth" ? "bg-earth text-earth-foreground" : "bg-primary text-primary-foreground"}`}>
                  <c.Icon className="h-7 w-7" strokeWidth={2.2} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-black tracking-tight">{c.title}</h3>
                <p className={`mt-2 text-sm font-semibold ${c.accent === "earth" ? "text-earth" : "text-primary"}`}>
                  {c.stat}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">{c.headline}</p>

                <div className="mt-4 max-h-0 overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-500 group-hover:mt-4 group-hover:max-h-40">
                  <div className="border-t border-border pt-4">{c.detail}</div>
                </div>

                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Hover to reveal <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- NETWORK ---------------- */
function NetworkSection() {
  const stats = [
    { Icon: MapPin, value: "150", label: "Hectares Under Cultivation", accent: "primary" },
    { Icon: Users, value: "472", label: "Farming Families Supported", accent: "earth" },
    { Icon: Truck, value: "8", label: "Distribution Team, Nationwide", accent: "primary" },
    { Icon: Briefcase, value: "~100", label: "Casual Laborers Employed", accent: "earth" },
    { Icon: Network, value: "15", label: "Districts Connected", accent: "primary" },
    { Icon: TrendingUp, value: "15×", label: "Land Footprint Since 2011", accent: "earth" },
  ];

  return (
    <section id="network" data-theme="light" className="relative bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel>The Network</SectionLabel>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl">
          A nationwide system, <span className="text-gradient">rooted in 15 districts.</span>
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          {/* Network diagram — hidden on mobile, visible sm+ */}
          <div className="relative aspect-square w-full max-w-[520px] mx-auto hidden sm:block">
            <div className="absolute inset-0 rounded-full border border-border" />
            <div className="absolute inset-[12%] rounded-full border border-border" />
            <div className="absolute inset-[26%] rounded-full border border-border" />
            <div className="absolute inset-[42%] rounded-full border border-primary/40 animate-pulse" />

            {/* Center node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-primary to-earth text-primary-foreground shadow-[var(--shadow-glow)]">
                <Recycle
                  className="h-11 w-11"
                  style={{ animation: "spin-slow 6s linear infinite" }}
                />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Circular Flow
              </p>
            </div>

            {/* Orbit nodes */}
            {[
              { top: "8%",  left: "50%", value: "472",  unit: "Farmers" },
              { top: "50%", left: "92%", value: "15",   unit: "Districts" },
              { top: "92%", left: "50%", value: "8",    unit: "Distributors" },
              { top: "50%", left: "8%",  value: "150",  unit: "Hectares" },
            ].map((n, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
                style={{ top: n.top, left: n.left }}
              >
                <p className="font-display text-lg font-black leading-none text-foreground">{n.value}</p>
                <ChevronRight className="mx-auto my-0.5 h-3 w-3 rotate-90 text-primary" />
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap">{n.unit}</p>
              </div>
            ))}
          </div>

          {/* Map placeholder + stats */}
          <div>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" /> Rwanda · 15 districts served
              </div>
              <div className="mt-4 grid gap-3 grid-cols-3 sm:grid-cols-4">
                {[
                  "Kayonza","Rwamagana","Bugesera","Nyagatare","Gatsibo","Kirehe",
                  "Kicukiro","Gasabo","Nyarugenge","Musanze","Rulindo","Burera",
                  "Huye","Kamonyi","Muhanga",
                ].map((d) => (
                  <span key={d} className="rounded-lg border border-border bg-secondary/60 px-2.5 py-2 text-center text-[11px] font-semibold text-foreground/85">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="hover-lift rounded-2xl border border-border bg-card p-6">
              <div className={`grid h-11 w-11 place-items-center rounded-xl ${s.accent === "earth" ? "bg-earth/15 text-earth" : "bg-primary/15 text-primary"}`}>
                <s.Icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <div className="mt-5 font-display text-4xl font-black tracking-tight sm:text-5xl">{s.value}</div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Founder spotlight */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[420px_1fr] lg:items-center lg:gap-14">
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <img
              src={founderPhoto}
              alt="Mrs. Mugeni Beathe, Founder & CEO of E&B Seed Co Ltd, in the field"
              width={840}
              height={1120}
              loading="lazy"
              className="h-[480px] w-full object-cover object-top"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Meet the Founder</p>
            <h3 className="mt-3 font-display text-2xl font-black leading-snug tracking-tight sm:text-3xl">
              Mrs. Mugeni Beathe<br />
              <span className="text-gradient-earth">Founder & CEO</span>
            </h3>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                An experienced agribusiness entrepreneur and community leader, Mrs. Mugeni Beathe built
                E&B Seed Co Ltd on a single conviction: that access to quality seed is the foundation of
                food security. Her hands-on approach — walking fields, sitting with farmers, understanding
                the soil — has shaped every decision the company makes.
              </p>
              <p className="border-l-2 border-primary pl-5 italic text-foreground/90">
                "My vision has always been simple — lift farmers, lift communities. When a farmer thrives,
                everyone around them thrives too."
              </p>
              <p>
                Under her leadership, E&B has grown from a family plot to a certified enterprise spanning
                150 hectares, supporting 472 farming families, and creating employment across 15 districts —
                while staying rooted in the values of social responsibility and rural development.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground text-center">Community impact</p>
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
            <img
              src={beneficiaryGroup}
              alt="Community members and E&B representatives at a house handover event"
              width={1280}
              height={853}
              loading="lazy"
              className="h-[380px] w-full object-cover object-center transition duration-700 hover:scale-105"
            />
            <div className="px-6 py-8 sm:px-12 sm:py-10 text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-3">Corporate Social Responsibility</p>
              <h3 className="font-display text-xl font-black leading-snug tracking-tight sm:text-2xl text-foreground mb-4">
                Building more than a business — building homes.
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base max-w-2xl mx-auto">
                As part of its CSR commitment, E&B Seed Co Ltd supported the construction of a home for a vulnerable neighbour
                who previously had no proper shelter. The handover, attended by community members and company representatives,
                was a moment that captured what E&B stands for beyond the fields —{" "}
                <span className="font-semibold text-foreground">compassion, dignity, and sustainable community development.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY IT MATTERS ---------------- */
function WhyItMatters() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel>Why It Matters</SectionLabel>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img
              src={agribusiness}
              alt="E&B Seed Co agribusiness operations"
              width={1600}
              height={1024}
              loading="lazy"
              className="h-[460px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
              <Recycle className="h-5 w-5 text-primary" />
              <p className="text-sm font-semibold">Circular value chain — cattle, crops, communities.</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl">
              We believe good agribusiness <span className="text-gradient-earth">leaves nothing to waste.</span>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
              <p>
                From cattle to crop residue. From certified seed to off-grade grain. Every part of our
                value chain circulates value back to the land and the people who work it.
              </p>
              <p className="border-l-2 border-primary pl-5 italic text-foreground/90">
                E&B isn't scaling horizontally — we're scaling in depth. Deeper partnerships. Deeper
                roots in farming communities. Deeper commitment to circular systems that regenerate
                soil, wealth, and hope.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { k: "Regenerate", v: "Soil" },
                { k: "Recirculate", v: "Wealth" },
                { k: "Restore", v: "Hope" },
              ].map((x) => (
                <div key={x.k} className="rounded-2xl border border-border bg-card p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{x.k}</p>
                  <p className="mt-1 font-display text-lg font-black text-gradient">{x.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PARTNERSHIPS ---------------- */
const LOGO_PARTNERS = [
  { img: rabLogo,  name: "RAB",  full: "Rwanda Agriculture Board" },
  { img: ricaLogo, name: "RICA", full: "Rwanda Inspectorate & Competition Authority" },
  { img: aptcLogo, name: "APTC", full: "APTC Partnership" },
];

function Partnerships() {
  const track = [...LOGO_PARTNERS, ...LOGO_PARTNERS];

  return (
    <section data-theme="light" className="relative border-y border-border bg-white py-20">
      <style>{`
        @keyframes logo-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .logo-track {
          animation: logo-scroll 20s linear infinite;
        }
        .logo-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Partnerships & Credibility</SectionLabel>
            <h2 className="mt-3 font-display text-2xl font-black tracking-tight sm:text-4xl">
              <span className="text-gradient">Certified.</span>{" "}
              <span className="text-foreground">Governed.</span>{" "}
              <span className="text-gradient-earth">Accountable.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <Award className="h-4 w-4 text-primary" /> Officially recognized partners
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-border bg-white py-6 [mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)]">
          <div className="logo-track flex w-max items-center gap-6">
            {track.map((p, i) => (
              <div
                key={i}
                className="flex w-52 shrink-0 flex-col items-center gap-3 rounded-xl border border-border/40 bg-white px-6 py-4"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-14 w-auto max-w-[120px] object-contain"
                />
                <p className="text-center text-[11px] font-medium leading-tight text-muted-foreground">
                  {p.full}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const CONTACT_EMAIL = "ebseedcompany@gmail.com";
const CONTACT_PHONE = "+250 788 449 457";

const WHATSAPP_NUMBER = "250788449457"; // +250 788 449 457

/* ---------------- CTA ---------------- */
function CallToAction() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => (fd.get(k) as string)?.trim();

    const lines = [
      "Hello E&B Seed Co Ltd 👋",
      "",
      `*Name:* ${get("from_name")}`,
      get("organisation") && `*Organisation:* ${get("organisation")}`,
      get("reply_to")    && `*Email:* ${get("reply_to")}`,
      get("interest")    && `*Interest:* ${get("interest")}`,
      "",
      "*Message:*",
      get("message"),
    ].filter(Boolean).join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`,
      "_blank",
    );
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="bg-noise absolute inset-0 opacity-50" />
      <div className="absolute inset-x-0 top-0 -z-0 mx-auto h-72 max-w-3xl rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Let's Build Together</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl">
            E&B Seed Co Ltd isn't just a business — it's{" "}
            <span className="text-gradient">infrastructure for Rwanda's food security.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <CtaCard
            Icon={FileDown}
            title="Download Our Impact Report"
            desc="A complete breakdown of operations, partnerships, and beneficiary metrics."
            cta="Download PDF"
            href="#"
            tone="primary"
          />
          <CtaCard
            Icon={Users}
            title="Meet Our Team"
            desc="The Managing Director, agronomists, and field officers behind every hectare."
            cta="See the team"
            href="#story"
            tone="earth"
          />
          <CtaCard
            Icon={Mail}
            title="Let's Partner"
            desc="Grant programs, distribution partners, and institutional collaborators welcome."
            cta="Open form"
            href="#partner-form"
            tone="primary"
          />
        </div>

        <form
          id="partner-form"
          onSubmit={handleSubmit}
          className="mt-12 rounded-3xl border border-border bg-card p-6 sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="from_name" required />
            <Field label="Organisation" name="organisation" />
            <Field label="Email" name="reply_to" type="email" />
            <Field label="Interest" name="interest" placeholder="Grants · Distribution · Investment" />
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="Tell us how you'd like to partner with E&B…"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              {sent
                ? "WhatsApp is opening — your message is pre-filled and ready to send."
                : "Clicking send will open WhatsApp with your message pre-filled."}
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {sent
                ? <><CircleCheck className="h-4 w-4" /> Opened WhatsApp</>
                : <>Send on WhatsApp <ArrowRight className="h-4 w-4" /></>}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function CtaCard({ Icon, title, desc, cta, href, tone }: {
  Icon: typeof Mail; title: string; desc: string; cta: string; href: string; tone: "primary" | "earth";
}) {
  return (
    <a href={href} className="hover-lift group block rounded-3xl border border-border bg-card p-7">
      <div className={`grid h-12 w-12 place-items-center rounded-2xl ${tone === "earth" ? "bg-earth/15 text-earth" : "bg-primary/15 text-primary"}`}>
        <Icon className="h-6 w-6" strokeWidth={2.2} />
      </div>
      <h3 className="mt-5 font-display text-xl font-black tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${tone === "earth" ? "text-earth" : "text-primary"}`}>
        {cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </a>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name} name={name} type={type} placeholder={placeholder} required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
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

          <FooterCol title="Explore" links={NAV} />
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2 text-foreground/80"><Mail className="h-4 w-4 text-primary" /><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary">{CONTACT_EMAIL}</a></li>
              <li className="flex items-center gap-2 text-foreground/80"><Phone className="h-4 w-4 text-primary" /><a href={`tel:${CONTACT_PHONE.replace(/\s/g,"")}`} className="hover:text-primary">{CONTACT_PHONE}</a></li>
              <li className="flex items-center gap-2 text-foreground/80"><MapPin className="h-4 w-4 text-primary" /> Kayonza, Rwanda</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Network</p>
            <ul className="space-y-2.5 text-sm">
              <li><a className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary" href="#"><Linkedin className="h-4 w-4" /> LinkedIn</a></li>
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

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{title}</p>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}><a href={l.href} className="text-foreground/80 hover:text-primary">{l.label}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- helpers ---------------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
    </span>
  );
}
