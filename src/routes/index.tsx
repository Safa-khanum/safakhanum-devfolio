import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowDown, ArrowUpRight, Award, BrainCircuit, Cloud, Code2, Database,
  Github, GraduationCap, HeartPulse, Linkedin, Mail, Menu, MessageSquare,
  Music2, Pizza, Server, ShieldCheck, Sparkles, Trophy, X, Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safakhanum Soudagar — Software Engineering Portfolio" },
      { name: "description", content: "Safakhanum Soudagar builds full-stack applications, backend systems, real-time experiences and AI-powered products." },
      { property: "og:title", content: "Safakhanum Soudagar — Software Engineering Portfolio" },
      { property: "og:description", content: "Full-stack applications, backend systems, real-time experiences and AI-powered products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = [
  ["About", "about"], ["Work", "work"], ["Skills", "skills"],
  ["Experience", "experience"], ["Open Source", "open-source"], ["Contact", "contact"],
];

const socialLinks: Record<string, string> = {
  GitHub: "https://github.com/Safa-khanum",
  LinkedIn: "https://www.linkedin.com/in/safakhanum-soudagar-306933357/",
  LeetCode: "https://leetcode.com/u/SafakhanumSoudagar/",
};
const email = "safauiux@gmail.com";

const floatingTech = [
  "React", "TypeScript", "Node.js", "Python", "Java", "PostgreSQL",
  "Spring Boot", "Docker", "MongoDB", "Flask", "WebSockets", "Tailwind CSS",
  "JavaScript", "MySQL", "Google Cloud", "Git", "Express.js", "SQL",
];

const skillGroups = [
  { title: "Languages", icon: Code2, skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C"] },
  { title: "Frontend", icon: Sparkles, skills: ["React", "HTML", "CSS", "Tailwind CSS", "Vite", "shadcn/ui"] },
  { title: "Backend", icon: Server, skills: ["Node.js", "Express.js", "Spring Boot", "Flask", "REST APIs", "WebSockets"] },
  { title: "Databases", icon: Database, skills: ["PostgreSQL", "MySQL", "MongoDB"] },
  { title: "Cloud & DevOps", icon: Cloud, skills: ["Google Cloud", "Docker", "Docker Compose", "GitHub Actions"] },
  { title: "Tools", icon: Zap, skills: ["Git", "GitHub", "Postman", "VS Code"] },
];

type Project = {
  name: string; subtitle: string; description: string; stack: string[];
  highlights: string[]; visual: "health" | "chat" | "pizza" | "career" | "security" | "game" | "sos" | "music" | "care";
  repo?: string;
};

const featuredProjects: Project[] = [
  {
    name: "HepatoScan", subtitle: "Liver Disease Prediction System",
    description: "An AI-powered healthcare app that turns patient parameters into a liver disease prediction, with the full machine-learning workflow behind a clean interface.",
    stack: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "HTML", "CSS", "JavaScript"],
    highlights: ["Data preprocessing and feature engineering", "Model training and evaluation", "Flask backend", "Interactive prediction interface"],
    visual: "health",
  },
  {
    name: "Velora", subtitle: "Real-Time Chat Application",
    description: "A full-stack messaging app built around real-time communication, secure access and conversations that persist.",
    stack: ["React", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "WebSocket", "STOMP/SockJS", "JWT", "Docker", "GitHub Actions"],
    highlights: ["Bidirectional WebSocket messaging", "PostgreSQL message persistence", "REST APIs and JWT authentication", "Docker and GitHub Actions CI/CD"],
    visual: "chat",
  },
  {
    name: "Slice O'Clock", subtitle: "Pizza Delivery Platform",
    description: "A responsive pizza ordering app with a component-based storefront, cart flow and backend services.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Java", "Spring Boot"],
    highlights: ["Responsive ordering experience", "Cart functionality", "Pizza and order management", "Reusable frontend components"],
    visual: "pizza",
  },
];

const otherProjects: Project[] = [
  { name: "PathNova AI", subtitle: "Smart Career Advisor", description: "An AI career experience centered on skills, recommendations, roadmaps and interview preparation.", stack: [], highlights: [], visual: "career" },
  { name: "LLM Safety Gateway", subtitle: "Prompt Security Firewall", description: "A prompt security workflow that analyzes input, assigns a threat score and routes it to allow, sanitize or block.", stack: [], highlights: [], visual: "security", repo: "https://github.com/Safa-khanum/LLM_Safety_Gateway" },
  { name: "CodeQuest", subtitle: "Letter Hunt", description: "A letter-hunt game built around an interactive code quest.", stack: [], highlights: [], visual: "game", repo: "https://github.com/Safa-khanum/CodeQuest-Letter-Hunt" },
  { name: "RescueRipple", subtitle: "Emergency SOS Alert System", description: "An emergency SOS alert system focused on making urgent assistance easier to trigger.", stack: [], highlights: [], visual: "sos" },
  { name: "VibeFinder", subtitle: "Music Discovery & Visualization Tool", description: "A music discovery interface for exploring artists, albums and listening insights.", stack: [], highlights: [], visual: "music", repo: "https://github.com/Safa-khanum/VibeFinder-Music-Tool" },
  { name: "Synapse Care", subtitle: "AI-Powered Holistic Health Assistant", description: "An AI healthcare assistant for chat, report analysis and accessible health information.", stack: [], highlights: [], visual: "care" },
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
      <AmbientBackground />
      <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
        <nav className="content-shell flex h-full items-center justify-between" aria-label="Main navigation">
          <a href="#home" className="brand-mark" aria-label="Safakhanum home">Safakhanum</a>
          <div className="hidden items-center gap-7 xl:flex">
            {navItems.map(([label, target]) => <a key={target} href={`#${target}`} className="nav-link">{label}</a>)}
          </div>
          <div className="hidden items-center gap-1 lg:flex">
            <SocialIcon label="GitHub"><Github /></SocialIcon>
            <SocialIcon label="LinkedIn"><Linkedin /></SocialIcon>
            <SocialIcon label="LeetCode"><Code2 /></SocialIcon>
          </div>
          <Button variant="ghost" size="icon" className="nav-menu-button xl:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
        </nav>
        {menuOpen && <div className="mobile-menu xl:hidden">{navItems.map(([label, target]) => <a key={target} href={`#${target}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight /></a>)}</div>}
      </header>

      <main>
        <section id="home" className="hero-section">
          <FloatingTech />
          <div className="content-shell hero-layout">
            <div className="hero-copy" data-reveal>
              <p className="hero-hello">Hi, I'm</p>
              <h1>Safakhanum<br />Soudagar</h1>
              <p className="hero-role">Software Engineering</p>
              <p className="hero-summary">I build full-stack applications, backend systems and AI-powered products.</p>
              <div className="hero-actions">
                <Button asChild size="lg"><a href="#work">View my work <ArrowDown /></a></Button>
                <Button asChild variant="outline" size="lg"><a href="#contact">Get in touch</a></Button>
              </div>
              <div className="hero-socials">
                <SocialIcon label="GitHub"><Github /></SocialIcon>
                <SocialIcon label="LinkedIn"><Linkedin /></SocialIcon>
                <SocialIcon label="LeetCode"><Code2 /></SocialIcon>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-block" data-reveal>
          <div className="content-shell about-layout">
            <div>
              <p className="section-eyebrow">About</p>
              <h2>A developer who likes building things.</h2>
            </div>
            <div className="about-copy">
              <p>I work across frontend, backend, APIs, real-time applications, databases, AI/ML, cloud and DevOps — using open source to keep learning through real code and collaboration.</p>
              <p>Lately I've been contributing to OpenMRS, which means reading other people's code, debugging it, and making it a little better than I found it.</p>
            </div>
          </div>
        </section>

        <section id="work" className="section-block work-section">
          <div className="content-shell">
            <div className="section-heading-row">
              <div>
                <p className="section-eyebrow">Projects</p>
                <h2>Things I've built</h2>
                <p className="section-sub">A collection of applications, systems and experiments.</p>
              </div>
            </div>
            <div className="featured-projects">
              {featuredProjects.map((project, index) => <FeaturedProject project={project} key={project.name} reverse={index % 2 === 1} />)}
            </div>
            <div className={`other-projects ${showAll ? "is-expanded" : ""}`}>
              {otherProjects.slice(0, showAll ? otherProjects.length : 3).map((project) => <CompactProject project={project} key={project.name} />)}
            </div>
            <div className="center-action">
              <Button variant="outline" size="lg" onClick={() => setShowAll((value) => !value)}>{showAll ? "Show less" : "View all projects"}<ArrowUpRight /></Button>
            </div>
          </div>
        </section>

        <section id="skills" className="section-block" data-reveal>
          <div className="content-shell">
            <div className="section-heading-row">
              <div>
                <p className="section-eyebrow">Skills</p>
                <h2>What I work with</h2>
              </div>
            </div>
            <div className="skills-grid">
              {skillGroups.map(({ title, icon: Icon, skills }) => (
                <article className="skill-card" key={title}>
                  <div className="skill-card-head"><Icon /><h3>{title}</h3></div>
                  <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-block" data-reveal>
          <div className="content-shell experience-layout">
            <div>
              <p className="section-eyebrow">Experience</p>
              <h2>Open Source Contributor</h2>
              <p className="experience-org">OpenMRS</p>
            </div>
            <div className="about-copy">
              <p>I contribute to OpenMRS, an open-source medical record system. It's where I learned what real software development looks like — working inside a large existing codebase instead of starting from a blank file.</p>
              <ul className="experience-list">
                {["Debugging and implementing improvements in an established codebase", "Everyday Git and GitHub workflows", "Collaborating through pull requests and code reviews"].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="open-source" className="section-block" data-reveal>
          <div className="content-shell open-source-layout">
            <div className="rank-display"><strong>Top 50</strong><p>of 5,000+ participants in Elite Coders Winter of Code 2026</p></div>
            <div>
              <p className="section-eyebrow">Open source</p>
              <h2>Learning in public.</h2>
              <p className="section-sub">Programs I've been part of:</p>
              <div className="program-list">{["SWOC", "Open Source Connect", "Code Social", "Elite Coders"].map((item) => <span key={item}>{item}</span>)}</div>
              <a className="leetcode-link" href={socialLinks["LeetCode"]} target="_blank" rel="noreferrer"><Code2 />300+ LeetCode Problems<ArrowUpRight /></a>
            </div>
          </div>
        </section>

        <section id="achievements" className="section-block compact-section" data-reveal>
          <div className="content-shell">
            <p className="section-eyebrow">Recognition</p>
            <h2>Achievements</h2>
            <div className="achievement-grid">
              <Achievement icon={Trophy} value="1st Place" title="PALS–IIT Alumni Think2Impact" detail="Industry Problem Solving Workshop 2026" />
              <Achievement icon={Award} value="Top 50" title="Elite Coders Winter of Code" detail="2026" />
              <Achievement icon={Cloud} value="Champion Tier" title="Google Cloud Study Jam" detail="2025" />
            </div>
          </div>
        </section>

        <section id="education" className="education-section" data-reveal>
          <div className="content-shell education-layout">
            <p className="section-eyebrow">Education</p>
            <Education degree="B.E. Computer Science & Engineering" school="BMS Institute of Technology & Management, Bengaluru" year="2027" />
            <Education degree="Diploma in Computer Science & Engineering" school="Acharya Polytechnic, Bengaluru" year="2024" />
          </div>
        </section>

        <section id="contact" className="contact-section" data-reveal>
          <div className="content-shell contact-inner">
            <h2>Let's build something.</h2>
            <p>Open to software engineering, backend and full-stack opportunities.</p>
            <Button asChild size="lg"><a href={`mailto:${email}`}>Send an email <ArrowUpRight /></a></Button>
            <div className="contact-links">
              <a href={`mailto:${email}`}><Mail />{email}</a>
              <SocialIcon label="GitHub"><Github /></SocialIcon>
              <SocialIcon label="LinkedIn"><Linkedin /></SocialIcon>
              <SocialIcon label="LeetCode"><Code2 /></SocialIcon>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="content-shell">
          <div><strong>Safakhanum Soudagar</strong></div>
          <div><SocialIcon label="GitHub"><Github /></SocialIcon><SocialIcon label="LinkedIn"><Linkedin /></SocialIcon><SocialIcon label="LeetCode"><Code2 /></SocialIcon></div>
        </div>
      </footer>
    </div>
  );
}

function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient-blob blob-a" />
      <div className="ambient-blob blob-b" />
      <div className="ambient-blob blob-c" />
      <div className="ambient-grain" />
    </div>
  );
}

function FloatingTech() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const chips = Array.from(container.querySelectorAll<HTMLElement>(".float-chip"));
    let frame = 0;
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    const onMove = (event: MouseEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    const tick = () => {
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;
      chips.forEach((chip, index) => {
        const depth = 6 + (index % 5) * 5;
        chip.style.setProperty("--px", `${(-currentX * depth).toFixed(2)}px`);
        chip.style.setProperty("--py", `${(-currentY * depth).toFixed(2)}px`);
      });
      frame = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(frame); };
  }, []);

  return (
    <div className="floating-tech" ref={ref} aria-hidden="true">
      {floatingTech.map((tech, index) => (
        <span
          key={tech}
          className={`float-chip chip-size-${(index % 3) + 1} chip-pos-${index + 1}`}
          style={{ animationDelay: `${(index * 0.7) % 6}s`, animationDuration: `${7 + (index % 4) * 1.6}s` }}
        >{tech}</span>
      ))}
    </div>
  );
}

function FeaturedProject({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <article className={`featured-project ${reverse ? "reverse" : ""}`} data-reveal>
      <div className="project-visual-wrap"><ProjectVisual type={project.visual} /></div>
      <div className="project-copy">
        <h3>{project.name}</h3>
        <h4>{project.subtitle}</h4>
        <p>{project.description}</p>
        <ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="tech-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="project-links"><Button asChild variant="outline" size="sm"><a href={project.repo ?? socialLinks["GitHub"]} target="_blank" rel="noopener noreferrer"><Github />GitHub</a></Button></div>
      </div>
    </article>
  );
}

function CompactProject({ project }: { project: Project }) {
  return (
    <article className="compact-project" data-reveal>
      <ProjectVisual type={project.visual} compact />
      <div className="compact-copy">
        <h3>{project.name}</h3>
        <h4>{project.subtitle}</h4>
        <p>{project.description}</p>
        <a className="compact-gh" href={project.repo ?? socialLinks["GitHub"]} target="_blank" rel="noopener noreferrer"><Github />GitHub</a>
      </div>
    </article>
  );
}

function ProjectVisual({ type, compact = false }: { type: Project["visual"]; compact?: boolean }) {
  if (type === "health") return (
    <div className={`project-mockup health-mockup ${compact ? "compact" : ""}`}>
      <div className="mockup-bar"><span /><span /><span /><b>HepatoScan</b></div>
      <div className="health-body">
        <div className="health-params">
          {[["Bilirubin", "1.2"], ["Albumin", "3.4"], ["ALT", "68"], ["Age", "45"]].map(([label, value]) => (
            <div key={label}><small>{label}</small><strong>{value}</strong></div>
          ))}
        </div>
        <div className="health-result">
          <div className="health-gauge"><i /></div>
          <div><small>Model prediction</small><strong>Low risk</strong><em>Confidence 92%</em></div>
        </div>
      </div>
    </div>
  );
  if (type === "chat") return (
    <div className={`project-mockup chat-mockup ${compact ? "compact" : ""}`}>
      <div className="mockup-bar"><span /><span /><span /><b>Velora</b></div>
      <div className="chat-body">
        <aside>
          {["Ava", "Rohan", "Mira"].map((name, i) => (
            <div key={name} className={i === 0 ? "active" : ""}><i /><span>{name}</span><em className="online-dot" /></div>
          ))}
        </aside>
        <div className="chat-thread">
          <p className="msg-in">Did the deploy go through?</p>
          <p className="msg-out">Yes — CI passed, it's live.</p>
          <p className="msg-in">Nice. Checking it now.</p>
          <div className="chat-input"><span>Type a message…</span></div>
        </div>
      </div>
    </div>
  );
  if (type === "pizza") return (
    <div className="project-mockup pizza-mockup">
      <div className="mockup-bar"><span /><span /><span /><b>Slice O'Clock</b></div>
      <div className="pizza-top"><Pizza /><strong>Pizza, made for now.</strong><small>2 items in cart</small></div>
      <div className="pizza-cards">{["Margherita", "Farmhouse", "Veggie"].map((item) => <div key={item}><i /><strong>{item}</strong><button aria-label={`Add ${item}`}>+</button></div>)}</div>
    </div>
  );
  if (type === "music") return (
    <div className="project-mockup music-mockup">
      <div className="mockup-bar"><span /><span /><span /><b>VibeFinder</b></div>
      <div className="album-row"><i /><i /><i /></div>
      <div className="wave">{Array.from({ length: 24 }).map((_, i) => <span key={i} />)}</div>
      <strong>Discover your next sound</strong>
    </div>
  );
  if (type === "security") return (
    <div className="project-mockup security-mockup">
      <div className="mockup-bar"><span /><span /><span /><b>LLM Safety Gateway</b></div>
      <div className="security-body">
        <div className="security-prompt"><ShieldCheck /><span>Analyzing prompt…</span></div>
        <div className="security-score"><small>Threat score</small><strong>0.12</strong><div className="score-bar"><i /></div></div>
        <div className="security-verdict allow">Allow</div>
      </div>
    </div>
  );
  if (type === "career") return (
    <div className="project-mockup career-mockup">
      <div className="mockup-bar"><span /><span /><span /><b>PathNova AI</b></div>
      <div className="career-body">
        <strong>Your roadmap</strong>
        {["Fundamentals", "Build projects", "Interview prep"].map((step, i) => (
          <div key={step} className="career-step"><em>{i + 1}</em><span>{step}</span><i className={i === 0 ? "done" : ""} /></div>
        ))}
      </div>
    </div>
  );
  const icons: Record<string, typeof HeartPulse> = { game: Code2, sos: Zap, care: HeartPulse };
  const Icon = icons[type] ?? BrainCircuit;
  const titles: Record<string, string> = { game: "Letter Hunt", sos: "Emergency response", care: "AI health assistant" };
  return (
    <div className={`project-mockup dashboard-mockup ${type}`}>
      <div className="mockup-bar"><span /><span /><span /><b>{type === "game" ? "CodeQuest" : type === "sos" ? "RescueRipple" : "Synapse Care"}</b></div>
      <div className="dash-body">
        <aside><Icon /><i /><i /><i /></aside>
        <div>
          <div className="dash-title"><strong>{titles[type]}</strong></div>
          <div className="dash-chart"><i /><i /><i /><i /><i /></div>
          <div className="dash-panels"><span /><span /></div>
        </div>
      </div>
    </div>
  );
}

function Achievement({ icon: Icon, value, title, detail }: { icon: typeof Trophy; value: string; title: string; detail: string }) {
  return <article className="achievement-card"><Icon /><strong>{value}</strong><h3>{title}</h3><p>{detail}</p></article>;
}
function Education({ degree, school, year }: { degree: string; school: string; year: string }) {
  return <article className="education-item"><GraduationCap /><div><strong>{degree}</strong><p>{school}</p></div><span>{year}</span></article>;
}
function SocialIcon({ label, children }: { label: string; children: ReactNode }) {
  return <a className="social-link" href={socialLinks[label]} target="_blank" rel="noreferrer" aria-label={label} title={label}>{children}</a>;
}
