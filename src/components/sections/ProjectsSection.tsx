import { projects } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

export default function ProjectsSection() {
  if (projects.length === 0) return null;

  return (
    <SplitSection title="Tinkering" id="projects">
      <div className="space-y-16 md:space-y-20">
        {projects.map((project, index) => (
          <div key={project.id}>
            {index > 0 && <hr className="border-t border-foreground/15 mb-16 md:mb-20" />}
            <div className="space-y-3">
              <h3 className="text-large leading-tight">{project.name}</h3>
              <p className="text-body leading-relaxed mt-4">{project.description}</p>
              <p className="text-small mt-4 text-foreground/60">
                {project.techStack.join(" · ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SplitSection>
  );
}