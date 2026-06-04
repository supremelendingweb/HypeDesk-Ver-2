import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  FileText, Megaphone, Image as ImageIcon, Home, ShieldCheck,
  PenTool, FilePlus, LayoutTemplate, Globe,
  FileSearch, BookOpen, Layers, Video, QrCode, ShoppingBag,
  Calendar, Camera, Mail, Send, MessageSquare, Languages,
  Search, Building2, RefreshCw, Hammer, Award, Presentation,
  ClipboardList, CheckSquare, UserPlus, Signature, IdCard, HelpCircle,
  Menu, X,
} from "lucide-react";
import { HypeCard } from "@/components/HypeCard";
import { CardRow } from "@/components/CardRow";
import heroBg from "@/assets/hero-bg.jpg";
import hypedeskLogo from "@/assets/HypeDesk Logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Hype Desk — Supreme Lending Marketing Hub" },
      { name: "description", content: "Internal marketing resource hub for Supreme Lending loan officers." },
    ],
  }),
});

const SECTIONS = [
  { id: "most-requested", label: "Most Requested" },
  { id: "ready-to-go", label: "Ready To Go" },
  { id: "custom-requests", label: "Custom Requests" },
  { id: "toolkits", label: "Ready-to-Go Marketing Toolkits" },
  { id: "compliance", label: "Compliance Requests" },
  { id: "how-to", label: "How-To" },
  { id: "getting-started", label: "Just Getting Started?" },
];

function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-page)" }}>
      <Header />
      <Hero />
      <main className="space-y-12 py-10">
        <CardRow id="most-requested" label="Most Requested">
          <HypeCard label="Marketing Tech Stack" icon={Layers} imageSlot="tech-stack-preview" />
          <HypeCard label="Livestream Playbacks" icon={Video} imageSlot="livestream-preview" />
          <HypeCard label="AMP" icon={Megaphone} imageSlot="amp-preview" />
        </CardRow>

        <CardRow id="ready-to-go" label="Ready To Go">
          <HypeCard label="Ready to Go Product Flyers" icon={FileText} imageSlot="rtg-flyers-preview" />
          <HypeCard label="Ready to Go Social Graphics" icon={ImageIcon} imageSlot="rtg-social-preview" />
          <HypeCard label="Ready to Go Presentations" icon={Presentation} imageSlot="rtg-presentations-preview" />
          <HypeCard label="Supreme Lending Logos" icon={Award} imageSlot="sl-logos-preview" />
          <HypeCard label="Monthly Social Content Calendar" icon={Calendar} imageSlot="content-calendar-preview" />
          <HypeCard label="Need a QR Code? Download Now!" icon={QrCode} imageSlot="qr-code-preview" />
          <HypeCard label="Visit the Supreme Lending Swag Store" icon={ShoppingBag} imageSlot="swag-store-preview" />
        </CardRow>

        <CardRow id="custom-requests" label="Custom Requests">
          <HypeCard label="Open House Flyer" icon={Home} imageSlot="open-house-preview" />
          <HypeCard label="Custom Marketing Flyer or Graphic" icon={FilePlus} imageSlot="custom-flyer-preview" />
          <HypeCard label="Social Media Graphic Request" icon={LayoutTemplate} imageSlot="custom-social-preview" />
          <HypeCard label="General Marketing Request Form" icon={ClipboardList} imageSlot="general-request-preview" />
          <HypeCard label="Custom Website" icon={Globe} imageSlot="custom-website-preview" />
          <HypeCard label="Custom Team Logo" icon={PenTool} imageSlot="custom-logo-preview" />
          <HypeCard label="Photo & Video Request" icon={Camera} imageSlot="photo-video-preview" />
          <HypeCard label="Single Send Usherpa Email" icon={Send} imageSlot="single-email-preview" />
          <HypeCard label="Usherpa Email Campaign" icon={Mail} imageSlot="email-campaign-preview" />
          <HypeCard label="Event Request Form" icon={Calendar} imageSlot="event-request-preview" />
          <HypeCard label="Corporate Communications Request" icon={MessageSquare} imageSlot="corp-comms-preview" />
          <HypeCard label="Presentation" icon={Presentation} imageSlot="presentation-preview" />
        </CardRow>

        <CardRow id="toolkits" label="Ready-to-Go Marketing Toolkits">
          <HypeCard label="Builder Toolkit" icon={Hammer} imageSlot="builder-toolkit-preview" />
          <HypeCard label="Reverse Toolkit" icon={RefreshCw} imageSlot="reverse-toolkit-preview" />
          <HypeCard label="Condo Toolkit" icon={Building2} imageSlot="condo-toolkit-preview" />
          <HypeCard label="Reno Toolkit" icon={Hammer} imageSlot="reno-toolkit-preview" />
          <HypeCard label="VA Toolkit" icon={ShieldCheck} imageSlot="va-toolkit-preview" />
          <HypeCard label="Spanish Toolkit" icon={Languages} imageSlot="spanish-toolkit-preview" />
        </CardRow>

        <CardRow id="compliance" label="Compliance Requests">
          <HypeCard label="Submit for Marketing Compliance Approval via ComplyAI" icon={ShieldCheck} imageSlot="complyai-preview" />
          <HypeCard label="Social Media Compliance Checklist" icon={CheckSquare} imageSlot="social-checklist-preview" />
        </CardRow>

        <CardRow id="how-to" label="How-To">
          <HypeCard variant="dark" label="How to Use AMP (Automated Marketing Platform)" icon={BookOpen} imageSlot="howto-amp-preview" />
          <HypeCard variant="dark" label="How to Request an Open House Flyer" icon={FileSearch} imageSlot="howto-openhouse-preview" />
          <HypeCard variant="dark" label="Supreme Social Support: Navigating Compliance" icon={HelpCircle} imageSlot="howto-social-preview" />
        </CardRow>

        <CardRow id="getting-started" label="Just Getting Started?">
          <HypeCard label="Onboarding Kickstarter Form" icon={UserPlus} imageSlot="onboarding-preview" />
          <HypeCard label="Create Your Email Signature in AMP" icon={Signature} imageSlot="email-sig-preview" />
          <HypeCard label="Business Cards" icon={IdCard} imageSlot="business-cards-preview" />
        </CardRow>
      </main>
      <Footer />
    </div>
  );
}

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }
}

function Header() {
  const [open, setOpen] = useState(false);
  const navColor = { color: "var(--color-navy)" } as const;
  return (
    <header
      className="sticky top-0 z-40 w-full"
      style={{
        backgroundColor: "var(--color-offwhite)",
        borderBottom: "1px solid var(--color-divider)",
      }}
    >
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-x-8 px-6">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.replaceState(null, "", window.location.pathname);
            setOpen(false);
          }}
          className="flex shrink-0 items-center transition-opacity hover:opacity-80"
          aria-label="HypeDesk — back to top"
        >
          <img src={hypedeskLogo} alt="HypeDesk" className="h-8 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex min-w-0 flex-1 items-center justify-end gap-x-4 gap-y-1 flex-wrap font-body text-[12px] font-bold uppercase tracking-wide"
          style={navColor}
        >
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => handleNavClick(e, s.id)}
              className="whitespace-nowrap transition-colors hover:text-[color:var(--color-red)]"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden flex items-center justify-center rounded-md p-2 transition-colors hover:bg-[color:var(--color-divider)]"
          style={navColor}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <nav
          className="lg:hidden border-t font-body text-[13px] font-bold uppercase tracking-wide"
          style={{ borderColor: "var(--color-divider)", backgroundColor: "var(--color-offwhite)", color: "var(--color-navy)" }}
        >
          <div className="mx-auto flex max-w-[1280px] flex-col px-6 py-3">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => {
                  handleNavClick(e, s.id);
                  setOpen(false);
                }}
                className="border-b py-3 transition-colors hover:text-[color:var(--color-red)] last:border-b-0"
                style={{ borderColor: "var(--color-divider)" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{ height: 320, backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 26, 64, 0.78)" }} aria-hidden />
      <div className="topo-pattern absolute inset-0" aria-hidden />
      <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-center px-6">
        <h1 className="font-display text-[64px] font-extrabold leading-[1.02] tracking-tight" style={{ color: "var(--color-offwhite)" }}>
          How can we help you <span style={{ color: "#50B0FF" }}>Win Today ?</span>
        </h1>
        <p className="mt-2 font-body text-[16px] font-medium" style={{ color: "var(--color-blue-soft)" }}>
          Find your marketing assets fast. Click any category below.
        </p>
        <div className="mt-5 flex w-full justify-center">
          <form
            className="flex w-[480px] max-w-full items-stretch overflow-hidden rounded-[10px] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search flyers, social posts, logos..."
              className="flex-1 bg-transparent px-4 py-3 font-body text-[14px] font-medium outline-none placeholder:text-gray-400"
              style={{ color: "var(--color-navy)" }}
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex items-center justify-center px-5 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-red)" }}
            >
              <Search size={18} color="#ffffff" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const hub = [
    { label: "Ready-to-Use", id: "ready-to-go" },
    { label: "Custom Requests", id: "custom-requests" },
    { label: "Toolkits", id: "toolkits" },
    
    
  ];
  const support = [
    { label: "Compliance", id: "compliance" },
    { label: "How-To", id: "how-to" },
    { label: "Getting Started", id: "getting-started" },
    { label: "Contact", id: "most-requested" },
  ];
  return (
    <footer style={{ backgroundColor: "var(--color-navy)" }}>
      <div className="mx-auto max-w-[1280px] px-8 pb-8 pt-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center transition-opacity hover:opacity-80"
              aria-label="HypeDesk — back to top"
            >
              <img src={hypedeskLogo} alt="HypeDesk" className="h-9 w-auto brightness-0 invert" />
            </a>
            <div className="mt-3 font-body">
              <div className="text-[13px] font-bold text-white">HypeDesk</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: "var(--color-blue-mid)" }}>
                Supreme Lending
              </div>
            </div>
            <p className="mt-5 max-w-[380px] font-body text-[14px] font-medium leading-relaxed" style={{ color: "var(--color-blue-soft)" }}>
              The marketing request center built for Supreme Lending teams. 
            </p>
          </div>

          <FooterColumn title="Hub" items={hub} />
          <FooterColumn title="Support" items={support} />
        </div>

        <div
          className="mt-12 flex flex-col items-start justify-between gap-3 border-t pt-5 md:flex-row md:items-center"
          style={{ borderColor: "rgba(166, 222, 255, 0.18)" }}
        >
          <span className="font-body text-[12px] font-medium" style={{ color: "var(--color-blue-soft)" }}>
            © 2026 Supreme Lending. All rights reserved.
          </span>
          <div className="flex items-center gap-6 font-body text-[12px] font-medium" style={{ color: "var(--color-blue-soft)" }}>
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">NMLS Consumer Access</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { label: string; id: string }[] }) {
  return (
    <div>
      <h3 className="font-body text-[13px] font-bold uppercase tracking-[0.18em] text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={`#${it.id}`}
              onClick={(e) => handleNavClick(e, it.id)}
              className="font-body text-[14px] font-medium transition-colors hover:text-white"
              style={{ color: "var(--color-blue-soft)" }}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
