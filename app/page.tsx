"use client";

import { Container } from "@radix-ui/themes";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ParticleBg from "./components/utils/ParticleBg";
import Preloader from "./components/utils/Preloader";
import AboutSection from "./pages/About";
import EmailSection from "./pages/EmailSection";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Works from "./pages/Works";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <ParticleBg />
      <Container className=" mt-24 mx-auto px-12 py-4">
        <Hero />
      </Container>

      {/* <Container>
          <AchievementsSection />
        </Container> */}

      <AboutSection />

      <Works />

      <EmailSection />

      <Footer />
    </>
  );
}
