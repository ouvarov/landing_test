import { MarqueeHeader } from "@/components/MarqueeHeader";
import { Header } from "@/components/Header";
import { TrySection } from "@/components/TrySection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { Roboto } from "next/font/google";

import "@/styles/reset.css";

// Move the Roboto font loader to the module scope
const roboto = Roboto({
  subsets: ["latin"], // Include the subset(s) you need
  weight: ["400", "700"], // Specify the font weights
  variable: "--font-roboto", // Add a CSS variable for custom usage
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
      </main>
    </>
  );
}
