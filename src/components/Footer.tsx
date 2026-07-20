import { personalInfo } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-12 border-t border-[#f0f0f2]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-label">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <p className="text-label text-[#a1a1a6]">Designed & built with care from INDIA.</p>
      </div>
    </footer>
  );
}
