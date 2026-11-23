import { useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, Moon, MoreHorizontal, Sun, X, Folder } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { achievements, education, experience, media, personalInfo, projects, skillGroups } from "@/data/portfolio-data";

const northStar = "By January 2027, I am running an AI automation agency with 3 paying clients generating $5K/month.";
const headline = "I bridge the gap between enterprise architecture and Applied AI.";
const email = `mailto:${personalInfo.email}`;
const clean = (t: string) => t.replace(/\s*—\s*/g, ". ");
const dateLabel = (v: string | null) => {
  if (!v) return "Present";
  const [y, m] = v.split("-").map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString("en-US", { month: "short", year: "numeric" });
};
const pick = (ids: string[]) => skillGroups.filter(g => ids.includes(g.id)).flatMap(g => g.skills);
const stack = [
  { title: "Applied AI & Machine Learning", note: "Agents, retrieval, prompt design", skills: pick(["skill-ai"]) },
  { title: "Languages & Frameworks", note: "Full-stack builds and APIs", skills: pick(["skill-frontend", "skill-backend"]) },
  { title: "Cloud, Data & Delivery", note: "Storage, deployment, shipping", skills: pick(["skill-data", "skill-cloud"]) },
];

const codeWall = `const raju = {
  name: "${personalInfo.firstName} ${personalInfo.lastName}", alias: "RJ",
  role: "${personalInfo.title} & Applied AI builder",
  experience: [
${experience.map(j => `    { role: "${j.role}", company: "${j.company}",\n      since: "${dateLabel(j.startDate)}", status: "${j.current ? "Current" : "Shipped"}" },`).join("\n")}
  ],
  projects: {
${projects.map(p => `    "${p.name}": "${p.tagline}",`).join("\n")}
  },
  skills: [${stack.flatMap(s => s.skills).map(s => `"${s}"`).join(", ")}],
  northStar: "${northStar}",
  email: "${personalInfo.email}",
  github: "https://github.com/RJBOGA",
  linkedin: "https://linkedin.com/in/rjboga"
};

export default function Portfolio() {
  return <main>
    <header><h1>{raju.name}</h1><p>{raju.role}</p></header>
    <section><h2>Experience</h2>{raju.experience.map(job => <Job {...job} />)}</section>
    <section><h2>Projects</h2>{Object.keys(raju.projects).map(p => <Project name={p} />)}</section>
    <footer><a href={"mailto:" + raju.email}>Let's talk AI Architecture.</a></footer>
  </main>;
}
`;

function CodeWall() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)").matches) return;
    let frame = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        ref.current?.style.setProperty("--mx", `${e.clientX}px`);
        ref.current?.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { window.removeEventListener("pointermove", move); cancelAnimationFrame(frame); };
  }, []);
  const text = codeWall.repeat(3);
  return <div ref={ref} className="v3-codewall" aria-hidden="true">
    <pre className="v3-code-base">{text}</pre>
    <pre className="v3-code-lit" data-testid="code-flashlight">{text}</pre>
  </div>;
}

const menuMain = [{ href: "#projects", label: "Projects" }, { href: "#about", label: "About" }, { href: "#contact", label: "Contact" }];
const menuMore = [{ href: "#skills", label: "Skills" }, { href: "#experience", label: "Experience" }, { href: "#recognition", label: "Recognition" }];

function Socials() {
  return <div className="v3-socials">
    <a href="https://linkedin.com/in/rjboga" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
    <a href="https://github.com/RJBOGA" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
    <a href={email} aria-label="Email"><Mail /></a>
  </div>;
}

export default function PortfolioV3() {
  const [dark, setDark] = useState(() => localStorage.getItem("v3-theme") === "dark");
  const [menu, setMenu] = useState(false);
  const [openProject, setOpenProject] = useState(projects[0].id);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("v3-theme", dark ? "dark" : "light");
  }, [dark]);
  const active = projects.find(p => p.id === openProject)!;
  const activeIndex = projects.indexOf(active);

  return <div className="v3">
    <a href="#main-content" className="v3-skip">Skip to content</a>
    <CodeWall />
    <header className="v3-pill">
      <a href="#top" className="v3-pill-name">Raju</a>
      <button className="v3-icon-btn" onClick={() => setDark(!dark)} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>{dark ? <Sun /> : <Moon />}</button>
      <button className="v3-dots" onClick={() => setMenu(true)} aria-label="Open menu" aria-expanded={menu}><MoreHorizontal /></button>
    </header>

    <Sheet open={menu} onOpenChange={setMenu}>
      <SheetContent side="right" className="v3-menu [&>button:last-child]:hidden">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <SheetDescription className="sr-only">Site navigation</SheetDescription>
        <SheetClose className="v3-close"><span>close</span><span className="v3-close-x"><X /></span></SheetClose>
        <nav className="v3-menu-nav" aria-label="Menu">
          <div className="v3-menu-big">{menuMain.map(l => <a key={l.href} href={l.href} onClick={() => setMenu(false)}>{l.label}</a>)}</div>
          <div className="v3-menu-small">{menuMore.map(l => <a key={l.href} href={l.href} onClick={() => setMenu(false)}>{l.label}</a>)}</div>
        </nav>
        <div className="v3-menu-foot"><a href={email}>{personalInfo.email}</a><Socials /></div>
      </SheetContent>
    </Sheet>

    <main id="main-content">
      <section id="top" className="v3-hero" data-testid="hero-section">
        <h1 className="v3-hero-title"><span className="v3-bracket">&lt;</span>SENIOR SOFTWARE<br />ENGINEER<span className="v3-bracket">/&gt;</span></h1>
        <div className="v3-hero-row">
          <span className="v3-year">©2026</span>
          <img src={media.portraitFormal} alt="Portrait of Raju" className="v3-portrait" />
          <span className="v3-tagline">{"{{ /ENTERPRISE & APPLIED AI "}<span className="v3-caret" />{" }}"}</span>
        </div>
      </section>

      <section id="about" className="v3-section v3-intro" data-testid="bio-section">
        <h2>Hi, I'm <em>RJ.</em></h2>
        <p className="v3-lead">{headline}</p>
        <div className="v3-intro-grid">
          <div className="v3-card"><p className="v3-label">Currently at</p><strong>Citi</strong><p>Senior Software Engineer</p><p className="v3-muted">United States</p></div>
          <div>
            <p>{personalInfo.bioLead}</p>
            <p className="v3-muted">{clean(personalInfo.bio)}</p>
            <p className="v3-muted">I am building toward launching a B2B AI automation agency. From shipping secure, mission-critical full-stack apps at Citi to building conversational AI products that solve real-world problems.</p>
            <a href={email} className="v3-btn">Email me to talk AI Architecture <ArrowUpRight /></a>
          </div>
        </div>
        <div className="v3-north" id="north-star">
          <p className="v3-label">North Star · a goal, not a claim</p>
          <h3>{northStar}</h3>
          <p className="v3-muted">The agency is not launched yet. I am currently validating and building AI voice agents for small businesses.</p>
        </div>
      </section>

      <section id="skills" className="v3-section" data-testid="skills-section">
        <h2>Tech Stack</h2><p className="v3-sub">The tools behind<br />my work.</p>
        <div className="v3-stack">{stack.map(g => <div key={g.title} className="v3-card"><h3>{g.title}</h3><p className="v3-muted">{g.note}</p><ul>{g.skills.map(s => <li key={s}>{s}</li>)}</ul></div>)}</div>
      </section>

      <section id="projects" className="v3-section" data-testid="projects-section">
        <div className="v3-row-between"><h2>Featured <em>Projects</em></h2><a href="https://github.com/RJBOGA" target="_blank" rel="noreferrer" className="v3-link">GitHub <ArrowUpRight /></a></div>
        <p className="v3-muted">Open a folder to explore a project.</p>
        <div className="v3-folders" role="tablist" aria-label="Projects">
          {projects.map((p, i) => <button key={p.id} role="tab" aria-selected={p.id === openProject} className="v3-folder" onClick={() => setOpenProject(p.id)} data-testid={p.id}>
            <Folder /><span className="v3-label">0{i + 1}</span><strong>{p.name}</strong><span className="v3-muted">{p.tagline}</span>
          </button>)}
        </div>
        <article className="v3-card v3-project" role="tabpanel">
          <h3>{active.name}</h3>
          <div className="v3-tags">{active.techStack.map(t => <span key={t}>{t}</span>)}</div>
          {active.beats && <div className="v3-beats">
            <div><h4>The problem</h4><p>{active.beats.problem}</p></div>
            <div><h4>{activeIndex === 0 ? "What I am doing" : "What I did"}</h4><p>{clean(active.beats.did)}</p></div>
            <div><h4>Checkable result</h4><p>{active.beats.result === "TBD." ? "In progress. No published results yet." : active.beats.result}</p></div>
            <div><h4>Takeaway</h4><p>{active.beats.takeaway}</p></div>
          </div>}
          <div className="v3-links">{active.beats?.resultLinks?.map(l => <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="v3-link">{l.label} <ArrowUpRight /></a>)}</div>
        </article>
      </section>

      <section id="experience" className="v3-section" data-testid="experience-section">
        <h2>Experience</h2>
        {experience.map(j => <article key={j.id} className="v3-job">
          <div><p className="v3-label">{dateLabel(j.startDate)} – {dateLabel(j.endDate)}</p><h3>{j.company}</h3><p className="v3-muted">{j.location}</p></div>
          <div><h4>{j.role}{j.current && <span className="v3-chip">Current</span>}</h4><ul>{j.impact.map(l => <li key={l}>{clean(l)}</li>)}</ul></div>
        </article>)}
      </section>

      <section id="recognition" className="v3-section" data-testid="achievements-section">
        <h2>Recognition</h2>
        <div className="v3-recog">
          <figure className="v3-card"><img src={media.dsiPresenting} alt="Raju presenting at the Decision Sciences Institute conference" loading="lazy" /><figcaption><p className="v3-label">DSI · Published & presented</p><h3>Project Management for the Future</h3><p className="v3-muted">Co-authored and presented “Project Management for the Future: Leveraging Technology and Sustainability” alongside Dr. Vatsal Paghadal and Dr. Benjamin George.</p></figcaption></figure>
          <div className="v3-awards">{achievements.filter(a => a.id !== "ach-dsi").map(a => <div key={a.id} className="v3-card"><strong>{a.metric}</strong><h3>{clean(a.label)}</h3><p className="v3-muted">{clean(a.detail)}</p></div>)}</div>
        </div>
        <div className="v3-edu">{education.map(e => <div key={e.id}><h3>{e.institution}</h3><p className="v3-muted">{e.degree} · {e.field} · {e.location}</p></div>)}</div>
      </section>

      <section id="contact" className="v3-section v3-contact">
        <p className="v3-label">Contact</p>
        <h2>Let's talk AI Architecture.</h2>
        <a href={email} className="v3-btn">Email me to talk AI Architecture <ArrowUpRight /></a>
      </section>
    </main>

    <footer className="v3-footer">
      <div className="v3-footer-top">
        <div><p className="v3-footer-name">Raju.</p><p className="v3-footer-dim">Senior Software Engineer &<br />Applied AI builder.</p></div>
        <div><p className="v3-footer-dim">Explore</p><nav className="v3-footer-links" aria-label="Footer">{[...menuMain, ...menuMore].map(l => <a key={l.href} href={l.href}>{l.label}</a>)}</nav></div>
        <div><p className="v3-footer-dim">Get in touch</p><a href={email} className="v3-footer-mail">{personalInfo.email} <ArrowUpRight /></a><p className="v3-footer-dim v3-small">© {new Date().getFullYear()} {personalInfo.name}</p></div>
      </div>
      <div className="v3-footer-bye"><p>See you around.</p><a href="#top">Back to top <ArrowUp /></a></div>
      <p className="v3-footer-giant" aria-hidden="true">RAJU.</p>
      <p className="v3-footer-bar">Designed & built with care from INDIA.</p>
    </footer>
  </div>;
}
