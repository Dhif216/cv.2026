import { useState } from "react";
import { MapPin, Phone, Mail, ExternalLink, ChevronRight } from "lucide-react";
import { FlipCard } from "./components/flip-card";
import profileImage from "../../Gemini_Generated_Image_ofwtz7ofwtz7ofwt.png";
import asapLogo from "../../asaplogo.png";
import axaLogo from "../../axa.png";
import sweetLogo from "../../sweet.png";

type Locale = "en" | "fi";
type Section = "Profile" | "Experience" | "Projects" | "Education" | "Skills" | "Contact";
const NAV: Section[] = ["Profile", "Experience", "Projects", "Education", "Skills", "Contact"];
const EMAIL = "Dhif_mousah@hotmail.fr";
const PHONE = "+358449703149";
const WHATSAPP_URL = "https://wa.me/358449703149?text=Hello%20Dhif%2C%20I%27m%20interested%20in%20your%20services.";

const LOCALE_TEXT: Record<Locale, {
  nav: Record<Section, string>;
  heroRole: string;
  heroSummary: string;
  viewPortfolio: string;
  availableProjects: string;
  contactOptions: string;
  chooseConnect: string;
  whatsapp: string;
  whatsappHelp: string;
  email: string;
  emailHelp: string;
  phoneCall: string;
  call: string;
  hireMe: string;
  close: string;
  selectedProjects: string;
  scrollExplore: string;
  stats: { value: string; label: string }[];
  liveProject: string;
  coreCompetencies: string;
  languages: string;
  proficiency: string;
  contactHeading: string;
  contactText: string;
  linkedIn: string;
  portfolio: string;
  languageLabel: string;
  languageToggle: string;
}> = {
  en: {
    nav: {
      Profile: "Profile",
      Experience: "Experience",
      Projects: "Projects",
      Education: "Education",
      Skills: "Skills",
      Contact: "Contact",
    },
    heroRole: "UX/UI Designer · Helsinki, Finland",
    heroSummary:
      "Certified UX/UI Designer & Web Developer with a strong background in Digital Security and Logistics. Building intuitive interfaces for complex environments and delivering live websites from research through deployment.",
    viewPortfolio: "View Portfolio",
    availableProjects: "Available for projects",
    contactOptions: "Contact options",
    chooseConnect: "Choose how to connect",
    whatsapp: "WhatsApp",
    whatsappHelp: "Open WhatsApp chat",
    email: "Email",
    emailHelp: `Send a message to ${EMAIL}`,
    phoneCall: "Phone Call",
    call: `Call ${PHONE}`,
    hireMe: "Hire me",
    close: "Close",
    selectedProjects: "Selected Projects",
    scrollExplore: "Scroll to explore",
    stats: [
      { value: "10+", label: "Years of experience" },
      { value: "4", label: "Languages spoken" },
      { value: "3", label: "Countries worked in" },
      { value: "∞", label: "Curiosity" },
    ],
    liveProject: "Live project",
    coreCompetencies: "Core competencies",
    languages: "Languages",
    proficiency: "Proficiency",
    contactHeading: "Let's work\ntogether.",
    contactText:
      "Open to freelance UX/UI design projects, product design collaborations, and security-informed interface work.",
    linkedIn: "LinkedIn",
    portfolio: "Portfolio",
    languageLabel: "Language",
    languageToggle: "FI",
  },
  fi: {
    nav: {
      Profile: "Profiili",
      Experience: "Kokemus",
      Projects: "Projektit",
      Education: "Koulutus",
      Skills: "Taidot",
      Contact: "Yhteystiedot",
    },
    heroRole: "UX/UI-suunnittelija · Helsinki, Suomi",
    heroSummary:
      "Sertifioitu UX/UI-suunnittelija ja verkkokehittäjä, jolla on vahva tausta digitaaliturvallisuudessa ja logistiikassa. Teen intuitiivisia käyttöliittymiä haastaviin ympäristöihin ja julkaisen elävät verkkosivustot tutkimuksesta tuotantoon.",
    viewPortfolio: "Näytä portfolio",
    availableProjects: "Vapaa projekteihin",
    contactOptions: "Yhteystavat",
    chooseConnect: "Valitse yhteydenottotapa",
    whatsapp: "WhatsApp",
    whatsappHelp: "Avaa WhatsApp-keskustelu",
    email: "Sähköposti",
    emailHelp: `Lähetä viesti osoitteeseen ${EMAIL}`,
    phoneCall: "Puhelu",
    call: `Soita ${PHONE}`,
    hireMe: "Palkkaa minut",
    close: "Sulje",
    selectedProjects: "Valitut projektit",
    scrollExplore: "Selaa tutustuaksesi",
    stats: [
      { value: "10+", label: "Vuoden kokemus" },
      { value: "4", label: "Puhutut kielet" },
      { value: "3", label: "Työskentelymaita" },
      { value: "∞", label: "Uteliaisuus" },
    ],
    liveProject: "Elävä projekti",
    coreCompetencies: "Ydinosaaminen",
    languages: "Kielet",
    proficiency: "Osaaminen",
    contactHeading: "Tehdään yhteistyötä.",
    contactText:
      "Avoin freelance UX/UI -suunnitteluprojekteihin, tuotesuunnitteluyhteistöihin ja turvallisuuslähtöisiin käyttöliittymäkokemuksiin.",
    linkedIn: "LinkedIn",
    portfolio: "Portfolio",
    languageLabel: "Kieli",
    languageToggle: "EN",
  },
};

const experience = [
  {
    title: {
      en: "Freelance UX/UI Designer & Web Developer",
      fi: "Freelance UX/UI-suunnittelija & Web-kehittäjä",
    },
    company: "Remote / Independent",
    period: "Jan 2024 – Present",
    bullets: {
      en: [
        "Designed and deployed responsive web applications using Figma and HTML/CSS.",
        "Conducted user research and usability testing to improve conversion rates for client websites.",
        "Translated business requirements into high-fidelity prototypes for small business owners.",
      ],
      fi: [
        "Suunnittelin ja toteutin responsiivisia verkkosovelluksia Figmaa ja HTML/CSS:ää käyttäen.",
        "Tein käyttäjätutkimusta ja käytettävyystestausta parantaakseni konversiota asiakasverkkosivuilla.",
        "Muunnettiin liiketoiminnan vaatimukset korkean tarkkuuden prototyypeiksi pienyrityksille.",
      ],
    },
  },
  {
    title: {
      en: "Logistics Coordinator & H&S Deputy",
      fi: "Logistiikan koordinaattori & H&S-varamies",
    },
    company: "Sol henkilöstöpalvelut, Finland",
    period: "Oct 2024 – Present",
    bullets: {
      en: [
        "Coordinating warehouse management and optimizing inventory efficiency.",
        "Acting as First Deputy for Health and Safety, ensuring compliance and risk mitigation.",
        "Developing workflows and improving operational data entry systems.",
      ],
      fi: [
        "Koordinoin varastonhallintaa ja optimoin inventaarion tehokkuutta.",
        "Toimin työturvallisuuden ensimmäisenä varamiehenä varmistaen vaatimusten noudon ja riskien hallinnan.",
        "Kehitin työnkulkuja ja paransin operatiivisia tietojärjestelmiä.",
      ],
    },
  },
  {
    title: {
      en: "Digital Security Specialist",
      fi: "Digitaalisen turvallisuuden asiantuntija",
    },
    company: "Thales Oy, Finland",
    period: "Mar 2022 – Dec 2023",
    bullets: {
      en: [
        "Assessed information security risks and identified system vulnerabilities.",
        "Designed security solutions including encryption and access control protocols.",
        "Conducted forensic investigations and developed security policies.",
      ],
      fi: [
        "Arvioin tietoturvariskejä ja tunnistin järjestelmän haavoittuvuuksia.",
        "Suunnittelin turvallisuusratkaisuja, kuten salaukset ja käyttöoikeuksien hallinnan.",
        "Suoritin oikeuslääketieteellisiä tutkimuksia ja kehitin turvallisuuspolitiikkoja.",
      ],
    },
  },
  {
    title: {
      en: "IT Support Specialist",
      fi: "IT-tukihenkilö",
    },
    company: "Sigma Consell, Tunisia",
    period: "May 2010 – 2012",
    bullets: {
      en: ["Provided software support and resolved complex configuration issues."],
      fi: ["Tarjosin ohjelmistotukea ja ratkaisin monimutkaisia konfiguraatio-ongelmia."],
    },
  },
];

const education = [
  { degree: "Diploma in UX/UI Design", institution: "Software Development Academy", location: "Tallinn, Estonia", year: "2024" },
  { degree: "Bachelor's in Hotel Management", institution: "Belarigia Sousse", location: "Tunisia", year: "2012" },
  { degree: "IT Certificates", institution: "STDA Sousse", location: "Tunisia", year: "2009 & 2011" },
];

const skills = [
  "UX Research & Usability Testing",
  "Wireframing & Prototyping",
  "Figma",
  "User Flows & IA",
  "Visual Design",
  "HTML / CSS",
  "Risk & Threat Analysis",
  "Vulnerability Assessment",
];

const skillBars = [
  { name: "UX Research", pct: 92 },
  { name: "Figma / Prototyping", pct: 95 },
  { name: "Visual Design", pct: 88 },
  { name: "HTML / CSS", pct: 75 },
  { name: "Risk Analysis", pct: 85 },
  { name: "Vulnerability Assessment", pct: 80 },
];

const languages = [
  { lang: "Arabic", level: "Native" },
  { lang: "English", level: "Professional" },
  { lang: "French", level: "Professional" },
  { lang: "Finnish", level: "Professional" },
];

const projects = [
  {
    name: "ASAP Autohuolto",
    url: "https://asapautohuolto.fi/",
    image: asapLogo,
    bio: {
      en: "End-to-end UX/UI and frontend implementation for a Finnish auto service brand.",
      fi: "UX/UI- ja frontend-ratkaisu suomalaiselle autohuoltoyhtiölle.",
    },
  },
  {
    name: "AXA Barber Shop",
    url: "https://www.axabarbershop.fi/",
    image: axaLogo,
    bio: {
      en: "Designed and developed a modern salon website with appointment cues and brand styling.",
      fi: "Suunnittelin ja toteutin modernin kampaamon verkkosivuston ajanvaraus- ja brändityylillä.",
    },
  },
  {
    name: "Sweet Chebbi",
    url: "https://www.sweetchebbi.com/",
    image: sweetLogo,
    bio: {
      en: "Created a clean e-commerce-inspired site for a food and dessert business.",
      fi: "Loin puhtaan verkkokauppamaisen sivuston ruokaa ja jälkiruokia tarjoavalle yritykselle.",
    },
  },
];

const serif = { fontFamily: "'Playfair Display', Georgia, serif" };
const sans = { fontFamily: "'Inter', system-ui, sans-serif" };

function Divider() {
  return <div className="w-full h-px bg-border my-16" />;
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground" style={sans}>
        {label}
      </span>
      <div className="flex-1 h-px bg-border" />
      <span className="text-[11px] text-muted-foreground font-mono">{n}</span>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState<Section>("Profile");
  const [contactPromptOpen, setContactPromptOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>("en");
  const t = LOCALE_TEXT[locale];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSelect = (type: "whatsapp" | "email" | "phone") => {
    setContactPromptOpen(false);

    if (type === "email") {
      window.location.href = `mailto:${EMAIL}`;
      return;
    }

    if (type === "phone") {
      window.location.href = `tel:${PHONE.replace(/[^0-9+]/g, "")}`;
      return;
    }

    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={sans}>

      {/* ── Top nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1280px] mx-auto px-8 h-14 flex items-center justify-between">
          {/* Logo mark */}
          <div
            className="w-8 h-8 border border-foreground flex items-center justify-center text-xs font-bold tracking-widest"
            style={serif}
          >
            D
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((s) => (
              <button
                key={s}
                onClick={() => { setActive(s); scrollTo(s); }}
                className={`text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 ${
                  active === s ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                style={sans}
              >
                {t.nav[s]}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setContactPromptOpen(true)}
              className="inline-flex text-[11px] tracking-[0.15em] uppercase border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-200"
              style={sans}
            >
              {t.hireMe}
            </button>
            <button
              type="button"
              onClick={() => setLocale(locale === "en" ? "fi" : "en")}
              className="inline-flex text-[11px] tracking-[0.15em] uppercase border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-200"
              style={sans}
            >
              {locale === "en" ? "FI" : "EN"}
            </button>
          </div>
        </div>
      </header>

      {contactPromptOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8">
          <div className="w-full max-w-md rounded-[2rem] border border-border bg-background p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2" style={sans}>
                  {t.contactOptions}
                </p>
                <h2 className="text-2xl font-black text-foreground" style={serif}>
                  {t.chooseConnect}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setContactPromptOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {t.close}
              </button>
            </div>

            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => handleContactSelect("whatsapp")}
                className="w-full rounded-full border border-foreground bg-foreground/5 px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-foreground/10 transition"
                style={sans}
              >
                {t.whatsapp}
                <div className="text-[11px] text-muted-foreground">{t.whatsappHelp}</div>
              </button>
              <button
                type="button"
                onClick={() => handleContactSelect("email")}
                className="w-full rounded-full border border-foreground bg-foreground/5 px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-foreground/10 transition"
                style={sans}
              >
                {t.email}
                <div className="text-[11px] text-muted-foreground">{t.emailHelp}</div>
              </button>
              <button
                type="button"
                onClick={() => handleContactSelect("phone")}
                className="w-full rounded-full border border-foreground bg-foreground/5 px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-foreground/10 transition"
                style={sans}
              >
                {t.phoneCall}
                <div className="text-[11px] text-muted-foreground">{t.call}</div>
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <main className="max-w-[1280px] mx-auto px-8 pt-14">

        {/* ── Hero ── */}
        <section id="Profile" className="relative min-h-[calc(100vh-3.5rem)] flex flex-col">

          {/* Name block — large editorial */}
          <div className="pt-20 pb-8 flex-1 flex flex-col justify-center">
            <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-end">

              {/* Left: name + bio */}
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-8" style={sans}>
                  {t.heroRole}
                </p>

                <h1 style={serif} className="leading-none mb-2">
                  <span className="block text-[clamp(4rem,10vw,9rem)] font-black tracking-tight text-foreground">
                    DHIF
                  </span>
                  <span className="block text-[clamp(4rem,10vw,9rem)] font-light tracking-tight text-foreground/30 italic">
                    Mouadh
                  </span>
                </h1>

                <div className="mt-12 max-w-lg">
                  <p className="text-base text-muted-foreground leading-7 font-light">
                    {t.heroSummary}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href="https://dhif216.github.io/Portfolio-darkmode/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-foreground text-background text-xs tracking-[0.15em] uppercase px-6 py-3 hover:bg-foreground/80 transition-colors duration-200"
                      style={sans}
                    >
                      {t.viewPortfolio} <ExternalLink size={11} />
                    </a>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-xs" style={sans}>{t.availableProjects}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: photo */}
              <div className="relative block">
                {/* Decorative border offset */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 border border-border" />
                <img
                  src={profileImage}
                  alt="Dhif Mouadh — UX/UI Designer"
                  className="relative w-full aspect-[3/4] object-cover object-top grayscale"
                />
                {/* Number stamp */}
                <span
                  className="absolute bottom-4 right-4 text-[5rem] font-black text-white/10 leading-none select-none"
                  style={serif}
                >
                  01
                </span>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="pb-8 flex items-center gap-3">
            <div className="w-12 h-px bg-muted-foreground" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground" style={sans}>
              {t.scrollExplore}
            </span>
          </div>
        </section>

        <Divider />

        {/* ── Quick stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {t.stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-black text-foreground mb-1" style={serif}>{value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest" style={sans}>{label}</p>
            </div>
          ))}
        </div>

        <Divider />

        {/* ── Experience ── */}
        <section id="Experience" className="mb-0">
          <SectionLabel n="02" label={t.nav.Experience} />

          <div className="flex flex-col divide-y divide-border">
            {experience.map((job, i) => (
              <div
                key={i}
                className="group grid md:grid-cols-[220px_1fr] gap-6 py-10 hover:bg-secondary/30 -mx-4 px-4 transition-colors duration-200"
              >
                {/* Left */}
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2" style={sans}>
                    {job.period}
                  </p>
                  <p className="text-xs text-muted-foreground/70 leading-relaxed" style={sans}>
                    {job.company}
                  </p>
                </div>
                {/* Right */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground" style={serif}>
                    {job.title[locale]}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {job.bullets[locale].map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" style={sans}>
                        <ChevronRight size={11} className="mt-1 flex-shrink-0 text-foreground/30" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Selected Projects ── */}
        <section id="Projects">
          <SectionLabel n="03" label={t.selectedProjects} />
          <div className="grid gap-6 lg:grid-cols-3 mb-16">
            {projects.map((project) => (
              <FlipCard
                key={project.name}
                data={{
                  name: project.name,
                  image: project.image,
                  bio: project.bio[locale],
                  url: project.url,
                }}
              />
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Education ── */}
        <section id="Education">
          <SectionLabel n="04" label={t.nav.Education} />
          <div className="grid sm:grid-cols-3 gap-6">
            {education.map((edu, i) => (
              <div key={i} className="border border-border p-7 hover:border-foreground/30 transition-colors duration-200">
                <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4" style={sans}>
                  {edu.year}
                </p>
                <h3 className="text-base font-bold text-foreground mb-2 leading-snug" style={serif}>
                  {edu.degree}
                </h3>
                <p className="text-sm text-muted-foreground" style={sans}>{edu.institution}</p>
                <p className="text-xs text-muted-foreground/50 mt-1" style={sans}>{edu.location}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Skills ── */}
        <section id="Skills">
          <SectionLabel n="05" label={t.nav.Skills} />

          <div className="grid md:grid-cols-2 gap-16">
            {/* Skill tags */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-6" style={sans}>
                Core competencies
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs border border-border px-3 py-1.5 text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-all duration-150 cursor-default"
                    style={sans}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-10">
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-5" style={sans}>
                  {t.languages}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map(({ lang, level }) => (
                    <div key={lang} className="flex flex-col">
                      <span className="text-sm text-foreground font-medium" style={sans}>{lang}</span>
                      <span className="text-xs text-muted-foreground" style={sans}>{level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skill bars */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-6" style={sans}>
                {t.proficiency}
              </p>
              <div className="flex flex-col gap-6">
                {skillBars.map(({ name, pct }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-foreground/70" style={sans}>{name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{pct}%</span>
                    </div>
                    <div className="h-px bg-border relative">
                      <div
                        className="absolute top-0 left-0 h-full bg-foreground"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Contact ── */}
        <section id="Contact" className="pb-24">
          <SectionLabel n="06" label={t.nav.Contact} />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-tight mb-6 text-foreground" style={serif}>
                {t.contactHeading}
              </h2>
              <p className="text-muted-foreground text-sm leading-7 max-w-sm" style={sans}>
                {t.contactText}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/dhif-mouadn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors duration-150 border border-border px-4 py-2"
                  style={sans}
                >
                  {t.linkedIn} <ExternalLink size={10} />
                </a>
                <a
                  href="https://dhif216.github.io/Portfolio-darkmode/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors duration-150 border border-border px-4 py-2"
                  style={sans}
                >
                  {t.portfolio} <ExternalLink size={10} />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: <MapPin size={13} />, label: "Location", value: "Helsinki, Finland" },
                { icon: <Phone size={13} />, label: "Phone", value: "+358-449703149", href: "tel:+358449703149" },
                { icon: <Mail size={13} />, label: "Email", value: "Dhif_mousah@hotmail.fr", href: "mailto:Dhif_mousah@hotmail.fr" },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 py-4 border-b border-border group">
                  <span className="text-muted-foreground mt-0.5">{icon}</span>
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-widest uppercase text-muted-foreground mb-0.5" style={sans}>
                      {label}
                    </span>
                    {href ? (
                      <a href={href} className="text-sm text-foreground hover:text-muted-foreground transition-colors duration-150" style={sans}>
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-foreground" style={sans}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border">
        <div className="max-w-[1280px] mx-auto px-8 h-14 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground" style={sans}>
            © 2024 Dhif Mouadh
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground" style={sans}>
            UX/UI Designer · Helsinki
          </span>
        </div>
      </footer>
    </div>
  );
}
