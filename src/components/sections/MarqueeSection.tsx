const aiSkills = [
  "LLM Agents",
  "GenAI",
  "Prompt Engineering",
  "RAG",
  "Foundation Models",
  "LLMs",
  "VLMs",
  "Applied ML",
  "YOLO",
  "OpenCV",
  "Pandas",
  "NumPy",
];

export default function MarqueeSection() {
  const track = [...aiSkills, ...aiSkills];

  return (
    <section className="py-16 md:py-24 border-y border-[#f0f0f2] bg-white" aria-label="Skills marquee">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {track.map((item, i) => (
            <span
              key={i}
              className="font-display font-medium text-2xl md:text-4xl text-[#1d1d1f] tracking-tight flex items-center gap-12"
            >
              {item}
              <span className="text-[#a1a1a6]" aria-hidden>
                ●
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
