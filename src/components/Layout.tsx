import { ReactNode } from "react";
import Footer from "./Footer";
import SkipLink from "./SkipLink";
import LenisProvider from "@/lib/lenis-provider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LenisProvider>
      <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
        <SkipLink />
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    </LenisProvider>
  );
}
