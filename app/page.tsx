"use client";

import { Container, Flex, Heading } from "@radix-ui/themes";
import Hero from "./pages/Hero";
import ParticleBg from "./components/utils/ParticleBg";
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HorizontalCard from "./components/HorizontalCard";
import Works from "./pages/Works";
import AboutSection from "./pages/About";
import AchievementsSection from "./pages/AchievementsSection";
import Footer from "./pages/Footer";
import EmailSection from "./pages/EmailSection";
import Preloader from "./components/Preloader";
import NavBar from "./NavBar";

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
