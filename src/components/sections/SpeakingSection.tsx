import { speaking } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

export default function SpeakingSection() {
  if (speaking.length === 0) return null;

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", { month: "short", year: "numeric" });

  const sorted = [...speaking].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <SplitSection title="Speaking" id="speaking">
      <div className="space-y-16 md:space-y-20">
        {sorted.map((talk, index) => (
          <div key={talk.id}>
            {index > 0 && <hr className="border-t border-foreground/15 mb-16 md:mb-20" />}
            <div className="space-y-3">
              <h3 className="text-large leading-tight">{talk.talk}</h3>
              <p className="text-small">
                {talk.event} · {formatDate(talk.date)} · {talk.location}
              </p>
              {talk.description && (
                <p className="text-body leading-relaxed mt-6">{talk.description}</p>
              )}
              {talk.media && (
                <div className="mt-8">
                  <img
                    src={talk.media}
                    alt={talk.talk}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SplitSection>
  );
}