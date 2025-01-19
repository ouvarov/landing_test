"use client";

import { Roboto } from "next/font/google";
import { useRef, useState } from "react";

import { Footer } from "@/components/Footer";
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
import { SalesSection } from "@/components/SalesSection";
import { COUNT_TABLES } from "@/constants";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(
    Number(localStorage.getItem(COUNT_TABLES)) || 0,
  );

  const scrollToElement = () => {
    if (targetRef.current) {
      targetRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const handleAddCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <>
      <main className={roboto.variable}>
        <MarqueeHeader />
        <Header count={count} />
        <TrySection scrollToElement={scrollToElement} />
        <FeaturedSection />
        <ReviewsSection />
        <BenefitsSection />
        <WellnessSection />
        <div ref={targetRef}>
          <SalesSection handleAddCount={handleAddCount} />
        </div>
        <MarqueeSection />
        <ScoopSection />
        <GroundedSection />
        <HowWeAreSection />
        <FAQSection />
        <AppSection />
        <Footer />
      </main>
    </>
  );
}
