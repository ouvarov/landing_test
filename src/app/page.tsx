import { MarqueeHeader } from "@/components/MarqueeHeader";
import Head from "next/head";

import { Header } from "@/components/Header";
import { TrySection } from "@/components/TrySection";

import "@/styles/reset.css";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <MarqueeHeader />
        <Header />
        <TrySection />
      </main>
    </>
  );
}
