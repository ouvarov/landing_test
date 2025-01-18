import { Roboto } from "next/font/google";

import { Header } from "@/components/Header";
import { AppSection } from "@/components/AppSection";
import { FAQSection } from "@/components/FAQSection";
import { TrySection } from "@/components/TrySection";
import { ScoopSection } from "@/components/ScoopSection";
import { MarqueeHeader } from "@/components/MarqueeHeader";
import { MarqueeSection } from "@/components/MarqueeSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { GroundedSection } from "@/components/GroundedSection";
import { HowWeAreSection } from "@/components/HowWeAreSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { WellnessSection } from "@/components/WellnessSection";

import "@/styles/reset.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function Home() {
  return (
    <>
      <main className={roboto.variable}>
        <MarqueeHeader />
        <Header />
        <TrySection />
        <FeaturedSection />
        <ReviewsSection />
        <BenefitsSection />
        <WellnessSection />
        {/*saleSection*/}
        <MarqueeSection />
        <ScoopSection />
        <GroundedSection />
        <HowWeAreSection />
        <FAQSection />
        <AppSection />
      </main>
    </>
  );
}
