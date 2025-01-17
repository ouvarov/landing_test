import { Roboto } from "next/font/google";

import { MarqueeHeader } from "@/components/MarqueeHeader";
import { Header } from "@/components/Header";
import { TrySection } from "@/components/TrySection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { WellnessSection } from "@/components/WellnessSection";
import { MarqueeSection } from "@/components/MarqueeSection";

import "@/styles/reset.css";
import { ScoopSection } from "@/components/ScoopSection";

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
      </main>
    </>
  );
}
