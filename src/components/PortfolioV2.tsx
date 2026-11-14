import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, ArrowRight, Github, Linkedin, Mail, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { achievements, education, experience, media, personalInfo, projects, skillGroups, stats } from "@/data/portfolio-data";

const northStar = "By January 2027, I am running an AI automation agency with 3 paying clients generating $5K/month.";
const headline = "I bridge the gap between enterprise architecture and Applied AI.";
const clean = (text: string) => text.replace(/\s*—\s*/g, ". ");
const dateLabel = (value: string | null) => {
  if (!value) return "Present";
  const [year, month] = value.split("-").map(Number);
  return new Date(year, month - 1, 1).toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

function Opening() {
  const [visible, setVisible] = useState(() => !window.matchMedia("(prefers-reduced-motion: reduce)").matches && !sessionStorage.getItem("portfolio-v2-opening"));
  const dismiss = () => {
    sessionStorage.setItem("portfolio-v2-opening", "seen");
    setVisible(false);
  };
  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => {
      sessionStorage.setItem("portfolio-v2-opening", "seen");
      setVisible(false);
    }, 15000);
    return () => window.clearTimeout(timer);
  }, [visible]);
  useEffect(() => {
    if (!visible) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [visible]);
  if (!visible) return null;
  return <div className="v2-opening" role="dialog" aria-modal="true" aria-label="Raju B introduction">
    <div className="v2-opening-top"><span>RJ / PORTFOLIO</span><Button variant="outline" onClick={dismiss}>Skip <ArrowRight /></Button></div>
    <div className="v2-opening-copy"><p>Senior Software Engineer · Applied AI builder</p><h2>Raju B<span>.</span></h2><p>{headline}</p></div>
    <div className="v2-opening-progress" />
  </div>;
}

function SectionTitle({ number, label, title }: { number: string; label: string; title: string }) {
  return <div className="v2-section-heading"><p className="v2-kicker"><span>{number}</span> {label}</p><h2>{title}</h2></div>;
}

export default function PortfolioV2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const email = `mailto:${personalInfo.email}`;
  const links = [{ href: "#projects", label: "Selected work" }, { href: "#work", label: "Experience" }, { href: "#about", label: "About" }];
  return <div className="portfolio-v2">
    <a href="#main-content" className="v2-skip">Skip to content</a>
    <Opening />
    <header className="v2-header v2-container">
      <a href="#top" className="v2-wordmark" aria-label="Raju home">rj<span>.</span></a>
      <nav aria-label="Main navigation" className="v2-nav">{links.map(link => <Button asChild variant="link" key={link.href}><a href={link.href}>{link.label}</a></Button>)}</nav>
      <Button asChild variant="outline" className="v2-header-contact"><a href={email}>Let’s connect <ArrowUpRight /></a></Button>
      <Button variant="ghost" size="icon" className="v2-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      {menuOpen && <nav className="v2-mobile-nav" aria-label="Mobile navigation">{links.map(link => <Button asChild variant="link" key={link.href}><a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a></Button>)}<Button asChild><a href={email}>Email me <ArrowUpRight /></a></Button></nav>}
    </header>
    <main id="main-content">
      <section id="top" className="v2-hero v2-container" data-testid="hero-section">
        <div className="v2-hero-meta"><p><span className="v2-status-dot" /> Senior Software Engineer · RJ · Building Applied AI products</p><span>PORTFOLIO / V2</span></div>
        <div className="v2-hero-name"><h1>Raju B<span>.</span></h1><span className="v2-name-note">ENTERPRISE EXPERIENCE.<br />APPLIED AI AMBITION.</span></div>
        <div className="v2-hero-bottom"><h2>I bridge the gap between<br className="v2-desktop-break" /> enterprise architecture<br className="v2-desktop-break" /> and <span>Applied AI.</span></h2><div className="v2-hero-detail"><p>I am building toward launching a B2B AI automation agency. From shipping secure, mission-critical full-stack apps at Citi to building conversational AI products that solve real-world problems.</p><Button asChild size="lg" className="v2-email-button"><a href={email}>Email me to talk AI Architecture <ArrowUpRight /></a></Button><Button asChild variant="link" className="v2-view-work"><a href="#projects">Explore my work <ArrowDown /></a></Button></div></div>
        <div className="v2-hero-foot"><span>Currently at Citi</span><span>Building · 100x Applied AI Cohort</span><a href="#north-star" aria-label="Scroll to North Star"><ArrowDown size={20} /></a></div>
      </section>
      <section id="north-star" className="v2-north-star"><div className="v2-container v2-north-grid"><p className="v2-kicker">THE NORTH STAR<br /><span>A goal. Not a claim.</span></p><div><h2>{northStar}</h2><p>The agency is not launched yet. I am currently validating and building AI voice agents for small businesses.</p></div><ArrowUpRight className="v2-north-arrow" aria-hidden="true" /></div></section>
      <section id="projects" className="v2-container v2-section" data-testid="projects-section">
        <SectionTitle number="01" label="Selected work" title="Built. Building. Moving forward." />
        {projects.map((project, index) => <article className={`v2-project ${index === 0 ? "v2-project-featured" : ""}`} key={project.id} data-testid={project.id}>
          <div className="v2-project-intro"><span className="v2-project-number">0{index + 1}</span><p className="v2-kicker">{project.tagline}</p><h3>{project.name}</h3><div className="v2-tags">{project.techStack.map(skill => <span key={skill}>{skill}</span>)}</div>{project.beats?.resultLinks?.map(link => <Button asChild variant="link" key={link.url} className="v2-project-link"><a href={link.url} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight /></a></Button>)}</div>
          <div className="v2-project-beats">{project.beats && <><div><h4>Problem</h4><p>{project.beats.problem}</p></div><div><h4>{index === 0 ? "What I am doing" : "What I did"}</h4><p>{clean(project.beats.did)}</p></div><div><h4>Checkable result</h4><p>{project.beats.result === "TBD." ? "In progress. No published results yet." : project.beats.result}</p></div><div><h4>Takeaway</h4><p>{project.beats.takeaway}</p></div></>}</div>
        </article>)}
      </section>
      <section id="journey" className="v2-journey"><div className="v2-container"><SectionTitle number="02" label="Journey log" title="A new chapter in applied AI." /><div className="v2-journey-row"><p className="v2-kicker">CURRENTLY BUILDING</p><div><h3>AI Voice Agents</h3><p>Validating and architecting customer workflows as part of the 100x Applied AI Cohort.</p></div><span className="v2-in-progress">In progress <span className="v2-status-dot" /></span></div><div className="v2-journey-row"><p className="v2-kicker">14 NOVEMBER 2026</p><div><h3>Portfolio v2</h3><p>Enterprise experience and applied AI work, brought together.</p></div><span className="v2-journey-note">Updated as I build.</span></div></div></section>
      <section id="about" className="v2-container v2-section" data-testid="bio-section"><SectionTitle number="03" label="About" title="Engineer by trade. Builder by instinct." /><div className="v2-about-grid"><div className="v2-about-monogram" aria-label="RJ initials">RJ<span>.</span></div><div><p className="v2-bio-lead">{personalInfo.bioLead}</p><p className="v2-body">{clean(personalInfo.bio)}</p><div className="v2-stats">{stats.map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></div></div></section>
      <section id="work" className="v2-container v2-section v2-experience" data-testid="experience-section"><SectionTitle number="04" label="Experience" title="Where the code runs in production." />{experience.map(job => <article key={job.id} className="v2-job"><div><p className="v2-kicker">{dateLabel(job.startDate)} – {dateLabel(job.endDate)}</p><h3>{job.company}</h3><p className="v2-job-location">{job.location}</p></div><div><h4>{job.role}{job.current && <span className="v2-current">Current</span>}</h4><ul>{job.impact.map(line => <li key={line}>{clean(line)}</li>)}</ul></div></article>)}</section>
      <section className="v2-skills" data-testid="skills-section"><div className="v2-container"><SectionTitle number="05" label="Skills" title="The stack behind the systems." /><div className="v2-skills-grid">{skillGroups.map(group => <div className="v2-skill-group" key={group.id}><h3>{group.title}</h3><p>{group.skills.join(" / ")}</p></div>)}</div></div></section>
      <section className="v2-container v2-section" data-testid="achievements-section"><SectionTitle number="06" label="Recognition" title="Beyond the day job." /><div className="v2-recognition-grid"><figure className="v2-dsi"><img src={media.dsiPresenting} alt="Raju presenting at the Decision Sciences Institute conference" loading="lazy" /><figcaption><p className="v2-kicker">DSI / PUBLISHED & PRESENTED</p><h3>Project Management for the Future</h3><p>Co-authored and presented “Project Management for the Future: Leveraging Technology and Sustainability” alongside Dr. Vatsal Paghadal and Dr. Benjamin George.</p></figcaption></figure><div className="v2-awards">{achievements.filter(item => item.id !== "ach-dsi").map(item => <div key={item.id}><strong>{item.metric}</strong><h3>{clean(item.label)}</h3><p>{clean(item.detail)}</p></div>)}</div></div><div className="v2-education"><p className="v2-kicker">EDUCATION</p>{education.map(item => <div key={item.id}><h3>{item.institution}</h3><p>{item.degree} · {item.field}</p><span>{item.location}</span></div>)}</div></section>
      <section id="contact" className="v2-contact"><div className="v2-container"><p className="v2-kicker">07 / CONTACT</p><h2>Let’s talk<br />AI Architecture<span>.</span></h2><Button asChild size="lg" className="v2-contact-action"><a href={email}>Email me to talk AI Architecture <ArrowUpRight /></a></Button><div className="v2-contact-bottom"><a href={email} className="v2-contact-address"><Mail size={18} />{personalInfo.email}</a><div><Button asChild variant="link"><a href="https://linkedin.com/in/rjboga" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn <ArrowUpRight /></a></Button><Button asChild variant="link"><a href="https://github.com/RJBOGA" target="_blank" rel="noreferrer"><Github /> GitHub <ArrowUpRight /></a></Button></div></div></div></section>
    </main>
    <footer className="v2-footer v2-container"><p>© {new Date().getFullYear()} {personalInfo.name}</p><p>Designed & built with care from INDIA.</p><Button asChild variant="link"><a href="#top">Back to top <ArrowUpRight /></a></Button></footer>
  </div>;
}