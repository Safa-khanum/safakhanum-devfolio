import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDown, ArrowRight, Award, Boxes, BrainCircuit, Check, ChevronRight,
  Cloud, Code2, Database, Download, ExternalLink, Github, GraduationCap,
  HeartPulse, Linkedin, Mail, Menu, MessageSquare, Music2, Network,
  Pizza, Server, ShieldCheck, Sparkles, Trophy, X, Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safakhanum Soudagar | Software Engineer" },
      { name: "description", content: "Software engineer portfolio of Safakhanum Soudagar, featuring full-stack applications, backend systems, real-time experiences, AI-powered products, and open-source work." },
      { property: "og:title", content: "Safakhanum Soudagar | Software Engineer" },
      { property: "og:description", content: "Full-stack applications, backend systems, real-time experiences, and AI-powered products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = [
  ["Home", "home"], ["Work", "work"], ["Skills", "skills"],
  ["Experience", "experience"], ["Open Source", "open-source"], ["Contact", "contact"],
];

const skillGroups = [
  { title: "Languages", icon: Code2, skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C"] },
  { title: "Frontend", icon: Sparkles, skills: ["React", "HTML", "CSS", "Tailwind CSS", "Vite", "shadcn/ui"] },
  { title: "Backend", icon: Server, skills: ["Node.js", "Express.js", "Java", "Spring Boot", "Flask", "REST APIs", "WebSockets"] },
  { title: "Databases", icon: Database, skills: ["PostgreSQL", "MySQL", "MongoDB"] },
  { title: "Cloud / DevOps", icon: Cloud, skills: ["Google Cloud", "Docker", "Docker Compose", "GitHub Actions"] },
  { title: "Tools", icon: Zap, skills: ["Git", "GitHub", "Postman", "VS Code"] },
];

type Project = {
  name: string; subtitle: string; description: string; stack: string[];
  highlights: string[]; visual: "health" | "chat" | "pizza" | "career" | "security" | "game" | "sos" | "music" | "care";
  flow?: string[];
};

const featuredProjects: Project[] = [
  {
    name: "HepatoScan", subtitle: "Liver Disease Prediction System",
    description: "An AI-powered healthcare application that turns patient parameters into an interactive machine-learning prediction workflow.",
    stack: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "HTML", "CSS", "JavaScript"],
    highlights: ["Data preprocessing and feature engineering", "Model training and evaluation", "Flask backend", "Interactive prediction interface"],
    visual: "health", flow: ["Patient data", "Preprocessing", "ML model", "Prediction"],
  },
  {
    name: "Velora", subtitle: "Real-Time Chat Application",
    description: "A full-stack messaging application designed around real-time communication, secure access, and persistent conversations.",
    stack: ["React", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "WebSocket", "STOMP/SockJS", "JWT", "Docker", "GitHub Actions"],
    highlights: ["Bidirectional WebSocket messaging", "PostgreSQL message persistence", "REST APIs and JWT authentication", "Docker and GitHub Actions CI/CD"],
    visual: "chat", flow: ["Client", "React", "Node / Express", "WebSocket + REST", "PostgreSQL"],
  },
  {
    name: "Slice O'Clock", subtitle: "Pizza Delivery Platform",
    description: "A responsive pizza ordering application with a component-based storefront, cart flow, and backend services.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Java", "Spring Boot"],
    highlights: ["Responsive ordering experience", "Cart functionality", "Pizza and order management", "Reusable frontend components"],
    visual: "pizza",
  },
];

const otherProjects: Project[] = [
  { name: "PathNova AI", subtitle: "Smart Career Advisor", description: "An AI career experience centered on skills, recommendations, roadmaps, and interview preparation.", stack: [], highlights: [], visual: "career" },
  { name: "LLM Safety Gateway", subtitle: "Prompt Security Firewall", description: "A prompt security workflow that analyzes input, assigns a threat score, and routes it to allow, sanitize, or block.", stack: [], highlights: [], visual: "security", flow: ["Prompt", "Analysis", "Threat score", "Allow / Sanitize / Block"] },
  { name: "CodeQuest", subtitle: "Letter Hunt", description: "A letter-hunt game project designed around an interactive code quest.", stack: [], highlights: [], visual: "game" },
  { name: "RescueRipple", subtitle: "Emergency SOS Alert System", description: "An emergency SOS alert system focused on making urgent assistance easier to trigger.", stack: [], highlights: [], visual: "sos" },
  { name: "VibeFinder", subtitle: "Music Discovery & Visualization Tool", description: "A music discovery interface for exploring artists, albums, and listening insights.", stack: [], highlights: [], visual: "music" },
  { name: "Synapse Care", subtitle: "AI-Powered Holistic Health Assistant", description: "An AI healthcare assistant experience for chat, report analysis, and accessible health information.", stack: [], highlights: [], visual: "care" },
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: 0.08 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [showAll]);

  return (
    <div className="portfolio-shell">
      <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
        <nav className="content-shell flex h-full items-center justify-between" aria-label="Main navigation">
          <a href="#home" className="brand-mark" aria-label="Safakhanum home"><span>SS</span><strong>SAFAKHANUM</strong></a>
          <div className="hidden items-center gap-6 xl:flex">
            {navItems.map(([label, target]) => <a key={target} href={`#${target}`} className="nav-link">{label}</a>)}
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <SocialLink label="GitHub"><Github /></SocialLink><SocialLink label="LinkedIn"><Linkedin /></SocialLink><SocialLink label="LeetCode"><Code2 /></SocialLink><ResumeButton compact />
          </div>
          <Button variant="ghost" size="icon" className="nav-menu-button xl:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
        </nav>
        {menuOpen && <div className="mobile-menu xl:hidden">{navItems.map(([label, target]) => <a key={target} href={`#${target}`} onClick={() => setMenuOpen(false)}>{label}<ChevronRight /></a>)}<ResumeButton /></div>}
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-ambient" aria-hidden="true"><i /><i /><i /></div>
          <div className="content-shell hero-layout">
            <div className="hero-copy" data-reveal>
              <div className="status-pill"><span className="status-dot" />Available for software engineering opportunities</div>
              <p className="hero-kicker">SAFAKHANUM SOUDAGAR</p>
              <h1>SOFTWARE<br /><span>ENGINEER</span></h1>
              <p className="hero-summary">Building full-stack applications, backend systems, real-time experiences and AI-powered products.</p>
              <div className="hero-actions"><Button asChild size="lg"><a href="#work">View My Work <ArrowDown /></a></Button><ResumeButton large /></div>
              <div className="hero-socials"><span>CONNECT</span><SocialLink label="GitHub"><Github /></SocialLink><SocialLink label="LinkedIn"><Linkedin /></SocialLink><SocialLink label="LeetCode"><Code2 /></SocialLink></div>
            </div>
            <SystemVisual />
          </div>
          <div className="content-shell hero-footer"><span>FULL-STACK</span><span>BACKEND</span><span>REAL-TIME</span><span>AI / ML</span></div>
        </section>

        <section id="about" className="section-block light-section" data-reveal>
          <div className="content-shell about-layout">
            <div><SectionLabel index="01" text="About" /><h2>A SOFTWARE ENGINEER<br />WHO LIKES <em>BUILDING THINGS.</em></h2><p className="lead-copy">I work across frontend, backend, APIs, real-time applications, databases, AI/ML, cloud and DevOps—using open source to keep learning through real code and collaboration.</p></div>
            <div className="principles-grid">{["BUILD", "DEBUG", "SHIP", "IMPROVE"].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><ArrowRight /></div>)}</div>
          </div>
        </section>

        <section id="work" className="section-block dark-section work-section">
          <div className="content-shell"><SectionLabel index="02" text="Selected work" inverse /><div className="section-heading-row"><div><h2>SELECTED <em>WORK</em></h2><p>A collection of applications, systems and experiments I&apos;ve built.</p></div><span className="section-code">PROJECTS / 01—09</span></div>
            <div className="featured-projects">{featuredProjects.map((project, index) => <FeaturedProject project={project} index={index + 1} key={project.name} />)}</div>
            <div className={`other-projects ${showAll ? "is-expanded" : ""}`}>{otherProjects.slice(0, showAll ? otherProjects.length : 3).map((project, index) => <CompactProject project={project} index={index + 4} key={project.name} />)}</div>
            <div className="center-action"><Button variant="outline" size="lg" onClick={() => setShowAll((value) => !value)}>{showAll ? "Show Featured Projects" : "View All Projects"}<ArrowRight /></Button></div>
          </div>
        </section>

        <section id="skills" className="section-block light-section" data-reveal>
          <div className="content-shell"><SectionLabel index="03" text="Capabilities" /><div className="section-heading-row"><div><h2>ENGINEERING <em>STACK</em></h2><p>Tools I use to move from interface to infrastructure.</p></div></div>
            <div className="skills-grid">{skillGroups.map(({ title, icon: Icon, skills }, index) => <article className="skill-card" key={title}><div className="skill-card-head"><span>0{index + 1}</span><Icon /></div><h3>{title}</h3><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
          </div>
        </section>

        <section id="experience" className="section-block dark-section" data-reveal>
          <div className="content-shell"><SectionLabel index="04" text="Experience" inverse /><div className="experience-layout"><div><p className="eyebrow">OPEN SOURCE CONTRIBUTOR</p><h2>ENGINEERING IN<br /><em>EXISTING SYSTEMS.</em></h2><p className="dark-lead">Contributing to OpenMRS while building experience in established codebases, debugging, implementation, and collaborative software development.</p></div><div className="experience-panel"><div className="experience-brand"><Boxes /><div><small>PROJECT</small><strong>OpenMRS</strong></div></div><ul>{["Work with an existing codebase", "Debug and implement improvements", "Use Git and GitHub workflows", "Collaborate through pull requests and code reviews"].map((item) => <li key={item}><Check />{item}</li>)}</ul></div></div></div>
        </section>

        <section id="open-source" className="section-block signal-section" data-reveal>
          <div className="content-shell"><SectionLabel index="05" text="Open source" /><div className="open-source-layout"><div className="rank-display"><span>TOP</span><strong>50</strong><p>of 5,000+ contributors</p></div><div><p className="eyebrow">ELITE CODERS WINTER OF CODE 2026</p><h2>LEARNING IN PUBLIC.<br /><em>BUILDING TOGETHER.</em></h2><div className="program-list">{["SWOC", "Open Source Connect", "Code Social", "Elite Coders"].map((item) => <span key={item}>{item}</span>)}</div></div></div></div>
        </section>

        <section id="achievements" className="section-block light-section compact-section" data-reveal>
          <div className="content-shell"><SectionLabel index="06" text="Recognition" /><h2>ACHIEVEMENTS</h2><div className="achievement-grid"><Achievement icon={Trophy} value="1st Place" title="PALS–IIT Alumni Think2Impact" detail="Industry Problem Solving Workshop 2026" /><Achievement icon={Award} value="Top 50" title="Elite Coders Winter of Code" detail="2026" /><Achievement icon={Cloud} value="Champion Tier" title="Google Cloud Study Jam" detail="2025" /></div></div>
        </section>

        <section id="education" className="education-section" data-reveal><div className="content-shell education-layout"><div><SectionLabel index="07" text="Education" /><p className="education-note">A concise computer science foundation.</p></div><Education degree="B.E. Computer Science & Engineering" school="BMS Institute of Technology & Management, Bengaluru" year="2027" /><Education degree="Diploma in Computer Science & Engineering" school="Acharya Polytechnic, Bengaluru" year="2024" /></div></section>

        <section id="contact" className="contact-section" data-reveal><div className="contact-grid" aria-hidden="true" /><div className="content-shell contact-inner"><p className="hero-kicker">START A CONVERSATION</p><h2>LET&apos;S BUILD<br /><em>SOMETHING.</em></h2><p>Open to software engineering, backend and full-stack opportunities.</p><Button asChild size="lg"><a href="mailto:safakhanumsoudagar@gmail.com">Send an Email <ArrowRight /></a></Button><div className="contact-links"><a href="mailto:safakhanumsoudagar@gmail.com"><Mail />Email</a><SocialText label="GitHub" icon={<Github />} /><SocialText label="LinkedIn" icon={<Linkedin />} /><SocialText label="LeetCode" icon={<Code2 />} /></div></div></section>
      </main>
      <footer><div className="content-shell"><div><strong>Safakhanum Soudagar</strong><span>Software Engineer</span></div><div><span>GitHub</span><span>LinkedIn</span><span>LeetCode</span></div></div></footer>
    </div>
  );
}

function SectionLabel({ index, text, inverse = false }: { index: string; text: string; inverse?: boolean }) { return <div className={`section-label ${inverse ? "inverse" : ""}`}><span>{index}</span><i />{text}</div>; }

function SystemVisual() {
  const nodes = [["React", Code2], ["REST APIs / WebSockets", Network], ["Node.js / Spring Boot", Server], ["PostgreSQL / MySQL", Database], ["Docker / Cloud", Cloud]] as const;
  return <div className="system-visual" data-reveal><div className="system-top"><span><i /> SYSTEM.ARCHITECTURE</span><span>ONLINE</span></div><div className="system-stack">{nodes.map(([label, Icon], index) => <div className="contents" key={label}><div className="system-node"><span>0{index + 1}</span><Icon /><strong>{label}</strong><i /></div>{index < nodes.length - 1 && <div className="system-line"><ArrowDown /></div>}</div>)}</div><div className="system-readout"><span>FULL STACK PIPELINE</span><strong>BUILD → SHIP → IMPROVE</strong></div></div>;
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return <article className={`featured-project ${index % 2 === 0 ? "reverse" : ""}`} data-reveal><div className="project-visual-wrap"><ProjectVisual type={project.visual} flow={project.flow} /><span className="project-number">0{index}</span></div><div className="project-copy"><p className="project-kicker">FEATURED PROJECT / 0{index}</p><h3>{project.name}</h3><h4>{project.subtitle}</h4><p>{project.description}</p><ul>{project.highlights.map((item) => <li key={item}><Check />{item}</li>)}</ul><div className="tech-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><UnavailableGithub /></div></article>;
}

function CompactProject({ project, index }: { project: Project; index: number }) {
  return <article className="compact-project" data-reveal><ProjectVisual type={project.visual} flow={project.flow} compact /><div className="compact-copy"><span>0{index}</span><h3>{project.name}</h3><h4>{project.subtitle}</h4><p>{project.description}</p><UnavailableGithub /></div></article>;
}

function ProjectVisual({ type, flow, compact = false }: { type: Project["visual"]; flow?: string[]; compact?: boolean }) {
  const icons: Record<Project["visual"], typeof HeartPulse> = { health: HeartPulse, chat: MessageSquare, pizza: Pizza, career: BrainCircuit, security: ShieldCheck, game: Code2, sos: Zap, music: Music2, care: HeartPulse };
  const Icon = icons[type];
  if (flow) return <div className={`project-mockup flow-mockup ${compact ? "compact" : ""}`}><div className="mockup-bar"><span /><span /><span /><b>{type}.system</b></div><div className="flow-steps">{flow.map((step, index) => <div className="contents" key={step}><div><Icon /><span>{step}</span></div>{index < flow.length - 1 && <ArrowDown />}</div>)}</div></div>;
  if (type === "pizza") return <div className="project-mockup pizza-mockup"><div className="mockup-bar"><span /><span /><span /><b>slice-o-clock</b></div><div className="pizza-top"><Pizza /><strong>Pizza, made for now.</strong><small>2 items · ₹—</small></div><div className="pizza-cards">{["Margherita", "Farmhouse", "Veggie"].map((item) => <div key={item}><i /><strong>{item}</strong><button aria-label={`Add ${item}`}>+</button></div>)}</div></div>;
  if (type === "music") return <div className="project-mockup music-mockup"><div className="mockup-bar"><span /><span /><span /><b>vibefinder</b></div><div className="album-row"><i /><i /><i /></div><div className="wave">{Array.from({ length: 24 }).map((_, i) => <span key={i} />)}</div><strong>Discover your next sound</strong></div>;
  return <div className={`project-mockup dashboard-mockup ${type}`}><div className="mockup-bar"><span /><span /><span /><b>{type}.workspace</b></div><div className="dash-body"><aside><Icon /><i /><i /><i /></aside><div><div className="dash-title"><strong>{type === "career" ? "Your roadmap" : type === "sos" ? "Emergency response" : type === "game" ? "Letter Hunt" : "AI health assistant"}</strong><span>LIVE</span></div><div className="dash-chart"><i /><i /><i /><i /><i /></div><div className="dash-panels"><span /><span /></div></div></div></div>;
}

function Achievement({ icon: Icon, value, title, detail }: { icon: typeof Trophy; value: string; title: string; detail: string }) { return <article className="achievement-card"><div><Icon /><span>RECOGNITION</span></div><strong>{value}</strong><h3>{title}</h3><p>{detail}</p></article>; }
function Education({ degree, school, year }: { degree: string; school: string; year: string }) { return <article className="education-item"><span>{year}</span><GraduationCap /><div><strong>{degree}</strong><p>{school}</p></div></article>; }
function ResumeButton({ compact = false, large = false }: { compact?: boolean; large?: boolean }) { return <Button variant="outline" size={large ? "lg" : compact ? "sm" : "default"} disabled title="Resume file was not available"><Download />Resume unavailable</Button>; }
function UnavailableGithub() { return <Button variant="ghost" disabled title="Repository link was not available"><Github />GitHub unavailable</Button>; }
function SocialLink({ label, children }: { label: string; children: ReactNode }) { return <span className="social-link" aria-label={`${label} link unavailable`} title={`${label} link was not available`}>{children}</span>; }
function SocialText({ label, icon }: { label: string; icon: ReactNode }) { return <span className="social-text" title={`${label} link was not available`}>{icon}{label}<ExternalLink /></span>; }
