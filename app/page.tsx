"use client";

import { Container, Flex, Heading } from "@radix-ui/themes";
import Hero from "./pages/Hero";
import ParticleBg from "./components/utils/ParticleBg";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HorizontalCard from "./components/HorizontalCard";
import Works from "./pages/Works";
import AboutSection from "./pages/About";
import AchievementsSection from "./pages/AchievementsSection";
import Footer from "./pages/Footer";
import EmailSection from "./pages/EmailSection";

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <ParticleBg />
          <Container className=" mt-24 mx-auto px-12 py-4">
            <Hero />
          </Container>
        </div>
        {/* <Container>
          <AchievementsSection />
        </Container> */}

        <AboutSection />

        <Works />

        <EmailSection />

        <Footer />
      </div>
    </div>
  );
}
