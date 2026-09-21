import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Network,
  Phone,
  Server,
  Sparkles,
  Trophy,
  UserRound,
  X,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safakhanum Soudagar | Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Safakhanum Soudagar, a software engineer focused on backend systems, full-stack products, Java, Spring Boot, Node.js, React, REST APIs, WebSockets, MySQL, Docker, and Google Cloud.",
      },
      { property: "og:title", content: "Safakhanum Soudagar | Software Engineer" },
      {
        property: "og:description",
        content:
          "Backend and full-stack developer building real-time applications, REST APIs, and scalable software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const navItems = ["About", "Skills", "Experience", "Projects", "Achievements", "Contact"];

const skillGroups = [
  { title: "Languages", icon: Code2, skills: ["Java", "Python", "SQL", "C"] },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Flask", "Spring Boot"],
  },
  { title: "Frontend", icon: Sparkles, skills: ["React", "JavaScript", "HTML", "CSS"] },
  { title: "Databases", icon: Database, skills: ["MySQL", "MongoDB"] },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Google Cloud", "Docker", "Jenkins", "Maven", "Gradle"],
  },
  { title: "Developer Tools", icon: Zap, skills: ["Git", "GitHub", "Postman", "VS Code"] },
  {
    title: "Core CS",
    icon: Network,
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

type Project = {
  name: string;
  shortName: string;
  number: string;
  description: string;
  stack: string[];
  highlights: string[];
  details: string[];
  flow: string[];
  accent: string;
  metric?: string;
};

const projects: Project[] = [
  {
    name: "Velora – Real-time Chat Application",
    shortName: "Velora",
    number: "01",
    description:
      "A modular real-time chat application built for low-latency, bidirectional communication and maintainable growth.",
    stack: ["Java", "Spring Boot", "WebSockets", "MySQL", "Docker", "Jenkins", "Maven", "Gradle"],
    highlights: ["Real-time communication", "Spring Boot", "WebSockets", "MySQL", "Docker"],
    details: [
      "Designed and developed low-latency bidirectional communication using Java, Spring Boot, WebSockets, and MySQL.",
      "Developed RESTful APIs for authentication, messaging, and concurrent client communication.",
      "Designed modular backend services and optimized MySQL schemas for scalability and maintainability.",
    ],
    flow: ["Client", "REST APIs / WebSockets", "Spring Boot", "MySQL"],
    accent: "cyan",
  },
  {
    name: "HepatoPredict – Liver Disease Prediction System",
    shortName: "HepatoPredict",
    number: "02",
    description:
      "A machine-learning application that processes healthcare data and serves real-time liver disease predictions through an API.",
    stack: ["Python", "Flask", "Machine Learning", "Pandas", "NumPy"],
    highlights: ["Data preprocessing", "Prediction API", "Flask", "Pandas", "NumPy"],
    details: [
      "Developed a machine-learning application for liver disease prediction using healthcare datasets.",
      "Built preprocessing pipelines with Pandas and NumPy and trained a model achieving 87% accuracy.",
      "Created Flask REST APIs to deliver real-time predictions and support backend integration.",
    ],
    flow: ["Dataset", "Preprocessing", "Machine Learning Model", "Prediction API"],
    accent: "mint",
    metric: "87% Model Accuracy",
  },
  {
    name: "Slice-o-Clock – Pizza Delivery Platform",
    shortName: "Slice-o-Clock",
    number: "03",
    description:
      "A full-stack pizza ordering platform with a responsive interface and structured backend order workflows.",
    stack: ["React", "TypeScript", "Java", "REST APIs", "MySQL"],
    highlights: ["Authentication", "Menu Management", "Shopping Cart", "Order Processing", "REST APIs", "MySQL"],
    details: [
      "Built a full-stack pizza ordering application with responsive user interfaces and backend functionality.",
      "Developed REST APIs for authentication, menu management, shopping cart, and order processing.",
      "Organized backend modules and improved the MySQL database design for scalability and maintainability.",
    ],
    flow: ["React Interface", "REST APIs", "Java Backend", "MySQL"],
    accent: "peach",
  },
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
        <nav className="content-shell flex h-full items-center justify-between" aria-label="Main navigation">
          <a href="#home" className="group flex items-center gap-2.5" aria-label="Safakhanum Soudagar home">
            <span className="flex size-8 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground transition-transform group-hover:-rotate-3">SS</span>
            <span className="hidden text-sm font-semibold sm:inline">Safakhanum Soudagar</span>
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            ))}
          </div>
          <div className="hidden items-center gap-1 lg:flex">
            <UnavailableLink icon={<Github />} label="GitHub" />
            <UnavailableLink icon={<Linkedin />} label="LinkedIn" />
            <UnavailableLink icon={<Code2 />} label="LeetCode" />
            <ResumeButton compact />
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </nav>
        {menuOpen && (
          <div className="mobile-menu lg:hidden">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}<ChevronRight className="size-4" /></a>
            ))}
            <ResumeButton />
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero-section scroll-mt-24">
          <div className="hero-grid content-shell">
            <div className="relative z-10 pt-12 md:pt-20">
              <div className="status-pill"><span className="status-dot" />Open to software engineering opportunities</div>
              <p className="mt-8 font-mono text-xs font-semibold uppercase text-primary">Hello, I&apos;m</p>
              <h1 className="hero-name mt-3">Safakhanum<br />Soudagar<span className="text-primary">.</span></h1>
              <h2 className="mt-6 max-w-2xl text-xl font-semibold text-foreground md:text-2xl">Software Engineer <span className="text-muted-foreground">| Backend &amp; Full-Stack Developer</span></h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">Computer Science &amp; Engineering student building scalable backend systems, REST APIs, real-time applications, and full-stack products.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg"><a href="#projects">View my work <ArrowDown /></a></Button>
                <ResumeButton large />
              </div>
              <div className="mt-8 flex items-center gap-2">
                <span className="mr-2 text-xs font-medium uppercase text-muted-foreground">Find me on</span>
                <UnavailableLink icon={<Github />} label="GitHub" bordered />
                <UnavailableLink icon={<Linkedin />} label="LinkedIn" bordered />
                <UnavailableLink icon={<Code2 />} label="LeetCode" bordered />
              </div>
            </div>
            <SystemVisual />
          </div>
          <div className="content-shell mt-14 grid grid-cols-2 border-y border-border md:grid-cols-4">
            {[
              ["03", "Featured projects"],
              ["Top 50", "ECWoC contributor"],
              ["87%", "Model accuracy"],
              ["8.16", "B.E. CGPA"],
            ].map(([value, label], index) => (
              <div key={label} className={`hero-stat ${index % 2 === 1 ? "border-l" : ""} ${index > 0 ? "md:border-l" : ""}`}>
                <strong>{value}</strong><span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section-block scroll-mt-20" data-reveal>
          <div className="content-shell">
            <SectionHeading index="01" eyebrow="About" title="Engineering with structure and purpose." />
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
              <div className="space-y-5 text-lg leading-8 text-muted-foreground">
                <p>I&apos;m a Computer Science &amp; Engineering student focused on building reliable software from the backend outward. My work spans Java and Spring Boot services, JavaScript and Node.js APIs, databases, and responsive React interfaces.</p>
                <p>I enjoy translating product needs into modular systems—from real-time WebSocket communication to machine-learning APIs—and strengthening my engineering practice through open-source collaboration, Docker, and cloud technologies.</p>
                <div className="flex flex-wrap gap-2 pt-3">
                  {["Backend systems", "REST APIs", "Real-time apps", "Open source"].map((item) => <Badge key={item} variant="secondary" className="px-3 py-1.5">{item}</Badge>)}
                </div>
              </div>
              <div className="education-spotlight">
                <div className="flex items-start justify-between"><GraduationCap className="size-7 text-primary" /><span className="font-mono text-xs text-muted-foreground">2024—2027</span></div>
                <p className="mt-10 text-sm font-medium text-primary">B.E. CSE</p>
                <p className="mt-2 text-4xl font-bold">8.16 <span className="text-base font-medium text-muted-foreground">CGPA</span></p>
                <p className="mt-6 text-sm leading-6 text-muted-foreground">BMS Institute of Technology and Management, Bengaluru</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-block section-tint scroll-mt-20" data-reveal>
          <div className="content-shell">
            <SectionHeading index="02" eyebrow="Technical toolkit" title="Built for the full software lifecycle." description="A focused stack across application development, data, infrastructure, and core computer science." />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map(({ title, icon: Icon, skills }, index) => (
                <article key={title} className={`skill-card ${index === 6 ? "lg:col-span-3" : ""}`}>
                  <div className="flex items-center gap-3"><span className="icon-box"><Icon /></span><h3>{title}</h3></div>
                  <div className="mt-5 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="skill-tag">{skill}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-block scroll-mt-20" data-reveal>
          <div className="content-shell">
            <SectionHeading index="03" eyebrow="Experience" title="Learning in public. Shipping in community." />
            <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_320px]">
              <article className="timeline-entry">
                <span className="timeline-dot"><BriefcaseBusiness /></span>
                <div>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div><p className="font-mono text-xs uppercase text-primary">Open source</p><h3 className="mt-2 text-2xl font-bold">Open Source Contributor</h3></div>
                    <span className="date-pill">2026 — Present</span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    {[
                      "Developed features and fixed bugs in open-source projects using Git and GitHub.",
                      "Collaborated through pull requests, issue discussions, and code reviews.",
                      "Ranked among the Top 50 contributors out of 5,000+ participants in Elite Coders Winter of Code (ECWoC).",
                    ].map((item) => <li key={item}><Check /> <span>{item}</span></li>)}
                  </ul>
                </div>
              </article>
              <aside className="rank-card"><Trophy /><p className="mt-8 text-sm font-medium uppercase">Elite Coders Winter of Code</p><strong className="mt-2 block text-6xl">Top 50</strong><p className="mt-2 text-sm text-primary-foreground/70">out of 5,000+ participants</p></aside>
            </div>
          </div>
        </section>

        <section id="projects" className="section-block project-band scroll-mt-20" data-reveal>
          <div className="content-shell">
            <SectionHeading index="04" eyebrow="Selected work" title="Projects that solve real problems." description="Backend-first systems, full-stack products, and applied machine learning—designed with maintainability in mind." />
            <div className="mt-12 space-y-5">
              {projects.map((project, index) => <ProjectCard project={project} featured={index === 0} key={project.name} />)}
            </div>
          </div>
        </section>

        <section id="achievements" className="section-block scroll-mt-20" data-reveal>
          <div className="content-shell">
            <SectionHeading index="05" eyebrow="Recognition" title="Milestones worth measuring." />
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <Achievement icon={Trophy} kicker="PALS Think2Impact 2026" title="Winner — 1st Place" text="Recognized with first place at PALS Think2Impact 2026." />
              <Achievement icon={Cloud} kicker="Google Cloud Skills Program 2026" title="Hands-on cloud learning" text="Experience with cloud computing, networking, APIs, and cloud services." />
              <Achievement icon={Award} kicker="Elite Coders Winter of Code" title="Top 50 Contributor" text="Ranked among the Top 50 out of 5,000+ participants." />
            </div>
          </div>
        </section>

        <section id="education" className="section-block section-tint" data-reveal>
          <div className="content-shell">
            <SectionHeading index="06" eyebrow="Education" title="A strong computer science foundation." />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <EducationCard degree="B.E. Computer Science and Engineering" school="BMS Institute of Technology and Management, Bengaluru" years="2024—2027" score="8.16 / 10" />
              <EducationCard degree="Diploma in Computer Science and Engineering" school="Acharya Polytechnic, Bengaluru" years="2022—2024" score="8.85 / 10" />
            </div>
          </div>
        </section>

        <section id="profiles" className="section-block" data-reveal>
          <div className="content-shell">
            <SectionHeading index="07" eyebrow="Developer profiles" title="Code, progress, and professional connection." />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <ProfileCard icon={Github} name="GitHub" description="Projects and open-source work" />
              <ProfileCard icon={Linkedin} name="LinkedIn" description="Professional profile and milestones" />
              <ProfileCard icon={Code2} name="LeetCode" description="Problem-solving practice" />
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">Profile URLs were not available in the supplied content.</p>
          </div>
        </section>

        <section id="contact" className="contact-section scroll-mt-20" data-reveal>
          <div className="content-shell grid items-end gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase text-contact-muted">Have a project or opportunity?</p>
              <h2 className="mt-5 max-w-3xl text-5xl font-bold leading-tight text-primary-foreground md:text-7xl">Let&apos;s build something meaningful.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-contact-muted">I&apos;m interested in software engineering opportunities and collaborations where thoughtful systems create real value.</p>
            </div>
            <div className="flex flex-col gap-3 lg:min-w-72">
              <Button asChild size="lg" variant="secondary"><a href="mailto:safakhanumsoudagar@gmail.com"><Mail /> Send an email</a></Button>
              <ResumeButton large inverted />
            </div>
          </div>
          <div className="content-shell mt-16 grid gap-6 border-t border-contact-border pt-8 sm:grid-cols-2 lg:grid-cols-3">
            <a className="contact-link" href="mailto:safakhanumsoudagar@gmail.com"><Mail /><span><small>Email</small>safakhanumsoudagar@gmail.com</span></a>
            <a className="contact-link" href="tel:+919686804315"><Phone /><span><small>Phone</small>+91 9686804315</span></a>
            <div className="flex items-center gap-2 lg:justify-end"><UnavailableLink icon={<Github />} label="GitHub" inverted /><UnavailableLink icon={<Linkedin />} label="LinkedIn" inverted /><UnavailableLink icon={<Code2 />} label="LeetCode" inverted /></div>
          </div>
        </section>
      </main>
      <footer className="bg-primary py-6 text-primary-foreground"><div className="content-shell flex flex-col justify-between gap-2 text-xs text-contact-muted sm:flex-row"><span>© 2026 Safakhanum Soudagar</span><span>Software Engineer · Bengaluru</span></div></footer>
    </div>
  );
}

function SectionHeading({ index, eyebrow, title, description }: { index: string; eyebrow: string; title: string; description?: string }) {
  return <div className="grid gap-5 md:grid-cols-[140px_1fr]"><div className="flex items-center gap-3 self-start pt-2 font-mono text-xs font-semibold uppercase text-primary"><span>{index}</span><span className="h-px w-8 bg-primary/40" />{eyebrow}</div><div><h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">{title}</h2>{description && <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{description}</p>}</div></div>;
}

function SystemVisual() {
  const nodes = [{ icon: UserRound, label: "Client" }, { icon: Network, label: "REST API" }, { icon: Server, label: "Backend" }, { icon: Database, label: "Database" }, { icon: Cloud, label: "Cloud" }];
  return <div className="system-visual" aria-label="Software system architecture: Client to REST API to Backend to Database and Cloud"><div className="code-caption"><span /> system.architecture</div><div className="system-stack">{nodes.map(({ icon: Icon, label }, index) => <div key={label} className="contents"><div className={`system-node system-node-${index}`}><span><Icon /></span><div><small>0{index + 1}</small><strong>{label}</strong></div><span className="system-ok">●</span></div>{index < nodes.length - 1 && <div className="flow-line"><ArrowDown /></div>}</div>)}</div><div className="visual-grid" /></div>;
}

function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  return <Dialog><article className={`project-card ${featured ? "project-featured" : ""}`}><div className="project-copy"><div className="flex items-center gap-3"><span className="font-mono text-xs text-primary">PROJECT / {project.number}</span>{featured && <Badge>Featured</Badge>}{project.metric && <Badge variant="secondary">{project.metric}</Badge>}</div><h3 className="mt-6 text-3xl font-bold md:text-4xl">{project.shortName}</h3><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.highlights.map((item) => <span className="skill-tag" key={item}>{item}</span>)}</div><div className="mt-8 flex flex-wrap gap-3"><DialogTrigger asChild><Button>Explore project <ArrowRight /></Button></DialogTrigger><Button disabled variant="outline" title="Repository URL was not available"><Github /> GitHub unavailable</Button></div></div><ArchitectureFlow flow={project.flow} accent={project.accent} /></article><ProjectDialog project={project} /></Dialog>;
}

function ProjectDialog({ project }: { project: Project }) {
  return <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border-border bg-background p-0"><div className="border-b border-border bg-secondary/50 p-6 md:p-8"><DialogHeader><p className="font-mono text-xs text-primary">PROJECT / {project.number}</p><DialogTitle className="mt-2 pr-8 text-3xl">{project.name}</DialogTitle><DialogDescription className="pt-2 text-base leading-7">{project.description}</DialogDescription></DialogHeader></div><div className="grid gap-8 p-6 md:grid-cols-[1.15fr_.85fr] md:p-8"><div><h4 className="detail-label">Key implementation</h4><ul className="mt-4 space-y-4">{project.details.map((detail) => <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={detail}><Check className="mt-1 size-4 shrink-0 text-primary" />{detail}</li>)}</ul><h4 className="detail-label mt-8">Technical stack</h4><div className="mt-4 flex flex-wrap gap-2">{project.stack.map((item) => <Badge variant="secondary" key={item}>{item}</Badge>)}</div></div><div><h4 className="detail-label">Architecture</h4><ArchitectureFlow flow={project.flow} accent={project.accent} compact /></div></div><div className="flex items-center justify-between border-t border-border px-6 py-5 md:px-8"><span className="text-xs text-muted-foreground">Repository URL not provided</span><Button disabled variant="outline"><Github /> GitHub</Button></div></DialogContent>;
}

function ArchitectureFlow({ flow, accent, compact = false }: { flow: string[]; accent: string; compact?: boolean }) {
  return <div className={`architecture ${compact ? "architecture-compact" : ""}`} data-accent={accent}><div className="architecture-top"><span>ARCHITECTURE</span><span>LIVE</span></div><div className="architecture-flow">{flow.map((step, index) => <div className="contents" key={step}><div className="architecture-node"><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span><strong>{step}</strong></div>{index < flow.length - 1 && <div className="architecture-arrow"><ArrowDown /></div>}</div>)}</div></div>;
}

function Achievement({ icon: Icon, kicker, title, text }: { icon: typeof Trophy; kicker: string; title: string; text: string }) {
  return <article className="achievement-card"><Icon className="size-7 text-primary" /><p className="mt-8 font-mono text-xs font-semibold uppercase text-primary">{kicker}</p><h3 className="mt-3 text-2xl font-bold">{title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p></article>;
}

function EducationCard({ degree, school, years, score }: { degree: string; school: string; years: string; score: string }) {
  return <article className="education-card"><div className="flex items-center justify-between"><span className="icon-box"><GraduationCap /></span><span className="date-pill">{years}</span></div><h3 className="mt-8 text-xl font-bold">{degree}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{school}</p><div className="mt-8 border-t border-border pt-5"><span className="text-xs uppercase text-muted-foreground">CGPA</span><strong className="ml-3 text-xl">{score}</strong></div></article>;
}

function ProfileCard({ icon: Icon, name, description }: { icon: typeof Github; name: string; description: string }) {
  return <div className="profile-card" aria-disabled="true" title={`${name} URL was not available`}><span className="icon-box"><Icon /></span><div><h3 className="font-bold">{name}</h3><p className="mt-1 text-sm text-muted-foreground">{description}</p></div><span className="ml-auto text-xs text-muted-foreground">Link unavailable</span></div>;
}

function ResumeButton({ compact = false, large = false, inverted = false }: { compact?: boolean; large?: boolean; inverted?: boolean }) {
  return <Button variant={inverted ? "secondary" : "outline"} size={large ? "lg" : compact ? "sm" : "default"} disabled title="Resume PDF was not included in the available upload"><Download /> Resume unavailable</Button>;
}

function UnavailableLink({ icon, label, bordered = false, inverted = false }: { icon: React.ReactNode; label: string; bordered?: boolean; inverted?: boolean }) {
  return <span className={`social-icon ${bordered ? "social-bordered" : ""} ${inverted ? "social-inverted" : ""}`} aria-label={`${label} link unavailable`} title={`${label} URL was not available`}>{icon}</span>;
}